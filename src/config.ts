import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(Bun.argv))
  .usage('Usage: $0 [options]')
  .options({
    wait: {
      type: 'number',
      default: 200,
      description: 'Milliseconds to wait before processing each item'
    },
    concurrency: {
      type: 'number',
      default: 3,
      description: 'Number of items to process concurrently'
    },
    'send-telegram': {
      type: 'boolean',
      default: true,
      description: 'Enable Telegram notifications'
    },
    'save-content': {
      type: 'boolean',
      default: true,
      description: 'Save markdown content into ./content'
    },
    'help-docs-url': {
      type: 'string',
      default: Bun.env.HELP_DOCS_URL ?? 'https://www.notion.com/help',
      description: 'Notion Help docs index URL'
    },
    'translation-url': {
      type: 'string',
      default: Bun.env.TRANSLATION_URL ?? 'https://the-block.club/help',
      description: 'Chinese translation URL for Telegram buttons'
    }
  })
  .help()
  .alias('help', 'h')
  .parseSync()

const notionToken = Bun.env.NOTION_TOKEN
const frontendDatasourceId = Bun.env.NOTION_FRONTEND_DATASOURCE_ID
const backendDatasourceId = Bun.env.NOTION_BACKEND_DATASOURCE_ID

const config = {
  wait: argv.wait,
  concurrency: argv.concurrency,
  sendTelegram: argv['send-telegram'],
  saveContent: argv['save-content'],
  helpDocsUrl: argv['help-docs-url'],
  translationUrl: argv['translation-url'],
  notionToken,
  frontendDatasourceId,
  backendDatasourceId,
  telegramBotToken: Bun.env.TELEGRAM_BOT_TOKEN,
  telegramChatId: Bun.env.TELEGRAM_CHAT_ID,
  telegramTopicId: Bun.env.TELEGRAM_TOPIC_ID
}

if (!config.notionToken || !config.frontendDatasourceId || !config.backendDatasourceId) {
  throw new Error(
    'Missing required environment variables: NOTION_TOKEN, NOTION_FRONTEND_DATASOURCE_ID, NOTION_BACKEND_DATASOURCE_ID'
  )
}

if (config.sendTelegram && (!config.telegramBotToken || !config.telegramChatId)) {
  console.warn(
    '[WARN] Telegram notifications are enabled, but TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID are missing. Disabling Telegram.'
  )
  config.sendTelegram = false
}

export default Object.freeze(config)
