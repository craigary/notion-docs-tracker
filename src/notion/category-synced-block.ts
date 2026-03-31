import {
  collectPaginatedAPI,
  isFullPage,
  type BlockObjectRequest,
  type BlockObjectResponse,
  type PageObjectResponse
} from '@notionhq/client'

import config from '../config'
import { notionClient } from './client'
import { NOTION_LAYOUT_CONFIG, type NotionForegroundColor } from './layout-config'
import {
  FRONTEND_IDENTIFIER_PROPERTY,
  FRONTEND_ORDER_PROPERTY,
  FRONTEND_PARENT_PAGE_PROPERTY,
  FRONTEND_TITLE_PROPERTY,
  getNumberPropertyValue,
  getPlainTextPropertyValue
} from './properties'

type ToggleBlockVariant = Extract<BlockObjectRequest, { type?: 'toggle' }>
type LinkToPageBlockVariant = Extract<BlockObjectRequest, { type?: 'link_to_page' }>
type SyncedBlockVariant = Extract<BlockObjectRequest, { type?: 'synced_block' }>

type RichTextItemRequest = ToggleBlockVariant['toggle']['rich_text'][number]

type LinkToPageBlock = Omit<LinkToPageBlockVariant, 'link_to_page'> & {
  link_to_page: { page_id: string }
}

type SyncedBlockRequest = Omit<SyncedBlockVariant, 'synced_block'> & {
  synced_block: { synced_from: null }
}

type ToggleBlockRequest = Omit<ToggleBlockVariant, 'toggle'> & {
  toggle: {
    rich_text: RichTextItemRequest[]
    color?: NotionForegroundColor
    children?: ToggleBlockVariant['toggle']['children']
  }
}

type CategoryBlock = LinkToPageBlock | ToggleBlockRequest

const SOURCE_TOGGLE_TITLE = NOTION_LAYOUT_CONFIG.category.syncedBlock.sourceToggleTitle
const CATEGORY_SYNC_VISIBLE_ARTICLE_COUNT =
  NOTION_LAYOUT_CONFIG.category.syncedBlock.visibleArticleCount

type CategoryArticlePage = {
  id: string
  title: string
  identifier: string
  order: number
}

function annotatedText(
  content: string,
  annotations?: {
    color?: NotionForegroundColor
    bold?: boolean
    code?: boolean
  }
) {
  return {
    type: 'text' as const,
    text: { content },
    annotations: {
      bold: annotations?.bold ?? false,
      italic: false,
      strikethrough: false,
      underline: false,
      code: annotations?.code ?? false,
      color: annotations?.color ?? 'default'
    }
  }
}

function buildSourceToggleTitleRichText() {
  return [
    annotatedText(SOURCE_TOGGLE_TITLE, {
      color: NOTION_LAYOUT_CONFIG.category.syncedBlock.toggleColor
    })
  ]
}

function buildMoreToggleTitleRichText(remainingCount: number) {
  return [
    annotatedText(NOTION_LAYOUT_CONFIG.category.syncedBlock.moreToggleLabel, {
      color: NOTION_LAYOUT_CONFIG.category.syncedBlock.toggleColor
    }),
    annotatedText(String(remainingCount), {
      color: NOTION_LAYOUT_CONFIG.category.syncedBlock.moreToggleCount.color,
      bold: NOTION_LAYOUT_CONFIG.category.syncedBlock.moreToggleCount.bold,
      code: NOTION_LAYOUT_CONFIG.category.syncedBlock.moreToggleCount.code
    })
  ]
}

function buildEmptyParagraphBlock() {
  return {
    object: 'block' as const,
    type: 'paragraph' as const,
    paragraph: {
      rich_text: []
    }
  }
}

function buildOriginalSyncedBlock(): SyncedBlockRequest {
  return {
    object: 'block' as const,
    type: 'synced_block' as const,
    synced_block: {
      synced_from: null
    }
  }
}

function buildLinkToPageBlock(pageId: string) {
  return {
    object: 'block' as const,
    type: 'link_to_page' as const,
    link_to_page: {
      page_id: pageId
    }
  }
}

