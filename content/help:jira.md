---
title: "Connect Jira to Notion"
emoji: null
description: "Bring Jira spaces and work items into Notion so your team can track delivery alongside project plans and documentation."
url: "https://www.notion.com/help/jira"
key: "help:jira"
coverImage: null
category: "Connections"
categoryKey: "category:connections"
---

A managed Jira sync creates connected databases for your selected Jira Cloud spaces and their work items. Notion imports the data and checks Jira for updates in the background.

This guide covers **Database sync** in your Jira connection settings. Synced properties are read-only in Notion. Make changes to work items in Jira.

**Note:&#x20;**&#x54;his Jira integration replaces our [legacy version](https://www.notion.com/help/jira-legacy). To keep your external data current, **set up your new syncs by October 30**. Your existing synced databases will remain in Notion, but they will stop updating after that date.

## What you can sync

A Jira sync creates two databases:

* **Jira Spaces:** The selected spaces, with their name, key, type, visibility, Jira URL, and related work items.

* **Jira Work Items:** Work items from those spaces, with the supported standard and custom properties you choose.

| **Work item information** | **Properties**                   |
| ------------------------- | -------------------------------- |
| Identity                  | Summary, Key, Jira URL           |
| Progress                  | Status, Work Type, Priority      |
| People                    | Assignee, Reporter               |
| Organization              | Labels, Space, Parent, Sub-items |
| Dates                     | Created, Updated, Due Date       |

Assignee and Reporter currently sync as real Notion person properties (matched by name to workspace members). Each has a companion read-only text property: `Assignee (Jira)` and `Reporter (Jira)`. These properties hold the raw Jira display name as a fallback.

Relations connect work items to their spaces and connect parent work items to sub-items when the related records are available in the sync. A related work item outside your selection or history window may not appear in the relation.

Each synced Jira work item becomes a page in your Jira Work Items database. Its Jira description appears in the page body. Comments and attachments aren’t currently synced.

## Before you start

You’ll need to be a member of the Notion workspace, plus access to the Jira Cloud site and spaces you want to sync.

The connected Jira account must be able to read the selected spaces and work items. Your Jira organization may require an administrator to approve the connection or grant access.

Managed Jira syncs support Jira Cloud. Jira Server and Jira Data Center aren’t supported by this setup flow.

Managed Jira syncs require a Notion Business or Enterprise plan (or the mobile Business entitlement). Workspaces on a lower plan can still connect and manage Jira accounts, but creating or resuming a sync is blocked until the workspace upgrades.

## Create a Jira sync

1. In Notion, go to **Settings** → **Connections** → **Jira**.

2. Open **Database sync** and connect your Jira account.

3. Complete Jira’s authorization steps and choose the connected Jira site.

4. Select the spaces to sync.

5. Choose which custom properties to include.

6. Choose all available work items or a history window.

7. Select **Create sync**.

Limits apply to the number of spaces included in each sync and the number of database syncs created by each user and workspace.

Notion creates **Jira Spaces** and **Jira Work Items** in your **Private** sidebar section and starts the first import.

This connection uses account authorization. You don’t need to set up a Jira webhook for managed database sync.

## Choose custom properties

You can select custom properties for the spaces you’ve chosen, or turn on **Sync all current and future custom properties**.

* **Choose specific properties:** Open **Custom properties** for a space, search for the properties you need, and select them. You can use **Select all current** or **Deselect all** to change the current selection.

* **Include future properties:** Turn on **Sync all current and future custom properties** to include supported properties now and when they’re added later. This setting applies across the selected spaces.

A custom property shared by several Jira spaces uses the same underlying field. Selecting it in one space also includes it where that field is shared across other selected spaces.

Notion uses a compatible property type where possible. For example, numbers become number properties, single-choice fields become select properties, and supported multiple-choice fields become multi-select properties. Other supported values may appear as text. If custom properties have the same name, Notion may add a field identifier to distinguish them.

Newly discovered properties can appear before their values are populated on existing pages. An older work item may need to change in Jira or be imported again before its new property values appear.

## How Jira syncs run

Notion first imports work items from each selected space within your history window. It then regularly checks Jira for new and updated work items.

Changes to supported fields, such as status, priority, assignee, or labels, update the corresponding Notion properties. Notion also periodically checks for changes to the available custom properties.

The sync continues when you close Notion. The first import, Jira request limits, and temporary service issues can delay updates. Check the sync’s status for progress or errors.

## Choose how much history to sync

Include all available work items, or choose work items updated in the last 30, 90, or 365 days.

The window uses the Jira work item’s last update time. It doesn’t depend on its creation date, due date, or status. An unresolved work item can leave the synced database if it hasn’t been updated within the window.

The history window applies to work items. Selected space records remain in **Jira Spaces**.

**Tip: A history window can remove work item pages.** When a work item falls outside the window, its Notion page is removed, including values in your own properties. Choose all available work items if you need to retain older, unchanged work.

## Change or delete a sync

Open the sync in **Settings** → **Connections** → **Jira** → **Database sync** to edit it.

* **Add spaces:** Notion imports the newly selected spaces and their matching work items.

* **Remove spaces:** Notion removes the affected synced space pages and work item pages.

* **Change custom properties:** Update the selection and save. Notion updates the sync and may need to import data again.

* **Change history:** Expanding the window imports more work items. Shortening it removes work items outside the new window.

Preserve any Notion-only information you need before removing spaces or shortening history.

To stop the sync permanently, use **Delete sync**. The existing Notion databases and pages remain, but stop receiving updates. Their synced properties remain read-only. Deleting the sync cannot be undone.

## Share Jira data in Notion

Add views and your own properties to organize work items for your team. Values you add to Notion-only properties aren’t sent to Jira.

Both databases start as private. When you share them, Notion permissions control access to the imported data. Jira permissions aren’t checked separately for every Notion viewer.

The **Visibility** property describes the Jira space. It doesn’t control who can see that space’s data in Notion.

## Troubleshoot a Jira sync

### I can’t find a site or space

Confirm that you connected the correct Jira account and site. Ask your Jira administrator to check your access to the space and its work items.

### A custom property is missing or empty

Check that the property is selected, or turn on **Sync all current and future custom properties**. The connected account also needs access to the field. New fields may appear in Notion before existing work items receive values for them.

### A parent or space relation is empty

Confirm that the related record is included in the sync. A parent work item may be outside the selected spaces or history window, or may still be importing.

### A deleted or restricted Jira item still appears in Notion

A deletion or permission change in Jira may not remove the Notion page right away. Check the Notion database’s contents and sharing settings if the item should no longer be visible.

### Updates have stopped

Open the sync’s status details. Reconnect the account or restore Jira access when prompted. Temporary Jira outages and request limits can delay updates while Notion retries.

## Related guides

For a comparison with Workers and shared troubleshooting guidance, see [Sync data from other tools to Notion →](https://www.notion.com/help/sync-data-from-other-tools-to-notion)
