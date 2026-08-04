---
title: "Track usage in the Notion credits dashboard"
emoji: null
description: "Learn how to use the Notion credits dashboard to track usage, plan future credit needs, and manage ongoing spend."
url: "https://www.notion.com/help/track-usage-in-the-notion-credits-dashboard"
key: "help:track-usage-in-the-notion-credits-dashboard"
coverImage: null
category: "Notion credits"
categoryKey: "category:notion-credits"
---

The Notion credits dashboard gives a clear view of how Custom Agents, Autofill, and Workers use Notion credits across the workspace. Use it to track usage, plan future credit needs, and manage ongoing spend. To access it, go to `Settings` → `Access & billing` → `Notion credits`.

Admins on Business and Enterprise plans can monitor usage in the dashboard. Custom Agent creators and Worker creators can also see workspace-level credit pacing. The table will show only the Custom Agents or Workers they've created.

In the dashboard, you can view:

* Credit usage in real time.

* Estimated usage through your monthly service date.

* Agent-level runs and credit usage, so you can identify the agents driving spend and adjust them as needed.

* Workspace members who are using credits past the [usage allowance](https://www.notion.com/help/manage-your-usage-allowance-for-notion-ai).

* Trial credits from your account team. These appear as their own category, so you can track them separately from the credits you purchased.

If you manage multiple workspaces, you’ll also have a Notion credits dashboard in your admin console where you can track credit pacing and usage across your organization.

![HC: Notion credits dashboard](https://images.ctfassets.net/spoqsaf9291f/6VO6tMhJVcel0B9aHSnZRn/5a7e4b5b0f208cde35c390cf648bbcbd/%C3%A2____35_.png)

## How to read the Notion credits dashboard

## 1. Usage summary

* At the top of the dashboard, you’ll see the total Notion credits used for the selected period and your credits reset date. The selected period is based on your workspace’s billing cycle.

* This gives you a quick snapshot of usage so far and when your monthly billing cycle ends.

## 2. Time period controls

In the top-right corner, use the period selector (for example, `Current period`) and navigation arrows to review past periods.

## 3. Usage chart

The usage chart shows credit usage over time:

* Current shows your actual credits used so far.

* Estimated projects where your usage is likely to land by the reset date if current patterns continue. The estimate is provided for informational purposes only and actual future usage may differ.

Use this to spot whether you’re pacing toward running out of credits before the reset.

## 4. Workspace usage cards

Under **This month’s usage**, you’ll see adoption and activity metrics such as:

* Agent builders: How many members are creating Custom Agents.

* Agents in action: How many live Custom Agents are running during the period.

* Runs completed: How many tasks agents have completed across your workspace.

## 5. Usage breakdown

The usage table is organized into tabs so you can filter by type.

* **All:&#x20;**&#x45;very Custom Agent, Autofill, and Worker in your workspace.

* **Custom Agents:&#x20;**&#x43;ustom Agent spend only.

* **Autofill:&#x20;**&#x41;utofill spend only.

* **Workers:&#x20;**&#x57;orker spend only. Workers show a Free badge during the beta period.

* **Mine:&#x20;**&#x4F;nly the Custom Agents and Workers you created

For each item, the table shows:

* Notion credits used

* Runs completed

* Status

* Created by

## Include Worker spend in the main chart

By default, Worker spend is tracked separately from Custom Agent spend and isn't included in the main usage chart or total credit number. To fold Worker spend into the chart and total, select the three-dot menu `•••` at the top of the dashboard and toggle on **Include Worker spend**.

## Trial credits from your account team

If your account team has given your organization trial credits, here's how they work:

* Trial credits appear in the Notion credits dashboard as their own category, separate from the credits you purchased. If your organization has a multi-workspace contract, you can also see them in the org console.

* Admins get an alert when your organization has used 80% of its trial credits, and another when trial credits are fully used.

* Unused trial credits don't carry over after the trial ends.

## What actions can an admin take to manage credit pacing?

Admins can monitor credit usage and control how Custom Agents run so spend stays predictable.

Admins have several ways to manage credit pacing:

* **Visibility:&#x20;**&#x54;rack usage and trends in the Notion credits dashboard.

* **Guardrails:&#x20;**&#x44;ecide who can create agents (and set limits).

* **Control:&#x20;**&#x50;ause or switch off agents anytime to stop usage while you investigate or make changes.

* **Optimize:&#x20;**&#x46;ine-tune agents to reduce extra steps and improve efficiency.

## 1. Monitor usage to know what’s driving spend

Use the Notion credits dashboard to track usage over time and see which features are using the most credits. Notion also notifies admins when the workspace is approaching or has reached the credit limit, so admins have time to act.

When a member uses Notion credits beyond the [usage allowance](https://www.notion.com/help/manage-your-usage-allowance-for-notion-ai), their usage appears as an individual row in the credits dashboard. Admins can see which users are spending credits past the limit and how much they've used.

## 2. Set guardrails to prevent surprises

Set credit limits for individual Custom Agents so they pause when they hit a threshold. In some cases, an agent may go over the limit in order to complete an ongoing task. If a task is already running when it hits the cap, we let it finish before stopping new usage.

![HC: set credit limit](https://images.ctfassets.net/spoqsaf9291f/EhzKTguV9VcYMMpBVGcVA/290894bba36e2f96f313757e54ce97b8/Group_8__1_.png)

Control who can create Custom Agents (everyone, workspace owners only, or selected members).

![HC: Control who can create agents](https://images.ctfassets.net/spoqsaf9291f/2M692lzUmDcPECP8aymuZ1/f1dbe760ec11f9bc1ce045f8eace0f79/image.png)

## 3. Intervene quickly to stop usage

Pause or switch off a Custom Agent anytime to immediately stop credit usage while you review activity or adjust the agent.

![HC: switch off a custom agent](https://images.ctfassets.net/spoqsaf9291f/1fHvOe6FKw71oVHY2RjJuJ/f8cfd533f74675531084e9d30feed461/image__1_.png)

## 4. Use Insights to optimize performance

Insights helps Custom Agent creators and workspace admins understand activity so they can make targeted updates that improve performance. Use Insights to spot runs that take extra steps, fail and retry, or use a more expensive model than the job requires. Then, update the agent’s instructions or settings so it runs more efficiently.

Open Insights directly within an agent to:

* Monitor your Custom Agent’s activity and credit usage.

* Identify runs that are more expensive than expected.

* Review what models, tools, and triggers were used.

* Find and fix failed runs so your agent works more reliably.

Learn more about how to use Insights to [reduce costs and improve a Custom Agent](https://www.notion.com/help/guides/best-practices-for-improving-your-custom-agent) [→](https://www.notion.com/help/guides/best-practices-for-improving-your-custom-agent)

![HC: view agent insightss](https://images.ctfassets.net/spoqsaf9291f/4QclXZuMjYGpNkBwZV7c2i/c1cfe629e1ccd50aebeac8e8d54d831d/insights_chart_english__2___1_.png)

## 5. Control whether members can spend credits past the usage allowance

Workspace owners can decide whether members can use Notion credits after hitting the usage allowance. When this is turned off, members who use up their allowance must wait for the rolling or monthly window to refresh. [Learn how to manage this setting →](https://www.notion.com/help/manage-your-usage-allowance-for-notion-ai#for-admins-allow-members-to-use-notion-credits-past-the-usage-allowance)

* Learn what [Custom Agents](https://www.notion.com/help/custom-agent) are and how they work.

* Learn how Custom Agents access information, how sharing works, and what admins can control: [Custom Agents sharing and permissions →](https://www.notion.com/help/custom-agents-sharing-and-permissions)

* See more best practices on optimizing Notion credits and efficiency for Custom Agents in <!-- -->an [admin’s guide to getting started with Custom Agents →](https://www.notion.com/help/guides/admin-guide-to-getting-started-with-custom-agents)


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


### What happens to Custom Agents if I downgrade my plan?

If you downgrade your Notion plan to Free or Plus, all existing Custom Agents are switched off, but not deleted. You can view (but not edit) the Custom Agent chat page and settings. Custom Agents can continue if you upgrade back to Business or Enterprise.


### Can I purchase Notion credits if I manage my subscription through the App Store or Google Play?

Not directly. If your Notion subscription is managed through a mobile app store (Apple App Store or Google Play), you won't be able to purchase Notion credits from within Notion.\
\
To buy credits, you'll need to:

* Cancel your mobile app store subscription.

* Upgrade to a Notion plan directly on [notion.com](http://notion.com) (Business or Enterprise, with AI included).

* Once your new subscription is active, an admin can purchase Notion credits from `Settings` → `Access & billing` → `Notion credits`.

Make sure your new plan includes AI before purchasing credits. [Notion credits](https://www.notion.com/help/category/notion-credits) are only available on Business and Enterprise plans.
