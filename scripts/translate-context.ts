/**
 * 生成单篇文档的翻译工作包。
 *
 * 一次性把翻译需要的东西全部摊平到一个 Markdown 文件里：
 *   1. 元信息（页面 ID、状态、英文源 hash、是否可安全写入等）
 *   2. 英文源最近改动（git 历史里最近一次真正改正文的提交）
 *   3. 标题对齐表（英文标题 ↔ 中文标题，按序号配对）
 *   4. 术语表
 *   5. 英文源全文
 *   6. 中文现状全文
 *
 * 产物写到 .cache/translate/<slug>.md，供 agent 阅读后产出 patches。
 * 本脚本只读 Notion，不写任何内容。
 *
 * 用法：
 *   bun run translate:context help:some-doc
 *   bun run translate:context help:a help:b help:c
 */

import {
  collectPaginatedAPI,
  isFullPage,
  type PageObjectResponse
} from '@notionhq/client'
import { mkdirSync } from 'node:fs'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import config from '@/config'
import { notionClient } from '@/notion/client'
import {
  BACKEND_CONTENT_PROPERTY,
  BACKEND_HASH_PROPERTY,
  BACKEND_IDENTIFIER_PROPERTY,
  FRONTEND_IDENTIFIER_PROPERTY,
  FRONTEND_STATUS_PROPERTY,
  getPlainTextPropertyValue
} from '@/notion/properties'

const REPO_ROOT = fileURLToPath(new URL('../', import.meta.url))
const CACHE_DIR = '.cache/translate'
const GLOSSARY_PATH = 'translation/glossary.md'
const STYLE_GUIDE_PATH = 'translation/style-guide.md'

type Section = {
  key: string
  heading: string
  level: number
  body: string
}

function toSlug(identifier: string) {
  return identifier.replaceAll(/[:/]/g, '_')
}

function hashText(text: string) {
  return Bun.hash(text).toString(16)
}

/**
 * content/ 下的英文源是 CRLF / LF 混排（336/337 个文件含 CR），
 * 直接按 \n 切行会让 `(.*)$` 匹配不到带 \r 的标题行，导致标题被漏掉。
 * Notion 返回的页面 markdown 则是纯 \n。统一在这里归一化。
 */
function normalizeNewlines(text: string) {
  return text.replaceAll('\r\n', '\n').replaceAll('\r', '\n')
}

/** 按标题切段。首个标题之前的内容单独成段（level 0，key 为空）。 */
function splitSections(rawMarkdown: string): Section[] {
  const markdown = normalizeNewlines(rawMarkdown)
  const lines = markdown.split('\n')
  const sections: Section[] = []

  let currentHeading = ''
  let currentLevel = 0
  let buffer: string[] = []
  const seen = new Map<string, number>()

  const flush = () => {
    const body = buffer.join('\n').trim()
    const base = `${currentLevel}|${currentHeading}`
    const occurrence = seen.get(base) ?? 0
    seen.set(base, occurrence + 1)
    const key = occurrence === 0 ? base : `${base}#${occurrence}`

    if (body || currentHeading) {
      sections.push({
        key,
        heading: currentHeading,
        level: currentLevel,
        body
      })
    }
    buffer = []
  }

  for (const line of lines) {
    const match = /^(#{1,6})\s+(.*)$/.exec(line)
    if (match) {
      flush()
      currentLevel = (match[1] ?? '').length
      currentHeading = (match[2] ?? '').trim()
      continue
    }
    buffer.push(line)
  }
  flush()

  return sections
}

function stripFrontMatter(markdown: string) {
  if (!markdown.startsWith('---')) {
    return markdown
  }
  const end = markdown.indexOf('\n---', 3)
  if (end === -1) {
    return markdown
  }
  return markdown.slice(end + 4).trimStart()
}

function readOptionalFile(relativePath: string) {
  try {
    return readFileSync(`${REPO_ROOT}${relativePath}`, 'utf8')
  } catch {
    return null
  }
}

async function runGit(args: string[]) {
  const proc = Bun.spawn(['git', ...args], {
    cwd: REPO_ROOT,
    stdout: 'pipe',
    stderr: 'pipe'
  })
  const [out, code] = await Promise.all([new Response(proc.stdout).text(), proc.exited])
  return { out, code }
}

type EnglishChange = {
  hash: string
  date: string
  lines: string[]
  substantive: string[]
}

const FRONTMATTER_KEY = /^(title|emoji|description|url|key|coverImage|category|categoryKey):/

/**
 * 找英文源最近一次**真正改动正文**的提交。
 * 没有翻译快照时，这是判断"英文改了什么"的唯一可靠来源；
 * 能过滤掉 frontmatter 变更和标题锚点噪声。
 */
async function recentEnglishChange(filePath: string): Promise<EnglishChange | null> {
  const { out, code } = await runGit([
    'log',
    '-6',
    '--format=@@C@@%h|%ad',
    '--date=short',
    '-p',
    '--',
    filePath
  ])

  if (code !== 0) {
    return null
  }

  const blocks: { hash: string; date: string; lines: string[] }[] = []
  let current: { hash: string; date: string; lines: string[] } | null = null

  for (const line of out.split('\n')) {
    if (line.startsWith('@@C@@')) {
      const [hash = '', date = ''] = line.slice(5).split('|')
      current = { hash, date, lines: [] }
      blocks.push(current)
      continue
    }
    if (!current) {
      continue
    }
    if (!line.startsWith('+') && !line.startsWith('-')) {
      continue
    }
    if (line.startsWith('+++') || line.startsWith('---')) {
      continue
    }
    current.lines.push(line)
  }

  for (const block of blocks) {
    const substantive = block.lines
      .map(line => line.slice(1))
      .filter(line => !/^#{1,6}\s/.test(line))
      .filter(line => !FRONTMATTER_KEY.test(line))

    if (substantive.length > 0) {
      return { hash: block.hash, date: block.date, lines: block.lines, substantive }
    }
  }

  return null
}

type LinkKind = 'english-help' | 'internal' | 'external'

type LinkRow = {
  text: string
  url: string
  kind: LinkKind
  hasAnchor: boolean
  target: string
  context: string
}

const LINK_PATTERN = /\[([^\]\n]{1,90})\]\(([^)\s]+)\)/g

