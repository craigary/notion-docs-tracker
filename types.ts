export type Category = {
  title: string
  slug: string
  key: string
}

export type Article = {
  title: string
  slug: string
  key: string
  emoji: string | null
  category: string
  categoryKey: string
}

export type CategoryInfo = {
  title: string
  url: string
  coverImage: string | null
  description: string | null
  content: string
  hash: string
  key: string
}

export type ArticleInfo = {
  title: string
  url: string
  coverImage: string | null
  description: string | null
  content: string
  hash: string
  key: string
  referenceTimes: number
  refHasHash: boolean
  category: string
  emoji: string | null
  categoryKey: string
}
