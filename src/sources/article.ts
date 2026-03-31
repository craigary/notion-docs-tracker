import {
  DOMParser,
  type HTMLAnchorElement,
  type HTMLDetailsElement,
  type HTMLDivElement,
  type HTMLElement,
  type HTMLHeadingElement,
  type HTMLImageElement
} from 'linkedom'

import type { Article, ArticleInfo } from '../../types'
import { cleanImageUrl, genericHeaders, getHelpArticleUrl, normalizeNotionUrl } from '../utils'
import { sha } from '../utils/hash'
import { buildFrontMatter, convertToMarkdown } from '../utils/markdown'

const articleHeroMediaSelector = 'helpArticle_helpArticleHeroMedia'
const articleHeroMediaVideoSelector = 'videoPlayer_videoContainer'
const articleDescriptionSelector = 'helpArticle_helpArticlePrologueCopy_'
const faqAnswerSelector = 'faqDrawers_answer'
const TRANSFER_CONTENT_ARTICLE_SLUG = 'transfer-content-deprovisioned-user'

function sanitizeArticleMarkdown(article: Article, bodyMarkdown: string) {
  if (article.slug !== TRANSFER_CONTENT_ARTICLE_SLUG) {
    return bodyMarkdown
  }

  const lines = bodyMarkdown.split('\n')

  return lines
    .filter(line => {
      // Notion API create/update requests for this specific article are blocked by Cloudflare
      // when the backend mirror includes the executable curl line for the content transfer
      // endpoint. Remove that single line here so the synced page can still be stored in
      // Notion. Keep this hardcoded to this one article for now; if similar cases appear,
      // we can generalize the sanitization later.
      return !(
        line.includes('curl -X POST') && line.includes('https://api.notion.com/v1/users/transfer')
      )
    })
    .join('\n')
}

export async function fetchArticleContent(article: Article): Promise<ArticleInfo> {
  const url = getHelpArticleUrl(article.slug)
  const responseText = await fetch(url, { headers: genericHeaders }).then(response =>
    response.text()
  )
  const document = new DOMParser().parseFromString(responseText, 'text/html')

  const title = document.querySelector('h1')?.textContent?.trim()

  if (!title) {
    throw new Error(`Failed to parse title for article ${article.slug}`)
  }

  let coverImage: string | null = null
  const sectionElements = document.querySelectorAll('section') as HTMLDivElement[]
  const heroMediaElement = [...sectionElements].find(section =>
    section.className.includes(articleHeroMediaSelector)
  )

  if (heroMediaElement) {
    const nestedDiv = heroMediaElement.querySelector('div')
    const hasVideoHeroMedia =
      nestedDiv && nestedDiv.className.includes(articleHeroMediaVideoSelector)

    if (hasVideoHeroMedia) {
      const videoId = nestedDiv.id
      if (videoId) {
        coverImage = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      }
    } else {
      const rawSource = heroMediaElement.querySelector('img')?.getAttribute('src')
      if (rawSource) {
        coverImage = cleanImageUrl(rawSource)
      }
    }
  }

  const descriptionCandidates = document.querySelectorAll('header h2') as HTMLHeadingElement[]
  const descriptionElement = [...descriptionCandidates].find(heading =>
    heading.className.includes(articleDescriptionSelector)
  )
  const description = descriptionElement?.textContent ?? null

  document.querySelectorAll('img').forEach((img: HTMLImageElement) => {
    img.src = cleanImageUrl(img.src)
    if (img.src.startsWith('https://www.notion.com/front-static/shared/callouts')) {
      img.remove()
    }
  })

  document.querySelectorAll('[data-cfemail], .__cf_email__').forEach((element: HTMLElement) => {
    const textNode = document.createTextNode('email protected')
    element.parentNode?.replaceChild(textNode, element)
  })

  document.querySelectorAll('a').forEach((anchor: HTMLAnchorElement) => {
    const href = anchor.getAttribute('href')

    if (href?.startsWith('/')) {
      const nextUrl = new URL(href, 'https://www.notion.com')
      nextUrl.searchParams.delete('g-exp')
      anchor.href = nextUrl.href.replace(nextUrl.origin, '')
    }

    if (anchor.getAttribute('href')?.includes('/cdn-cgi/l/email-protection')) {
      const textNode = document.createTextNode('email protected')
      anchor.parentNode?.replaceChild(textNode, anchor)
      return
    }

    if (anchor.parentElement?.tagName === 'H2') {
      const headingText = anchor.textContent
      const parentHeading = anchor.parentElement as HTMLHeadingElement
      anchor.remove()
      parentHeading.textContent = headingText
    }
  })

  const articleElement = document.querySelector('article article')

  if (!articleElement) {
    throw new Error(`Failed to parse body for article ${article.slug}`)
  }

  articleElement.querySelectorAll('a').forEach((anchor: HTMLAnchorElement) => {
    const rawHref = anchor.getAttribute('href')
    if (!rawHref) {
      return
    }

    if (
      rawHref.startsWith('/') ||
      rawHref.startsWith('https://notion.so') ||
      rawHref.startsWith('https://notion.com') ||
      rawHref.startsWith('https://www.notion.so') ||
      rawHref.startsWith('https://www.notion.com')
    ) {
      const normalizedUrl = normalizeNotionUrl(rawHref)
      anchor.setAttribute('href', normalizedUrl)
    }
  })

  let bodyMarkdown = convertToMarkdown(articleElement.outerHTML)

  const faqElement = document.querySelector('#faq')
  if (faqElement) {
    const faqMarkdown: string[] = ['## FAQs']

    faqElement.querySelectorAll('a').forEach((anchor: HTMLAnchorElement) => {
      const rawHref = anchor.getAttribute('href')
      if (!rawHref) {
        return
      }

      if (
        rawHref.startsWith('/') ||
        rawHref.startsWith('https://notion.so') ||
        rawHref.startsWith('https://notion.com') ||
        rawHref.startsWith('https://www.notion.so') ||
        rawHref.startsWith('https://www.notion.com')
      ) {
        const normalizedUrl = normalizeNotionUrl(rawHref)
        anchor.setAttribute('href', normalizedUrl)
      }
    })

    faqElement.querySelectorAll('details').forEach((detail: HTMLDetailsElement) => {
      const question = detail.querySelector('summary')?.textContent?.trim()
      const answerElement = [...detail.querySelectorAll('div')].find((div: HTMLDivElement) =>
        div.className.includes(faqAnswerSelector)
      )

      if (!question || !answerElement) {
        return
      }

      faqMarkdown.push(`### ${question}`, convertToMarkdown(answerElement.innerHTML))
    })

    bodyMarkdown = `${bodyMarkdown}\r\n\r\n${faqMarkdown.join('\r\n\r\n')}`
  }

  bodyMarkdown = sanitizeArticleMarkdown(article, bodyMarkdown)

  const frontMatter = buildFrontMatter({
    title,
    emoji: article.emoji,
    description,
    url,
    key: article.key,
    coverImage,
    category: article.category,
    categoryKey: article.categoryKey
  })

  const content = `${frontMatter}\r\n\r\n${bodyMarkdown}`
  const hash = await sha(content)

  return {
    title,
    key: article.key,
    url,
    emoji: article.emoji,
    category: article.category,
    categoryKey: article.categoryKey,
    order: article.order,
    coverImage,
    description,
    bodyMarkdown,
    content,
    hash
  }
}
