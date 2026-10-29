/**
 * 应用翻译补丁到 Frontend 页面。
 *
 * 只做定点替换（Notion API `update_content`），**永远不整页替换**。
 * 原因：页面里可能有 `<unknown .../>` 这类无法转换的块，replace_content 会直接删掉它们。
 *
 * 安全机制：
 *   1. 默认 dry-run，必须 --apply 才写
 *   2. 每个 old_str 必须在当前页面里**恰好出现一次**，0 次或多次都直接报错
 *   3. 校验补丁之间不重叠
 *   4. 写入后重新拉取页面，确认每个 new_str 都在，并比对结构指标
 *
 * 本脚本不写任何本地状态文件，处理完即结束。
 *
 * 补丁文件格式：
 *   {
 *     "identifier": "help:xxx",
 *     "patches": [
 *       { "old_str": "中文原文", "new_str": "中文新文", "note": "为什么改" }
 *     ]
 *   }
 *
 * 用法：
 *   bun run translate:apply -- --file .cache/translate/xxx.patches.json
 *   bun run translate:apply -- --file .cache/translate/xxx.patches.json --apply
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import { collectPaginatedAPI, isFullPage, type PageObjectResponse } from '@notionhq/client'

import config from '@/config'
import { notionClient } from '@/notion/client'
import { FRONTEND_IDENTIFIER_PROPERTY, getPlainTextPropertyValue } from '@/notion/properties'

const REPO_ROOT = fileURLToPath(new URL('../', import.meta.url))

type Patch = {
  old_str: string
  new_str: string
  note?: string
}

type PatchFile = {
  identifier: string
  patches: Patch[]
}

function countOccurrences(haystack: string, needle: string) {
  if (!needle) {
    return 0
  }
  let count = 0
  let index = haystack.indexOf(needle)
  while (index !== -1) {
    count += 1
    index = haystack.indexOf(needle, index + needle.length)
  }
  return count
}

function allIndexes(haystack: string, needle: string) {
  const indexes: number[] = []
  let index = haystack.indexOf(needle)
  while (index !== -1) {
    indexes.push(index)
    index = haystack.indexOf(needle, index + needle.length)
  }
  return indexes
}

/** 结构指标，用于确认补丁没有破坏页面结构 */
function structuralMetrics(markdown: string) {
  const lines = markdown.split('\n')
  const headings = lines.filter(line => /^#{1,6}\s/.test(line)).length
  const tableRows = lines.filter(line => line.trimStart().startsWith('|')).length
  const codeFences = lines.filter(line => line.trimStart().startsWith('```')).length
  const links = (markdown.match(/\]\(/g) ?? []).length
  const unknownBlocks = (markdown.match(/<unknown\b/g) ?? []).length

  return { headings, tableRows, codeFences, links, unknownBlocks }
}

function metricDiff(before: ReturnType<typeof structuralMetrics>, after: ReturnType<typeof structuralMetrics>) {
  const keys: (keyof ReturnType<typeof structuralMetrics>)[] = [
    'headings',
    'tableRows',
    'codeFences',
    'links',
    'unknownBlocks'
  ]
  const diffs: string[] = []
  for (const key of keys) {
    if (before[key] !== after[key]) {
      diffs.push(`${key}: ${before[key]} → ${after[key]}`)
    }
  }
  return diffs
}

function parseArgs(argv: string[]) {
  let file: string | null = null
  let apply = false

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--apply') {
      apply = true
    } else if (arg === '--file') {
      file = argv[index + 1] ?? null
      index += 1
    }
  }

  return { file, apply }
}

async function findFrontendPage(identifier: string) {
  const pages = await collectPaginatedAPI(notionClient.dataSources.query, {
    data_source_id: config.frontendDatasourceId!
  })

  return (
    pages
      .filter((result): result is PageObjectResponse => isFullPage(result))
      .find(page => getPlainTextPropertyValue(page, FRONTEND_IDENTIFIER_PROPERTY) === identifier) ?? null
  )
}

