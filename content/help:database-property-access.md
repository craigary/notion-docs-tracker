---
title: "Manage database property access"
emoji: null
description: "Control who can see and who can change each property in a database. That way, one database can serve different audiences, and sensitive information is visible only to the people who need it."
url: "https://www.notion.com/help/database-property-access"
key: "help:database-property-access"
coverImage: null
category: "Sharing & permissions"
categoryKey: "category:sharing-and-collaboration"
---

**Note**: This feature is available on Business and Enterprise plans.

Page-level access lets you manage which database pages someone can open. Property access controls which columns users can see and change. For example, a team directory can show names and roles to everyone, while only your people team can see the salary column.

You can also let a broad group view a column while only a few people can edit it. That works well for a `status` or `approval` column.

## Before you start

* Your workspace needs to be on a Business or Enterprise plan to manage property access.

* You need `Full access` to the database to edit property access.

* You can set up property access rules on web or desktop, but not mobile. Rules that you create will still apply when people open the database on mobile.

## Set up property access

1. Open the database in a table view on web or desktop. Use the original database, not a linked view of it.

2. Open the menu for the column you want to control.

3. Select `Property access`.

4. Choose the default access for everyone who can open the database.

5. Add an exception for each person, group, person property, or agent who needs something different, then choose their access level.

6. Select `Preview` and pick a person to see what permission would be set for them.

7. Save the rule.

**Note**: The first rule you set on a column can take a few minutes to save, since Notion has to move that column's info. The more rows your database has, the longer this will take.

## Access levels

These are the default access levels that you set above for everyone who can open the database.

* `Inherit from database`: The person's access to the entire database determines what they can do with the column.

* `Can edit property & values`: The person can edit the property and its values.

* `Can edit values only`: The person can edit the values, but not the property.

* `Can view property only`: The person can see that the column exists, but none of its values.

* `Can view property & values`: The person can see that the column exists and see its values.

* `No access`: The column and its values are hidden from that person.

### Person property access exceptions

If you’re using a person property in your database - for example, you have a projects database with a `Project Owner` property - you can make the access level of other properties in the database dependent on the value of that person property.

In the projects database example, you may have a `Cost` column with the cost of the project. You want each project owner to have access to view and edit the cost of their own project, but not to the cost of other projects in that database. You can do this by granting `Can edit values only` access to the `Project Owner` people property.

This won’t grant access to the full set of values for this property. If you want a project owner to have access to edit all values, you’d need to grant them additional permissions.

**Note**: If access depends on a person column, or the page creator, those people may see the column name even though the values stay hidden.

## How access rules interact

* People with `Full access` to the database always have full access to all properties, regardless of the setting. They are never restricted by a column rule. Always test with someone who does not have full access.

* Property access is dependent on page access. A column rule never gives someone access to a database page that they can’t already open.

* A view that filters, sorts, or groups by a column someone can’t see may not open for them. We recommend setting up views <!-- -->tailored to the intended audience's access level.

* If a person matches with more than one exception, Notion <!-- -->gives them the least restrictive access level.

* Notion respects the widest access a person has. If someone still sees a column you restricted, check the rest of the `Share` menu for broader access.

* Agents can be granted their own permissions on properties. Notion AI usually inherits the user’s permissions. If the user can’t see a column, then their agent can’t read it or fill it in. Note that this means Notion AI or an agent may report that the column does not exist.

* Restoring an older version of a database will retain the current version's property access rules.

## Limitations

* The following column types can’t be restricted:

  * Title

  * ID

  * Created by

  * Created time

  * Last edited by

  * Last edited time

  * Certain types of synced properties

  * Subitem or parent relation properties

* You can’t manage property access in a wiki database.

* You can’t create or change rules from your phone. Rules that you already made still apply there.

* A database with many property access rules may load more slowly, especially in views that sort, filter, or group by a restricted property.

## Troubleshooting

**I can't find&#x20;**`Property access`**.**

Check that your workspace is on a Business or Enterprise plan, that you have `Full access` to the database, and that you are on web or desktop.

**Someone can still see a column I restricted.**

First check whether that person has `Full access` to the database, since column rules never restrict them. Then review the page and database sharing settings, the column's default access, and each exception <!-- -->using the Preview feature<!-- -->. Notion always applies the widest access a person has.

**A view won't open for some people.**

Check whether the view filters, sorts, or groups by a column those people cannot see. If it does, point them to a view that does not use that column.

**Notion AI or an agent says the column doesn't exist.**

This usually means it does not have access to that column. Check the database and page sharing settings, then the column's default access and its exceptions.

**A button, automation, formula, or rollup stopped working.**

Try the same workflow as someone who can see the column. If it works for them, the person running it is missing access to a column the workflow needs.

## Related articles

* [Sharing & permissions settings](https://www.notion.com/help/sharing-and-permissions)

* [Database properties](https://www.notion.com/help/database-properties)

* [Views, filters & sorts](https://www.notion.com/help/views-filters-and-sorts)
