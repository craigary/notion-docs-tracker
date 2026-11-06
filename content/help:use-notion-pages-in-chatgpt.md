---
title: "Use Notion pages in ChatGPT"
emoji: null
description: "Learn how to open, create, and edit Notion pages alongside your ChatGPT conversation."
url: "https://www.notion.com/help/use-notion-pages-in-chatgpt"
key: "help:use-notion-pages-in-chatgpt"
coverImage: null
category: "Notion AI"
categoryKey: "category:notion-ai"
---

Open or create a Notion page beside your ChatGPT conversation. You can edit the page yourself and see changes as ChatGPT makes them.

## Before you start

Here's what you need:

* **In ChatGPT:&#x20;**&#x41;n account that can add the Notion plugin. If your company manages ChatGPT, an admin may control whether the Notion plugin is allowed. Learn more about [OpenAI's plugin controls](https://learn.chatgpt.com/docs/enterprise/apps-and-connectors) →

* **In Notion:&#x20;**&#x59;ou can use the panel on any Notion plan. It's on by default. You can open pages you have access to and edit pages where you have edit access.

* **If your workspace requires single sign-on (SSO):&#x20;**&#x53;ign in to Notion with SSO first.

On the Enterprise plan, a workspace owner can turn off the panel for everyone. Learn more about [workspace admin controls below](https://www.notion.com/help/use-notion-pages-in-chatgpt#workspace-admin-controls-\(enterprise\)).

## Connect Notion to ChatGPT

1. In ChatGPT, open the [Notion plugin in ChatGPT](https://chatgpt.com/plugins/notion) and install it if needed.

2. When asked, sign in to Notion and pick the workspace you want to use.

3. Review what you're sharing, then allow the connection.

The panel uses the same connection as [Notion MCP](https://www.notion.com/help/notion-mcp).

**Already connected?**

Start a new chat. The panel uses the Notion account and workspace you connected.

## Open a Notion page in ChatGPT

There are three ways to open a page:

* **Ask in chat.&#x20;**&#x54;ry “Open my project planning page in Notion” or “Turn these notes into a Notion page.” The page opens beside your chat. If ChatGPT sends a link instead, ask it to open the page in the Notion panel.

* **Use the sidebar.&#x20;**&#x4F;pen Notion from the ChatGPT sidebar to see your workspace. Search by title, paste a page link, or pick a recent or favorite page.

* **Start a new page.&#x20;**&#x53;elect `New page`. In an empty workspace, you can also start a blank page or database, or choose a template.

## Edit the page with ChatGPT

* **Make a change.&#x20;**&#x54;ype directly on the page, or ask ChatGPT to edit it. Try “Turn these action items into a Notion database with an owner and due date for each task.”

* **Ask for feedback.&#x20;**&#x54;ry “Leave a comment where the plan needs more detail.” On Notion Business and Enterprise, you can also ask ChatGPT to suggest wording. The text stays the same until you or a teammate with edit access accepts the suggestion.

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

* **Where it works.&#x20;**&#x55;se the panel in ChatGPT on the web or in the desktop app.

* **Your usual Notion permissions still apply.&#x20;**&#x43;hatGPT can find and open pages you have access to in the connected workspace.

* **The panel doesn't save unsaved edits on your device.&#x20;**&#x49;f your connection drops, copy any unsaved text before you reload. You can't edit offline.

## Workspace admin controls (Enterprise)

On the Enterprise plan, a workspace owner can turn off the panel for everyone. The panel is on by default, and on other plans it stays on.

1. In Notion, go to `Settings` → `Notion MCP` → `Manage workspace clients`.

2. Turn off `Open Notion pages in ChatGPT`.

Notion checks this setting the next time an open panel loads or saves. After it's off, members can still use Notion in ChatGPT through chat, as long as ChatGPT is allowed to connect.

If your workspace only allows approved AI apps, ChatGPT needs to be on the approved list for the panel to work. Learn more about connecting [AI tools with Notion MCP](https://www.notion.com/help/notion-mcp) →

## Troubleshooting

* **The panel won't open.&#x20;**&#x53;tart a new chat and ask ChatGPT to open a specific page in the Notion panel. Still stuck? Check that the plugin is connected and your workspace allows it. Then disconnect and reconnect Notion in ChatGPT and try a new chat.

* **The wrong page opens, or a page is missing.&#x20;**&#x4F;pen the page in Notion and check that you can see it in the workspace you connected. If it's in that workspace, paste the page link into the panel's search. If it's in another workspace, connect that workspace or work on the page in Notion.

* **Notion can't sign you in.&#x20;**&#x49;f the message mentions SAML single sign-on, sign in to Notion with SSO, then close and reopen the panel. Otherwise, close and reopen the panel, or select `Open in Notion`.

* **An admin turned off the panel.&#x20;**&#x53;elect `Open in Notion` to keep working. Ask your workspace owner if you need it turned back on.

* **The page is blocked or slow to load.&#x20;**&#x43;lose and reopen the panel. If it still won't load, open the page in Notion.


## FAQs

### Which pages can ChatGPT see?

The plugin uses your Notion MCP connection. ChatGPT can find other pages you can access in the connected workspace, even if they aren’t open in the panel. Your usual page permissions apply.


### Which tasks should I do in Notion?

Open Notion to manage members, billing, connections, or sharing permissions, or to use Notion AI. To add a new link preview that needs a connected account, such as a private GitHub link, paste it in Notion. You can still paste a plain link in the panel.


### Can I edit offline?

Use the panel while you’re online. If you lose your connection, keep the panel open and copy any unsaved text before you reload.


### Who can help?

Contact [OpenAI support](https://help.openai.com/) if you can’t find or install the plugin, ChatGPT won’t open the panel, or the chat itself shows an error.

Contact Notion support through the help menu in Notion if a page won’t open or save, you see a Notion sign-in or permission error, or you need help with the workspace setting. Include the exact error and whether you can open the same page in Notion.
