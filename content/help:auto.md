---
title: "Get the best AI model for every task with Auto"
emoji: null
description: "Auto chooses an AI model for each task, balancing quality, speed, and cost. Learn when to leave it on, when to choose a model yourself, and how Auto uses your AI credits."
url: "https://www.notion.com/help/auto"
key: "help:auto"
coverImage: null
category: "Notion credits"
categoryKey: "category:notion-credits"
---

**When changes start**

New Business and Enterprise workspaces move to the [new credit system](https://www.notion.com/help/standard-select-and-notion-credits-eligible-features) starting October 19, 2026. For existing workspaces, it takes effect on November 2, 2026.

Auto is a model router that reads each task and sends it to the model that best balances quality, speed, and cost. For each task, Auto chooses a model from multiple AI providers, based on Notion’s evaluations and the models your workspace allows. It uses faster models for quick questions and edits, and more capable models for complex work.

## Let Auto choose a model

Auto is on by default in the model picker, in [Notion Agent](https://www.notion.com/help/notion-agent) chat, and in a [Custom Agent’s](https://www.notion.com/help/custom-agents) settings. When you use Auto, Notion picks the best model for each task. Here’s how it works:

* **Auto matches the model to the task.** Quick questions, edits, and summaries go to fast, efficient models. More complex tasks, such as in-depth research, writing code, or building [Custom Agents](https://www.notion.com/help/category/custom-agents), can go to more capable models.

* **Auto can adapt mid-task.** During a multi-step task, Auto can switch to a more capable model for demanding steps, then switch back for simpler work.

* **Auto keeps up with new models.** Notion evaluates new models for quality, speed, cost, and reliability before making them available. The models available through Auto may change. Learn how Notion [evaluates models against common knowledge work →](https://labs.notion.com/knowledge-board#methodology)

* **Auto follows your workspace settings.** It only uses models your workspace allows that meet its requirements, including model controls and provider restrictions.

* **Auto needs enough models switched on to work well.** If an admin turns off too many models for the workspace, Auto can become less efficient. Admins will see a warning before a restriction impacts Auto.

## Choose a model yourself

You can take over model selection at any time. Pick one yourself when:

* You want to use the same model throughout your chat instead of letting Auto choose or switch models as the work changes.

* You prefer a specific model for a particular kind of work.

* Auto didn’t give you the result you need, and you want to try another model.

**To choose a model**

In [Notion Agent](https://www.notion.com/help/notion-agent) chat:

1. Select `Auto` to open the model picker.

2. Hover over a model to compare speed, intelligence, and cost.

3. Select a model.

Once selected, [Notion Agent](https://www.notion.com/help/notion-agent) will use that model for your chat. To switch back to Auto, open the model picker and select `Auto`.

In [Custom Agent](https://www.notion.com/help/custom-agents#choose-a-model-for-your-custom-agent) settings:

1. Open your agent’s `Settings`.

2. Go to the model section and open the model picker.

3. Select a model.

4. Select `Save`.

Once selected, the Custom Agent will use that model until you change it.

Workspace owners and admins can control which models members choose. If a model isn’t listed, you can ask an admin to turn it on. Learn how admins can [manage AI models and member credit spend](https://www.notion.com/help/manage-ai-models-and-member-credit-spend) →

## How Auto & AI credits work

On Business and Enterprise plans, [Notion Agent](https://www.notion.com/help/notion-agent) uses Standard credits when you use Auto and Select credits when you choose a model yourself. If you run out of either, your admin can allow you to keep using AI features with [Notion credits](https://www.notion.com/help/category/notion-credits).

Learn more about [managing your AI credits →](https://www.notion.com/help/manage-your-ai-credits)

## How Auto makes your credits go further

For most everyday work in Notion, Auto can help your credits go up to 10 times further than picking a top model yourself. Auto matches the model to the job and spends less per task, so you can put your credits toward getting more done. [In our testing](https://www.notion.com/help/auto#how-we-tested-auto):

* Auto's average cost to run was 87% lower than Opus 5.5.

* Polishing a doc or email used about 8 times fewer credits than building a detailed strategy doc or quarterly plan.

## Compare credit use across tasks in Notion

This table compares estimated credit use for common tasks with Auto and Opus 5.5. Your actual use may vary.

| **Task type** | **Examples**                                                                                                                                                                                   | **Auto** Est. credits per task | **Opus 5.5** Est. credits per task |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------------------------------- |
| **Simple**    | - Polish an email - Find decisions in meeting notes - Translate a message or document - Explain technical requirements - Draft a customer support reply                                        | 5                              | 50                                 |
| **Medium**    | - Track task progress - Write a work report - Find a document in your workspace - Triage customer support inquiries - Manage your inbox - Transcribe and summarize a one hour meeting\*        | 10                             | 85                                 |
| **Complex**   | - Manage hiring and job applications - Create and configure databases - Draft a performance review - Refine a strategy document or quarterly plan - Maintain CRM contacts and sales follow-ups | 25                             | 150                                |

\* AI meeting notes uses Auto and will begin consuming monthly Standard credit allowance on December 1, 2026. A one hour meeting is estimated to use \~10 Standard credits.

Credit use varies by scenario. For example, asking Notion Agent to polish an email in a long thread with complex info may use more credits. Even for tasks that typically use more credits, Auto produced results comparable to frontier models.

## How we tested Auto

We evaluated Auto by replaying thousands of common, real-world tasks in a simulated Notion environment, then comparing how different models did. Here's how it worked:

1. We compared models two at a time. We showed a group of top models the work from two different models, side by side.

2. The group of judges picked the better result each time, using a set scoring guide.

3. We gave each model an Elo score based on all these head-to-head matchups.

An Elo score rates skill based on how a player does against others over many one-on-one matchups, like stack ranking chess players. It's a simple, reliable way to score models on real-world work.

Running every matchup by hand is expensive, so we trained an AI judge to closely match these rankings, letting us run many comparisons at once. Our scoring comes from that method.


## FAQs

### Is Auto Notion's own AI model?

No. Auto is a model router. For each task, it chooses from models by multiple AI providers.


### Which AI models does Auto use?

Auto uses a range of models, from fast and efficient to more capable. We don't publish a fixed list because the lineup changes as new models are released and evaluated, and because it depends on which models your workspace allows.


### How does Notion choose which models Auto can use?

Before making a model broadly available, Notion assesses its quality, cost, and whether it can be served reliably at scale. Explore how models perform on real knowledge-work tasks, including task resolution, cost, and completion time, on the [Notion Knowledge Board](https://labs.notion.com/knowledge-board) →


### Does Auto use the same model for my whole chat?

Not necessarily. Auto chooses a model for each task and can change models during longer work.


### Will Auto use models my admin has turned off?

No. Auto only uses models your workspace allows. If an admin restricts too many models, Auto may become less efficient or unavailable. Admins see a warning before a restriction affects Auto.


### Can I see which models Auto uses most often?

Not currently. Auto chooses a model for each task and may switch models during longer work. You can’t see which models it used or how often.


### How much can Auto save me?

It depends on the task, but for most everyday work in Notion, Auto can make your credits go up to 10 times further than picking a model yourself. Simple tasks like polishing an email use fewer credits than complex work like building a strategy doc.
