import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { collectPaginatedAPI, isFullPage, type PageObjectResponse } from '@notionhq/client'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import config from '../src/config'
import { notionClient } from '../src/notion/client'
import {
  BACKEND_CONTENT_PROPERTY,
  BACKEND_IDENTIFIER_PROPERTY,
  BACKEND_TITLE_PROPERTY,
  FRONTEND_TITLE_PROPERTY,
  getPlainTextPropertyValue,
  getRelationIds
} from '../src/notion/properties'

// ==========================================
// 1. AI Configuration (直接填入你的配置常量)
// ==========================================
const OPENAI_BASE_URL = 'https://runanytime.hxi.me/v1'
const OPENAI_API_KEY = 'sk-hu5GOzpd8ms8s1AL6Wx9wkyLWCkAT9Ji0efxmqFSsy1kw6Dh'
const OPENAI_MODEL = 'deepseek/deepseek-v4-flash'

// 速率限制配置（避免触发 429）
const MAX_REQUESTS_PER_MINUTE = 12 // 限制每分钟最多 12 次请求（留出安全余量）
const MAX_RETRIES = 3             // 遇到 429 自动重试次数

// ==========================================
// 2. Translation Guidelines (翻译与审查规范)
// ==========================================
const TRANSLATION_GUIDELINES = `## 翻译规范与审查基准：
1. **人称规范**：人称必须统一使用「你」，不能使用「您」。若出现「您」属于规范问题。
2. **风格偏好**：简洁、直接、可执行，避免机械直译和冗词，优先主动语态。
3. **术语强制约束（违者必须记录在 translation_issues 中）**：
   - block → 区块
   - duplicate → 创建副本 / 制作副本（避免翻为「复制」）
   - Copy → 拷贝（避免翻为「复制」）
   - teamspaces → 团队协作区
   - formula / formulas → 函数
   - Credit / credits（Notion Agent 语境）→ 积分
   - Auto Adjust → 自动调整
   - Notion Calendar → Notion 日历
   - Notion Site / Notion Sites → Notion 网站
   - Marketplace → 市集
   - Notion Agent → Notion 智能代理
   - AI Meeting Notes → AI 速记
   - Managed users → 托管用户
   - deprovisioned user → 已停用用户
   - Domain management → 域名管理
   - Legal holds → 法律保全
   - Shared Responsibilities Model → 责任共担模型
   - Dormant account policy → 闲置账户政策
   - Favorites → 最爱
   - Plus Plan / Plus → Plus 版
   - Business Plan / Business → 商业版
   - Enterprise Plan / Enterprise → 企业版
   - Free Plan / Free → 免费版
   - Plan → 方案
   - Workspace → 工作空间
   - Wikis / Wiki → Wikis 百科
   - Timeline → 时间轴（避免翻为「时间线」）
   - section（侧边栏语境）→ 板块（避免翻为「部分」）
   - dependencies → 依赖项
   - Navigate your inbox → 认识你的收件箱
   - Blocking（日历语境）→ 时段预留
4. **格式与引用**：
   - 原文行内代码（反引号）及英文引号保持原有格式，不应被随意破坏或篡改。`

// ==========================================
// 3. Types & Schema
// ==========================================
interface ComparisonResult {
  identifier: string
  backendPageId: string
  frontendPageId: string
  backendTitle: string
  frontendTitle: string
  isUntranslated: boolean
  isComplete: boolean
  score: number
  missingSections: string[]
  translationIssues: string[]
  summary: string
  timestamp: string
  error?: string
}

interface AICheckResponse {
  is_untranslated: boolean
  is_complete: boolean
  score: number
  missing_sections: string[]
  translation_issues: string[]
  summary: string
}

// ==========================================
// 4. AI Helper (原生 fetch，带速率限制与 429 自动重试)
// ==========================================
let lastRequestTime = 0
const minIntervalMs = Math.ceil(60000 / MAX_REQUESTS_PER_MINUTE)

