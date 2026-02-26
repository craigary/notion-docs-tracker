---
title: Best practices for creating and optimizing a Custom Agent
emoji: 🤖
description: Best practices to make your Custom Agent more reliable by clarifying goals, tightening sources, and iterating on results. 
url: https://www.notion.com/help/best-practices-for-creating-and-optimizing-a-custom-agent
key: help:best-practices-for-creating-and-optimizing-a-custom-agent
coverImage: https://images.ctfassets.net/spoqsaf9291f/44JzG7eAS2RgKEZvv3nAhF/37b07971c4b7848cb1ef580ad6758dd5/Group_184.png
category: Custom Agents
---

## Best practices for creating Custom Agents

A well-designed Custom Agent uses fewer credits and delivers better results. Here’s how to get the most out of every run:

* **Use Custom Agents for recurring work.&#x20;**&#x46;or one-time asks, use Notion Agent instead—it’s included in your plan. Custom Agents run on Notion credits because they work autonomously in the background, whether you're online or not.

* **Choose specific triggers.&#x20;**&#x54;rigger on specific @mentions or property changes, not every message or database update. Fewer false starts, fewer wasted runs.

* **Keep context tight.&#x20;**&#x50;oint your agent to the specific pages or databases it needs. That way, it only reads what it has to, and each run stays focused.

* **Define “done” upfront.&#x20;**&#x54;ell your agent exactly what a complete run looks like. The cleaner the instructions, the faster it gets to the result.

* **Batch independent tasks.** For example, ask your agent to read multiple sources at once instead of one at a time.

  * ✅ *"Read the Projects database and the #support Slack channel, then write the weekly update."*

  * 🚫 *"Read the Projects database, then write the weekly update. Then read the #support Slack channel and add to the weekly update."*

* **Set the model to Auto.** Auto intelligently picks the right model for the task, balancing quality and credit usage.

New to Custom Agents?

