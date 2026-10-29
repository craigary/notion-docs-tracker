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

## Translation Workflow (manual, agent-assisted)

Chinese translations live in the Frontend data source body. Rules and terminology are in `translation/style-guide.md` and `translation/glossary.md`. The full runbook is the project skill `.workbuddy/skills/notion-doc-translate/SKILL.md`; load it before doing any translation work.

The loop is always: `bun run translate:context <identifier>` → read the workpack in `.cache/translate/` → write a patches JSON → `bun run translate:apply -- --file <patches>` (dry-run) → rerun with `--apply`.

**Never use `replace_content` on Frontend pages.** Pages can contain blocks that `retrieveMarkdown` cannot represent (they surface as `<unknown .../>`), and a full-page replace deletes them. Only targeted `update_content` patches are safe. Note that `content/` files are CRLF/LF mixed; normalize newlines before splitting them by heading.

**Links stay as English URLs.** Do not map `notion.com/help/<slug>` to Frontend pages or `/p/<id>?pvs=25`. Target pages may be missing, stale, or lack the anchored heading, so auto-mapping produces dead links. The user converts them to internal Notion links himself during maintenance. Do not revert existing `/p/` links back to English either. Every internal link must be listed in the report so he can work through them.

**Never touch the `Status` property.** The user sets it manually.

**Do not "fix" inconsistent UI labels.** Notion's own Chinese UI is inconsistent (e.g. `AI Meeting Notes` appears as both `会议记录` and `AI 速记`); that inconsistency is upstream and must be preserved.

**Every translation report must include a `⚠️ 需要你手动处理` section** covering links, terminology guesses, structural mismatches, questionable source content, and anything left undone. Write `无` rather than omitting a subsection. Never report just "done" — the user verifies the result and needs to know exactly where to look and what is still broken. Also state how far the checks actually went: say which targeted checks ran, never imply a full proofread.

## Status Auditing

`bun run audit` cross-checks git history, Backend `Content` fingerprints, Frontend CJK ratio, and flip timestamps to classify every `In Progress` row. `bun run apply-status` reverts only the rows it can prove are false positives (dry-run by default).
