// 1. Fetch All Categories
// 2. For Each Category, Find it's frontend page id, also Find Articles (through backend db), and make sure they are in the right order
// 3. Find Related Page ID by Article Identifier in backend
// 4. Find the last toggle block, then find nested synced block, Create link to page block

import { collectPaginatedAPI, isFullBlock, isFullPage, type BlockObjectRequest } from '@notionhq/client'
import { fetchAllNotionHelpDocs } from '../website'
import { fetchCategoryContent } from '../website/category'
import { notionClient } from '../notion/client'
import config from '../../config'

const { categories } = await fetchAllNotionHelpDocs()

// get name <-> frontend PageId ref fron backendDB
const fetchFrontendRef = async () => {
  const pages = await collectPaginatedAPI(notionClient.databases.query, { database_id: config.backendDbId! })

  const ref: Map<string, string> = new Map()
  pages.forEach((page) => {
    if (isFullPage(page)) {
      const key =
        page.properties.Name.type === 'title' ? page.properties.Name.title.map((i) => i.plain_text).join('') : undefined

      const frontendPageId =
        page.properties.Frontend.type === 'relation' ? page.properties.Frontend.relation?.[0]?.id : undefined

      if (key && frontendPageId) {
        ref.set(key, frontendPageId)
      } else {
        console.log('这个页面好像不对劲', key)
      }
    }
  })

  return ref
}
const frontendRef = await fetchFrontendRef()

for (const category of categories) {
  const { content, title } = await fetchCategoryContent(category)
  const contentArr = content.split('\r\n').filter(Boolean)
  const articleList = contentArr.filter((_, index) => index > 6)
  const articleIds = articleList.map((name) => frontendRef.get(name)).filter((i): i is string => Boolean(i))
  const frontendCategoryId = frontendRef.get(title)

  // 1. Find last Toggle block, then find the synced block
  // 2. Update synced block with articleIds, with link to page blocxk

  const { results: blocks } = await notionClient.blocks.children.list({
    block_id: frontendCategoryId!,
  })

  const toggleBlock = blocks.find((block) => isFullBlock(block) && block.type === 'toggle')
  if (!toggleBlock) {
    console.error('No toggle block found in category:', frontendCategoryId)
    continue
  }
  const toggleBlockId = toggleBlock.id

  const { results: toggleBlockChildren } = await notionClient.blocks.children.list({ block_id: toggleBlockId })
  const thatSyncedBlock = toggleBlockChildren.find((block) => isFullBlock(block) && block.type === 'synced_block')
  if (!thatSyncedBlock) {
    console.error('No synced block found in toggle block:', toggleBlockId)
    continue
  }

  const processedBlocks = articleIds.reduce((prev, curr, index, array) => {
    if (index < 3) {
      prev.push({
        type: 'link_to_page',
        link_to_page: { type: 'page_id', page_id: curr },
      })
    }

    if (index === 3) {
      prev.push({
        type: 'toggle',
        toggle: {
          rich_text: [
            { type: 'text', text: { content: '查看更多 ' } },
            {
              type: 'text',
              text: { content: `${array.length - 3}` },
              annotations: { code: true, color: 'purple_background' },
            },
          ],
          children: [{ type: 'link_to_page', link_to_page: { type: 'page_id', page_id: curr } }],
        },
      })
    }

    // Fix: Ensure children array exists before pushing
    if (index > 3 && prev[3] && prev[3].type === 'toggle' && prev[3].toggle?.children) {
      prev[3].toggle.children.push({
        type: 'link_to_page',
        link_to_page: { type: 'page_id', page_id: curr },
      })
    }

    return prev
  }, [] as BlockObjectRequest[])

  await notionClient.blocks.children.append({
    block_id: thatSyncedBlock.id,
    children: processedBlocks,
  })
}
