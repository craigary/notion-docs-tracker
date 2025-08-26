import { fromHtml } from 'hast-util-from-html'
import { toMdast } from 'hast-util-to-mdast'
import { toMarkdown } from 'mdast-util-to-markdown'

import { gfmToMarkdown } from 'mdast-util-gfm'

export const convertToMarkdown = (htmlStr: string) => {
  const hast = fromHtml(htmlStr, { fragment: true })

  const mdast = toMdast(hast)
  const markdown = toMarkdown(mdast, { extensions: [gfmToMarkdown()] })
  return markdown
}