function buildToggleBlockWithRichText(
  titleRichText: RichTextItemRequest[],
  children: (LinkToPageBlock | SyncedBlockRequest)[]
): ToggleBlockRequest {
  return {
    object: 'block' as const,
    type: 'toggle' as const,
    toggle: {
      rich_text: titleRichText,
      color: NOTION_LAYOUT_CONFIG.category.syncedBlock.toggleColor,
      children
    }
  }
}

function buildSourceToggleBlock(): ToggleBlockRequest {
  return {
    object: 'block' as const,
    type: 'toggle' as const,
    toggle: {
      rich_text: buildSourceToggleTitleRichText(),
      children: [buildOriginalSyncedBlock()]
    }
  }
}

async function listBlockChildren(blockId: string) {
  const blocks = await collectPaginatedAPI(notionClient.blocks.children.list, {
    block_id: blockId
  })

  return blocks.filter((block): block is BlockObjectResponse => 'type' in block)
}

function getBlockPlainText(block: BlockObjectResponse) {
  switch (block.type) {
    case 'paragraph':
      return block.paragraph.rich_text.map(item => item.plain_text).join('')
    case 'toggle':
      return block.toggle.rich_text.map(item => item.plain_text).join('')
    default:
      return ''
  }
}

function isEmptyParagraphBlock(block: BlockObjectResponse | undefined) {
  return block?.type === 'paragraph' && getBlockPlainText(block).trim() === ''
}

async function ensureSourceToggleStyle(toggleBlockId: string) {
  await notionClient.blocks.update({
    block_id: toggleBlockId,
    type: 'toggle',
    toggle: {
      rich_text: buildSourceToggleTitleRichText(),
      color: NOTION_LAYOUT_CONFIG.category.syncedBlock.toggleColor
    }
  })
}

async function ensureSpacerBeforeToggle(pageId: string, toggleBlockId: string) {
  const topLevelBlocks = await listBlockChildren(pageId)
  const toggleIndex = topLevelBlocks.findIndex(block => block.id === toggleBlockId)

  if (toggleIndex === -1) {
    throw new Error(`Could not locate toggle ${toggleBlockId} on page ${pageId}.`)
  }

  const previousBlock = toggleIndex > 0 ? topLevelBlocks[toggleIndex - 1] : undefined
  if (isEmptyParagraphBlock(previousBlock)) {
    return
  }

  await notionClient.blocks.children.append({
    block_id: pageId,
    children: [buildEmptyParagraphBlock()],
    position: previousBlock
      ? {
          type: 'after_block',
          after_block: { id: previousBlock.id }
        }
      : {
          type: 'start'
        }
  })
}

async function ensureOriginalSyncedBlock(toggleBlockId: string) {
  const children = await listBlockChildren(toggleBlockId)
  const originalSyncedBlock = children.find(
    child => child.type === 'synced_block' && child.synced_block.synced_from === null
  )

  if (originalSyncedBlock?.type === 'synced_block') {
    return originalSyncedBlock
  }

  await notionClient.blocks.children.append({
    block_id: toggleBlockId,
    children: [buildOriginalSyncedBlock()]
  })

  const refreshedChildren = await listBlockChildren(toggleBlockId)
  const createdOriginalSyncedBlock = refreshedChildren.find(
    child => child.type === 'synced_block' && child.synced_block.synced_from === null
  )

  if (!createdOriginalSyncedBlock || createdOriginalSyncedBlock.type !== 'synced_block') {
    throw new Error(`Failed to create original synced block inside toggle ${toggleBlockId}.`)
  }

  return createdOriginalSyncedBlock
}

