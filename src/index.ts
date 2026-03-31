import { collectPaginatedAPI, isFullPage, type PageObjectResponse } from '@notionhq/client'

import type { Article, ArticleInfo } from '../types'
import config from './config'
import { syncCategorySyncedBlockContent } from './notion/category-synced-block'
import { notionClient } from './notion/client'
import { getPlainTextPropertyValue } from './notion/properties'
import { fetchAllNotionHelpDocs } from './sources/help-tree'
import { processArticle } from './sync/run-article'
import { processCategory } from './sync/run-category'
import { store } from './sync/store'
import { generateTelegramMessage, sendMessage } from './utils/telegram'

async function fetchExistingReference(dataSourceId: string) {
  const queryResults = await collectPaginatedAPI(notionClient.dataSources.query, {
    data_source_id: dataSourceId
  })

  const reference = new Map<string, PageObjectResponse>()

  queryResults.forEach(result => {
    if (!isFullPage(result)) {
      return
    }

    const identifier = getPlainTextPropertyValue(result, 'Identifier')
    if (identifier) {
      reference.set(identifier, result)
    }
  })

  return reference
}

async function processInBatches<T>(items: T[], handler: (item: T) => Promise<void>) {
  for (let index = 0; index < items.length; index += config.concurrency) {
    const batch = items.slice(index, index + config.concurrency)
    await Promise.all(batch.map(handler))
  }
}

function collectOrphans(remoteKeys: Set<string>) {
  store.frontendByIdentifier.forEach((page, key) => {
    if (remoteKeys.has(key)) {
      return
    }

    store.orphanFrontendItems.push({
      key,
      title: getPlainTextPropertyValue(page, 'Name') ?? key
    })
  })

  store.backendByIdentifier.forEach((page, key) => {
    if (remoteKeys.has(key)) {
      return
    }

    store.orphanBackendItems.push({
      key,
      title: getPlainTextPropertyValue(page, 'Name') ?? key
    })
  })
}

function logSummary() {
  console.log('\nSummary')
  console.log(`  New items: ${store.newItems.length}`)
  console.log(`  Updated items: ${store.updatedItems.length}`)
  console.log(`  Failed items: ${store.failedItems.length}`)
  console.log(`  Orphan frontend items: ${store.orphanFrontendItems.length}`)
  console.log(`  Orphan backend items: ${store.orphanBackendItems.length}`)

  if (store.failedItems.length > 0) {
    console.log('\nFailed items')
    store.failedItems.forEach(item => {
      console.log(`  - ${item.type}: ${item.name} (${item.key})`)
    })
  }

  if (store.orphanFrontendItems.length > 0) {
    console.log('\nOrphan frontend items')
    store.orphanFrontendItems.forEach(item => {
      console.log(`  - ${item.title} (${item.key})`)
    })
  }

  if (store.orphanBackendItems.length > 0) {
    console.log('\nOrphan backend items')
    store.orphanBackendItems.forEach(item => {
      console.log(`  - ${item.title} (${item.key})`)
    })
  }
}

async function maybeSendTelegramMessage() {
  const newDocs: ArticleInfo[] = store.newItems
    .filter((item): item is ArticleInfo & { type: 'article' } => item.type === 'article')
    .map(({ type: _type, ...item }) => item)

  const updatedDocs: ArticleInfo[] = store.updatedItems
    .filter((item): item is ArticleInfo & { type: 'article' } => item.type === 'article')
    .map(({ type: _type, ...item }) => item)

  if (newDocs.length === 0 && updatedDocs.length === 0) {
    return
  }

  const message = generateTelegramMessage({ newDocs, updatedDocs })

  if (config.sendTelegram) {
    await sendMessage(message)
    console.log('Telegram notification sent.')
  } else {
    console.log('\nTelegram preview\n')
    console.log(message)
  }
}

async function syncCategorySyncedBlocks(
  categories: { key: `category:${string}`; title: string }[]
) {
  const categoryKeys = [...store.categoryKeysNeedingSyncedBlockRefresh]

  if (categoryKeys.length === 0) {
    console.log('Refreshing category synced blocks... skipped (no affected categories).')
    return
  }

  console.log(
    `Refreshing category synced blocks for ${categoryKeys.length} affected categor(ies)...`
  )
  const categoryTitlesByKey = new Map(
    categories.map(category => [category.key, category.title] as const)
  )

  await processInBatches(categoryKeys, async categoryKey => {
    const categoryTitle = categoryTitlesByKey.get(categoryKey) ?? categoryKey
    const categoryPage = store.frontendByIdentifier.get(categoryKey)

    if (!categoryPage) {
      console.warn(`Skipping synced block refresh for ${categoryTitle}: frontend page not found.`)
      return
    }

    try {
      const result = await syncCategorySyncedBlockContent(categoryPage.id)
      console.log(
        `  ${categoryTitle}: articles=${result.articleCount}, visible=${result.visibleCount}, collapsed=${result.collapsedCount}`
      )
    } catch (error) {
      console.error(`Failed to refresh category synced block for ${categoryTitle}:`, error)
      store.failedItems.push({
        type: 'category',
        name: categoryTitle,
        key: categoryKey,
        error
      })
    }
  })

  store.categoryKeysNeedingSyncedBlockRefresh.clear()
}

async function main() {
  console.log('Fetching existing frontend data source pages...')
  store.frontendByIdentifier = await fetchExistingReference(config.frontendDatasourceId!)

  console.log('Fetching existing backend data source pages...')
  store.backendByIdentifier = await fetchExistingReference(config.backendDatasourceId!)

  console.log('Fetching Notion Help tree...')
  const { categories, articles } = await fetchAllNotionHelpDocs()
  const remoteKeys = new Set<string>([
    ...categories.map(category => category.key),
    ...articles.map(article => article.key)
  ])

  console.log(`Found ${categories.length} categories and ${articles.length} articles.`)
  console.log('Processing categories...')
  const categoryArticlesByKey = new Map<string, Article[]>(
    categories.map(category => [
      category.key,
      articles.filter(article => article.categoryKey === category.key)
    ])
  )
  await processInBatches(categories, category =>
    processCategory(category, categoryArticlesByKey.get(category.key) ?? [])
  )

  console.log('Processing articles...')
  await processInBatches(articles, processArticle)

  await syncCategorySyncedBlocks(categories)

  collectOrphans(remoteKeys)
  logSummary()
  await maybeSendTelegramMessage()
}

await main().catch(error => {
  if (error instanceof Error) {
    error.message = `Sync failed: ${error.message}`
    throw error
  }

  throw new Error(`Sync failed: ${String(error)}`)
})
