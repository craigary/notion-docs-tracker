---
title: "Notion MCP"
emoji: "🛠️"
description: "Connect your favorite AI tools, like Claude, ChatGPT, and Cursor, directly to your Notion workspace."
url: "https://www.notion.com/help/notion-mcp"
key: "help:notion-mcp"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/rNBitUO8v48vgUfn3bu6O/26f04dcc3899951edc2270d18dbd0255/Notion_MCP_from_Figma.png"
category: "Notion AI"
categoryKey: "category:notion-ai"
---

## What is Notion MCP?

**Notion MCP (Model Context Protocol)** is a powerful way to connect your favorite AI tools directly to your Notion workspace. Think of it as a bridge that lets AI assistants like Claude, ChatGPT, and Cursor read from and write to your Notion pages in real-time.

Unlike traditional integrations, MCP is designed specifically for AI agents. It's fast, context-aware, and works seamlessly with how you already use Notion. No complex setup required—just connect once and your AI tools can instantly access your workspace.

## Use cases and inspiration

**For developers**: Use Cursor to automatically generate technical documentation from your code files and create structured project pages in Notion.

**For product teams**: Have AI tools analyze user feedback and create feature specifications or launch checklists in your product roadmap.

**For researchers**: Transform scattered notes and research findings into well-organized databases and comprehensive review documents.

**For content creators**: Generate editorial calendars, blog outlines, and campaign tracking pages based on trending topics and performance data.

**For personal productivity**: Create detailed travel itineraries, organize learning materials, or turn meeting recordings into actionable task lists.

## Getting started

Ready to connect your AI tools to Notion? Here's how:

1. **Browse the Notion MCP Gallery**: Visit [our gallery to connect popular AI tools](https://developers.notion.com/docs/get-started-with-mcp#connect-through-the-notion-app) with just a few clicks.

2. **Connect through the AI tool directly**: Many compatible AI tools have built-in options to connect to Notion MCP in their settings or integrations menu

3. **For custom MCP connections**: Check out our [developer docs](https://developers.notion.com/docs/get-started-with-mcp#connect-through-your-ai-tool) for step-by-step setup instructions and manual connection methods for supported MCP clients.

4. **View supported tools**: See the full list of [compatible AI tools](https://developers.notion.com/docs/mcp-supported-tools) and their capabilities.

## Best practices

When using Notion MCP, keep these tips in mind:

* **Start with single-player use cases**: MCP works best for individual workflows where you're connecting your personal AI tools to your Notion workspace.

* **Use descriptive page titles**: AI tools rely on clear page titles to understand your content structure.

* **Be mindful of permissions**: Remember that MCP tools act with your full Notion permissions—they can access everything you can access.

## Admin controls for MCP

Admins on the Enterprise plan can manage which MCP clients and AI tools are allowed to connect to their Notion workspace through Notion MCP (for example Cursor, Claude, or ChatGPT).

With MCP Governance enabled, Enterprise admins can:

* Approve specific AI tools and MCP clients that can connect to Notion MCP

* Block any tool that is not explicitly approved

* Enforce these controls at the workspace level (admin-managed)

Notion MCP continues to respect all existing Notion permissions.

### How to enable

Workspace owners on the Enterprise Plan can control whether members can connect external AI tools through Notion MCP using the following steps:

1. Go to `Settings` → `Connections`.

2. Open the `Permissions` tab.

3. Under `AI tools`, set `Restrict AI tools members can connect` to `Only from approved list`.

   * If any external AI tools are already connected to the Notion MCP, they will automatically be added to the approved list.

4. Click `Manage approved AI tools` to review which external AI tools are approved.

5. If you need to add more, click `Add approved AI tools` and use the modal to search and approve additional external AI tools.

6. Once an external AI tool is on the approved list, any member in the workspace can connect the Notion MCP to that external AI tool. The AI tool will be listed in the list of External AI tools as `Not Connected`.

## Popular AI tools

Notion MCP works with leading AI platforms:

* [Anthropic Claude](https://claude.ai): Connect Claude Desktop or [Claude.ai](http://Claude.ai) to your Notion workspace.

* [Cursor](https://cursor.sh): The AI-powered code editor with seamless Notion integration.

* [ChatGPT Pro](https://chat.openai.com): Use ChatGPT Pro's advanced features with your Notion content.

More integrations are being added regularly. Any AI tool that supports the Model Context Protocol can connect to Notion.

**Learn more:**

* [Notion MCP Overview](https://developers.notion.com/docs/mcp)

* [Getting started with Notion MCP](https://developers.notion.com/docs/get-started-with-mcp)

* [Security and privacy best practices](https://developers.notion.com/docs/mcp-security-best-practices)

* [Browse all supported tools and capabilities](https://developers.notion.com/docs/get-started-with-mcp#connect-through-the-notion-app)


## FAQs

### Can we allow Cursor and Claude but block Gemini or Grok?

Yes. Enterprise Admins can explicitly approve specific AI tools and MCP clients and block all others.


### Can we enable MCP without losing control of our data?

Yes. Only admin-approved tools can connect, and MCP does not bypass Notion permissions.


### Can admins see which AI tools users are connecting?

Enterprise Admins control which AI tools and MCP clients are allowed, and which ones have active connections in the workspace. Detailed visibility into which users are using each tool is not yet available.


### Why is an AI tool not on the approved list, but still listed under Connected tools?

If a tool was connected before it was removed from the approved list, it may still appear under Connected tools because we cannot revoke existing tokens for previously connected tools. Even so, Notion blocks every call from any AI tool or MCP client that is not on the approved list, so it is functionally blocked.


### Can I disconnect all users from a specific AI tool?

No. If you need to remove access for a specific tool, the current workaround is to disconnect all Notion MCP connections and have users reconnect only from tools that are on the approved list.


### How do I disconnect all of the external AI tools or Notion MCP?

Use the `Disconnect All Users` button. This disconnects every external AI tool and MCP client that is connected to the workspace through Notion MCP, and users will need to re-authenticate. After re-authentication, users can only connect to Notion MCP from tools that are on the approved list.


### Which AI tools can connect to Notion MCP?

Only tools that support MCP (meaning they can act as an MCP client) can connect to Notion MCP, and not every AI chat tool supports MCP.

Some tools list Notion in a directory for one-click setup, and others support a custom MCP connector. See our [developer docs](https://developers.notion.com/guides/mcp/mcp) for the supported MCP URL options.


### Can an admin approve an AI tool that is not in the current list?

Yes. If a tool supports MCP, it can be approved even if it is not shown in the directory.

To add a new tool to the approved list, a workspace owner or admin needs to successfully connect to Notion MCP from that tool (for example, by using a custom MCP connector if the tool supports it).

Once the connection succeeds, that tool will appear as an option for the workspace, and other users will be able to use it too.


### How do I rename a custom AI tool?

After connecting a custom AI tool, Notion will initially name the AI tool using the redirect URL we receive during the connection flow.

Admins can edit the AI tool to change both its name and its logo, and we recommend doing this so the tool is easy to recognize for end users and in audit logs.

After you rename it, future audit log events will show the updated name and logo, while older audit log events will show the name that was in place at the time (often the original URL or a previous name).

Notion also logs name change events in the audit log, and you can still search audit log events for the tool using its connection URL, which stays present in the event details even if the display name changes.
