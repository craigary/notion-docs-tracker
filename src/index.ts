import { execSync } from 'child_process'
import { collectPaginatedAPI, isFullPage, type CreatePageParameters, type PageObjectResponse } from '@notionhq/client'
import { notionClient } from './notion/client'
import { fetchAllNotionHelpDocs } from './website'
import { fetchCategoryContent } from './website/category'
import { writeFileEnsureDir } from './utils/fs'
import { store, type StoreItem } from './utils/store'
import { fetchArticleContent } from './website/article'
import type { Article, ArticleInfo, Category, CategoryInfo } from '../types'
import { generateTelegramMessage, sendMessage } from './utils/telegram'
import config from '../config'
import { getPagePropertyValue } from './utils/notion'
import { articleConfig, categoryConfig, type Config } from './processors'

// Func for step 1: Fetch from Front-end DB
const fetchExistingReference = async (databaseId: string): Promise<Map<string, PageObjectResponse>> => {
  const frontendDBRes = await collectPaginatedAPI(notionClient.dataSources.query, {
    data_source_id: databaseId,
  })

  const frontendRef = new Map()

  frontendDBRes.forEach((page) => {
    if (isFullPage(page)) {
      const key = getPagePropertyValue(page, 'Identifier')
      if (key) {
        frontendRef.set(key, page)
      }
    }
  })

  return frontendRef
}

const createNewFrontendPage = async <
  T extends { title: string; key: string },
  U extends { title: string; hash: string; content: string; key: string }
>(
  itemInfo: U,
  configItem: Config<T, U>
) => {
  console.log(`New ${configItem.type} spotted, creating in front-end DB...`)
  store.newItems.push({
    type: configItem.type,
    ...itemInfo,
  } as unknown as StoreItem)

  const commonProperties = configItem.getCommonProperties(itemInfo)
  const frontendPageChildren = configItem.getFrontendPageChildren(itemInfo)

  const parent = configItem.parentPageInfoInFrontendDB(itemInfo)

  const frontendPage = await notionClient.pages.create({
    parent,
    icon: configItem.getIcon(itemInfo),
    properties: {
      ...commonProperties,
      Name: { title: [{ type: 'text', text: { content: itemInfo.title } }] },
      Status: { type: 'status', status: { name: 'Not Started' } },
    },
    children: frontendPageChildren,
  })

  // 存下来，这个用于处理分类时非常有用，因为之后如果创建新页面，需要找到它归属的分类页，这时候就需要用这个查找了。
  store.frontendRef.set(itemInfo.key, frontendPage as PageObjectResponse)

  return frontendPage
}

const createBackendPage = async <
  T extends { title: string; key: string },
  U extends { title: string; hash: string; content: string; key: string }
>(
  itemInfo: U,
  configItem: Config<T, U>,
  frontendPageId: string
) => {
  const commonProperties = configItem.getCommonProperties(itemInfo)
  const backendProperties = configItem.getBackendProperties(itemInfo)
  await notionClient.pages.create({
    parent: { type: 'data_source_id', data_source_id: config.backendDsId as string },
    icon: configItem.getIcon(itemInfo),
    properties: {
      ...commonProperties,
      ...backendProperties,
      Name: { title: [{ type: 'text', text: { content: itemInfo.title } }] },
      Frontend: { type: 'relation', relation: [{ id: frontendPageId }] },
      Status: { type: 'status', status: { name: 'Not Started' } },
    },
  })

  // If saveContent is enabled, save content to files and commit to GitHub
  if (config.saveContent) {
    writeFileEnsureDir(`./content/${itemInfo.key}.md`, itemInfo.content)
  }
}

const updateExistingPage = async <
  T extends { title: string; key: string },
  U extends { title: string; hash: string; content: string; key: string }
>(
  itemInfo: U,
  configItem: Config<T, U>,
  itemInfoFromFrontendDB: PageObjectResponse,
  itemInfoFromBackendDB: PageObjectResponse
) => {
  const hashInfoInBackendDB = getPagePropertyValue(itemInfoFromBackendDB, 'Hash')

  if (hashInfoInBackendDB !== itemInfo.hash) {
    console.log(`${configItem.type === 'article' ? 'Article' : 'Category'} ${itemInfo.title} has been updated.`)
    store.updatedItems.push({
      type: configItem.type,
      ...itemInfo,
    } as unknown as StoreItem)

    const commonProperties = configItem.getCommonProperties(itemInfo)

    const backendProperties = configItem.getBackendProperties(itemInfo)

    await notionClient.pages.update({
      page_id: itemInfoFromBackendDB.id,
      icon: configItem.getIcon(itemInfo), // 只有后端更新图标，避免出现有些 ArticleInfo 没有图标，但实际描述是有图标的情况。
      properties: {
        ...commonProperties,
        ...backendProperties,
        Name: { title: [{ type: 'text', text: { content: itemInfo.title } }] },
        Frontend: {
          type: 'relation',
          relation: [{ id: itemInfoFromFrontendDB.id }],
        },
        Status: { type: 'status', status: { name: 'In progress' } },
      },
    })

    // 下面的代码可能出现错误，因为 Notion API 的 Bug ⬇️'

    // 只更新文章页面的数据，因为 Notion 的bug，如果页面是 nested，则无法通过 API 更新，而数据库刚好是 Nested。
    // if (configItem.type === 'article') {
    await notionClient.pages.update({
      page_id: itemInfoFromFrontendDB.id,
      properties: {
        ...commonProperties,
        Status: { type: 'status', status: { name: 'In progress' } },
      },
    })
    // }

    // 上面的代码出现错误 ⬆️

    // If saveContent is enabled, save content to files and commit to GitHub
    if (config.saveContent) {
      writeFileEnsureDir(`./content/${itemInfo.key}.md`, itemInfo.content)
    }
  }
}

