/**
 * 只读审计脚本：找出被"标题锚点"抓取故障误标为 In Progress 的页面。
 *
 * 背景：Notion 帮助站改版后把 H3 标题文字包进 <a> 锚点，而 src/sources/article.ts
 * 的标题解包逻辑只处理 H2，导致每篇文章的每个 H3 都变成 `### [标题](锚点链接)`。
 * 一次故障同步（ed285d1，2026-10-22）让 135 篇文章的 hash 全部变化，同步逻辑随即
 * 把对应 Backend / Frontend 页面的 Status 推成 In Progress，但英文正文其实一个字没改。
 *
 * 四路独立证据交叉判定：
 *   L1  git 历史：该文件最近一次变动是否只有标题行（纯噪声），以及最近一次实质变动日期
 *   L2  Backend Content 是否含标题锚点（故障指纹已永久写入 Notion，不用翻 git 也能筛）
 *   L3  Frontend 正文中文占比（译文是否真的存在）
 *   L4  时序：Frontend 的 last_edited_time 就是"翻牌"时间（同步写属性才会改它），
 *       与噪声提交日期、最近实质变更日期对齐即可钉死是哪次变更导致的
 *
 * 附加保险：若 Frontend 页面的最后编辑者是人而非机器人，说明正在翻译，一律不自动判定。
 *
 * 本脚本 **绝不写入 Notion**，只产出 reports/ 下的 CSV + Markdown。
 *
 * 用法：bun run audit
 */

import {
  collectPaginatedAPI,
  isFullPage,
  type BlockObjectResponse,
  type PageObjectResponse
} from '@notionhq/client'
import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import config from '@/config'
import { notionClient } from '@/notion/client'
import {
  BACKEND_CONTENT_PROPERTY,
  BACKEND_IDENTIFIER_PROPERTY,
  BACKEND_STATUS_PROPERTY,
  BACKEND_TITLE_PROPERTY,
  FRONTEND_DESCRIPTION_PROPERTY,
  FRONTEND_IDENTIFIER_PROPERTY,
  FRONTEND_STATUS_PROPERTY,
  FRONTEND_TITLE_PROPERTY,
  getPlainTextPropertyValue
} from '@/notion/properties'

// ---------------------------------------------------------------------------
// 常量
// ---------------------------------------------------------------------------

const REPO_ROOT = fileURLToPath(new URL('../', import.meta.url))
const CONTENT_DIR = 'content'
const REPORTS_DIR = 'reports'

/** 一次提交改动多少个 content 文件以上才怀疑是批量故障（正常同步只碰个位数） */
const NOISE_COMMIT_FILE_THRESHOLD = 15

/** 逐文件分析 git 历史时最多回溯多少个提交 */
const GIT_HISTORY_DEPTH = 80

const CJK_STRONG = 0.15
const CJK_WEAK = 0.05

/**
 * 若最近一次实质变更发生在噪声提交前这么多天以内，则无法排除 In Progress
 * 本来就来自那次真实变更，保守降级为 REVIEW。
 */
const RECHECK_WINDOW_DAYS = 3

const IN_PROGRESS = 'In Progress'

// ---------------------------------------------------------------------------
// 类型
// ---------------------------------------------------------------------------

type ItemType = 'article' | 'category'

type Verdict =
  | 'FALSE_POSITIVE'
  | 'LIKELY_FALSE_POSITIVE'
  | 'REVIEW'
  | 'REAL_CHANGE'
  | 'UNTRANSLATED'
  | 'NO_FRONTEND'
  | 'NO_LOCAL_FILE'

type NoiseScanResult = {
  /** commit hash -> 日期 */
  noiseCommits: Map<string, string>
  /** 落在噪声提交里的 content 文件路径 */
  noiseFiles: Set<string>
  /** 噪声提交的最晚日期 */
  latestNoiseDate: string | null
}

type FileHistory = {
  mostRecentChangeIsHeadingOnly: boolean
  lastRealChangeDate: string | null
  lastAnyChangeDate: string | null
  realChangeCount: number
}

type PageRecord = {
  identifier: string
  type: ItemType
  title: string
  backendPageId: string
  frontendPageId: string | null
  backendStatus: string | null
  frontendStatus: string | null
  backendContent: string
  backendLastEdited: string | null
  frontendLastEdited: string | null
  frontendLastEditedBy: string | null
}

