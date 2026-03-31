import { collectPaginatedAPI, type BlockObjectResponse } from '@notionhq/client'

import { notionClient } from './client'
import { NOTION_LAYOUT_CONFIG } from './layout-config'

type DescriptionCalloutTone = 'article' | 'category'

function getDescriptionCalloutStyle(tone: DescriptionCalloutTone) {
  if (tone === 'category') {
    return {
      calloutColor: NOTION_LAYOUT_CONFIG.category.descriptionCallout.backgroundColor,
      labelColor: NOTION_LAYOUT_CONFIG.category.descriptionCallout.labelColor,
      bodyColor: NOTION_LAYOUT_CONFIG.category.descriptionCallout.bodyColor
    }
  }

  return {
    calloutColor: NOTION_LAYOUT_CONFIG.article.descriptionCallout.backgroundColor,
    labelColor: NOTION_LAYOUT_CONFIG.article.descriptionCallout.labelColor,
    bodyColor: NOTION_LAYOUT_CONFIG.article.descriptionCallout.bodyColor
  }
}

function buildDescriptionCalloutBlock(description: string, tone: DescriptionCalloutTone) {
  const style = getDescriptionCalloutStyle(tone)

  return {
    object: 'block' as const,
    type: 'callout' as const,

    callout: {
      icon: undefined,
      rich_text: [
        {
          type: 'text' as const,
          text: { content: '简介' },
          annotations: {
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: style.labelColor
          }
        }
      ],
      color: style.calloutColor,
      children: [
        {
          object: 'block' as const,
          type: 'divider' as const,
          divider: {}
        },
        {
          object: 'block' as const,
          type: 'paragraph' as const,
          paragraph: {
            rich_text: [
              {
                type: 'text' as const,
                text: { content: description },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: style.bodyColor
                }
              }
            ]
          }
        }
      ]
    }
  }
}

async function listTopLevelBlocks(pageId: string) {
  const blocks = await collectPaginatedAPI(notionClient.blocks.children.list, {
    block_id: pageId
  })

  return blocks.filter((block): block is BlockObjectResponse => 'type' in block)
}

function isLegacyIntroHeadingBlock(block: BlockObjectResponse | undefined) {
  if (!block || block.type !== 'paragraph') {
    return false
  }

  const plainText = block.paragraph.rich_text
    .map(item => item.plain_text)
    .join('')
    .trim()
  return plainText === '简介'
}

function getDescriptionSectionStartIndex(blocks: Awaited<ReturnType<typeof listTopLevelBlocks>>) {
  const firstBlock = blocks[0]

  if (isLegacyIntroHeadingBlock(firstBlock)) {
    return 0
  }

  if (firstBlock) {
    return 1
  }

  return 0
}

export async function replacePageContentWithMarkdown(pageId: string, markdown: string) {
  await notionClient.pages.updateMarkdown({
    page_id: pageId,
    type: 'replace_content',
    replace_content: {
      new_str: markdown,
      allow_deleting_content: true
    }
  })
}

export async function applyDescriptionCallout(
  pageId: string,
  description: string | null,
  tone: DescriptionCalloutTone
) {
  if (!description?.trim()) {
    return
  }

  const topLevelBlocks = await listTopLevelBlocks(pageId)
  const startIndex = getDescriptionSectionStartIndex(topLevelBlocks)
  const introStartBlock = topLevelBlocks[startIndex]

  if (!introStartBlock) {
    return
  }

  if (introStartBlock.type === 'callout') {
    return
  }

  const dividerIndex = topLevelBlocks.findIndex(
    (block, index) => index >= startIndex && block.type === 'divider'
  )

  if (dividerIndex === -1) {
    return
  }

  const introBlocks = topLevelBlocks.slice(startIndex, dividerIndex + 1)

  for (const block of introBlocks) {
    await notionClient.blocks.delete({ block_id: block.id })
  }

  const beforeIntroBlock = startIndex > 0 ? topLevelBlocks[startIndex - 1] : undefined

  await notionClient.blocks.children.append({
    block_id: pageId,
    children: [
      buildDescriptionCalloutBlock(description, tone),
      {
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: '' } }] }
      }
    ],
    position: beforeIntroBlock
      ? {
          type: 'after_block',
          after_block: { id: beforeIntroBlock.id }
        }
      : {
          type: 'start'
        }
  })
}
