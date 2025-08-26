---
title: Integrate Jira
emoji: 🔗
description: Connect Jira with Notion for a seamless experience that keeps you and your team up to date 🔗
url: https://www.notion.com/help/jira
key: help:jira
coverImage: https://images.ctfassets.net/spoqsaf9291f/6wTbBubsbDgXZRpOxVncyr/9b96bcdabaa672f8751089c0e219c1a7/Group_91.png
category: Data & integrations
---

Notion’s integration with Jira allows you to do a few different things. You can insert Jira links into Notion pages to quickly access or preview them, or you can sync your Jira projects and issues to Notion databases so you can track all of your work in one place. Read on to learn about the different forms of the integration and how you can set them up.

### Jira integration differences

Notion offers two Jira integrations: **Jira** and **Jira Sync**. Think of them as the lightweight and full-featured options.

If you only need to sync a single Jira project with a Notion database once—and don’t plan to set up additional syncs—the **legacy synced database** through the Jira integration might be enough. Just keep in mind: it uses user tokens, which tend to be less reliable than the admin tokens used by Jira Sync.

For ongoing, flexible syncing across multiple projects and databases, **Jira Sync** is the newer, more powerful option. Just note: it requires a Jira admin to set up.

**Note:** There’s no one-click migration from the legacy Jira integration to Jira Sync. They are separate integrations, so setting up the new Jira Sync will require a full reinstallation.

|                     | **Jira**                                                     | **Jira Sync**                          |
| ------------------- | ------------------------------------------------------------ | -------------------------------------- |
| **Used for**        | • Link previews • Link mentions • \[Legacy] Synced databases | • \[New and improved] Synced databases |
| **Setup**           | Individual user connection                                   | Workspace owner and Jira admin         |
| **Where to set up** | `Settings` → `Connections`                                   | `Settings` → `Import`                  |

### Update legacy synced databases

