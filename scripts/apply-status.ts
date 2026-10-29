/**
 * 状态回写脚本：把审计报告里判定为 FALSE_POSITIVE 的页面状态改回 Done。
 *
 * 设计原则：
 *   1. 默认 dry-run，必须显式加 --apply 才真写 Notion
 *   2. 只处理 CSV 里 verdict == FALSE_POSITIVE 的行，白名单之外一律不碰
 *   3. 只改当前状态确实是 In Progress 的页面，已经是 Done 的跳过
 *   4. 写入前校验目标状态选项在数据源里真实存在，不存在直接退出
 *   5. 逐条记录改动前后的值，输出 change log
 *
 * 用法：
 *   bun run apply-status                                  # dry-run，只打印
 *   bun run apply-status -- --apply                       # 真写
 *   bun run apply-status -- --file reports/xxx.csv --apply
 *   bun run apply-status -- --scope frontend --apply       # 只改前端
 */

import { mkdirSync } from 'node:fs'
import { readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import config from '@/config'
import { notionClient } from '@/notion/client'
import { BACKEND_STATUS_PROPERTY, FRONTEND_STATUS_PROPERTY } from '@/notion/properties'

const REPO_ROOT = fileURLToPath(new URL('../', import.meta.url))
const REPORTS_DIR = 'reports'

const IN_PROGRESS = 'In Progress'

type Scope = 'both' | 'frontend' | 'backend'

type ApplyOptions = {
  file: string | null
  status: string
  scope: Scope
  apply: boolean
}

type AuditRow = Record<string, string>

type ChangeRecord = {
  identifier: string
  side: 'frontend' | 'backend'
  page_id: string
  before: string
  after: string
  result: 'updated' | 'failed'
  error: string
}

// ---------------------------------------------------------------------------
// 参数
// ---------------------------------------------------------------------------

function parseArgs(argv: string[]): ApplyOptions {
  const options: ApplyOptions = {
    file: null,
    status: 'Done',
    scope: 'both',
    apply: false
  }

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--apply') {
      options.apply = true
    } else if (arg === '--file') {
      options.file = argv[index + 1] ?? null
      index += 1
    } else if (arg === '--status') {
      options.status = argv[index + 1] ?? options.status
      index += 1
    } else if (arg === '--scope') {
      const scope = argv[index + 1]
      if (scope === 'both' || scope === 'frontend' || scope === 'backend') {
        options.scope = scope
      }
      index += 1
    }
  }

  return options
}

// ---------------------------------------------------------------------------
// CSV
// ---------------------------------------------------------------------------

/** 极简 CSV 解析，支持引号包裹与转义双引号 */
function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let inQuotes = false

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index]

    if (inQuotes) {
      if (char === '"') {
        if (text[index + 1] === '"') {
          field += '"'
          index += 1
        } else {
          inQuotes = false
        }
      } else {
        field += char
      }
      continue
    }

    if (char === '"') {
      inQuotes = true
    } else if (char === ',') {
      row.push(field)
      field = ''
    } else if (char === '\n') {
      row.push(field)
      rows.push(row)
      row = []
      field = ''
    } else if (char !== '\r') {
      field += char
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field)
    rows.push(row)
  }

  return rows
}

function loadAuditRows(filePath: string): AuditRow[] {
  const raw = readFileSync(filePath, 'utf8')
  const [header = [], ...body] = parseCsv(raw)

  return body
    .filter(cells => cells.length >= header.length && cells[0])
    .map(cells => {
      const record: AuditRow = {}
      header.forEach((key, index) => {
        record[key] = cells[index] ?? ''
      })
      return record
    })
}

function findLatestAuditCsv() {
  const files = readdirSync(`${REPO_ROOT}${REPORTS_DIR}`)
    .filter(name => /^audit-status-.*\.csv$/.test(name))
    .sort()

  const latest = files.at(-1)
  if (!latest) {
    throw new Error(`在 ${REPORTS_DIR}/ 下找不到 audit-status-*.csv，请先运行 bun run audit`)
  }
  return `${REPORTS_DIR}/${latest}`
}

