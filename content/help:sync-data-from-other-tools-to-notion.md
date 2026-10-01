---
title: "Sync data from other tools to Notion"
emoji: null
description: "Bring data from tools like GitHub, Jira, and Salesforce into Notion databases that update automatically."
url: "https://www.notion.com/help/sync-data-from-other-tools-to-notion"
key: "help:sync-data-from-other-tools-to-notion"
coverImage: null
category: "Connections"
categoryKey: "category:connections"
---

Our database syncs let you work with and enrich information from other tools alongside your team’s plans, docs, and projects. Connect an account, choose what to sync, and Notion creates the databases and keeps them updated.

## What you can sync

Notion manages these syncs so you can connect an account and use synced databases without building or maintaining the integration yourself.

| Connection | Data you can sync                                     | Databases created                                                |
| ---------- | ----------------------------------------------------- | ---------------------------------------------------------------- |
| GitHub     | Pull requests from selected repositories              | Pull Requests                                                    |
| Jira       | Spaces and work items from selected Jira Cloud spaces | Jira Spaces and Jira Work Items                                  |
| Salesforce | Accounts, contacts, and opportunities                 | Accounts, Contacts, and/or Opportunities, depending on selection |

Each record from the other tool becomes a page in a Notion database. Fields from the source become database properties.

Managed syncs update data in one direction: from the connected tool to Notion. Synced properties are read-only in Notion. To change a synced value, update it in GitHub, Jira, or Salesforce. You’ll see the change in Notion.

Syncs run automatically in the background. Update timing varies by connection, the amount of data, and the source tool’s request limits.

**Note:&#x20;**&#x4E;eed to connect another tool? If the tool you want to connect isn’t supported, use [Notion Workers](https://developers.notion.com/workers/guides/syncs) to build a custom sync, or follow our pre-built Workers Guides for [Asana](https://notion.notion.site/asana-worker-guide) and [GitLab](https://app.notion.com/p/notion/GitLab-Guide-Worker-Sync-3abefdeead0583b8b9b90172edb1ea0a).

## Before you start

You’ll need to be a member of the Notion workspace and have an account with access to the data you want to sync. Your organization may require an administrator to approve the connection or grant access in the source tool.

The account you use to create the sync determines which data Notion can read. If its permissions change or the connection expires, the sync may require you to re-authenticate.

GitHub Sync and Jira Sync require a Business plan (or the Mobile Business add-on). Salesforce Sync requires an Enterprise plan.

## Set up a managed database sync

1. Open **Settings** → **Connections** in your Notion workspace.

2. Open the connection you want to sync (GitHub, Jira, or Salesforce) from **Browse** or **Installed**, then choose **Database sync** from that connection’s options.

3. Connect an account and complete the authorization steps for that tool.

4. Choose the repositories, spaces, or object types you want to sync.

5. Choose how much history to include. For sources that offer custom properties, such as Jira and Salesforce, you can also choose which custom properties to include in your sync.

6. Select **Create sync**.

Notion creates the databases in your **Private** sidebar section. The first import starts in the background. You can open the databases while records are still being imported.

## How syncs run

### The first import

Notion creates the database structure, then imports the records that match your settings. Large imports can take longer because Notion reads data in batches and follows the source tool’s request limits.

The database may show only part of your data while the first import is running. You don’t need to keep Notion open for the import to continue.

### Ongoing updates

After the first import, Notion regularly checks the connected tool for new or changed records and updates the synced properties. Syncs continue in the background even when no one is viewing the database.

In general we expect changes to sync to Notion in a few minutes or less.

Timing varies by connection, the amount of data, and the source tool’s availability. A check for changes doesn’t mean every change appears in Notion immediately. Salesforce checks for changes every minute by default; see each connection’s guide for details.

When the source temporarily limits requests or becomes unavailable, Notion retries. If the sync needs a new authorization or different permissions, its status tells you what to do.

### History windows

You can include all available history or limit the sync to records updated in the last 30, 90, or 365 days. A history window uses the source record’s last update time, rather than its creation date. Salesforce uses its system modification time.

