---
title: "Connect AI tools to your workspace with Notion MCP"
emoji: null
description: "Connect your favorite AI apps, like Claude, ChatGPT, and Cursor, directly to your Notion workspace."
url: "https://www.notion.com/help/notion-mcp"
key: "help:notion-mcp"
coverImage: "https://img.youtube.com/vi/2p8_o5fN_6g/maxresdefault.jpg"
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

Learn more about [how different teams use Notion MCP →](https://www.notion.com/blog/mcp-use-cases)

## Getting started

Ready to connect your AI apps to Notion? Here's how:

1. **Browse the Notion MCP Gallery**: Visit [our gallery to connect popular AI apps](https://developers.notion.com/docs/get-started-with-mcp#connect-through-the-notion-app) with just a few clicks.

2. **Connect through the AI tool directly**: Many compatible AI apps have built-in options to connect to Notion MCP in their settings or integrations menu

3. **For custom MCP connections**: Check out our [developer docs](https://developers.notion.com/docs/get-started-with-mcp#connect-through-your-ai-tool) for step-by-step setup instructions and manual connection methods for supported MCP clients.

4. **View supported tools**: See the full list of [compatible AI apps](https://developers.notion.com/docs/mcp-supported-tools) and their capabilities.

## Set up your agent with the setup prompt

Connecting your AI app to Notion MCP gives it access to your workspace, but most agents only use Notion when you ask. The **setup prompt** teaches your agent to check Notion for context before it answers, save useful work back to Notion, and remember what matters from chat to chat.

* **One shared brain for every agent:** Your context, Skills, and work live in Notion, so any agent you connect can pick up where the last one left off.

* **Stop starting from zero:** Your agent saves your preferences, decisions, and project details to a private Memories database you can review and edit.

* **Your workspace stays the way you like it:&#x20;**&#x54;he setup prompt adapts to how your workspace is already organized, and your agent asks before it creates or changes anything.

To get started:

1. Connect your AI app to Notion MCP. See [getting started](https://www.notion.com/help/notion-mcp#getting-started) above.

2. Share the setup prompt with your agent:

   * **Claude:&#x20;**[Open the setup prompt in Claude](https://claude.ai/new?q=Help%20me%20set%20up%20Notion%20as%20my%20context%20system%20using%20this%20guide%3A%20https%3A%2F%2Fdevelopers.notion.com%2Fprompts%2Fsetup)

   * **ChatGPT:&#x20;**[Open the setup prompt in ChatGPT](https://chatgpt.com/plugins/notion?install=\&prompt=Help+me+set+up+Notion+as+my+context+system+using+this+guide%3A+https%3A%2F%2Fdevelopers.notion.com%2Fprompts%2Fsetup)

   * **Any other agent:** Start a new chat and paste:

     `Help me set up Notion as my context system using this guide: <https://developers.notion.com/prompts/setup`>

3. Follow the steps your agent suggests. It offers to import your Memories, recent work, and skills, then saves an Agent Operating Guide in Notion.

4. Add the custom instructions your agent gives you to your AI app's settings, so future chats remember to use Notion:

   * **ChatGPT:&#x20;**`Settings` → `Personalization` → `Custom Instructions`

   * **Claude:&#x20;**`Settings` → `Account` → `Instructions for Claude`

   * **GrokBot:** There isn't a lasting place to save instructions yet, so share your Agent Operating Guide at the start of each new chat.

Run the setup prompt once for each agent you connect. For full details, see the [setup prompt in our developer docs](https://developers.notion.com/prompts/setup) →

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

On the Enterprise plan, you can manage how supported AI apps such as Claude connect to Notion using enterprise-managed connections. An admin sets up the connection once for the whole team, so members don't need to approve it themselves. You can set this up with your own identity provider, such as Okta, or by trusting Claude to confirm who's on your team, so any single sign-on provider works. Learn more about [setting up enterprise-managed connections for Notion MCP →](https://www.notion.com/help/set-up-enterprise-managed-connections-for-notion-mcp)

## How to set up these controls

Workspace owners on the Enterprise plan can choose which external AI apps members can connect through Notion MCP:

* Go to `Settings` → `Notion MCP` → `Manage workspace clients`.

* Under `Which clients members can connect`, choose `Approved MCP clients only`.

* Select `Manage approved list` to review or add clients.

## Popular AI apps

Notion MCP works with leading AI platforms:

* [Anthropic Claude](https://claude.ai): Connect Claude Desktop or [Claude.ai](http://Claude.ai) to your Notion workspace.

* [Cursor](https://cursor.sh): The AI-powered code editor with seamless Notion integration.

* [ChatGPT](https://chatgpt.com/): Connect ChatGPT to your Notion workspace. You can also [open Notion pages alongside your chat](https://www.notion.com/help/use-notion-pages-in-chatgpt) and edit them live.

More connections are being added regularly. Any AI app that supports the Model Context Protocol can connect to Notion.

**Learn more:**

* [Notion MCP Overview](https://developers.notion.com/docs/mcp)

* [Getting started with Notion MCP](https://developers.notion.com/docs/get-started-with-mcp)

* [Security and privacy best practices](https://developers.notion.com/docs/mcp-security-best-practices)

* [Browse all supported tools and capabilities](https://developers.notion.com/docs/get-started-with-mcp#connect-through-the-notion-app)


## FAQs

### Can we allow Cursor and Claude but block Gemini or Grok?

Yes. Enterprise Admins can explicitly approve specific AI apps and MCP clients and block all others.


### Can we enable MCP without losing control of our data?

Yes. Only admin-approved tools can connect, and MCP does not bypass Notion permissions.


### Can admins see which AI apps users are connecting?

Enterprise Admins control which AI apps and MCP clients are allowed, and which ones have active connections in the workspace. Detailed visibility into which users are using each tool is not yet available.


### Why is an AI app not on the approved list, but still listed under Connected tools?

If a tool was connected before it was removed from the approved list, it may still appear under Connected tools because we cannot revoke existing tokens for previously connected tools. Even so, Notion blocks every call from any AI app or MCP client that is not on the approved list, so it is functionally blocked.


### Can I disconnect all users from a specific AI app?

No. If you need to remove access for a specific tool, the current workaround is to disconnect all Notion MCP connections and have users reconnect only from tools that are on the approved list.


### How do I disconnect all of the external AI apps or Notion MCP?

Use the `Disconnect All Users` button. This disconnects every external AI tool and MCP client that is connected to the workspace through Notion MCP, and users will need to re-authenticate. After re-authentication, users can only connect to Notion MCP from tools that are on the approved list.


### Which AI tools can connect to Notion MCP?

Only tools that support MCP (meaning they can act as an MCP client) can connect to Notion MCP, and not every AI chat tool supports MCP.

Some tools list Notion in a directory for one-click setup, and others support a custom MCP connector. See our [developer docs](https://developers.notion.com/guides/mcp/mcp) for the supported MCP URL options.


### Can an admin approve an AI app that is not in the current list?

Yes. If a tool supports MCP, it can be approved even if it is not shown in the directory.

To add a new tool to the approved list, a workspace owner or admin needs to successfully connect to Notion MCP from that tool (for example, by using a custom MCP connector if the tool supports it).

Once the connection succeeds, that tool will appear as an option for the workspace, and other users will be able to use it too.


### How do I rename a custom AI app?

After connecting a custom AI app, Notion will initially name the AI app using the redirect URL we receive during the connection flow.

Admins can edit the AI app to change both its name and its logo, and we recommend doing this so the tool is easy to recognize for end users and in audit logs.

After you rename it, future audit log events will show the updated name and logo, while older audit log events will show the name that was in place at the time (often the original URL or a previous name).

Notion also logs name change events in the audit log, and you can still search audit log events for the tool using its connection URL, which stays present in the event details even if the display name changes.


### Can AI apps connected through Notion MCP see my connected sources?

Yes, on Business and Enterprise plans with Notion AI. When a workspace has AI Connectors set up, an AI app connected through Notion MCP can search your connected sources, such as Slack, Google Drive, and GitHub. <!-- -->It can also open a result to read the full item.<!-- --> It only sees what your own connection can already see, the same as Notion AI. The content goes to the AI app you connected, such as Claude or ChatGPT, and that app's own terms apply to it.
