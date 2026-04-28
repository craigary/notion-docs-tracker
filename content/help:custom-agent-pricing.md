---
title: "Buy & track Notion credits for Custom Agents"
emoji: "💳"
description: "Everything you need to know about Notion credits for Custom Agents, including how pricing works, how to purchase and monitor usage, and what happens once billing begins 💳"
url: "https://www.notion.com/help/custom-agent-pricing"
key: "help:custom-agent-pricing"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/18cMIFOLXTfDVVWZgobE7C/3cfda622276bfd65931474aa47843373/credits.png"
category: "Plans & billing"
categoryKey: "category:plans-billing-and-payment"
---

## What are Notion credits?

Notion credits are a recurring add-on available on Business and Enterprise plans. Custom Agents use Notion credits each time they perform a task. In general, more complex tasks use more credits.

If you manage your billing in-product, admins can purchase and monitor credit usage from the [Notion credits dashboard](https://www.notion.com/help/custom-agent-pricing#track-usage-in-the-notion-credits-dashboard). Monthly Notion credits cost $10 per 1,000 credits, are billed alongside your subscription, and are flexible to adjust each month based on your needs. They’re shared across the workspace and reset monthly.

If you have an account team, they can help you plan your credit needs and explore additional credit options.

## When will Custom Agents start using credits?

Custom Agents begin using credits on May 4, 2026.

If your workspace doesn’t have enough credits, Custom Agents will pause automatically until an admin adds more. Learn when you can [purchase credits](https://www.notion.com/help/custom-agent-pricing#purchase-notion-credits) below.

**If you already have Custom Agents running from the beta:**

* Your workspace gets promotional credits, so your agents don’t automatically pause on May 4, 2026. This gives you time to purchase credits.

**When you purchase credits:**

* Your credit billing aligns to your monthly service date (not the date you purchase credits). Your monthly service date is tied to when your Notion subscription started.

  * For example, if your monthly service date is May 9, your credit billing starts on May 9.

* You can find your monthly service date in the Notion credits dashboard.

## Purchase Notion credits

Admins can purchase Notion credits starting with the first monthly service date on or after May 4, 2026.

* **Purchase in-product:&#x20;**&#x42;uy what you need starting in the hundreds and scaling into the thousands in the [Notion credits dashboard.](https://www.notion.com/help/custom-agent-pricing#track-usage-in-the-notion-credits-dashboard)

* **Purchase through an account team:&#x20;**&#x59;our account team can help you plan and explore additional credit options.

To purchase credits in the Notion credits dashboard:

* Go to `Settings `→ `Access & billing` → `Notion credits`.

* Select `Add Notion credits`.

* Choose an amount.

You can set how much you want to buy starting in hundreds and scaling into the thousands.

![HC: Notion credits dashboard](https://images.ctfassets.net/spoqsaf9291f/6VO6tMhJVcel0B9aHSnZRn/5a7e4b5b0f208cde35c390cf648bbcbd/%C3%A2____35_.png)

## How Notion credits work

Here’s what to know before you buy Notion credits:

* **Get the full credit amount right away:&#x20;**&#x57;hen you purchase monthly credits, the full amount is available in your workspace right away, regardless of where you are in your billing cycle. Credits are not prorated.

* **Credits reset monthly:&#x20;**&#x4F;n your add-on service date, your credits refill to the amount you purchased. Any unused credits don’t carry over to the next month.

* **Credits are shared across the workspace:&#x20;**&#x43;redits are pooled at the workspace level. Any Custom Agents in the workspace draw from the same balance, regardless of who created or ran it.

* **Adjust credits month to month:&#x20;**&#x41;dmins can adjust the purchased amount up or down each billing cycle to match actual usage.

* **Credits are billed with your subscription:&#x20;**&#x4E;otion credits are billed with your Business or Enterprise plan.

* **You can purchase anytime:&#x20;**&#x49;f you run out of credits before your monthly service date, you can purchase more mid-cycle to keep agents running without interruption.

## How Custom Agents use credits

Custom Agents use credits based on the work needed to complete a run. In general, agents use more credits when they read more content, take more actions, or run more often.

The amount of Notion credits used depends on these key factors:

* **How much the agent reads:&#x20;**&#x52;eading longer pages, searching more content, or scanning larger databases generally uses more credits.

* **How many steps it takes:&#x20;**&#x4D;ore tool calls and multi-step workflows use more credits.

* **How often it runs:&#x20;**&#x41;gents that run on a schedule or are triggered frequently will use more credits over time.

* **Model choice:&#x20;**&#x41;dvanced models use more credits because they handle more complex reasoning. For most cases, we recommend Auto, which lets Notion match to a model based on the task.

After each run, admins and agent creators can see exact usage in the [Notion credits dashboard](https://www.notion.com/help/custom-agent-pricing#track-usage-in-the-notion-credits-dashboard).

Here’s an example showing two Custom Agents with similar goals using different amounts of Notion credits. Even if two Custom Agents run the same number of times per month, the one that takes more complex steps per run will use more Notion credits:

| **Example**                    | **Agent Workflow**                                                                  | **Typical Steps**                                                                                                                                                                                                                                                                                | **Credit Impact**                                                                                               |
| ------------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **Simple Task Routing Agent**  | Routes incoming product feedback to the correct product area                        | • Reads a message from a Slack channel • Looks up the owner in a people database • Creates a task and assigns it to that owner                                                                                                                                                                   | Fewer credits per ru&#x6E;**&#x20;**&#x62;ecause it processes a small amount of info and takes only a few steps |
| **Complex Task Routing Agent** | Routes incoming product feedback, prioritizes follow-ups, and drafts an action plan | • Reads messages from a Slack channel • Searches across multiple databases for ownership and context • Evaluates urgency and impact • Creates a task with multiple fields like priority, category, and owner • Adds a sub-page with recommended next steps • Notifies the assigned team in Slack | More credits per run because it reads more, makes more decisions, and completes more steps each time it runs    |

## Estimate Notion credit usage & cost

Credit usage varies depending on what your Custom Agent does. The examples below are based on popular use cases. However, actual usage will depend on factors like how often your agent runs, how many steps it takes, and what model it uses.

Use the table below as a starting point to estimate costs:

* Find the closest use case.

* Multiply “costs per run” by how many runs you expect per month.

* For example, if your agent is like a “Status update agent,” and runs 60 times per month, that’s about $4.80–$10.80 per month.

|                         |                                                                                                                      |                  |                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------ |
| **Example**             | **Agent Workflow**                                                                                                   | **Cost per run** | **Number of runs per 1,000 credits ($10)** |
| **Q\&A agent**          | Answers common policy and how-to questions using your internal docs. Responds directly in a Slack channel.           | \~$0.03–$0.11    | \~90–333                                   |
| **Task routing agent**  | Reviews incoming requests, creates a task, and assigns it to the right person or team. Then, notifies the requester. | \~$0.05–$0.15    | \~65–190                                   |
| **Status update agent** | Pulls key updates from notes and projects, then drafts a weekly status update for review.                            | \~$0.08–$0.18    | \~57–133                                   |
| **Mail triage agent**   | Sorts incoming emails by urgency and topic. Drafts replies and turns action items into tasks when needed.            | \~$0.04–$0.10    | \~100–250                                  |
| **Daily brief agent**   | Creates a daily digest of priorities and action items. Uses context from your calendar and email.                    | \~$0.10–$0.30    | \~33-100                                   |

**

* Your actual Custom Agent provides the most accurate estimate of your credit needs. After each run, the credits dashboard shows exact usage.

* For best results:

  * Start with a small scope, then fine-tune your Custom Agent.

  * Review actual usage for 1–2 billing cycles to get a clearer view of your credit needs.

  * Adjust up or down as needed.

* These estimates are based on current usage data. As we improve agent efficiency, costs are expected to decrease over time. We'll update these benchmarks regularly.

* For more tips on managing credit usage, see [this Guide](https://www.notion.com/help/guides/admin-guide-to-getting-started-with-custom-agents) about getting started with Custom Agents.

## Track usage in the Notion credits dashboard

The Notion credits dashboard gives a clear view of how Custom Agents use Notion credits across the workspace. Use it to track usage, plan future credit needs, and manage ongoing spend.

To access the Notion credits dashboard, go to `Settings` → `Access & billing` → `Notion credits`.

Admins on Business and Enterprise plans can monitor agent usage in the dashboard. Agent creators can also see workspace-level credit pacing, and the agent table will show only the Custom Agents they’ve created.

![HC: Notion credits dashboard](https://images.ctfassets.net/spoqsaf9291f/6VO6tMhJVcel0B9aHSnZRn/5a7e4b5b0f208cde35c390cf648bbcbd/%C3%A2____35_.png)

In the dashboard, you can monitor:

* Credit usage in real time.

* Estimated usage through your monthly service date.

* Agent-level runs and credit usage to identify the agents driving spend so you can adjust them as needed.

If you manage multiple workspaces, you’ll have a Notion credits dashboard in your admin console where you can track credit pacing and Custom Agent usage across your organization.

## How to read the dashboard

### **1. Usage summary**

* At the top of the dashboard, you’ll see the total Notion credits used for the selected period and your credits-reset date. The selected period is based on your workspace’s billing cycle.

* This gives you a quick snapshot of your usage so far and when your monthly billing cycle ends.

### **2. Time period controls**

In the top-right corner, use the period selector (for example, `Current period`) and navigation arrows to review past periods.

### **3. Usage chart**

The usage chart shows credit usage over time:

* Current shows your actual credits used so far.

* Estimated projects where your usage is likely to land by the reset date if current patterns continue. The estimate is provided for informational purposes only and actual future usage may differ.

Use this to spot whether you’re pacing toward running out of credits before the reset.

### **4. Workspace usage cards**

Under **This month’s usage**, you’ll see adoption and activity metrics such as:

* Agent builders: How many members are creating Custom Agents.

* Agents in action: How many live Custom Agents are running during the period.

* Runs completed: How many tasks agents have completed across your workspace.

### **5. Agent-level breakdown**

Below the summary section, you’ll see a table breaking down usage by agent. This typically includes:

* Notion credits used

* Runs completed

* Status

* Created by

## What actions can an admin take to manage credit pacing?

Admins can monitor credit usage and control how Custom Agents run so spend stays predictable.

Admins have several ways to manage credit pacing:

* **Visibility:&#x20;**&#x54;rack usage and trends in the Notion credits dashboard.

* **Guardrails:&#x20;**&#x44;ecide who can create agents (and set limits).

* **Control:&#x20;**&#x50;ause or switch off agents anytime to stop usage while you investigate or make changes.

* **Optimize:&#x20;**&#x46;ine-tune agents to reduce extra steps and improve efficiency.

### 1. Monitor usage to know what’s driving spend

Use the Notion credits dashboard to track usage over time and see which agents are using the most credits. Notion also notifies admins when the workspace is approaching or has reached the credit limit, so admins have time to act.

### 2. Set guardrails to prevent surprises

Set credit limits from individual agents so they pause when they hit a threshold.

![HC: set credit limit](https://images.ctfassets.net/spoqsaf9291f/EhzKTguV9VcYMMpBVGcVA/290894bba36e2f96f313757e54ce97b8/Group_8__1_.png)

Control who can create agents (everyone, workspace owners only, or selected members).

![HC: Control who can create agents](https://images.ctfassets.net/spoqsaf9291f/2M692lzUmDcPECP8aymuZ1/f1dbe760ec11f9bc1ce045f8eace0f79/image.png)

### 3. Intervene quickly to stop usage

Pause or switch off a Custom Agent anytime to immediately stop credit usage while you review activity or adjust the agent.

![HC: switch off a custom agent](https://images.ctfassets.net/spoqsaf9291f/1fHvOe6FKw71oVHY2RjJuJ/f8cfd533f74675531084e9d30feed461/image__1_.png)

### 4. Optimize efficiency to reduce credits per run

Agent-level insights will be available soon. They’ll help you see total runs and performance across your workspace, spot high-usage agents, and reduce unnecessary runs or extra steps.

![HC: view agent insightss](https://images.ctfassets.net/spoqsaf9291f/4QclXZuMjYGpNkBwZV7c2i/c1cfe629e1ccd50aebeac8e8d54d831d/insights_chart_english__2___1_.png)

More resources

* Learn what [Custom Agents](https://www.notion.com/help/custom-agent) are and how they work.

* Learn how Custom Agents access information, how sharing works, and what admins can control: [Custom Agents sharing and permissions](https://www.notion.com/help/custom-agents-sharing-and-permissions).

* For more best practices on optimizing Notion credits and efficiency for Custom Agents, see [this Guide.](https://www.notion.com/help/guides/admin-guide-to-getting-started-with-custom-agents)


## FAQs

### What happens if we run out of Notion credits?

If your workspace doesn’t have enough Notion credits, Custom Agents will pause automatically until credits reset or an admin adds more credits.


### How do admins get notified before running out of Notion credits?

Admins receive in-app (and email) notifications when your workspace reaches 80% and 100% of its Notion credit usage, so you have time to adjust before agents pause.


### How do I buy more Notion credits?

Admins can purchase Notion credits either in-product or through their account team. Learn more about how to [purchase Notion credits](https://www.notion.com/help/custom-agent-pricing#purchase-notion-credits).


### How do mid-month Notion credit changes work?

If you increase your credits in the middle of your monthly service period, the additional credits are available immediately for the current service period. You’ll be billed for the higher recurring credit amount at the start of your next monthly service date.

If you decrease your credits in the middle of your monthly service period, the lower amount takes effect at the start of the next service period. From then on, you’ll be billed for the lower recurring credit amount each month.


### I work with an account team to purchase Notion credits. What happens if I upgrade, expand, or renew my Business or Enterprise plan, which includes Annual Notion Credits, in the middle of my billing interval?

You'll get a prorated credit for the unused prepaid Annual Notion Credits equal to the lesser of:

* The dollar amount of Annual Notion Credits remaining unused, or

* The Annual Notion Credit fees prorated for the time remaining in the subscription term

This credit applies when a new Business or Enterprise order form replaces your current one before the end of its subscription term. Notion Credits have no cash value. Any credit applies toward the new plan.


### Does Autofill use Notion credits?

Autofill has two options: Basic and Custom Agent.

* **Basic Autofill&#x20;**&#x69;s included on Business and Enterprise plans, and does not use Notion credits.

* **Custom Agent Autofill&#x20;**&#x75;ses Notion credits because it runs with Custom Agent capabilities (like using richer context and more advanced reasoning).