function csvEscape(value: string) {
  return /[",\n\r]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value
}

// ---------------------------------------------------------------------------
// 校验
// ---------------------------------------------------------------------------

async function readStatusOptions(dataSourceId: string, label: string) {
  const dataSource = await notionClient.dataSources.retrieve({
    data_source_id: dataSourceId
  })

  const properties = dataSource.properties as Record<string, { type?: string; status?: { options?: { name?: string }[] } }> | undefined
  const statusProperty = properties?.[FRONTEND_STATUS_PROPERTY]

  if (!statusProperty || statusProperty.type !== 'status') {
    throw new Error(`${label} 数据源上没有名为 "${FRONTEND_STATUS_PROPERTY}" 的 status 属性`)
  }

  const options = (statusProperty.status?.options ?? [])
    .map(option => option.name)
    .filter((name): name is string => Boolean(name))

  return options
}

function assertStatusExists(options: string[], target: string, label: string) {
  if (!options.includes(target)) {
    throw new Error(
      `${label} 的状态选项里没有 "${target}"。现有选项：${options.join(' / ') || '(空)'}`
    )
  }
}

// ---------------------------------------------------------------------------
// 主流程
// ---------------------------------------------------------------------------

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function main() {
  const options = parseArgs(Bun.argv.slice(2))
  const csvPath = options.file ?? findLatestAuditCsv()

  console.log('=== 状态回写 ===')
  console.log(`  报告文件 : ${csvPath}`)
  console.log(`  目标状态 : ${options.status}`)
  console.log(`  作用范围 : ${options.scope}`)
  console.log(`  模式     : ${options.apply ? '*** 真写 (--apply) ***' : 'dry-run（不写入）'}`)
  console.log('')

  const rows = loadAuditRows(`${REPO_ROOT}${csvPath}`)
  const targets = rows.filter(row => row.verdict === 'FALSE_POSITIVE')

  console.log(`报告共 ${rows.length} 行，其中 FALSE_POSITIVE ${targets.length} 行`)

  if (targets.length === 0) {
    console.log('没有需要处理的页面，退出。')
    return
  }

  // 校验目标状态存在
  const frontendOptions = await readStatusOptions(config.frontendDatasourceId!, 'Frontend')
  const backendOptions = await readStatusOptions(config.backendDatasourceId!, 'Backend')
  assertStatusExists(frontendOptions, options.status, 'Frontend')
  assertStatusExists(backendOptions, options.status, 'Backend')
  console.log(`  状态选项校验通过：Frontend=[${frontendOptions.join(', ')}] Backend=[${backendOptions.join(', ')}]`)
  console.log('')

  const changes: ChangeRecord[] = []
  const skipped: { identifier: string; side: string; status: string }[] = []

  // 规划：决定每条要改哪几个页面
  type Plan = { identifier: string; side: 'frontend' | 'backend'; pageId: string; current: string }
  const plans: Plan[] = []

  for (const row of targets) {
    const identifier = row.identifier ?? ''
    if (!identifier) {
      continue
    }

    if (options.scope !== 'backend') {
      const frontendPageId = row.frontend_page_id ?? ''
      const frontendStatus = row.frontend_status ?? ''
      if (frontendPageId) {
        if (frontendStatus === IN_PROGRESS) {
          plans.push({ identifier, side: 'frontend', pageId: frontendPageId, current: frontendStatus })
        } else {
          skipped.push({ identifier, side: 'frontend', status: frontendStatus })
        }
      }
    }

    if (options.scope !== 'frontend') {
      const backendPageId = row.backend_page_id ?? ''
      const backendStatus = row.backend_status ?? ''
      if (backendPageId) {
        if (backendStatus === IN_PROGRESS) {
          plans.push({ identifier, side: 'backend', pageId: backendPageId, current: backendStatus })
        } else {
          skipped.push({ identifier, side: 'backend', status: backendStatus })
        }
      }
    }
  }

  console.log(`计划更新 ${plans.length} 个页面（${targets.length} 条记录 × ${options.scope === 'both' ? 2 : 1} 侧）`)
  if (skipped.length > 0) {
    console.log(`跳过 ${skipped.length} 个非 ${IN_PROGRESS} 的页面`)
  }
  console.log('')

  if (!options.apply) {
    console.log('将要变更的页面：')
    console.log('')
    for (const plan of plans) {
      const row = targets.find(item => item.identifier === plan.identifier)
      console.log(
        `  [${plan.side.padEnd(8)}] ${plan.identifier.padEnd(52)} ${plan.current} -> ${options.status}   ${row?.title ?? ''}`
      )
    }
    console.log('')
    console.log('dry-run 结束，未写入任何数据。确认无误后加 --apply 执行。')
    return
  }

  // 真写
  const propertyName = FRONTEND_STATUS_PROPERTY
  let done = 0

  for (const plan of plans) {
    try {
      await notionClient.pages.update({
        page_id: plan.pageId,
        properties: {
          [propertyName]: {
            status: { name: options.status }
          }
        }
      })

      changes.push({
        identifier: plan.identifier,
        side: plan.side,
        page_id: plan.pageId,
        before: plan.current,
        after: options.status,
        result: 'updated',
        error: ''
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      changes.push({
        identifier: plan.identifier,
        side: plan.side,
        page_id: plan.pageId,
        before: plan.current,
        after: options.status,
        result: 'failed',
        error: message
      })
      console.error(`  失败 ${plan.identifier} (${plan.side}): ${message}`)
    }

    done += 1
    process.stdout.write(`\r  进度 ${done}/${plans.length}`)
    await sleep(200)
  }

  process.stdout.write('\r' + ' '.repeat(30) + '\r')

  // change log
  mkdirSync(`${REPO_ROOT}${REPORTS_DIR}`, { recursive: true })
  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const logPath = `${REPORTS_DIR}/apply-status-${stamp}.csv`
  const header = 'identifier,side,page_id,before,after,result,error'
  const body = changes
    .map(change =>
      [change.identifier, change.side, change.page_id, change.before, change.after, change.result, change.error]
        .map(value => csvEscape(String(value)))
        .join(',')
    )
    .join('\n')

  await Bun.write(`${REPO_ROOT}${logPath}`, `${header}\n${body}\n`)

  const updated = changes.filter(change => change.result === 'updated').length
  const failed = changes.filter(change => change.result === 'failed').length

  console.log('')
  console.log('=== 完成 ===')
  console.log(`  成功 : ${updated}`)
  console.log(`  失败 : ${failed}`)
  console.log(`  日志 : ${logPath}`)

  if (failed > 0) {
    process.exitCode = 1
  }
}

await main().catch(error => {
  console.error('\n执行失败：', error)
  process.exit(1)
})