type AuditRow = {
  identifier: string
  type: ItemType
  title: string
  backend_status: string
  frontend_status: string
  verdict: Verdict
  /** L2：Backend Content 里标题锚点出现次数 */
  anchor_headings: number
  /** L3：中文占比 */
  cjk_ratio: string
  cjk_chars: number
  /** L1a：落在纯噪声提交里 */
  in_noise_commit: boolean
  /** L1b：该文件最近一次变动只有标题行 */
  recent_heading_only: boolean
  /** L4：翻牌日期 >= 噪声提交日期，且无更晚的实质变更 */
  flip_matches_noise: boolean
  flip_date: string
  last_real_change: string
  last_any_change: string
  real_change_count: number
  /** 最后编辑者是否为人（正在翻译，不自动判定） */
  human_edited_last: boolean
  note: string
  frontend_page_id: string
  backend_page_id: string
}

// ---------------------------------------------------------------------------
// 通用工具
// ---------------------------------------------------------------------------

async function runGit(args: string[]) {
  const proc = Bun.spawn(['git', ...args], {
    cwd: REPO_ROOT,
    stdout: 'pipe',
    stderr: 'pipe'
  })
  const [out, code] = await Promise.all([new Response(proc.stdout).text(), proc.exited])
  return { out, code }
}

async function mapWithConcurrency<T, R>(
  items: T[],
  concurrency: number,
  handler: (item: T) => Promise<R>
): Promise<R[]> {
  const results: R[] = new Array(items.length)
  let cursor = 0

  const workers = Array.from({ length: Math.max(Math.min(concurrency, items.length), 1) }, async () => {
    while (true) {
      const index = cursor++
      if (index >= items.length) {
        return
      }
      results[index] = await handler(items[index] as T)
    }
  })

  await Promise.all(workers)
  return results
}

function mapIdentifierToContentFile(identifier: string) {
  return `${CONTENT_DIR}/${identifier}.md`
}

function isHeadingLine(line: string) {
  return /^#{1,6}\s/.test(line)
}

// ---------------------------------------------------------------------------
// L1：git 历史
// ---------------------------------------------------------------------------

/**
 * 扫描全部 content 提交，找出"纯噪声提交"：
 * 一次改动 >= NOISE_COMMIT_FILE_THRESHOLD 个文件，且所有 +/- 行都只是标题行。
 */
async function detectNoiseCommits(): Promise<NoiseScanResult> {
  const result: NoiseScanResult = {
    noiseCommits: new Map(),
    noiseFiles: new Set(),
    latestNoiseDate: null
  }

  const { out, code } = await runGit([
    'log',
    '--format=@@COMMIT@@%H|%ad',
    '--date=short',
    '--name-only',
    '--',
    CONTENT_DIR
  ])

  if (code !== 0) {
    console.warn('[L1] git log 失败，跳过噪声提交检测')
    return result
  }

  const commits: { hash: string; date: string; files: string[] }[] = []
  let current: { hash: string; date: string; files: string[] } | null = null

  for (const line of out.split('\n')) {
    if (line.startsWith('@@COMMIT@@')) {
      const [hash = '', date = ''] = line.replace('@@COMMIT@@', '').split('|')
      current = { hash, date, files: [] }
      commits.push(current)
      continue
    }
    if (current && line.startsWith(`${CONTENT_DIR}/`)) {
      current.files.push(line.trim())
    }
  }

  const candidates = commits.filter(commit => commit.files.length >= NOISE_COMMIT_FILE_THRESHOLD)

  for (const commit of candidates) {
    const patch = await runGit(['show', commit.hash, '--', CONTENT_DIR])
    if (patch.code !== 0) {
      continue
    }

    const substantive = patch.out
      .split('\n')
      .filter(line => line.startsWith('+') || line.startsWith('-'))
      .filter(line => !line.startsWith('+++') && !line.startsWith('---'))
      .map(line => line.slice(1))
      .filter(line => !isHeadingLine(line))

    if (substantive.length === 0) {
      result.noiseCommits.set(commit.hash, commit.date)
      commit.files.forEach(file => result.noiseFiles.add(file))
      if (!result.latestNoiseDate || commit.date > result.latestNoiseDate) {
        result.latestNoiseDate = commit.date
      }
    }
  }

  return result
}

