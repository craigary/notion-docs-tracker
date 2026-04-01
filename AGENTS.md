# Repository Guidelines

## Project Structure & Module Organization

This repository is a Bun-based sync script, not a web app. The entrypoint is [`src/index.ts`](/Users/craighart/Developer/[dev]%20notion-related/notion-docs-tracker-rewrite/src/index.ts), which orchestrates the full sync flow: load existing Notion rows, fetch the Help tree, process categories first, then articles, write Markdown files, and send Telegram notifications. Scraping code lives under `src/sources/`. Notion-specific API helpers live under `src/notion/`. Sync behavior is split by target under `src/sync/`, with frontend and backend update rules separated on purpose. Shared utilities such as hashing, Markdown conversion, file output, and Telegram formatting live under `src/utils/`. Cross-module business types live in [`types.ts`](/Users/craighart/Developer/[dev]%20notion-related/notion-docs-tracker-rewrite/types.ts).

## Build, Test, and Development Commands

Install dependencies with `bun install`. Run the sync locally with `bun start`. Use `bun run sync` when you explicitly want Telegram and file output enabled. Run `bun run check` before finishing changes; it executes `tsc --noEmit` and is the current validation gate. There is no single-test command yet because the repository does not include a test runner.

## Coding Style & Naming Conventions

TypeScript is compiled in strict mode with `noUncheckedIndexedAccess` and `noImplicitOverride` enabled in [`tsconfig.json`](/Users/craighart/Developer/[dev]%20notion-related/notion-docs-tracker-rewrite/tsconfig.json). Keep new code in ESM style and preserve the current file layout. Use `DATASOURCE` terminology in config, env vars, and code paths; do not introduce new `DATABASE` or `DB` naming for the active Notion API surface. Use the Notion SDK default version handling everywhere in this repo: do not pass `notionVersion`, do not add a `NOTION_VERSION` env var, and do not expose a `--notion-version` CLI option. Frontend sync code must preserve translated `Name`, `Description`, body content, and icon for existing pages. Backend sync code is the source mirror and is allowed to update emoji and content metadata.

## Testing Guidelines

Validate changes with `bun run check`. If you touch scraping logic, manually run `bun start --help` or a real sync against a safe workspace to verify CLI parsing and API request shapes. Be careful with changes that would mutate Notion content; dry validation should come before live syncs.

## Commit & Pull Request Guidelines

This repository currently has no commit history, so no commit-message convention can be inferred yet. Keep future commits short and task-specific. In pull requests, describe which sync path changed: scraping, frontend sync, backend sync, Markdown output, or Telegram output.
