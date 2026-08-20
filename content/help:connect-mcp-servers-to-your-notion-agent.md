---
title: "Connect MCP servers to your Notion Agent"
emoji: null
description: "Connect apps like GitHub and Figma to your Notion Agent so it can find info and get work done across your tools."
url: "https://www.notion.com/help/connect-mcp-servers-to-your-notion-agent"
key: "help:connect-mcp-servers-to-your-notion-agent"
coverImage: null
category: "Notion AI"
categoryKey: "category:notion-ai"
---

Your Notion Agent can connect to other apps you use through MCP (Model Context Protocol) servers. MCP is a common way for AI tools to connect to other apps. If an app has an MCP server, you can connect it to your Notion Agent.

Once you connect an MCP server, your Notion Agent can look up info and take actions there for you right from chat.

Looking to connect a Custom Agent to external apps? Learn more about [MCP connections for Custom Agents](https://www.notion.com/help/mcp-connections-for-custom-agents) →

## Before you start

* You need to be on a Business or Enterprise plan.

* Your workspace admin may limit which MCP servers you can connect. If you don't see an app you need, ask your admin.

* You can connect MCP servers on web and desktop. This isn't available on mobile yet.

## Add an MCP server

There are three ways to connect an MCP server. All of them open the same connection window.

* **Ask your Agent:**

  * In chat, ask your Agent to connect an app.

  * For example, "Connect me to GitHub."

* **From your chat sources:**

  1. Select `All sources` in a chat.

  2. Select `MCP servers` → `Add MCP server`.

* **From settings:**

  1. Go to `Settings` → `Connections`.

  2. Open the `Discover` tab.

  3. Find the app you want, and select `Add to Notion AI`.

Want to connect an MCP server that isn't listed? If your admin allows it, you'll see an `Add Custom MCP` button in `Settings` → `Connections` → `Discover`. Select it and enter the details from the app's MCP documentation.

## Sign in to the MCP connection

After you choose an MCP connection, you’ll need to authenticate so the app knows who you are. You can change permissions for a specific MCP connection to run supported tools automatically or require approval before running.

A few things to know about your connection:

* The MCP connection belongs to you. Your Notion Agent uses your account in the MCP server, so it has the same permissions you do.

* Teammates who want to use the same MCP server will need to connect it themselves, with their own accounts.

Once you've authenticated your account, the MCP connection will appear under `All sources` → `MCP servers` in your chat.

## Use connected apps in chat

Once an MCP server is connected, ask your Notion Agent for what you need.

* **Being specific helps Notion Agent find things faster.** If your Agent doesn't use the MCP connection you expected, mention the MCP connection by name. For example, "Check FigJam for the latest mockups."

* **Update settings so Notion Agent asks you permission&#x20;**&#x62;efore it creates or updates anything in a connected app.

Try these prompts:

* "Find the latest diagram designs in FigJam."

* "Create a GitHub issue for the bug we just discussed."

## Manage or disconnect an MCP server

* To see what's connected, select `All sources` in a chat, then `MCP servers`.

* To disconnect an app, go to `Settings` → `Connections`, find the app, and disconnect it. Notion Agent will stop using that MCP connection right away. You can reconnect at any time.

## For workspace admins

Admins decide how MCP servers work in their workspace. As an admin, you can:

* Choose which MCP servers members can connect to from an approved list.

* Choose whether members can add custom MCP servers. The `Add Custom MCP` button only appears when you allow this.

* See which MCP servers people have connected in `Settings` → `Connections`.

* Remove someone's connection. This stops their Notion Agent from using that MCP connection.

## Troubleshooting

* **Your Notion Agent isn't using a connected MCP server.&#x20;**&#x4D;ention the MCP connection by name in your request and add a little more detail about what you're looking for.

* **An MCP connection is slow or shows an error.** Your Notion Agent will let you know and keep going with the rest of your request. Try again in a bit, or disconnect and reconnect the MCP connection.

* **A big request times out.** If an MCP connection is running a long search or pulling lots of data, try narrowing your request into smaller pieces.

* **You've connected a lot of MCP servers.** With around 10 or more MCP servers connected, responses can slow down. Naming the MCP connection you want to use helps Notion Agent respond faster.

* **You can't find&#x20;**`Add Custom MCP.` This button only appears for admins, and only when the workspace allows custom servers. Ask your admin for help.

* **You don't see MCP servers at all.** This feature is available on Business and Enterprise plans. Check your workspace's plan with your admin.


## FAQs

### How is this different from Notion AI connectors?

[Notion AI Connectors](https://www.notion.com/help/notion-ai-connectors), like Slack or Google Drive, are built by Notion and are great for searching content from those apps within your Notion workspace.

MCP servers are built by the app makers themselves, and they let your Notion Agent look things up and take actions in the app.


### Can my Custom Agents use the apps I connected here?

No. [Custom Agents](https://www.notion.com/help/custom-agents) have their own connections. To [use an MCP connection with a Custom Agent](https://www.notion.com/help/mcp-connections-for-custom-agents), connect it in that agent's settings and sign in again.


### Does my whole team get access when I connect an MCP server?

No. Each person connects an MCP server with their own account, and each person's Notion Agent can only see what the person can see.
