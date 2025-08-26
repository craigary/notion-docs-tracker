export const genericHeaders = {
  accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'accept-language': 'en-US,en;q=0.9',
  'cache-control': 'max-age=0',
  priority: 'u=0, i',
  'sec-ch-ua': '"Chromium";v="139", "Not;A=Brand";v="99"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'same-origin',
  'upgrade-insecure-requests': '1',
}

export async function sha(input: string, algorithm = 'SHA-256') {
  const encoder = new TextEncoder()
  const data = encoder.encode(input)
  const hashBuffer = await crypto.subtle.digest(algorithm, data) // 计算哈希
  return [...new Uint8Array(hashBuffer)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

export function cleanImageUrl(url: string) {
  if (!url) return ''

  try {
    // 处理相对路径
    if (url.startsWith('/')) {
      // 检查是否是 Next.js 图片 URL
      if (url.startsWith('/_next/image?url=')) {
        // 提取并解码原始 URL
        const encodedUrl = url.replace('/_next/image?url=', '').split('&')[0]
        url = decodeURIComponent(encodedUrl)
        if (url.startsWith('/')) {
          url = 'https://www.notion.com' + url
        }
      } else {
        url = 'https://www.notion.com' + url
      }
    }

    // 检查完整 URL 是否是 Next.js 图片 URL
    if (url.includes('/_next/image?url=')) {
      const encodedUrl = url.split('/_next/image?url=')[1].split('&')[0]
      url = decodeURIComponent(encodedUrl)
    }

    // 移除URL中的查询参数
    const urlObj = new URL(url, 'https://www.notion.com')
    urlObj.search = ''
    return urlObj.toString()
  } catch (error) {
    console.error('清理图片URL时出错:', error)
    return url
  }
}

export function splitByGraphemes(str: string, chunkSize: number = 1500) {
  const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' })
  const graphemes = [...segmenter.segment(str)].map((s) => s.segment)
  const result = []
  for (let i = 0; i < graphemes.length; i += chunkSize) {
    result.push(graphemes.slice(i, i + chunkSize).join(''))
  }
  return result
}

export function normalizeNotionUrl(href: string): string {
  if (!href) return href

  // 保持原样，如果没有 pathname
  if (
    href === 'https://www.notion.so' ||
    href === 'https://www.notion.com' ||
    href === 'https://notion.so' ||
    href === 'https://notion.com'
  ) {
    return href
  }

  // 用 notion.com 作为基准
  const url = new URL(href, 'https://www.notion.com')

  // 强制域名统一为 notion.com
  url.hostname = 'www.notion.com'

  return url.href
}
