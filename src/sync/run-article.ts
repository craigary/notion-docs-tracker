import type { Article } from '../../types'
import config from '../config'
import {
  FRONTEND_ORDER_PROPERTY,
  FRONTEND_PARENT_PAGE_PROPERTY,
  getNumberPropertyValue,
  getPlainTextPropertyValue,
  getRelationIds,
  pageHasRelation
} from '../notion/properties'
import { fetchArticleContent } from '../sources/article'
import { sleep } from '../utils'
import { saveContentIfNeeded } from '../utils/fs'
import { createBackendPage, ensureBackendFrontendRelation, updateBackendPage } from './backend'
import {
  createFrontendArticle,
  ensureFrontendBackendRelation,
  ensureFrontendOrder,
  ensureFrontendParentPageRelation,
  updateFrontendArticle
} from './frontend'
import { resolveArticleSyncScenario } from './scenarios'
import { store } from './store'

function findCategoryKeyByPageId(pageId: string) {
  for (const [key, page] of store.frontendByIdentifier.entries()) {
    if (!key.startsWith('category:')) {
      continue
    }

    if (page.id === pageId) {
      return key as `category:${string}`
    }
  }

  return null
}

function markCategoryForSyncedBlockRefresh(categoryKey: `category:${string}` | null) {
  if (!categoryKey) {
    return
  }

  store.categoryKeysNeedingSyncedBlockRefresh.add(categoryKey)
}

export async function processArticle(article: Article) {
  await sleep(config.wait)
  console.log(`Processing article: ${article.title}`)

  try {
    const itemInfo = await fetchArticleContent(article)
    let frontendPage = store.frontendByIdentifier.get(itemInfo.key)
    let backendPage = store.backendByIdentifier.get(itemInfo.key)
    const parentCategoryPage = store.frontendByIdentifier.get(itemInfo.categoryKey)
    const backendHash = backendPage ? getPlainTextPropertyValue(backendPage, 'Hash') : undefined
    const hashChanged = backendHash !== undefined && backendHash !== itemInfo.hash
    const oldParentCategoryKeys = frontendPage
      ? getRelationIds(frontendPage, FRONTEND_PARENT_PAGE_PROPERTY).map(findCategoryKeyByPageId)
      : []
    const currentOrder = frontendPage
      ? getNumberPropertyValue(frontendPage, FRONTEND_ORDER_PROPERTY)
      : undefined
    const parentRelationChanged =
      frontendPage && parentCategoryPage
        ? !pageHasRelation(frontendPage, FRONTEND_PARENT_PAGE_PROPERTY, parentCategoryPage.id)
        : false
    const orderChanged = frontendPage ? currentOrder !== itemInfo.order : false
    const scenario = resolveArticleSyncScenario({
      hasFrontendPage: Boolean(frontendPage),
      hasBackendPage: Boolean(backendPage),
      hasParentCategoryPage: Boolean(parentCategoryPage),
      hashChanged
    })

    if (scenario === 'missing_parent_category') {
      throw new Error(`Missing frontend category page for ${itemInfo.categoryKey}`)
    }

    if (scenario === 'create_frontend_and_backend') {
      if (!parentCategoryPage) {
        throw new Error(`Expected parent category page for ${itemInfo.categoryKey}`)
      }

      markCategoryForSyncedBlockRefresh(itemInfo.categoryKey)
      frontendPage = await createFrontendArticle(itemInfo, undefined, parentCategoryPage.id)
      backendPage = await createBackendPage(itemInfo, frontendPage.id)
      frontendPage = await ensureFrontendBackendRelation(frontendPage, backendPage.id)

      store.newItems.push({ type: 'article', ...itemInfo })
      await saveContentIfNeeded(config.saveContent, itemInfo.key, itemInfo.content)
    } else if (scenario === 'create_backend_then_update_frontend') {
      if (!frontendPage || !parentCategoryPage) {
        throw new Error(`Expected existing frontend and parent category pages for ${itemInfo.key}`)
      }

      markCategoryForSyncedBlockRefresh(itemInfo.categoryKey)
      if (parentRelationChanged) {
        oldParentCategoryKeys.forEach(markCategoryForSyncedBlockRefresh)
      }

      backendPage = await createBackendPage(itemInfo, frontendPage.id)
      frontendPage = await updateFrontendArticle(
        frontendPage,
        itemInfo,
        backendPage.id,
        parentCategoryPage.id,
        false
      )

      await saveContentIfNeeded(config.saveContent, itemInfo.key, itemInfo.content)
    } else if (
      scenario === 'create_frontend_then_update_backend' ||
      scenario === 'create_frontend_then_ensure_backend_relation'
    ) {
      if (!backendPage || !parentCategoryPage) {
        throw new Error(`Expected existing backend and parent category pages for ${itemInfo.key}`)
      }

      markCategoryForSyncedBlockRefresh(itemInfo.categoryKey)
      frontendPage = await createFrontendArticle(itemInfo, backendPage.id, parentCategoryPage.id)

      if (scenario === 'create_frontend_then_update_backend') {
        backendPage = await updateBackendPage(backendPage, itemInfo, frontendPage.id, true)
        store.updatedItems.push({ type: 'article', ...itemInfo })
        await saveContentIfNeeded(config.saveContent, itemInfo.key, itemInfo.content)
      } else {
        backendPage = await ensureBackendFrontendRelation(backendPage, frontendPage.id)
      }
    } else if (
      scenario === 'update_frontend_and_backend' ||
      scenario === 'ensure_parent_order_and_relations'
    ) {
      if (!frontendPage || !backendPage || !parentCategoryPage) {
        throw new Error(
          `Expected existing frontend, backend, and parent category pages for ${itemInfo.key}`
        )
      }

      if (parentRelationChanged || orderChanged) {
        markCategoryForSyncedBlockRefresh(itemInfo.categoryKey)
        oldParentCategoryKeys.forEach(markCategoryForSyncedBlockRefresh)
      }

      if (scenario === 'update_frontend_and_backend') {
        backendPage = await updateBackendPage(backendPage, itemInfo, frontendPage.id, true)
        frontendPage = await updateFrontendArticle(
          frontendPage,
          itemInfo,
          backendPage.id,
          parentCategoryPage.id,
          true
        )
        store.updatedItems.push({ type: 'article', ...itemInfo })
        await saveContentIfNeeded(config.saveContent, itemInfo.key, itemInfo.content)
      } else {
        frontendPage = await ensureFrontendParentPageRelation(frontendPage, parentCategoryPage.id)
        frontendPage = await ensureFrontendOrder(frontendPage, itemInfo.order)
        frontendPage = await ensureFrontendBackendRelation(frontendPage, backendPage.id)
        backendPage = await ensureBackendFrontendRelation(backendPage, frontendPage.id)
      }
    }

    if (frontendPage) {
      store.frontendByIdentifier.set(itemInfo.key, frontendPage)
    }

    if (backendPage) {
      store.backendByIdentifier.set(itemInfo.key, backendPage)
    }
  } catch (error) {
    console.error(`Failed to process article ${article.title}:`, error)
    store.failedItems.push({
      type: 'article',
      name: article.title,
      key: article.key,
      error
    })
  }
}