/** 解析单个 content 文件的补丁历史，判断最近一次变动是不是纯标题噪声 */
async function analyzeFileHistory(filePath: string): Promise<FileHistory> {
  const empty: FileHistory = {
    mostRecentChangeIsHeadingOnly: false,
    lastRealChangeDate: null,
    lastAnyChangeDate: null,
    realChangeCount: 0
  }

  const { out, code } = await runGit([
    'log',
    '-p',
    `-n${GIT_HISTORY_DEPTH}`,
    '--format=@@COMMIT@@%H|%ad',
    '--date=short',
    '--',
    filePath
  ])

  if (code !== 0 || !out.trim()) {
    return empty
  }

  const blocks: { date: string; lines: string[] }[] = []
  let block: { date: string; lines: string[] } | null = null

  for (const line of out.split('\n')) {
    if (line.startsWith('@@COMMIT@@')) {
      const date = line.replace('@@COMMIT@@', '').split('|')[1] ?? ''
      block = { date, lines: [] }
      blocks.push(block)
      continue
    }
    if (!block) {
      continue
    }
    if (!line.startsWith('+') && !line.startsWith('-')) {
      continue
    }
    if (line.startsWith('+++') || line.startsWith('---')) {
      continue
    }
    block.lines.push(line.slice(1))
  }

  const history = { ...empty }
  let firstSeen = false

  for (const item of blocks) {
    if (item.lines.length === 0) {
      continue
    }

    if (!firstSeen) {
      firstSeen = true
      history.lastAnyChangeDate = item.date
      history.mostRecentChangeIsHeadingOnly = item.lines.every(isHeadingLine)
    }

    if (item.lines.some(line => !isHeadingLine(line))) {
      history.realChangeCount += 1
      if (history.lastRealChangeDate === null) {
        history.lastRealChangeDate = item.date
      }
    }
  }

  return history
}

// ---------------------------------------------------------------------------
// L2 / L3：Notion 侧证据
// ---------------------------------------------------------------------------

function countAnchorHeadings(content: string) {
  if (!content) {
    return 0
  }
  return content.match(/^#{1,6}\s+\[[^\]\n]+\]\([^)\s]*#[^)\s]*\)\s*$/gm)?.length ?? 0
}

const CJK_PATTERN = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/

function cjkStats(text: string) {
  let cjk = 0
  let total = 0

  for (const char of text) {
    if (/\s/.test(char)) {
      continue
    }
    total += 1
    if (CJK_PATTERN.test(char)) {
      cjk += 1
    }
  }

  return { cjk, total, ratio: total === 0 ? 0 : cjk / total }
}

function richTextToPlain(value: unknown): string {
  if (!Array.isArray(value)) {
    return ''
  }
  return value
    .map(item => {
      if (item && typeof item === 'object' && 'plain_text' in item) {
        return String((item as { plain_text?: unknown }).plain_text ?? '')
      }
      return ''
    })
    .join('')
}

function extractBlockText(block: BlockObjectResponse) {
  const payload = (block as unknown as Record<string, unknown>)[block.type]
  if (!payload || typeof payload !== 'object') {
    return ''
  }

  const record = payload as Record<string, unknown>
  const parts = [richTextToPlain(record.rich_text), richTextToPlain(record.caption)]

  if (Array.isArray(record.cells)) {
    for (const cell of record.cells) {
      parts.push(richTextToPlain(cell))
    }
  }

  return parts.filter(Boolean).join(' ')
}

/** 抓 Frontend 页面顶层正文纯文本（不递归，够用且省 API 调用） */
async function fetchFrontendBodyText(pageId: string) {
  try {
    const blocks = await collectPaginatedAPI(notionClient.blocks.children.list, {
      block_id: pageId
    })
    return blocks
      .filter((block): block is BlockObjectResponse => 'type' in block)
      .map(extractBlockText)
      .join('\n')
  } catch (error) {
    console.warn(`[L3] 读取 Frontend 正文失败 ${pageId}:`, error)
    return ''
  }
}

async function fetchPages(dataSourceId: string) {
  const results = await collectPaginatedAPI(notionClient.dataSources.query, {
    data_source_id: dataSourceId
  })
  return results.filter((result): result is PageObjectResponse => isFullPage(result))
}

function toDate(iso: string | null | undefined) {
  return iso ? iso.slice(0, 10) : ''
}

function daysBetween(earlier: string, later: string) {
  const a = new Date(`${earlier}T00:00:00Z`).getTime()
  const b = new Date(`${later}T00:00:00Z`).getTime()
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return Number.POSITIVE_INFINITY
  }
  return Math.round((b - a) / 86_400_000)
}