The window moves forward over time. A record can leave the database when it hasn’t been updated within that window, even if it’s still open or active in the source tool.

**Note:&#x20;**&#x41; history window can remove pages. When a record falls outside the window, its synced page is removed from Notion, including any values you added to that page in your own properties. Choose all available history if you need to keep older, unchanged records.

Expanding the window imports additional matching records. Shortening it removes records that no longer qualify. This is different from a Notion database filter, which only changes what a view displays.

## Use and share your synced databases

You can create views, filter and sort records, and add your own Notion properties. For example, add a team priority to pull requests or an account planning status to Salesforce accounts. Values in these properties stay in Notion.

Give your own properties distinct names so they don’t conflict with properties managed by the sync.

The databases start as private pages. Share them using Notion’s page permissions when you’re ready.

**Note**: Notion sharing controls who can see the synced data. A person with access to the Notion database may be able to see records they can’t access in the source tool. Source permissions aren’t copied to each viewer in Notion. Review access before sharing.

A change to permissions in the source tool may stop future updates without removing data already in Notion. Review the Notion database’s sharing settings when source access changes.

## Check sync status

Return to the connection’s **Database sync** settings to review the sync status, recent run information, and any error details.

| Status                      | What to do                                                                                     |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| Initializing or Backfilling | The sync is being set up or importing existing records. Allow the import to continue.          |
| Healthy                     | The sync is running normally. Recent source changes may still be processing.                   |
| Degraded or Failing         | Open the sync’s error details to see what is delaying updates.                                 |
| Action needed               | Follow the displayed instructions, such as reconnecting an account or restoring source access. |
| Disabled                    | The sync is paused. You can unpause in the sync’s settings.                                    |
| Unavailable                 | Status information isn’t currently available. Check again later.                               |

A recent run time shows activity. It doesn’t guarantee that every source change has already reached Notion.

## Choose a managed sync or a Worker

Use a managed sync when one of the supported connections includes the data and settings you need. Notion handles the initial import, recurring checks, and connection-specific sync logic.

Use a Notion Worker when you need to build a custom sync, such as importing from another service or transforming data before it reaches Notion.

| What you need                              | Managed database sync                                  | Worker                                                               |
| ------------------------------------------ | ------------------------------------------------------ | -------------------------------------------------------------------- |
| Set up a supported connection without code | Choose an account, data, and settings in Notion.       | Requires code and deployment.                                        |
| Choose the data structure                  | Use the connection’s supported records and properties. | Define a custom schema and transformations.                          |
| Customize how data is fetched              | Use the built-in sync behavior.                        | Implement the source requests and sync behavior your workflow needs. |
| Maintain the sync                          | Notion maintains the built-in connection logic.        | Your team maintains the Worker code; Notion runs the Worker.         |

For example, use a managed GitHub sync to track pull requests in Notion. Consider a Worker if you need a custom source, additional record types, or calculations that combine data before import.

## Troubleshoot a sync

### Records are missing

Check the selected repositories, spaces, or object types, your history window, and the connected account’s source permissions. Also check whether the first import is still running and whether a Notion view filter is hiding records.

### Relations are missing

If a synced page should be related to another synced page but isn’t, it might be because of your history window, or the related page is still being imported. We only create relations when both pages are synced to Notion databases.

### Updates have stopped

Open the sync’s status details. Reconnect if authorization has expired, or ask your source administrator to restore access. Temporary source outages and request limits can delay updates while Notion retries.

### The sync has reached a row limit

Reduce the selected data or choose a shorter history window. Review the effect before saving: removing a source or shortening history can remove synced pages. The connection-specific guides explain what happens when you change a selection.

## Related guides

* [Connect GitHub](https://www.notion.com/help/github)

* [Connect Jira](https://www.notion.com/help/jira)

* [Connect Salesforce](https://www.notion.com/help/salesforce)

For an existing Asana or GitLab sync, use the Worker replacement guides:

* [Connect Asana](https://www.notion.com/help/connect-asana)

* [Connect GitLab](https://www.notion.com/help/connect-gitlab)
