import { DOMParser } from 'linkedom'

import config from '@/config'

import type { Article, Category } from '../../types'
import { genericHeaders, getHelpCategoryUrl } from '../utils'

type HelpCategoryTreeFromSidebar = {
  name: string
  slug: string
  url: string
  order: number
  entries: {
    name: string
    slug: string
    url: string
  }[]
}

// 新版分类页（/help/category/:slug/all）返回的文章列表结构，不再包含 emoji/order 字段
// 文章顺序即数组顺序，slug 从 href 中提取
type HelpArticleInCategory = {
  id: string
  title: string
  href: string
}

function parseNextData(responseText: string, errorContext: string) {
  const document = new DOMParser().parseFromString(responseText, 'text/html')
  const nextData = document.querySelector('script#__NEXT_DATA__')

  if (!nextData?.textContent) {
    throw new Error(`Failed to find __NEXT_DATA__ on ${errorContext}.`)
  }

  return JSON.parse(nextData.textContent)
}

function getHelpCategoryAllUrl(slug: string) {
  return `${getHelpCategoryUrl(slug)}/all`
}

async function fetchHelpArticleByCategory(category: Category): Promise<Article[]> {
  const responseText = await fetch(getHelpCategoryAllUrl(category.slug), {
    headers: genericHeaders
  }).then(response => response.text())

  const nextDataJson = parseNextData(responseText, `Notion Help category ${category.slug}`)

  const articlesInCategoryList = nextDataJson.props.pageProps.articles as
    | HelpArticleInCategory[]
    | undefined

  if (!Array.isArray(articlesInCategoryList)) {
    throw new Error(
      `Failed to find pageProps.articles on category ${category.slug} (${getHelpCategoryAllUrl(category.slug)}).`
    )
  }

  const articlesInCategory = articlesInCategoryList
    .filter(page => page.title && page.href)
    .map((page, index) => {
      const slug = page.href.replace(/^\/help\//, '').replace(/\/$/, '')

      return {
        title: page.title,
        slug,
        key: `help:${slug}` as const,
        emoji: null,
        category: category.title,
        categoryKey: category.key,
        order: index + 1
      }
    })

  return articlesInCategory
}

export async function fetchAllNotionHelpDocs() {
  const responseText = await fetch(config.helpDocsUrl, {
    headers: genericHeaders
  }).then(response => response.text())

  const nextDataJson = parseNextData(responseText, 'Notion Help homepage')

  // 侧边栏树只提供分类（不再包含文章），文章列表改由每个分类的 /all 页面提供
  const helpCategoryTreeFromSidebar: HelpCategoryTreeFromSidebar[] | undefined =
    nextDataJson.props.pageProps.helpPageSidebar?.helpArticleTree

  if (!Array.isArray(helpCategoryTreeFromSidebar)) {
    throw new Error('Failed to find helpArticleTree on Notion Help homepage.')
  }

  const categories: Category[] = []

  helpCategoryTreeFromSidebar.forEach(parentCategory => {
    const categoryArrUnderParent = parentCategory.entries.map(category => {
      return {
        title: category.name,
        slug: category.slug,
        key: `category:${category.slug}` as const
      }
    })
    categories.push(...categoryArrUnderParent)
  })

  const categoryArticleEntries = await Promise.all(
    categories.map(category => {
      try {
        return fetchHelpArticleByCategory(category)
      } catch (error) {
        console.warn(
          `Failed to fetch articles for category ${category.slug}, skipping its articles.`,
          error
        )
        return [] as Article[]
      }
    })
  )

  return { categories, articles: categoryArticleEntries.flat() }
}
