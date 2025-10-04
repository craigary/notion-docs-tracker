---
title: Map view
emoji: 🗺️
description: Visualize addresses on a map 🗺️
url: https://www.notion.com/help/maps
key: help:maps
coverImage: https://images.ctfassets.net/spoqsaf9291f/6VrRf3FKY0KOy5Yh4IbKOB/44835febcd83c6abdd64239f829f2135/Reference_Visuals_Group_168.png
category: Databases
---

Map view lets you visualize database items on an interactive map. You can use it to plan a trip, see all the places you’ve visited before, plan field work, and more.

## Place property

Place properties can be populated by granting access to your current location, entering the name of a location, or entering an address.

**Note:** To deliver results, address search relies on a third-party provider that processes your query. As a result, data quality and coverage may vary by region.

### Create a place property

To add a place property to a database:

1. Open a database and select `Add property` or `+` next to the right-most property.

2. In the menu that appears, select `Place`.

**Note:** If you have addresses stored in a text property and convert the text property to a place property, you may need to clean up those addresses to ensure they properly appear in map view.

## Create a map view

**Note:** To create a map view of a database, your database must have a place property. If you don’t already have a place property, one will be created for you when you create a map view.

To create a map view, type `/map` in a page and press `enter`.

## Add map view to a database

To add a map view to a database:

1. Hover over a view name in a database and select `+`.

2. Select `Map`.

3. Give your view a name.

4. Select `Create`.

## Using map view

**Note:&#x20;**&#x55;p to 100 items can be shown in map view at one time.

When you’re in map view, you can:

* Click a pin on your map to open the corresponding database page.

* Zoom in and out, or drag the map to explore.

## Filter and sort place properties

Filtering and sorting for place properties is text-based. You can filter by text contained in the place’s name or address, and sort alphabetically.

## Switch between place properties

If your database has multiple place properties, you can switch between them in map view. To do this:

1. Open the slider menu at the top of your map view.

2. In the menu that appears, select `Layout`.

3. Select `Map by`.

4. Select the place property you want.


## FAQs

### Why am I not seeing the right pins on my map?

It’s possible you have multiple place properties in your database — this can happen if you’ve created a map view in a database without a place property, we create one for you, and then you add your own later. You can switch between place properties by doing the following:

1. Open the slider menu at the top of your map view.

2. In the menu that appears, select `Layout`.

3. Select `Map by`.

4. Select the place property you want.


### Can I calculate the distance between two places?

Not at this time.


### What if I have more than 100 places in my database?

Try narrowing down your list using filters, or splitting items across additional views.


### Some of my pins aren’t showing up. Why not?

Make sure your addresses properly correspond to a location when you enter them into your database. Additionally, you can check to make sure you’re displaying the right place property in your map by opening the slider menu at the top of your map view and selecting `Layout` → `Map by`.
