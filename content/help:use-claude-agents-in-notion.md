---
title: "Use Claude agents in Notion (beta)"
emoji: "🖇️"
description: "Learn about what Claude Agents can do in Notion, how to set one up, and how permissions work 🖇️"
url: "https://www.notion.com/help/use-claude-agents-in-notion"
key: "help:use-claude-agents-in-notion"
coverImage: null
category: "External Agents"
categoryKey: "category:external-agents"
---

**Note:** Claude Agents in Notion is currently in beta and subject to the beta terms of your agreement.

Claude Agents keep your workflow inside Notion, while Anthropic runs the agent behind the scenes. You get Claude’s coding and file-editing strengths, plus Notion as the place where your team collaborates. This lets you chat with Claude Agents directly in Notion, delegate work, and see results without switching apps.

## Who can use Claude Agents

* Claude Agents in Notion is available on Business and Enterprise plans.

* For Enterprise and HIPAA workspaces: Claude agents are turned off by default. A workspace owner needs to turn them on in `Settings` → `Notion AI` → `Agent` → `Manage external agent providers`.

* We're rolling this out gradually, so you might not see it right away.

## What to know before you start

* Claude Agents are hosted by Notion via Anthropic's infrastructure.

* No Anthropic account is required (using your own Anthropic account isn’t possible).

## How billing works

Claude Agent runs through [Notion credits](http://www.notion.com/help/notion-credits), which are charged per run.

## What Claude Agents can do in Notion

What Claude Agents can do depends on what your workspace allows.

Claude Agents can:

* Chat with you and your teammates in Notion to answer questions and coordinate work.

* Work from shared docs and task boards. For example, you can assign a task and ask the agent to help.

* Create or update content (if the agent has edit access).

* See only what you share with them. If an agent can’t see or edit something, it usually means the agent doesn’t have access.

## What Claude Agents can't do

* Browse the web.

* Call other agents during a session.

## Set up a Claude Agent

1. In Notion, go to `Agents` in the sidebar → `New Agent` → `Claude`.

2. Pick a starting point:

   * **Start with a default template:** Use a template for common tasks like coding. Some templates connect to GitHub using your personal access token.

   * **Start from scratch:&#x20;**&#x42;uild your own Claude Agent, then set up its instructions, triggers, and connections yourself.

3. Set up how the agent runs. [Learn about triggers and schedules →](https://www.notion.com/help/custom-agents#configure-triggers-and-schedules)

## How permissions work

* Claude Agents can only see what you share with them. Permissions are set per agent and aren’t inherited from whoever starts a run.

* Claude Agent permissions work the same way as Custom Agents. [Learn how agent permissions work →](https://www.notion.com/help/custom-agents-sharing-and-permissions#how-custom-agent-permissions-work)

* You can give different groups different levels of access. This includes can view and interact, can edit, or full access. [Learn more about access →](https://www.notion.com/help/custom-agents-sharing-and-permissions#who-can-access-your-custom-agent-and-its-resources)

If something isn't working, check what the agent is shared on and what level of access it has.

## Workspace admin controls

Workspace admins can switch off Claude Agents by going to `Settings` → `Notion AI` → `Agents` → `Manage external agent providers`.

Claude Agents are off by default for Enterprise accounts, HIPAA workspaces, and other workspaces with model restrictions.

## If something isn’t working

Try these steps in order:

1. Confirm the feature is available in your workspace. Access may be limited as this rolls out gradually.

2. Confirm the agent was added to your workspace. During rollout, this may require onboarding.

3. Check what the agent is shared on. Make sure it has access to the right pages or databases. Also confirm the access level (for example, **Can view** vs **Can edit)**.

4. If you’re using an in-house setup, expect an approval step. Depending on your rollout, an agent may need review before it can appear in your workspace.


## FAQs

### Is this the same as Notion Custom Agents?

No. Custom Agents are built and run entirely in Notion. Claude Agents run on Claude's systems, but you interact with them in Notion.


### How does billing work? Do Claude Agents cost Notion credits?

Yes. Claude Agents run on Notion credits and are hosted in Notion, giving you a ready-to-use partner agent that can work inside your workspace. Teams can assign work, review progress, and take action in one place. Notion also handles provider access, keys, and infrastructure so you don’t have to set that up or maintain it with enterprise-grade permissions and controls.

[Learn more about how Notion credits work →](https://www.notion.com/help/custom-agent-pricing#what-are-notion-credits)


### Can I use my own Anthropic account for billing?

No. Claude usage runs through Notion credits. Using your own Anthropic account isn’t possible.


### Where can I view my Claude Agent activity in Notion?

Claude sessions appear in Agent Activity and on the page or task where the agent runs. You can also view credit usage in the Notion credits dashboard and in the Insights section of each Claude Agent.


### Do Claude Agents support zero data retention (ZDR)?

No. Notion's zero data retention commitments don’t extend to Claude Agents in Notion. Claude Agents are implemented via Claude Managed Agents (CMA), which is stateful by design and not eligible for zero data retention. Anthropic stores session data between requests to power the functionality. [Learn more about CMA data retention →](https://platform.claude.com/docs/en/managed-agents/overview#beta-access)


### How do I manage permissions and access for Claude Agents?

A workspace owner needs to switch on Claude Agents (this is off by default for Enterprise accounts). Each agent can only access content that’s been shared with it. Permissions are set at the agent level and are not inherited from whoever starts a run.


### Is this the same as using Claude with MCP?

No. With MCP, you work in the Claude app and it pulls from Notion. With Claude agents in Notion, you stay in Notion the whole time.
