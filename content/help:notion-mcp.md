---
title: "Notion MCP"
emoji: null
description: null
url: "https://www.notion.com/help/notion-mcp"
key: "help:notion-mcp"
coverImage: null
category: "Notion AI"
categoryKey: "category:notion-ai"
---

**Notion MCP (Model Context Protocol)** is a powerful way to connect your favorite AI apps directly to your Notion workspace. Think of it as a bridge that lets AI assistants like Claude, ChatGPT, and Cursor read from and write to your Notion pages in real-time.

Unlike traditional integrations, MCP is designed specifically for AI agents. It's fast, context-aware, and works seamlessly with how you already use Notion. No complex setup required—just connect once and your AI apps can instantly access your workspace.

## Use cases & inspiration

**For developers**: Use Cursor to automatically generate technical documentation from your code files and create structured project pages in Notion.

**For product teams**: Have AI apps analyze user feedback and create feature specifications or launch checklists in your product roadmap.

**For researchers**: Transform scattered notes and research findings into well-organized databases and comprehensive review documents.

**For content creators**: Generate editorial calendars, blog outlines, and campaign tracking pages based on trending topics and performance data.

**For personal productivity**: Create detailed travel itineraries, organize learning materials, or turn meeting recordings into actionable task lists.

## Getting started

Ready to connect your AI apps to Notion? Here's how:

1. **Browse the Notion MCP Gallery**: Visit [our gallery to connect popular AI apps](https://developers.notion.com/docs/get-started-with-mcp#connect-through-the-notion-app) with just a few clicks.

2. **Connect through the AI tool directly**: Many compatible AI apps have built-in options to connect to Notion MCP in their settings or integrations menu

3. **For custom MCP connections**: Check out our [developer docs](https://developers.notion.com/docs/get-started-with-mcp#connect-through-your-ai-tool) for step-by-step setup instructions and manual connection methods for supported MCP clients.

4. **View supported tools**: See the full list of [compatible AI apps](https://developers.notion.com/docs/mcp-supported-tools) and their capabilities.

## Best practices

When using Notion MCP, keep these tips in mind:

* **Start with single-player use cases**: MCP works best for individual workflows where you're connecting your personal AI apps to your Notion workspace.

* **Use descriptive page titles**: AI apps rely on clear page titles to understand your content structure.

* **Be mindful of permissions**: Remember that MCP tools act with your full Notion permissions—they can access everything you can access.

## Admin controls for MCP

Admins on the Enterprise plan can manage which MCP clients and AI apps are allowed to connect to their Notion workspace through Notion MCP (for example Cursor, Claude, or ChatGPT).

With MCP Governance enabled, Enterprise admins can:

* Approve specific AI apps and MCP clients that can connect to Notion MCP.

* Block any tool that is not explicitly approved.

* Enforce these controls at the workspace level (admin-managed).

* Set up an enterprise-managed connection so your identity provider manages connections for supported AI apps.

Notion MCP continues to respect all existing Notion permissions.

If your company uses Okta to sign in to Notion, you can manage how supported AI tools like Claude connect to Notion using enterprise-managed connections. Your Oktakta admin sets up the connection once for the whole team, so members don't need to approve it themselves. Learn more about setting up [enterprise-managed connections for Notion MCP](https://www.notion.com/help/set-up-enterprise-managed-connections-for-notion-mcp)→

### How to enable

Workspace owners on the Enterprise Plan can control whether members can connect external AI apps through Notion MCP using the following steps:

1. Go to `Settings` → `Connections`.

2. Open the `Permissions` tab.

3. Under `AI apps`, set `Restrict AI apps members can connect` to `Only from approved list`.

   * If any external AI apps are already connected to the Notion MCP, they will automatically be added to the approved list.

4. Click `Manage approved AI apps` to review which external AI apps are approved.

5. If you need to add more, click `Add approved AI apps` and use the modal to search and approve additional external AI apps

6. Once an external AI app is on the approved list, any member in the workspace can connect the Notion MCP to that external AI app. It will be in the list of External AI apps as `Not Connected`.

## Popular AI apps

Notion MCP works with leading AI platforms:

* [Anthropic Claude](https://claude.ai): Connect Claude Desktop or [Claude.ai](http://Claude.ai) to your Notion workspace.

* [Cursor](https://cursor.sh): The AI-powered code editor with seamless Notion integration.

* [ChatGPT Pro](https://chat.openai.com): Use ChatGPT Pro's advanced features with your Notion content.

More connections are being added regularly. Any AI app that supports the Model Context Protocol can connect to Notion.

**Learn more:**

* [Notion MCP Overview](https://developers.notion.com/docs/mcp)

* [Getting started with Notion MCP](https://developers.notion.com/docs/get-started-with-mcp)

* [Security and privacy best practices](https://developers.notion.com/docs/mcp-security-best-practices)

* [Browse all supported tools and capabilities](https://developers.notion.com/docs/get-started-with-mcp#connect-through-the-notion-app)


## FAQs