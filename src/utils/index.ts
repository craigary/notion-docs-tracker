import config from '../config'

export const genericHeaders = {
  accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  'accept-language': 'en-US,en;q=0.9',
  'cache-control': 'max-age=0',
  priority: 'u=0, i',
  'sec-ch-ua': '"Chromium";v="139", "Not;A=Brand";v="99"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'same-origin',
  'upgrade-insecure-requests': '1'
}

export function ensureTrailingSlash(url: string) {
  return url.endsWith('/') ? url : `${url}/`
}

export function getHelpDocsIndexUrl() {
  return config.helpDocsUrl
}

export function getHelpArticleUrl(slug: string) {
  return new URL(slug, ensureTrailingSlash(config.helpDocsUrl)).toString()
}

export function getHelpCategoryUrl(slug: string) {
  return new URL(`category/${slug}`, ensureTrailingSlash(config.helpDocsUrl)).toString()
}

export function cleanImageUrl(url: string) {
  if (!url) {
    return ''
  }

  try {
    let nextUrl = url

    if (nextUrl.startsWith('/')) {
      if (nextUrl.startsWith('/_next/image?url=')) {
        const encodedUrl = nextUrl.replace('/_next/image?url=', '').split('&')[0]
        nextUrl = decodeURIComponent(encodedUrl ?? '')

        if (nextUrl.startsWith('/')) {
          nextUrl = `https://www.notion.com${nextUrl}`
        }
      } else {
        nextUrl = `https://www.notion.com${nextUrl}`
      }
    }

    if (nextUrl.includes('/_next/image?url=')) {
      const encodedUrl = nextUrl.split('/_next/image?url=')[1]?.split('&')[0]
      nextUrl = decodeURIComponent(encodedUrl ?? nextUrl)
    }

    const urlObject = new URL(nextUrl, 'https://www.notion.com')
    urlObject.search = ''
    return urlObject.toString()
  } catch (error) {
    console.error('Failed to clean image URL:', error)
    return url
  }
}

export function splitByGraphemes(value: string, chunkSize = 1500) {
  const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' })
  const graphemes = [...segmenter.segment(value)].map(part => part.segment)
  const chunks: string[] = []

  for (let index = 0; index < graphemes.length; index += chunkSize) {
    chunks.push(graphemes.slice(index, index + chunkSize).join(''))
  }

  return chunks
}

export function normalizeNotionUrl(href: string) {
  if (!href) {
    return href
  }

  if (
    href === 'https://www.notion.so' ||
    href === 'https://www.notion.com' ||
    href === 'https://notion.so' ||
    href === 'https://notion.com'
  ) {
    return href
  }

  const url = new URL(href, 'https://www.notion.com')
  url.hostname = 'www.notion.com'
  return url.href
}

export function normalizeEmoji(emoji: string | null | undefined) {
  const trimmed = emoji?.trim()
  return trimmed ? trimmed : null
}

export function sanitizeSelectOption(value: string) {
  return value.replaceAll(',', '')
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
