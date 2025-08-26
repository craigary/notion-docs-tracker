import { DOMParser } from 'linkedom'
import { genericHeaders } from '../utils'
import type { Article, Category } from '../../types'

// Fetch All Notion Help Docs from notion.com/help
const HELP_DOCS_URL = 'https://www.notion.com/help'

export const fetchAllNotionHelpDocs = async () => {
  // Fetch HTML String

  const resString = await fetch(HELP_DOCS_URL, { headers: genericHeaders }).then((res) => res.text())

  const document = new DOMParser().parseFromString(resString, 'text/html')

  const nextData = document.querySelector('script#__NEXT_DATA__')
  const nextDataJSON = JSON.parse(nextData.textContent)

  const helpArticleTree: {
    name: string
    slug: string
    entries: {
      name: string
      slug: string
      emoji: string | null
    }[]
  }[] = nextDataJSON.props.pageProps.helpPageSidebar.helpArticleTree

  const categories: Category[] = []
  const articles: Article[] = []

  helpArticleTree.forEach((category) => {
    categories.push({
      title: category.name,
      slug: category.slug,
      key: 'category:' + category.slug,
    })

    articles.push(
      ...category.entries.map((article) => {
        return {
          title: article.name,
          slug: article.slug,
          key: 'help:' + article.slug,
          emoji: article.emoji,
          category: category.name,
          categoryKey: 'category:' + category.slug,
        }
      })
    )
  })

  return {
    categories,
    articles,
  }
}