/** 拆出页面正文里的所有链接，内部链接尝试解析到目标 Identifier */
function classifyLinks(markdown: string, pageIdToIdentifier: Map<string, string>) {
  const rows: LinkRow[] = []
  LINK_PATTERN.lastIndex = 0

  let match: RegExpExecArray | null = LINK_PATTERN.exec(markdown)
  while (match !== null) {
    const text = (match[1] ?? '').trim()
    const url = match[2] ?? ''
    const hasAnchor = url.includes('#')
    const context = markdown
      .slice(Math.max(0, match.index - 42), match.index)
      .replaceAll('\n', ' ')
      .trim()

    const pageId = /\/p\/([0-9a-f]{32})/.exec(url)?.[1] ?? /^\/([0-9a-f]{32})/.exec(url)?.[1]

    if (pageId) {
      rows.push({
        text,
        url,
        kind: 'internal',
        hasAnchor,
        target: pageIdToIdentifier.get(pageId) ?? `⚠️ 不在 Frontend 内（${pageId.slice(0, 8)}…）`,
        context
      })
    } else if (/notion\.(com|so)\/help\//.test(url)) {
      rows.push({
        text,
        url,
        kind: 'english-help',
        hasAnchor,
        target: (url.split('#')[0] ?? '').replace(/^https?:\/\/(www\.)?notion\.(com|so)\/help\//, 'help:'),
        context
      })
    } else {
      rows.push({ text, url, kind: 'external', hasAnchor, target: '—', context })
    }

    match = LINK_PATTERN.exec(markdown)
  }

  return rows
}

async function buildWorkpack(identifier: string) {
  const frontendPages = await collectPaginatedAPI(notionClient.dataSources.query, {
    data_source_id: config.frontendDatasourceId!
  })

  const fullPages = frontendPages.filter(
    (result): result is PageObjectResponse => isFullPage(result)
  )

  const pageIdToIdentifier = new Map<string, string>()
  for (const page of fullPages) {
    const pageIdentifier = getPlainTextPropertyValue(page, FRONTEND_IDENTIFIER_PROPERTY)
    if (pageIdentifier) {
      pageIdToIdentifier.set(page.id.replaceAll('-', ''), pageIdentifier)
    }
  }

  const frontendPage = fullPages.find(
    page => getPlainTextPropertyValue(page, FRONTEND_IDENTIFIER_PROPERTY) === identifier
  )

  if (!frontendPage) {
    console.warn(`  ⚠️  ${identifier}: Frontend 找不到该页面，跳过`)
    return null
  }

  const englishRaw = readOptionalFile(`content/${identifier}.md`)
  if (!englishRaw) {
    console.warn(`  ⚠️  ${identifier}: content/ 下没有对应英文源文件，跳过`)
    return null
  }

  const markdown = await notionClient.pages.retrieveMarkdown({ page_id: frontendPage.id })
  const chineseMarkdown = normalizeNewlines(markdown.markdown)

  const englishBody = stripFrontMatter(normalizeNewlines(englishRaw))
  const chineseBody = chineseMarkdown

  const englishSections = splitSections(englishBody)
  const chineseSections = splitSections(chineseBody)

  const lines: string[] = []

  lines.push(`# 翻译工作包：${identifier}`)
  lines.push('')
  lines.push('## 元信息')
  lines.push('')
  lines.push(`- identifier: \`${identifier}\``)
  lines.push(`- Frontend 页面 ID: \`${frontendPage.id}\``)
  lines.push(`- 当前状态: ${getPlainTextPropertyValue(frontendPage, FRONTEND_STATUS_PROPERTY) ?? '-'}`)
  lines.push(`- 英文源 hash: \`${hashText(englishRaw)}\``)
  lines.push(`- 英文源字数: ${englishRaw.length}`)
  lines.push(`- 中文现状字数: ${chineseMarkdown.length}`)
  lines.push(
    `- markdown 保真度: ${markdown.truncated ? `⚠️ 不完整（${markdown.unknown_block_ids.length} 个无法转换的块）` : '完整'}`
  )
  lines.push('')
  if (markdown.unknown_block_ids.length > 0) {
    lines.push('> ⚠️ 该页面存在无法转换的块。**只能用 update_content 定点替换，禁止 replace_content**——整页替换会删掉这些块。')
    lines.push('')
  }

  const englishChange = await recentEnglishChange(`content/${identifier}.md`)
  lines.push('## 英文源最近改动（git）')
  lines.push('')
  if (!englishChange) {
    lines.push('_git 历史里没找到正文改动（或文件不在版本控制内）。_')
  } else {
    lines.push(
      `最近一次正文改动：\`${englishChange.hash}\`（${englishChange.date}），改动 ${englishChange.substantive.length} 行。`
    )
    lines.push('')
    lines.push('> 这是判断"英文改了什么"最可靠的依据。已过滤 frontmatter 与标题锚点噪声。')
    lines.push('')
    lines.push('```diff')
    for (const line of englishChange.lines.slice(0, 60)) {
      lines.push(line)
    }
    if (englishChange.lines.length > 60) {
      lines.push(`... 另有 ${englishChange.lines.length - 60} 行，用 git show ${englishChange.hash} 查看`)
    }
    lines.push('```')
  }
  lines.push('')

  lines.push('## 标题对齐表')
  lines.push('')
  lines.push('按出现顺序配对，序号对不上说明结构已漂移，需要人工确认。')
  lines.push('')
  const maxLength = Math.max(englishSections.length, chineseSections.length)
  lines.push('| # | LV | 英文标题 | 中文标题 |')
  lines.push('| --- | --- | --- | --- |')
  for (let index = 0; index < maxLength; index += 1) {
    const en = englishSections[index]
    const zh = chineseSections[index]
    const level = en?.level ?? zh?.level ?? 0
    const flag = !en || !zh ? ' ⚠️' : ''
    lines.push(
      `| ${index + 1} | ${level || '-'} | ${(en?.heading ?? '—').replaceAll('|', '\\|')}${flag} | ${(zh?.heading ?? '—').replaceAll('|', '\\|')}${flag} |`
    )
  }
  lines.push('')
  if (englishSections.length !== chineseSections.length) {
    lines.push(
      `> ⚠️ 英文 ${englishSections.length} 段 vs 中文 ${chineseSections.length} 段，数量不一致。可能是译文合并/拆分了段落，也可能是漏译。`
    )
    lines.push('')
  }

  const links = classifyLinks(chineseMarkdown, pageIdToIdentifier)
  const englishLinks = links.filter(link => link.kind === 'english-help')
  const internalLinks = links.filter(link => link.kind === 'internal')

  lines.push('## 链接清单')
  lines.push('')
  lines.push(
    `英文 help 链接 **${englishLinks.length}** 条（其中锚点 ${englishLinks.filter(l => l.hasAnchor).length} 条）｜内部 \`/p/\` 链接 **${internalLinks.length}** 条｜外部链接 ${links.filter(l => l.kind === 'external').length} 条`
  )
  lines.push('')
  lines.push(
    '**策略**：英文 help 链接原样保留，用户在维护时自己转成 Notion 内部链接；已有的 `/p/` 内部链接不要反向改回英文。'
  )
  lines.push('')
  if (englishLinks.length > 0) {
    lines.push('### 英文 help 链接（需用户手动改）')
    lines.push('')
    lines.push('| # | 链接文字 | 锚点 | 目标 | 出现在 |')
    lines.push('| --- | --- | --- | --- | --- |')
    englishLinks.forEach((link, index) => {
      const anchor = link.hasAnchor ? '有' : '—'
      lines.push(
        `| ${index + 1} | ${link.text.replaceAll('|', '\\|')} | ${anchor} | \`${link.target}\` | …${link.context.replaceAll('|', '\\|')} |`
      )
    })
    lines.push('')
  }
  if (internalLinks.length > 0) {
    lines.push('### 内部链接（已转好，仅核对目标是否正确）')
    lines.push('')
    lines.push('| # | 链接文字 | 锚点 | 目标页 | 出现在 |')
    lines.push('| --- | --- | --- | --- | --- |')
    internalLinks.forEach((link, index) => {
      const anchor = link.hasAnchor ? '有' : '—'
      lines.push(
        `| ${index + 1} | ${link.text.replaceAll('|', '\\|')} | ${anchor} | ${link.target.replaceAll('|', '\\|')} | …${link.context.replaceAll('|', '\\|')} |`
      )
    })
    lines.push('')
  }

  const glossary = readOptionalFile(GLOSSARY_PATH)
  const styleGuide = readOptionalFile(STYLE_GUIDE_PATH)
  if (glossary) {
    lines.push('## 术语表')
    lines.push('')
    lines.push(glossary.trim())
    lines.push('')
  }
  if (styleGuide) {
    lines.push('## 翻译规范')
    lines.push('')
    lines.push(styleGuide.trim())
    lines.push('')
  }

  lines.push('## 英文源（content/）')
  lines.push('')
  lines.push('````markdown')
  lines.push(normalizeNewlines(englishRaw).trim())
  lines.push('````')
  lines.push('')

  lines.push('## 中文现状（retrieveMarkdown）')
  lines.push('')
  lines.push('````markdown')
  lines.push(chineseMarkdown.trim())
  lines.push('````')
  lines.push('')

  mkdirSync(`${REPO_ROOT}${CACHE_DIR}`, { recursive: true })
  const outputPath = `${CACHE_DIR}/${toSlug(identifier)}.md`
  await Bun.write(`${REPO_ROOT}${outputPath}`, lines.join('\n'))

  return {
    identifier,
    outputPath,
    englishSections: englishSections.length,
    chineseSections: chineseSections.length,
    truncated: markdown.truncated,
    englishLinks: englishLinks.length,
    englishAnchorLinks: englishLinks.filter(link => link.hasAnchor).length,
    internalLinks: internalLinks.length
  }
}

async function main() {
  const identifiers = Bun.argv.slice(2).filter(arg => !arg.startsWith('-'))

  if (identifiers.length === 0) {
    console.error('用法: bun run translate:context <identifier> [identifier...]')
    console.error('例如: bun run translate:context help:notion-ai-app-for-ios')
    process.exit(1)
  }

  console.log(`=== 生成翻译工作包（${identifiers.length} 篇）===\n`)

  for (const identifier of identifiers) {
    const result = await buildWorkpack(identifier)
    if (!result) {
      continue
    }

    console.log(`  ✅ ${identifier}`)
    console.log(`     段数 英${result.englishSections} / 中${result.chineseSections}`)
    console.log(
      `     链接 英文 ${result.englishLinks}（锚点 ${result.englishAnchorLinks}） / 内部 ${result.internalLinks}`
    )
    if (result.truncated) {
      console.log('     ⚠️  markdown 不完整，只能定点替换')
    }
    console.log(`     → ${result.outputPath}`)
    console.log('')
  }

  console.log('下一步：读工作包 → 产出 patches JSON → bun run translate:apply')
}

await main().catch(error => {
  console.error('\n生成失败：', error)
  process.exit(1)
})
