import type { ArticleInfo } from '../../types'
import config from '../../config'

const escapeMarkdown = (text: string) => {
  // Escape characters with special meaning in MarkdownV2.
  return text.replace(/([_*[\\\\]()~`>#+\\-=|{}.!])/g, '\\$1')
}

export const sendMessage = async (message: string) => {
  if (!config.sendTelegram) {
    console.log('Telegram notifications are disabled. Skipping message sending.')
    return null
  }

  if (!config.telegramBotToken || !config.telegramChatId) {
    console.warn('Telegram Bot Token or Chat ID is not configured. Skipping message sending.')
    return null
  }

  try {
    const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`

    const requestBody: any = {
      chat_id: config.telegramChatId,
      text: message,
      parse_mode: 'MarkdownV2',
      disable_web_page_preview: true,
      reply_markup: {
        inline_keyboard: [
          [
            { text: '📚 查看帮助文档', url: config.helpDocsUrl },
            { text: '🀄 查看中文翻译', url: config.translationUrl },
          ],
        ],
      },
    }

    if (config.telegramTopicId) {
      requestBody.message_thread_id = config.telegramTopicId
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Telegram API错误: ${JSON.stringify(errorData)}`)
    }

    return await response.json()
  } catch (error) {
    console.error('发送Telegram消息时出错:', error)
    throw error
  }
}

export const generateTelegramMessage = ({
  updatedDocs,
  newDocs,
}: {
  updatedDocs: ArticleInfo[]
  newDocs: ArticleInfo[]
}) => {
  let message = '📝 *Notion 帮助文档更新* 📝\n\n'

  message += `共有 ${newDocs.length + updatedDocs.length} 篇文档有更新:\n\n`

  if (newDocs.length > 0) {
    message += '✨ *新增文档*\n'
    newDocs.forEach((doc, index) => {
      const emoji = doc.emoji || '📄'
      const name = escapeMarkdown(doc.title)
      // Do not escape the URL itself
      const url = doc.url ? `${emoji} [${name}](${doc.url})` : `${emoji} ${name}`
      message += `${index + 1}\. ${url}\n`
    })
    message += '\n'
  }

  if (updatedDocs.length > 0) {
    message += '🔄 *内容更新*\n'
    updatedDocs.forEach((doc, index) => {
      const emoji = doc.emoji || '📄'
      const name = escapeMarkdown(doc.title)
      // Do not escape the URL itself
      const url = doc.url ? `[${emoji} ${name}](${doc.url})` : `${emoji} ${name}`
      message += `${index + 1}\. ${url}\n`
    })
  }

  // Do not escape the whole message, only parts of it.
  return message
}
