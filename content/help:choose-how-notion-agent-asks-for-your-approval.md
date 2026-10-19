---
title: "Choose how Notion Agent asks for your approval"
emoji: null
description: "Your Notion Agent can change content and use the apps you connect. Use approval settings to decide when it checks with you first."
url: "https://www.notion.com/help/choose-how-notion-agent-asks-for-your-approval"
key: "help:choose-how-notion-agent-asks-for-your-approval"
coverImage: null
category: "Notion AI"
categoryKey: "category:notion-ai"
---

Your [Notion Agent](https://www.notion.com/help/notion-agent) can create pages, update databases, and act in apps you connect, like Slack or Gmail. Your approval setting decides when your agent stops to ask you before it does one of those things. You can pick one of three settings when you start a chat, or switch approval modes on an existing chat. New chats will use your last approval mode, unless you change it before pressing send.

To change your approval setting:

1. Open a chat with your [Notion Agent](https://www.notion.com/help/notion-agent).

2. Select your current approval setting at the top of the chat.

3. Choose the setting you want. It applies right away.

Approval settings for [Custom Agents](https://www.notion.com/help/category/custom-agents) work differently. Each Custom Agent has its own approval settings.

## Approval settings

| **Setting**                 | **What your agent does**                                                                  | **Best for**                                                      |
| --------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Always ask**              | Asks you before every action that changes content or uses a connected app                 | Seeing every change before it happens                             |
| **Review for me (default)** | Works on its own to review actions for you, and asks when an action is potentially unsafe | Everyday work, with a check on big changes                        |
| **Skip all approvals**      | Runs every action without asking                                                          | Repeat work you already trust without impacting sensitive content |

## Always ask

Your agent asks for your ok before every action that changes content or uses a connected app. Nothing happens until you approve it. Pick this when you want to see each change before it happens, or when you’re still getting used to working with your agent.

**Example:&#x20;**&#x59;ou ask your agent to tidy up a project page. Your agent shows you the edit and waits. The page stays the way it is until you approve changes.

Your agent may ask before changes like:

* Create or edit a page.

* Create or edit a database, a view, or a property.

* Bulk changes to content, like updating every row in a database.

* Send or post something through a connected app, like sending an email or posting a Slack message.

* Visit a website.

Reading doesn’t need approval. Your agent can search your workspace, open pages you can already see, read recent messages in a connected app, and answer your questions without asking first. It asks when it’s about to change something or act outside Notion.

## Review for me (default)

Your agent works on its own. If it flags something as potentially unsafe, your agent pauses and asks you first. Pick this when you want your agent to keep moving without a prompt for every step. Keep in mind that this approval mode relies on the agent's review and won't always flag the same things you would.

**Example:&#x20;**&#x59;ou ask your agent to rename a property across a database with 1,000 rows. Because the change touches every row, your agent may ask before it starts.

Your agent may ask before changes like:

* Page deletions or bulk content deletions.

* Sending an email or posting a Slack message on your behalf.

* Viewing files or environment variables that may contain credentials or tokens with a computer.

* Installing dependencies or running build/test scripts with the computer.

## Skip all approvals

Your agent runs every action without asking. You can still see what it did in the chat, but you won’t get a prompt first. Pick this for repeat work you already trust, like a weekly cleanup on a database only you use.

Keep in mind your agent won’t check with you before making changes, even for actions that are hard to take back, like replacing content on a page or posting in a connected app. Use this setting only when you know exactly what you’re asking for.

Learn more about requirements and availability below.

## Requirements & availability

* Your choice applies to the workspace where you set it. If you use Notion in more than one workspace, set it in each one.

* You can choose an approval setting on web and on Android devices. This isn’t available for iOS devices.

* Notion AI is part of paid plans, so your plan decides which Notion AI features you can use. [Learn more about Notion AI →](https://www.notion.com/help/notion-ai-faqs)

* Each [Custom Agent](https://www.notion.com/help/category/custom-agents) has its own approval settings.

**More resources**

* [Get started with Notion Agent](https://www.notion.com/help/notion-agent)

* [Get started with your Notion Agent (guide)](https://www.notion.com/help/guides/get-started-with-your-personal-agent-in-notion)

* [What is Notion AI? FAQs](https://www.notion.com/help/notion-ai-faqs)

* [Notion AI security & privacy practices](https://www.notion.com/help/notion-ai-security-practices)

* [Security best practices for Agent connections](https://www.notion.com/help/security-best-practices-for-agent-connections)

* [Connect MCP servers to your Notion Agent](https://www.notion.com/help/connect-mcp-servers-to-your-notion-agent)


## FAQs

### Does this apply to Custom Agents?

No. A [Custom Agent](https://www.notion.com/help/custom-agents) asks for approval based on its own settings, and the people who manage that agent control them.

Learn more:

* [MCP connections for Custom Agents →](https://www.notion.com/help/mcp-connections-for-custom-agents)

* [Security best practices for Agent connections →](https://www.notion.com/help/security-best-practices-for-agent-connections)


### Can an admin set this for everyone?

Yes, admins can switch off the option to skip all approvals in `Settings`.

Workspace owners still control web search and which apps people can connect in `Settings` → `Notion AI`.


### Can I change this setting in the middle of a conversation?

Yes, you can pick a new setting before hitting send during an existing conversation with your Notion Agent (just not while it’s running). The new setting will apply to what your Agent does next. It doesn’t undo anything your agent already did.


### What if I approve something by mistake?

Ask your agent to undo it. For a page, you can also open page history and go back to an earlier version. If the action happened in a connected app, like a sent email or a Slack message, fix it in that app.

[Learn how to restore content →](https://www.notion.com/help/duplicate-delete-and-restore-content)
