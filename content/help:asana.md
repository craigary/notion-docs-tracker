---
title: "Import from Asana"
emoji: null
description: null
url: "https://www.notion.com/help/asana"
key: "help:asana"
coverImage: null
category: "Import & export your data"
categoryKey: "category:import-export-and-integrate"
---

Importing from Asana allows you to move your organization’s teams, projects, and tasks in Asana into Notion. Any member on any plan can take advantage of the Asana importer.

**Importing from Asana vs. syncing Asana with Notion**

Importing your Asana data into Notion is best if you want to move from Asana and use Notion as the primary tool for your work. The data will be duplicated into Notion, but not synchronized with Asana.

[Synced databases](https://www.notion.com/help/synced-databases) allow you to connect Asana to Notion without importing any data. You might prefer to use synced databases if you use both Asana and Notion for your work. Synced databases only go one direction, meaning that changes will need to happen in Asana in order for updates to reflect in Notion.

To add a synced database from Asana, simply paste a project link right into a Notion page. Learn more about synced databases [here →](https://www.notion.com/help/synced-databases)

**Learn more about importing projects from Asana**

* [Import projects from Asana for a connected work experience](https://www.notion.com/help/guides/import-projects-asana-connected-work)

## What imports (and what doesn't)

|               |                                                                             |
| ------------- | --------------------------------------------------------------------------- |
| **✅ Imports** | **❌ Doesn't import**                                                        |
| Projects      | Automations                                                                 |
| Tasks         | Dependencies                                                                |
| Subtasks      | Reporting                                                                   |
| Sections      | Some custom fields                                                          |
| Assignees     | External integrations                                                       |
| Due dates     | Rules                                                                       |
| Descriptions  | Permissions (role type, project permissions, or team-level access controls) |
| Comments      |                                                                             |
| Attachments   |                                                                             |

## Asana → Notion mapping

* Asana projects → Notion projects

* Asana tasks → Notion tasks

* Asana teams → Notion teamspaces

* Asana organizations or workspaces → Notion workspaces

* Your Projects and Tasks databases are related to each other, in line with our [Projects & Tasks template](https://www.notion.com/templates/notion-projects-and-tasks).

## Size limits & timing

* **Size limit:** Import up to **\~14k tasks** with no limit on projects. You can select one project with \~14k tasks, or multiple projects with a total of \~14k tasks. Larger imports may fail.

  * **Tip:&#x20;**&#x53;plit large migrations into multiple batches.

* **Attachment rate limit:** Each workspace can import \~100–120 file attachments per day.

  * **Tip:&#x20;**&#x53;pread attachment-heavy imports across multiple days.

* Once the import begins, you can safely close your browser. We'll send you an email when your import is complete.

* Review the progress of your import in `Settings` → `Import`. There you can see the status of your import and completed imports.

## Import from Asana into Notion

**Before you begin**

* You must be associated with a team in Asana, even if you're the only person on that team.

* You can only import one Asana workspace into Notion at a time.

* Each Asana team will be imported into one Notion teamspace.

* Multiple projects imported into one teamspace will go into the same Projects and Tasks databases. To import into separate databases, import in batches.

**Import into Notion**

1. Go to `Settings` in your sidebar → `Import` → `Third party imports` → `Asana`. Alternatively, use the `/asana` command in a page and select the option under `Import`.

2. Sign into Asana and grant the requested permissions.

3. Under `Choose Asana workspace`, select the Asana workspace you want to import.

4. Select the projects you'd like to import.

5. Choose where to import your projects. You can send them to a teamspace, where Notion will create a new Projects and Tasks database, or select an existing Projects database. Only Projects‑type databases with a linked Tasks database you can edit are listed.

6. Check the box next to your workspace name to `Exclude completed projects` or `Select all projects` as needed.

7. Select `Next`.

8. Choose to `Select all properties` (default) or `Customize properties`. Note that some default properties must be imported.

9. Choose whether the `Status` property in Notion should be mapped to your `Section` or `Completed` property in Asana.

10. Select `Import`.

## What to expect after import

If you import to a teamspace, your Asana projects and tasks are imported into Projects and Tasks databases in Notion, pre-populated with several views. If you selected an existing Projects database as the destination, your projects are added to that database, with their tasks added to its linked Tasks database, using the property mapping you set during import.

**Projects database views**

* **Active (table view):** Shows projects with a to-do or in-progress status.

* **Timeline view:** Displays project name, status, owner, and completion rate.

* **Board view:** Groups projects by status (Planning, Backlog, On Track), sorted by descending priority.

* **All (table view):** Displays all imported projects.

**Tasks database views**

* **By Project (table view):** All tasks grouped by project.

* **Board view:** Tasks grouped by status, sorted by descending priority.

* **All tasks (table view):&#x20;**&#x41;ll imported tasks.

* **Mine (table view):** Tasks assigned to you.

* **Calendar view:** Tasks by date with assignee and status.

When your import completes, you'll receive an **import log** in the `Private` section of your sidebar with a summary and the Notion teamspace your content was imported into.

## Limitations

* Asana OAuth may require admin approval depending on your org settings or plan tier. Import scope is limited to what the authenticated user can access.

  * **Tip:** Ask your Asana admin to approve the Notion OAuth app in advance.

* Custom fields may not map 1:1 to Notion properties. Some fields may need to be added manually after import. For automation-heavy setups, consider a tool like Zapier or Make.

* The import is a one-time event; future changes in Asana won't automatically reflect in Notion.

* Projects must belong to a **team** in Asana to appear in the importer.

  * **Tip**: Double-check all projects are assigned to teams before starting.

## Troubleshooting

* **Projects aren't showing in Notion**

  * **Why this happens:&#x20;**&#x50;rojects aren't linked to a team in Asana. Notion's importer only brings in projects that belong to a team.

  * **To fix:** In Asana, assign each missing project to a team before running the import.

* **Task counts don't match between Notion and Asana**

  * **Why this happens:** In Asana, subtasks can be directly linked to projects and counted in project totals. In Notion, subtasks only live under their parent tasks and aren't directly tied to projects.

  * **To fix:** Check whether subtasks are linked directly to projects in Asana. Expect count differences unless those subtasks are manually surfaced in Notion.

* **I can't find some boards from the same Asana project after import**

  * **Why this happens:&#x20;**&#x54;he importer only brings in selected projects; boards might be in a different Asana workspace or team; archived or completed projects may have been excluded; or the run completed with partial results.

  * **To fix:&#x20;**&#x52;e-run the import and select those specific projects. Ensure they're in the same Asana workspace and team, uncheck "Exclude completed projects" if needed, verify the target teamspace, and review the import log page created after the run.

## Import logs

When your import completes, you will receive an import log in the `Private` section of your sidebar. In this log you will find a summary of your import, including the Notion teamspace that your Asana projects and tasks were imported into.


## FAQs