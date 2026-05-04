---
title: "Custom Agents"
emoji: "🤖"
description: "With Custom Agents, you build shared workflows that automate recurring work for your team — running exactly how you need them, behind the scenes 🤖"
url: "https://www.notion.com/help/custom-agents"
key: "help:custom-agents"
coverImage: "https://img.youtube.com/vi/ojAvnSdsc1I/maxresdefault.jpg"
category: "Custom Agents"
categoryKey: "category:custom-agents"
---

## Use Custom Agents to automate work in Notion

Custom Agents automate recurring, manual workflows for your entire team. They run automatically in the background on set triggers using your existing docs and databases as context.

Set them up once — building a workflow for repetitive tasks like weekly reports or triaging feedback — and it becomes a shared resource the whole team relies on.

### What are Custom Agents?

Custom Agents live inside Notion and run on your instructions. Once you set them up, they can:

* Read from Notion pages and databases and certain connected apps.

* Run on recurring triggers and workspace events.

* Take actions such as posting reports, filing bugs, updating records, or sending messages.

Unlike Notion Agent, Custom Agents are designed to run automatically in the background based on triggers and schedules.

## Key features of Custom Agents

#### Use your existing docs and databases as context

Custom Agents are built directly into Notion. Agents use your existing docs and databases as context and connect across Slack, increasing productivity. With Custom Agents, you can:

* `@mention` Agents in Notion pages, database properties, and comments.

* Attach them to database events (for example, when a page is created or updated).

* Let them monitor your workspace and connected tools according to the triggers you configure.

#### Handle recurring work automatically with triggers

Use triggers for Custom Agents to run without you manually starting them each time. Set a trigger once, then the work happens continuously in the background.

* Run on a schedule (daily, weekly, monthly, and more).

* React to events in Notion and Slack.

* Continue running in the background once you publish them.

This unlocks automated workflows like regular reports, triage queues, and knowledge maintenance, helping you reclaim your time.

#### Safe and transparent by design

Agents act only on the pages, databases, and external apps you explicitly grant access to. They never have full workspace access by default, reducing risk.

* Control who can edit, run, or interact with each Agent.

* View activity logs to see what an Agent did and when.

* Use Version history to review or restore past configurations.

* Keep runs reviewable and reversible so you can safely iterate.

## Who can use Custom Agents?

