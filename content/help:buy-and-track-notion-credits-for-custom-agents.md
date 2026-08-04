---
title: "Understand pricing for Custom Agents"
emoji: null
description: "Everything you need to know about how Custom Agents use Notion credits, including how to estimate credit usage and cost."
url: "https://www.notion.com/help/buy-and-track-notion-credits-for-custom-agents"
key: "help:buy-and-track-notion-credits-for-custom-agents"
coverImage: null
category: "Custom Agents"
categoryKey: "category:custom-agents"
---

Custom Agents use Notion credits each time they run a task. More complex tasks usually use more credits. Notion credits are shared across the workspace, so every Custom Agent draws from the same balance, no matter who created or ran it.

## How Custom Agents use credits

Custom Agents use credits based on the work needed to complete a run. In general, they will use more credits when they read more content, take more actions, or run more often.

Credit usage depends on these key factors:

* **How much the Custom Agent reads:** Reading longer pages, searching more content, or scanning larger databases generally uses more credits.

* **How many steps it takes:** More tool calls and multi-step workflows use more credits.

* **How often it runs:** Custom Agents that run on a schedule or are triggered frequently will use more credits over time.

* **Model choice:** Advanced models use more credits because they handle more complex reasoning. For most cases, we recommend Auto, which lets Notion match a model to the task.

After each run, admins and Custom Agent creators can see exact usage in the [Notion credits dashboard](https://www.notion.com/help/track-usage-in-the-notion-credits-dashboard).

Here’s an example of two Custom Agents with similar goals that use different amounts of Notion credits. Even if they run the same number of times per month, the agent that takes more complex steps per run will use more credits:

| **Example**                           | **Workflow**                                                                        | **Typical Steps**                                                                                                                                                                                                                                                                                | **Credit Impact**                                                                                               |
| ------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **Simple Task Routing Custom Agent**  | Routes incoming product feedback to the correct product area                        | • Reads a message from a Slack channel • Looks up the owner in a people database • Creates a task and assigns it to that owner                                                                                                                                                                   | Fewer credits per ru&#x6E;**&#x20;**&#x62;ecause it processes a small amount of info and takes only a few steps |
| **Complex Task Routing Custom Agent** | Routes incoming product feedback, prioritizes follow-ups, and drafts an action plan | • Reads messages from a Slack channel • Searches across multiple databases for ownership and context • Evaluates urgency and impact • Creates a task with multiple fields like priority, category, and owner • Adds a sub-page with recommended next steps • Notifies the assigned team in Slack | More credits per run because it reads more, makes more decisions, and completes more steps each time it runs    |

## Estimate Notion credit usage & cost

Credit usage depends on what your Custom Agent does. The examples below are based on popular use cases, but your actual usage will vary based on factors like how often your agent runs, how many steps it takes, and what model it uses.

Use the table below as a starting point:

* Find the closest use case.

* Multiply “cost per run” by how many runs you expect per month.

* For example, if your agent is like a “Status update agent” and runs 60 times per month, that’s about $4.80–$10.80 per month.

|                                |                                                                                                                      |                  |                                            |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------ |
| **Example**                    | **Workflow**                                                                                                         | **Cost per run** | **Number of runs per 1,000 credits ($10)** |
| **Q\&A Custom Agent**          | Answers common policy and how-to questions using your internal docs. Responds directly in a Slack channel.           | \~$0.03–$0.11    | \~90–333                                   |
| **Task routing Custom Agent**  | Reviews incoming requests, creates a task, and assigns it to the right person or team. Then, notifies the requester. | \~$0.05–$0.15    | \~65–190                                   |
| **Status update Custom Agent** | Pulls key updates from notes and projects, then drafts a weekly status update for review.                            | \~$0.08–$0.18    | \~57–133                                   |
| **Mail triage Custom Agent**   | Sorts incoming emails by urgency and topic. Drafts replies and turns action items into tasks when needed.            | \~$0.04–$0.10    | \~100–250                                  |
| **Daily brief Custom Agent**   | Creates a daily digest of priorities and action items. Uses context from your calendar and email.                    | \~$0.10–$0.30    | \~33-100                                   |

**

* Your actual Custom Agent provides the most accurate estimate of your credit needs. After each run, the credits dashboard shows exact usage.

* For best results:

  * Start with a small scope, then fine-tune your Custom Agent.

  * Review actual usage for 1–2 billing cycles to get a clearer view of your credit needs.

  * Adjust up or down as needed.

* These estimates are based on current usage data. As we improve agent efficiency, costs are expected to decrease over time. We'll update these benchmarks regularly.

* For more tips on managing credit usage, see an<!-- --> [admin’s guide to getting started with Custom Agents →](https://www.notion.com/help/guides/admin-guide-to-getting-started-with-custom-agents)


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
