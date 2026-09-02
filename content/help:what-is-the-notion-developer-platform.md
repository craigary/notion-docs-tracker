---
title: "What is the Notion Developer Platform?"
emoji: null
description: "Learn what’s included with the Notion Developer Platform and how to explore more."
url: "https://www.notion.com/help/what-is-the-notion-developer-platform"
key: "help:what-is-the-notion-developer-platform"
coverImage: null
category: "Explore developer tools"
categoryKey: "category:developer-platform"
---

Notion's Developer Platform is a set of building blocks for developers and agents to build on Notion. Use it to extend Custom Agents with custom logic, sync data from any system into your workspace, and bring external agents (like Claude, Codex, or ones your team built) into Notion.

The Developer Platform includes:

* **Notion CLI&#x20;****`ntn`****&#x20;(public beta):&#x20;**&#x54;he command line for building on Notion. Made for developers and agents.

* **Workers (public beta):&#x20;**&#x52;un custom code that connects Notion to other systems.

* **External Agents API (private beta):&#x20;**&#x42;ring any external agent into Notion.

* **Agent SDK (private alpha):&#x20;**&#x42;ring Notion Agents into any app.

* **Admin API**: Run organization admin work with code, on the Enterprise Plan.

You can turn on Developer Mode to find developer tools inside Notion. Use it to copy IDs, open connections and personal access tokens from your sidebar, and check Workers without switching to a separate website. Learn more about [developer mode →](https://www.notion.com/help/turn-on-developer-mode-to-use-developer-tools-in-notion)

View an overview of all capabilities, stay up-to-date, and learn more about Notion’s Developer Platform in the [developer documentation](https://developers.notion.com/guides/get-started/overview).

## What to know before you start

* Some features require a specific plan, admin controls, or early access.

* To get started, review the capabilities below and follow the related resources.

* If you’re looking for the deeper technical info, head to the [developer documentation](https://developers.notion.com/guides/get-started/overview).

* To open developer tools in Notion, turn on Developer Mode from `Settings`. [Developer Mode](https://www.notion.com/help/turn-on-developer-mode-to-use-developer-tools-in-notion) is available on all plans, but some tools, like [Workers](https://www.notion.com/help/run-custom-code-with-workers), require a Business or Enterprise plan.

## Developer Mode

Developer Mode is for people who build with Notion. When it’s on, you can:

* Use the developer bar to find the ID for the page, block, database, or data source you are viewing.

* Right-click blocks and databases to copy the IDs you need.

* Open connections, personal access tokens, and Workers from the developer section in your sidebar.

* View Workers, read logs, and turn off or delete Workers in Notion.

Developer Mode is separate in the browser and desktop app, and it’s not available on mobile. Learn more about [developer mode →](https://www.notion.com/help/turn-on-developer-mode-to-use-developer-tools-in-notion)

## Notion CLI ntn (public beta)

The [Notion CLI](https://www.notion.com/help/use-notion-from-your-terminal-with-notion-cli) helps you work with Notion from the command line. It’s useful if you want a faster, code-native way to interact with your workspace.

**Example:** <!-- -->Read and take action in Notion. Manage and deploy Workers

For more technical info, go to the [developer documentation.](https://developers.notion.com/guides/get-started/overview)

## Workers (public beta)

[Notion Workers](https://www.notion.com/help/run-custom-code-with-workers) let you run custom code that connects Notion to other systems. You can use them to power automations, database syncs, and custom agent tools.

**Example:&#x20;**&#x53;ync Salesforce accounts into a Notion database nightly.

For more technical info, go to the [developer documentation](https://developers.notion.com/guides/get-started/overview).

## Admin API

The admin API lets organization owners on the Enterprise Plan run admin work with code. In this release you can start workspace exports, create and release legal holds, and log managed users out of Notion.

Example: Create a legal hold automatically when your HR system flags an employee departure.

For more technical info, see [admin API reference →](https://developers.notion.com/reference/admin/intro)

## External Agents API (private beta)

The External Agents API lets you bring any agent into your Notion workspace, even the ones you've built yourself. External agents show up like a Custom Agent, so you can chat with them, assign them work, and track their progress alongside your team.

We’ve also partnered with Claude, Codex, Decagon and more so external agents work out of the box.

**Example:** Connect a support agent that can update tickets and also create Notion tasks.

This feature is currently in private beta. [Join the waitlist here →](https://dev.notion.so/351b35e6e67f80128a8cf585188cf668?pvs=21)

## Agent SDK (private alpha)

The Agents SDK lets external systems trigger Custom Agents programmatically.

**Example:** <!-- -->From your CRM, trigger a Notion agent to draft a deal summary using meeting notes and account plans from your workspace.

This feature is currently in private alpha. [Join the waitlist here →](https://dev.notion.so/357b35e6e67f8012bb0dd3f95c9be810?pvs=21)