Legacy synced databases look something like this. If you do have a legacy synced database, you can follow [the steps above](https://www.notion.com/help/jira#synced-databases) to recreate your projects and issues databases in Notion using the new and improved Jira Sync.

![hc: legacy jira db](https://images.ctfassets.net/spoqsaf9291f/3HkgTALiMjEVC3iwuZWAMB/c7f10b182cb2f4ce57c55f92b54ec794/Group_93.png)

## Set up legacy Jira integration

1. Click this link to the [Jira integration page](https://www.notion.com/integrations/jira) and then `Add to Notion`.

   * You can also find this page by going to `Settings` → `Connections` → `Browse connections in Gallery`.

### Create link previews

**Note:&#x20;**&#x4C;ink previews work with all Jira Software deployment models (Jira Cloud, Jira Data Center, and Jira Server).

**To preview links from Jira:**

1. Go to `Settings` → `Connections`.

2. If you’re using Jira Cloud, find the `Jira` tile. If you're using Jira Data Center or Jira Server, find the `Jira preview (Data center)` tile. You might have to scroll down a little to find the data center tile. Then, select `Connect` underneath the tile.

3. In the window that appears, select your Jira version. Then, enter your site URL, username, and password and select `Authenticate`.

Once you’ve authenticated successfully, you’ll see `Jira` or `Jira preview (Data center)` at the top of your connections list. Any Jira link pasted into Notion should automatically appear as a link preview.

**Alternatively, you can set up link previews directly from a Notion page. To do this:**

1. In a Notion page, paste a Jira URL.

2. In the window that appears, select your Jira version if prompted. Enter your site URL, username, and password and select `Authenticate`.

### Create link mentions

**Note:** Link mentions work with all Jira Cloud products.

1. Paste a Jira link into Notion.

2. Select Mention in the menu that appears to easily reference a project or issue in your documents.

   * If you haven’t already connected Jira with Notion, you’ll be prompted to when you paste your Jira link into Notion. Learn more about link mentions in [this article →](https://www.notion.com/help/embed-and-connect-other-apps#link-mentions)

## Jira Sync

**The Jira Sync integration connects your Jira projects to Notion using an Admin API token (rather than a user token), providing a more consistent and centralized syncing experience.**

To ensure reliable syncing, we recommend creating a scopeless token by selecting `Create API token`, not `Create API token with scopes`**.**

Now you can take full advantage of Notion's features including [automations](https://www.notion.com/help/database-automations), [rollups](https://www.notion.com/help/relations-and-rollups), and [Notion AI](https://www.notion.com/help/notion-ai-faqs). Use Notion AI to quickly answer questions about your Jira projects.

**Note:**

* A workspace owner must set up Jira Sync first, then all members can use it.

* You can create a Jira service account to set up Jira Sync — just make sure the service account has access to any projects you want to sync into Notion beforehand.

* Synced databases work with Jira Cloud products (Jira Software, Jira Product Discovery, Jira Work Management, and Jira Service Management), with support for Jira Server coming soon!

Jira Sync displays your Jira projects and issues as Notion projects and issues databases. This setup allows you to see and track multiple projects using a variety of helpful [views, filters, and sorts](https://www.notion.com/help/views-filters-and-sorts).

You can even use identity mapping to connect Jira identities to Notion profiles so that you can see who’s responsible for what in synced Notion databases.

**🟡 Note:&#x20;**&#x4F;nl&#x79;**&#x20;**&#x77;orkspace owners can set up Jira Sync, by using a **Jira Admin token**. After that, any member can utilize the connection.

### Set up Jira Sync

Although any member can create syncs, you'll need to be a **workspace owner** to set up Jira Sync initially.

1. Go to `Settings` in your sidebar → `Import` → `Jira Sync`.

   * You can also paste in a Jira database link or use the slash command `/jira sync`.

   * If you’ve previously created a Jira synced database in Notion, open that database and select `Improve your Jira sync` at the top.

2. In the window that appears, select `Get started`.

3. Enter your Jira admin email, Jira site URL, and [API token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/#Create-an-API-token), then select `Next`.

**Note:** When creating an admin token for Jira Sync, we ***strongly recommend*** setting the expiration date as far in the future as possible.

Jira Sync relies on this token to maintain a stable connection—if it expires, the sync can break and updates may be missed.

### Add a new sync

**Note:&#x20;**&#x4D;embers need to authenticate their Jira to **add or remove projects**. They can only add projects they have access to in Jira.

1. Go to `Settings` in your sidebar → `Import` → `Jira Sync`.

   * You can also paste in a Jira database link or use the slash command `/jira sync`.

2. In the window that appears, select `Get started`.

3. Select the Jira site you want to sync from.

4. Select `Create a new sync` or select any existing sync you might already have in the dropdown menu. If you choose an existing sync, your projects will be added to your existing synced projects and issues databases.

5. In the database that opens, you’ll need to connect your Jira account (unless you’re the workspace owner who set up the integration). From here, select the data you want to sync into Notion. First `Select projects to sync`, then `Select properties to sync`.

Repeat the steps above if you’d like to set up another Jira sync for another site, teamspace, or workspace. Comments and attachments (up to five files per issue, no larger than 1MB) will also be synced.

You can [apply permissions](https://www.notion.com/help/sharing-and-permissions#permission-levels) to the database page to make the synced databases accessible to your collaborators.

**Note:&#x20;**&#x4A;ira synced databases will inherit Notion permissions. **Members can access synced databases on any pages they have permission to view.**

If a member adds a private Jira project to a Notion page, anyone with Notion page access will see it.

### People property in your synced database

Synced databases will include people properties! Now, you can use identity mapping to connect third party JIRA identities to your team's Notion profiles. To do this:

1. Confirm you have implemented Jira Cloud.

2. Confirm that your name and email address are the same in Notion as they are in Jira.

3. Follow the instructions [here ](https://id.atlassian.com/manage-profile/profile-and-visibility)to set your visibility to `Anyone`.

### Edit or delete your synced database

To edit the Jira projects and issue properties that have been synced to your Notion database, select `•••` at the top of your synced database → `Source`.

To delete a Jira synced database, select `•••` at the top of your synced database → `Delete Table`.

## How Jira Sync works

After the initial import, your Jira-synced projects is kept up to date in two ways:

* **Webhooks:** Updates made in Jira are sent to Notion in real time through webhooks.

  * These changes usually appear within minutes, but occasional delays or missed updates may occur due to network or system issues.

  * The webhook setup is done automatically when the sync is first established.

* **Resync:** If a webhook update is **missed** our resync mechanism will sync your collection with Jira again to ensure it's up to date:

  * The resync only runs when the collection is **actively viewed and can take time**, especially for large collections.

  * It will run at most once per day and is indicated by a “Sync in progress” label.

    * During this process, users can’t modify the sync configuration (e.g., adding/removing projects or properties).

**Note:&#x20;**&#x49;f a Jira property is a custom "text" field, it will be parsed as a text string and appear distorted—even if the input in Jira is a date, number, etc.

As an example, the *field type* in Jira must be set as a date field for the data to translate correctly in Notion and display as a date.

### Projects database

Your Jira projects will be synced into a Notion projects database. Your projects will be intelligently mapped to their corresponding Jira issues in a related, synced issues database in Notion. This database will come with pre-populated default database views to help you get started more quickly:

* Active (table view): This view shows the projects you’ve synced whose status is in progress. In other words, this view doesn’t show projects that have already been completed. There are also preset filters for owner and date to make searching easier.

* Timeline view: This view displays project name, status, owner, and completion rate. There are also preset filters for status, owner, and date to make searching easier.

* Board view: This view shows your projects grouped by status (`Planning`, `In Progress`). You can customize the statuses that show in the view in the `•••` menu. Projects are sorted by descending priority.

* All (table view): This view displays all of your synced projects. There are preset filters for status, owner, and date to make searching easier.

### Issues database

Your Jira issues (epic, bug, task, subtask, story) will be synced into a Notion issues database, the equivalent of a Notion [tasks database](https://www.notion.com/help/sprints#create-a-task-database). As with the synced projects database, there will be default database views created for you to help you get started more quickly:

* By Project (table view): This view shows all tasks, grouped by project. There are pre-set filters for status, assignee, date, and project to make searching easier.

* By Epic (table view): This view shows your Jira stories, tasks, and bugs grouped by Epic.

* Board view: This view is grouped by status and sorted by descending priority. The pre-set properties that will be displayed are assignee, project, priority, and sub-tasks,

* All tasks (table view): This view displays all your synced tasks. The pre-set properties that will be displayed are task name, status, assignee, date, priority, tags, and project

* Mine (table view): This view is filtered to only show tasks that are assigned to you. There are pre-set filters for status, date, and project.

## Unsupported Jira properties

Jira Sync supports most Jira properties, but not all of them. Here's the list of unsupported Jira properties:

|                |             |
| -------------- | ----------- |
| Time tracking  | Resolution  |
| Security level | Σ progress  |
| Progress       | Restrict to |
| StatusCategory | Rank        |

**Note:** While Notion doesn't support certain Jira custom properties, it does support all Jira primitive custom properties, such as string, number, select, person, and date.

## Sync duration and limitations

Experiencing an issue with Jira Sync? See how you can troubleshoot common errors [here →](https://www.notion.com/help/common-jira-sync-issues)

* It should only take a few minutes for the initial sync to complete, but depending on the size of your Jira projects and issues, this could take up to a few hours.

* Some issue fields or properties may not sync, such as rich text in property and nested multi-selects.

* For optimal performance, Jira properties with more than 1,000 values won’t be imported.

* Once the initial sync has been set up, updates to properties should be reflected in Notion in real time. If you create new properties, it could take up to 12 hours for those changes to sync.

* You can’t manually sync Jira with Notion — syncs happen in response to updates made in Jira.

* At this time, updates from Jira will sync to your Notion database in real time — not the other way around. Any changes you make in your Notion database won’t sync to Jira.

* You’ll be able to see when Notion last `Synced with Jira` with Notion, in a **blue** badge at the very top of a database. If instead you see a **yellow** `Sync failed` or `Sync stopped`, you may have to follow [the steps below](https://www.notion.com/help/jira#reconnect-your-synced-database) to reconnect Jira.

* The `Watcher` property can take up to 12 hours to sync properly.

**Note:&#x20;**&#x49;f you delete a property in Jira, the associated database item in your synced database will be deleted too.

## Reconnect your synced database

If your webhook registration has failed, or your project sync has failed, you’ll see `Sync failed` at the top of the database. To solve this issue, try the sync again with a different set of projects. You can also ensure that your projects don’t have any issues in Jira.

If your Jira token is no longer valid or someone has disconnected Jira from Notion, you’ll see `Sync stopped` at the top of the database. To solve this issue, select `Re-authenticate` next to `Sync stopped`. You must be a workspace owner to complete this process.

Once your Jira instance is reconnected with Notion, your projects and issues databases won’t be recreated; instead, you’ll continue to use the projects and issues databases you had before.

## Disconnect Jira

If you want to completely disconnect Jira from Notion:

1. Go to `Settings` in your sidebar → `Import`.

2. Select select `•••` next to Jira → `Remove`.

**Learn more**

* [Common Jira Sync issues](https://www.notion.com/help/common-jira-sync-issues)

* [Notion AI connector for Jira](https://www.notion.com/help/notion-ai-connector-for-jira)
