import type { PageObjectResponse } from '@notionhq/client'

import type { FailedItem, OrphanItem, StoreItem } from '../../types'

export interface AppStore {
  newItems: StoreItem[]
  updatedItems: StoreItem[]
  failedItems: FailedItem[]
  orphanFrontendItems: OrphanItem[]
  orphanBackendItems: OrphanItem[]
  frontendByIdentifier: Map<string, PageObjectResponse>
  backendByIdentifier: Map<string, PageObjectResponse>
  categoryKeysNeedingSyncedBlockRefresh: Set<`category:${string}`>
}

export const store: AppStore = {
  newItems: [],
  updatedItems: [],
  failedItems: [],
  orphanFrontendItems: [],
  orphanBackendItems: [],
  frontendByIdentifier: new Map(),
  backendByIdentifier: new Map(),
  categoryKeysNeedingSyncedBlockRefresh: new Set()
}
