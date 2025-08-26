import { DOMParser, HTMLDivElement, HTMLHeadingElement } from 'linkedom'
import { cleanImageUrl, genericHeaders, sha } from '../utils'
import type { Category, CategoryInfo } from '../../types'

const categoryHeroMediaElClassNameSelector = 'helpCategoryHeroMedia'
const categoryDescriptionClassNameSelector = 'title_titleSizeXs'
const categoryEntryTitleClassNameSelector = 'title_titleSizeXxxs'

export const fetchCategoryContent = async (category: Category): Promise<CategoryInfo> => {
  const url = 'https://www.notion.com/help/category/' + category.slug
  const categoryPageResString = await fetch(url, { headers: genericHeaders }).then((res) => res.text())

  const document = new DOMParser().parseFromString(categoryPageResString, 'text/html')

  /**
   * 1. title, url, key
   * 2. coverImage
   * 3. description
   * 4. content(entries)
   */

  // 1. Title, Slug, Key
  const title = category.title
  const { key } = category

  // 2. CoverImage
  let coverImage: string | null = null

  const sectionDomList = document.querySelectorAll('section') as HTMLDivElement[]
  const heroMediaEl = [...sectionDomList].find((el) => {
    return el.className.includes(categoryHeroMediaElClassNameSelector)
  })

  if (heroMediaEl) {
    const coverImageRawSrc = heroMediaEl.querySelector('img')?.getAttribute('src')
    if (coverImageRawSrc) {
      coverImage = cleanImageUrl(coverImageRawSrc)
    }
  }

  // 3. Description
  let description: string | null = null
  const descriptionDomList = document.querySelectorAll('header h3') as HTMLHeadingElement[]
  const descriptionEl = [...descriptionDomList].find((el) =>
    el.className.includes(categoryDescriptionClassNameSelector)
  )
  description = descriptionEl?.textContent ?? null

  // 4. Content(Entries)

  const entryDomList = document.querySelectorAll('header h3') as HTMLHeadingElement[]
  const entryEls = [...entryDomList].filter((el) => el.className.includes(categoryEntryTitleClassNameSelector))

  const frontMatter = [
    '---',
    `title: ${title}`,
    `description: ${description}`,
    `url: ${url}`,
    `key: ${key}`,
    `coverImage: ${coverImage}`,
    '---',
  ]

  const entries = entryEls.map((i) => i.textContent)

  const content = frontMatter.join('\r\n') + '\r\n\r\n' + entries.join('\r\n\r\n')

  // 5. Hash

  const hash = await sha(content)

  return {
    coverImage,
    title,
    description,
    url,
    key,
    content,
    hash,
  }
}
