---
title: "Custom data retention settings"
emoji: null
description: "Learn about custom data retention settings in Notion."
url: "https://www.notion.com/help/custom-data-retention-settings"
key: "help:custom-data-retention-settings"
coverImage: null
category: "Administer your workspace"
categoryKey: "category:enterprise-admin"
---

**Note:&#x20;**&#x43;ustom retention periods are only available on the Enterprise Plan. Automatically deleting inactive AI chats is available on Business and Enterprise plans.

## What happens to deleted content

| **Stage**               | **How content gets there**                                                              | **Applies to**                                        | **Who can restore**                                                           | **How long it stays**        |
| ----------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------- |
| **In Trash**            | A user with `Can edit` or `Full access `moves a page to Trash                           | Pages, databases                                      | A user with `Can edit` or `Full access`, from Trash                           | 30 days (Enterprise: custom) |
| **Deleted**             | Trash retention period ends. Inactive AI chats land here directly and skip Trash.       | Pages, databases, Custom Agent chats, Notion AI chats | Enterprise workspace owners, from Content search. AI chats can't be restored. | 30 days (Enterprise: custom) |
| **Permanently deleted** | Deleted content retention period ends, or someone permanently deletes a page from Trash | Pages, databases, Custom Agent chats, Notion AI chats | No one                                                                        | Gone                         |

## Settings by plan

| **Setting**                                       | **Free, Plus, Business plan**                                                               | **Enterprise plan**                                             |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Retention for pages and databases in Trash**    | 30 days, can't be changed                                                                   | Custom, 1 day to 10 years                                       |
| **Retention for deleted content**                 | 30 days, can't be changed                                                                   | Custom, 1 day to 10 years                                       |
| **Automatically delete inactive Notion AI chats** | Business only: Off (default) or after 90 days of inactivity. Not available on Free or Plus. | Off by default. Custom timeline, minimum 30 days of inactivity. |

## Retention for pages and databases in Trash

Users can move pages and databases to Trash if they have `Can edit` or `Full access`. They can also restore those pages and databases or permanently delete them from Trash at any time.

As an Enterprise workspace owner, you can decide how long a page or database stays in Trash before it moves to Deleted content, where users can no longer access it. To do this:

1. Go to `Settings` in your sidebar.

2. Select `Security`.

3. Open the `Data retention` tab.

4. You’ll see the current setting for how long pages and databases stay in Trash before they move to Deleted content. By default, this is 30 days. Select the current time period to change it.

   * Set a custom time period between one day and 10 years. Your time period can be set in days or years.

5. Once you’re done, select `Save`. If you shorten this period, pages or databases that have been in Trash longer than the new period move to Deleted content right away.

When users in your workspace navigate to Trash in the sidebar, they’ll be able to see how long pages or databases have before they leave Trash.

On all plans except Enterprise, retention for pages or databases in Trash is set to 30 days and can’t be changed.

## Retention for deleted content

Deleted content includes pages and databases that have left Trash, deleted Custom Agent chats, and deleted Notion AI chats.

During the retention period, Enterprise workspace owners can find and restore deleted pages or databases from Content search. After the period ends, Notion permanently deletes the content. Note that Notion AI chats and Custom agent chats skip Trash and go straight to Deleted content.

Workspace owners on Enterprise plans can set the length of this retention period:

1. Go to `Settings` in your sidebar.

2. Select `Security`.

3. Open the `Data retention` tab.

4. Under Retention for deleted content, you’ll see the current setting for how long Deleted content is retained before it's permanently deleted. By default, this is 30 days. Select the current time period to change it.

   * Set a custom time period between one day and 10 years. Your time period can be set in days or years.

5. Once you’re done, select `Save`. If you shorten this period, some Deleted content may be permanently deleted right away.

Once content is permanently deleted, whether from Trash or at the end of the retention period, no one can access or restore it, including workspace owners.

On all plans except Enterprise, retention for Deleted content is set to 30 days and can’t be changed.

## Automatically delete inactive AI chats

Workspace owners on Enterprise and Business plans can choose to automatically delete all AI chats, including Notion AI and Custom Agent chats, that have had no activity for a set time period. Deleted AI chats skip Trash and are kept for your retention period for Deleted content (30 days on Business, custom on Enterprise), then permanently deleted.

To set the timeline for deletion:

1. Go to `Settings` in your sidebar.

2. Select `Security`.

3. Open the `Data retention` tab.

4. Under Automatically delete inactive chats, you'll see the current setting for when inactive AI chats are Deleted. By default, inactive AI chats aren't Deleted. Select the current time period to change it.

   * Workspace owners on Business plans can turn on deletion after 90 days with no activity, or leave it off.

   * Workspace owners on Enterprise plans can choose a custom timeline for deletion, at a minimum of 30 days with no activity.

5. Once you’re done, select `Save`. After you save, chats with no activity in the chosen period start being deleted the next day.

## Use content search

Enterprise workspace owners can use [Content search](https://www.notion.com/help/admin-content-search) to find pages and databases in Trash or Deleted (which have left Trash but are still within your retention period).

To use Content search to find these pages:

1. Select `Settings` in the sidebar → `Content search`.

2. Use the `Page status` filter and select `In Trash` or `Deleted`. Add any additional filters you’d like; you can learn more about these [here →](https://www.notion.com/help/admin-content-search)

## Restore pages or databases

Enterprise workspace owners can restore pages or databases in Trash or Deleted (which have left Trash but are still within your retention period) to their original location.

To restore:

1. Select `Settings` in the sidebar → `Content search`.

2. Select `•••` next to a page or database that’s in Trash or Deleted. Before you restore the page, you can select `View original permissions` to see who will regain access if you choose to put the page back where it used to be. Then, select `Restore to original location` or `Restore to Private pages`.

## Permanently delete pages or databases

To permanently delete a page or database from your workspace:

1. Select `Settings` in the sidebar → `Content search`.

2. Select `•••` next to a page that’s in Trash or `Deleted` → `Permanently delete`.
