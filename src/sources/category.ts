import {
  DOMParser,
  type HTMLAnchorElement,
  type HTMLDetailsElement,
  type HTMLDivElement,
  type HTMLHeadingElement,
  type HTMLElement
} from 'linkedom'

import type { Article, Category, CategoryInfo } from '../../types'
import { cleanImageUrl, genericHeaders, getHelpCategoryUrl, normalizeNotionUrl } from '../utils'
import { sha } from '../utils/hash'
import { buildFrontMatter, convertToMarkdown } from '../utils/markdown'

const descriptionClassSelector = 'description'
const faqSectionSelector = 'helpCenterFaqSection'
const faqAnswerSelector = 'answer'

type ParsedDocument = ReturnType<DOMParser['parseFromString']>

type FeaturedGuide = {
  title: string
  url: string
}

type FaqItem = {
  question: string
  answer: string
}

// mdast-util-to-markdown 对强调/链接边界字符会用 &#xNN; 数字实体转义（如空格→&#x20;），
// 这是合法 markdown 但会让内容文件噪声很大。这里把它解码回普通字符，方便阅读和 diff 追踪。
function decodeNumericCharacterReferences(value: string) {
  return value.replace(/&#x([0-9a-fA-F]+);|&#([0-9]+);/g, (match, hex, dec) => {
    const codePoint = hex ? Number.parseInt(hex, 16) : Number.parseInt(dec, 10)

    if (!Number.isInteger(codePoint) || codePoint < 0 || codePoint > 0x10ffff) {
      return match
    }

    return String.fromCodePoint(codePoint)
  })
}

function parseNextData(responseText: string, errorContext: string) {
  const document = new DOMParser().parseFromString(responseText, 'text/html')
  const nextData = document.querySelector('script#__NEXT_DATA__')

  if (!nextData?.textContent) {
    throw new Error(`Failed to find __NEXT_DATA__ on ${errorContext}.`)
  }

  return JSON.parse(nextData.textContent)
}

function normalizeArticleLinksInElement(element: HTMLDivElement) {
  element.querySelectorAll('a').forEach((anchor: HTMLAnchorElement) => {
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
      anchor.setAttribute('href', normalizeNotionUrl(rawHref))
    }
  })
}

function extractFeaturedVideo(nextDataJson: Record<string, unknown>): string | null {
  const pageProps = (nextDataJson.props as { pageProps?: Record<string, unknown> } | undefined)
    ?.pageProps
  const categoryFields = pageProps?.helpCategoryPageFields as
    | { featuredVideo?: { videoId?: string | null } | null }
    | undefined
  const videoId = categoryFields?.featuredVideo?.videoId

  return typeof videoId === 'string' && videoId
    ? `https://www.youtube.com/watch?v=${videoId}`
    : null
}

function extractFeaturedGuides(nextDataJson: Record<string, unknown>): FeaturedGuide[] {
  const pageProps = (nextDataJson.props as { pageProps?: Record<string, unknown> } | undefined)
    ?.pageProps
  const categoryFields = pageProps?.helpCategoryPageFields as
    | { featuredGuides?: { title?: string; href?: string }[] | null }
    | undefined
  const featuredGuides = categoryFields?.featuredGuides

  if (!Array.isArray(featuredGuides)) {
    return []
  }

  return featuredGuides
    .filter(guide => guide?.title && guide?.href)
    .map(guide => ({
      title: guide.title!,
      url: normalizeNotionUrl(guide.href!)
    }))
}

function extractCategoryFaq(document: ParsedDocument): FaqItem[] {
  const sectionElements = document.querySelectorAll('section') as HTMLDivElement[]
  const faqSection = [...sectionElements].find(section =>
    section.className.includes(faqSectionSelector)
  )

  if (!faqSection) {
    return []
  }

  const faqItems: FaqItem[] = []

  faqSection.querySelectorAll('details').forEach((detail: HTMLDetailsElement) => {
    const question = detail.querySelector('summary')?.textContent?.trim()
    const answerElement = [...detail.querySelectorAll('div')].find((div: HTMLDivElement) =>
      div.className.includes(faqAnswerSelector)
    )

    if (!question || !answerElement) {
      return
    }

    // Cloudflare 邮箱保护有两种形态：裸的 __cf_email__ 元素，以及套在
    // <a href="/cdn-cgi/l/email-protection#随机hash"> 里的嵌套结构。data-cfemail
    // 和 href hash 每次请求都会变，必须连同外层链接一起替换成纯文本，否则会
    // 污染内容 hash 和 diff。替换要先于链接归一化执行，避免随机 hash 进 markdown。
    answerElement
      .querySelectorAll(
        '[data-cfemail], .__cf_email__, a[href*="/cdn-cgi/l/email-protection"]'
      )
      .forEach((element: HTMLElement) => {
        const textNode = document.createTextNode('email protected')
        element.parentNode?.replaceChild(textNode, element)
      })

    normalizeArticleLinksInElement(answerElement)

    // Contentful 富文本渲染会产出 React 注释标记（<!-- -->）和空的加粗元素，
    // 前者会原样进入 markdown，后者会变成 **** 空行，转换前先清理掉
    answerElement
      .querySelectorAll('strong, em, b, i, span, code')
      .forEach((element: HTMLElement) => {
        if (!element.textContent?.trim() && element.children.length === 0) {
          element.remove()
        }
      })

    const answerHtml = answerElement.innerHTML.replace(/<!--[\s\S]*?-->/g, '')

    faqItems.push({
      question,
      answer: decodeNumericCharacterReferences(convertToMarkdown(answerHtml).trim())
    })
  })

  return faqItems
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
  const nextDataJson = parseNextData(responseText, `Notion Help category ${category.slug}`)
  let coverImage: string | null = null
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

  const featuredVideoUrl = extractFeaturedVideo(nextDataJson)
  const featuredGuides = extractFeaturedGuides(nextDataJson)
  const faqItems = extractCategoryFaq(document)

  const orderedArticleIdentifiers =
    categoryArticles.length > 0
      ? categoryArticles
          .toSorted((left, right) => left.order - right.order)
          .map(article => `${article.order} ${article.key}`)
      : []

  const extraSections: string[] = []

  if (featuredVideoUrl) {
    extraSections.push('## Video', featuredVideoUrl)
  }

  if (featuredGuides.length > 0) {
    extraSections.push(
      '## Guides',
      ...featuredGuides.map(guide => `- [${guide.title}](${guide.url})`)
    )
  }

  if (faqItems.length > 0) {
    extraSections.push(
      '## FAQ',
      ...faqItems.flatMap(item => [`### ${item.question}`, '', item.answer, ''])
    )
  }

  const frontMatter = buildFrontMatter({
    title: category.title,
    description,
    url,
    key: category.key,
    coverImage
  })

  const content = [frontMatter, orderedArticleIdentifiers.join('\r\n'), ...extraSections]
    .filter(Boolean)
    .join('\r\n\r\n')
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
