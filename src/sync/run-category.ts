import type { Article, Category } from '../../types'
import config from '../config'
import { getPlainTextPropertyValue } from '../notion/properties'
import { fetchCategoryContent } from '../sources/category'
import { sleep } from '../utils'
import { saveContentIfNeeded } from '../utils/fs'
import { createBackendPage, ensureBackendFrontendRelation, updateBackendPage } from './backend'
import {
  createFrontendCategory,
  ensureFrontendBackendRelation,
  updateFrontendCategory
} from './frontend'
import { resolveCategorySyncScenario } from './scenarios'
import { store } from './store'

function markCategoryForSyncedBlockRefresh(categoryKey: `category:${string}`) {
  store.categoryKeysNeedingSyncedBlockRefresh.add(categoryKey)
}

export async function processCategory(category: Category, categoryArticles: Article[]) {
  await sleep(config.wait)
  console.log(`Processing category: ${category.title}`)

  try {
    const itemInfo = await fetchCategoryContent(category, categoryArticles)
    let frontendPage = store.frontendByIdentifier.get(itemInfo.key)
    let backendPage = store.backendByIdentifier.get(itemInfo.key)
    const backendHash = backendPage ? getPlainTextPropertyValue(backendPage, 'Hash') : undefined
    const hashChanged = backendHash !== undefined && backendHash !== itemInfo.hash
    const scenario = resolveCategorySyncScenario({
      hasFrontendPage: Boolean(frontendPage),
      hasBackendPage: Boolean(backendPage),
      hashChanged
    })

    if (scenario === 'create_frontend_and_backend') {
      markCategoryForSyncedBlockRefresh(itemInfo.key)
      frontendPage = await createFrontendCategory(itemInfo)
      backendPage = await createBackendPage(itemInfo, frontendPage.id)
      frontendPage = await ensureFrontendBackendRelation(frontendPage, backendPage.id)

      store.newItems.push({ type: 'category', ...itemInfo })
      await saveContentIfNeeded(config.saveContent, itemInfo.key, itemInfo.content)
    } else if (scenario === 'create_backend_then_update_frontend') {
      if (!frontendPage) {
        throw new Error(`Expected existing frontend page for ${itemInfo.key}`)
      }

      markCategoryForSyncedBlockRefresh(itemInfo.key)
      backendPage = await createBackendPage(itemInfo, frontendPage.id)
      frontendPage = await updateFrontendCategory(frontendPage, itemInfo, backendPage.id, false)

      await saveContentIfNeeded(config.saveContent, itemInfo.key, itemInfo.content)
    } else if (
      scenario === 'create_frontend_then_update_backend' ||
      scenario === 'create_frontend_then_ensure_backend_relation'
    ) {
      if (!backendPage) {
        throw new Error(`Expected existing backend page for ${itemInfo.key}`)
      }

      markCategoryForSyncedBlockRefresh(itemInfo.key)
      frontendPage = await createFrontendCategory(itemInfo, backendPage.id)

      if (scenario === 'create_frontend_then_update_backend') {
        backendPage = await updateBackendPage(backendPage, itemInfo, frontendPage.id, true)
        store.updatedItems.push({ type: 'category', ...itemInfo })
        await saveContentIfNeeded(config.saveContent, itemInfo.key, itemInfo.content)
      } else {
        backendPage = await ensureBackendFrontendRelation(backendPage, frontendPage.id)
      }
    } else if (scenario === 'update_frontend_and_backend' || scenario === 'ensure_relations_only') {
      if (!frontendPage || !backendPage) {
        throw new Error(`Expected both frontend and backend pages for ${itemInfo.key}`)
      }

      if (scenario === 'update_frontend_and_backend') {
        markCategoryForSyncedBlockRefresh(itemInfo.key)
        backendPage = await updateBackendPage(backendPage, itemInfo, frontendPage.id, true)
        frontendPage = await updateFrontendCategory(frontendPage, itemInfo, backendPage.id, true)
        store.updatedItems.push({ type: 'category', ...itemInfo })
        await saveContentIfNeeded(config.saveContent, itemInfo.key, itemInfo.content)
      } else {
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
    console.error(`Failed to process category ${category.title}:`, error)
    store.failedItems.push({
      type: 'category',
      name: category.title,
      key: category.key,
      error
    })
  }
}
