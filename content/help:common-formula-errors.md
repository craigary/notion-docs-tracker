---
title: Common formula errors
emoji: 🔨
description: Learn about the common errors you might run into with formulas in Notion, and how you can troubleshoot them 🔨
url: https://www.notion.com/help/common-formula-errors
key: help:common-formula-errors
coverImage: https://images.ctfassets.net/spoqsaf9291f/15MnehxCRUUA3LITX21Lar/7c80798bd5cce07c4b492cb6543419c7/Troubleshooting_Reference_Visuals.png
category: Formulas
---

If you’re unsure how to fix the errors in your formula, Notion AI can help. Learn more [here →](https://www.notion.com/help/formulas#create-and-edit-formulas-with-Notion-AI)

## Permissions

If you don’t have access to a referenced database, formulas won’t be able to compute reliably. This is because formulas require access to the source database and its property configurations.

**How to fix it**

Ensure you have access to **all** pages and databases referenced in your formula within your button or database automation.

## Wrong return type

Unlike formula properties in databases, formulas in automations expect a specific return type from the formulas (ex.: date, text, number, person). The automation will otherwise fail to save and execute properly.

**How to fix it**

Make sure the formula returns the correct type of value. For example, if writing a formula to set the value of a Person property of a page, the formula must return a user or list of users, not a date. Alternatively, if evaluating a specific condition on an array type property (ex.: multi-select), make sure to use `.includes` instead of `==` in your `if()` statement.

## Formula depth limit reached

Notion formulas can only be **15 layers deep**. Every time a formula references another formula or rollup, it adds a layer. This applies even if the formula is in a different database.

When this limit is reached, Notion will show an error message.

**How to fix it**

Simplify your setup by combining unnecessary formulas and rollups into fewer properties. Look for places where multiple formulas do similar things and try to merge them into one.

## Referencing variables in other variables

If custom variables are defined **within the same automation action**, they cannot reference each other.

For example, if you define `var1` and `var2` in the same action, `var2` won’t be able to use `var1` in its definition.

**How to fix it**

Define each variable in its **own separate action** (create the first variable, add a new action to your automation, and define the next variable separately). This ensures that each variable is properly recognized.

## Referencing variables in filters

Today, variables defined in an automation may not be used to filter pages in databases you’d like the automation to act on (ex.: “Edit pages that match filter contains `variable`").

**How to fix it**

1. Define a custom variable as `This page` by typing `Trigger page` in the formula box.

2. Add an `Edit pages in` action and select the custom variable from step 1 as your target.

## Referencing relations and people

When working with relations, rollup, and person properties in formulas, the formulas return a list of pages or people. To reference properties within the relation, you’ll need to define the first element, otherwise your automation will pause. You might also encounter this issue when creating a formula that uses the map function for a relation property.

**How to fix it**

Use functions like `.first()` or `.at(0)` to get the first element, or loop through the list of pages with functions like `.map()` , `.filter()` , `.every()`, `.some()`, `.find()`.

## Undefined value

When formulas run on an empty value (ex.: Date, Person, etc), the automation will get an error and automatically pause.

**How to fix it**

Use `if` and `empty()` to check whether a value is present before running the Person or Date function on it.

For example, if your formula runs on a Person property named “Owner”, create the following if statement to force a value: `if(empty(This page.Person.first()), “No person”, This page.Person.first().name())`. This ensures that even if there is no Owner, the automation will safely execute.

Alternatively, set up a view that filters to the Date or Person value being defined, and apply their automation to that view.

## Common syntax errors

If your formula isn’t working as expected, it might be due to a syntax error such as missing parentheses, incorrect operators, or unsupported functions. For a full breakdown of formula syntax, read [this article →](https://www.notion.com/help/formula-syntax)
