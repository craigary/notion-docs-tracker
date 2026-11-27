/**
 * 只读审计脚本：找出被抓取噪声误标为 In Progress 的页面。
 *
 * 背景（两波噪声，同一个根源：抓取产物里混入了不稳定的链接形态）：
 *   1. 2026-10-22（ed285d1）：Notion 帮助站把 H3 标题包进自链接，
 *      `### **标题**` 一夜之间变成 `### [**标题**](锚点链接)`，135 篇 hash 齐变。
 *   2. 2026-11-25 起：标题自链接的 href 里多了每次抓取都会变的 `_ck` 参数
 *      （另有 `_gl`、`g-exp`），hash 每次同步必变，前后端状态被反复误翻。
 * 2026-11-26 已修复抓取（9b0d666：H3/H4 标题自链接拆为纯文本；
 * normalizeNotionUrl 剥离 /help/ 链接上的易变参数），并跑过一轮清理同步。
 *
 * 本版判定核心（替代旧版的"标题行启发式"）：
 *   L1  归一化 git 历史：把每个历史版本的内容先归一化再比较——
 *       剥离 `_ck`/`_gl`/`g-exp` 参数、把标题自链接还原成标题文字、
 *       解码数字 HTML 实体、忽略空行与行尾空白。归一化后仍有差异，
 *       才算"实质变更"。由此得到每个文件可复核的最后一次实质变更
 *       （提交 + 日期），以及其后每一次变动均为噪声的事实。
 *   L2  Backend Content 里标题锚点出现次数（旧指纹，清理后应为 0，保留作参考）
 *   L3  Frontend 正文中文占比（译文是否真的存在）
 *   L4  时序：Frontend 的 last_edited_time 即"翻牌"时间，与最后一次
 *       实质变更日期对齐，判断这次 In Progress 是不是噪声翻的。
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

/** 逐文件回溯 git 历史时最多检查多少个提交 */
const GIT_HISTORY_DEPTH = 60

/** 附录里"批量噪声提交"的门槛：同一次提交对多少个文件是纯噪声 */
const NOISE_COMMIT_FILE_THRESHOLD = 15

const CJK_STRONG = 0.15
const CJK_WEAK = 0.05

/**
 * 若最近一次实质变更发生在翻牌日之前这么多天以内，则无法排除 In Progress
 * 本来就来自那次真实变更，保守降级。
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

type FileHistory = {
  /** 最近一次变动是否为纯噪声（归一化后无差异） */
  mostRecentChangeIsNoise: boolean
  /** 最后一次实质变更日期（归一化后仍有差异） */
  lastRealChangeDate: string | null
  /** 最后一次实质变更的提交 */
  lastRealChangeCommit: string | null
  /** 最后一次变动的日期（不论实质与否） */
  lastAnyChangeDate: string | null
  /** 最后一次实质变更之后的纯噪声变动次数 */
  noiseChangeCount: number
  /** 最后一次纯噪声变动的日期 */
  lastNoiseChangeDate: string | null
  /** 第一次纯噪声变动的日期（最后一次实质变更之后） */
  firstNoiseChangeDate: string | null
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
  /** L1：该文件在最后一次实质变更之后是否有纯噪声变动 */
  in_noise_commit: boolean
  /** L1：该文件最近一次变动是否为纯噪声 */
  recent_heading_only: boolean
  /** L4：翻牌时间落在噪声变动区间内，且其前没有未处理的实质变更 */
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
  /** 新证据列：最后一次实质变更的提交（短 hash） */
  last_real_change_commit: string
  /** 新证据列：最后一次实质变更之后的纯噪声变动次数 */
  noise_change_count: number
  /** 新证据列：最后一次纯噪声变动日期 */
  last_noise_change: string
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

function identifierToSlug(identifier: string) {
  return identifier.split(':').slice(1).join(':')
}

function identifierToSelfPath(identifier: string) {
  const slug = identifierToSlug(identifier)
  return identifier.startsWith('category:') ? `help/category/${slug}` : `help/${slug}`
}

// ---------------------------------------------------------------------------
// L1：归一化内容比较
// ---------------------------------------------------------------------------

const VOLATILE_PARAMS = ['_ck', '_gl', 'g-exp']

/** 剥离 URL 查询串里的易变参数，其余部分（含 #锚点）原样保留 */
function stripVolatileParams(text: string) {
  let out = text
  for (const param of VOLATILE_PARAMS) {
    out = out.replace(new RegExp(`[?&]${param}=[^&#\\s)\\]]+`, 'g'), match =>
      match.startsWith('?') ? '?' : ''
    )
  }
  return out.replaceAll('?#', '#').replaceAll('?)', ')').replaceAll('?]', ']')
}

