---
title: Relations & rollups
emoji: 🛠
description: Have you ever wanted to connect the data between two tables? You're in luck! Notion's relation property is designed to help you express useful relationships between items in different databases 🛠
url: https://www.notion.com/help/relations-and-rollups
key: help:relations-and-rollups
coverImage: https://img.youtube.com/vi/NM8oFVb8SAY/maxresdefault.jpg
category: Databases
---

Want to see multiple sets of data within the same database? Add a new data source or link an existing one to a database you’re already using. Learn more [here →](https://www.notion.com/help/data-sources-and-linked-databases)

## What is a database relation?

Let's say you have two databases for your theoretical business 😉

* One that tracks customers

* One that tracks items purchased

You want to know both which customers bought which items, as well as which items were purchased by which customers. This is a job for relations!

![Relation setup](https://images.ctfassets.net/spoqsaf9291f/2ZxBndJzurrMDC8TGewWRu/6d9f33c3cb998233bda8fa3d3d525ab4/two_database_relation.png)

* In the two tables above, the columns labeled `↗ Items Purchased` and `↗ Customers` are relation properties, which can be added like any other database property.

* Here, when you add an item bought into the **Customers** database, the customers who bought them automatically appear in the `↗ Customers` column in the **Items** database.

### Example use cases

* Connect your **database of restaurants** with your **database of neighborhoods** so you can see which restaurants are in which neighborhoods at a glance.

* Connect your **database of meeting notes** with your **database of clients** to provide quick access to the notes relevant to each client.

* Connect your **database of tasks** with your **database of bigger projects** to understand how projects are broken down into tasks, and how tasks contribute to projects.

* Connect your **database of candidates** with your **database of interviewers** to keep track of who interviewed whom.

## Create a relation

To relate two databases, you need two databases. So let's assume you've made the **Customers** and **Items** databases above for the purpose of this walkthrough.

1. Add a new column/property to your **Customers** database and give it a name, like **Items Purchased**.

2. Search for `Relation`.

3. Then, search for the database you want to create the relation with.

   ![Choose related database](https://images.ctfassets.net/spoqsaf9291f/18Zayw93oSm3IVZMBgFp2n/b548900432569be6f49355bfe949a53f/Choose_related_database.png)

4. You'll see a preview of the relation. In this case, we've created a relation from the Customer database to the Items database.

5. Click the blue `Add relation` button to finalize the creation of the new relation property.

   ![One way relation](https://images.ctfassets.net/spoqsaf9291f/2FBfKuKWYOZrWw5HS0WJR/05b51c55089212b4df02490f0aabf989/one_way_relation.png)

6. Now when you click in a cell in this relation column, you'll bring up a menu where you can search for and choose items from the other database to add.

   * For example, this is how you can add which clothes each customer bought.

   * To add an item, click the name in the list. To delete an item, hover over and then click the `–` button on the right.

![Add related page](https://images.ctfassets.net/spoqsaf9291f/65e1CeRlarITG5XsBh2ZNB/3fa0317338ccd0a1c725abc10cc1d880/Relate_page.png)

**Tip:** To change the database you're connecting to, re-select `Relation` as the property type for that particularly property. You'll be prompted to choose a new database.

## Two-way relations

Relations are created as one-way by default. But you can easily toggle on a corresponding relation in the destination database.

With two-way relations, the edits work both ways! So if you add a customer to the **Items** database in the relation column, the change pops up in your **Customers** database.

1. Follow the above instructions to create a new relation property.

2. Click the toggle that says `Show on [name of related database]`. In our example, this says `Show on Items DB`.

3. Give this corresponding relation a name.

4. Below, you'll see a preview of the two-way relation. In this case, we've created a relation from the Customer database to the Items database, *and* a relation from the Items database to the Customer database.

5. Click the blue `Add relation` button to finalize the creation of these two new relation properties.

![Two way relation](https://images.ctfassets.net/spoqsaf9291f/7gQ7x6McJEI2L2PiOgdlbz/c7054e7e44f232375f218618130c831a/two_way_relation.png)

## View and remove related pages

When you create a relation, you're essentially adding Notion pages stored in one database into the property field of another.

* These pages can be opened and edited like any other! Click on the page in the relation column. Then click on it again in the window that pops up.

* You can also remove any related page by hovering over and clicking the `–` at the right.

[](//videos.ctfassets.net/spoqsaf9291f/6aY5QvlYiho9kna9b7SbQb/dd6d2a296fd2934153d8f0e4a6e889bc/relation_open_page.mp4)

* You can choose to limit the number of pages that can be included in your relations property – with the option to select `1 page` or to have `No limit`.

* If you select the option to limit it to `1 page`, people using your database will only be able to select 1 page in the relation. This is especially useful for situations where only one page should be related to one another, for example - if only one order number should be associated with each purchase.

## Display options for relations

To change how relations are displayed in a database page:

1. While in a database page, click on the relation.

2. Click `Property visibility` and select `Always show`, `Hide when empty`, or `Always hide`.

### Customize displayed properties for relations

When you set up a relation in your database, you can also choose to display certain properties of linked pages. For example, let’s say you have a database of frequently asked questions at your company. Each FAQ has a relation to a page that further explains the answer to the question. You might want people to also be able to see the owner of each page, so they know who to reach out to with more questions. You can set your FAQ database up so that the owner is visible along with the relevant page!

To do this:

1. Open a page in a database that has a relation property.

2. Click the field next to that property to link a page → click `•••`.

3. In the menu that appears, drag the properties of the related database into or out of `Shown in relation` or `Hidden in relation`.

4. Once you’re done, you’ll see your desired properties appear in the relation field. This will apply to all of the pages in your current database.

![customize displayed properties for relations](https://images.ctfassets.net/spoqsaf9291f/dRtDl0pZ4LjBi48UhxNLT/673f301bca3a8805a3c0594607fcda55/Customize_relation_property2.gif)

## Relate a database to itself

Let's say you want items in the same database to have relationships with each other. For example, you have a tasks database and you want each task to relate to other tasks.

1. Start off by creating a new relation.

2. Then search for and choose the database you're currently working in.

3. You'll now see that the database is related to `This database`.

   * When relating a database to itself, we recommend toggling **off&#x20;**`Two-way relation` as it essentially duplicate the property.

![Relate to self](https://images.ctfassets.net/spoqsaf9291f/6gwOO6BTwzkeF5x4vnab8z/f9dac92f577d9a256149e04ac482a379/Relate_to_self.png)

## Rollups

Rollups help you aggregate data in your databases based on relations. Going back to our customers and items example above, let's say you wanted to know how much each customer spent based on what they bought.

1. First, create the relation so you know who bought what.

2. Add a new column/property and choose `Rollup` from the `Property type` menu. Give it a descriptive name.

![Rollup step 1](https://images.ctfassets.net/spoqsaf9291f/1ipgtMiHM74VIswzAP6faF/e8435d2978687b0ab033ad857521bea0/Rollup_step_1.png)

* Clicking on any cell in the rollup column will bring up a new menu asking you for:

  * The relation property you want to roll up.

  * The property of those related pages you want to roll up.

  * The calculation you want to apply to them.

* So, for our example, you'd choose to roll up the relation property `Items Purchased` and the `Price` property within those pages. Then you'd choose `Sum` as the calculation.

  * Doing this adds up the prices of each item related to a customer's name, giving you the total dollars they spent in your rollup column.

![Rollup step 2](https://images.ctfassets.net/spoqsaf9291f/5rFyqYW5Tv4rRDfed7VcLF/3606f3748ffdad67272099b5fc99fa0b/Rollup_step_2.png)

### Rollup types

There are different calculations you can apply as a rollup. Here are all of them:

* `Show original`: This just shows all related pages in the same cell. It's the same as the relation property itself.

* `Show unique values`: This shows each unique value in the selected property for all related pages.

* `Count all`: Counts the total number of values in the selected property for all related pages.

* `Count values`: Counts the number of non-empty values in the selected property for all related pages.

* `Count unique values`: Counts the number of unique values in the selected property for all related pages.

* `Count empty`: Counts the number of related pages with an empty value for the property selected. So, if one item a customer bought didn't have a price and that was the property selected, the rollup column would say 1.

* `Count not empty`: Counts the number of related pages with assigned values for the property you selected.

* `Percent empty`: Shows the percentage of related pages with no value in the property you selected.

* `Percent not empty`: Shows the percentage of related pages with a value in the property you selected.

**Note:** Rollups can only be sorted when they output a numeric value.

**These rollup calculations are only available for&#xA0;****`Number`****&#xA0;properties:**

* `Sum`: Computes the sum of the numeric properties for related pages (like above).

* `Average`: Computes the average of the numeric properties for related pages.

* `Median`: Finds the median of the numeric properties for related pages.

* `Min`: Finds the lowest number in the numeric property for related pages.

* `Max`: Finds the highest number in the numeric property for related pages.

* `Range`: Computes the range between the highest and lowest numbers in the numeric property for related pages (`Max` - `Min`).

**These rollup calculations are only available for&#xA0;****`Date`****&#xA0;properties:**

* `Earliest date`: Finds the earliest date/time in the date property for all related pages.

* `Latest date`: Finds the latest date/time in the date property for all related pages.

* `Date range`: Computes the span of time between the latest and earliest dates in the date property for related pages.

### Aggregate rollups

In both tables and boards, you can apply calculations to your rollup column to get a sense of sums, ranges, averages, etc. for your entire database.

* Let's say you want to find the total money spent by all customers in our example.

* Click the `Order Total` property in your customers table.

* In the menu that appears, hover over `Calculate` → `More options`.

* Select `Sum`.

![Aggregate rollups](https://images.ctfassets.net/spoqsaf9291f/5iUULwlyBU8bamKuTUXkaV/947b6fc2732a247d7b9d7072d08fda8a/Aggregate_rollups.png)


## FAQs

### Can I export or import relations?

When you export a relational database as a CSV file, the relation properties will export as plain text URLs. For now, you can't re-import that CSV back into Notion to re-establish the relations with other databases.


### Can I duplicate a database with a relation?

Yes. In the example above, if you duplicate the Customers database, the duplicate database, Customers (1), will not show as a relation in the Items database. That’s because upon duplicating the Customers database, we convert the relation from a 2-way sync to a 1-way sync. If you'd like, you can always convert the relation back to a 2-way sync.


### Can I rollup a rollup?

Unfortunately not, as this could create unintended loops. We recommend sticking to rolling up other properties 😊
