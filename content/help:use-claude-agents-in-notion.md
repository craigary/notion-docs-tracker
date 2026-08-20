---
title: "Use Claude agents in Notion (beta)"
emoji: null
description: null
url: "https://www.notion.com/help/use-claude-agents-in-notion"
key: "help:use-claude-agents-in-notion"
coverImage: null
category: "External Agents"
categoryKey: "category:external-agents"
---

**Note:** Claude agents in Notion is currently in beta and subject to the beta terms of your agreement.

Claude agents keep your workflow inside Notion, while Anthropic runs the agent behind the scenes. You get Claude’s coding and file-editing strengths, plus Notion as the place where your team collaborates. This lets you chat with Claude agents directly in Notion, delegate work, and see results without switching apps.

## Who can use Claude agents

* Claude agents in Notion is available on Business and Enterprise plans.

* For Enterprise and HIPAA workspaces: Claude agents are turned off by default. A workspace owner needs to turn them on in `Settings` → `Notion AI` → `Agent` → `Manage external agents`.

* We're rolling this out gradually, so you might not see it right away.

## What to know before you start

* Claude agents are hosted by Notion via Anthropic's infrastructure.

* No Anthropic account is required (using your own Anthropic account isn’t possible).

## How billing works

Claude agents run through Notion credits, which are charged per run. <!-- -->You don't need an Anthropic account or API key.

Notion prices credits the same as [Custom Agents](https://www.notion.com/help/buy-and-track-notion-credits-for-custom-agents#how-custom-agents-use-credits). Tasks with more steps, more reading, or more tool use cost more credits.

[Learn more about Notion credits →](https://www.notion.com/help/category/notion-credits)

## What Claude agents can do in Notion

What Claude agents can do depends on what your workspace allows.

Claude agents can:

* Chat with you and your teammates in Notion to answer questions and coordinate work.

* Work from shared docs and task boards. For example, you can assign a task and ask the agent to help.

* Create or update content (if the agent has edit access).

* See only what you share with them. If an agent can’t see or edit something, it usually means the agent doesn’t have access.

## What Claude agents can't do

* Browse the web.

* Call other agents during a session.

## Set up a Claude agent

1. In Notion, go to `Agents` in the sidebar → `New Agent` → `Claude`.

2. Pick a starting point:

   * **Start with a default template:** Use a template for common tasks like coding. Some templates connect to GitHub using your personal access token.

   * **Start from scratch:&#x20;**&#x42;uild your own Claude agent, then set up its instructions, triggers, and connections yourself.

3. Set up how the agent runs. [Learn about triggers and schedules →](https://www.notion.com/help/custom-agents#configure-triggers-and-schedules)

## How permissions work

* Claude agents can only see what you share with them. Permissions are set per agent and aren’t inherited from whoever starts a run.

* Claude agent permissions work the same way as Custom Agents. [Learn how agent permissions work →](https://www.notion.com/help/custom-agents-sharing-and-permissions#how-custom-agent-permissions-work)

* You can give different groups different levels of access. This includes can view and interact, can edit, or full access. [Learn more about access →](https://www.notion.com/help/custom-agents-sharing-and-permissions#who-can-access-your-custom-agent-and-its-resources)

If something isn't working, check what the agent is shared on and what level of access it has.

## Workspace admin controls

Workspace admins can switch off Claude agents by going to `Settings` → `Notion AI` → `Agents` → `Manage external agents`.

Claude agents are off by default for Enterprise accounts, HIPAA workspaces, and other workspaces with model restrictions.

## If something isn’t working

Try these steps in order:

1. Confirm the feature is available in your workspace. Access may be limited as this rolls out gradually.

2. Confirm the agent was added to your workspace. During rollout, this may require onboarding.

3. Check what the agent is shared on. Make sure it has access to the right pages or databases. Also confirm the access level (for example, **Can view** vs **Can edit)**.

4. If you’re using an in-house setup, expect an approval step. Depending on your rollout, an agent may need review before it can appear in your workspace.


## FAQs