import { DOMParser } from 'linkedom'

import type { Article, Category } from '../../types'
import { genericHeaders, getHelpCategoryUrl, getHelpDocsIndexUrl } from '../utils'

type HelpArticleTreeCategory = {
  name: string
  slug: string
  entries: {
    name: string
    slug: string
    emoji: string | null
  }[]
}

type CategoryPageField = {
  order?: number
  slug?: string
}

function parseNextData(responseText: string, errorContext: string) {
  const document = new DOMParser().parseFromString(responseText, 'text/html')
  const nextData = document.querySelector('script#__NEXT_DATA__')

  if (!nextData?.textContent) {
    throw new Error(`Failed to find __NEXT_DATA__ on ${errorContext}.`)
  }

  return JSON.parse(nextData.textContent)
}

async function fetchCategoryArticleOrders(category: Category) {
  const responseText = await fetch(getHelpCategoryUrl(category.slug), {
    headers: genericHeaders
  }).then(response => response.text())

  const nextDataJson = parseNextData(responseText, `Notion Help category ${category.slug}`)
  const categoryFields = nextDataJson.props.pageProps.helpPagesInCategory as
    | CategoryPageField[]
    | undefined

  if (!Array.isArray(categoryFields)) {
    throw new Error(`Missing helpPagesInCategory array for category ${category.slug}`)
  }

  return new Map(
    categoryFields
      .filter(
        (field): field is Required<Pick<CategoryPageField, 'order' | 'slug'>> =>
          typeof field.order === 'number' && typeof field.slug === 'string'
      )
      .map(field => [field.slug, field.order])
  )
}

export async function fetchAllNotionHelpDocs() {
  const responseText = await fetch(getHelpDocsIndexUrl(), {
    headers: genericHeaders
  }).then(response => response.text())

  const nextDataJson = parseNextData(responseText, 'Notion Help homepage')
  const helpArticleTree: HelpArticleTreeCategory[] =
    nextDataJson.props.pageProps.helpPageSidebar.helpArticleTree

  const categories: Category[] = []
  helpArticleTree.forEach(category => {
    categories.push({
      title: category.name,
      slug: category.slug,
      key: `category:${category.slug}` as const
    })
  })

  const categoryOrderEntries = await Promise.all(
    categories.map(async category => {
      try {
        return [category.key, await fetchCategoryArticleOrders(category)] as const
      } catch (error) {
        console.warn(
          `Failed to fetch precise article order for category ${category.slug}, falling back to sidebar order.`,
          error
        )
        return [category.key, new Map<string, number>()] as const
      }
    })
  )
  const categoryOrdersByKey = new Map(categoryOrderEntries)

  const articles: Article[] = []
  helpArticleTree.forEach(category => {
    const categoryKey = `category:${category.slug}` as const
    const preciseOrders = categoryOrdersByKey.get(categoryKey)

    articles.push(
      ...category.entries.map((article, index) => {
        const preciseOrder = preciseOrders?.get(article.slug)

        return {
          title: article.name,
          slug: article.slug,
          key: `help:${article.slug}` as const,
          emoji: article.emoji,
          category: category.name,
          categoryKey,
          order: preciseOrder ?? index + 1
        }
      })
    )
  })

  return { categories, articles }
}
