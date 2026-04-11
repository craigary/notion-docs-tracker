---
title: "Custom Agents sharing and permissions"
emoji: "🤖"
description: "Learn how Custom Agent permissions work in Notion, and why they differ from Notion AI 🤖"
url: "https://www.notion.com/help/custom-agents-sharing-and-permissions"
key: "help:custom-agents-sharing-and-permissions"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/136G6jgrCreFy3jLeY0C62/785595f51b4785d6a9baf9bf330d1f6c/custom_agents__1_.png"
category: "Custom Agents"
categoryKey: "category:custom-agents"
---

**Note:** Custom Agents are currently in beta and subject to the beta terms of your agreement.

Custom Agents automate work across your Notion workspace and connected tools. Understanding how permissions work helps you safely share agents while keeping your data secure.

**Key difference from Notion Agent:**

* **Notion AI&#x20;**&#x61;cts as you and respects your *personal&#x20;*&#x70;ermissions. It only sees what you can see.

* **Custom Agents&#x20;**&#x61;ct as specialized team members with their *own&#x20;*&#x70;ermissions. They have access to specific resources you grant them.

## How Custom Agent permissions work

Custom Agents have two types of permissions that work together:

1. **What the agent can access:&#x20;**&#x54;he specific Notion pages, databases, and connected apps you grant the agent permission to use.

2. **Who can access the agent:&#x20;**&#x54;he people you share the agent with and what they can do with it.

**Note:&#x20;**&#x43;ustom Agents have their own permissions. When you share a Custom Agent, you're giving your team access to everything the agent can see. Agent users can retrieve information from resources they lack access to, or make edits if the agent has read and write permissions to those resources.

