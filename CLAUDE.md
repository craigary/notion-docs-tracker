# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Notion Documentation Tracker that automatically syncs Notion's official help documentation with two Notion databases (front-end and back-end) and sends Telegram notifications about changes. The system scrapes content from notion.com/help, processes it through concurrent workers, and maintains a dual-database architecture for presentation and metadata storage.

## Common Commands

### Development

```bash
# Install dependencies
bun install

# Run the main tracker
bun start

# Run in development mode with file watching
bun dev

# Run with specific flags
bun start --send-telegram=false --save-content=true
bun start --concurrency=5 --wait=300
```

### Configuration Flags

- `--send-telegram=<true|false>`: Enable/disable Telegram notifications (default: true)
- `--save-content=<true|false>`: Enable/disable local content saving (default: true)
- `--wait=<milliseconds>`: Delay between processing items (default: 200)
- `--concurrency=<number>`: Number of concurrent processing workers (default: 3)

## Architecture

### Core Components

**Main Application (`src/index.ts`)**

- Orchestrates the entire sync process
- Manages concurrent processing of categories and articles
- Handles Telegram notifications and error tracking
- Uses a global store state for tracking new/updated/failed items

**Configuration System (`config.ts`)**

- Combines yargs command-line arguments with environment variables
- Validates required environment variables (NOTION_TOKEN, NOTION_FRONTEND_DS_ID, NOTION_BACKEND_DS_ID)
- Provides fallback behavior for missing Telegram configuration

**Processor Pattern (`src/processors.ts`)**

- Defines `Config<T, U>` interface for consistent processing of categories and articles
- Implements separate configurations for `articleConfig` and `categoryConfig`
- Each config defines: fetchContent, properties, page children, icons, and parent handling
- Handles the dual-database pattern (front-end for presentation, back-end for metadata)

### Data Flow

1. **Discovery Phase**: Scrapes notion.com/help using linkedom, extracts category/article structure from `__NEXT_DATA__`
2. **Reference Building**: Fetches existing pages from both Notion databases using paginated API calls
3. **Processing Phase**: Concurrent processing with Promise.all batches based on concurrency setting
4. **Content Transformation**: Uses hast-util-\* libraries for HTML → Markdown conversion
5. **Database Sync**: Creates/updates pages in both front-end and back-end databases with proper relations

### Key Architectural Patterns

**Dual Database Architecture**

- **Front-end Database**: User-facing pages with clean presentation, proper nesting (articles under categories)
- **Back-end Database**: Metadata storage including content hashes for change detection, relations to front-end pages

**Change Detection System**

- Uses SHA256 hashes stored in back-end database to detect content changes
- Only processes and updates content that has actually changed
- Maintains reference counts and hash validation for efficient syncing

**Concurrent Processing**

- Processes items in batches to avoid overwhelming APIs
- Configurable concurrency limit (default: 3) with configurable delays
- Error isolation prevents single failures from blocking entire sync

**Content Pipeline**

- HTML content scraped from notion.com/help
- Converted to Markdown using hast-util-to-mdast and mdast-util-to-markdown
- Split into Notion-compatible text blocks using Unicode grapheme clustering
- Preserves formatting, images, and structure across the conversion

### Type System (`types.ts`)

- Core types: `Category`, `Article` (basic info), `CategoryInfo`, `ArticleInfo` (full content with metadata)
- Type-safe processing with clear separation between basic and enriched content types

### Notion API Integration

- Uses `@notionhq/client` v5+ with modern API patterns
- Implements proper error handling for Notion API limitations (nested page update bugs)
- Handles different parent types (database vs page) for front-end organization

### Environment Configuration

- Required: `NOTION_TOKEN`, `NOTION_FRONTEND_DS_ID`, `NOTION_BACKEND_DS_ID`
- Optional: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `TELEGRAM_TOPIC_ID`, `TRANSLATION_URL`
- Validation with graceful degradation for optional features

## Development Notes

- Uses Bun as runtime and package manager
- TypeScript with strict type checking enabled
- Content saved to `content/` directory as Markdown files when `save-content` enabled
- Telegram messages include formatted lists of new/updated articles with direct links
- Error tracking includes failed items with error details for debugging
- Supports internationalization via `TRANSLATION_URL` for Chinese documentation
