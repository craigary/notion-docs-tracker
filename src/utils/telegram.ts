import type { ArticleInfo } from '../../types'
import config from '../config'

// Telegram 单条消息的字符数上限（parse_mode=MarkdownV2）
const TELEGRAM_MESSAGE_LIMIT = 4096

function escapeMarkdown(text: string) {
  return text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1')
}

async function postTelegramMessage(message: string) {
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`
  const body: Record<string, unknown> = {
    chat_id: config.telegramChatId,
    text: message,
    parse_mode: 'MarkdownV2',
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          { text: '📚 查看帮助文档', url: config.helpDocsUrl },
          { text: '🀄 查看中文翻译', url: config.translationUrl }
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

export async function sendMessage(messages: string[]) {
  if (!config.sendTelegram) {
    console.log('Telegram notifications are disabled.')
    return null
  }

  if (!config.telegramBotToken || !config.telegramChatId) {
    console.warn('Telegram bot configuration is missing. Skipping send.')
    return null
  }

  // 通知只是同步的副作用：发送失败（消息超长、限流等）只记录错误，
  // 不能抛异常导致整个同步进程退出，从而跳过 GitHub Actions 的提交步骤。
  for (const message of messages) {
    try {
      await postTelegramMessage(message)
    } catch (error) {
      console.error('Failed to send Telegram message:', error)
    }
  }
}

export function generateTelegramMessage({
  newDocs,
  updatedDocs
}: {
  newDocs: ArticleInfo[]
  updatedDocs: ArticleInfo[]
}): string[] {
  const header = '📝 *Notion 帮助文档更新* 📝\n\n'
  const total = `总共变更数量: ${newDocs.length + updatedDocs.length}\n\n`

  const lines: string[] = []

  if (newDocs.length > 0) {
    lines.push('✨ *新增文档*', '')
    newDocs.forEach((doc, index) => {
      const emoji = doc.emoji?.trim() || '📄'
      lines.push(`${index + 1}\\. [${emoji} ${escapeMarkdown(doc.title)}](${doc.url})`)
    })
    lines.push('')
  }

  if (updatedDocs.length > 0) {
    lines.push('🔄 *更新文档*', '')
    updatedDocs.forEach((doc, index) => {
      const emoji = doc.emoji?.trim() || '📄'
      lines.push(`${index + 1}\\. [${emoji} ${escapeMarkdown(doc.title)}](${doc.url})`)
    })
  }

  // 超长消息按行切分为多条，避免触发 Telegram 的 4096 字符上限
  const messages: string[] = []
  let current = header + total

  for (const line of lines) {
    const candidate = `${current}${line}\n`

    if (candidate.length > TELEGRAM_MESSAGE_LIMIT) {
      messages.push(current.trimEnd())
      current = line === '' ? '' : `${line}\n`
    } else {
      current = candidate
    }
  }

  if (current.trim().length > 0) {
    messages.push(current.trimEnd())
  }

  return messages
}
