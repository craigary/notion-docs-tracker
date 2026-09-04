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

**Starting September 10, 2026, premium models will be off by default for&#x20;**[**Notion Agent**](https://www.notion.com/help/notion-agent)**&#x20;in every workspace.&#x20;**&#x41; workspace owner or admin needs to turn on a premium model in `Settings` → `Notion AI` before your team can use it with Notion Agent, and using a premium model will spend [Notion credits](https://www.notion.com/help/what-are-notion-credits).

Premium AI models are designed for complex, long-running work and cost substantially more than the models included in your plan. Using a premium model with [Notion Agent](https://www.notion.com/help/notion-agent) spends [Notion credits](https://www.notion.com/help/category/notion-credits). Premium models stay switched off in every workspace until a workspace owner or admin turns them on, so nothing spends credits until you decide to allow it. Until then, they aren’t available for [Notion Agent](https://www.notion.com/help/notion-agent).

Notion charges tokens at each provider’s published rates, with no markup. You pay the same rate the model provider charges, and this applies to premium model usage paid for with monthly workspace credits. Provider rates and pricing methodology are subject to change.

This article is for workspace owners and admins. If you’re a member and a model you want is unavailable, read the section on [what members see](https://www.notion.com/help/manage-ai-models-and-member-credit-spend#what-members-see) below.

## Before you start

* You need to be a workspace owner or admin to change these settings.

* Your workspace needs to be on the Business or Enterprise plan.

* Your workspace needs [Notion credits](https://www.notion.com/help/what-are-notion-credits) available. Premium models spend credits every time someone uses them for [Notion Agent](https://www.notion.com/help/notion-agent).

## Turn on a premium model for your workspace

Workspace owners and admins can turn on a premium model for the workspace:

1. In your sidebar, go to `Settings` → `Notion AI`.

2. Open the `Usage` tab.

3. Find the model you want under the model controls.

4. Turn the model on.

Once a premium model is switched on, members can select it for [Notion Agent](https://www.notion.com/help/notion-agent) right away. Workspace owners and admins can switch a premium model off at any time, which makes it unavailable in the model picker.

These model controls apply to [Notion Agent](https://www.notion.com/help/notion-agent). [Custom Agents](https://www.notion.com/help/category/custom-agents) have their own model controls and model picker, so turning a premium model on or off for Notion Agent doesn’t change which models your Custom Agents can use.

Learn more about how admins can [manage access to models for Custom Agents](https://www.notion.com/help/custom-agents#admins-manage-access-to-models-for-custom-agents) →

## Manage premium models across your organization

Organizations on the Enterprise plan can use the Admin API to update premium model settings across workspaces programmatically. Learn more about [Notion's Admin API →](https://developers.notion.com/reference/admin/intro)

## Set how many credits each member can spend for premium models

Workspace owners and admins can cap how many [Notion credits](https://www.notion.com/help/what-are-notion-credits) a person or group can spend using a premium model, so a single member or group can’t use up the workspace’s credits.

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

* When you use a premium model with [Notion Agent](https://www.notion.com/help/notion-agent), it spends [Notion credits](https://www.notion.com/help/what-are-notion-credits). The models that are part of your plan don’t spend credits.

* When you reach your credit limit, you can keep using the models included in your plan for [Notion Agent](https://www.notion.com/help/notion-agent). Ask an admin if you need a higher limit.

## Who can use premium models

* Premium models are available on Business and Enterprise plans.

* A workspace owner or admin needs to turn on each model before anyone can use it for [Notion Agent](https://www.notion.com/help/notion-agent).

* Members need credits left under their own limit, and the workspace needs credits available.

**More resources:**

* [What are Notion credits?](https://www.notion.com/help/what-are-notion-credits)

* [Manage your usage allowance for Notion AI](https://www.notion.com/help/manage-your-usage-allowance-for-notion-ai)

* [Track usage in the Notion credits dashboard](https://www.notion.com/help/track-usage-in-the-notion-credits-dashboard)

* [Custom Agents in Notion](https://www.notion.com/help/custom-agents)

* [Get started with Notion Agent](https://www.notion.com/help/notion-agent)


## FAQs

### Will my workspace start spending Notion credits on its own?

No. Premium models are switched off for Notion Agent in every workspace. Nothing spends credits until an admin turns a model on.


### Does Notion charge more than the model's own price?

No. Notion charges tokens at each provider’s published rates, with no markup. This applies to premium model usage paid for with monthly workspace credits.

Provider rates and pricing methodology are subject to change.


### Why do premium models cost extra?

Some models are part of your plan, so using them with [Notion Agent](https://www.notion.com/help/notion-agent) doesn't spend [Notion credits](https://www.notion.com/help/what-are-notion-credits). Premium models cost much more to run, so using them requires credits.


### Why can't I pick a premium model for Notion Agent?

Usually one of these three things:

1. Your admin hasn't turned that model on yet.

2. You've reached your own credit limit.

3. Your workspace is out of [Notion credits](https://www.notion.com/help/category/notion-credits).

Your admin can check all three in `Settings` → `Notion AI`.


### Who can change these settings?

Workspace owners and admins on the Business and Enterprise plans.
