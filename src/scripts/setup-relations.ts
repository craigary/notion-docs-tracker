import { collectPaginatedAPI, isFullPage } from '@notionhq/client'
import { notionClient } from '../notion/client'
import config from '../../config'
console.log('[SETUP] 开始设置 Notion 页面关系...')

// Get All Pages From Backend

// const pages = await notionClient.databases.query({ database_id: config.backendDbId! })

const backendPages = await collectPaginatedAPI(notionClient.databases.query, { database_id: config.backendDbId! })
console.log(`[SETUP] 获取到 ${backendPages.length} 个后端页面`)

// Get All Pages From Frontend, and create a reference
const frontendPages = await collectPaginatedAPI(notionClient.databases.query, { database_id: config.frontendDbId! })
console.log(`[SETUP] 获取到 ${frontendPages.length} 个前端页面`)

const frontendPagesRef: Map<string, string> = new Map()
frontendPages.forEach((page) => {
  if (isFullPage(page)) {
    const identifier =
      page.properties.Identifier.type === 'rich_text'
        ? page.properties.Identifier.rich_text.map((i) => i.plain_text).join('')
        : undefined

    if (identifier) {
      frontendPagesRef.set(identifier, page.id)
    }
  }
})
console.log(`[SETUP] 创建了 ${frontendPagesRef.size} 个前端页面引用`)

let processedCount = 0
let updatedCount = 0

for (let i = 0; i < backendPages.length; i++) {
  const page = backendPages[i]

  if (isFullPage(page)) {
    const identifier =
      page.properties['Identifier'].type === 'rich_text'
        ? page.properties.Identifier.rich_text.map((i) => i.plain_text).join('')
        : undefined

    if (!identifier) {
      continue
    }

    const frontendPageId = frontendPagesRef.get(identifier)
    if (!frontendPageId) {
      continue
    }

    await notionClient.pages.update({
      page_id: page.id,
      properties: {
        // Status: { type: 'status', status: { name: 'In progress' } },
        Frontend: {
          type: 'relation',
          relation: [{ id: frontendPageId }],
        },
      },
    })

    processedCount++
    updatedCount++

    // 每10个页面显示一次进度
    if (processedCount % 10 === 0) {
      console.log(`[SETUP] 已处理 ${processedCount}/${backendPages.length} 个页面`)
    }
  }
}

console.log(`[SETUP] 完成，共更新 ${updatedCount} 个页面的关系`)
