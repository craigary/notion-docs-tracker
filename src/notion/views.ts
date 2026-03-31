import { collectPaginatedAPI, type BlockObjectResponse } from '@notionhq/client'

import config from '../config'
import { notionClient } from './client'
import { FRONTEND_COVER_PROPERTY } from './properties'

const CATEGORY_ARTICLES_VIEW_NAME = '文章列表'

let frontendCoverPropertyIdPromise: Promise<string> | null = null

async function listTopLevelBlocks(pageId: string) {
  const blocks = await collectPaginatedAPI(notionClient.blocks.children.list, {
    block_id: pageId
  })

  return blocks.filter((block): block is BlockObjectResponse => 'type' in block)
}

async function getFrontendCoverPropertyId() {
  if (!frontendCoverPropertyIdPromise) {
    frontendCoverPropertyIdPromise = (async () => {
      const dataSource = await notionClient.dataSources.retrieve({
        data_source_id: config.frontendDatasourceId!
      })

      const coverProperty = dataSource.properties?.[FRONTEND_COVER_PROPERTY]
      const propertyId = coverProperty?.id

      if (!propertyId || typeof propertyId !== 'string') {
        throw new Error(
          `Failed to find "${FRONTEND_COVER_PROPERTY}" property on frontend data source`
        )
      }

      return propertyId
    })()
  }

  return frontendCoverPropertyIdPromise
}

export async function createCategoryArticlesView(pageId: string) {
  const topLevelBlocks = await listTopLevelBlocks(pageId)
  if (topLevelBlocks.some(block => block.type === 'child_database')) {
    return
  }

  const coverPropertyId = await getFrontendCoverPropertyId()

  await notionClient.views.create({
    data_source_id: config.frontendDatasourceId!,
    name: CATEGORY_ARTICLES_VIEW_NAME,
    type: 'gallery',
    create_database: {
      parent: { type: 'page_id', page_id: pageId }
    },
    filter: {
      property: 'Parent Page',
      relation: { contains: pageId }
    },
    sorts: [
      {
        property: 'Order',
        direction: 'ascending'
      }
    ],
    configuration: {
      type: 'gallery',
      cover: {
        type: 'property',
        property_id: coverPropertyId
      },
      cover_size: 'large',
      cover_aspect: 'cover',
      card_layout: 'compact',
      properties: [
        { property_id: 'Name', visible: true, card_property_width_mode: 'full_line' },
        { property_id: 'Status', visible: true, card_property_width_mode: 'inline' },
        { property_id: 'URL', visible: true, card_property_width_mode: 'inline' },
        {
          property_id: 'Description',
          visible: true,
          wrap: true,
          card_property_width_mode: 'full_line'
        }
      ]
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- SDK types do not fully cover views.create options
  } as any)
}