// ---------------------------------------------------------------------------
// 主流程
// ---------------------------------------------------------------------------

async function main() {
  console.log('=== Notion 文档状态审计（只读）===\n')

  console.log('[1/6] 读取集成身份...')
  const me = await notionClient.users.me({})
  const botId = me.id
  console.log(`      bot user id: ${botId}`)

  console.log('[2/6] 读取 Backend 数据源...')
  const backendPages = await fetchPages(config.backendDatasourceId!)
  console.log(`      ${backendPages.length} 条`)

  console.log('[3/6] 读取 Frontend 数据源...')
  const frontendPages = await fetchPages(config.frontendDatasourceId!)
  console.log(`      ${frontendPages.length} 条`)

  const frontendByIdentifier = new Map<string, PageObjectResponse>()
  for (const page of frontendPages) {
    const identifier = getPlainTextPropertyValue(page, FRONTEND_IDENTIFIER_PROPERTY)
    if (identifier) {
      frontendByIdentifier.set(identifier, page)
    }
  }

  const records: PageRecord[] = []

  for (const page of backendPages) {
    const identifier = getPlainTextPropertyValue(page, BACKEND_IDENTIFIER_PROPERTY)
    if (!identifier) {
      continue
    }

    const frontendPage = frontendByIdentifier.get(identifier) ?? null
    const backendStatus = getPlainTextPropertyValue(page, BACKEND_STATUS_PROPERTY) ?? null
    const frontendStatus = frontendPage
      ? (getPlainTextPropertyValue(frontendPage, FRONTEND_STATUS_PROPERTY) ?? null)
      : null

    records.push({
      identifier,
      type: identifier.startsWith('category:') ? 'category' : 'article',
      title:
        getPlainTextPropertyValue(page, BACKEND_TITLE_PROPERTY) ??
        getPlainTextPropertyValue(frontendPage ?? page, FRONTEND_TITLE_PROPERTY) ??
        identifier,
      backendPageId: page.id,
      frontendPageId: frontendPage?.id ?? null,
      backendStatus,
      frontendStatus,
      backendContent: getPlainTextPropertyValue(page, BACKEND_CONTENT_PROPERTY) ?? '',
      backendLastEdited: page.last_edited_time ?? null,
      frontendLastEdited: frontendPage?.last_edited_time ?? null,
      frontendLastEditedBy: frontendPage?.last_edited_by?.id ?? null
    })
  }

  const inProgress = records.filter(
    record => record.backendStatus === IN_PROGRESS || record.frontendStatus === IN_PROGRESS
  )

  console.log(
    `\n      共 ${records.length} 条记录，其中任一状态为 ${IN_PROGRESS} 的：${inProgress.length} 条`
  )

  console.log('\n[4/6] 扫描 git 历史，识别纯噪声提交...')
  const noise = await detectNoiseCommits()
  console.log(`      识别到 ${noise.noiseCommits.size} 个纯噪声提交，涉及 ${noise.noiseFiles.size} 个文件`)
  for (const [hash, date] of noise.noiseCommits) {
    console.log(`        - ${hash.slice(0, 7)} ${date}`)
  }

  console.log('\n[5/6] 逐条收集证据...')
  let done = 0

  const rows = await mapWithConcurrency(inProgress, 4, async record => {
    const filePath = mapIdentifierToContentFile(record.identifier)
    const inNoiseCommit = noise.noiseFiles.has(filePath)
    const history = await analyzeFileHistory(filePath)
    const anchorCount = countAnchorHeadings(record.backendContent)

    const frontendPage = frontendByIdentifier.get(record.identifier)
    const headerText = frontendPage
      ? `${getPlainTextPropertyValue(frontendPage, FRONTEND_TITLE_PROPERTY) ?? ''}\n${
          getPlainTextPropertyValue(frontendPage, FRONTEND_DESCRIPTION_PROPERTY) ?? ''
        }`
      : ''
    const bodyText = record.frontendPageId
      ? await fetchFrontendBodyText(record.frontendPageId)
      : ''

    const { cjk, ratio } = cjkStats(`${headerText}\n${bodyText}`)

    const hasLocalFile = history.lastAnyChangeDate !== null
    const flipDate = toDate(record.frontendLastEdited)
    const humanEditedLast = Boolean(
      record.frontendLastEditedBy && record.frontendLastEditedBy !== botId
    )

    // L4：翻牌时间不早于噪声提交，且没有更晚的实质变更 → 这次翻牌是噪声造成的
    const flipMatchesNoise = Boolean(
      noise.latestNoiseDate &&
        flipDate &&
        flipDate >= noise.latestNoiseDate &&
        (history.lastRealChangeDate === null || history.lastRealChangeDate < noise.latestNoiseDate)
    )

    // 最近实质变更紧贴噪声提交，无法排除 In Progress 本来就来自那次真实变更
    const nearNoiseRealChange = Boolean(
      noise.latestNoiseDate &&
        history.lastRealChangeDate &&
        daysBetween(history.lastRealChangeDate, noise.latestNoiseDate) >= 0 &&
        daysBetween(history.lastRealChangeDate, noise.latestNoiseDate) <= RECHECK_WINDOW_DAYS
    )

    let verdict: Verdict
    let note = ''

    if (record.type === 'article' && !record.frontendPageId) {
      verdict = 'NO_FRONTEND'
      note = '前端页面缺失，无法判断译文状态'
    } else if (!hasLocalFile) {
      verdict = 'NO_LOCAL_FILE'
      note = 'content/ 下无对应文件，无法回溯历史'
    } else if (ratio < CJK_WEAK) {
      verdict = 'UNTRANSLATED'
      note = '前端正文几乎无中文，尚未翻译，In Progress 属实'
    } else if (!history.mostRecentChangeIsHeadingOnly) {
      verdict = 'REAL_CHANGE'
      note = `最近一次变动含正文改动（${history.lastRealChangeDate ?? '未知'}），In Progress 可能属实`
    } else if (humanEditedLast) {
      verdict = 'REVIEW'
      note = 'Frontend 最后编辑者是人，可能正在翻译，不自动判定'
    } else if (nearNoiseRealChange) {
      verdict = 'REVIEW'
      note = `最近实质变更距故障日太近（${history.lastRealChangeDate}），无法排除 In Progress 来自该次变更`
    } else if (ratio >= CJK_STRONG && (flipMatchesNoise || inNoiseCommit)) {
      verdict = 'FALSE_POSITIVE'
      note = `最近一次变动纯为标题锚点噪声${
        flipMatchesNoise ? `（翻牌于 ${flipDate}）` : ''
      }，且前端正文已是中文`
    } else if (ratio >= CJK_STRONG) {
      verdict = 'LIKELY_FALSE_POSITIVE'
      note = '最近一次变动为标题噪声且译文存在，但时序对不上噪声提交日期'
    } else {
      verdict = 'REVIEW'
      note = '信号不足，建议人工确认'
    }

    done += 1
    process.stdout.write(`\r      ${done}/${inProgress.length}`)

    return {
      identifier: record.identifier,
      type: record.type,
      title: record.title,
      backend_status: record.backendStatus ?? '',
      frontend_status: record.frontendStatus ?? '',
      verdict,
      anchor_headings: anchorCount,
      cjk_ratio: ratio.toFixed(4),
      cjk_chars: cjk,
      in_noise_commit: inNoiseCommit,
      recent_heading_only: history.mostRecentChangeIsHeadingOnly,
      flip_matches_noise: flipMatchesNoise,
      flip_date: flipDate,
      last_real_change: history.lastRealChangeDate ?? '',
      last_any_change: history.lastAnyChangeDate ?? '',
      real_change_count: history.realChangeCount,
      human_edited_last: humanEditedLast,
      note,
      frontend_page_id: record.frontendPageId ?? '',
      backend_page_id: record.backendPageId
    } satisfies AuditRow
  })

  process.stdout.write('\r' + ' '.repeat(40) + '\r')

  console.log('\n[6/6] 生成报告...')
  await writeReports(rows, noise)
  summarize(rows)
}

