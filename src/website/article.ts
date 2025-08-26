import {
  DOMParser,
  HTMLAnchorElement,
  HTMLDetailsElement,
  HTMLDivElement,
  HTMLElement,
  HTMLHeadingElement,
  HTMLImageElement,
} from 'linkedom'
import { cleanImageUrl, genericHeaders, normalizeNotionUrl, sha } from '../utils'
import type { Article, ArticleInfo } from '../../types'
import { convertToMarkdown } from '../utils/markdown'

const articleHeroMediaElClassNameSelector = 'helpArticle_helpArticleHeroMedia'
const articleHeroMediaVideoElClassNameSelector = 'videoPlayer_videoContainer'
const articleDescriptionSelector = 'helpArticle_helpArticlePrologueCopy_' // Add extra underscore to avoid matching 'helpArticle_helpArticlePrologueCopyButton'

const faqAnswerSelector = 'faqDrawers_answer'

/**
 * Fetch and process a Notion help article page
 * @param article - The article metadata
 * @returns Processed article information including content, metadata, and references
 */
export const fetchArticleContent = async (article: Article): Promise<ArticleInfo> => {
  const url = 'https://www.notion.com/help/' + article.slug
  const articlePageResString = await fetch(url, { headers: genericHeaders }).then((res) => res.text())
  const document = new DOMParser().parseFromString(articlePageResString, 'text/html')

  // 1. Extract basic metadata
  const title: string = document.querySelector('h1').textContent
  const { key, emoji, category, categoryKey } = article

  // 2. Extract cover image
  let coverImage: string | null = null
  const sectionDomList = document.querySelectorAll('section') as HTMLDivElement[]
  const heroMediaEl = [...sectionDomList].find((el) => {
    return el.className.includes(articleHeroMediaElClassNameSelector)
  })

  if (heroMediaEl) {
    // Check if it's a video cover
    const hasVideoHeroMedia =
      !!heroMediaEl.querySelector('div') &&
      heroMediaEl.querySelector('div').className.includes(articleHeroMediaVideoElClassNameSelector)

    if (hasVideoHeroMedia) {
      const videoEl = heroMediaEl.querySelector('div') as HTMLDivElement
      const videoId = videoEl.id
      coverImage = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    } else {
      const coverImageRawSrc = heroMediaEl.querySelector('img')?.getAttribute('src')
      if (coverImageRawSrc) {
        coverImage = cleanImageUrl(coverImageRawSrc)
      }
    }
  }

  // 3. Extract description
  const descriptionElCandidate = document.querySelectorAll('header h2') as HTMLHeadingElement[]
  const descriptionEl = [...descriptionElCandidate].find((i) => i.className.includes(articleDescriptionSelector))
  const description = descriptionEl?.textContent ?? null

  // 4. Initialize reference counter
  let referenceTimes: number = 0
  let refHasHash = false

  // 5. Process and clean content elements

  // 5.1 Fix images and clean URLs
  document.querySelectorAll('img').forEach((img: HTMLImageElement) => {
    img.src = cleanImageUrl(img.src)
    if (img.src.startsWith('https://www.notion.com/front-static/shared/callouts')) {
      img.remove()
    }
  })

  // 5.2 Remove protected email elements
  document.querySelectorAll('[data-cfemail], .__cf_email__').forEach((el: HTMLElement) => {
    const textNode = document.createTextNode('email protected')
    el.parentNode.replaceChild(textNode, el)
  })

  // 5.3 Process links: clean URLs, remove protected emails, and remove H2 anchor links
  document.querySelectorAll('a').forEach((el: HTMLAnchorElement) => {
    const href = el.getAttribute('href')
    if (href?.startsWith('/')) {
      const url = new URL(href, 'https://www.notion.com')
      url.searchParams.delete('g-exp')
      el.href = url.href.replace(url.origin, '')
    }

    // Remove protected email links
    if (el.getAttribute('href')?.includes('/cdn-cgi/l/email-protection')) {
      const textNode = document.createTextNode('email protected')
      el.parentNode.replaceChild(textNode, el)
      return
    }

    // Remove H2 anchor links
    if (el.parentElement && 'tagName' in el.parentElement && el.parentElement.tagName == 'H2') {
      const title = el.textContent
      const parentEl: HTMLHeadingElement = el.parentElement
      el.remove()
      parentEl.textContent = title
      return
    }
  })

  // 5.4 Main content processing
  const articleEl = document.querySelector('article article')

  // 5.5 Count references in main article content
  articleEl.querySelectorAll('a').forEach((el: HTMLAnchorElement) => {
    const rawHref = el.getAttribute('href')
    if (!rawHref) return

    if (
      rawHref.startsWith('/') ||
      rawHref.startsWith('https://notion.so') ||
      rawHref.startsWith('https://notion.com') ||
      rawHref.startsWith('https://www.notion.so') ||
      rawHref.startsWith('https://www.notion.com')
    ) {
      const normalizedUrl = normalizeNotionUrl(rawHref)
      el.setAttribute('href', normalizedUrl)

      if (
        normalizedUrl.startsWith('https://www.notion.com/help/') &&
        !normalizedUrl.startsWith('https://www.notion.com/help/notion-academy/') &&
        !normalizedUrl.startsWith('https://www.notion.com/help/guides/')
      ) {
        const u = new URL(normalizedUrl)
        if (u.hash) {
          refHasHash = true
        }
        referenceTimes++
      }
    }
  })

  // 5.6 Convert main content to markdown
  let content = convertToMarkdown(articleEl.outerHTML)

  // 5.7 Process FAQ section if it exists
  const faqEl = document.querySelector('#faq')

  if (faqEl) {
    const faqMd: string[] = ['## FAQs']

    // Count references in FAQ section by processing the FAQ element directly
    faqEl.querySelectorAll('a').forEach((el: HTMLAnchorElement) => {
      const rawHref = el.getAttribute('href')
      if (!rawHref) return

      if (
        rawHref.startsWith('/') ||
        rawHref.startsWith('https://notion.so') ||
        rawHref.startsWith('https://notion.com') ||
        rawHref.startsWith('https://www.notion.so') ||
        rawHref.startsWith('https://www.notion.com')
      ) {
        const normalizedUrl = normalizeNotionUrl(rawHref)
        el.setAttribute('href', normalizedUrl)

        if (
          normalizedUrl.startsWith('https://www.notion.com/help/') &&
          !normalizedUrl.startsWith('https://www.notion.com/help/notion-academy/') &&
          !normalizedUrl.startsWith('https://www.notion.com/help/guides/')
        ) {
          const u = new URL(normalizedUrl)
          if (u.hash) {
            refHasHash = true
          }
          referenceTimes++
        }
      }
    })

    faqEl.querySelectorAll('details').forEach((questionEl: HTMLDetailsElement) => {
      const question = questionEl.querySelector('summary').textContent
      const answerHTML = [...questionEl.querySelectorAll('div')].find((el: HTMLDivElement) =>
        el.className.includes(faqAnswerSelector)
      )

      const answer = convertToMarkdown(answerHTML.innerHTML)
      faqMd.push(`### ${question}`, answer)
    })

    content += '\r\n\r\n' + faqMd.join('\r\n\r\n')
  }

  // 5.8 Add frontmatter
  const frontMatter = [
    '---',
    `title: ${title}`,
    `emoji: ${emoji}`,
    `description: ${description}`,
    `url: ${url}`,
    `key: ${key}`,
    `coverImage: ${coverImage}`,
    `category: ${article.category}`,
    '---',
  ]

  content = frontMatter.join('\r\n') + '\r\n\r\n' + content

  // 6. Generate content hash
  const hash = await sha(content)

  return {
    coverImage,
    category,
    title,
    emoji,
    description,
    url,
    key,
    content,
    referenceTimes,
    hash,
    categoryKey,
    refHasHash,
  }
}
