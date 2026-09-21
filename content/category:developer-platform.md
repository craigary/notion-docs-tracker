---
title: "Explore developer tools"
description: null
url: "https://www.notion.com/help/category/developer-platform"
key: "category:developer-platform"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/7JgyCPsBNZ2eHCGc51sf6p/6f840b2f9238282c3aea8d8379eb66ae/Group_197.png"
---

1 help:what-is-the-notion-developer-platform
2 help:run-custom-code-with-workers
3 help:use-notion-from-your-terminal-with-notion-cli
4 help:understand-pricing-for-workers
5 help:share-a-worker
6 help:turn-on-developer-mode-to-use-developer-tools-in-notion

## Video

https://www.youtube.com/watch?v=k-6ldiWIDsg

## FAQ

### What’s the difference between Workers and Custom Agents?

Workers and [Custom Agents](https://www.notion.com/help/custom-agents) solve different problems, but they can work together.

* **Workers: **Run custom code on Notion’s infrastructure. Developers use Workers for things like automations, scheduled syncs, and custom integrations.

* **Custom Agents: **Handle repetitive work for your team automatically. You set triggers, and they run in the background with your workspace as context.

In some setups, a Worker can power a unique tool that a Custom Agent can use. For example, a Worker might fetch data from another system, and the agent can use that data to respond or take action.

### Are Workers the same thing as Automations?

Not exactly. Automations are built into Notion and are designed for anyone to set up. Workers are for developers who want to run custom code. If you don’t need code, start with Automations.

### Do Workers run on my servers?

No. Workers run on Notion’s servers, so you don’t need to set up or manage any infrastructure.

### Do I need the CLI to use Workers?

Not always. You can view Workers, read logs, turn Workers off, and delete Workers in Notion with [Developer Mode](https://www.notion.com/help/turn-on-developer-mode-to-use-developer-tools-in-notion). You’ll typically need the [CLI](https://www.notion.com/help/run-custom-code-with-workers) or your team’s coding tool to set up, deploy, or change a Worker.