---
title: "Connect Asana to Notion"
emoji: null
description: "Asana helps teams manage projects, assign tasks, and track progress. You can sync your Asana projects and tasks into Notion to keep them alongside your team’s plans and docs."
url: "https://www.notion.com/help/connect-asana"
key: "help:connect-asana"
coverImage: null
category: "Connections"
categoryKey: "category:connections"
---

**Note**: We’re replacing existing managed Asana syncs with tailored syncs powered by Notion Workers. You can customize what data you sync and how it’s organized in Notion. Your existing synced data stays in Notion. Learn more about [Notion Workers ->](https://developers.notion.com/workers/get-started/overview)

Existing Asana syncs will stop working on **October 30, 2026**. They’ll keep working as normal until then, but won’t migrate automatically. We recommend setting up your replacement sync before that date.

This change affects only the legacy Asana synced database. If you use the separate Asana AI Connector so Notion AI can search your Asana data, that connector isn’t part of this change and will keep working.

Workers run your sync on Notion’s servers. To set up your replacement, @-mention your existing synced database in a chat with Notion AI and include the Asana sync skill.

## Before you start

Have these ready:

* Your existing Asana synced database in Notion. Make sure Notion AI can access it.

* The complete list of Asana projects to include. Project links are a useful starting point; Notion AI may ask you to confirm their numeric project IDs.

  `https://app.asana.com/1/<workspace>/project/1206617296084787/list/...`

* An Asana account with access to every selected project and permission to create a personal access token.

* Access to Workers and the tools Notion AI needs to create and deploy a Worker in your workspace.

* [The Asana Guide: Projects & Tasks Worker Sync](https://app.notion.com/p/notion/Asana-Guide-Projects-Tasks-Worker-Sync-ccfe9abd41f143a2a75cdea704ee15a9).

* The [Notion Workers syncs guide](https://developers.notion.com/workers/guides/syncs), for background on sync schedules, sync modes, and rate limits. This guide creates new Projects and Tasks databases. Your existing database stays available while you check the replacement. Its page links, views, relations, and Notion-only information don’t automatically transfer to the new databases.

## 1. Ask Notion AI to replace your sync

Open a chat with Notion AI in the workspace that contains your existing synced database.

Copy the prompt below. Replace **@Existing Asana sync database** by typing **@** and selecting the actual database from the mention menu. If you’re replacing several synced databases, mention each one.

> Replace my current Asana sync, @Existing Asana sync database, with a Notion Worker using the [Asana Guide: Projects & Tasks Worker Sync](https://app.notion.com/p/notion/Asana-Guide-Projects-Tasks-Worker-Sync-ccfe9abd41f143a2a75cdea704ee15a9).
>
> Inspect the existing database and confirm the complete Asana project list with me. Use the skill to create the related Projects and Tasks databases, hourly syncs, and views. Include completed tasks.
>
> Keep my existing database intact. Identify custom properties, Notion-only values, views, relations, and links that need separate handling. Request my Asana token through a secure credential input, not in chat.
>
> Preview every selected project, complete the first sync, and check the records and project relations. Show me the replacement databases, any differences, and the steps to switch over before changing the old sync.

The @-mention gives Notion AI a specific database to inspect. A typed database name alone isn’t a link to that database.

Confirm the full project list when Notion AI asks. Records visible in a filtered Notion view may represent only part of your existing sync.

## 2. Connect Asana

Follow Notion AI’s instructions to create an Asana personal access token in [Asana’s Developer Console](https://app.asana.com/0/my-apps) and provide it through the secure credential input.

Don’t paste the token into the chat, a Notion page, or a database property. The Worker uses the credential to read the selected projects and tasks.

This setup uses a new Worker credential. Your existing Asana connection doesn’t automatically supply it.

If Notion AI can’t access the skill or the Worker tools, resolve that access first. The linked guide also contains setup instructions for someone on your team who can use the Notion CLI.

## 3. Review the replacement

The skill creates two related databases:

| Database | What it includes                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------- |
| Projects | Project names, completion and archive status, owners, teams, dates, notes, and Asana links.                         |
| Tasks    | Task names, completion, assignees, selected project relations, sections, dates, notes, task types, and Asana links. |

The Tasks database includes views by project and section, a board, a timeline, a calendar, and a task dashboard. The Projects database includes a table of project details.

Check the details that matter to your existing workflow:

* **Completed tasks:** Both completed and incomplete tasks should be included.

* **Tasks in multiple projects:** A task should have one row, with relations to its selected projects.

* **People:** Owners and assignees can resolve to Notion members or guests by email. **Owner name** and **Assignee name** provide text when a person can’t be matched.

* **Sections:** The guide uses a fixed set of section options and maps other names to **Other**. Ask Notion AI to adapt the mapping if your current workflow uses different sections.

* **Notes:** The guide limits synced notes to 2,000 characters.

* **Additional data:** The guide doesn’t include comments, attachments, or arbitrary Asana custom fields. If you rely on them, have Notion AI assess what can be added before switching.

The guide records a parent task’s name as text. Don’t assume that all nested subtasks or parent-child relations are reproduced; compare the replacement with the tasks you need from your selected projects.

## 4. Switch to the new databases

Wait until Notion AI confirms that both syncs are healthy and that the initial import is complete.

1. Compare the selected projects and a sample of tasks with Asana. Check completed tasks, dates, assignees, and project relations.

2. Check that a recent change in Asana reaches the replacement after a successful refresh.

3. Review the old database’s custom properties and Notion-only values with Notion AI. Transfer what you need using stable Asana record IDs rather than task names.

4. Update links, linked database views, relations, and automations that should use the replacement. Review sharing permissions on the new databases.

5. Once your team is using the replacement, ask Notion AI to help retire the old sync while keeping the old database available for reference.

You don’t need to delete the old database to use the Worker. Keep it until you’ve checked that your team’s information and workflows are accounted for.

## How the new sync runs

By default, the skill sets up an hourly sync for Projects and Tasks. You can ask Notion AI for a different schedule, from every 5 minutes up to every 7 days, or manual-only. The Worker runs in the background, even when Notion is closed.

**Note**: Workers syncs run on Notion’s usage-based pricing and use Notion credits each time they run; syncing more often uses more credits. See [Understand pricing for Workers](https://www.notion.com/help/understand-pricing-for-workers) to estimate cost before switching.

Each successful refresh reads the selected projects and their tasks and updates the matching Notion database. Updates flow from Asana to Notion. Make changes to synced values in Asana; changes in Notion aren’t written back.

Your chosen schedule sets how often a refresh starts, not how long it takes to finish. Larger projects and source request limits can delay completion.

**Tip**: Keep the complete project list. These syncs replace what’s in the database each time: records missing from a completed refresh are removed from the synced database. Removing a project from the configuration can remove its project page and tasks that don’t belong to another selected project, including Notion-only information on those pages. Ask Notion AI to preview the full selection before applying a change.

## Share Asana data in Notion

Review the replacement databases’ sharing settings before giving your team access. Notion permissions control who can see the imported records; Asana project permissions aren’t applied separately to each Notion viewer.

The **Privacy** property describes the Asana project. It doesn’t control access to its data in Notion.

## Troubleshoot your replacement

### Some tasks are missing

Ask Notion AI to check the complete project selection, source access, pagination, and inclusion of completed tasks. Also check the Notion view’s filters. A task that isn’t included in the selected projects may not be returned by this sync.

### Owners or assignees are empty

Check **Owner name** or **Assignee name**. A person property can remain empty when the Asana email isn’t available or doesn’t match a Notion member or guest.

### Updates have stopped

Ask Notion AI to check the Worker’s latest runs and credential access. You may need to restart the sync with the complete project list. Repeated manual retries can hit request limits.

### My existing views or values didn’t move

The replacement has new databases and record pages. Ask Notion AI to compare the old and new structures and handle each missing value or dependency before retiring the old sync.

## Related guides

* [Sync data from other tools to Notion](https://www.notion.com/help/sync-data-from-other-tools-to-notion)

* [Connect GitLab](https://www.notion.com/help/connect-gitlab)
