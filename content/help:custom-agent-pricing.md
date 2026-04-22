---
title: "Custom Agent pricing"
emoji: "💳"
description: "Everything you need to know about Notion credits for Custom Agents, including how pricing works, how to monitor usage, and what happens once billing begins 💳"
url: "https://www.notion.com/help/custom-agent-pricing"
key: "help:custom-agent-pricing"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/18cMIFOLXTfDVVWZgobE7C/3cfda622276bfd65931474aa47843373/credits.png"
category: "Plans & billing"
categoryKey: "category:plans-billing-and-payment"
---

## Introducing Notion credits (Starting May 4, 2026)

Notion credits are used to run Custom Agents and are available as an add-on for Business and Enterprise plans. How many credits a Custom Agent uses depends on the task. Simple tasks use fewer credits, while more complex, multi-step workflows use more.

Notion credits are shared across your workspace and reset each month, so unused credits don’t roll over. Admins can buy and manage credits from the [Notion credits dashboard](https://www.notion.com/help/notion-credits-dashboard), with additional options available through your account team.

**There are no changes to Business or Enterprise plan pricing.&#x20;**&#x45;xisting AI features like Notion Agent, AI Meeting Notes, and Enterprise Search remain included at no extra cost. Notion credits are available as an add-on to Business and Enterprise plans and are billed alongside your existing subscription.

How Notion credits are priced

Monthly Notion credits cost $10 per 1,000 credit, with each Custom Agent run using credits based on how complex the task is. You can purchase credits in-product starting in the hundreds and scaling into the thousands based on your team’s needs.

If you have an account team, you can purchase Notion credits through them with additional options to fit your needs, including annual and on-demand credits.

## When do Notion credits go into effect?

### **Now through May 3, 2026:**

Custom Agents are free to use on Business and Enterprise plans, including Business trials. During this time, teams can explore how Custom Agents fit into their workflows, and admins can track their team's patterns in the [Notion credits dashboard](https://www.notion.com/help/notion-credits-dashboard) to understand usage and estimate future credit needs.

Admins (Business and Enterprise plans) can manage who can create Custom Agents and disable Agents anytime to guide controlled rollouts.

### **Starting May 4, 2026:**

Starting May 4, 2026, admins can purchase Notion credits. Custom Agents will start using Notion credits when they run.

If you manage billing in-product, you can buy credits directly through the [Notion credits dashboard](https://www.notion.com/help/notion-credits-dashboard) in preset tiers, ranging from hundreds to thousands. If you work with an account team, reach out to them to explore credit options.

What happens if I don’t purchase credits starting May 4, 2026?

If your workspace has live Custom Agents from the free beta, admins will need to purchase Notion credits to keep them running. If there aren’t enough credits, Custom Agents will pause at your next monthly service date.

If there are insufficient credits, Custom Agents will pause automatically so you’re never charged unexpectedly. They’ll only resume running once an admin purchases Notion credits.

## How Custom Agents use Notion credits

Custom Agents run on schedules or triggers and use Notion credits based on the work needed to complete each task. This can include reading information, searching across tools, reasoning through next steps, chatting with the agent, and creating or updating content. In general, the more work an agent does, the more credits it uses.

The amount of Notion credits used depends on these key factors:

* **How much information a Custom Agent works with:&#x20;**&#x52;eading longer pages, searching more content, or scanning larger databases generally uses more credits.

* **Connected tools:&#x20;**&#x45;ach tool a Custom Agent interacts with adds steps, which can increase credit usage.

* **How many steps are involved:&#x20;**&#x4D;ore complex, multi-step workflows use more credits than simple tasks.

* **How often a Custom Agent runs:** Custom Agents that run on a schedule or are triggered frequently will use more credits over time.

* **Model choice:** More advanced models use more credits because they handle more complex reasoning. For most use cases, we recommend **Auto**, which lets Notion choose the best model for each task.

After each run, admins can see exact usage in the [Notion credits dashboard.](https://www.notion.com/help/notion-credits-dashboard)

Here’s an example that shows why two Custom Agents with similar goals may use different amounts of Notion credits:

| **Example** | **Custom Agent type**                                                                                                             | **What happens behind the scenes (typical steps)**                                                                                                                                                                                                                                                     | **Why it uses more / fewer credits per run**                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Example 1   | **Simple Task Routing Agent&#x20;**&#x52;outes incoming product feedback to the correct product area                              | • Reads a message from a **Slack** channel • Looks up the right owner in a **People database** • Creates a task and assigns it to that owner                                                                                                                                                           | **Fewer credits per run&#x20;**&#x62;ecause it processes a small amount of info and takes only a few steps       |
| Example 2   | **More complex Task Routing Agent&#x20;**&#x52;outes incoming product feedback, prioritizes follow-ups, and drafts an action plan | • Reads messages from a **Slack** channel • Searches across **multiple databases** for ownership + context • Evaluates urgency and impact • Creates a task with multiple fields like priority, category, and owner • Adds a sub-page with recommended next steps • Notifies the assigned team in Slack | **More credits per run** because it reads more, makes more decisions, and completes more steps each time it runs |

Key takeaway

Even if two Custom Agents run the same number of times per month, the one that takes more complex steps per run will use more Notion credits.

## Estimating Notion credit usage for Custom Agents

Use the examples below to get a general sense of potential costs, but keep in mind your actual Custom Agent provides the most accurate estimate of your expected Notion credit needs.

The examples\* below show Custom Agents that run **approximately 45-90 times per 1,000 Notion credits**, based on their tasks. Your usage may be higher or lower depending on how your Custom Agent is set up.

### Example 1: Q\&A agent

* **What it does:** Answers company policy questions in Slack

* **What it typically works with:**

  * Searches Notion policy databases

  * Writes a short response

  * Posts the answer in Slack

  * Creates a task for follow-up if the question can’t be answered

### Example 2: Task routing agent

* **What it does:** Routes feature requests or bugs to the right engineering team

* **What it typically works with:**

  * Reads messages from connected Slack channel

  * Searches team database and identifies the correct team

  * Creates a task with a few properties like owner, priority, and category

  * Sends a notification

### Example 3: Status update agent

* **What it does:** Creates a weekly leadership update on progress and risks

* **What it typically works with:**

  * Reviews your team’s meeting notes

  * Searches project database from the past week

  * Identifies key updates and blockers

  * Writes a structured update in Notion

*\*These examples are based on internal data as of March 18, 2026 and are provided as a general reference. Actual Notion credit usage may vary depending on your setup, including how much information a Custom Agent works with and the tools it uses.\**

*Admins can view Notion credit usage by agent in their dashboard.*

## Tracking credit usage

Admins on Business and Enterprise plans can monitor usage in the [Notion credits dashboard](https://www.notion.com/help/notion-credits-dashboard). The dashboard helps admins track Custom Agent usage and Notion credit spend across their workspace.

### Purchasing Notion credits

Starting May 4, 2026, admins can purchase Notion credits to keep Custom Agents running.

* **If you manage billing in-product:** You can purchase pre-set amounts that range from hundreds to thousands of credits based on your team's needs. Custom Agents will automatically pause if credits are insufficient at your next monthly service date.

* **If you work with an account team:** Your Notion account team is here to help you plan and purchase Notion credits, including exploring additional credit options based on your company's needs.

* **If you upgrade your Enterprise plan, which includes Annual Notion Credits, in the middle of your billing interval:** You'll get a prorated credit for the unused prepaid Annual Notion Credits equal to the lesser of (a) the dollar amount of Annual Notion Credits remaining unused, or (b) the Annual Notion Credit fees prorated for the time remaining in the subscription term. Notion Credits have no cash value. Any credit applies toward the new upgraded plan.

## Managing Custom Agent costs

Every Custom Agent is different. Credit usage is impacted by a few factors you can adjust.

1. **Run frequency:&#x20;**&#x4D;ake every run count.

2. **Context size:&#x20;**&#x42;e intentional about what your agent references.

3. **Steps and reasoning:&#x20;**&#x4D;ake every tool call count.

4. **Model selection:&#x20;**&#x4C;et Notion choose for you or customize based on your needs.

5. **Credit limits:&#x20;**&#x41;dmins and Agent owners can set **credit limits** for individual Custom Agents. When an agent reaches a credit limit, it will automatically pause for all users who have access. This prevents further credit usage until the limit is adjusted, or the month resets.

Getting these right helps your agent run efficiently, delivers better results, and keeps costs predictable.

### Keep costs predictable with agent credit limits

Monthly credit limits give workspace admins and agent owners a straightforward way to set guardrails on agent spending without needing to monitor usage in real time.

If a Custom Agent reaches a credit limit, it will automatically pause for all users who have access. This prevents further credit usage until the limit is adjusted, or the month resets. Admins and agent owners can set, adjust, or remove credit limits at any time.

To set a credit limit: Go to the Custom Agent's **Settings → Credits → Monthly limit**.

Credit limits are set **per agent,** and everyone's usage of a shared agent counts toward the same credit limit.

### Additional controls admins can use to manage credit usage

Admins have extra controls to help manage Agent runs and keep credit usage efficient across the workspace.

**For Business and Enterprise admins:**

* **Turn off Custom Agents or set credit limits at any time&#x20;**&#x74;o prevent unnecessary runs

* **Control who can create agents&#x20;**&#x62;y allowing everyone, workspace owners only, or selected members

**For Enterprise admins:**

* **Review AI analytics regularly&#x20;**&#x74;o track activity trends and understand where credits are being used

* **Plan credits proactively&#x20;**&#x62;y working with your account team to explore flexible options as your needs grow

More resources

* Learn what [Custom Agents](https://www.notion.com/help/custom-agent) are and how they work

* Understand [sharing settings and permissions](https://www.notion.com/help/custom-agents-sharing-and-permissions) for Custom Agents