async function waitRateLimit(): Promise<void> {
  const now = Date.now()
  const elapsed = now - lastRequestTime
  if (elapsed < minIntervalMs) {
    const delay = minIntervalMs - elapsed
    await new Promise(resolve => setTimeout(resolve, delay))
  }
  lastRequestTime = Date.now()
}

async function callAIComparison(
  enTitle: string,
  enContent: string,
  zhTitle: string,
  zhContent: string
): Promise<AICheckResponse> {
  if (!OPENAI_API_KEY) {
    throw new Error('请在 scripts/check-translation.ts 中配置有效的 OPENAI_API_KEY 常量')
  }

  const prompt = `你是一个专业的 Notion 帮助文档本地化与翻译质量审查专家。
请对比以下 Notion 帮助文档的英文原文（来自后端）与中文译文（来自前台页面），并根据下方的【翻译规范与术语表】严格按 JSON 格式返回审查结果。

${TRANSLATION_GUIDELINES}

## 审查输出维度：
1. **未翻译检查 (is_untranslated)**: 前台是否绝大部分仍为英文未翻译？(true/false)
2. **完整度检查 (is_complete)**: 前台是否翻译完整？若整体结构完整、基本无关键章节缺失则为 true；若只翻译了开头、或缺失了大量核心小节/步骤则为 false。
3. **综合评分 (score)**: 给出 0-100 的整数评分：
   - 90-100: 内容完整无缺失，术语完全符合规范，表达自然流畅。
   - 75-89: 整体完整，存在少数术语不规范或轻微语句润色空间。
   - 50-74: 存在部分小节缺失，或有较多术语违规与错译。
   - 0-49: 严重不完整（大段缺失）、绝大部分未翻译、或严重误导性错译。
4. **内容缺失 (missing_sections)**: 前台相较英文原文是否有大段内容、操作步骤、注意提示或关键小节被遗漏？列出具体遗漏的小节标题或内容要点（若无则为空数组）。
5. **翻译问题与术语违规 (translation_issues)**: 列出所有错译、语句不通、违反上述术语表（如 duplicate 翻成复制、出现“您”等）的具体问题（若无则为空数组）。
6. **总结 (summary)**: 对当前文档翻译质量给出 1-3 句话的简明总结和修改建议。

## 英文原文（后端）：
【标题】：${enTitle}
【正文】：
${enContent}

---

## 中文译文（前台）：
【标题】：${zhTitle}
【正文】：
${zhContent}

## 输出要求：
必须只输出合法的 JSON 对象，不要输出任何多余说明，格式如下：
{
  "is_untranslated": false,
  "is_complete": true,
  "score": 85,
  "missing_sections": ["遗漏小节1说明", ...],
  "translation_issues": ["术语不符/错译/使用了'您'等说明", ...],
  "summary": "简明总结"
}`

  const url = `${OPENAI_BASE_URL.replace(/\/+$/, '')}/chat/completions`

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    await waitRateLimit()

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.1,
        response_format: { type: 'json_object' }
      })
    })

    if (response.status === 429) {
      if (attempt < MAX_RETRIES) {
        const waitSec = attempt * 8
        console.warn(`   ⚠️ 触发速率限制 (429)，等待 ${waitSec} 秒后重试 (第 ${attempt}/${MAX_RETRIES} 次)...`)
        await new Promise(resolve => setTimeout(resolve, waitSec * 1000))
        continue
      }
    }

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`AI API 请求失败 (${response.status}): ${errorText}`)
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>
    }
    const content = data.choices?.[0]?.message?.content ?? '{}'
    return JSON.parse(content) as AICheckResponse
  }

  throw new Error(`已达最大重试次数 (${MAX_RETRIES})，仍受限 429`)
}

// ==========================================
// 5. Data Fetching
// ==========================================
async function getBackendPageByIdentifier(identifier: string): Promise<PageObjectResponse | null> {
  const res = await notionClient.dataSources.query({
    data_source_id: config.backendDatasourceId!,
    filter: {
      property: BACKEND_IDENTIFIER_PROPERTY,
      rich_text: { equals: identifier }
    }
  })

  const page = res.results.find(isFullPage)
  return page ?? null
}

