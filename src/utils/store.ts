import type { PageObjectResponse } from '@notionhq/client'
import type { ArticleInfo, CategoryInfo } from '../../types'

export type StoreItem = (ArticleInfo & { type: 'article' }) | (CategoryInfo & { type: 'category' })

export interface AppStore {
  newItems: StoreItem[]
  updatedItems: StoreItem[]
  failedItems: { type: string; name: string; key: string; error: any }[]
  frontendRef: Map<string, PageObjectResponse>
  backendRef: Map<string, PageObjectResponse>
  oldRef: Map<string, { title: string; id: string }> //  这个是一个没用的东西：它记录了 Key:翻译名称 的对应关系，用于首次初始化时，将前端页面命名为需要的翻译。
}

export const store: AppStore = {
  newItems: [],
  updatedItems: [],
  failedItems: [],
  frontendRef: new Map(),
  backendRef: new Map(),
  oldRef: new Map(),
}
