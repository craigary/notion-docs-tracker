---
title: "Manage AI models & member credit spend"
emoji: null
description: "Learn how workspace owners and admins can choose which AI models their team can use with Notion Agent, set how many Notion credits each person can spend, and see where those credits go."
url: "https://www.notion.com/help/manage-ai-models-and-member-credit-spend"
key: "help:manage-ai-models-and-member-credit-spend"
coverImage: null
category: "Notion AI"
categoryKey: "category:notion-ai"
---

High credit consumption models<!-- --> are designed for complex, long-running work and cost substantially more than the models included in your plan. <!-- -->When a member picks a high credit consumption model with [Notion Agent](https://www.notion.com/help/notion-agent), it draws on [Notion credits](https://www.notion.com/help/category/notion-credits) from the start. High credit consumption models stay switched off in every workspace until a workspace owner or admin turns them on, so nothing spends credits until you decide to allow it. Until then, they aren't available for [Notion Agent](https://www.notion.com/help/notion-agent).<!-- -->

This article is for workspace owners and admins. If you’re a member and a model you want is unavailable, read the section on [what members see](https://www.notion.com/help/manage-ai-models-and-member-credit-spend#what-members-see) below.

## Before you start

* You need to be a workspace owner or admin to change these settings.

* Your workspace needs to be on the Business or Enterprise plan. Business trials may not have access to the model picker.

* Your workspace needs [Notion credits](https://www.notion.com/help/what-are-notion-credits) available to use <!-- -->high credit consumption models.

## Turn on a high credit consumption model for your workspace

Workspace owners and admins can turn on a <!-- -->high credit consumption<!-- --> model for the workspace:

1. In your sidebar, go to `Settings` → `Notion AI`.

2. Open the `Usage` tab.

3. Find the model you want under the model controls.

4. Turn the model on.

Once a high credit consumption model is switched on, members can select it for [Notion Agent](https://www.notion.com/help/notion-agent) right away. Workspace owners and admins can switch a high credit consumption model off at any time, which makes it unavailable in the model picker.

Organizations on the Enterprise plan can use the Admin API to update high credit consumption model settings across workspaces programmatically. Learn more about [Notion's Admin API →](https://developers.notion.com/reference/admin/intro)

These model controls apply to [Notion Agent](https://www.notion.com/help/notion-agent). [Custom Agents](https://www.notion.com/help/category/custom-agents) have their own model controls and model picker, so turning a high credit consumption model on or off for Notion Agent doesn’t change which models your Custom Agents can use.

Learn more about how admins can [manage access to models for Custom Agents](https://www.notion.com/help/custom-agents#admins-manage-access-to-models-for-custom-agents) →

## Set how many credits each member can spend for high credit consumption models

Workspace owners and admins can cap how many [Notion credits](https://www.notion.com/help/what-are-notion-credits) a person or group can spend using a high credit consumption model, so a single member or group can't use up the workspace's credits.

1. In your sidebar, go to `Settings` → `Notion AI`.

2. Open the `Usage` tab.

3. Set the default credit limit. This applies to everyone in your workspace.

4. To give a person or group more room, find the name and set a higher limit for them.

Owners and admins can change a limit at any time. Raising someone’s limit takes effect right away.

## See who’s spending credits

Workspace owners and admins can go to `Settings` → `Access & billing` → `Notion credits` to open the [Notion credits dashboard](https://www.notion.com/help/track-usage-in-the-notion-credits-dashboard).

* Each member’s credit spend shows up as its own row within the `Members` tab, so you can see who is using credits and how much.

* The usage chart shows where your workspace is pacing for the month, so you can act before credits run low.

## What members see

* The model picker only lists models your workspace owner has turned on. If a specific model isn’t there, ask an admin to turn it on.

* When you choose a high credit consumption model in [Notion Agent](https://www.notion.com/help/notion-agent), it uses [Notion credits](https://www.notion.com/help/what-are-notion-credits), not your [Select credits](https://www.notion.com/help/standard-select-and-notion-credits-eligible-features).

* If you use up your Select credits and your credit limit, you can keep using the models included in your plan on [Auto](https://www.notion.com/help/auto), as long as you still have Standard credits available. Ask an admin if you need a higher credit limit. Learn more about [Standard and Select credits →](https://www.notion.com/help/standard-select-and-notion-credits-eligible-features)

## Who can use high credit consumption models

* High credit consumption models are available on Business and Enterprise plans.

* A workspace owner or admin needs to turn on each model before anyone can use it for [Notion Agent](https://www.notion.com/help/notion-agent).

**More resources:**

* [What are Notion credits?](https://www.notion.com/help/what-are-notion-credits)

* [Manage your usage allowance for Notion AI](https://www.notion.com/help/manage-your-usage-allowance-for-notion-ai)

* [Track usage in the Notion credits dashboard](https://www.notion.com/help/track-usage-in-the-notion-credits-dashboard)

* [Custom Agents in Notion](https://www.notion.com/help/custom-agents)

* [Get started with Notion Agent](https://www.notion.com/help/notion-agent)


## FAQs

### Will my workspace start spending Notion credits on its own?

No. High credit consumption models are switched off for Notion Agent in every workspace. Nothing spends credits until an admin turns a model on.


### Why do high credit consumption models cost extra?

Some models are part of your plan, so using them with [Notion Agent](https://www.notion.com/help/notion-agent) on Auto draws from your Standard usage. High credit consumption models cost much more to run, so picking one yourself draws on Notion credits.


### Why can't I pick a high credit consumption model for Notion Agent?

Usually one of these things:

1. Your admin hasn't turned that model on yet.

2. You've used up your Select usage and reached your own credit limit.

3. Your workspace is out of [Notion credits](https://www.notion.com/help/category/notion-credits).

Your admin can check these in `Settings` → `Notion AI`.


### Who can change these settings?

Workspace owners and admins on the Business and Enterprise plans.


### I used Claude Fable 5 before. What changed?

Claude Fable 5 uses your workspace's [Notion credits](https://www.notion.com/help/category/notion-credits), not your [Standard or Select credits](https://www.notion.com/help/standard-select-and-notion-credits-eligible-features). A workspace admin must turn it on for your workspace before you can select it in Notion Agent. Your [Custom Agents](https://www.notion.com/help/custom-agents) and saved work aren't affected.