/** 解码数字 HTML 实体（&#x6E; / &#110;），抓取器不同时期的编码差异不算内容变更 */
function decodeNumericEntities(text: string) {
  return text
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec: string) => String.fromCodePoint(parseInt(dec, 10)))
}

/**
 * 把一个历史版本的内容归一化：只保留"内容本身"，抹掉抓取形态差异。
 * 归一化后仍不同的，才算实质变更。
 */
export function normalizeContent(raw: string, selfPath: string) {
  let text = raw.replaceAll('\r\n', '\n')
  text = stripVolatileParams(text)
  text = decodeNumericEntities(text)

  const marker = `](https://www.notion.com/${selfPath}`
  const lines = text.split('\n').map(line => {
    const heading = line.match(/^(#{1,6})\s+(.*)$/)
    if (!heading) {
      return line
    }
    const rest = (heading[2] ?? '').trim()
    // 标题自链接（容忍锚点里的括号/转义）：[**T**](本站本文链接) / [T](本站本文链接） -> T
    if (rest.startsWith('[') && rest.endsWith(')') && rest.includes(marker)) {
      const close = rest.lastIndexOf('](')
      if (close > 0) {
        const inner = rest.slice(1, close).replaceAll('**', '').trim()
        return `${heading[1]} ${inner}`
      }
    }
    // 旧式加粗纯文本标题：**T** -> T
    const bold = rest.match(/^\*\*(.+?)\*\*$/)
    if (bold) {
      return `${heading[1]} ${bold[1]}`
    }
    return line
  })

  // 空行与行尾空白不承载内容
  return lines
    .map(line => line.trimEnd())
    .filter(line => line.trim() !== '')
    .join('\n')
}

/** 全局统计：每个提交对多少个文件是纯噪声（供报告附录） */
const noiseCommitFileCount = new Map<string, { date: string; count: number }>()

function tallyNoiseCommit(hash: string, date: string) {
  const entry = noiseCommitFileCount.get(hash) ?? { date, count: 0 }
  entry.count += 1
  noiseCommitFileCount.set(hash, entry)
}

/**
 * 回溯单个文件的 git 历史（新到旧），逐版做归一化比较，
 * 找出最后一次实质变更，以及它之后的纯噪声变动。
 */
async function analyzeFileHistory(filePath: string, selfPath: string): Promise<FileHistory> {
  const empty: FileHistory = {
    mostRecentChangeIsNoise: false,
    lastRealChangeDate: null,
    lastRealChangeCommit: null,
    lastAnyChangeDate: null,
    noiseChangeCount: 0,
    lastNoiseChangeDate: null,
    firstNoiseChangeDate: null
  }

  const log = await runGit([
    'log',
    `-n${GIT_HISTORY_DEPTH}`,
    '--format=%H|%ad',
    '--date=short',
    '--',
    filePath
  ])

  if (log.code !== 0 || !log.out.trim()) {
    return empty
  }

  const commits = log.out
    .trim()
    .split('\n')
    .map(line => {
      const [hash = '', date = ''] = line.split('|')
      return { hash, date }
    })
    .filter(commit => commit.hash)

  if (commits.length === 0) {
    return empty
  }

  const history = { ...empty }
  history.lastAnyChangeDate = commits[0]?.date ?? null

  const showContent = async (hash: string) => {
    const shown = await runGit(['show', `${hash}:${filePath}`])
    return shown.code === 0 ? shown.out : null
  }

  // 逐版（新 -> 旧）比较相邻版本：某个提交引入的差异在归一化后消失，
  // 说明该提交对这个文件是纯噪声；第一个归一化后仍有差异的提交，
  // 就是最后一次实质变更。
  let prevNormalized: string | null = null
  let prevCommit: { hash: string; date: string } | null = null
  let foundRealChange = false

  for (const commit of commits) {
    const raw = await showContent(commit.hash)
    if (raw === null) {
      continue
    }
    const normalized = normalizeContent(raw, selfPath)

    if (prevNormalized !== null && prevCommit) {
      if (normalized === prevNormalized) {
        if (!foundRealChange) {
          history.noiseChangeCount += 1
          history.lastNoiseChangeDate ??= prevCommit.date
          history.firstNoiseChangeDate = prevCommit.date
          tallyNoiseCommit(prevCommit.hash, prevCommit.date)
        }
      } else {
        history.lastRealChangeDate = prevCommit.date
        history.lastRealChangeCommit = prevCommit.hash
        foundRealChange = true
        break
      }
    }

    prevNormalized = normalized
    prevCommit = commit
  }

  if (!foundRealChange && prevCommit) {
    // 回溯到底都没找到实质变更：最老的那个提交（创建或回溯下限）即最后一次实质变更
    history.lastRealChangeDate = prevCommit.date
    history.lastRealChangeCommit = prevCommit.hash
  }

  history.mostRecentChangeIsNoise = history.noiseChangeCount > 0
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
  console.log('=== Notion 文档状态审计（只读 · 归一化判定版）===\n')

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

  console.log('\n[4/6] 归一化回溯 git 历史（逐文件找最后一次实质变更）...')
  console.log('\n[5/6] 逐条收集证据...')
  let done = 0

  const rows = await mapWithConcurrency(inProgress, 4, async record => {
    const filePath = mapIdentifierToContentFile(record.identifier)
    const history = await analyzeFileHistory(filePath, identifierToSelfPath(record.identifier))
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

    const hasNoiseAfterReal = history.noiseChangeCount > 0
    // 翻牌发生在最后一次实质变更之后，且那之后的变动全是噪声
    const flipAfterRealChange = Boolean(
      flipDate && history.lastRealChangeDate && flipDate > history.lastRealChangeDate
    )
    const flipMatchesNoise = hasNoiseAfterReal && flipAfterRealChange

    // 实质变更与翻牌/首次噪声翻牌的间隔太近，无法排除 In Progress 本就来自那次真实变更
    const nearRealChange = Boolean(
      history.lastRealChangeDate &&
        history.firstNoiseChangeDate &&
        daysBetween(history.lastRealChangeDate, history.firstNoiseChangeDate) >= 0 &&
        daysBetween(history.lastRealChangeDate, history.firstNoiseChangeDate) <= RECHECK_WINDOW_DAYS
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
    } else if (
      history.lastRealChangeDate &&
      flipDate &&
      history.lastRealChangeDate >= flipDate
    ) {
      verdict = 'REAL_CHANGE'
      note = `最后一次实质变更（${history.lastRealChangeDate}，${(history.lastRealChangeCommit ?? '').slice(0, 7)}）不早于翻牌日，In Progress 可能属实`
    } else if (humanEditedLast) {
      verdict = 'REVIEW'
      note = 'Frontend 最后编辑者是人，可能正在翻译，不自动判定'
    } else if (nearRealChange && flipMatchesNoise) {
      verdict = 'REVIEW'
      note = `实质变更（${history.lastRealChangeDate}）距首次噪声翻牌太近，无法排除 In Progress 来自该次变更`
    } else if (ratio >= CJK_STRONG && flipMatchesNoise) {
      verdict = 'FALSE_POSITIVE'
      note = `最后一次实质变更在 ${history.lastRealChangeDate}（${(history.lastRealChangeCommit ?? '').slice(0, 7)}），其后 ${history.noiseChangeCount} 次变动归一化后均无差异，翻牌于 ${flipDate}，且前端正文已是中文`
    } else if (ratio >= CJK_STRONG && hasNoiseAfterReal) {
      verdict = 'LIKELY_FALSE_POSITIVE'
      note = '实质变更之后的变动均为噪声且译文存在，但翻牌时序对不齐'
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
      in_noise_commit: hasNoiseAfterReal,
      recent_heading_only: history.mostRecentChangeIsNoise,
      flip_matches_noise: flipMatchesNoise,
      flip_date: flipDate,
      last_real_change: history.lastRealChangeDate ?? '',
      last_any_change: history.lastAnyChangeDate ?? '',
      real_change_count: history.lastRealChangeDate ? 1 : 0,
      human_edited_last: humanEditedLast,
      note,
      frontend_page_id: record.frontendPageId ?? '',
      backend_page_id: record.backendPageId,
      last_real_change_commit: (history.lastRealChangeCommit ?? '').slice(0, 7),
      noise_change_count: history.noiseChangeCount,
      last_noise_change: history.lastNoiseChangeDate ?? ''
    } satisfies AuditRow
  })

  process.stdout.write('\r' + ' '.repeat(40) + '\r')

  console.log('\n[6/6] 生成报告...')
  await writeReports(rows)
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
  'backend_page_id',
  'last_real_change_commit',
  'noise_change_count',
  'last_noise_change'
]

async function writeReports(rows: AuditRow[]) {
  mkdirSync(`${REPO_ROOT}${REPORTS_DIR}`, { recursive: true })

  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const csvPath = `${REPORTS_DIR}/audit-status-${stamp}.csv`
  const mdPath = `${REPORTS_DIR}/audit-status-${stamp}.md`

  const header = CSV_COLUMNS.join(',')
  const body = rows.map(row => CSV_COLUMNS.map(column => csvEscape(row[column])).join(',')).join('\n')

  await Bun.write(csvPath, `${header}\n${body}\n`)
  await Bun.write(mdPath, buildMarkdown(rows, stamp))

  console.log(`      CSV: ${csvPath}`)
  console.log(`      MD : ${mdPath}`)
}

function buildMarkdown(rows: AuditRow[], stamp: string) {
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
      '| Identifier | 标题 | Backend | Frontend | 中文 | 翻牌日 | 最近实质变动 | 实质变更提交 | 备注 |',
      '| --- | --- | --- | --- | --- | --- | --- | --- | --- |'
    ]
    for (const row of items) {
      out.push(
        `| \`${row.identifier}\` | ${row.title.replaceAll('|', '\\|')} | ${row.backend_status || '-'} | ${
          row.frontend_status || '-'
        } | ${(Number(row.cjk_ratio) * 100).toFixed(0)}% | ${row.flip_date || '-'} | ${
          row.last_real_change || '-'
        } | ${row.last_real_change_commit || '-'} | ${row.note} |`
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
  lines.push('核心证据是**归一化 git 历史**（本版替代旧版的"标题行启发式"）：')
  lines.push('')
  lines.push('逐个文件回溯 content 的提交历史，把相邻两个版本先归一化再比较。归一化会抹掉抓取形态差异：剥离 `_ck`/`_gl`/`g-exp` 参数、把标题自链接还原成标题文字、解码数字 HTML 实体、忽略空行与行尾空白。归一化后仍有差异的，才记为一次**实质变更**，并记录其提交与日期；其后每一次变动若归一化后无差异，即为纯噪声。')
  lines.push('')
  lines.push('辅助证据：Frontend 正文中文占比（译文是否存在）、Frontend `last_edited_time`（翻牌时间）、最后编辑者是否为人（正在翻译则不自动判定）。')
  lines.push('')
  lines.push('判定顺序（先命中先返回）：')
  lines.push('')
  lines.push('```')
  lines.push('无 Frontend 页            -> NO_FRONTEND')
  lines.push('无本地 content 文件       -> NO_LOCAL_FILE')
  lines.push('中文占比 < 5%             -> UNTRANSLATED      （没翻译过，In Progress 属实）')
  lines.push('最后实质变更 >= 翻牌日    -> REAL_CHANGE       （实质变更未被处理，In Progress 属实）')
  lines.push('最后编辑者是人            -> REVIEW            （正在翻译，不动）')
  lines.push('实质变更距噪声翻牌 <= 3 天 -> REVIEW            （无法排除 In Progress 来自该次变更）')
  lines.push('中文 > 15% 且翻牌在实质变更之后的噪声区间 -> FALSE_POSITIVE')
  lines.push('中文 > 15% 且实质变更后只有噪声变动       -> LIKELY_FALSE_POSITIVE')
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

  lines.push('## 附：批量噪声提交清单')
  lines.push('')
  lines.push('同一次提交对至少 ' + NOISE_COMMIT_FILE_THRESHOLD + ' 个文件是纯噪声（归一化后无差异）的提交：')
  lines.push('')
  const noiseCommits = [...noiseCommitFileCount.entries()]
    .filter(([, entry]) => entry.count >= NOISE_COMMIT_FILE_THRESHOLD)
    .sort((a, b) => b[1].count - a[1].count)
  if (noiseCommits.length === 0) {
    lines.push('_无_')
  } else {
    lines.push('| Commit | 日期 | 纯噪声文件数 |')
    lines.push('| --- | --- | --- |')
    for (const [hash, entry] of noiseCommits) {
      lines.push(`| \`${hash.slice(0, 7)}\` | ${entry.date} | ${entry.count} |`)
    }
  }
  lines.push('')
  lines.push('注：抓取侧已于 2026-11-26 修复（提交 `9b0d666`：标题自链接拆纯文本 + 剥离易变参数），此类噪声不应再产生。')
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
