---
title: "Optimize database load times & performance"
emoji: "🏃🏼"
description: "Here’s how to make sure your databases are always feeling quick and snappy 🏃🏼"
url: "https://www.notion.com/help/optimize-database-load-times-and-performance"
key: "help:optimize-database-load-times-and-performance"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/4TlJQBAgbEwCH1otCiKmRD/2a99a687e60b1f80695fd959de6fcc12/Create_a_database_-_hero.png"
category: "Databases"
categoryKey: "category:databases"
---

If your databases feel slow, there are a few possible causes and a few ways to improve performance.

## Things that can slow your database down

* Number of pages: If your database has a ton of pages, it might be slower to load.

* **Number of properties:&#x20;**&#x54;he more visible properties your database has, the longer it might take to load. To help keep databases performant, each database can have up to 500 properties. If you reach the limit, you won’t be able to add new properties until you remove some.

* Complex sorts and filters: If your database has a sort or filter on properties like title, text, formula, or rollup, the logic behind it can make load times longer.

## Things you can do to speed up your database setup

### Avoid building too many databases into high-traffic pages

If you have a large workspace, avoid having lots of [inline databases](https://www.notion.com/help/intro-to-databases#full-page-vs.-in-line-databases), like dashboards, in high-traffic pages. The more simultaneously viewed databases, the more stress on your setup.

Try housing each database in its own page first. Once you’ve done that, if you’d like all of the databases to be displayed in one page, you can:

1. Type `/linked` in that page and select `Linked view of a database` to create a [linked database](https://www.notion.com/help/guides/using-linked-databases).

2. Create database views in this linked database and configure them to point to your desired source databases. Different database views can point to different source databases!

When using a single linked database, only one database view is open at a time, and therefore only that one database is listening for updates. You should see an improvement in performance with this setup.

### Avoid complex reference chains

Formulas and rollups are extremely powerful, but the more complex they are, the slower your database may be. For example, a formula that depends on several other formulas that each depend on rollups may take longer to calculate.

### Minimize the number of filters and sorts on formulas and rollups

Databases that are [filtered and sorted](https://www.notion.com/help/views-filters-and-sorts) on [formula](https://www.notion.com/help/formulas) and [rollup](https://www.notion.com/help/relations-and-rollups#rollups) properties may take a bit longer to load.

### Filter on simple properties

Adding filters based on simple properties such as select, multi-select, status, number, and date may improve the speed of your database. Even if you have complex filters, this may help by reducing the number of pages that need to be processed.

### Hide unnecessary properties

If some properties are less important in your database view, hiding them may improve responsiveness and interactivity.

### If you can’t add a new property

If you see an error when trying to add a new property, your database may have reached the [500-property limit](https://www.notion.com/help/database-properties#property-count-limit).

To get back under the limit:

* Delete unused properties (especially ones that aren’t used in any views).

* Audit select and multi-select properties. If you have multiple properties that serve the same purpose, consider merging them.

### Delete any unused pages

We suggest removing any unnecessary or duplicative pages from your database to keep it as simple and up-to-date as possible. If that’s not an option for you, adding a filter on the `Created time` property to filter out old pages may significantly improve performance for very large databases.

## Database size limits

To ensure the best database performance for all users, we apply size limits to databases. Once these limits are hit, new changes to your database will not be saved.

### At the database page level

**For each page in a database, all data from all properties of that page is limited to a total size of 2.5MB.**

This limit doesn’t impact:

* Files and media properties. The actual size of your uploaded file doesn’t count toward the limit.

* Formulas and rollups.

* Content in the body of database pages (not properties).

* The number of properties you have in a database. For example, a database with 50 properties can still be under the limit if each property has short descriptions or options.

**Note:** There are also limits applied to two-way relations. Let’s say Database A and Database B are related to each other. Once you’ve referenced the same page from Database A 10,000 times in Database B as a relation, the next time you try to reference the in Database B, it won’t reflect in Database A.

When you’ve reached the limit for database pages, you’ll see a banner at the top of specific database pages letting you know. In order to stay under this limit, you can do the following:

* Make your property options smaller or shorter. For example, on a multi-select property, you can remove the number of options or shorten some of the options’ names. On a person property, you can delete some people referenced in specific pages.

* Delete any unnecessary properties, which will also delete the data within those properties.

### At the database level

**There is also a 1.5MB limit for the total size of all properties used in your database.** You can think of this limit as applying to the overall structure of your database, like how many properties you have in a database and how many options each database property (like a select or multi-select property) contains.

You might run into this limit when adding new properties or adding a new property option (like an additional select property option) to your database.

In order to stay under this limit, you can do the following:

* Delete any unnecessary properties.

* Delete any unnecessary property options from select and multi-select properties.

* Shorten the character count of any property options (for example, you could change a `Complete` option to `Done`).

* Shorten the length of any formulas you’re using in formula properties.

### Deleting properties

If you choose to delete a property to clear up space and avoid hitting any limits, you can always restore those deleted properties and their data. To do this:

1. Click the slider icon at the top of your database.

2. Select `Edit properties` → `Deleted properties`.

3. Select `↩️` next to the property you want to restore.

Note that you can keep **up to 1.5MB** of deleted properties in the trash. Once you’ve reached this limit, you’ll need to **permanently** delete some properties. To do this:

1. Click the slider icon at the top of your database.

2. Select `Edit properties` → `Deleted properties`.

3. Select `🗑️` next to the property you want to permanently delete. You can also choose `Permanently delete all` at the bottom of the menu.

**After a property and its data are permanently deleted, you won’t be able to recover them.**

**Learn more about databases to make sure you're using them in the best way for your specific needs**

* [Organize information with databases](https://www.notion.com/help/notion-academy/course/organizing-information-databases)

* [More resources on databases](https://www.notion.com/help/category/databases)
