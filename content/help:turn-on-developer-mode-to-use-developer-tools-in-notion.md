---
title: "Turn on Developer Mode to use developer tools in Notion"
emoji: null
description: "Learn how to turn on Developer Mode and open developer tools from your sidebar."
url: "https://www.notion.com/help/turn-on-developer-mode-to-use-developer-tools-in-notion"
key: "help:turn-on-developer-mode-to-use-developer-tools-in-notion"
coverImage: null
category: "Explore developer tools"
categoryKey: "category:developer-platform"
---

Developer Mode adds extra tools for people who build with Notion. When it’s on, you can copy IDs, open connections and personal access tokens, and check [Workers](https://www.notion.com/help/run-custom-code-with-workers) without leaving Notion.

You can turn on Developer Mode on any plan. Some developer tools, like [Workers](https://www.notion.com/help/run-custom-code-with-workers), are only available on Business and Enterprise plans.

## Turn on Developer Mode

To turn on Developer Mode:

1. Open `Settings`.

2. Search for or select `Developer Mode`.

3. Turn on `Developer Mode`.

After you turn it on, the developer section appears in your sidebar. You’ll also see developer options when you right-click some blocks and databases.

## Turn it on separately in each app

Developer Mode is a local setting. This means the browser and desktop app each have their own Developer Mode setting.

* If you turn it on in your browser, it won’t turn on in the desktop app.

* If you turn it on in the desktop app, it won’t turn on in your browser.

* It stays on when you switch workspaces in the same browser or app session.

Developer Mode is not available on mobile.

## Use the developer bar to find IDs

When Developer Mode is on, a developer bar appears at the bottom of Notion. It shows the ID for the page, block, database, or data source you’re viewing.

An ID is a unique string that developer tools use to point to the right Notion content. The developer bar helps you find the right ID without digging through a URL.

## Copy IDs from blocks & databases

Developer Mode adds right-click options so you can copy IDs in a few clicks.

To copy an ID:

1. Right-click a block or database.

2. Open the `Developer` section.

3. Select the ID you want to copy.

A data source is the data inside a database. Most people only need a data source ID when they’re working with the API or developer docs.

## Open developer tools from the sidebar

When Developer Mode is on, the developer section in your sidebar opens Notion’s developer tools. You don’t need to switch to a separate website for common developer tasks.

From the developer section, you can open:

* C<!-- -->onnections

* P<!-- -->ersonal access tokens

* [Workers](https://www.notion.com/help/run-custom-code-with-workers)

## Check Workers in Notion

If your workspace can use [Workers](https://www.notion.com/help/run-custom-code-with-workers), you can open Workers from the developer section in your sidebar.

In Notion, you can:

* See all Workers in one list.

* Open a Worker and view Overview, Logs, Environment Variables, and Settings.

* Read Worker logs.

* Turn off or delete a Worker.

Use Notion for quick checks and basic actions. To change a Worker’s code or setup, use the [Notion CLI](https://www.notion.com/help/use-notion-from-your-terminal-with-notion-cli) or your team’s coding tool.

## Who can use Developer Mode

* Developer Mode is available on all plans.

* [Workers](https://www.notion.com/help/run-custom-code-with-workers) are available on Business and Enterprise plans.

* If a workspace owner restricts who can create connections, Workers, or personal access tokens, those options won’t be available to everyone.

* Developer Mode is not available on mobile.


## FAQs

### Why is Developer Mode on in my browser but off in my desktop app?

This is expected. Developer Mode is separate in the browser and desktop app, so turn it on in each place where you want to use it.


### Where did the developer portal go?

It’s now available in Notion. Turn on Developer Mode, then open the developer section in your sidebar.


### Do old developer portal links still work?

Yes. Old links redirect to the developer tools in Notion.


### Can I find a block ID without opening the page URL?

Yes. Turn on Developer Mode, right-click the block, then copy its block ID from the developer section.


### Can I manage Workers without the CLI?

Partly. You can view [Workers](https://www.notion.com/help/run-custom-code-with-workers), read logs, and turn off or delete Workers in Notion. To deploy a Worker or change its code or setup, use the [Notion CLI](https://www.notion.com/help/use-notion-from-your-terminal-with-notion-cli) or your team’s coding tool.