async function fetchCategoryArticlePages(categoryPageId: string) {
  const queryResults = await collectPaginatedAPI(notionClient.dataSources.query, {
    data_source_id: config.frontendDatasourceId!,
    filter: {
      property: FRONTEND_PARENT_PAGE_PROPERTY,
      relation: { contains: categoryPageId }
    }
  })

  return queryResults
    .filter((result): result is PageObjectResponse => isFullPage(result))
    .map(page => {
      const title = getPlainTextPropertyValue(page, FRONTEND_TITLE_PROPERTY) ?? page.id
      const identifier = getPlainTextPropertyValue(page, FRONTEND_IDENTIFIER_PROPERTY) ?? page.id
      const order = getNumberPropertyValue(page, FRONTEND_ORDER_PROPERTY) ?? Number.MAX_SAFE_INTEGER

      return {
        id: page.id,
        title,
        identifier,
        order
      } satisfies CategoryArticlePage
    })
    .toSorted((left, right) => {
      if (left.order !== right.order) {
        return left.order - right.order
      }

      return left.title.localeCompare(right.title, 'en')
    })
}

function buildCategorySyncedBlockChildren(articlePages: CategoryArticlePage[]): CategoryBlock[] {
  const visiblePages = articlePages.slice(0, CATEGORY_SYNC_VISIBLE_ARTICLE_COUNT)
  const remainingPages = articlePages.slice(CATEGORY_SYNC_VISIBLE_ARTICLE_COUNT)
  const blocks: CategoryBlock[] = visiblePages.map(page => buildLinkToPageBlock(page.id))

  if (remainingPages.length > 0) {
    blocks.push(
      buildToggleBlockWithRichText(
        buildMoreToggleTitleRichText(remainingPages.length),
        remainingPages.map(page => buildLinkToPageBlock(page.id))
      )
    )
  }

  return blocks
}

async function replaceSyncedBlockChildren(blockId: string, newChildren: CategoryBlock[]) {
  const existingChildren = await listBlockChildren(blockId)

  for (const child of existingChildren) {
    await notionClient.blocks.delete({ block_id: child.id })
  }

  if (newChildren.length === 0) {
    return
  }

  await notionClient.blocks.children.append({
    block_id: blockId,
    children: newChildren
  })
}

export async function ensureCategorySyncedBlockScaffold(pageId: string) {
  const topLevelBlocks = await listBlockChildren(pageId)

  for (const block of topLevelBlocks) {
    if (block.type !== 'toggle' || getBlockPlainText(block) !== SOURCE_TOGGLE_TITLE) {
      continue
    }

    await ensureSourceToggleStyle(block.id)
    await ensureSpacerBeforeToggle(pageId, block.id)
    const originalSyncedBlock = await ensureOriginalSyncedBlock(block.id)

    return {
      toggleBlockId: block.id,
      originalSyncedBlockId: originalSyncedBlock.id
    }
  }

  await notionClient.blocks.children.append({
    block_id: pageId,
    children: [buildSourceToggleBlock()]
  })

  const refreshedBlocks = await listBlockChildren(pageId)
  const createdToggle = refreshedBlocks.find(
    block => block.type === 'toggle' && getBlockPlainText(block) === SOURCE_TOGGLE_TITLE
  )

  if (!createdToggle || createdToggle.type !== 'toggle') {
    throw new Error(`Failed to create source toggle on page ${pageId}.`)
  }

  await ensureSourceToggleStyle(createdToggle.id)
  await ensureSpacerBeforeToggle(pageId, createdToggle.id)
  const originalSyncedBlock = await ensureOriginalSyncedBlock(createdToggle.id)

  return {
    toggleBlockId: createdToggle.id,
    originalSyncedBlockId: originalSyncedBlock.id
  }
}

export async function syncCategorySyncedBlockContent(pageId: string) {
  const scaffold = await ensureCategorySyncedBlockScaffold(pageId)
  const articlePages = await fetchCategoryArticlePages(pageId)
  const nextChildren = buildCategorySyncedBlockChildren(articlePages)

  await replaceSyncedBlockChildren(scaffold.originalSyncedBlockId, nextChildren)

  return {
    toggleBlockId: scaffold.toggleBlockId,
    originalSyncedBlockId: scaffold.originalSyncedBlockId,
    articleCount: articlePages.length,
    visibleCount: Math.min(articlePages.length, CATEGORY_SYNC_VISIBLE_ARTICLE_COUNT),
    collapsedCount: Math.max(articlePages.length - CATEGORY_SYNC_VISIBLE_ARTICLE_COUNT, 0)
  }
}
