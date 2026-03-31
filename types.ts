export type Category = {
  title: string
  slug: string
  key: `category:${string}`
}

export type Article = {
  title: string
  slug: string
  key: `help:${string}`
  emoji: string | null
  category: string
  categoryKey: `category:${string}`
  order: number
}

export type CategoryInfo = {
  title: string
  key: `category:${string}`
  url: string
  coverImage: string | null
  description: string | null
  content: string
  hash: string
}

export type ArticleInfo = {
  title: string
  key: `help:${string}`
  url: string
  emoji: string | null
  category: string
  categoryKey: `category:${string}`
  order: number
  coverImage: string | null
  description: string | null
  bodyMarkdown: string
  content: string
  hash: string
}

export type StoreItem = ({ type: 'category' } & CategoryInfo) | ({ type: 'article' } & ArticleInfo)

export type FailedItem = {
  type: 'category' | 'article'
  name: string
  key: string
  error: unknown
}

export type OrphanItem = {
  key: string
  title: string
}
