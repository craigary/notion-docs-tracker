---
title: "Connect GitLab to Notion"
emoji: null
description: "GitLab helps teams manage code, collaborate on software development, and track releases. You can sync GitLab projects, issues, merge requests, pipelines, and releases into Notion to keep development work alongside your team’s plans and docs."
url: "https://www.notion.com/help/connect-gitlab"
key: "help:connect-gitlab"
coverImage: null
category: "Connections"
categoryKey: "category:connections"
---

We’re replacing existing managed GitLab syncs with tailored syncs powered by Notion Workers. You can customize what data you sync and how it’s organized in Notion. Your existing synced data stays in Notion; follow this guide to set up a replacement. Learn more about [Notion Workers →](https://developers.notion.com/workers/get-started/overview)

Existing GitLab syncs will stop working on **October 30, 2026**. They’ll keep working as normal until then, but won’t move over on their own. We recommend setting up your replacement sync before that date.

Workers run your sync on Notion’s infrastructure. To set up your replacement, @-mention your existing synced database in a chat with Notion AI and include the GitLab sync skill.

## Before you start

Have these ready:

* Your existing GitLab synced database in Notion. Make sure Notion AI can access it.

* The complete list of GitLab projects to include. You can provide project URLs, numeric IDs, or paths such as **my-team/my-project**. Learn how to [view projects in GitLab →](https://docs.gitlab.com/user/project/working_with_projects/#view-projects)

* A GitLab personal or project access token with **read\_api** and access to every selected project.

* Access to Workers and the tools Notion AI needs to create and deploy a Worker in your workspace.

* This skill page, which you’ll copy into your Notion account: [GitLab Guide: Worker Sync](https://app.notion.com/p/notion/GitLab-Guide-Worker-Sync-3abefdeead0583b8b9b90172edb1ea0a). This skill is for [GitLab.com](http://GitLab.com). If you use a self-managed GitLab instance, tell Notion AI before setup. The guide’s API address and credential configuration need adaptation and validation for your instance.

**Note**: This guide creates replacement databases. Your existing database stays available while you check them. Its page links, views, relations, and Notion-only information don’t automatically transfer.

## 1. Ask Notion AI to replace your sync

Open a chat with Notion AI in the workspace that contains your existing synced database.

Copy the prompt below. Replace **@Existing GitLab sync database** by typing **@** and selecting the actual database from the mention menu. If issues and merge requests are in separate synced databases, mention both.

> Replace my current GitLab sync, **@Existing GitLab sync database**, with a Notion Worker using the [GitLab Guide: Worker Sync](https://app.notion.com/p/notion/GitLab-Guide-Worker-Sync-3abefdeead0583b8b9b90172edb1ea0a).
>
> Inspect the existing database and confirm the complete GitLab project list with me. Follow the skill to create the hourly syncs, five related databases, views, and dashboard under a private GitLab Sync page. If a replacement Worker already exists, inspect and reuse it where appropriate.
>
> Keep my existing database intact. Identify custom properties, Notion-only values, views, relations, and links that need separate handling. Request my GitLab token through a secure credential input, not in chat.
>
> Preview every selected project and data type, complete the first sync, and check records and project relations. Show me the replacement databases, any differences, and the steps to switch over before changing the old sync.

Select an actual database mention in the prompt. Typing the database’s name alone doesn’t give Notion AI a link to inspect.

Confirm the complete project list, including projects hidden by your current Notion view’s filters. A token limited to one project won’t be enough for a sync that also needs access to other projects.

## 2. Connect GitLab

Follow Notion AI’s instructions to provide your GitLab token through the secure credential input. It needs **read\_api** and access to the selected projects.

Don’t paste the token into the chat, a Notion page, or a database property. The Worker uses a brokered credential so its code doesn’t need to read the raw token.

This setup uses a new Worker credential. Your existing GitLab connection doesn’t automatically supply it.

If Notion AI can’t access the skill or the Worker tools, resolve that access first. The linked guide also contains setup instructions for someone on your team who can use the Notion CLI.

## 3. Review the replacement

The skill creates a private **GitLab Sync** page containing five synced databases and a dashboard:

| **Database**          | **What it includes**                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| GitLab Projects       | Project names, paths, descriptions, archive status, visibility, default branches, links, and activity dates.        |
| GitLab Issues         | Issues across states, with assignees, labels, milestones, severity, due dates, and project relations.               |
| GitLab Merge Requests | Merge requests across states, with draft status, authors, assignees, branches, merge status, and project relations. |
| GitLab Pipelines      | Pipeline status, references, source, dates, links, and project relations.                                           |
| GitLab Releases       | Release names, tags, descriptions, release dates, links, and project relations.                                     |

**GitLab Dashboard** brings these records together in charts and working queues. It includes open issues, open merge requests, failed pipelines, recent releases, and project activity.

The five synced databases contain the records. The dashboard displays views of those records. Your old issue or merge request database may have covered fewer data types than this skill’s default setup.

Check these differences before switching:

* **People and labels:** Authors, assignees, and labels are stored as text in this guide. They aren’t Notion person or multi-select properties.

* **Project relations:** Issues, merge requests, pipelines, and releases should link to their selected project records.

* **Record identity:** Records from different projects must remain distinct even when they use the same project-local issue or merge request number.

* **Additional content:** The guide doesn’t sync issue comments, merge request discussions, repository files, or job logs. Ask Notion AI to assess any extra fields your existing workflow needs.

## 4. Switch to the new databases

Wait until Notion AI confirms that all five syncs are healthy and that the initial import is complete.

1. Compare each selected project with GitLab. Check a sample of open and closed issues, merged requests, pipelines, and releases.

2. Confirm that project relations and dashboard views show the expected records.

3. Check that a recent GitLab change reaches the replacement after a successful refresh.

4. Review the old database’s custom properties and Notion-only values with Notion AI. Transfer what you need using stable GitLab record IDs.

5. Update links, linked database views, relations, and automations that should use the replacement. Review the new page’s sharing permissions.

6. Once your team is using the replacement, ask Notion AI to help retire the old sync while keeping the old database available for reference.

You don’t need to delete the old database to use the Worker. Keep it until you’ve checked that your team’s information and workflows are accounted for.

## How the new sync runs

The skill sets up five hourly syncs, one for each data type. Projects sync first during setup so the other databases can relate their records to the right projects.

Each successful refresh reads all pages of results for the configured projects and updates the matching Notion database. The Worker continues running when Notion is closed.

Updates flow from GitLab to Notion. Make changes to synced values in GitLab; changes in Notion aren’t written back.

Hourly is the schedule, not a guarantee that every refresh finishes within a fixed time. Large project histories and GitLab request limits can delay completion.

**Tip**: Keep the complete project list. These syncs use replace mode: records missing from a completed refresh are removed from the synced database. Removing a project from the configuration can remove its synced records, including Notion-only information on those pages. Ask Notion AI to preview every selected project and data type before applying a change.

## Share GitLab data in Notion

The skill starts with a private **GitLab Sync** page. Share it only with the people who should see the imported records.

Notion’s permissions control access to the synced data. A GitLab project’s **Visibility** property or an issue’s **Confidential** property doesn’t enforce that source permission in Notion. Review the data included by the token before sharing the page.

## Troubleshoot your replacement

### A project is missing

Confirm the complete project list and token access. Give Notion AI the project’s URL or numeric ID if its path has changed. Don’t run a refresh with a shortened list just to work around an access error.

### An issue or merge request is missing

Ask Notion AI to check the project selection, whether it’s checking issues and merging requests in every state, and every page of results. Check the Notion view’s filters as well.

### The dashboard is empty

Ask Notion AI to check the source databases, their latest sync results, and project relations before rebuilding the dashboard. A dashboard can be empty while the initial import is still running.

### I see duplicate databases

Ask Notion AI to inspect the existing Worker, database URLs, and page structure before creating anything else. The skill calls for five actual synced databases and one dashboard under **GitLab Sync**. Have Notion AI identify any duplicates before removing them.

### Updates have stopped

Ask Notion AI to check the Worker’s latest runs, token expiry, token permissions, and access to every selected project. For a self-managed instance, also check the configured GitLab host. Request limits can delay updates.

## Related guides

* [Sync data from other tools to Notion](https://www.notion.com/help/sync-data-from-other-tools-to-notion)

* [Connect Asana](https://www.notion.com/help/connect-asana)
