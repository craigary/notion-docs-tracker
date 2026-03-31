import type { CreatePageParameters, PageObjectResponse } from '@notionhq/client'

import type { ArticleInfo, CategoryInfo } from '../../types'
import config from '../config'
import { ensureCategorySyncedBlockScaffold } from '../notion/category-synced-block'
import { notionClient } from '../notion/client'
import { applyDescriptionCallout, replacePageContentWithMarkdown } from '../notion/page-content'
import {
  FRONTEND_BACKEND_RELATION_PROPERTY,
  FRONTEND_ORDER_PROPERTY,
  FRONTEND_PARENT_PAGE_PROPERTY,
  buildFrontendCreateProperties,
  buildFrontendUpdateProperties,
  buildIcon,
  getNumberPropertyValue,
  pageHasRelation
} from '../notion/properties'
import { createCategoryArticlesView } from '../notion/views'

function buildSeedMarkdownForCategory(itemInfo: CategoryInfo) {
  const sections: string[] = []

  if (itemInfo.coverImage) {
    sections.push(`![](${itemInfo.coverImage})`)
  }

  if (itemInfo.description) {
    sections.push('**简介**', itemInfo.description)
  }

  sections.push('---')

  return `${sections.join('\n\n')}\n`
}

function buildSeedMarkdownForArticle(itemInfo: ArticleInfo) {
  const sections: string[] = []

  if (itemInfo.coverImage) {
    sections.push(`![](${itemInfo.coverImage})`)
  }

  if (itemInfo.description) {
    sections.push('**简介**', itemInfo.description)
  }

  sections.push('---')
  sections.push(itemInfo.bodyMarkdown.trim())

  return `${sections.filter(Boolean).join('\n\n')}\n`
}

export async function createFrontendCategory(
  itemInfo: CategoryInfo,
  backendPageId?: string
): Promise<PageObjectResponse> {
  const page = await notionClient.pages.create({
    parent: {
      type: 'data_source_id',
      data_source_id: config.frontendDatasourceId!
    },
    icon: buildIcon(null),
    properties: buildFrontendCreateProperties(itemInfo, backendPageId)
  })

  await replacePageContentWithMarkdown(page.id, buildSeedMarkdownForCategory(itemInfo))
  await applyDescriptionCallout(page.id, itemInfo.description, 'category')
  await createCategoryArticlesView(page.id)
  await ensureCategorySyncedBlockScaffold(page.id)
  return page as PageObjectResponse
}

export async function createFrontendArticle(
  itemInfo: ArticleInfo,
  backendPageId?: string,
  parentPageId?: string
): Promise<PageObjectResponse> {
  const page = await notionClient.pages.create({
    parent: {
      type: 'data_source_id',
      data_source_id: config.frontendDatasourceId!
    },
    icon: buildIcon(itemInfo.emoji),
    properties: buildFrontendCreateProperties(itemInfo, backendPageId, parentPageId)
  })

  await replacePageContentWithMarkdown(page.id, buildSeedMarkdownForArticle(itemInfo))
  await applyDescriptionCallout(page.id, itemInfo.description, 'article')
  return page as PageObjectResponse
}

async function updateFrontendPage(
  pageId: string,
  properties: CreatePageParameters['properties']
): Promise<PageObjectResponse> {
  const updatedPage = await notionClient.pages.update({
    page_id: pageId,
    properties
  })

  return updatedPage as PageObjectResponse
}

export async function updateFrontendCategory(
  page: PageObjectResponse,
  itemInfo: CategoryInfo,
  backendPageId: string,
  markUpdated: boolean
) {
  const updatedPage = await updateFrontendPage(
    page.id,
    buildFrontendUpdateProperties(
      itemInfo,
      backendPageId,
      undefined,
      markUpdated ? 'In Progress' : undefined
    )
  )

  await ensureCategorySyncedBlockScaffold(updatedPage.id)
  return updatedPage
}

export async function updateFrontendArticle(
  page: PageObjectResponse,
  itemInfo: ArticleInfo,
  backendPageId: string,
  parentPageId: string,
  markUpdated: boolean
) {
  return updateFrontendPage(
    page.id,
    buildFrontendUpdateProperties(
      itemInfo,
      backendPageId,
      parentPageId,
      markUpdated ? 'In Progress' : undefined
    )
  )
}

export async function ensureFrontendBackendRelation(
  page: PageObjectResponse,
  backendPageId: string
) {
  if (pageHasRelation(page, FRONTEND_BACKEND_RELATION_PROPERTY, backendPageId)) {
    return page
  }

  return updateFrontendPage(page.id, {
    [FRONTEND_BACKEND_RELATION_PROPERTY]: {
      relation: [{ id: backendPageId }]
    }
  })
}

export async function ensureFrontendParentPageRelation(
  page: PageObjectResponse,
  parentPageId: string
) {
  if (pageHasRelation(page, FRONTEND_PARENT_PAGE_PROPERTY, parentPageId)) {
    return page
  }

  return updateFrontendPage(page.id, {
    [FRONTEND_PARENT_PAGE_PROPERTY]: {
      relation: [{ id: parentPageId }]
    }
  })
}

export async function ensureFrontendOrder(page: PageObjectResponse, order: number) {
  if (getNumberPropertyValue(page, FRONTEND_ORDER_PROPERTY) === order) {
    return page
  }

  return updateFrontendPage(page.id, {
    [FRONTEND_ORDER_PROPERTY]: {
      number: order
    }
  })
}