async function getAllBackendHelpPages(): Promise<PageObjectResponse[]> {
  console.log('📡 正在从后端数据库获取所有帮助文档页面...')
  const queryResults = await collectPaginatedAPI(notionClient.dataSources.query, {
    data_source_id: config.backendDatasourceId!
  })

  const helpPages: PageObjectResponse[] = []
  for (const page of queryResults) {
    if (!isFullPage(page)) continue
    const identifier = getPlainTextPropertyValue(page, BACKEND_IDENTIFIER_PROPERTY)
    if (identifier && identifier.startsWith('help:')) {
      helpPages.push(page)
    }
  }

  console.log(`✅ 获取完成，共找到 ${helpPages.length} 篇帮助文档。`)
  return helpPages
}

async function checkSingleItem(
  backendPage: PageObjectResponse,
  indexInfo?: string
): Promise<ComparisonResult> {
  const identifier = getPlainTextPropertyValue(backendPage, BACKEND_IDENTIFIER_PROPERTY) ?? ''
  const enTitle = getPlainTextPropertyValue(backendPage, BACKEND_TITLE_PROPERTY) ?? identifier
  const enContent = getPlainTextPropertyValue(backendPage, BACKEND_CONTENT_PROPERTY) ?? ''

  const frontendRelationIds = getRelationIds(backendPage, 'Frontend')
  const frontendPageId = frontendRelationIds[0]

  const prefix = indexInfo ? `[${indexInfo}] ` : ''

  if (!frontendPageId) {
    console.warn(`⚠️ ${prefix}${identifier} 没有关联前台页面`)
    return {
      identifier,
      backendPageId: backendPage.id,
      frontendPageId: '',
      backendTitle: enTitle,
      frontendTitle: '',
      isUntranslated: true,
      isComplete: false,
      score: 0,
      missingSections: ['无对应前台页面'],
      translationIssues: [],
      summary: '未关联前台页面',
      timestamp: new Date().toISOString(),
      error: 'No frontend page linked'
    }
  }

  console.log(`\n🔍 ${prefix}正在检查: ${identifier} (${enTitle})`)

  try {
    // 1. 获取前台 Markdown
    const markdownResponse = await notionClient.pages.retrieveMarkdown({ page_id: frontendPageId })
    const zhContent = markdownResponse.markdown

    // 2. 获取前台页面详情（读取标题）
    const frontendPage = (await notionClient.pages.retrieve({
      page_id: frontendPageId
    })) as PageObjectResponse
    const zhTitle = getPlainTextPropertyValue(frontendPage, FRONTEND_TITLE_PROPERTY) ?? ''

    // 3. 调用 AI 进行对比
    const aiResult = await callAIComparison(enTitle, enContent, zhTitle, zhContent)

    const scoreTag = aiResult.score >= 80 ? "🟢" : aiResult.score >= 60 ? "🟡" : "🔴"
    console.log(
      `   ${scoreTag} 评分: ${aiResult.score}/100 | 完整度: ${aiResult.is_complete ? "✅ 完整" : "❌ 不完整"} | 翻译状态: ${aiResult.is_untranslated ? "⚠️ 纯英文" : "✅ 已翻译"}`
    )

    return {
      identifier,
      backendPageId: backendPage.id,
      frontendPageId,
      backendTitle: enTitle,
      frontendTitle: zhTitle,
      isUntranslated: Boolean(aiResult.is_untranslated),
      isComplete: Boolean(aiResult.is_complete),
      score: Number(aiResult.score) || 0,
      missingSections: aiResult.missing_sections ?? [],
      translationIssues: aiResult.translation_issues ?? [],
      summary: aiResult.summary ?? '',
      timestamp: new Date().toISOString()
    }
  } catch (err: any) {
    console.error(`   ❌ 检查失败: ${err.message}`)
    return {
      identifier,
      backendPageId: backendPage.id,
      frontendPageId,
      backendTitle: enTitle,
      frontendTitle: '',
      isUntranslated: false,
      isComplete: false,
      score: 0,
      missingSections: [],
      translationIssues: [],
      summary: `检查出错: ${err.message}`,
      timestamp: new Date().toISOString(),
      error: err.message
    }
  }
}

