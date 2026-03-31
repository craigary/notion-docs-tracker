import type { CreatePageParameters, PageObjectResponse } from '@notionhq/client'

import type { ArticleInfo, CategoryInfo } from '../../types'
import { normalizeEmoji, sanitizeSelectOption, splitByGraphemes } from '../utils'

type RichTextItemRequest = {
  type: 'text'
  text: { content: string }
}

export const FRONTEND_TITLE_PROPERTY = 'Name'
export const FRONTEND_CATEGORY_PROPERTY = 'Category'
export const FRONTEND_DESCRIPTION_PROPERTY = 'Description'
export const FRONTEND_IDENTIFIER_PROPERTY = 'Identifier'
export const FRONTEND_STATUS_PROPERTY = 'Status'
export const FRONTEND_URL_PROPERTY = 'URL'
export const FRONTEND_COVER_PROPERTY = 'Cover'
export const FRONTEND_BACKEND_RELATION_PROPERTY = 'Backend'
export const FRONTEND_PARENT_PAGE_PROPERTY = 'Parent Page'
export const FRONTEND_ORDER_PROPERTY = 'Order'

export const BACKEND_TITLE_PROPERTY = 'Name'
export const BACKEND_FRONTEND_RELATION_PROPERTY = 'Frontend'
export const BACKEND_CATEGORY_PROPERTY = 'Category'
export const BACKEND_CONTENT_PROPERTY = 'Content'
export const BACKEND_HASH_PROPERTY = 'Hash'
export const BACKEND_IDENTIFIER_PROPERTY = 'Identifier'
export const BACKEND_STATUS_PROPERTY = 'Status'
export const BACKEND_URL_PROPERTY = 'URL'

export type SyncStatus = 'Not Started' | 'In Progress' | 'Done'

type SyncItemInfo = ArticleInfo | CategoryInfo

type NotionPropertyValue = NonNullable<CreatePageParameters['properties']>[string]

function titleProperty(content: string): NotionPropertyValue {
  return {
    title: [{ type: 'text' as const, text: { content } }]
  }
}

function richTextProperty(content: string | null | undefined): NotionPropertyValue {
  const chunks = splitByGraphemes(content ?? '')
  return {
    rich_text: chunks.map(
      (chunk): RichTextItemRequest => ({
        type: 'text' as const,
        text: { content: chunk }
      })
    )
  }
}

function urlProperty(url: string | null | undefined): NotionPropertyValue {
  return { url: url ?? null }
}

function selectProperty(name: string): NotionPropertyValue {
  return {
    select: { name: sanitizeSelectOption(name) }
  }
}

function statusProperty(name: SyncStatus): NotionPropertyValue {
  return {
    status: { name }
  }
}

function relationProperty(id: string | null | undefined): NotionPropertyValue {
  return {
    relation: id ? [{ id }] : []
  }
}

function numberProperty(value: number | null | undefined): NotionPropertyValue {
  return {
    number: value ?? null
  }
}

function fileProperty(url: string | null | undefined): NotionPropertyValue {
  if (!url) {
    return { files: [] }
  }

  return {
    files: [
      {
        name: 'Cover',
        type: 'external' as const,
        external: { url }
      }
    ]
  }
}

function hashProperty(hash: string): NotionPropertyValue {
  return richTextProperty(hash)
}

function contentProperty(content: string): NotionPropertyValue {
  return richTextProperty(content)
}

function identifierProperty(identifier: string): NotionPropertyValue {
  return richTextProperty(identifier)
}

function isArticleInfo(itemInfo: SyncItemInfo): itemInfo is ArticleInfo {
  return 'categoryKey' in itemInfo
}

export function buildIcon(emoji: string | null | undefined): CreatePageParameters['icon'] {
  const normalizedEmoji = normalizeEmoji(emoji)

  if (normalizedEmoji) {
    return {
      type: 'emoji' as const,
      emoji: normalizedEmoji
    }
  }

  return {
    type: 'icon' as const,
    icon: {
      name: 'notion',
      color: 'gray'
    }
  }
}

export function buildFrontendCreateProperties(
  itemInfo: SyncItemInfo,
  backendPageId?: string,
  parentPageId?: string
): CreatePageParameters['properties'] {
  const categoryName = isArticleInfo(itemInfo) ? itemInfo.category : itemInfo.title

  const properties: Record<string, unknown> = {
    [FRONTEND_TITLE_PROPERTY]: titleProperty(itemInfo.title),
    [FRONTEND_CATEGORY_PROPERTY]: selectProperty(categoryName),
    [FRONTEND_DESCRIPTION_PROPERTY]: richTextProperty(itemInfo.description),
    [FRONTEND_IDENTIFIER_PROPERTY]: identifierProperty(itemInfo.key),
    [FRONTEND_STATUS_PROPERTY]: statusProperty('Not Started'),
    [FRONTEND_URL_PROPERTY]: urlProperty(itemInfo.url),
    [FRONTEND_COVER_PROPERTY]: fileProperty(itemInfo.coverImage),
    [FRONTEND_BACKEND_RELATION_PROPERTY]: relationProperty(backendPageId)
  }

  if (isArticleInfo(itemInfo)) {
    properties[FRONTEND_PARENT_PAGE_PROPERTY] = relationProperty(parentPageId)
    properties[FRONTEND_ORDER_PROPERTY] = numberProperty(itemInfo.order)
  }

  return properties as CreatePageParameters['properties']
}

