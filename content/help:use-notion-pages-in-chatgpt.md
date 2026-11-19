---
title: "Use Notion pages in ChatGPT & Claude"
emoji: null
description: "Learn how to open, create, and edit Notion pages alongside your ChatGPT or Claude conversation."
url: "https://www.notion.com/help/use-notion-pages-in-chatgpt"
key: "help:use-notion-pages-in-chatgpt"
coverImage: null
category: "Notion AI"
categoryKey: "category:notion-ai"
---

Open or create a Notion page beside your ChatGPT or Claude conversation. You can edit the page yourself and see changes as ChatGPT or Claude makes them.

## Before you start

Here's what you need:

* **In ChatGPT:&#x20;**&#x41;n account that can add the Notion plugin. If your company manages ChatGPT, an admin may control whether the Notion plugin is allowed. Learn more about [OpenAI's plugin controls](https://learn.chatgpt.com/docs/enterprise/apps-and-connectors) →

* **In Claude:** Add the Notion connector in Claude on the web or in the Claude desktop app. If your company manages Claude, an admin may control which tools the connector can use.

* **In Notion:&#x20;**&#x59;ou can use the panel on any Notion plan. It's on by default. You can open pages you have access to and edit pages where you have edit access.

* **If your workspace requires single sign-on (SSO):&#x20;**&#x53;ign in to Notion with SSO first.