async function findLatestReportJson(): Promise<string | null> {
  const reportsDir = join(process.cwd(), 'reports')
  try {
    const files = await readdir(reportsDir)
    const jsonFiles = files
      .filter(f => f.endsWith('.json') && f.startsWith('check-batch-'))
      .toSorted()
      .toReversed()
    return jsonFiles[0] ? join(reportsDir, jsonFiles[0]) : null
  } catch {
    return null
  }
}

// ==========================================
// 6. Output Report Generation
// ==========================================
async function saveReports(results: ComparisonResult[], customPrefix?: string) {
  const reportsDir = join(process.cwd(), 'reports')
  await mkdir(reportsDir, { recursive: true })

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const isBatch = results.length > 1
  const filenamePrefix = customPrefix
    ? `${customPrefix}-${timestamp}`
    : isBatch
      ? `check-batch-${timestamp}`
      : `check-${results[0]!.identifier.replace(':', '-')}`

  // 保存 JSON
  const jsonPath = join(reportsDir, `${filenamePrefix}.json`)
  await writeFile(jsonPath, JSON.stringify(results, null, 2), 'utf-8')

  // 统计指标
  const total = results.length
  const validResults = results.filter(r => !r.error)
  const avgScore =
    validResults.length > 0
      ? (validResults.reduce((sum, r) => sum + r.score, 0) / validResults.length).toFixed(1)
      : '0'
  const completeCount = results.filter(r => r.isComplete).length
  const untranslatedCount = results.filter(r => r.isUntranslated).length
  const issuesCount = results.reduce((sum, r) => sum + r.translationIssues.length, 0)
  const missingCount = results.reduce((sum, r) => sum + r.missingSections.length, 0)

  // Markdown 报告生成
  let md = `# Notion 帮助文档翻译审查报告\n\n`
  md += `- **审查时间**: ${new Date().toLocaleString()}\n`
  md += `- **检查文档总数**: ${total} 篇\n`
  md += `- **平均评分**: **${avgScore} / 100**\n`
  md += `- **完整翻译篇数**: ${completeCount} / ${total} (占比 ${((completeCount / total) * 100).toFixed(1)}%)\n`
  md += `- **未翻译(纯英文)篇数**: ${untranslatedCount} 篇\n`
  md += `- **发现翻译/术语问题**: 共 ${issuesCount} 处\n`
  md += `- **发现缺失小节**: 共 ${missingCount} 处\n\n`

  if (isBatch) {
    // 按评分升序排序，低分排在最前便于优先处理
    const sorted = [...results].toSorted((a, b) => a.score - b.score)

    md += `## 📋 全览清单 (按评分从低到高排序，低分优先修复)\n\n`
    md += `| 标识符 (Identifier) | 前台标题 | 评分 | 完整度 | 翻译状态 | 遗漏小节 | 术语/翻译问题 |\n`
    md += `| :--- | :--- | :---: | :---: | :---: | :---: | :---: |\n`
    for (const r of sorted) {
      const scoreBadge = r.score >= 80 ? `🟢 ${r.score}` : r.score >= 60 ? `🟡 ${r.score}` : `🔴 ${r.score}`
      const completeBadge = r.isComplete ? '✅ 完整' : '❌ 不完整'
      const transBadge = r.isUntranslated ? '⚠️ 纯英文' : '✅ 已翻译'
      md += `| [${r.identifier}](#${r.identifier.replace(/[^a-zA-Z0-9-]/g, '')}) | ${r.frontendTitle || '-'} | ${scoreBadge} | ${completeBadge} | ${transBadge} | ${r.missingSections.length} | ${r.translationIssues.length} |\n`
    }
    md += `\n---\n\n`
  }

  md += `## 📑 详细审查记录\n\n`
  for (const r of results) {
    const completeBadge = r.isComplete ? '✅ 完整' : '❌ 不完整 (有缺失)'
    const untranslatedBadge = r.isUntranslated ? '⚠️ 未翻译 (纯英文)' : '✅ 已翻译'
    const scoreBadge = r.score >= 80 ? `🟢 ${r.score}` : r.score >= 60 ? `🟡 ${r.score}` : `🔴 ${r.score}`

    md += `### <a id="${r.identifier.replace(/[^a-zA-Z0-9-]/g, '')}"></a>[${r.identifier}] ${r.frontendTitle || '未命名'} (${r.backendTitle})\n\n`
    md += `- **后端 Page ID**: \`${r.backendPageId}\`\n`
    md += `- **前台 Page ID**: \`${r.frontendPageId || '无'}\`\n`
    md += `- **综合评分**: **${scoreBadge} / 100**\n`
    md += `- **完整度状态**: ${completeBadge}\n`
    md += `- **翻译状态**: ${untranslatedBadge}\n`
    md += `- **总结评价**: ${r.summary}\n\n`

    if (r.missingSections.length > 0) {
      md += `#### ❌ 遗漏小节 (${r.missingSections.length})\n`
      for (const item of r.missingSections) {
        md += `- ${item}\n`
      }
      md += '\n'
    }

    if (r.translationIssues.length > 0) {
      md += `#### ⚠️ 翻译与术语问题 (${r.translationIssues.length})\n`
      for (const item of r.translationIssues) {
        md += `- ${item}\n`
      }
      md += '\n'
    }

    if (r.error) {
      md += `> ⚠️ **执行异常**: ${r.error}\n\n`
    }

    md += '---\n\n'
  }

  const mdPath = join(reportsDir, `${filenamePrefix}.md`)
  await writeFile(mdPath, md, 'utf-8')

  console.log(`\n📄 审查完成，报告已保存:`)
  console.log(`   JSON: ${jsonPath}`)
  console.log(`   MD:   ${mdPath}`)
}

