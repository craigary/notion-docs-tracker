---
title: Sub-items & dependencies
emoji: 🐣
description: Use sub-items and dependencies to give depth to any workflow 🐣
url: https://www.notion.com/help/tasks-and-dependencies
key: help:tasks-and-dependencies
coverImage: https://images.ctfassets.net/spoqsaf9291f/ZPIpjGDflVkd9GQhac9Rx/d612b8bc3dab47f502d9d49d90618395/Tasks_and_depencenies.png
category: Databases
---

* Learn more about task databases [here →](https://www.notion.com/help/sprints)

* Want to see and manage all of your tasks in one place? Learn about My tasks [here →](https://www.notion.com/help/home-and-my-tasks)

## Sub-items

Sub-items allow you to break tasks into smaller, distinct pieces of work, so that they can be easily scoped out, assigned, and tracked. They are visible in all database views.

### Enable sub-items

To enable sub-items:

1. Open the settings menu at the top of your database.

   ![hc: db settings icon](https://images.ctfassets.net/spoqsaf9291f/8Oc0IxM1zM5a9prvSOKNt/c07afa142404beaf680fb079ee9bc085/Reference_Visuals_Group_159.png)

2. Under `Database settings`, select `More settings`.

3. In the menu that appears, select `Sub-items` → `Turn on sub-items`.

### View and filter sub-items

Depending on your database view, there are a few ways you can view your sub-items. To adjust the way sub-items show up in your database:

1. Open the settings menu at the top of your database.

2. In the menu that appears, select `Sub-items`.

3. Open the dropdown menu under `Display options` and select your desired option.

For table, list, and timeline views, you can choose:

* `Nested in toggle`: This will allow you to open and close toggles in parent items to show or hide sub-items within them.

* `Flattened list`: This will show all of your parent and sub-items in a flat list. In other words, sub-items won’t be indented in the list to distinguish them from parent items.

For board, calendar, and gallery views, you can choose:

* `Card property`: This will show all your sub-items on the card for your parent item.

* `Flattened list`: This will show all of your parent and sub-items as separate items.

To adjust the way sub-items are impacted by **filters** you apply to your database:

1. Open the settings menu at the top of your database.

2. In the menu that appears, select `Sub-items`.

3. Open the dropdown menu under `Filter options` or `Include` (depending on your current display option) and select your desired option.

For table, list, and timeline views, you can choose:

* `Parents only`: Parents that match your filters will display, along with the number of sub-items they have.

* `Parents and sub-items`: Parents and sub-items that match your filters will display.

* `Sub-items only`: Sub-items that match your filters will display.

For board, calendar, and gallery views, only the `Parents only` filter option is supported.

### Move, duplicate, and delete items with sub-items

* When you move an item with sub-items, sub-items will be turned on for the target database if they aren’t already.

  * If you don’t have permission to turn on sub-items on the target database, sub-items will be turned into parent items once they’re moved.

  * If you don’t have edit access for a particular sub-item, it won’t be moved.

* When you duplicate an item with sub-items, the item and all its sub-items will be duplicated into new pages.

* When you delete an item with sub-items, all of the sub-items will be deleted as well. Make sure to move your sub-items out of the parent item if you want to keep them.

### Edit and remove sub-items

To change how sub-items and parent items are nested:

1. Open the settings menu at the top of your database.

   ![hc: db settings icon](https://images.ctfassets.net/spoqsaf9291f/8Oc0IxM1zM5a9prvSOKNt/c07afa142404beaf680fb079ee9bc085/Reference_Visuals_Group_159.png)

2. Under `Database settings`, select `More settings`.

3. In the menu that appears, select `Sub-items` → `Advanced settings`.

4. Select `Property` and select which item type — `Sub-item` or `Parent item` — you want nested in your table. The same property will be used to display sub-items for all views of your database.

5. You can also turn on `Show nesting toggle on title`.

### Turn off sub-items

To turn sub-items off:

1. Open the settings menu at the top of your database.

2. Under `Database settings`, select `More settings`.

3. In the menu that appears, select `Sub-items` → `Turn off sub-items`.

### Restricted pages

Depending on the permissions of the database and the individual pages in the database, you may not be able to view all pages. `Nested in toggle` view will retain sub-item tree structure even if some pages are restricted.

## Dependencies

Adding a dependency lets you connect tasks to each other in a linear way. Use a dependency when you want to communicate related tasks to your team.

### Add a dependency

1. Open the settings menu at the top of your database.

   ![hc: db settings icon](https://images.ctfassets.net/spoqsaf9291f/8Oc0IxM1zM5a9prvSOKNt/c07afa142404beaf680fb079ee9bc085/Reference_Visuals_Group_159.png)

2. Under `Database settings`, select `More settings`.

3. In the menu that appears, select `Dependencies`.

4. Choose one of the following settings for automatic date shifting:

   * `Shift only when dates overlap`:**&#x20;**&#x54;asks will only be shifted when their dates start to overlap. The distance between tasks may still be decreased.

   * `Shift & maintain time between items`:**&#x20;**&#x49;f task A is blocking task B and the due date of task A is shifted forward one week, the due date of B will also shift forward one week.

   * `Do not automatically shift`:**&#x20;**&#x44;ue dates are never automatically shifted.

5. Choose whether you want to prevent shifted items from starting or ending on weekends.

6. Select `Turn on dependencies`.

### Change your dependency date shifting settings

Some things don't go quite as planned. You can automatically change the dates on dependencies when there are changes or conflicts. To change your dependency date shifting settings:

1. Open the settings menu at the top of your database.

2. Under `Database settings`, select `More settings`.

3. In the menu that appears, select `Dependencies`.

4. Select a new option for automatic date shifting.

5. Toggle on or off `Avoid weekends`.