async function main() {
  const { file, apply } = parseArgs(Bun.argv.slice(2))

  if (!file) {
    console.error('用法: bun run translate:apply -- --file <patches.json> [--apply]')
    process.exit(1)
  }

  const raw = readFileSync(`${REPO_ROOT}${file}`, 'utf8')
  const patchFile = JSON.parse(raw) as PatchFile
  const { identifier, patches } = patchFile

  console.log('=== 应用翻译补丁 ===')
  console.log(`  identifier : ${identifier}`)
  console.log(`  补丁数     : ${patches.length}`)
  console.log(`  模式       : ${apply ? '*** 真写 (--apply) ***' : 'dry-run（不写入）'}`)
  console.log('')

  if (patches.length === 0) {
    console.log('没有补丁，退出。')
    return
  }

  const page = await findFrontendPage(identifier)
  if (!page) {
    throw new Error(`Frontend 找不到 ${identifier}`)
  }

  const current = await notionClient.pages.retrieveMarkdown({ page_id: page.id })
  const before = current.markdown

  // ---- 校验 ----
  const problems: string[] = []
  const ranges: { start: number; end: number; index: number }[] = []

  patches.forEach((patch, index) => {
    const occurrences = countOccurrences(before, patch.old_str)

    if (occurrences === 0) {
      problems.push(`#${index + 1} old_str 在页面里找不到（可能措辞不同，或已被改过）`)
      return
    }
    if (occurrences > 1) {
      problems.push(`#${index + 1} old_str 出现了 ${occurrences} 次，无法唯一定位；请加长上下文`)
      return
    }
    if (patch.old_str === patch.new_str) {
      problems.push(`#${index + 1} old_str 与 new_str 相同`)
      return
    }

    const start = before.indexOf(patch.old_str)
    ranges.push({ start, end: start + patch.old_str.length, index })
  })

  ranges.sort((a, b) => a.start - b.start)
  for (let index = 1; index < ranges.length; index += 1) {
    const previous = ranges[index - 1]
    const next = ranges[index]
    if (previous && next && next.start < previous.end) {
      problems.push(`#${previous.index + 1} 与 #${next.index + 1} 的替换区间重叠`)
    }
  }

  if (problems.length > 0) {
    console.error('❌ 校验失败，未做任何修改：')
    problems.forEach(problem => console.error(`   - ${problem}`))
    process.exit(1)
  }

  console.log('✅ 校验通过：每个 old_str 都唯一命中，区间无重叠')
  console.log('')

  // ---- 预览 ----
  for (const [index, patch] of patches.entries()) {
    console.log(`--- 补丁 #${index + 1}${patch.note ? `：${patch.note}` : ''}`)
    console.log('  - 旧：')
    patch.old_str.split('\n').forEach(line => console.log(`      ${line}`))
    console.log('  + 新：')
    patch.new_str.split('\n').forEach(line => console.log(`      ${line}`))
    console.log('')
  }

  if (!apply) {
    console.log('dry-run 结束，未写入。确认无误后加 --apply。')
    return
  }

  // ---- 写入 ----
  await notionClient.pages.updateMarkdown({
    page_id: page.id,
    type: 'update_content',
    update_content: {
      content_updates: patches.map(patch => ({
        old_str: patch.old_str,
        new_str: patch.new_str
      }))
    }
  })

  // ---- 复核 ----
  const afterFetch = await notionClient.pages.retrieveMarkdown({ page_id: page.id })
  const after = afterFetch.markdown

  const missing = patches.filter(patch => !after.includes(patch.new_str))
  if (missing.length > 0) {
    console.error(`\n⚠️  写入后复核：${missing.length} 个 new_str 未出现在页面上`)
    missing.forEach(patch => console.error(`   - ${patch.new_str.slice(0, 60)}...`))
  } else {
    console.log(`✅ 写入后复核：${patches.length} 个补丁全部命中`)
  }

  const beforeMetrics = structuralMetrics(before)
  const afterMetrics = structuralMetrics(after)
  const diffs = metricDiff(beforeMetrics, afterMetrics)

  console.log('')
  if (diffs.length === 0) {
    console.log('✅ 结构指标未变（标题/表格/代码块/链接/占位块）')
  } else {
    console.log('⚠️  结构指标发生变化，请人工确认：')
    diffs.forEach(diff => console.log(`   - ${diff}`))
  }

  console.log('')
}

await main().catch(error => {
  console.error('\n执行失败：', error)
  process.exit(1)
})
