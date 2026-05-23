---
title: "Understand pricing for Workers (beta)"
emoji: "💸"
description: "Learn how Workers use Notion credits, what affects Worker credit usage, how to plan costs, and where to view usage 💸"
url: "https://www.notion.com/help/understand-pricing-for-workers"
key: "help:understand-pricing-for-workers"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/2QZcOLJjPJCxL0KCt4xL7d/8387cc66cf47c3c1e434caf7d3fc250a/Group_193.png"
category: "Explore developer tools"
categoryKey: "category:developer-platform"
---

[Workers](https://www.notion.com/help/run-custom-code-with-workers) run code in the background to automate tasks in Notion. They’re best for tasks that don’t require AI reasoning, such as syncing data, writing updates, and handling events. Workers are often paired with [Custom Agents](https://www.notion.com/help/custom-agents), where the agent decides what to do and Workers reliably execute specific steps.

During the beta, Workers are free to try on Business and Enterprise plans (including Business trials). Starting on August 11, 2026, they’ll require Notion credits. Workspace admins can purchase Notion credits as an add-on to Business and Enterprise plans.

The free beta period applies only to Workers. Custom Agent actions will consume credits according to your workspace’s plan and credit settings.

## Notion credits for Workers

Workers use Notion credits, which are counted in runs. Each run represents one unit of work completed on your behalf. The number of credits per run can vary depending on how much work the Worker does, like how long it runs or how much processing it needs. In general, the more work involved, the more credits used.

Workers can run in a few different ways (we’ll keep expanding this list):

* **Syncs (scheduled):&#x20;**&#x45;ach time a sync runs counts as one run.

* **Tool calls (agent-triggered):&#x20;**&#x45;ach time a Custom Agent triggers a Worker tool call counts as one run.

* **Webhooks (event-driven):&#x20;**&#x45;ach event a Worker handles counts as one run.

## How much is one Worker run?

Workers typically cost $0.0023 per run, which works out to \~4,348 runs per 1,000 monthly Notion credits ($10). They’re cheaper compared to [Custom Agents](https://www.notion.com/help/custom-agents) because pricing is based on how much work they do when they run and they don’t require AI decision-making.

The tables below break down cost benchmarks for each type of Worker action. Use this as a starting point to understand costs. Your actual usage may vary, and is the best way to size credits.

## Examples: scheduled sync credit usage

The examples below show types of sync usage. Your actual usage depends on how often your syncs run and how much a Worker does for each run.

Syncing more data or handling several updates will cost more. If you have multiple syncs, multiple Workers, or Workers that run in response to many events, total usage may be higher.

**Example 1:** A nightly sync pulls closed Jira tickets into a Notion engineering log for weekly review.

* **Sync frequency:&#x20;**&#x44;aily (Low)

* **Runs per day: 1**

* **Cost per month:** $0.07

**Example 2:&#x20;**&#x41;n hourly Zendesk sync refreshes open tickets and SLA risk in a Support Ops dashboard in Notion, so team leads can rebalance coverage throughout the day.

* **Sync frequency:&#x20;**&#x48;ourly (Medium)

* **Runs per day:&#x20;**&#x32;4

* **Cost per month:** $1.66

**Example 3:&#x20;**&#x41; pipeline sync keeps a Notion sales tracker updated with Salesforce opportunity stages throughout the business day.

* **Sync frequency:** Every 15 minutes (High)

* **Runs per day:** 96

* **Cost per month:** $6.62

**Example of estimating monthly credits**

You sync Salesforce opportunities into a Notion database every 15 minutes and it costs <!-- -->$0.0023<!-- --> per run.

* **Worker runs per month:&#x20;**&#x32;4 hours × 4 runs/hour x 30 days = 2880 runs/month

* **Monthly cost:&#x20;**&#x32;880 × $0.0023 = $6.62/month

* **Monthly credits needed:&#x20;**$6.62/$0.01 per credit = 662 credits/month

## Examples: Tool calls (agent-triggered)

Workers can also power custom tools that Custom Agents use. For example, a Custom Agent might call a Worker to fetch data from another system, run a calculation, or update records.

Tool-call usage depends on how often an agent calls a Worker. Each tool call counts as its own Worker run (so one agent run can generate multiple Worker runs).

**Example 1:&#x20;**&#x41; daily Bug Tracker agent reviews open Jira issues. Each run triggers the worker to fetch issue status, check for blockers, and write a summary to a Notion project page.

* **Volume of tool calls:** Scheduled (low)

* **Worker runs:** 3 per Custom Agent run

* **Custom Agent runs:** 30 per month

* **Cost per month:&#x20;**$0.21

**Example 2:&#x20;**&#x41; RevOps agent runs when a deal moves stages in Salesforce. Each run triggers the worker to validate required fields, call Clearbit for enrichment, and write the record back to a Notion pipeline tracker.

* **Volume of tool calls:&#x20;**&#x41;ctivity-triggered (Medium)

* **Worker runs:** 4 per Custom Agent run

* **Custom Agent runs:** 3,000 per month

* **Cost per month:** $27.60

**Example 3:** A Support Eng agent runs on every inbound Zendesk ticket. Each run triggers the worker to fetch the ticket, pull Salesforce account context, apply routing rules from Notion, and post to the right Slack channel.

* **Volume of tool calls:&#x20;**&#x43;ontinuous (High)

* **Worker runs:&#x20;**&#x35; per Custom Agent run

* **Custom Agent runs:** 9,000 per month

* **Cost per month:&#x20;**$103.50

**Example of estimating monthly credits**

A Custom Agent makes 4 tool calls per run and runs 50 times per day. Each tool call execution costs <!-- -->$0.0023.

* **Worker runs per month:** 4 x 50 x 30 = 6000 runs/month

* **Monthly cost:** <!-- -->6000 x $0.0023 = $13.80/month

* **Monthly credits needed:&#x20;**$13.80/$0.01 per credit = 1380 credits/month

## Examples: Webhooks (alpha)

The examples below show typical webhook volumes and what they might cost. Your actual usage depends on how many events your tools send and how many webhook triggers you’ve set up. Each incoming event that you handle counts as one Worker run, so total cost scales with your event volume.

**Example 1:** A Stripe webhook fires on subscription creates and cancels. The worker updates a Notion billing tracker with event details.

* **Volume of incoming events:&#x20;**&#x4C;ow

* **Events per day:** 20

* **Cost per month:** $1.38

**Example 2:** A GitHub webhook fires on every PR merge across 10 repos. The worker logs each merge to a Notion changelog and notifies the relevant Slack channel.

* **Volume of incoming events:&#x20;**&#x4D;edium

* **Events per day:** 200

* **Cost per month:** $13.80

**Example 3:** A Zendesk webhook fires on every ticket create and status change. The worker enriches each event with Salesforce account data and updates a Notion support dashboard.

* **Volume of incoming events:** High

* **Events per day:** 5,000

* **Cost per month:** $345.00

**Estimating monthly credits**

A Stripe webhook triggers on subscription creates and cancels, and you receive 300 events a day. <!-- -->Each run costs $0.0023.

* **Worker runs per month:&#x20;**&#x33;00 × 30 = 9000 runs/month

* **Monthly cost:&#x20;**&#x36;,000 × $0.0023 = $20.70/month

* **Monthly credits needed:&#x20;**$20.70/$0.01 per credit = 2,070 credits/month

## Track usage in the Notion CLI

During the free beta, you can track Worker credit usage over the last 30 days directly in the [CLI](https://www.notion.com/help/use-notion-from-your-terminal-with-notion-cli). Worker usage will also appear in the Notion credits dashboard by the end of May, allowing admins to track credit usage of their Workers and Custom Agents in one place.

### **View usage for a specific Worker (detailed)**

Shows a detailed breakdown for one Worker’s usage over the last 30 days. This includes estimated preview credits, execution count, and runtime/network metrics that help explain what’s driving usage.

![View usage for a Worker](https://images.ctfassets.net/spoqsaf9291f/5Glwtx8EkWkEzzv5hkbzNj/59c2c5d4c75e5943213279f063079ae4/Screenshot_2026-05-18_at_5.10.45%C3%A2__PM.png)

### **View usage across all Workers (summary)**

Shows a summary of all Workers, including estimated preview credits used and executions over the last 30 days.

![View usage across workers](https://images.ctfassets.net/spoqsaf9291f/VtEG4wbVplyTfiqbNKksi/d8c887fe9f8c6d4f37f8d847c60fb3b4/Screenshot_2026-05-18_at_5.26.31%C3%A2__PM.png)

## Admin controls for Workers

You can manage Workers across your workspace by going to `Settings`, and selecting the Workers tab.

![Workers tab](https://images.ctfassets.net/spoqsaf9291f/495geH0Kuqzpi2kFWOYy7P/2d9ffa5096daaf53bc37b4bc1ff637aa/Screenshot_2026-05-13_at_5.24.15%C3%A2__PM.png)

From here, you can:

* Switch Workers on or off for your workspace. By default, Workers are turned off.

* Control who can use Workers, including specific people or user groups.

![Who can use Workers](https://images.ctfassets.net/spoqsaf9291f/1wC7CX9vlMXtV3RYIvYTf3/e54a3b13564f12f2e83b3eec497e2e0c/Screenshot_2026-05-13_at_5.25.28%C3%A2__PM.png)

* Track and manage individual Workers.

  * View all Workers in your workspace, including their owner and status.

  * Disable or delete a Worker at any time.

  * Pause all Workers.

![Manage Workers](https://images.ctfassets.net/spoqsaf9291f/3d8bOb0sclzPJNn7Qm2Nsq/fa658aa8b9e5d8dd0dd049fffa997334/Screenshot_2026-05-13_at_5.26.25%C3%A2__PM.png)

## Sizing credit needs for Workers

Workers are free during beta, so you can use this time to run real workflows and estimate how many credits you’ll need once credits apply.

## How to optimize Worker credit usage

Try these best practices to keep Worker usage predictable:

* **Start with a slow schedule.&#x20;**&#x46;or syncs, start with hourly or daily runs if real-time updates aren’t required.

* **Increase frequency only when needed.** Move to every 15 minutes, 5 minutes, or every minute only if the workflow requires it.

* **Batch work when possible.&#x20;**&#x49;nstead of running a Worker for every small change, group updates together.

* **Sync only what you need.&#x20;**&#x53;ync only the databases, records, or fields that are needed.

* **Avoid unnecessary retries.** If a Worker fails, make sure it doesn’t retry too frequently without resolving the underlying issue.

* **Review usage regularly.&#x20;**&#x43;heck CLI usage during setup and after major workflow changes.


## FAQs

### What are micro credits?

Micro credits are smaller units of Notion credit consumption. Workers use micro credits because they run predictable, repeatable code. Custom Agents usually use more credits because they rely on AI to think through decisions and next steps.


### Do Workers use the same Notion credits as Custom Agents?

Yes. Workers are part of the broader Notion credits system. However, Worker actions are designed to consume smaller amounts of credits than Custom Agent actions.


### Why does sync frequency affect cost?

Each scheduled sync run counts as a Worker run. A sync that runs every minute runs 1,440 times per day, while a sync that runs daily runs once per day. More runs mean more credit usage.


### Where can I see Worker credit usage?

You can see Worker credit usage in the [CLI](https://www.notion.com/help/www.notion.com/help/use-notion-from-your-terminal-with-notion-cli). Later, admins will be able to view Worker usage in the Notion credits dashboard.
