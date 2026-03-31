import type { ArticleInfo } from '../../types'
import config from '../config'

function escapeMarkdown(text: string) {
  return text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1')
}

export async function sendMessage(message: string) {
  if (!config.sendTelegram) {
    console.log('Telegram notifications are disabled.')
    return null
  }

  if (!config.telegramBotToken || !config.telegramChatId) {
    console.warn('Telegram bot configuration is missing. Skipping send.')
    return null
  }

  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`
  const body: Record<string, unknown> = {
    chat_id: config.telegramChatId,
    text: message,
    parse_mode: 'MarkdownV2',
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          { text: '📚 阅读官方帮助文档', url: config.helpDocsUrl },
          { text: '🀄 阅读中文版帮助文档', url: config.translationUrl }
        ]
      ]
    }
  }

  if (config.telegramTopicId) {
    body.message_thread_id = config.telegramTopicId
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    const errorData = await response.text()
    throw new Error(`Telegram API error: ${errorData}`)
  }

  return response.json()
}

export function generateTelegramMessage({
  newDocs,
  updatedDocs
}: {
  newDocs: ArticleInfo[]
  updatedDocs: ArticleInfo[]
}) {
  let message = '📝 *Notion 帮助文档更新* 📝\n\n'
  message += `总共变更数量: ${newDocs.length + updatedDocs.length}\n\n`

  if (newDocs.length > 0) {
    message += '✨ *新增文档*\n'

    newDocs.forEach((doc, index) => {
      const emoji = doc.emoji?.trim() || '📄'
      const title = escapeMarkdown(doc.title)
      message += `${index + 1}\\. [${emoji} ${title}](${doc.url})\n`
    })

    message += '\n'
  }

  if (updatedDocs.length > 0) {
    message += '🔄 *更新文档*\n'

    updatedDocs.forEach((doc, index) => {
      const emoji = doc.emoji?.trim() || '📄'
      const title = escapeMarkdown(doc.title)
      message += `${index + 1}\\. [${emoji} ${title}](${doc.url})\n`
    })
  }

  return message
}