// ==========================================
// 7. Main CLI Entry
// ==========================================
async function main() {
  const argv = await yargs(hideBin(process.argv))
    .option('recheck-filtered', {
      type: 'boolean',
      default: false,
      description: '筛选并重新检测历史报告中 <70 分或不完整的文章'
    })
    .option('report', {
      type: 'string',
      description: '指定筛选的旧报告 JSON 文件路径 (默认自动查找 reports/ 最新的报告)'
    })
    .option('max-score', {
      type: 'number',
      default: 70,
      description: '筛选分数上限阈值（默认 < 70）'
    })
    .option('all', {
      type: 'boolean',
      default: false,
      description: '全量检查后端所有 help: 开头的文档'
    })
    .option('limit', {
      type: 'number',
      description: '限制检查的文章数量（用于批量测试）'
    })
    .option('concurrency', {
      type: 'number',
      default: 1,
      description: '并发检查数（默认 1，避免触发每分钟速率限制）'
    })
    .option('identifier', {
      type: 'string',
      description: '指定检查单篇文章 Identifier (如 help:writing-and-editing-basics)'
    })
    .option('page-id', {
      type: 'string',
      description: '指定后端页面 ID'
    })
    .help().argv

  const results: ComparisonResult[] = []

  if (argv['recheck-filtered']) {
    const reportPath = argv.report ?? (await findLatestReportJson())
    if (!reportPath) {
      console.error('❌ 未找到历史报告 JSON 文件，请先运行 --all 或使用 --report 指定路径')
      process.exit(1)
    }

    console.log(`📂 读取历史报告: ${reportPath}`)
    const reportContent = await readFile(reportPath, 'utf-8')
    const prevResults = JSON.parse(reportContent) as ComparisonResult[]

    const maxScore = argv['max-score'] ?? 70
    const filtered = prevResults.filter(
      item => (typeof item.score === 'number' && item.score < maxScore) || !item.isComplete
    )

    console.log(`🔍 筛选条件: 评分 < ${maxScore} 或 完整度为不完整`)
    console.log(`📊 共筛选出 ${filtered.length} 篇待重新检测的文章：\n`)
    filtered.forEach((f, i) => {
      console.log(`  ${i + 1}. [${f.identifier}] 原评分: ${f.score}, 原完整度: ${f.isComplete ? '完整' : '不完整'}`)
    })

    const total = filtered.length
    const concurrency = Math.max(1, argv.concurrency)

    for (let i = 0; i < filtered.length; i += concurrency) {
      const batch = filtered.slice(i, i + concurrency)
      const batchResults = await Promise.all(
        batch.map(async (item, idx) => {
          const currentIndex = i + idx + 1
          try {
            const page = (await notionClient.pages.retrieve({
              page_id: item.backendPageId
            })) as PageObjectResponse
            return await checkSingleItem(page, `${currentIndex}/${total}`)
          } catch (err: any) {
            console.error(`❌ 获取后端页面 ${item.backendPageId} 失败: ${err.message}`)
            return {
              identifier: item.identifier,
              backendPageId: item.backendPageId,
              frontendPageId: item.frontendPageId,
              backendTitle: item.backendTitle,
              frontendTitle: item.frontendTitle,
              isUntranslated: item.isUntranslated,
              isComplete: item.isComplete,
              score: item.score,
              missingSections: item.missingSections,
              translationIssues: item.translationIssues,
              summary: item.summary,
              timestamp: new Date().toISOString(),
              error: err.message
            }
          }
        })
      )
      results.push(...batchResults)
    }

    await saveReports(results, 'check-filtered')
    return
  }

  if (argv.all) {
    let pages = await getAllBackendHelpPages()
    if (argv.limit && argv.limit > 0) {
      pages = pages.slice(0, argv.limit)
      console.log(`ℹ️ 已启用 --limit，本次只检查前 ${argv.limit} 篇文档。`)
    }

    const total = pages.length
    const concurrency = Math.max(1, argv.concurrency)

    for (let i = 0; i < pages.length; i += concurrency) {
      const batch = pages.slice(i, i + concurrency)
      const batchResults = await Promise.all(
        batch.map((page, idx) => {
          const currentIndex = i + idx + 1
          return checkSingleItem(page, `${currentIndex}/${total}`)
        })
      )
      results.push(...batchResults)
    }
  } else if (argv['page-id']) {
    const page = (await notionClient.pages.retrieve({
      page_id: argv['page-id']
    })) as PageObjectResponse
    const res = await checkSingleItem(page, '1/1')
    results.push(res)
  } else {
    const targetIdentifier = argv.identifier ?? 'help:writing-and-editing-basics'
    const page = await getBackendPageByIdentifier(targetIdentifier)
    if (!page) {
      console.error(`❌ 未找到 Identifier 为 "${targetIdentifier}" 的后端页面`)
      process.exit(1)
    }
    const res = await checkSingleItem(page, '1/1')
    results.push(res)
  }

  // 终端打印简要汇总
  if (results.length === 1) {
    const r = results[0]!
    console.log('\n================ 对比结果 ================')
    console.log(`标识符:     ${r.identifier}`)
    console.log(`前台标题:   ${r.frontendTitle}`)
    console.log(`综合评分:   ${r.score} / 100`)
    console.log(`完整状态:   ${r.isComplete ? '✅ 完整' : '❌ 不完整 (有缺失)'}`)
    console.log(`翻译状态:   ${r.isUntranslated ? '⚠️ 纯英文 (未翻译)' : '✅ 已翻译'}`)
    console.log(`评价总结:   ${r.summary}`)
    if (r.missingSections.length > 0) {
      console.log(`\n遗漏内容 (${r.missingSections.length}):`)
      r.missingSections.forEach(s => console.log(`  - ❌ ${s}`))
    }
    if (r.translationIssues.length > 0) {
      console.log(`\n翻译问题 (${r.translationIssues.length}):`)
      r.translationIssues.forEach(s => console.log(`  - ⚠️ ${s}`))
    }
    console.log('==========================================\n')
  }

  await saveReports(results)
}

main().catch(err => {
  console.error('❌ 执行出错:', err)
  process.exit(1)
})