Learn how to monitor Custom Agents usage with the [Notion credits dashboard](https://www.notion.com/help/notion-credits-dashboard).

**Example:**

Your finance team creates a Custom Agent called **BudgetBot** to help answer questions about spending and budget approvals.

* The finance team gives **BudgetBot&#x20;**&#x61;ccess to private pages like budget templates, approval workflows, and department spending guidelines.

* The finance team gives department leads `Can view and interact `permissions to **BudgetBot**.

* Department leads with access to **BudgetBot&#x20;**&#x63;an now ask it questions and get answers using the finance team’s internal docs, even though the leads don't have direct access to those pages.

This empowers department leads to make informed decisions faster. They can ask BudgetBot for any budget information, from quick summaries to full document content, without needing direct access to every finance team page.

## What your Custom Agent can access

When you create a Custom Agent, you explicitly choose what it can access in the **Tools and Access** settings. Custom Agents can access:

* **Notion pages and databases&#x20;**- Select specific pages or databases.

* **Connected apps&#x20;**- <!-- -->Select <!-- -->Slack channels, MCP, Calendar, Mail.

* **Permission levels&#x20;**- Can view, Can comment, Can edit.

By default, new agents have no access to all pages in the workspace. Creators must explicitly enable this and accept the warning modal. Enterprise workspace admins can control who can create a Custom Agent, see all agents in a workspace, and disable triggers or override permissions on any agent.

The agent can **only** access resources you explicitly give it permission to use. It can't access anything else in your workspace. There are no inherited permissions from anyone (whether the creator or the user of the agent).

This also includes database row permissions. A Custom Agent responds using *the agent’s own access*, not the permissions of the person who triggered it. So if the agent can see more rows than the end user, the agent may expose information the end user can’t access directly.

## Permission-level requirements

* To grant **view access&#x20;**&#x74;o a Notion resource, you must have at least view access on that resource.

* To grant any **greater level of access&#x20;**&#x62;eyond view, you must have **Full Access&#x20;**&#x74;o share that resource.

**Note:&#x20;**&#x47;ive agents access to only the specific resources they need for their job. Avoid granting workspace-wide access. There isn’t a way to grant higher than “Can View” to all pages in a workspace.

## Who can access your Custom Agent and its resources

Share your Custom Agent with your team just like a Notion page by clicking `Share` at the top of the page. Custom Agents have three permission levels that determine who can use and edit them.

#### Can view and interact

* Use the agent to ask questions or run tasks.

* See the agent's answers and results.

* View agent settings and instructions in read-only mode.

#### Can edit

* Everything in `Can view and interact`.

* View and modify agent instructions.

* View all chats users have had with the Custom Agent.

* Add or remove Notion pages and databases.

* Ability to edit settings and instructions, with the exception of third-party connections others enabled.

#### Full access

* Everything in `Can edit`.

* Share the agent with others.

* Delete the agent.

## Multiple users can collaborate to build and maintain a Custom Agent

For integrations, Notion validates that anyone configuring the agent has access to the resource they're editing. For example, if you set up a Slack channel that only you can access, other editors can't edit or view that resource—they can only delete it or set up a new one.

## Guest and restricted member access

#### **What guests and restricted members can do:**

* View the output agents have produced in Notion pages or databases that are shared with them.

* Make edits to pages or databases which may trigger already configured Custom Agents to run.

#### **What guests and restricted members cannot do:**

* Create Custom Agents.

* Edit agent settings (unless explicitly given

  `Can edit `permission).

* Ask questions and receive answers based on what the agent can access.

**Note:&#x20;**&#x42;efore sharing widely, review what resources your agent accesses in Tools and Access and consider whether everyone you’re sharing with should see that information.

## Workspace admin controls

Workspace admins can manage Custom Agents across the organization using the following tools and controls.

**Note:** Admins should regularly review agents using these tools, remove unnecessary access, and archive unused agents.

### Agent Directory

* Search and view all Custom Agents in your workspace.

* See who created each agent and when it was last active.

* Disable and re-enable agent editing, chatting, and triggers to stop automated runs.

* **Enterprise only:** Change permissions and delete any agent, even if you don't have access to it.

To access the **Agent Directory**, go to `Settings`, select `Notion AI` from the sidebar, enter the `Agents` tab. Browse or search for agents in your workspace.

![Image of agent directory within Notion AI.](https://images.ctfassets.net/spoqsaf9291f/7uJls8AxeFIEqV3sfbWuzT/75deef28ea52d389a8642ece9026bcc3/Agent_Directory.png)

## Enterprise plan controls

### Creation controls

Restrict who can create Custom Agents:

1. Go to `Settings `> `Notion AI`.

2. Enter `Agents `tabs and go to `Control who can create agents`.

3. Choose who can create agents: `All workspace members `(default), `Workspace owners only`, or `Workspace owners + added groups only.`

![Agent creation settings within Notion Ai.](https://images.ctfassets.net/spoqsaf9291f/2DY5bCPMynBG0uIUeaFRS1/4f673a9ad0923294abafd9d9c999b091/agents_creation_settings.png)

### Content Admin Search

* See what pages and databases each Custom Agent can access.

* Manage agent permissions on specific resources.

* Remove agents from accessing sensitive content.

To access Content search, go to `Settings` > `Content search` and use the Shared with filter to select a Custom Agent.

**Note:&#x20;**&#x41;ny page or database owner can remove an agent from their resource—even if they don't have access to the agent itself.

![Content search](https://images.ctfassets.net/spoqsaf9291f/1drdK1xM5XPd0I6oOLW596/3955b04bdf85f090fc3649f9042e77b4/Content_search.png)

### Audit Log

* Full history of all Custom Agent actions.

* Filter by agent, user, date, or action type.

To access the Audit Log, go to `Settings` > `Audit log` and filter for Custom Agent events by choosing the agent from the `Users/Agents` dropdown.

![Audit log](https://images.ctfassets.net/spoqsaf9291f/3A5wr7nqZWoJCSoGAu6day/0e1c5d29ae21ae3ade2474aa4483199a/audit_log.png)

### AI Analytics

* Identify most-used and unused agents.

* Monitor adoption and value.

To access AI Analytics Go to `Settings` > `Analytics` and enter the `AI` **tab.**

![AI analytics](https://images.ctfassets.net/spoqsaf9291f/HCENMeWnF5QtrVSXPogbC/6d1ffe67ad8f5c738f17364fc309f69c/ai_analytics.png)

### Transfer ownership

Transferring ownership ensures business-critical agents continue running when users leave the workspace. After 7 days of no ownership, the agent stops running.

1. Go to `Settings` > `Members` and enter the `Recently Left `tab.

2. Recently left users will have agents show up as "private agents" in the content re-provisioning flow.

3. Choose the new owner and confirm the transfer.

Transferring ownership is also supported via Public API.


## FAQs

### What's the difference between Custom Agents and Notion AI?

**Notion AI** acts as you—it respects your personal permissions and only sees what you can see.

**Custom Agents** act as specialized team members with their own permissions. They have access to specific resources you grant them, and anyone who uses the agent can benefit from that access.

Notion AI is on-demand, whereas Custom Agents are **autonomous** and can run automatically in the background.

Learn more about pricing and [how Custom Agents use Notion credits](https://www.notion.com/help/custom-agent-pricing#how-custom-agents-use-notion-credits).


### Can a Custom Agent access something I can't see?

Yes. If someone shares a Custom Agent with you, that agent might have access to resources you don't personally have access to. You only see information the agent includes in its responses. This is by design, allowing agents to coordinate work across permission boundaries.

However, if read and write access is enabled for the resource, the agent can edit those resources on your behalf. This means you can instruct the agent to make changes, not just retrieve information.


### What happens if I remove someone from a private page that a Custom Agent can access?

The person will lose direct access to that page, but if they can still use the Custom Agent, they might be able to get information from that page through the agent.

If you want to fully prevent access, either remove the page from the agent's access, or remove that person's access to the agent.


### Can I see what resources a Custom Agent has access to before using it?

Anyone with `Can view and interact` permission can see the agent's settings page, which shows all connected resources.

To view an agent's settings, open the Custom Agent page, go to the **Settings** tab, and review the **Tools and access** section.


### What if I accidentally give an agent too much access?

You can remove resources from an agent's **Tools and Access** settings at any time. The changes take effect immediately.

**If you own a page or database:** Remove the agent from that resource directly through the share menu—even if you don't have access to the agent itself.

**If you're an Enterprise workspace owner:** Use the Agent Directory to modify any agent's permissions, even if you didn't create it.


### Can I stop a Custom Agent from accessing my content?

Yes. As a page or database owner, you can remove any Custom Agent from your resource through the share menu.

To remove an agent, open the page or database, click **Share**, find the Custom Agent in the list, and click the **X** to remove it.


### How do I know if an agent is accessing my content?

Custom Agents appear in the share menu of any page or database they have access to—just like people do.

To check, open the page or database, click `Share`, and look for Custom Agents in the list.
