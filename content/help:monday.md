---
title: Import from Monday.com
emoji: 📥
description: Easily import your data from Monday into Notion 📥
url: https://www.notion.com/help/monday
key: help:monday
coverImage: https://images.ctfassets.net/spoqsaf9291f/4JRJhAOp3ywUCOzbPXmTMO/47a27659e090c3cffdf49f875aa628b9/Group_19__1_.png
category: Data & integrations
---

The Monday.com importer helps you bring your all Monday.com boards into Notion.

## How Monday.com maps to Notion

* If you import a board that **isn’t a task or project board**, we’ll import these as regular databases following your original board’s structure.

* If you import a **task board and related projects**, we’ll import the tasks into the task database and create a project in the project database using the task board’s name.

* If you import a task board without any related projects, we’ll important the tasks into the task database and create a project in the project database using the task board’s name.

* Every teamspace in Notion gets one project and one task database per import, so if you have multiple projects within one teamspace, all of those projects will go into the same database, unless imported in batches. As a workaround, you can import any additional projects into a separate teamspace and move them manually afterwards, or import your account in batches so that you can bring more projects and task databases to the same teamspaces each time.

* The importer will also import all information about task owners and due dates into your Notion database.

* Note that an assignee in Monday.com **must be named** `Owner`, `Assignee`, or `Person` in order for that information to properly appear in Notion as an assignee. Any project or task board should only have one column to indicate an assignee.

## Import duration and size

* Imports can take anywhere from a few minutes to several hours depending on size. You’ll receive an email notification once your import is complete.

* There’s no limit to how many tasks you can import, but for the best experience, we recommend importing 10,000 tasks per teamspace, per import.

## Limitations

* The importer won’t import documents. Instead, we’ll display the corresponding Monday.com document link in Notion.

* You can import tasks from multiple workspaces, but you’re limited to importing one workspace at a time.

* The import is a one-time event; any future changes you make in Monday.com won’t automatically reflect in Notion.

* At this time, you can’t preview an import beforehand.

* Some column types from Monday.com won’t be supported in the import, including:

  * Buttons

  * Monday Docs

  * Integrations

  * Formula

  * Progress

  * Dependency

  * Time Tracking

  * World Clock

  * Ratings

  * Auto Numbers

## Import from Monday.com into Notion

1. Go to `Settings` in your sidebar → `Import` → `Monday.com`.

2. Enter your email and API token, which you can find using the instructions [here](https://developer.monday.com/api-reference/docs/authentication#accessing-api-tokens). Select `Authenticate` when you’re done.

3. Select your Monday.com workspace in the dropdown that appears. **You can only import one workspace at a time.**

4. Choose your import type.

   * You can choose to import `Projects & Tasks` only, which will convert your project and task boards into project and task databases in Notion.

   * You can choose a `Full Import`, which will import all your board types as regular databases in Notion. You can exclude project and task boards from this import and instead import these separately if you’d like to make full use of Notion’s project and task databases.

5. Select the folders and boards you want to import from your designated Monday.com workspace into Notion. You can also select the teamspace you want to send your imports to.

6. Start the import by selecting `Next`. The import can take from a few minutes to several hours depending on size. You can feel free to close the import window — the import will continue in the background.

7. Once the import is complete, you'll receive an email confirmation.


## FAQs

### Why aren’t all columns migrating to Notion?

If a missing column is linked to a board that **hasn’t been imported**, it won’t appear in Notion. To resolve this, make sure to import any related boards along with the main data.


### Are all column types supported?

A few Monday.com columns are not yet supported in the import, including:

* Buttons

* Monday Docs

* Integrations

* Formula

* Progress

* Dependency

* Time Tracking

* World Clock

* Ratings

* Auto Numbers
