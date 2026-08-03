import { DOMParser, type HTMLDivElement, type HTMLHeadingElement } from 'linkedom'

import type { Article, Category, CategoryInfo } from '../../types'
import { cleanImageUrl, genericHeaders, getHelpCategoryUrl } from '../utils'
import { sha } from '../utils/hash'
import { buildFrontMatter } from '../utils/markdown'

const descriptionClassSelector = 'helpCenterCategoryContentV3_description'

function parseNextData(responseText: string, errorContext: string) {
  const document = new DOMParser().parseFromString(responseText, 'text/html')
  const nextData = document.querySelector('script#__NEXT_DATA__')

  if (!nextData?.textContent) {
    throw new Error(`Failed to find __NEXT_DATA__ on ${errorContext}.`)
  }

  return JSON.parse(nextData.textContent)
}

export async function fetchCategoryContent(
  category: Category,
  categoryArticles: Article[]
): Promise<CategoryInfo> {
  const url = getHelpCategoryUrl(category.slug)
  const responseText = await fetch(url, { headers: genericHeaders }).then(response =>
    response.text()
  )
  const document = new DOMParser().parseFromString(responseText, 'text/html')

  // 新版分类页不再渲染 helpCategoryHeroMedia section，封面图改从 __NEXT_DATA__ 的 Contentful 资产字段读取
  let coverImage: string | null = null
  const nextDataJson = parseNextData(responseText, `Notion Help category ${category.slug}`)
  const heroFileUrl = nextDataJson.props?.pageProps?.helpCategoryPageFields?.hero?.fields?.file
    ?.url as string | undefined

  if (heroFileUrl) {
    coverImage = cleanImageUrl(heroFileUrl)
  }

  const headingTitleElement = document.querySelector('h1') as HTMLHeadingElement
  const descriptionElement = headingTitleElement.nextSibling as HTMLDivElement | null

  const description = descriptionElement?.getAttribute('class')?.includes(descriptionClassSelector)
    ? (descriptionElement.textContent?.trim() ?? null)
    : null

  // const entryElements = [...descriptionCandidates].filter(heading =>
  //   heading.className.includes(categoryEntryTitleSelector)
  // )
  // const entryTitles = entryElements
  //   .map(element => element.textContent?.trim())
  //   .filter((value): value is string => Boolean(value))
  // const orderedArticleIdentifiers =
  //   categoryArticles.length > 0
  //     ? categoryArticles
  //         .toSorted((left, right) => left.order - right.order)
  //         .map(article => `${article.order} ${article.key}`)
  //     : entryTitles.map((title, index) => `${index + 1} ${title}`)
  const orderedArticleIdentifiers =
    categoryArticles.length > 0
      ? categoryArticles
          .toSorted((left, right) => left.order - right.order)
          .map(article => `${article.order} ${article.key}`)
      : []

  const frontMatter = buildFrontMatter({
    title: category.title,
    description,
    url,
    key: category.key,
    coverImage
  })

  const content = `${frontMatter}\r\n\r\n${orderedArticleIdentifiers.join('\r\n')}`
  const hash = await sha(content)

  return {
    title: category.title,
    key: category.key,
    url,
    coverImage,
    description,
    content,
    hash
  }
}
