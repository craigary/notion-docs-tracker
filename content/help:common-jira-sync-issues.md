---
title: Common Jira Sync issues
emoji: ‼️
description: Here’s a list of common issues you might run into with Jira Sync and why they might occur ‼️
url: https://www.notion.com/help/common-jira-sync-issues
key: help:common-jira-sync-issues
coverImage: https://images.ctfassets.net/spoqsaf9291f/15MnehxCRUUA3LITX21Lar/7c80798bd5cce07c4b492cb6543419c7/Troubleshooting_Reference_Visuals.png
category: Data & integrations
---

## Data looks outdated, or projects have disappeared

This issue might occur if you’ve renamed a project key after importing it. Remove the affected project from the sync and re-import it using the updated key.

## Sync is broken

This issue might occur if you’ve changed the Jira site URL used to create the sync. The URL and the sync are directly tied together, so changing the URL after the sync is created will lead the sync to break, leading to stale data and loss of real-time updates.

## Sync failed

Jira sync requires a token with the appropriate API permissions to function properly. If the token lacks necessary access, the sync may fail. When this happens, you'll see `Sync failed` in Notion. To fix this, ensure the Jira API token used has the necessary permissions for webhooks and data access.

## Field values are missing

We’ve recently improved our sync logic for select and multi-select Jira fields to prioritize values actively used in imported issues. If you’re seeing missing field values in an existing sync, try removing and re-importing the affected fields to apply the new logic.

## Dates in Jira are one day earlier or one day later than expected

Jira dates may be interpreted differently in Notion, appearing one day earlier or later than expected. This is because Jira does not provide timezone information for date fields.

## Jira and Notion statuses don’t match

Jira statuses do not match Notion's one-to-one. Whenever possible, Notion will try to match the most appropriate status based on the phrase or wording. For example, a “Working” status in Jira may be mapped to a “Done” status in Notion.

## Linked issues don’t show up in Notion

Linked issues across Jira projects are only preserved if both projects are selected when you set up the sync. If either project is not included in the sync, the relationship will not be imported.

## Can’t add or remove projects and properties

If you’re unable to edit projects and properties, make sure you have `Full access` or `Can edit` access to the synced database.

## Can’t see updates in Notion

If you’re not seeing updates on the Notion side, try refreshing the page.