const processItem = async <
  T extends { title: string; key: string },
  U extends { title: string; hash: string; content: string; key: string }
>(
  item: T,
  configItem: Config<T, U>
) => {
  await new Promise((resolve) => setTimeout(resolve, config.wait))

  console.log(`Processing ${configItem.type}: ${item.title}`)

  try {
    const itemInfo = await configItem.fetchContent(item)
    const itemInfoFromFrontendDB = store.frontendRef.get(item.key)

    if (!itemInfoFromFrontendDB) {
      const frontendPage = await createNewFrontendPage(itemInfo, configItem)
      await createBackendPage(itemInfo, configItem, frontendPage.id)
    } else {
      const itemInfoFromBackendDB = store.backendRef.get(itemInfo.key)
      if (!itemInfoFromBackendDB) {
        await createBackendPage(itemInfo, configItem, itemInfoFromFrontendDB.id)
      } else {
        await updateExistingPage(itemInfo, configItem, itemInfoFromFrontendDB, itemInfoFromBackendDB)
      }
    }
  } catch (error) {
    console.error(`Failed to process ${configItem.type} ${item.title}:`, error)
    store.failedItems.push({
      type: configItem.type,
      name: item.title,
      key: item.key,
      error,
    })
  }
}

// const commitChanges = () => {
//   const { newItems, updatedItems } = store
//   if (newItems.length === 0 && updatedItems.length === 0) {
//     console.log('No changes detected, skipping commit.')
//     return
//   }

//   const newItemsCount = newItems.length
//   const updatedItemsCount = updatedItems.length
//   const commitMessage = `docs: Sync ${newItemsCount} new, ${updatedItemsCount} updated articles`

//   console.log('Committing changes to GitHub...')

//   try {
//     // Configure git user for this repository. This is important for CI environments.
//     execSync('git config user.name "Notion Docs Tracker Bot"')
//     execSync('git config user.email "bot@users.noreply.github.com"')

//     // Add all changes in the content directory
//     execSync('git add content/')

//     // Check for staged changes before committing.
//     // `git diff --cached --quiet` exits with 1 if there are staged changes, 0 otherwise.
//     // execSync throws an error for non-zero exit codes.
//     try {
//       execSync('git diff --cached --quiet')
//       // If no error is thrown, it means no changes are staged.
//       console.log('No file changes to commit, skipping commit.')
//       return
//     } catch (error) {
//       // An error indicates that there are staged changes, so we can proceed.
//       console.log('Staged changes detected, proceeding with commit.')
//     }

//     // Commit the changes
//     execSync(
//       `git commit -m "${commitMessage}" -m "New: ${newItemsCount} articles\nUpdated: ${updatedItemsCount} articles"`
//     )

//     console.log('Successfully committed changes.')
//   } catch (error) {
//     console.error('Failed to commit changes:', error)
//     console.log('This might be because there are no changes to commit or a git error.')
//   }
// }

const main = async () => {
  // Step 1: Fetch existing frontend & backend reference
  const frontendDsId = config.frontendDsId!
  const backendDsId = config.backendDsId!

  const frontendRef = await fetchExistingReference(frontendDsId)
  const backendRef = await fetchExistingReference(backendDsId)

  store.frontendRef = frontendRef
  store.backendRef = backendRef

  // Step 2: Fetch all Notion help docs, including categories
  const { categories, articles } = await fetchAllNotionHelpDocs()

  // Step 3.1: Process Categories
  console.log('Processing categories...')
  for (let i = 0; i < categories.length; i += config.concurrency) {
    const batch = categories.slice(i, i + config.concurrency)
    await Promise.all(batch.map((category) => processItem(category, categoryConfig)))
  }

  // Step 3.2: Process Articles
  console.log('Processing articles...')
  for (let i = 0; i < articles.length; i += config.concurrency) {
    const batch = articles.slice(i, i + config.concurrency)
    await Promise.all(batch.map((article) => processItem(article, articleConfig)))
  }

  console.log('Processing complete.')

  // Step 4: Send Telegram message
  const updatedItems: ArticleInfo[] = store.updatedItems
    .filter((item): item is ArticleInfo & { type: 'article' } => item.type === 'article')
    .map((item) => {
      const { type, ...rest } = item
      return rest
    })

  const newItems: ArticleInfo[] = store.newItems
    .filter((item): item is ArticleInfo & { type: 'article' } => item.type === 'article')
    .map((item) => {
      const { type, ...rest } = item
      return rest
    })

  if (newItems.length > 0 || updatedItems.length > 0) {
    const message = generateTelegramMessage({
      updatedDocs: updatedItems,
      newDocs: newItems,
    })

    if (config.sendTelegram) {
      console.log('Sending Telegram message...')
      console.log(message)
      await sendMessage(message)
      console.log('Telegram message sent!')
    } else {
      console.log(message)
    }
  }
}

main()
