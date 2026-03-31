import { fromHtml } from 'hast-util-from-html'
import { toMdast } from 'hast-util-to-mdast'
import { gfmToMarkdown } from 'mdast-util-gfm'
import { toMarkdown } from 'mdast-util-to-markdown'

type FrontMatterValue = string | number | boolean | null | undefined

export function convertToMarkdown(html: string) {
  const hast = fromHtml(html, { fragment: true })
  const mdast = toMdast(hast)

  return toMarkdown(mdast, {
    extensions: [gfmToMarkdown()]
  })
}

export function buildFrontMatter(fields: Record<string, FrontMatterValue>) {
  const lines = ['---']

  Object.entries(fields).forEach(([key, value]) => {
    lines.push(`${key}: ${value == null ? 'null' : JSON.stringify(value)}`)
  })

  lines.push('---')

  return lines.join('\r\n')
}
