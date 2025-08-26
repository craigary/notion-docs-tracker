import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv))
  .usage('Usage: $0 [options]')
  .options({
    wait: {
      type: 'number',
      default: 200,
      description: 'Milliseconds to wait between processing items',
    },
    'notion-icon-url': {
      type: 'string',
      default: 'https://www.notion.so/icons/notion_gray.svg',
      description: 'Default icon URL for Notion pages',
    },
    'help-docs-url': {
      type: 'string',
      default: 'https://www.notion.so/help',
      description: 'URL for the "View Help Docs" button in Telegram',
    },
    'send-telegram': {
      type: 'boolean',
      default: true,
      description: 'Enable sending Telegram notifications',
    },
    'save-content': {
      type: 'boolean',
      default: true,
      description: 'Save content to files and commit to GitHub',
    },
    concurrency: {
      type: 'number',
      default: 3,
      description: 'Number of items to process concurrently',
    },
  })
  .help()
  .alias('help', 'h')
  .parseSync()

const config = {
  // General settings from yargs
  wait: argv.wait,
  notionIconUrl: argv['notion-icon-url'],
  helpDocsUrl: argv['help-docs-url'],
  sendTelegram: argv['send-telegram'],
  saveContent: argv['save-content'],
  concurrency: argv.concurrency,

  // Secrets from .env file
  notionToken: process.env.NOTION_TOKEN,
  frontendDbId: process.env.NOTION_FRONTEND_DB_ID,
  backendDbId: process.env.NOTION_BACKEND_DB_ID,
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
  telegramChatId: process.env.TELEGRAM_CHAT_ID,
  telegramTopicId: process.env.TELEGRAM_TOPIC_ID,
  translationUrl: process.env.TRANSLATION_URL || 'https://www.notion.so/zh-cn/help',
}

// Validation
if (!config.notionToken || !config.frontendDbId || !config.backendDbId) {
  throw new Error('Missing required environment variables: NOTION_TOKEN, NOTION_FRONTEND_DB_ID, NOTION_BACKEND_DB_ID')
}

if (config.saveContent) {
  console.log('[INFO] Save content to files and commit to GitHub is enabled.')
}

if (config.sendTelegram && (!config.telegramBotToken || !config.telegramChatId)) {
  console.warn(
    '[WARN] Telegram notifications are enabled, but TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID are missing in .env file.'
  )

  config.sendTelegram = false
}

export default Object.freeze(config)