export function buildFrontendUpdateProperties(
  itemInfo: SyncItemInfo,
  backendPageId: string,
  parentPageId?: string,
  status?: Exclude<SyncStatus, 'Done'>
): CreatePageParameters['properties'] {
  const properties: Record<string, unknown> = {
    [FRONTEND_CATEGORY_PROPERTY]: selectProperty(
      isArticleInfo(itemInfo) ? itemInfo.category : itemInfo.title
    ),
    [FRONTEND_IDENTIFIER_PROPERTY]: identifierProperty(itemInfo.key),
    [FRONTEND_URL_PROPERTY]: urlProperty(itemInfo.url),
    [FRONTEND_COVER_PROPERTY]: fileProperty(itemInfo.coverImage),
    [FRONTEND_BACKEND_RELATION_PROPERTY]: relationProperty(backendPageId)
  }

  if (isArticleInfo(itemInfo)) {
    properties[FRONTEND_PARENT_PAGE_PROPERTY] = relationProperty(parentPageId)
    properties[FRONTEND_ORDER_PROPERTY] = numberProperty(itemInfo.order)
  }

  if (status) {
    properties[FRONTEND_STATUS_PROPERTY] = statusProperty(status)
  }

  return properties as CreatePageParameters['properties']
}

export function buildBackendCreateProperties(
  itemInfo: SyncItemInfo,
  frontendPageId?: string
): CreatePageParameters['properties'] {
  const properties: Record<string, unknown> = {
    [BACKEND_TITLE_PROPERTY]: titleProperty(itemInfo.title),
    [BACKEND_FRONTEND_RELATION_PROPERTY]: relationProperty(frontendPageId),
    [BACKEND_CATEGORY_PROPERTY]: selectProperty(
      isArticleInfo(itemInfo) ? itemInfo.category : itemInfo.title
    ),
    [BACKEND_CONTENT_PROPERTY]: contentProperty(itemInfo.content),
    [BACKEND_HASH_PROPERTY]: hashProperty(itemInfo.hash),
    [BACKEND_IDENTIFIER_PROPERTY]: identifierProperty(itemInfo.key),
    [BACKEND_STATUS_PROPERTY]: statusProperty('Not Started'),
    [BACKEND_URL_PROPERTY]: urlProperty(itemInfo.url)
  }

  return properties as CreatePageParameters['properties']
}

export function buildBackendUpdateProperties(
  itemInfo: SyncItemInfo,
  frontendPageId: string,
  status?: Exclude<SyncStatus, 'Done'>
): CreatePageParameters['properties'] {
  const properties = buildBackendCreateProperties(itemInfo, frontendPageId) as Record<
    string,
    unknown
  >

  if (!status) {
    delete properties[BACKEND_STATUS_PROPERTY]
  } else {
    properties[BACKEND_STATUS_PROPERTY] = statusProperty(status)
  }

  return properties as CreatePageParameters['properties']
}

export function getPlainTextPropertyValue(page: PageObjectResponse, propertyName: string) {
  const property = page.properties[propertyName]

  if (!property) {
    return undefined
  }

  switch (property.type) {
    case 'title':
      return property.title.map(item => item.plain_text).join('')
    case 'rich_text':
      return property.rich_text.map(item => item.plain_text).join('')
    case 'select':
      return property.select?.name
    case 'status':
      return property.status?.name
    case 'url':
      return property.url ?? undefined
    default:
      return undefined
  }
}

export function getNumberPropertyValue(page: PageObjectResponse, propertyName: string) {
  const property = page.properties[propertyName]

  if (!property || property.type !== 'number') {
    return undefined
  }

  return property.number ?? undefined
}

export function pageHasRelation(
  page: PageObjectResponse,
  propertyName: string,
  targetPageId: string
) {
  const property = page.properties[propertyName]

  if (!property || property.type !== 'relation') {
    return false
  }

  return property.relation.some(relation => relation.id === targetPageId)
}

export function getRelationIds(page: PageObjectResponse, propertyName: string) {
  const property = page.properties[propertyName]

  if (!property || property.type !== 'relation') {
    return []
  }

  return property.relation.map(relation => relation.id)
}
