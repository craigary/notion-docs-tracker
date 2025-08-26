---
title: Import from Asana
emoji: 📥
description: Easily import all of your Asana projects and tasks directly into Notion 📥
url: https://www.notion.com/help/asana
key: help:asana
coverImage: https://images.ctfassets.net/spoqsaf9291f/5OqbtcTllJfeg9Ly1tHnT5/f48dd48f5f61f15fb9d4cc3e939bfb98/asana_importer_hc.png
category: Data & integrations
---

Importing from Asana allows you to move your organization’s teams, projects, and tasks in Asana into Notion. Any member on any plan can take advantage of the Asana importer.

**Importing from Asana vs. syncing Asana with Notion**

Importing your Asana data into Notion is best if you want to move from Asana and use Notion as the primary tool for your work. The data will be duplicated into Notion, but not synchronized with Asana.

[Synced databases](https://www.notion.com/help/synced-databases) allow you to connect Asana to Notion without importing any data. You might prefer to use synced databases if you use both Asana and Notion for your work. Synced databases only go one direction, meaning that changes will need to happen in Asana in order for updates to reflect in Notion.

To add a synced database from Asana, simply paste a project link right into a Notion page. Learn more about synced databases [here →](https://www.notion.com/help/synced-databases)

**Learn more about importing projects from Asana**

* [Import projects from Asana for a connected work experience](https://www.notion.com/help/guides/import-projects-asana-connected-work)

## Import from Asana into Notion

**Note:**

* To import your Asana projects to Notion, you must be associated with a team in Asana, even if you're the only person on that team.

* You can only import one Asana workspace into Notion at a time.

* Each Asana team will be imported into one Notion teamspace.

* Multiple projects imported into one teamspace will go into the same Projects and Tasks databases. If you'd like to import into multiple databases, try importing in batches.

* In the import process, there will be some default properties that you’ll be required to import into Notion from Asana.

To import from Asana into Notion:

1. Go to `Settings` in your sidebar → `Import` → `Asana`. Alternatively, use the `/` command `/asana` in a page and select the option under `Import`.

2. Sign into Asana and grant the requested permissions.

3. Under `Choose Asana workspace`, select the Asana workspace you want to import.

4. Select the projects you’d like to import.

5. Select the Notion teamspace your projects should be imported into. Each Asana team will be imported into one Notion teamspace.

6. You can check the box next to your workspace name to `Exclude completed projects` or `Select all projects`.

7. Select `Next`.

8. By default, all Asana task properties will be imported into Notion, but you can customize this per teamspace. Choose to `Select all properties` (the default setting) or `Customize properties`. Note that there are default properties that must be imported.

9. Choose whether the `Status` property in Notion should be mapped to your `Section` or `Completed` property in Asana.

10. Select `Import`.

## How importing from Asana works

Your selected Asana projects and properties will be imported along with the tasks associated with those selected projects. Asana projects and tasks will be imported into Projects and Tasks databases in Notion, respectively. The Notion Projects and Tasks databases are related to each other, in line with our [Projects & Tasks template](https://www.notion.com/templates/notion-projects-and-tasks).

Your Projects and Tasks databases come with several views to help you see and track your work more easily. Visit the links below to learn about:

* [Databases](https://www.notion.com/help/category/databases)

* [Views, filters, and sorts](https://www.notion.com/help/views-filters-and-sorts)

* [Table view](https://www.notion.com/help/tables), which is the **equivalent of Asana’s list view**

* [List view](https://www.notion.com/help/lists)

* [Timeline view](https://www.notion.com/help/timelines)

* [Board view](https://www.notion.com/help/boards)

* [Calendar view](https://www.notion.com/help/calendars)

### How Asana maps to Notion

* Asana projects will become Notion projects.

* Asana tasks will become Notion tasks.

* Asana teams will become Notion teamspaces.

* Asana organizations or workspaces will become Notion workspaces.

## Projects database

Your Asana projects will be imported into a Projects database in Notion. The Asana importer will pre-populate default database views for ease of use. You can add or delete views and properties as needed.

These default database views include:

* Active (table view): This view shows the projects you’ve imported whose status is to-do or in progress. In other words, this view doesn’t show projects that have already been completed. There are also preset filters for owner and date to make searching easier.

* Timeline view: This view displays project name, status, owner, and completion rate. There are also preset filters for status, owner, and date to make searching easier.

* Board view: This view shows your projects grouped by status (`Planning`, `Backlog`, `On Track`). You can customize the statuses that show in the view in the `•••` menu. Projects are sorted by descending priority.

* All (table view): This view displays all of your imported projects. There are preset filters for status, owner, and date to make searching easier.

**View project details**

* In each project page, you can find the project description from Asana in the toggle at the top.

* Below the project description, you’ll see multiple views of the tasks related to that project. All views are filtered by the project you’re in.

  * Board view: This view is grouped by status and sorted by descending priority.

  * Task (table view): This view is grouped by status (if the status group is empty, it will be hidden).

  * Timeline view: This view displays task name, assignee, and status.

  * Calendar view: This view shows your tasks by date and displays assignee and status.

## Tasks database

Your Asana tasks will be imported into a Tasks database in Notion. As with the projects database, the Asana importer will pre-populate database views for ease of use. You can add or delete views and properties as needed.

These default database views include:

* By Project (table view): This view shows all tasks, grouped by project.

* Board view: This view displays your tasks, grouped by status and sorted by descending priority. There are pre-set filters for assignee and due date.

* All tasks (table view): This view shows you all of your imported tasks.

* Mine (table view): This view is filtered to only show tasks that are assigned to you.

* Calendar view: This view shows your tasks by date and displays assignee and status.

## Import logs

When your import completes, you will receive an import log in the private section of your sidebar. In this log you will find a summary of your import, including the Notion teamspace that your Asana projects and tasks were imported into.


## FAQs

### How are the Task assignees imported if that assignee is not present in Notion?

If the Tasks assignees imported do not have a Notion, the user would be added as a placeholder to the workspace.

These placeholder accounts will attribute comments and mentions. If and when these users sign up, they will be mapped to the corresponding placeholder account, and comments and mentions will be attributed to the correct user.


### How long does it take for the Asana Importer tool to import a large number of tasks?

Import times may range from a few minutes to several hours depending up on the size of the import. You will receive an email notification once the import is complete.


### Is there a limit to the number of tasks that can be imported at once?

There are no hard limits on number of tasks that can be imported, but we recommend limiting imports to 20K tasks per teamspace.


### How are subtasks imported?

They are imported as subtasks (along with dependencies) that are within the same database.


### Do updates I make in my Asana account automatically get updated in Notion?

No, the import is a one-time action.

We do not maintain a connection with your Asana account and any changes you make in your Asana account after the import **will not** automatically update in Notion.


### Is there a way to preview the import before they are added? Can I undo an import?

There is no way to preview or undo, but during the process you will select which specific projects you wish to import.

In addition you can easily delete specific projects or tasks within Notion. You can even delete the entire database and start over.
