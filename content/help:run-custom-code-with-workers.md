---
title: "Run custom code with Workers (beta)"
emoji: "🔨"
description: "Learn what Workers are and what they’re used for 🔨"
url: "https://www.notion.com/help/run-custom-code-with-workers"
key: "help:run-custom-code-with-workers"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/10ig80bwIGSuLvk7s8BvBb/0f8100167146d7da1696ae18684aeb99/Group_195.png"
category: "Developer Platform"
categoryKey: "category:developer-platform"
---

Notion Workers are part of our [Developer Platform](https://www.notion.com/help/what-is-the-notion-developer-platform). They run custom code on Notion's infrastructure to power:

* Database sync

* Tools for Custom Agents

* Webhook triggers

For technical setup, see the [developer documentation](https://developers.notion.com/guides/get-started/overview).

For more info about pricing, see [this article](https://www.notion.com/help/understand-pricing-for-workers).

### What to know before you start

* Workers are available on Business and Enterprise plans.

* A workspace owner needs to enable Workers for the workspace.

* If you are trying to deploy or manage a Worker, you’ll typically follow our [developer documentation](https://developers.notion.com/guides/get-started/overview) and use the [Notion CLI.](https://www.notion.com/help/use-notion-from-your-terminal-with-notion-cli)

### Pricing & plan availability for Workers

To learn more about pricing for Workers, see [this article](https://www.notion.com/help/understand-pricing-for-workers).

### Database sync

Database sync (powered by Workers) brings information from outside tools into a Notion database and keeps it up to date automatically. Once it's set up, the synced database stays current on its own, so your team and your agents always see the latest data without anyone copying or pasting between tools.

A few common examples:

* Sync Zendesk support tickets into a triage database.

* Sync Salesforce accounts into a pipeline tracker.

* Sync data from an internal tool or database.

Once it's live, the synced database behaves like any other database in Notion. Access is governed by your standard Notion sharing permissions.

### Agent tools

Agent tools (powered by Workers) extend what your Custom Agents can do beyond Notion's built-in actions and MCP, with capabilities tailored to how your team works.

A few common examples:

* Querying a data warehouse.

* Generating assets from a Notion doc.

* Taking action in another app that isn’t natively supported or available via MCP.

### Webhook triggers

Webhook triggers (powered by Workers) let an event in another tool kick off a workflow in Notion or any other connected system.⁠⁠⁠⁠

A few common examples:

* Closing a task when a pull request merges.

* Updating a CRM record when a subscription. changes

* Creating an onboarding doc when an offer is signed.

Once it's set up, the workflow runs automatically every time the event happens, so your team doesn't have to manually move information between tools.

### If something isn’t working

Try these steps in order:

1. **Make sure your workspace is eligible, and that a workspace owner has turned Workers on.&#x20;**&#x57;orkers are available on Business and Enterprise plans, and require enablement from a workspace admin.

2. **Confirm you’re using the intended setup path.&#x20;**&#x46;or most setups, you’ll use [Notion CLI](https://www.notion.com/help/use-notion-from-your-terminal-with-notion-cli) plus the [developer docs](https://developers.notion.com/guides/get-started/overview).

3. **If your Worker deploy fails, check permissions next.&#x20;**&#x59;ou may not have access to deploy to that workspace, even if you can view pages in it.

4. **If your Worker runs but doesn’t change anything in Notion, test the action manually first.&#x20;**&#x49;f you can’t make the same change in Notion, it’s usually a permission or workspace-setting issue.

5. **If cost looks higher than expected, lower the run frequency.&#x20;**&#x57;orkers that run more often will cost more. Start with a slower schedule, then increase once you’re confident it’s working.

6. **Still stuck?&#x20;**&#x46;ollow the [developer documentation](https://developers.notion.com/guides/get-started/overview) for the specific error message. They’ll have the most accurate fix.


## FAQs

### What’s the difference between Workers and Custom Agents?

Workers and [Custom Agents](https://www.notion.com/help/custom-agents) solve different problems, but they can work together.

* **Workers:&#x20;**&#x52;un custom code on Notion’s infrastructure. Developers use Workers for things like automations, scheduled syncs, and custom integrations.

* **Custom Agents:&#x20;**&#x48;andle repetitive work for your team automatically. You set triggers, and they run in the background with your workspace as context.

In some setups, a Worker can power a unique tool that a Custom Agent can use. For example, a Worker might fetch data from another system, and the agent can use that data to respond or take action.


### Are Workers the same thing as Automations?

Not exactly. Automations are built into Notion and are designed for anyone to set up. Workers are for developers who want to run custom code. If you don’t need code, start with Automations.


### Do Workers run on my servers?

No. Workers run on Notion’s servers, so you don’t need to set up or manage any infrastructure.


### Do I need the CLI to use Workers?

Not necessarily to *use* Workers, but you’ll typically need the CLI to set up and deploy them. Developers can follow the developer docs to get started.
