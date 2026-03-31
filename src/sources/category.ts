import { DOMParser, type HTMLDivElement, type HTMLHeadingElement } from 'linkedom'

import type { Article, Category, CategoryInfo } from '../../types'
import { cleanImageUrl, genericHeaders, getHelpCategoryUrl } from '../utils'
import { sha } from '../utils/hash'
import { buildFrontMatter } from '../utils/markdown'

const categoryHeroMediaSelector = 'helpCategoryHeroMedia'
const categoryDescriptionSelector = 'title_titleSizeXs'
const categoryEntryTitleSelector = 'title_titleSizeXxxs'

export async function fetchCategoryContent(
  category: Category,
  categoryArticles: Article[]
): Promise<CategoryInfo> {
  const url = getHelpCategoryUrl(category.slug)
  const responseText = await fetch(url, { headers: genericHeaders }).then(response =>
    response.text()
  )
  const document = new DOMParser().parseFromString(responseText, 'text/html')

  let coverImage: string | null = null
  const sectionElements = document.querySelectorAll('section') as HTMLDivElement[]
  const heroMediaElement = [...sectionElements].find(section =>
    section.className.includes(categoryHeroMediaSelector)
  )

  if (heroMediaElement) {
    const rawSource = heroMediaElement.querySelector('img')?.getAttribute('src')
    if (rawSource) {
      coverImage = cleanImageUrl(rawSource)
    }
  }

  const descriptionCandidates = document.querySelectorAll('header h3') as HTMLHeadingElement[]
  const descriptionElement = [...descriptionCandidates].find(heading =>
    heading.className.includes(categoryDescriptionSelector)
  )
  const description = descriptionElement?.textContent ?? null

  const entryElements = [...descriptionCandidates].filter(heading =>
    heading.className.includes(categoryEntryTitleSelector)
  )
  const entryTitles = entryElements
    .map(element => element.textContent?.trim())
    .filter((value): value is string => Boolean(value))
  const orderedArticleIdentifiers =
    categoryArticles.length > 0
      ? categoryArticles
          .toSorted((left, right) => left.order - right.order)
          .map(article => `${article.order} ${article.key}`)
      : entryTitles.map((title, index) => `${index + 1} ${title}`)

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