Start with [Custom Agents](https://www.notion.com/help/custom-agent) to learn what they are, how they work, and what you can connect them to.

Custom Agents are most reliable when they have a clear job, the right sources, and a tight definition of “done.” This best practices article covers how to write better instructions, choose the right triggers, and improve results over time.

## Choose a workflow that’s repeatable

If you’re not sure where to begin, start with work your team repeats often. Custom Agents are most effective when the workflow is predictable and easy to review.

Look for workflows that are:

* **Repeatable**, like compiling reports, triaging incoming requests, or answering common Slack questions

* **Frequent**, meaning they happen daily or weekly

* **Easy to evaluate**, so you can quickly tell whether the output is correct

Once you’ve chosen a workflow, build the simplest version of your agent first. Get it running reliably before adding complexity.

When the process feels stable and predictable, you can add triggers or schedules to fully automate it.

## Write clear, goal-focused instructions

When you give your Custom Agent clear instructions, it produces more consistent and reliable results. Focus on what success looks like and provide the context it needs to deliver it.

**Start with the outcome you want**

* Describe what the final output should look like, rather than listing every step

* Let the agent determine how to get there

* Example: “Create a weekly status update summarizing completed tasks, blockers, and next steps.”

**Share a real example**

* Paste a previous status update, formatted report, or triaged request

* Use concrete examples instead of abstract descriptions

**Be clear about format and destination**

* Specify where the output should go (Slack, a database, or an existing page)

* Call out which properties or sections should be filled in

* Example: “Post the summary in #team-updates and add it to the Weekly Reports database.”

**Set simple boundaries**

* Clarify what the agent should do and what it should **avoid**

* Example: “Update the existing weekly report page, not a new one,” or “Only respond in #support.”

**Call out edge cases**

* Explain what should happen if there’s no data or nothing new to report

* Example: “If there are no updates this week, post ‘No updates’ instead of skipping.”

**Keep instructions short and focused**

* Shorter instructions produce more consistent results

* If your setup gets long, break the workflow into multiple agents

## Decide how your agent should run (triggers vs. schedules)

When setting up your Custom Agent, decide whether the work should run on a schedule, in response to an action, or both.

**Use schedules for predictable work**

* Choose a schedule when the task should run at a set cadence, regardless of activity

* Ideal for recurring work like weekly reports, daily briefs, or monthly summaries

**Use triggers for responsive work**

* Choose a trigger when the task should run in response to something happening

* Examples include a bug filed in Slack, a new page added to a database, or an email from a specific sender

**Combine schedules and triggers when needed**

* Some workflows have two patterns

* For example, one trigger-based agent can triage bugs as they come in, while a separate scheduled agent compiles a weekly summary of those triaged bugs

**Start with lower frequency and limited scope**

* Begin with a weekly schedule instead of daily

* Start with one channel instead of five

* Scale up once you’ve confirmed the output is consistent and reliable

## Test and troubleshoot your Custom Agent

Before fully activating your workflow, take time to test and adjust your setup.

**Test before activating triggers or schedules**

* Click `Run` to execute the agent manually

* Review the output to confirm it behaves as expected

* Turn on triggers or schedules only once the results look right

**Test with a small group**

* Share the agent with a few teammates to gather feedback

* Use early feedback to catch issues before rolling it out more broadly

**Expect iteration**

* Most agents require several test runs to get right

* Refine instructions based on what the output actually shows, not what you intended the instructions to say

**Check the activity log first**

* Click the clock icon to see what triggered the run

* Review what the agent did and where it may have failed

* Use the log to diagnose issues and confirm the agent is behaving as expected before expanding access

**Know the common fixes**

* "**Incorrect output"&#x20;**&#x75;sually means the instructions need more specificity

* **"Missing data"&#x20;**&#x6F;ften means the agent needs access to additional pages or databases under

  `Tools and access`

* **"Failed runs"&#x20;**&#x74;ypically point to a permissions gap or unclear instructions

## Improve reliability and performance

A well-designed agent runs faster and avoids unnecessary work. Three factors affect efficiency:

* How often the agent runs,

* How much content it reads, and

* How many steps it takes to complete a task

By default, your agent's AI model is set to `Auto`, which lets Notion select the best model for each task. This works well for most Agents, but you can choose a specific model at any time.

### 1. Reduce how often your agent runs

The easiest way to improve performance is to limit unnecessary runs. Design triggers so the agent only runs when it’s likely to take action.

**Start small and scale up**

* Begin with weekly runs instead of daily

* Use one channel or workflow before expanding to more

* Increase frequency once results are reliable

**Use high-signal triggers so your agent runs only when needed**

* **For Slack:&#x20;**&#x54;rigger on @mentions or a specific emoji reaction instead of all messages

* **For Notion:&#x20;**&#x54;rigger on specific property changes instead of every database update

* **For Notion Mail:&#x20;**&#x54;rigger on a filtered set of emails instead of every message

**Expect some “No action needed” runs**

* These happen when the agent determines there’s nothing to do

* This is normal and efficient—the agent only checks the trigger and instructions before exiting

### **2. Be intentional about what your agent references**

The more content an agent reads, the more work each run requires. Keep the scope tight.

* Point the agent to the smallest possible scope. Ideally a single page or a few pages that link to sub-pages the agent can load only if needed.

* Avoid asking the agent to search broadly if you already know which database or page it should use as the source of truth.

### **3. Keep the number of steps low**

Each additional step in a run adds work, especially when the Custom Agent executes multiple searches.

* Be explicit about the definition of done so the agent finishes in fewer steps.

* It’s more efficient if the agent calls multiple tools at the same time. Encourage parallel tool use in your instructions when possible.

  * **Can run at the same time:&#x20;***"Read the Projects database, the Engineering Slack channel, and the latest sprint notes page at the same time."&#x20;*&#x54;hese three sources are independent, so the agent reads all of them simultaneously instead of one by one.

  * **Has to run in order:&#x20;***"Create a summary page in the Reports database, then post the link to #team-updates in Slack."&#x20;*&#x54;he agent needs the page URL before it can post the link, so these steps happen sequentially.

### **4. Watch for loops and retries**

If the agent frequently asks multiple follow-up questions, retries the same action, re-checks the same pages, or errors in predictable ways, the instructions or settings need improvement.

* If runs frequently error for permission reasons (not having access to respond in Slack, or an untrusted URL), adjust the agent's access under `Tools and access` or tell the agent in the instructions to avoid those actions.
