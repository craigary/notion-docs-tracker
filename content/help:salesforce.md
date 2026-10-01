---
title: "Connect Salesforce to Notion"
emoji: null
description: "Bring customer and pipeline data into Notion to support account plans, handoffs, and team reporting."
url: "https://www.notion.com/help/salesforce"
key: "help:salesforce"
coverImage: null
category: "Connections"
categoryKey: "category:connections"
---

A managed Salesforce sync creates Notion databases for the accounts, contacts, and opportunities you choose. Notion imports existing records and checks Salesforce for changes every minute.

This guide covers **Database sync** in your Salesforce connection settings. Synced properties are read-only in Notion. Make changes to customer records in Salesforce.

**Note:&#x20;**&#x54;his Salesforce integration replaces our [legacy version](https://www.notion.com/help/salesforce-legacy). To keep your external data current, **set up your new syncs by October 30, 2026**. Your existing synced databases will remain in Notion, but they will stop updating after that date.

## What you can sync

Choose one or more of these Salesforce object types:

| **Object type** | **Examples of standard properties**                          |
| --------------- | ------------------------------------------------------------ |
| Accounts        | Name, Type, Industry, Website, Phone, Annual Revenue         |
| Contacts        | Name, First Name, Last Name, Email, Phone, Title, Department |
| Opportunities   | Name, Stage, Amount, Close Date, Probability                 |

Notion creates a separate database for each selected object type. Synced records also show when each record was created and last changed in Salesforce. Available properties depend on the connected account’s field access.

When accounts and contacts are included in the same sync, Notion can relate contacts to their accounts. The same applies to opportunities and accounts. The connected account needs access to the Salesforce account reference field, and the related account must be included in the synced data.

Leads, cases, and custom Salesforce objects aren’t supported by this managed sync.

## Before you start

You’ll need:

* Membership in the Notion workspace.

* A Salesforce account with API access.

* Permission to read and query the selected objects and fields.

Your Salesforce administrator may need to approve the connection or update your account’s permissions. Notion can only sync the data the connected account can read.

## Create a Salesforce sync

1. In Notion, go to **Settings** → **Connections** → **Salesforce**.

2. Open **Database sync** and connect your Salesforce account.

3. Complete Salesforce’s authorization steps and select the connected account.

4. Enter a **Name of sync**.

5. Under **Objects to sync**, choose **Accounts**, **Contacts**, **Opportunities**, or a combination.

6. For each object type, choose the properties to include. **Sync all current and future properties** is off by default, so no custom properties sync until you turn it on or select specific ones.

7. Choose all available records or a history window.

8. Select **Create sync**.

Notion creates the selected databases in your **Private** sidebar section. Each object type imports separately, so one database may finish before another.

**Tip: Sync all objects refers to records in your selection.** This history setting includes all available records from the object types you selected. It doesn’t add other Salesforce object types.

## Choose properties to sync

Turn on **Sync all current and future properties** for an object type to include its supported custom properties now and when they’re added later. This setting starts off for each object, so no custom properties sync until you turn it on or choose specific ones.

To choose specific properties, turn that setting off and select the fields you need. A manual selection doesn’t automatically include new fields.

Supported values include checkboxes, numbers, currencies, percentages, dates, email addresses, phone numbers, URLs, text, and supported single- or multiple-choice fields. Some field types aren’t supported, including encrypted fields, binary fields, and custom reference fields. Custom lookup fields don’t become Notion relations.

Standard property names use the available Salesforce field labels. Custom property names are derived from their Salesforce API names, so they may differ from the labels you see in Salesforce.

Notion periodically checks for new properties. A newly added property may remain empty on existing pages until the source record changes or is imported again.

## How Salesforce syncs run

### The first import

Notion imports live records for each selected object type within your history window. Records already marked as deleted in Salesforce aren’t included in the initial import.

The import runs in batches. Its duration depends on the number of records and Salesforce’s request limits. You can open the databases while the import continues.

### Ongoing updates

Notion checks for changes every minute. It uses the time Salesforce last changed a record to find new and updated records, then updates the matching Notion pages.

The one-minute interval is how often Notion checks. It isn’t a guarantee that every change appears within one minute. Large updates, request limits, and temporary service issues can take longer to process.

The sync also processes deleted records when Salesforce returns them in its change results. If Salesforce removes a record before the sync notices the deletion, that record can stay in Notion.

Notion continues syncing when you close the app.

## Choose how much history to sync

Choose all available records or records modified in the last 30, 90, or 365 days.

The window is based on when Salesforce last changed each record. It doesn’t use the date the record was created or an opportunity’s close date.

An active account or open opportunity can fall outside the window if it hasn’t been modified recently. A contact or opportunity can also have an empty account relation when its account is outside the selected window.

**Note**: Older pages can be removed. Records that fall outside the history window are removed from the synced database, including values in your own Notion properties. Choose all available records if you need to retain unchanged accounts or opportunities.

## Change or delete a sync

Open the sync in **Settings** → **Connections** → **Salesforce** → **Database sync**.

You can edit the sync name, selected object types, property selections, and history window.

* **Add an object type:** Notion creates its database and imports matching records.

* **Remove an object type:** Updates stop for that type. Its existing database and pages remain, with synced properties still read-only.

* **Add that object type again:** Notion resumes syncing into its existing database.

* **Expand history:** Notion imports additional matching records.

* **Shorten history:** Notion removes records outside the new window.

Use **Pause sync** to temporarily stop syncing without losing its data or settings, then **Resume sync** when you’re ready to continue. This doesn’t affect existing Notion pages.

To stop the entire sync permanently, use **Delete sync**. The databases and pages remain, but no longer receive updates. Synced properties remain read-only. Deleting the sync can’t be undone.

## Work with Salesforce data in Notion

Create views for the accounts or opportunities your team needs. Add Notion properties for planning and coordination, such as an account plan status or a handoff owner. Values in these properties aren’t written back to Salesforce.

Make changes to synced values in Salesforce.

The databases start as private. If you share them, Notion’s permissions determine who can see the imported data. Notion doesn’t reapply your Salesforce sharing rules to each person who views the database.

Changes to Salesforce access may stop future updates without removing previously imported data. Review the Notion databases and their sharing settings when source permissions change.

## Troubleshoot a Salesforce sync

### I can’t connect or select an object type

Ask your Salesforce administrator to confirm that your account has API access and permission to read the object. Your organization may also need to approve the connection.

### A field is missing or empty

Check the object’s property selection and the connected account’s field access. Some field types aren’t supported. A new property may be present before its values appear on older records.

### An account relation is empty

Include **Accounts** in the same sync as the contacts or opportunities. Confirm that the account is within the history window and that the connected account can read the account reference field. The account may also still be importing.

### A deleted record is still present

Salesforce must make the deletion available to the sync before Notion can process it. A deletion that was purged before detection may leave a page in Notion. Review the affected database if its contents must reflect that removal.

### Updates have stopped

Open the sync’s status details. Reconnect or ask your Salesforce administrator to restore access if prompted. Salesforce request limits and temporary outages can delay updates while Notion retries.

## Related guides

For a comparison with Workers and shared troubleshooting guidance, see [Sync data from other tools to Notion →](https://www.notion.com/help/sync-data-from-other-tools-to-notion)
