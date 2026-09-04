---
title: "What are Custom Agents?"
emoji: null
description: "With Custom Agents, you build shared workflows that automate recurring work for your team — running exactly how you need them, behind the scenes."
url: "https://www.notion.com/help/custom-agents"
key: "help:custom-agents"
coverImage: "https://img.youtube.com/vi/ojAvnSdsc1I/maxresdefault.jpg"
category: "Custom Agents"
categoryKey: "category:custom-agents"
---

Custom Agents live inside Notion and run on your instructions. Once you set them up, they can:

* Read from Notion pages and databases and certain connected apps.

* Run on recurring triggers and workspace events.

* Take actions such as posting reports, filing bugs, updating records, or sending messages.

* Hand off part of a job to other Custom Agents you give them access to.

Unlike [Notion Agent](https://www.notion.com/help/notion-agent), Custom Agents are designed to run automatically in the background based on triggers and schedules.

Get a personalized walkthrough

Build your first Custom Agent with a personalized and interactive walkthrough that guides you every step of the way.

[Let's go](https://call.withsable.com/agent/agt_GHC95DKDsjv5h5uAqS8Pa)

## Use Custom Agents to automate work in Notion

Custom Agents automate recurring, manual workflows for your entire team. They run automatically in the background on set triggers using your existing docs and databases as context.

Set them up once to handle repetitive tasks like weekly reports or triaging feedback, and they become a shared resource the whole team relies on.

## Key features of Custom Agents

#### Use your existing docs & databases as context

Custom Agents are built directly into Notion. Agents use your existing docs and databases as context and connect across Slack, increasing productivity. With Custom Agents, you can:

* `@mention` Agents in Notion pages, database properties, and comments.

* Attach them to database events (for example, when a page is created or updated).

* Let them monitor your workspace and connected tools according to the triggers you configure.

#### Handle recurring work automatically with triggers

Use triggers for Custom Agents to run without you manually starting them each time. Set a trigger once, then the work happens continuously in the background.

* Run on a schedule (daily, weekly, monthly, weekends only, and more).

* React to events in Notion and Slack.

* Continue running in the background once you publish them.

This unlocks automated workflows like regular reports, triage queues, and knowledge maintenance, helping you reclaim your time.

#### Safe & transparent by design

Agents act only on the pages, databases, and external apps you explicitly grant access to. They never have full workspace access by default, reducing risk.

* Control who can edit, run, or interact with each Agent.

* View activity logs to see what an Agent did and when.

* Use Version history to review or restore past configurations.

* Keep runs reviewable and reversible so you can safely iterate.

#### **Audit log visibility (Enterprise)**

Key configuration and access changes to Custom Agents (like instruction updates, permission changes, and integration additions) are recorded in the [Notion audit log](https://www.notion.com/help/audit-log#custom-agent-events). This helps Enterprise admins track agent changes for security and compliance reviews.

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

## Configure triggers & schedules

Triggers determine when your agent runs. You can combine multiple trigger types for a single agent. You can also use filters to help your agent run only for the pages or messages you care about, or only when certain conditions you set are met (for example, a specific status or a keyword).

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

Notion triggers run your agent based on events in your workspace. You can trigger agents when:

* A comment is added to a page.

* A page is added to a database.

* A property is updated in a database.

* A page is removed from a database.

* An AI Meeting Note is finished.

Some Notion triggers let you add filters, like matching specific property values or limiting runs to pages in a particular database view.

**To add a Notion trigger:**

1. Open your Custom Agent's `Settings` and select `Triggers`.

2. Choose a `Notion` trigger type.

3. Specify:

   * The page or database to watch.

   * The event (for example, "page created in database").

   * Optional filters or conditions (for example, a specific status value or a database view).

4. Save.

#### Use Slack triggers

Slack triggers let agents watch for events in public and private Slack channels.

**Setup requirements**

Before you can set up a Slack trigger, a Slack workspace admin must first [connect Slack to the Notion workspace](https://www.notion.com/help/notion-ai-connectors-for-slack). This gives access to all public channels, and determines whether Notion AI can access private channels. If you want to work with a private channel, you’ll also have to authorize your Slack account.

**Custom Agents can watch for:**

* A message posted to a channel.

* An emoji reaction added to a message.

* The Custom Agent mentioned in a message.

Note: To trigger an agent by @-mentioning it in Slack, your Slack workspace admin must first allow all members to create user groups. Once this setting is enabled, anyone can trigger the agent by mentioning its name in the associated Slack channel.

When setting up any of the triggers above, you can choose to include thread replies so the agent responds to messages within threads, not just top-level messages.

You can reduce noise in high-traffic channels by specifying keywords or phrases to trigger on.

**To add a Slack trigger:**

1. Connect Slack to your Agent during setup if you have not already.

2. In `Triggers`, add a `Slack` trigger.

3. Select:

   * The event type.

   * The channel to monitor.

   * Optional filters (for example, only trigger when a message contains a specific keyword or phrase).

4. Save.

Whenever a Custom Agent is triggered in Slack, it can show a typing indicator (“Working on it…”) to signal that it’s processing the request. This doesn’t always mean the agent will reply. You can switch this off anytime by going to the trigger settings.

**To turn off the typing indicator:**

1. Go to your Custom Agent.

2. In` Triggers`, select the Slack trigger.

3. Select` More settings`, then uncheck `Show typing indicator in Slack`.

Note:

* If you want to @mention a Custom Agent by name in Slack, your Slack workspace owner needs to allow members to create user groups. This is a Slack requirement (not a Notion setting).

* Saved or "Later" messages in Slack are not supported.

## Connect Notion, web, & external apps

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

Custom Agents can read and write to Slack through a dedicated integration.

Before connecting Slack to your Custom Agent, an admin must first connect the Slack workspace to your Notion workspace via the [Slack AI connector](https://www.notion.com/help/notion-ai-connectors-for-slack).

Once connected, Custom Agents can:

* Read from select public and private Slack channels.

* Post messages, replies, and updates only to the specific channels you select.

* React to threads and use information from Slack as context.

To give Custom Agents access to Slack:

* When setting up a Custom Agent, follow the prompt to connect Slack.

* Make sure the Slack account uses the same email as your Notion account.

* Approve the requested scopes in Slack's authorization flow.

* Choose which channels the agent can access.

You can also connect to Custom Agents if your organization uses Slack Enterprise Grid.

## Have one Custom Agent hand work off to another

A Custom Agent can pass part of a job to other Custom Agents during a run. This works when a workflow has separate jobs that need their own instructions, context, access, or model. For example, a reporting agent can hand off planning, data prep, and review to other agents, then put the final report together itself.

#### Set up a hand-off

1. Open the primary agent's `Settings`.

2. Go to the `Tools and access` section.

3. Add the other agents you want it to call.

4. In `Instructions`, say which jobs to hand off and what each sub-agent should send back.

The primary agent uses those results to keep going and finish the work.

#### Pick a model that fits each job

Give the primary agent a stronger model when it needs to plan, hand off work, check results, and pull everything together. Give focused sub-agents faster, lighter models. You can also run most of the workflow on a lighter model and have it ask a stronger agent for help only on the harder parts. That keeps most of the work on efficient models and saves deeper thinking for the steps that need it.

#### Best practices

Results depend on how you set things up. The way you split the work, the models you pick, your instructions, the access you give, and the context you pass between agents all affect quality, speed, and credit use.

* Start with one or two sub-agents. Add more only when each agent has its own clear job.

* Tell the primary agent exactly when to call each sub-agent and what a good response should include.

* Give each sub-agent only the tools and access it needs.

* Test each agent on its own before you test the full workflow.

* Start with `Auto` for models. You can also give the primary agent a stronger model and give simple, focused tasks lighter models. Check the quality of the results before you add more work.

* Check the `Activity` and `Insights` tabs after you test. Compare model use, output quality, and credits across runs. Sub-agent work uses Notion credits, so extra hand-offs can cost more. <!-- -->Hand-offs that use a premium model cost more because premium models spend credits at the model's own price.

## Choose a model for your Custom Agent

Custom Agents can run on different large language models. This lets you balance speed, cost, and quality. You can adjust the model over time if your workflow changes or you see different performance needs.

Supported models include Claude Fable 5 (Business and Enterprise plans only), Claude Sonnet 5, the newest GPT models, Gemini, and Grok. Auto is the recommended default. Your admin may also limit which models Custom Agents can use. Models your admin has turned off appear dimmed in the model menu and can't be selected.

Claude Fable 5 works best for things like in-depth research, complex writing, and tasks that involve lots of steps. Before anyone in your workspace can use it, an admin needs to turn it on. This is because Anthropic handles data from this model a bit differently from other models (see below). If you'd like access, ask your admin to turn it on for Custom Agents in `Settings` → `Notion AI`.

**A note on data handling:** When you use Claude Fable 5, Anthropic may store your prompts and responses for a period of time to keep the model safe and working well. Other AI models available in Notion don't work this way. That's why your admin needs to review and switch it on first.

Learn how usage is tracked in the [Notion credits dashboard](https://www.notion.com/help/notion-credits-dashboard#what-is-the-notion-credits-dashboard).

**To choose a model:**

1. Open your agent's `Settings`.

2. Go to the `Model` section.

3. Select a specific model if you want consistent behavior, or select Auto to let Notion choose the best model per request.

4. Save.

**To turn on Claude Fable 5 for your workspace (admins only):**

1. Go to `Settings` → `Notion AI`.

2. Find Claude Fable 5 and turn it on.

Claude Fable 5 is available for Business and Enterprise plans only. Once it's on, anyone in the workspace can pick it from the model selector in Custom Agent settings.

## Admins: Manage access to models for Custom Agents

If you're a workspace admin on a Business or Enterprise Plan, you can choose which AI models Custom Agents in your workspace can use. This helps keep model usage consistent with your organization's needs.

To manage model access for Custom Agents:

1. Go to `Settings` → `Notion AI` → `General`.

2. Find `Allowed models for Custom Agents`.

3. Find the model you want under the model controls.

4. Set your model restrictions.

5. Save your changes.

A few things to keep in mind:

* If a Custom Agent was using a model that you turn off, it automatically switches to your default model, or to Auto if you haven’t set a default model. You don't need to update each agent yourself.

* Models that are turned off appear dimmed in the model menu, so Custom Agent creators can see they're not available.

## Share agents & manage access

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

## Embed a Custom Agent in a page

You can embed a Custom Agent chat in any Notion page. This puts the agent right where your team works, so people can ask it questions without leaving the page.

To embed a Custom Agent in a page:

1. Open the Custom Agent and copy its link.

2. Paste the link into your Notion page.

3. Select `Embed`.

An interactive chat for that agent will appear on the page. Anyone who has access to the agent can chat with it right there. Embedding an agent in a page doesn't give anyone new access to the agent. To let more people chat with it, share the agent with them first. The agent also can't read the page it's embedded in unless you add that page in the agent's `Tools and access` settings.

Embedded agents work well in places where people have questions:

* Add a Q\&A agent to a project hub or wiki homepage so answers live next to the work.

* Add an onboarding agent to your team's home page so new teammates can get help fast.

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

## Duplicate a Custom Agent

Duplicating a Custom Agent lets you copy an existing agent and adapt it for a similar workflow, without rebuilding from scratch.

**To duplicate a Custom Agent:**

1. Open the Custom Agent you want to copy.

2. Select `•••` and choose `Duplicate`.

The duplicate opens as a private agent. You can review and update its settings before sharing or publishing.

**What you need to duplicate an agent**

* Permission to view and interact with the original agent.

* Permission to create Custom Agents under your workspace’s admin controls. Check with your workspace admin if you’re unsure.

**What carries over**

* **Name:&#x20;**&#x54;he duplicate is named `{Original agent name} (1)`. You can rename it anytime.

* **AI model:** The duplicate uses the same AI model as the original. <!-- -->If that model is a premium model, the copy spends [Notion credits](https://www.notion.com/help/category/notion-credits) the same way the original does.

* **Instructions:** Copied into a new page. If any links in the instructions point to pages you don’t have access to, those show up as no-access chips and won’t be added to the duplicate’s resources.

* **Pages and databases:** Any Notion content the original agent used that you also have access to will carry over. Content you don’t have access to won’t be included.

* **Triggers:** Triggers that use resources you have access to will carry over. If a trigger relies on something you can't access (like a Slack channel you’re not part of), that trigger won’t be included in the duplicate.

**What you'll need to set up after duplicating**

* **Connected tools (like Slack):** The duplicate doesn't inherit any tool connections. You'll need to reconnect tools like Slack on the new copy.

* **Workers:** If the original agent had Workers set up, you’ll need to configure those again. They don’t carry over automatically.

* **Run history:** The duplicate starts with a clean slate, no previous runs or activity from the original are included.

* **Credit limits:** Any credit limits set on the original won't apply to the duplicate.

**Privacy default**

The duplicate is private by default, only you can see it. Share it from the `Share` menu when you’re ready.

## Export Insights data as CSV

If you have full access to a Custom Agent, you can export its Insights chats and threads as a CSV file for analysis or reporting outside of Notion.

To export:

1. Open the Custom Agent and go to the `Insights` tab.

2. Select the time period you want to export.

3. Hover over the export button → Select `Export as CSV`.

![CSV export](https://images.ctfassets.net/spoqsaf9291f/1nQBLYBOhSuCJBSC2iA9uv/988bcbd982494910a6930fe8fff9e5c2/6ca55cd7-5f56-41a5-83de-a73dc4a4ca67.png)

The CSV matches the columns on the `All chats` page. Exports are limited to up to 300 chats for the selected period.

* CSV export is available on Business and Enterprise plans.

* Workspace admins who need data from multiple agents must add themselves to each agent individually before exporting.


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


### Why can't I access certain models (for example: Claude Fable 5) anymore?

There are a few reasons a model might be missing:

* An admin turned the model off for Custom Agents. Models that are off appear dimmed in the model menu.

* You've reached your credit limit, or your workspace is out of [Notion credits](https://www.notion.com/help/category/notion-credits). Premium models pause until your limit goes up or your credits reset.

* Your workspace reached its [usage allowance](https://www.notion.com/help/manage-your-usage-allowance-for-notion-ai). Some AI features pause until the allowance refreshes, which happens within six hours.


### I embedded a Custom Agent in a page. Why can't my teammates chat with it?

Being able to see the page doesn't mean someone can use the agent on it. To chat with an embedded Custom Agent, a person needs access to the agent itself. Open the agent, select `Share`, and add them.

If you also want the agent to answer questions about the page it lives on, add that page under the agent's `Tools and access` settings.
