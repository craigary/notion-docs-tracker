---
title: "Custom Agents"
description: "Build AI teammates that can take action in your workspace. Learn how to create and refine Custom Agents, then connect them to MCP, Calendar, and Mail to make them even more powerful."
url: "https://www.notion.com/help/category/custom-agents"
key: "category:custom-agents"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/CGvbKADJG2JbVyR2akeT8/0189c17ff957e7604ba937dfda8e5e2a/security_best_practices__1_.png"
---

1 help:custom-agents
2 help:best-practices-for-creating-and-optimizing-a-custom-agent
3 help:buy-and-track-notion-credits-for-custom-agents
4 help:mcp-connections-for-custom-agents
5 help:manage-custom-agents-with-the-admin-api
6 help:connect-calendar-to-custom-agents
7 help:custom-agents-sharing-and-permissions
8 help:mobile-custom-agents
9 help:connect-mail-to-custom-agents

## Video

https://www.youtube.com/watch?v=ojAvnSdsc1I

## Guides

- [Build your first Custom Agent](https://www.notion.com/help/guides/build-your-first-custom-agent)

- [Best practices for improving your Custom Agent](https://www.notion.com/help/guides/best-practices-for-improving-your-custom-agent)

- [Automate project updates and reporting with Custom Agents](https://www.notion.com/help/guides/automate-project-updates-and-reporting-with-custom-agents)

- [Build a multi-agent system that turns customer feedback into a monthly report](https://www.notion.com/help/guides/build-a-multi-agent-system-that-turns-customer-feedback-into-a-monthly-report)

- [How to build a Meeting Assistant in Notion with Custom Agents](https://www.notion.com/help/guides/build-ai-meeting-assistant-with-custom-agents)

- [How to automate sales prospecting in Notion with Custom Agents](https://www.notion.com/help/guides/how-to-automate-sales-prospecting-in-notion-with-custom-agents)

- [Build a Custom Agent that delivers weekly market insights](https://www.notion.com/help/guides/build-a-custom-agent-that-delivers-weekly-market-insights)

- [Automate client follow-up emails with Custom Agents](https://www.notion.com/help/guides/automate-client-follow-up-emails-with-custom-agents)

- [An admin’s guide to getting started with Custom Agents](https://www.notion.com/help/guides/admin-guide-to-getting-started-with-custom-agents)

- [Connect Custom Agents to your tool stack with MCP integrations](https://www.notion.com/help/guides/connect-custom-agents-to-mcp-integrations)

## FAQ

### How is this different from Notion Agent in the bottom right corner?

Notion Agent helps you:

* Draft, edit, and summarize content.

* Answer questions about pages and databases.

* Perform one-off tasks while you work.

Custom Agents:

* They follow precise instructions you define.

* They can run autonomously in the background via triggers and schedules.

* They operate only on the pages, databases, and external tools you explicitly grant.

Notion Agent is on-demand, whereas Custom Agents are **autonomous**.

### If a run fails, how can I debug it?

To debug a run:

1. Open the agent page.

2. Go to the **`Activity`** tab in the agent's **`Settings`** or from the agent chat view.

3. Find the failing run in the list.

4. Open it to see:

   * What triggered the run.

   * What the agent "thought" and did at each step.

   * Any error messages or explanations.

If the agent behaved incorrectly:

* Adjust its instructions or triggers.

* Re-run with updated configuration.

* If something looks wrong or suspicious, provide a thumbs-down and a detailed description where available so the team can improve the system.

### What Slack app do I need to connect?

To use Slack with Custom Agents:

1. Make sure Slack is connected with the **same email address** you use for Notion.

2. When prompted during agent setup, connect the Slack app even if you already use Slack elsewhere in Notion.

3. Approve access and configure which channels the agent can read or write to.

### The Agent showed "Working on it..." in Slack, but never replied. Why?

The “Working on it…” typing indicator appears as soon as a Custom Agent is triggered. Sometime the Agent will decide not to reply (based on instructions), or may time out before it can send a message. If this happens, the typing indicator will disappear automatically.

If you want to avoid this, you can always turn off the typing indicator in the Slack trigger’s settings, or update the agent’s instructions so it’s more likely to respond to the situations you care about.

### Who can create and see Custom Agents?

* Custom Agents are available to **everyone in the workspace** by default.

  * **Enterprise **plan Admins can restrict access by going to **`Settings`** > **`Notion AI`** >

    **`Agents`** > **`Control who can create agents`**.

* For each agent:

  * The creator decides who can access it and at what level (`Full access`, `Can edit`, `Can interact`).

  * In Slack, anyone in a channel can see messages posted by that channel's agents.

  * Anyone with access to the agent can see its outputs, even if they don’t have access to the underlying Slack private channel.

Learn more about Custom Agent [sharing & permissions here →](https://www.notion.com/help/custom-agents-sharing-and-permissions)

### How will I know where this agent is going to run?

While configuring an agent, check:

1. **Triggers** to see:

   * Which schedules are active.

   * Which Notion databases or pages are watched.

   * Which Slack channels or other apps are connected.

2. **Access / Permissions** to see:

   * Which pages, databases, and external sources the agent can use.

3. **Activity** to see:

   * Where the agent has already run and what it did.

After you publish:

* Use the **Activity** tab and logs to confirm agents are running only where expected.

* Review runs regularly to keep behavior aligned with your workflows.

### Why can't I access certain models (for example: Claude Fable 5) anymore?

Your workspace has reached the fair use limit. Some AI models are temporarily unavailable for features like Notion Agent, Custom Agents, image generation, and page translation. Access resets in six hours.

### I embedded a Custom Agent in a page. Why can't my teammates chat with it?

Being able to see the page doesn't mean someone can use the agent on it. To chat with an embedded Custom Agent, a person needs access to the agent itself. Open the agent, select `Share`, and add them.

If you also want the agent to answer questions about the page it lives on, add that page under the agent's `Tools and access` settings.