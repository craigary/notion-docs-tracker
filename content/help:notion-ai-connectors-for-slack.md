---
title: "Connect Slack to Notion AI"
emoji: null
description: null
url: "https://www.notion.com/help/notion-ai-connectors-for-slack"
key: "help:notion-ai-connectors-for-slack"
coverImage: null
category: "Notion AI Connectors"
categoryKey: "category:notion-ai-connectors"
---

* This feature is available on Business and Enterprise Plans.

* Notion AI generates answers using LLMs like GPT-5 and Claude. Be sure to double-check all answers for accuracy.

* There are many other ways to use Slack and Notion together. Learn more about our [Slack connection →](https://www.notion.com/help/slack)

Connect Slack to Notion AI to bring your team's Slack conversations into Notion. Once the Slack connector is set up, you can search Slack messages, summarize channels, and get answers from past discussions without leaving your workspace. Your Notion Agent can even take action in Slack for you, like posting a message or replying in a thread.

## Who can connect Slack to Notion AI

* You must be a Slack workspace owner and a Notion workspace owner.

* Your workspace must be on the Business or Enterprise Plan and have more than one member.

* If you’re a Notion workspace owner but not also approved to connect external apps to Slack, you’ll need approval from someone who has the appropriate Slack permissions to complete the connection.

* If you’re using Slack Enterprise Grid, your organization may have multiple Slack workspaces under one org. Before you continue, make sure you’re in the right Slack workspace/team, then connect the channels you want Notion AI to use.

## How do I connect my Slack workspace?

Make sure you're setting up the Slack AI connector in Notion. Setup won't work if you initiate it in Slack.

To connect your Slack workspace to Notion AI:

1. Go to `Settings` → `Notion AI`.

2. Select `+` next to `Slack`.

   ![hc: notion ai slack connector entry point](https://images.ctfassets.net/spoqsaf9291f/7N2PMC7UueZIl4wU4axGqM/aa74311c69214de6029b13f51155f644/Help_Center_Updates_AI_Connectors_Settings_V2.jpg)

3. You'll be taken to Slack to start the connection. Make sure you're in the right Slack workspace before continuing the setup. **Don't close Notion during the setup process!**

   ![hc: notion ai connector set up in slack](https://images.ctfassets.net/spoqsaf9291f/2pxvevkde57cZHRFdnOcbJ/bef67dcdcb3f9c0218127794b25a051c/Help_Existing_AI_Connectors.png)

4. **If you’re a Slack workspace owner**, you’ll be able to select the Slack workspace and channels you want to connect. You can select `All public channels` or specific public channels. You also have the option to include public channels created in the future. This won’t include public channels containing external users, like Slack Connect channels.

   * **If you’re not a Slack workspace owner**, you can request this connection. Your Slack workspace owner or approved Slack members will be notified. **Make sure you’re requesting the connection for the right Notion workspace!**

5. Once Notion AI has joined those public channels, depending on how your Slack owner has set up your [workspace settings](https://slack.com/help/articles/115002695043-Manage-join-and-leave-messages-), a message will be sent in those public channels to say Notion AI has joined them and will join all future public channels. **This message won’t show up in Slack channels with external users.**

   * Additionally, individual members of a Notion workspace where the Slack AI Connector has been set up can connect private channels and direct messages to Notion. Each user can only see what they have access to in Slack!

Once the connection is set up, it will be able to find messages going back a year from when the setup is complete. For example, if you connect Slack with Notion AI on June 1, 2024, Notion AI will be able to find information from messages in Slack sent on June 1, 2023 and later.

This process can take up to 36 hours.

## Which Slack channels and messages can be connected to Notion AI?

When you connect Slack to Notion AI, you have the option to select specific public Slack channels you’d like to connect. Alternatively, you can choose to connect all public channels, including ones that are created in the future.

These public channels will not include any Slack Connect channels that you use to communicate with external partners.

On top of this, individual members of a Notion workspace where the Slack AI Connector has been set up have the option to connect their private channels and direct messages to Notion. Each user can only see what they have access to in Slack!

**Note:**

* The Slack AI connector doesn't index Canvases and Lists.

* You can't automatically opt-in to all public channels; this needs to be set up manually by admins and users.

* New messages may take up to 3 hours to be indexed by Notion AI before they appear in search results. Larger data volumes may take additional time.

## Where can I use my Slack AI Connector?

You can search Slack via Notion AI Connectors in the following places:

* The Notion AI chat in the bottom right of Notion.

* The Notion AI widget at the top of `Home`.

* `Search` in your sidebar.

You can narrow your search to just Slack by opening the `All sources` toggle in chat and `Home` and selecting `Slack`. You can also filter Notion AI `Search` results to show only information from Slack.

## What your Notion Agent can do in Slack

Your [Notion Agent](https://www.notion.com/help/notion-agent) (the chat in the bottom corner of Notion) can do more than search Slack. Once you connect your Slack account, it can take action in Slack for you too.

To get started, ask your Notion Agent anything that involves Slack. If your Slack account isn't connected yet, your Agent will prompt you to connect it. A workspace admin may also need to approve the new Slack permissions before these actions are available to your team.

With your Slack account connected, your Notion Agent can:

* Look up a person in Slack, or find them by their email.

* Search channels you're in, including private channels and direct messages.

* Read what a specific person or channel has been discussing recently.

* Open files shared in Slack.

* Post a message or start a new thread in a channel you're in.

* Reply in an existing thread.

* Edit messages it posted for you, and add or remove emoji reactions.

Try these prompts:

* "Who is \[name] in Slack, and what have they been working on this week?"

* "Summarize the latest discussion in our private launch channel."

* "Post a recap of this page in #team-updates."

A few things to keep in mind:

* Your Notion Agent acts as you. Anything it posts in Slack shows up as coming from you, not from a bot. Just like sending a message yourself, posts can't be undone, so review what you ask it to send.

* It can only see and do what you can. It can only reach channels and direct messages you're a member of, and it can only edit messages sent from your account.

* It can't start a brand-new thread inside a direct message.

* If your Notion Agent can only search Slack but not take these actions, your Slack account isn't connected yet or your workspace isn't set up for them. Connect Slack when prompted, or check with a workspace admin.

## Best practices & example prompts

The Slack AI Connector is most helpful for:

* Getting summaries and updates from specific time periods or channels.

* Finding conversations and information from Slack without leaving Notion.

* Summarizing information and gathering context that's scattered across channels.

* Discovering company knowledge.

You could try prompting Notion AI with the following:

* "Summarize company activity from this week."

* "What happened while I was out of office?"

* "Tell me the major updates from {channel name}."

More resources

* There are many other ways to use Slack and Notion together. Learn how to integrate Slack [in this article →](https://www.notion.com/help/slack?_gl=1*1lyima*_gcl_aw*R0NMLjE3NzIwNTU1MTAuQ2owS0NRanc5b2JJQmhDQUFSSXNBR0htMW1UXzBndlhBVF9XUXBnVG1Ed2dIZEtoa3FaZEF6S183WjVuRF9Yc2pyVFdJRWRYWTRxWmZRRWFBbF96RUFMd193Y0I.*_gcl_au*MTcyNzQ5MTgwMC4xNzY5NjQ3MTQ3LjE0MTU1NDU5MTIuMTc3Njc5ODg5OS4xNzc2Nzk4ODk4*_ga*MTg3MDc4NzEwMS4xNzY5NjQzODc4*_ga_9ZJ8CB186L*czE3NzczOTMyMjYkbzE3NiRnMSR0MTc3NzQwMjExMiRqNjAkbDAkaDA.)

* [Notion AI Connectors](https://www.notion.com/help/notion-ai-connectors)

* [What is Notion AI?](https://www.notion.com/help/notion-ai-faqs)


## FAQs