* You must be on Notion’s Business or Enterprise Plan. Learn more about [pricing for Custom Agents](https://www.notion.com/help/custom-agent-pricing).

* Use desktop or web to build, edit, see, or interact with Custom Agents.

## Build a Custom Agent

You can build a Custom Agent from multiple locations. The primary entry point is the `Agents` section in the sidebar.

1. Go to the `Agents` section in the sidebar and select `+` to create a new Custom Agent.

[](//videos.ctfassets.net/spoqsaf9291f/4Tw3jRMhrmbB3nG4ceSMsR/8a7c8e6565d5786e2cb667d1e22fd7de/Create_a_new_Custom_Agent.mp4)

2\. Choose how you want to start:

* **Create with AI chat**

  * In the chat, describe what you want the Agent to do using natural language.

  * Review the draft instructions, triggers, and access that Notion AI generates and iterate.

  * Save.

* **Create from a template**

  * Choose a template.

  * Review the draft instructions, triggers, and access that Notion AI generates and iterate.

  * Save.

* **Create from scratch**

  * Select `Create blank`.

  * Start from an empty instructions field or chat with you.

  * Craft your instructions manually, following best practices for clear, concrete instructions. Define what the Agent should do, how it should behave, and what work it should handle.

  * Set triggers, access, your AI model until they match your workflow.

  * Save.

To create clear instructions for your Agent, start with the job and outcome you want. Then add concrete steps, inputs, and outputs. Use examples when you have them.

**Tip**: Use our [Custom Agent templates](https://www.notion.com/custom-agent-templates) as a starting point.

## Configure triggers and schedules

Triggers determine when your Agent runs. You can combine multiple trigger types for a single Agent.

#### Automate workflows with recurring, time-based schedules

Use recurring schedules to run Agents on a cadence.

1. Open your Custom Agent's `Settings`.

2. Go to the `Triggers` section.

3. Add a `Recurring` trigger.

4. Choose when you want the Agent to run:

   * Select a frequency (every day, week, month, or year).

   * Set a specific time, including timezone (for example, "every day at midnight PST").

5. Review the next scheduled run time to confirm the schedule is correct.

6. Save your trigger.

#### Use Notion triggers

Notion triggers run your Agent based on events in your workspace. You can trigger Agents when:

* A comment is added to a page.

* A page is added to a database.

* A property is updated in a database.

* A page is removed from a database.

**To add a Notion trigger:**

1. Open your Custom Agent's `Settings` and select `Triggers`.

2. Choose a `Notion` trigger type.

3. Specify:

   * The page or database to watch.

   * The event (for example, "page created in database").

   * Any additional filters or conditions if available.

4. Save.

#### Use Slack triggers

Slack triggers allow Agents to watch for events in both public and private Slack channels.

**Setup requirements**

Before you can set up a Slack trigger, a Slack workspace admin must first connect Slack for Custom Agents. This gives Custom Agents the required read and write permissions to operate in Slack. Once the integration is enabled, you can configure triggers based on new messages or emoji reactions.

**Agents can watch for:**

* A **message posted&#x20;**&#x74;o a channel.

* An **emoji reaction&#x20;**&#x61;dded to a message.

* A **thread started&#x20;**&#x69;n a channel.

* The Custom Agent **mentioned&#x20;**&#x69;n a message.

  * Note: To trigger an Agent by mentioning it in Slack, your Slack workspace admin must first allow all members to create user groups. Once this setting is enabled, anyone can trigger the Agent by mentioning its name in the associated Slack channel.

**To add a Slack trigger:**

1. Connect Slack to your Agent during setup if you have not already.

2. In `Triggers`, add a `Slack` trigger.

3. Select:

   * The event type.

   * The channel to monitor.

   * Any additional filters or conditions if available.

4. Save.

Whenever a Custom Agent is triggered in Slack, it can show an typing indicator (“Working on it…”) to signal that it’s processing the request. This doesn’t always mean the Agent will reply. You can switch this off anytime by going to the trigger settings.

**To turn off the typing indicator:**

1. Go to your Custom Agent.

2. In` Triggers`, select the Slack trigger.

3. Select` More settings`, then uncheck `Show typing indicator in Slack`.

Note:

* If you want to @mention a Custom Agent by name in Slack, your Slack workspace owner needs to allow members to create user groups. This is a Slack requirement (not a Notion setting).

* Saved or "Later" messages in Slack are not supported.

## Connect Notion, web, and external apps

Custom Agents only use content you explicitly grant them access to for their work. You configure this in each Agent's access settings.

#### Give a Custom Agent access to content in your workspace

To control what an Agent can see in Notion:

1. Open the Custom Agent's `Settings`.

2. Go to the `Tools and access` section.

3. Add specific pages or databases the Agent should use as context:

   * Add focused pages and databases for targeted workflows (for example, "Customer tickets," "Bugs," "Incidents").

   * Grant access to `Pages shared with everyone in Notion` if you want broad coverage that includes content throughout the workspace.

4. Keep access restricted to "`none`" or a small set of pages if you want a narrower scope.

Linking to Notion pages in your **Instructions** doesn’t add them to the connected **Tools and Access**.

### Allow or block web access

Agents can optionally browse the web when needed. Use web access when your workflow depends on external information. Keep it off for strictly internal workflows or when you want stricter control over sources. To control web access:

1. Open `Settings` for your Agent.

2. Find the `Web access `toggle.

3. Turn web access `on `to let the Agent retrieve information from the internet.

4. Turn web access `off` to restrict the Agent to Notion and configured apps only.

### Give Custom Agents access to Slack

Custom Agents can read and write to Slack through a dedicated integration. Before connecting Slack to your Custom Agent, an admin must first connect the [Slack AI connector](https://www.notion.com/help/notion-ai-connectors-for-slack) to your workspace via the Notion AI Settings. Agents can do the following:

* Read from select public and private channels.

* Post messages, replies, and updates only to the specific channels you select.

* React to threads and use information from Slack as context.

Slack Enterprise Grid is not supported.

**To connect Slack:**

1. When setting up the Agent, follow the prompt to connect Slack.

2. Make sure the Slack account uses the same email as your Notion account.

3. Approve the requested scopes in Slack's authorization flow.

4. Choose which channels the agent can access.

## Choose a model for your Custom Agent

Custom Agents can run on different large language models. This lets you balance speed, cost, and quality. You can adjust the model over time if your workflow changes or you see different performance needs. Supported models include Claude, GPT, and Gemini. Auto is the recommended default.

Learn how usage is tracked in the [Notion credits dashboard](https://www.notion.com/help/notion-credits-dashboard#what-is-the-notion-credits-dashboard).

**To choose a model:**

1. Open your agent's `Settings`.

2. Go to the `Model` section.

3. Select a specific model if you want consistent behavior, or select Auto to let Notion choose the best model per request.

4. Save.

## Share agents and manage access

Custom Agents behave like Notion pages when it comes to sharing with others in your workspace, with a few differences.

### Share agents with your team

When shared, Agents can appear in the sidebar under an Agents section, in search results, and in any workspace area that lists or references agents.

**To share an agent:**

1. Open the Custom Agent.

2. Click `Share`.

3. Add people, groups, or the entire workspace.

### Permission levels

Agents use a simplified set of permission levels:

* `Full Access`**&#x20;**&#x55;sers with `Full Access` permissions to an Agent can configure instructions, triggers, access, and models, view and manage activity logs, and run or interact with the Agent.

* `Can Edit`**&#x20;**&#x55;sers with `Can Edit` permissions to an Agent can modify instructions and configuration and review activity.

* `Can View and Interact`**&#x20;**&#x55;sers with `Can View and Interact `permissions to an Agent ca&#x6E;**&#x20;**&#x72;un the agent and chat with it and view the Settings page (Triggers, Instructions, Tools & Access) in read-only mode. They cannot edit or share the Agent.

Users without access may still trigger or interact with agents configured to respond to events like Slack messages in accessible channels.

## Maintaining your Custom Agent

Once your Custom Agent is built, it will appear in the sidebar. Every Custom Agent page has three core tabs. Use these tabs together to design, test, and maintain an agent over time.

1. `Chat` A private or shared 1:1 conversation area for that specific agent.

   * Useful for testing new instructions, asking the agent to run one-off tasks, and iterating on behavior.

2. `Activity` A log of every agent run visible for users with `Full Access`.

   * Logs include what triggered the run, actions taken, and any errors or failures.

3. `Settings` The control center for the agent.

   * The Settings panel includes Agent `Instructions`, `Triggers`, access permissions, and model selection.

Treat configuration as a conversation. Use Custom Agent **Chat** to test, debug, and iterate on your instructions. Ask the agent to run one-off tasks, provide context on errors, and test different scenarios.

### Use the Settings tab to edit an agent

1. Open the `Agent` page.

2. Go to the `Settings` tab.

3. Update `Instructions`, `Triggers`, access to pages, databases, and external tools, or model selection.

4. Save and publish your changes.

5. Use the `Chat` tab and the `Activity` tab to verify that the agent behaves as expected after edits.

### Undo a change with version history

To restore a previous version of your Custom Agent:

1. Open the `Agent` page.

2. Access `Version history`.

3. Review past versions to see:

   * Who made changes.

   * When they were made.

   * What changed in each version.

4. Select a version you want to restore.

5. Confirm to revert the agent to that version.


## FAQs

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

  * **Enterprise&#x20;**&#x70;lan Admins can restrict access by going to **`Settings`** > **`Notion AI`** >

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