On the Enterprise plan, a workspace owner can turn off the panel for everyone. <!-- -->Learn more about [workspace admin controls](https://www.notion.com/help/use-notion-pages-in-chatgpt#workspace-admin-controls-\(enterprise\)) below.

## Connect Notion to ChatGPT

**In ChatGPT**

1. In ChatGPT, open the [Notion plugin in ChatGPT](https://chatgpt.com/plugins/notion) and install it if needed.

2. When asked, sign in to Notion and pick the workspace you want to use.

3. Review what you're sharing, then allow the connection.

The panel uses the same connection as [Notion MCP](https://www.notion.com/help/notion-mcp).

**In Claude**

1. In the [Notion connector listing](https://claude.com/marketplace/connectors/notion), select `Add to Claude`. If you already connected Notion in Claude, skip to the next section.

2. Follow the prompts to sign in to Notion, choose one workspace, and allow the connection.

3. The first time a Notion page appears in a chat, Claude asks to show content from Notion. Select

   `Allow in this chat`.

**Already connected?**

Start a new chat. The panel uses the Notion account and workspace you connected.

## Open a Notion page in ChatGPT or Claude

There are three ways to open a page:

* **Ask in chat.&#x20;**&#x54;ry “Open my project planning page in Notion” or “Turn these notes into a Notion page.” The page opens beside your chat. If <!-- -->your app <!-- -->sends a link instead, ask it to open the page in the Notion panel. <!-- -->In Claude, select `Allow in this chat` the first time a page opens.

* **Use the sidebar.&#x20;**&#x49;<!-- -->n ChatGPT, open Notion from the ChatGPT sidebar to see your workspace. Search by title, paste a page link, or pick a recent or favorite page. In Claude, open `Interactive connectors` and select `Notion` to search, open a recent page, or start from a template. You can pin Notion to the Claude sidebar for quick access.

* **Start a new page.&#x20;**&#x53;elect `New page`. In an empty workspace, you can also start a blank page or database, or choose a template.

## Edit the page with ChatGPT or Claude

* **Make a change.&#x20;**&#x54;ype directly on the page, or ask your app to edit it. Try “Turn these action items into a Notion database with an owner and due date for each task.”

* **Ask for feedback.&#x20;**&#x54;ry “Leave a comment where the plan needs more detail.” On Notion Business and Enterprise, you can also ask <!-- -->ChatGPT or Claude<!-- --> to suggest wording. The text stays the same until you or a teammate with edit access accepts the suggestion.

* **Share the page.&#x20;**&#x53;elect `Copy link` at the top of the panel. Copying a link doesn't change the page's permissions. If someone needs access, select `Give access` when it appears. This opens the share menu in Notion, where you can grant access if you have permission.

* **Keep working in Notion.&#x20;**&#x53;elect `Open in Notion` at the top of the panel.

## What to do in Notion

A few things aren't available in the panel. You'll need to open the page in Notion to:

* Manage members, billing, or connections

* Change sharing and permissions

* Use Notion AI

* Add a link preview that needs a connected account, like a private GitHub link. You can still paste a plain link in the panel.

## Keep in mind

* **One workspace at a time.&#x20;**&#x54;he panel works with one connected workspace. Pages from other workspaces won't open here. To use a different workspace, connect it or open the page in Notion.

* **Where it works.&#x20;**&#x55;se the panel in Claude on the web or in the Claude desktop app, or in ChatGPT on the web or in the desktop app. On a phone or tablet, open the page in Notion instead.

* **You may not see it in Claude yet.** Claude turns this on for each Claude organization, so it might not be available to you yet. If you don't see Notion pages open in Claude, check back later or open the page in Notion.

* **Name the page you mean.&#x20;**&#x49;n Claude, if you ask about the page that's open (for example, "what am I looking at?"), it may not know which page you mean yet. Mention the page by name or paste its link.

* **Your usual Notion permissions still apply.&#x20;**&#x43;hatGPT and Claude can find and open pages you have access to in the connected workspace.

* **The panel doesn't save unsaved edits on your device.&#x20;**&#x49;f your connection drops, copy any unsaved text before you reload. You can't edit offline.

## Workspace admin controls (Enterprise)

On the Enterprise plan, a workspace owner can turn off the panel for everyone. The panel is on by default, and on other plans it stays on.

1. In Notion, go to `Settings` → `Notion MCP` → `Manage workspace clients`.

2. Turn off `Open Notion pages in MCP clients`. This one setting controls the panel for both Claude and ChatGPT.

Notion checks this setting the next time an open panel loads or saves. After it's off, members can still use Notion in ChatGPT or Claude through chat, as long as their app is allowed to connect.

If your workspace only allows approved AI apps, each app needs its own approval before the panel works. Learn more about connecting [AI tools with Notion MCP](https://www.notion.com/help/notion-mcp) →

## Troubleshooting

* **The panel won't open.&#x20;**&#x53;tart a new chat and ask your app to open a specific page in the Notion panel. <!-- -->In Claude, look for `Allow in this chat` and select it. <!-- -->Still stuck? Check that the <!-- -->connector or plugin<!-- --> is connected and your workspace allows it. Then disconnect and reconnect Notion in ChatGPT or Claude and try a new chat.

* **Claude sign-in fails.** If your Claude organization blocks tools that haven't been set up, you can't sign in to the panel. Ask your Claude admin to allow the Notion connector, for example by requiring approval instead of blocking it. Learn more about [enterprise-managed connections for Notion MCP](https://www.notion.com/help/set-up-enterprise-managed-connections-for-notion-mcp) →

* **The wrong page opens, or a page is missing.&#x20;**&#x4F;pen the page in Notion and check that you can see it in the workspace you connected. If it's in that workspace, paste the page link into the panel's search. If it's in another workspace, connect that workspace or work on the page in Notion.

* **Notion can't sign you in.&#x20;**&#x49;f the message mentions SAML single sign-on, sign in to Notion with SSO, then close and reopen the panel. Otherwise, close and reopen the panel, or select `Open in Notion`.

* **An admin turned off the panel.&#x20;**&#x53;elect `Open in Notion` to keep working. Ask your workspace owner if you need it turned back on.

* **The page is blocked or slow to load.&#x20;**&#x43;lose and reopen the panel. If it still won't load, open the page in Notion.


## FAQs

### Which pages can ChatGPT or Claude see?

The <!-- -->connector or plugin<!-- --> uses your Notion MCP connection. <!-- -->Your app<!-- --> can find other pages you can access in the connected workspace, even if they aren’t open in the panel. Your usual page permissions apply.


### Why don't I see this in Claude?

Claude turns this on for each Claude organization, so it might not be available to you yet. An Enterprise workspace owner may have turned the panel off, or your Claude admin may have blocked the Notion connector. You can always open the page in Notion.


### Is this the same as Claude agents in Notion?

No. This feature opens your Notion pages next to a ChatGPT or Claude chat. Claude agents in Notion is a different feature, where Claude works as an agent inside Notion. Learn more about using [Claude agents in Notion](https://www.notion.com/help/use-claude-agents-in-notion) →


### Which tasks should I do in Notion?

Open Notion to manage members, billing, connections, or sharing permissions, or to use Notion AI. To add a new link preview that needs a connected account, such as a private GitHub link, paste it in Notion. You can still paste a plain link in the panel.


### Can I edit offline?

Use the panel while you’re online. If you lose your connection, keep the panel open and copy any unsaved text before you reload.


### Who can help?

Contact [OpenAI support](https://help.openai.com/) <!-- -->or [Claude support](https://support.claude.com/) <!-- -->if you can’t find or install the <!-- -->connector or plugin<!-- -->, <!-- -->your app<!-- --> won’t open the panel, or the chat itself shows an error.

Contact Notion support through the help menu in Notion if a page won’t open or save, you see a Notion sign-in or permission error, or you need help with the workspace setting. Include the exact error, <!-- -->which app you used, <!-- -->and whether you can open the same page in Notion.
