# notion-docs-tracker-rewrite

Bun script that tracks Notion Help English docs, syncs them into two Notion data sources, optionally saves Markdown into `./content`, and can send Telegram updates when enabled.

## Setup

```bash
bun install
cp .env.example .env
```

## Environment Variables

- `NOTION_TOKEN`
- `NOTION_FRONTEND_DATASOURCE_ID`
- `NOTION_BACKEND_DATASOURCE_ID`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `TELEGRAM_TOPIC_ID`
- `HELP_DOCS_URL`
- `TRANSLATION_URL`

## Commands

- `bun start` runs the sync locally with Telegram disabled
- `bun run sync` runs the sync locally and saves Markdown into `./content`
- `bun run unlock:frontend-pages` unlocks all locked pages in the frontend data source
- `bun run check` runs `tsc --noEmit`
- `bun run format` runs `oxfmt` for the repository while skipping `./content`
- `bun run format:check` checks formatting without writing files
