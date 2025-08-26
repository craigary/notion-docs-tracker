// 1. Fetch All Contents
// 2. Save All Contents

import type { Article, ArticleInfo, Category, CategoryInfo } from '../../types'
import { writeFileEnsureDir } from '../utils/fs'
import { fetchAllNotionHelpDocs } from '../website/index'
import { fetchArticleContent } from '../website/article'
import { fetchCategoryContent } from '../website/category'

async function main() {
  console.log('开始获取所有内容...')

  // 获取所有类别和文章
  const { categories, articles } = await fetchAllNotionHelpDocs()

  console.log(`发现 ${categories.length} 个类别和 ${articles.length} 篇文章`)

  // 处理类别
  console.log('开始处理类别...')
  for (const category of categories) {
    console.log(`处理类别: ${category.title}`)
    await processItem(category, fetchCategoryContent)
  }

  // 处理文章
  console.log('开始处理文章...')
  for (const article of articles) {
    console.log(`处理文章: ${article.title}`)
    await processItem(article, fetchArticleContent)
  }

  console.log('所有内容已保存完成！')
}

async function processItem(
  item: Article | Category,
  fetchContent: ((item: Article) => Promise<ArticleInfo>) | ((item: Category) => Promise<CategoryInfo>)
) {
  try {
    const info = await fetchContent(item as any)
    const path = `./content/${item.key}.md`
    await writeFileEnsureDir(path, info.content)
    console.log(`已保存: ${path}`)
  } catch (error) {
    console.error(`处理项目失败 ${item.key}:`, error)
  }
}

// 如果直接运行此文件，则执行主函数
if (import.meta.main) {
  await main()
}
