import type { CreatePageParameters } from '@notionhq/client'
import type { Article, ArticleInfo, Category, CategoryInfo } from '../types'
import { fetchArticleContent } from './website/article'
import { splitByGraphemes } from './utils'
import { createBlocks } from './utils/notion'
import config from '../config'
import { store } from './utils/store'
import { fetchCategoryContent } from './website/category'

type EmojiIcon = Extract<NonNullable<CreatePageParameters['icon']>, { type?: 'emoji' }>

export type Config<T, U> = {
  type: 'category' | 'article'
  fetchContent: (item: T) => Promise<U>
  getCommonProperties: (itemInfo: U) => CreatePageParameters['properties']
  getBackendProperties: (itemInfo: U) => CreatePageParameters['properties']
  getFrontendPageChildren: (itemInfo: U) => CreatePageParameters['children']
  getIcon: (itemInfo: U) => CreatePageParameters['icon']
  parentPageInfoInFrontendDB: (itemInfo?: U) => CreatePageParameters['parent'] // 简单描述一下：就是我要实现在前端创建页面时，如果类型是文章，而不是分类，这时候，在它应该位于前端的分类页面之内，这样的话，就可以避免首页一大堆文章了。因为 Notion API 在数据库的页面创建内容，和在自页面创建内容的 parent 不同，所以需要不同的情况不同的处理方法。
}

export const articleConfig: Config<Article, ArticleInfo> = {
  type: 'article',
  fetchContent: fetchArticleContent,
  getCommonProperties: (itemInfo) => ({
    Identifier: {
      type: 'rich_text',
      rich_text: [{ text: { content: itemInfo.key } }],
    },
    URL: { url: itemInfo.url },
    Category: {
      type: 'select',
      select: { name: itemInfo.category.replaceAll(',', '') },
    },
  }),
  getBackendProperties: (itemInfo) => ({
    Hash: {
      type: 'rich_text',
      rich_text: [{ text: { content: itemInfo.hash } }],
    },
    Content: {
      type: 'rich_text',
      rich_text: splitByGraphemes(itemInfo.content).map((i) => ({
        text: { content: i },
      })),
    },
    'Reference Times': { type: 'number', number: itemInfo.referenceTimes },
    'Ref Has Hash': { type: 'checkbox', checkbox: itemInfo.refHasHash },
  }),
  getFrontendPageChildren: (itemInfo) =>
    createBlocks([
      itemInfo.coverImage
        ? { type: 'image', image: { type: 'external', external: { url: itemInfo.coverImage } } }
        : null,
      itemInfo.description
        ? {
            type: 'paragraph',
            paragraph: { rich_text: [{ type: 'text', text: { content: '简介' }, annotations: { bold: true } }] },
          }
        : null,
      itemInfo.description
        ? {
            type: 'paragraph',
            paragraph: { rich_text: [{ type: 'text', text: { content: itemInfo.description } }] },
          }
        : null,
      { type: 'divider', divider: {} },
    ]),
  getIcon: (itemInfo) =>
    itemInfo.emoji
      ? { type: 'emoji', emoji: itemInfo.emoji as unknown as EmojiIcon['emoji'] }
      : { type: 'external', external: { url: config.notionIconUrl } },

  parentPageInfoInFrontendDB: (itemInfo) => {
    if (itemInfo?.categoryKey) {
      return { type: 'page_id', page_id: store.frontendRef.get(itemInfo?.categoryKey)!.id }
    }
    return { type: 'data_source_id', data_source_id: config.frontendDsId! }
  },
}

export const categoryConfig: Config<Category, CategoryInfo> = {
  type: 'category',
  fetchContent: fetchCategoryContent,
  getCommonProperties: (itemInfo) => ({
    Identifier: {
      type: 'rich_text',
      rich_text: [{ text: { content: itemInfo.key } }],
    },
    Category: {
      type: 'select',
      select: { name: itemInfo.title.replaceAll(',', '') },
    },
    URL: { url: itemInfo.url },
  }),
  getBackendProperties: (itemInfo) => ({
    Hash: {
      type: 'rich_text',
      rich_text: [{ text: { content: itemInfo.hash } }],
    },
    Content: {
      type: 'rich_text',
      rich_text: splitByGraphemes(itemInfo.content).map((i) => ({
        text: { content: i },
      })),
    },
  }),
  getFrontendPageChildren: (itemInfo) =>
    createBlocks([
      itemInfo.coverImage
        ? {
            type: 'image',
            image: { type: 'external', external: { url: itemInfo.coverImage } },
          }
        : null,
      itemInfo.description
        ? {
            type: 'paragraph',
            paragraph: { rich_text: [{ type: 'text', text: { content: '简介' }, annotations: { bold: true } }] },
          }
        : null,
      itemInfo.description
        ? {
            type: 'paragraph',
            paragraph: { rich_text: [{ type: 'text', text: { content: itemInfo.description } }] },
          }
        : null,
      { type: 'divider', divider: {} },
      { type: 'heading_3', heading_3: { rich_text: [{ type: 'text', text: { content: '文章列表' } }] } },
      { type: 'divider', divider: {} },
      { type: 'divider', divider: {} },
      {
        type: 'toggle',
        toggle: { rich_text: [{ type: 'text', text: { content: '.' } }] },
      },
    ]),
  getIcon: () => ({
    type: 'external',
    external: { url: config.notionIconUrl },
  }),
  parentPageInfoInFrontendDB: () => {
    return {
      type: 'data_source_id',
      data_source_id: config.frontendDsId!,
    }
  },
}
