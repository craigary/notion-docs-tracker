import { DOMParser } from 'linkedom'

import type { Article, Category } from '../../types'
import { genericHeaders, getHelpCategoryUrl } from '../utils'
import config from '@/config'

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

function parseNextData(responseText: string, errorContext: string) {
  const document = new DOMParser().parseFromString(responseText, 'text/html')
  const nextData = document.querySelector('script#__NEXT_DATA__')

  if (!nextData?.textContent) {
    throw new Error(`Failed to find __NEXT_DATA__ on ${errorContext}.`)
  }

  return JSON.parse(nextData.textContent)
}

async function fetchHelpArticleByCategory(category: Category): Promise<Article[]> {
  const responseText = await fetch(getHelpCategoryUrl(category.slug), {
    headers: genericHeaders
  }).then(response => response.text())

  const nextDataJson = parseNextData(responseText, `Notion Help category ${category.slug}`)

  const articlesInCategory = (nextDataJson.props.pageProps.helpPagesInCategory as any[])
    .filter((page: any) => page.fields?.title && page.fields?.slug)
    .map((page: any, index: number) => {
      return {
        title: page.fields.title as string,
        slug: page.fields.slug as string,
        key: `help:${page.fields.slug}` as const,
        emoji: (page.fields.emoji as string | null) ?? null,
        category: category.title,
        categoryKey: category.key,
        order: (page.fields.order as number) ?? index + 1
      }
    })

  return articlesInCategory
}

export async function fetchAllNotionHelpDocs() {
  const responseText = await fetch(config.helpDocsUrl, {
    headers: genericHeaders
  }).then(response => response.text())

  const nextDataJson = parseNextData(responseText, 'Notion Help homepage')

  // 之前在这里可以通过侧边栏拿到所有的文章，但现在只能拿到分类。原来的文章被现在的分类代替了，原来的上级分类变成了一个没有意义的分类名称，里面没有实际内容
  const helpCategoryTreeFromSidebar: HelpCategoryTreeFromSidebar[] =
    nextDataJson.props.pageProps.helpPageSidebar.helpArticleTree

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



  const categoryOrderEntries = await Promise.all(
    categories.map(category => {
      try {
        return fetchHelpArticleByCategory(category)
      } catch (error) {
        console.warn(
          `Failed to fetch precise article order for category ${category.slug}, falling back to sidebar order.`,
          error
        )
        return [] as Article[]
      }
    })
  )



  return { categories, articles: categoryOrderEntries.flat() }
}
