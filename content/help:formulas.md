---
title: Intro to formulas
emoji: 🔮
description: In a Notion database, you can add a formula property that lets you run all kinds of calculations and functions based on other properties. You can use formulas to manipulate existing data and arrive at many other helpful values 🔮
url: https://www.notion.com/help/formulas
key: help:formulas
coverImage: https://images.ctfassets.net/spoqsaf9291f/2qPdGvgZA8RD2WXSufJlCG/5fa2a9262a76a9168b642ac730908fc9/formula_basics_hero.png
category: Formulas
---

Notion formulas can perform helpful calculations using your existing database properties, built-ins, and functions.

## Formula examples

Let’s look at a few different ways to use formulas. If you’re ready to get started building your own, jump to our instructions on creating a formula [below →](https://www.notion.com/help/formulas#create-a-formula)

### Example 1: Project management

In this example, we’ll use three formulas to track the progress of projects.

You can explore and play with the formula setups for this example by duplicating [this page](https://notion.notion.site/formulaexample1?pvs=4) to your workspace!

| **Goal**                                                                                                                                                                                          | **Property name** | **Formula**                                                                                                                                 | **Functions and built-ins used**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Set a project’s due date as two weeks after its start date                                                                                                                                        | Due date          | `dateAdd(Start Date, 2, "week")`                                                                                                            | `dateAdd()` adds time to the date. The unit argument can be one of the following: `years`, `quarters`, `months`, `weeks`, `days`, `hours`, or `minutes`. In this case, we’ll use `weeks`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Mark a project as overdue if the due date has passed **and** its status is not `Done`.Mark a project as overdue in bold, red letters if the due date has passed **and** its status is not `Done`. | Overdue?          | `if(and(now() > Due Date, Status != "Done"), "Overdue", "")``if(and(now() > Due Date, Status != "Done"), style("Overdue", "red", "b"), "")` | `if()` returns the first value if the condition is true; otherwise, returns the second value. This allows for a conditional outcome.`and()` is a logical operator. This allows to evaluate multiple factors as being true.`now()` returns the current date and time. This allows to evaluate where we stand now, compared to the project due date.`>` is a comparison operator. This allows to compare the condition of due date being larger than current date.`!=` is a comparison operator. This allows to define the condition of status not being equal to `Done`.`style()` adds styles and colors to the text. Valid formatting styles include `b` (bold), `u` (underline), `i` (italics), `c` (code), or `s` (strikethrough). Valid colors are `gray`, `brown`, `orange`, `yellow`, `green`, `blue`, `purple`, `pink`, and `red`. Add `_background` to colors to set background colors. In this case, we’ll appl&#x79;**&#x20;**`bold` and `red`. |
| Show the number of tasks associated with a project                                                                                                                                                | Tasks remaining   | `Tasks.length()`                                                                                                                            | `length()` returns the length of the text or list value. This allows for a count of remaining tasks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

![hc: formulas example 1](https://images.ctfassets.net/spoqsaf9291f/bLldMPYuBrH18N9dmBQg6/6378ddc577868587a4ebc78055b76c26/Image_from_Notion__1_.png)

### Example 2: Project brainstorming

In this example, we’ll use two formulas to brainstorm project ideas, calculate a priority score for each of them, and count the number of upvotes each project receives.

You can explore and play with the formula setups for this example by duplicating [this page](https://notion.notion.site/formulaexample2?v=1a5efdeead0580e3bacf000ce6a750db\&pvs=4) to your workspace! For another setup that uses the RICE framework, check out this [template](https://www.notion.com/templates/rice-prioritization-worksheet?srsltid=AfmBOoqhi5UnMlxoMXorqFotrYl9c5-Ht90B6ZuKD5zPMMaD7ZsgIyLF).

| **Goal**                                                                                                                   | **Property name** | **Formula**                            |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------- | -------------------------------------- |
| Based off of the scores for Reach, Impact, Confidence, and Effort (RICE), calculate a prioritization score                 | Score (RICE)      | `Reach * Impact * Confidence / Effort` |
| When someone clicks the upvote button, count them toward the number of total votes and add their name to the database page | Total votes       | `length(Upvoted by)`                   |

![hc: formulas example 2 part 1](https://images.ctfassets.net/spoqsaf9291f/1ugnqGQi3tjDG4olc6cmQ5/2709d243353a19c7c1acee19dfb7df77/Image_from_Notion__2_.png)

![hc: formulas example 2 part 2](https://images.ctfassets.net/spoqsaf9291f/5TSmwJvAOYpCCSLE6fInC3/8d18c2652915835b8cd36120d496f2f4/Image_from_Notion__3_.png)

### (Advanced) Example 3: Task management automation

In this example, we’ll use some formulas in a database [automation](https://www.notion.com/help/database-automations) (another kind of database property) to make it easier to manage projects and tasks as they’re completed by marking a parent task as `Done` when all its subtasks are `Done`.

Database automations have triggers and actions that are taken based on those triggers. Formulas allow you to define variables that you can then use in your actions.

You can explore and play with the formula setups for this example by duplicating [this page](https://notion.notion.site/formulasexample3?v=1a5efdeead0580d08754000c5ef09165\&pvs=4) to your workspace!

| **Goal**                                                                                                                                      | **How to build it**                                                                                                                                            | **Functions and built-ins used**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Every time a task is set to `Done`, trigger the automation                                                                                    | **Trigger:&#x20;**&#x57;hen status set to `Done`                                                                                                               | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Define the parent task by finding the first page related to the task that triggered the automation                                            | **Action 1:&#x20;**&#x44;efine `Parent task `variable**Formula:** `Trigger page.Parent item.first()`                                                           | `Trigger page` references the page in the database the automation was triggered from, and `.` allows you to access properties associated with that page.`Parent item` returns the contents from that property, which in this case is a list of related pages.Applying the `.first()` function on the `Parent item` property returns the **first** related page from that list.                                                                                                                                                                                         |
| If the parent task has subtasks, verify whether all its subtasks have a status of `Done`. If the parent task has no subtasks, return `false`. | **Action 2:&#x20;**&#x44;efine `All subtasks done?` variable**Formula:** `Parent Task.Sub-item ? Parent Task.Sub-item.every(current.Status == "Done") : false` | The ternary operator `X ? Y : Z` is a shorthand conditional expression that means: **if** the condition X is true, return Y; **otherwise**, return Z. It's a concise alternative to an `if()` statement.`.every()` checks whether a condition is true for each item in a list. Within this function, you can use the keyword `current` to refer to the row being evaluated. In this case, the condition `current.Status == "Done"` checks whether the current page’s status property is set to `Done`. If so, it will return `true`; otherwise it will return `false`. |
| If all subtasks are `Done`, set the parent task’s status to `Done`. If not, retain the existing status of the parent task.                    | **Action 3:** Edit `Status`​ property**Formula:&#x20;**`All subtasks done? ? "Done" : Parent Task.Status​`                                                     | Again, the ternary operator is used here to see if all subtasks are done. If they are, the automation will set the parent task’s status as `Done`; if not, it will keep the parent task’s status as is.                                                                                                                                                                                                                                                                                                                                                                |

![hc: formulas example 3 part 1](https://images.ctfassets.net/spoqsaf9291f/3crtJ13L1VGoOPK9gRPcZp/864d6f5e2d4ae8483329da2156f5a5e9/Image_from_Notion__4_.png)

**More formula inspiration**

* [This Notion template](https://www.notion.com/templates/time-between-dates-calculator) calculates the time between two dates with a formula property.

* [This Notion template](https://www.notion.com/templates/brainstorming-with-upvotes) uses a formula to count upvotes for different ideas.

* You can find even more example formulas [here →](https://www.notion.com/help/guides/write-formulas-that-extend-capabilities-of-databases)

## Where formulas can be used

In Notion, you can use formulas in a few different ways:

* As a database property, which is what this article primarily covers.

* In a [button](https://www.notion.com/help/buttons#mentions-and-formulas-in-button-actions) action.

* In a [database button](https://www.notion.com/help/database-buttons) action.

* In a [database automation](https://www.notion.com/help/database-automations) action.

## Create a formula

To create a formula database property:

1. Select the slider icon at the top of a database → `Edit properties` → `New property`.

2. Select `Formula`.

3. Give your property a name if you’d like.

4. Select `Edit formula`.

## Edit a formula

Once you’ve created a formula in a database or button, you’ll be able to build and edit that formula in the formula editor, which looks like this:

![HC: Formula editor](https://images.ctfassets.net/spoqsaf9291f/3mfjLubTiV8GZ4wROlrShU/3bbd7a20ce0641828282e4991a1afbf6/Image_from_Notion__5_.png)

The field at the top is where you enter and edit your formula. As you write your formula at the top of the editor, the editor will let you know what’s missing, or what the formula expects in order to return a value to you.

The panel on the left side of the edit shows the elements that you can use in the formula — in other words, the properties, built-ins, and functions that are available to you.

The panel on the right side defines formula elements as you hover over them in the left panel. It also gives you examples of how you might use those elements and how they should be structured.

If you open the formula editor from a database row, you'll see a live preview of the result of the formula for that row.

Having trouble with your formula? Learn about common formula errors and how to troubleshoot them in [this article →](https://www.notion.com/help/common-formula-errors)

## Create and edit formulas with Notion AI

**Note:** This feature is only available on the Business or Enterprise Plan.

Know what you want your formula to do, but not quite sure how to build it? Want to make some tweaks to an existing formula? See an error in your formula, but don’t know how to fix it? Notion AI can help.

When you’re in the formula editor, you’ll see a field containing the Notion AI face. Click into this field and tell Notion AI what you want your formula to do, or ask questions about the formula to understand it better.

![hc: notion ai in formulas](https://images.ctfassets.net/spoqsaf9291f/4FrO0gyKTs4bUrFNVY8NG8/7001ae7f174e8a40b3a7ca15fe8c9ad2/Reference_Visuals_Group_161.png)

Here are some example prompts you can give Notion AI:

* “Turn the title property into a URL slug.”

* “Return ⚠️ if the due date has passed.”

* “Add one day to the date property and make the output green and bold.”

* “Return the date property from the related database” (Notion AI knows about your relations’ properties too!)

* “Italicize the output of this formula.”

* “Fix the errors in this formula.”

* “Make this formula handle edge cases.” (For example, Notion AI could add an if statement so that the formula doesn’t fail when a field is empty.)

* “What does this formula do?”

Once you enter your prompt, Notion AI will generate a formula or respond to your query about it. You can also see a preview of your formula output as well as toggle on `Show types` to see the output type (for example, text), so you can make sure everything looks the way you want. You can undo Notion AI's changes, give it further prompts, or give a thumbs up or thumbs down to let us know how it did.

When you’re creating and editing formulas using Notion AI, note that Notion AI currently doesn’t support the following:

* Iterative logic (like `for` loops).

* Random generations that would require a `random()` function, which Notion formulas don’t have. A prompt like “Generate a random number between 1 and 10” wouldn’t work.

* Remembering previous prompts.

Notion AI can help you with formula properties as well as formulas inside [buttons](https://www.notion.com/help/buttons#mentions-and-formulas-in-button-actions), [database buttons](https://www.notion.com/help/database-buttons), and [database automations](https://www.notion.com/help/database-automations).

## What formulas are made of

Formulas can be created using a combination of:

* Properties.

* Built-ins, or operators and booleans that are used to set up a specific calculation. Some examples include `+` (add), `false`, and `or`.

* Functions, or actions that the formula can take to return a certain output. Some examples include `replace`, `sum`, and `sort`.

A full list of the built-ins and functions that are available in formulas is available [here →](https://www.notion.com/help/formula-syntax)