// ---------------------------------------------------------------------------
// 输出
// ---------------------------------------------------------------------------

function csvEscape(value: string | number | boolean) {
  const text = String(value)
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text
}

const CSV_COLUMNS: (keyof AuditRow)[] = [
  'identifier',
  'type',
  'title',
  'verdict',
  'backend_status',
  'frontend_status',
  'cjk_ratio',
  'cjk_chars',
  'anchor_headings',
  'in_noise_commit',
  'recent_heading_only',
  'flip_matches_noise',
  'flip_date',
  'last_real_change',
  'last_any_change',
  'real_change_count',
  'human_edited_last',
  'note',
  'frontend_page_id',
  'backend_page_id'
]

async function writeReports(rows: AuditRow[], noise: NoiseScanResult) {
  mkdirSync(`${REPO_ROOT}${REPORTS_DIR}`, { recursive: true })

  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const csvPath = `${REPORTS_DIR}/audit-status-${stamp}.csv`
  const mdPath = `${REPORTS_DIR}/audit-status-${stamp}.md`

  const header = CSV_COLUMNS.join(',')
  const body = rows.map(row => CSV_COLUMNS.map(column => csvEscape(row[column])).join(',')).join('\n')

  await Bun.write(csvPath, `${header}\n${body}\n`)
  await Bun.write(mdPath, buildMarkdown(rows, noise, stamp))

  console.log(`      CSV: ${csvPath}`)
  console.log(`      MD : ${mdPath}`)
}

