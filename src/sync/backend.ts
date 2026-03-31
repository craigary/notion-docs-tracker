import type { CreatePageParameters, PageObjectResponse } from '@notionhq/client'

import type { ArticleInfo, CategoryInfo } from '../../types'
import config from '../config'
import { notionClient } from '../notion/client'
import {
  BACKEND_FRONTEND_RELATION_PROPERTY,
  buildBackendCreateProperties,
  buildBackendUpdateProperties,
  buildIcon,
  pageHasRelation
} from '../notion/properties'

type SyncItemInfo = ArticleInfo | CategoryInfo

function getItemEmoji(itemInfo: SyncItemInfo) {
  return 'emoji' in itemInfo ? itemInfo.emoji : null
}

export async function createBackendPage(
  itemInfo: SyncItemInfo,
  frontendPageId?: string
): Promise<PageObjectResponse> {
  const page = await notionClient.pages.create({
    parent: {
      type: 'data_source_id',
      data_source_id: config.backendDatasourceId!
    },
    icon: buildIcon(getItemEmoji(itemInfo)),
    properties: buildBackendCreateProperties(itemInfo, frontendPageId)
  })

  return page as PageObjectResponse
}

export async function updateBackendPage(
  page: PageObjectResponse,
  itemInfo: SyncItemInfo,
  frontendPageId: string,
  markUpdated: boolean
) {
  const updatedPage = await notionClient.pages.update({
    page_id: page.id,
    icon: buildIcon(getItemEmoji(itemInfo)),
    properties: buildBackendUpdateProperties(
      itemInfo,
      frontendPageId,
      markUpdated ? 'In Progress' : undefined
    )
  })

  return updatedPage as PageObjectResponse
}

export async function ensureBackendFrontendRelation(
  page: PageObjectResponse,
  frontendPageId: string
) {
  if (pageHasRelation(page, BACKEND_FRONTEND_RELATION_PROPERTY, frontendPageId)) {
    return page
  }

  const updatedPage = await notionClient.pages.update({
    page_id: page.id,
    properties: {
      [BACKEND_FRONTEND_RELATION_PROPERTY]: {
        relation: [{ id: frontendPageId }]
      }
    } as CreatePageParameters['properties']
  })

  return updatedPage as PageObjectResponse
}
