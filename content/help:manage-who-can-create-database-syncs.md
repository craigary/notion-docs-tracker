---
title: "Manage who can create database syncs"
emoji: null
description: "Workspace owners can choose who's allowed to create database syncs with providers like Jira, GitHub, and Salesforce. Pick all members, owners only, or owners plus specific groups."
url: "https://www.notion.com/help/manage-who-can-create-database-syncs"
key: "help:manage-who-can-create-database-syncs"
coverImage: null
category: "Connections"
categoryKey: "category:connections"
---

Workspace owners can control who is allowed to create connections from the workspace’s connection settings. Any workspace member (other than guests) can create a database sync for a supported provider, as long as the workspace’s plan includes that provider’s sync. Members can sign in with their own accounts and sync data from source accounts they can access.

**Note**: This setting controls who can create database syncs. Existing syncs are managed from the relevant provider’s connection page.

## Who can manage this setting

Only workspace owners can see the **Manage** tab in **Settings → Connections** and change connection permissions.

## Open connection management settings

1. Open **Settings**.

2. Select **Connections**.

3. Open the **Manage** tab.

The **Manage** tab has two sections:

* **Manage connections and tokens:** Open **All connections** to review connections added by workspace members, or **All personal access tokens** to review tokens created by members.

* **Manage permissions:** Configure connection installation permissions, custom MCP server access, and who can create internal connections.

## Choose who can create internal connections

1. In **Settings → Connections → Manage**, scroll to **Manage permissions**.

2. Find **Limit who can create internal connections**.

3. Open the dropdown and choose one of the following:

   * **All workspace members:** Any workspace member can create a database sync.

   * **Workspace owners only:** Only workspace owners can create a database sync.

   * **Workspace owners & selected groups:** Workspace owners and members of selected groups can create a database sync.

4. If you choose **Workspace owners & selected groups**, select the groups that should have access.

This control is separate from **Limit which connections members can install**, which determines which connections members are allowed to install.

## Find providers that support database syncs

1. In **Settings → Connections**, open **Browse Connections**.

2. Use **Search connections** to find a provider, or narrow the catalog using **All categories** and **All types**.

3. Open **All types** and select **Database sync** to find providers that support database syncs.

4. Choose a supported provider, such as Atlassian, GitHub, or Salesforce.

## Review existing workspace connections

1. In **Settings → Connections**, open **Connected**.

2. Use **Search connections**, **All categories**, or **All types** to find a connection.

3. Check the label next to its name:

   * **Built by Notion:** A connection built by Notion.

   * **Internal:** A connection built by your team, including connections created using Workers.

4. Use the action shown next to the connection, such as **Finish setup**, **Add services**, or **Manage**, to continue setup or open its settings.

The **Connected** tab lists connections, not individual database syncs. To review the syncs for a provider, open that provider’s **Database sync** settings and select **Your syncs**.

## Connect a provider

After selecting a provider:

1. Select **Database sync** from the provider’s connection types.

2. Open **Overview**.

3. Select the connection button, such as **Connect Jira**.

4. Follow the provider’s steps to sign in and approve access.

## Create a sync

The available configuration depends on the provider. For Jira, you can:

1. Choose a connected Jira site.

2. Select the Jira Spaces to include.

3. Choose how much Work Item history to sync.

4. Select custom properties, or turn on **Sync all current and future custom properties**.

5. Select **Create sync**.

## Review and edit your syncs

Open the provider’s **Database sync** settings and select **Your syncs**. Each sync shows:

* The connected source account

* The selected resources

* The databases created by the sync

* The current status of each database

* The latest synced-through time

Select **Edit** to change the sync’s configuration.

During the first import, one database may be **Healthy** while another is still **Backfilling**.

## Check sync health from a database

1. Open the synced database.

2. Select **Synced** at the top of the database.

3. Review the current status and **Synced through** time.


## FAQs

### Does changing this permission affect existing syncs?

No, if a workspace owner updates who can create syncs, existing syncs will remain in place.


### Can workspace owners edit or delete a sync created by another member?

Yes, workspace owners can edit or delete any sync created by another member.


### Which plans support database syncs?

* **Enterprise:** Salesforce

* **Business:** Jira & GitHub