function buildMarkdown(rows: AuditRow[], noise: NoiseScanResult, stamp: string) {
  const pick = (verdict: Verdict) => rows.filter(row => row.verdict === verdict)

  const falsePositive = pick('FALSE_POSITIVE')
  const likely = pick('LIKELY_FALSE_POSITIVE')
  const review = pick('REVIEW')
  const realChange = pick('REAL_CHANGE')
  const untranslated = pick('UNTRANSLATED')
  const noLocalFile = pick('NO_LOCAL_FILE')

  const table = (items: AuditRow[]) => {
    if (items.length === 0) {
      return ['_无_', '']
    }
    const out = [
      '| Identifier | 标题 | Backend | Frontend | 中文 | 锚点 | 翻牌日 | 最近实质变动 | 备注 |',
      '| --- | --- | --- | --- | --- | --- | --- | --- | --- |'
    ]
    for (const row of items) {
      out.push(
        `| \`${row.identifier}\` | ${row.title.replaceAll('|', '\\|')} | ${row.backend_status || '-'} | ${
          row.frontend_status || '-'
        } | ${(Number(row.cjk_ratio) * 100).toFixed(0)}% | ${row.anchor_headings} | ${
          row.flip_date || '-'
        } | ${row.last_real_change || '-'} | ${row.note} |`
      )
    }
    out.push('')
    return out
  }

  const lines: string[] = []

  lines.push('# Notion 文档状态审计报告')
  lines.push('')
  lines.push(`生成时间：${stamp}`)
  lines.push('')
  lines.push('## 概览')
  lines.push('')
  lines.push(`审计对象：Backend 或 Frontend 状态为 \`In Progress\` 的记录，共 **${rows.length}** 条。`)
  lines.push('')
  lines.push('| 判定 | 数量 | 建议动作 |')
  lines.push('| --- | --- | --- |')
  lines.push(`| \`FALSE_POSITIVE\` | **${falsePositive.length}** | 改回 Done |`)
  lines.push(`| \`LIKELY_FALSE_POSITIVE\` | ${likely.length} | 人工确认后改回 Done |`)
  lines.push(`| \`REVIEW\` | ${review.length} | 人工判断 |`)
  lines.push(`| \`REAL_CHANGE\` | ${realChange.length} | 保持 In Progress |`)
  lines.push(`| \`UNTRANSLATED\` | ${untranslated.length} | 保持 In Progress |`)
  lines.push(`| \`NO_LOCAL_FILE\` | ${noLocalFile.length} | 人工确认 |`)
  lines.push('')

  lines.push('## 判定依据')
  lines.push('')
  lines.push('四路独立证据：')
  lines.push('')
  lines.push('1. **L1a** `in_noise_commit` — 该文件落在"纯噪声提交"里（一次改 >= 15 个文件且全部只改标题行）')
  lines.push('2. **L1b** `recent_heading_only` — 该文件最近一次变动只有标题行')
  lines.push('3. **L3** `cjk_ratio` — Frontend 正文中文占比（判断译文是否真的存在）')
  lines.push('4. **L4** `flip_matches_noise` — Frontend `last_edited_time` 即"翻牌"时间，不早于噪声提交且无更晚实质变更')
  lines.push('')
  lines.push('判定顺序（先命中先返回）：')
  lines.push('')
  lines.push('```')
  lines.push('无 Frontend 页            -> NO_FRONTEND')
  lines.push('无本地 content 文件       -> NO_LOCAL_FILE')
  lines.push('中文占比 < 5%             -> UNTRANSLATED      （没翻译过，In Progress 属实）')
  lines.push('最近变动含正文改动         -> REAL_CHANGE       （内容真变了，In Progress 属实）')
  lines.push('最后编辑者是人            -> REVIEW            （正在翻译，不动）')
  lines.push('中文 > 15% 且时序对得上    -> FALSE_POSITIVE')
  lines.push('中文 > 15% 但时序对不上    -> LIKELY_FALSE_POSITIVE')
  lines.push('其余                      -> REVIEW')
  lines.push('```')
  lines.push('')

  lines.push(`## FALSE_POSITIVE — 建议改回 Done（${falsePositive.length} 条）`)
  lines.push('')
  lines.push(...table(falsePositive))
  lines.push(`## LIKELY_FALSE_POSITIVE（${likely.length} 条）`)
  lines.push('')
  lines.push(...table(likely))
  lines.push(`## REVIEW（${review.length} 条）`)
  lines.push('')
  lines.push(...table(review))
  lines.push(`## REAL_CHANGE — 保持 In Progress（${realChange.length} 条）`)
  lines.push('')
  lines.push(...table(realChange))
  lines.push(`## UNTRANSLATED — 保持 In Progress（${untranslated.length} 条）`)
  lines.push('')
  lines.push(...table(untranslated))
  lines.push(`## NO_LOCAL_FILE（${noLocalFile.length} 条）`)
  lines.push('')
  lines.push(...table(noLocalFile))

  lines.push('## 附：修复顺序提醒')
  lines.push('')
  lines.push(
    '`src/sources/article.ts` 的标题解包只处理 `H2`，H3/H4 未覆盖，故障仍在。' +
      '若在状态重置之后再修这个 bug，下一轮同步会把 `### [标题](锚点)` 还原成 `### 标题`，' +
      'hash 再次变化，这批页面会被**再翻一次**成 In Progress。'
  )
  lines.push('')
  lines.push('因此顺序应为：**先完成手头翻译 → 修 bug → 跑一次同步让 hash 稳定 → 最后批量重置状态**，或者改 bug 时同步改写 Backend 的 `Hash` 字段对齐干净版本。')
  lines.push('')

  lines.push('## 附：噪声提交清单')
  lines.push('')
  if (noise.noiseCommits.size === 0) {
    lines.push('_无_')
  } else {
    lines.push('| Commit | 日期 |')
    lines.push('| --- | --- |')
    for (const [hash, date] of noise.noiseCommits) {
      lines.push(`| \`${hash.slice(0, 7)}\` | ${date} |`)
    }
  }
  lines.push('')

  return lines.join('\n')
}

function summarize(rows: AuditRow[]) {
  const count = (verdict: Verdict) => rows.filter(row => row.verdict === verdict).length

  console.log('\n=== 审计结果 ===')
  console.log(`  总数                : ${rows.length}`)
  console.log(`  建议改回 Done（高）  : ${count('FALSE_POSITIVE')}`)
  console.log(`  疑似误标（中）       : ${count('LIKELY_FALSE_POSITIVE')}`)
  console.log(`  需人工判断          : ${count('REVIEW')}`)
  console.log(`  真实变更（勿动）     : ${count('REAL_CHANGE')}`)
  console.log(`  未翻译（勿动）       : ${count('UNTRANSLATED')}`)
  console.log(`  无本地文件          : ${count('NO_LOCAL_FILE')}`)
  console.log('\n本脚本未写入任何 Notion 数据。')
}

await main().catch(error => {
  console.error('\n审计失败：', error)
  process.exit(1)
})
