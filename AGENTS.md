# Repository Guidelines

## Project Structure & Module Organization

This repository is a Bun-based sync script, not a web app. The entrypoint is [`src/index.ts`](src/index.ts), which orchestrates the full sync flow: load existing Notion rows from both data sources, fetch the Notion Help tree, process categories first then articles, refresh category synced blocks, collect orphans, and send Telegram notifications. Scraping code lives under `src/sources/`. Notion-specific API helpers live under `src/notion/`. Sync behavior is split by target under `src/sync/`, with frontend and backend update rules separated on purpose. Shared utilities such as hashing, Markdown conversion, file output, and Telegram formatting live under `src/utils/`. Cross-module business types live in [`types.ts`](types.ts).

## Sync Architecture: Frontend vs Backend

Each Help doc is synced into two Notion data sources, matched by the `Identifier` property (`help:<slug>` / `category:<slug>`):

- **Backend** (`NOTION_BACKEND_DATASOURCE_ID`): the source mirror. Stores full Markdown in `Content` and a SHA-256 hash in `Hash`; allowed to update title, emoji, and content metadata on every sync.
- **Frontend** (`NOTION_FRONTEND_DATASOURCE_ID`): user-facing pages. Updates metadata (Category, URL, Cover, relations, Order, Status) but must preserve translated `Name`, `Description`, body content, and icon for existing pages.

Content hashes are computed from the fetched Markdown (`src/utils/hash.ts`). A scenario resolver (`src/sync/scenarios.ts`) decides per item whether to create/update frontend and/or backend pages based on which pages already exist and whether the hash changed. Only hash-changed items count as "updated" (for the summary and Telegram).

## Build, Test, and Development Commands

Install dependencies with `bun install`. Run the sync locally with `bun start` (equivalent to `bun run sync`; both run with `--send-telegram=false --save-content=true`). Telegram sending is enabled only in CI: `.github/workflows/sync.yml` runs on a schedule (`cron: '0 */6 * * *'`) with `bun ./src/index.ts --send-telegram=true --save-content=true` and auto-commits `content/`. Run `bun run check` before finishing changes; it executes `tsc --noEmit` and is the current validation gate. `bun run lint` (oxlint) and `bun run format` (oxfmt, skips `./content`) are also available. There is no test runner.

## CLI Options (parsed in `src/config.ts`)

- `--wait` — milliseconds to wait before each item (default 200)
- `--concurrency` — items processed concurrently (default 3)
- `--send-telegram` — enable Telegram notifications (default true; disabled when tokens are missing)
- `--save-content` — write Markdown to `./content/<key>.md` (default true)
- `--help-docs-url` — Notion Help index (default `HELP_DOCS_URL` env / `https://www.notion.com/help`)
- `--translation-url` — Chinese translation site for the Telegram buttons (default `TRANSLATION_URL` env / `https://the-block.club/help`)

Required env vars: `NOTION_TOKEN`, `NOTION_FRONTEND_DATASOURCE_ID`, `NOTION_BACKEND_DATASOURCE_ID`. Optional: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `TELEGRAM_TOPIC_ID`.

## Coding Style & Naming Conventions

TypeScript is compiled in strict mode with `noUncheckedIndexedAccess` and `noImplicitOverride` enabled in [`tsconfig.json`](tsconfig.json). Keep new code in ESM style and preserve the current file layout. Use `DATASOURCE` terminology in config, env vars, and code paths; do not introduce new `DATABASE` or `DB` naming for the active Notion API surface. Use the Notion SDK default version handling everywhere in this repo: do not pass `notionVersion`, do not add a `NOTION_VERSION` env var, and do not expose a `--notion-version` CLI option. Note that some source comments are written in Chinese.

## Testing Guidelines

Validate changes with `bun run check`. If you touch scraping logic, manually run `bun start --help` or a real sync against a safe workspace to verify CLI parsing and API request shapes. Be careful with changes that would mutate Notion content; dry validation should come before live syncs.

## Commit & Pull Request Guidelines

Content updates are auto-committed by GitHub Actions with the conventional message `docs: daily sync of Notion docs content`; keep those commits separate from code changes. For manual commits, keep them short and task-specific. In pull requests, describe which sync path changed: scraping, frontend sync, backend sync, Markdown output, or Telegram output.
