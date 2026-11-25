---
title: "Connect Atlassian to Notion AI"
emoji: null
description: "Learn how to upgrade to the Atlassian connection, connect your account, and clean up the old setup."
url: "https://www.notion.com/help/connect-atlassian-to-notion-ai"
key: "help:connect-atlassian-to-notion-ai"
coverImage: null
category: "Notion AI"
categoryKey: "category:notion-ai"
---

**Jira in Notion AI is getting an upgrade**

The Atlassian MCP lets Notion AI search Jira using Jira Query Language, create and update issues, and work with the rest of Atlassian. Connect your Atlassian account by **January 18, 2027** to keep using Jira in Notion AI. Each person in your workspace connects their own account.

The Atlassian connection lets Notion AI search Jira with Jira Query Language (JQL), so it finds the right issues faster. It can also create and update Jira issues, so you can keep your work moving without leaving Notion. And it connects the rest of Atlassian, including Confluence, Bitbucket Cloud, Loom, and Compass.

The Atlassian connection replaces the original Jira AI Connector, which is built on Atlassian Connect, a framework Atlassian is retiring.

## What you get with the Atlassian connection

| **Who connects**                                 | Each person connects their own Atlassian account                                        |
| ------------------------------------------------ | --------------------------------------------------------------------------------------- |
| **Atlassian products**                           | Jira, Confluence, Bitbucket Cloud, Loom, Compass                                        |
| **What it can do**                               | Read, search, create, and update across Jira and the other supported Atlassian products |
| **Permissions**                                  | Uses your Atlassian permissions                                                         |
| **Custom Agents**                                | Supported                                                                               |
| **Atlassian app install**                        | No Forge app needed                                                                     |
| **Admin scope controls (Enterprise plans only)** | Admins choose who can connect from Notion                                               |

## How to upgrade

**For workspace owners and admins**

1. **On Enterprise plans, allow members to add the Atlassian connection if your workspace restricts which connections they can install.** Go to `Settings` → `Connections` → `Manage `. If

   `Limit which connections members can install` is set to `Approved only`, select `Approved connections` → `Add approved connection`, search for `Atlassian`, then select `Save`.

2. **Check your Atlassian organization settings.** If your organization limits third-party AI or app access, or uses domain or IP allowlists, an Atlassian org admin may need to allow the connection before members can sign in.

3. **Tell your team to connect.** Let everyone who uses Jira in Notion AI know they can upgrade by connecting their own Atlassian account before December 31, 2026. Point them to the steps in

   **For everyone using Jira in Notion AI** below.

4. **Check who has connected.** Go to `Settings` → `Connections` → `Atlassian` → `MCP Server` → `Connected accounts` to see which members have set up a connection.

**For everyone using Jira in Notion AI**

Connect your Atlassian account in any of these ways:

* **Ask your agent:&#x20;**&#x49;n Notion AI chat, type “Connect me to Atlassian.” You can also say “Connect to Jira.”

* **From chat sources:** In a chat, select `All sources` → `MCP servers` → `Add MCP server`, then choose `Atlassian`.

* **From settings:** Go to `Settings` → `Connections`, open the `Discover` tab, find `Atlassian`, then select `Add to Notion AI`.

Sign in with your Atlassian account and approve access. After you connect, Atlassian appears under `All sources` → `MCP servers` in chat.

If you’re using Custom Agents, each one needs its own Atlassian connection. Open the agent's settings, select `+ Add connection`, choose **Atlassian**, then sign in.

## Try it out

* “What’s {teammate} working on in Jira this sprint?”

* “How many tickets did I complete last month?”

* “Find open bugs in the {project} project that mention checkout.”

* “Create a Jira issue in {project} for the bug we just discussed and assign it to me.”

* “Summarize the Confluence page about our Q1 launch plan and link the related Jira epics.”

If Notion AI doesn’t use Atlassian when you expect it to, mention it by name, for example “Check Jira for…”.

## Jira database sync isn’t affected

This change only affects the Jira AI Connector. Jira database sync and Jira link previews will keep working as they do today.

Jira sync and the Atlassian connection work well together. Sync brings Jira projects into Notion databases that stay up to date and work with views, automations, and AI. The Atlassian connection lets you and your agents work with Jira and other Atlassian products when you need to. Many teams use both: they sync the projects they plan and report on, then use the Atlassian connection for updates, quick lookups, and other Atlassian tools.

[Learn how to set up a Jira sync →](https://www.notion.com/help/jira)


## FAQs

### Why is Notion moving to the Atlassian connection?

The Atlassian MCP server lets Notion AI search Jira using JQL, create and update issues, and work with other Atlassian products. It also supports Custom Agents. It replaces the Jira AI Connector, which is built on Atlassian Connect, a framework Atlassian is retiring on January 31, 2027.


### Will my current connection upgrade automatically?

No. Each person upgrades by connecting Atlassian with their own Atlassian account, even if an admin has already allowed it.


### What happens if we don't upgrade by the deadline?

After December 31, 2026, the original Jira AI Connector stops returning Jira results in Notion AI. To keep working with Jira in Notion AI, connect Atlassian.


### Can we use both connections at the same time?

Yes. You can connect Atlassian while the Jira AI Connector is still running. That lets your team upgrade at its own pace before December 31, 2026.


### Who can see Jira content through the Atlassian connection?

In Notion Agent, the connection uses each user’s Atlassian account and its permissions, so it can only see and change what that person can see and change in Atlassian. Custom Agents use the credentials and permissions of the person who connected the account. People who can interact with a shared Custom Agent may be able to use that connection, so review the agent’s sharing and tool settings.


### Can admins limit which Jira projects Notion AI can access?

Since access follows the connected Atlassian account’s permissions, Notion admins cannot select specific Jira projects.


### Does Notion store our Jira data?

No. The Atlassian connection looks up information in Atlassian when you ask for it. If you disconnect the old Jira AI Connector, Notion removes the Jira data from that connection.


### Which plans include the Atlassian connection?

Connecting apps to Notion AI is available on Business and Enterprise plans. During a trial, you can also connect apps on other plans using your AI credits.


### How do I remove the legacy Jira AI Connector?

You can keep the original Jira AI Connector running alongside the Atlassian connection until December 31, 2026. Once your team has upgraded, a workspace owner can remove it:

1. In Notion, go to `Settings` → `Notion AI`.

2. Select **⚙️**next to **Jira**, then `Settings` → `Disconnect`. When you disconnect, Notion removes the Jira data from the old connection.

3. In Jira, a Jira admin can uninstall the **Notion-AI-Connector** app from the Jira apps admin page. The Atlassian connection doesn't need this app.

Disconnecting directly in Notion removes the old connection's data faster than disconnecting Notion from the Jira side.


### Who do I contact for help?

Message support, or reach out to your Notion account team.
