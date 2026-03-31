---
title: "Database automations"
emoji: "🔁"
description: "Improve your efficiency by automating the most tedious parts of your work 🔁"
url: "https://www.notion.com/help/database-automations"
key: "help:database-automations"
coverImage: "https://img.youtube.com/vi/55zNDdiEZRg/maxresdefault.jpg"
category: "Automations"
categoryKey: "category:automations"
---

Database automations are sequences of actions that happen any time a specific change to a database occurs. Automations consist of both triggers (the events that initiate the automation) and actions (the effect of the automation). Database automations are meant to help save you time and simplify your work, and can be very basic or more complex depending on your needs.

Database automations can be used for many things, including:

* Assigning a task to a specific person when its status changes.

* Sending a Slack notification to a channel when a page is added to a database.

**Note:**

* **Automations won’t take action on any pages whose access is restricted.** You can check and change page access in the [share menu](https://www.notion.com/help/sharing-and-permissions#share-menu).

* **Database automations can't be triggered by other automations.&#x20;**[Button actions](https://www.notion.com/help/buttons), however, can trigger database automations. For example:

  * A recurring template automation will not trigger a database automation.

  * A database automation creating a page in another database will not trigger a database automation.

  * A user clicking a button that creates a page will trigger a database automation.

## Who can use database automations?

* Database automations are available on **paid plans** on **all platforms**.

* Database automations can be created, edited, or deleted by **paid plan users who have full access to the database**.

* However, [Slack automations](https://www.notion.com/help/slack#get-notifications-in-slack) can only be edited by the automation **creator**.

* Free Plan users can create **Slack notification** automations, but no other kinds of automations.

* Free Plan users can use existing automations in **templates**, but they won't be able to edit them.

## Create a database automation

To create a database automation:

1. Click `⚡` at the top of a database → `New automation`.

2. Give your database automation a name if you’d like.

3. Select `New trigger` to create a trigger. Then select `Add trigger` to create more triggers. Learn more about the types of triggers [below →](https://www.notion.com/help/database-automations#database-automation-triggers)

4. Select `New action` to create an action. Then select `Add action` to create more actions. Learn more about the types of actions [below →](https://www.notion.com/help/database-automations#database-automation-actions)

5. Select `Create`.

Did you know you can also add a button property to your database? With the click of a button, actions can be taken on your database on your behalf. [Learn more here →](https://www.notion.com/help/database-buttons)

## Database automation triggers

Automations can have one trigger or multiple triggers. When you set up an automation, you can decide whether the automation will take place `When any of these occur` or `When all of these occur`.

**Note:** If you have multiple `is edited` triggers that must **all** occur for your automation to take place, those triggers need to happen within a small window of about three seconds. If they don’t, your automation may not be triggered properly. To avoid this, you can:

* Create separate automations for each trigger.

* Use a more specific trigger than `is edited`, like `is set to` or `contains`.

You can choose from three types of triggers:

* `Page added` means your automation will be triggered when a new page is added to your database.

* `Property edited` means your automation will be triggered when a specific property from your database is edited. For name, person, number, text, select, and relation properties, you can choose what kinds of edits made to that property will trigger an automation. For example, you might have a list of contacts in a Notion database and set up an automation where the trigger is a phone number starting with the numbers 732, and the action is that person’s state being set to New Jersey.

* `Every {frequency}` means your automation will be recurring. The trigger will happen repeatedly based on the frequency you set. You can set your automation to repeat every day, week, month, and so on. You can also set a time that the automation will be triggered, the date that the automation trigger will begin and end, and the timezone.

  **Note:** The `Every {frequency}` trigger works with all automation actions except for `Edit property`.

You can have more than one condition for your trigger so that two or more things must be true for the automation to occur. Note that a recurring trigger (like one that you set to repeat every week, month, etc.) can’t be paired with another type of trigger.

## Database automation actions

**Note:** If you’d like your automation to add or edit pages and databases, make sure that you have permission to edit those pages and databases. Additionally, make sure edited pages are available are not `Private` or `Shared`. Otherwise, your automation won’t work.

Automations can take one action or multiple actions. You can choose from a variety of actions:

* `Edit property` will edit the properties of pages in the database you are currently in. For multi-select, people, and relation properties, you can add or remove individual values instead of adding or removing all values at once. For example, you might have a task database where if the task name contains the word “blog”, your name is added to the people property, even if there are other people already assigned to that task.

* `Add page to` will add a page to a database of your choosing, and edit the properties of that page.

* `Edit pages in` will edit pages and properties in a database of your choosing.

* `Send notification to` will send a notification to specific people in your Notion workspace. Your recipient can be up to 20 people in your workspace, or people who are associated with a certain People property in your database. Add a message that you want to go along with the notification.

* `Send mail to` will send an email from your Gmail account to one or more recipients. Learn more about this below.

* `Send webhook` will send an HTTP POST requests to the specified URL. Learn more in [this article →](https://www.notion.com/help/webhook-actions)

* `Send Slack notification to` will send a custom notification to the Slack channel you want. This feature is only available on the Plus, Business, and Enterprise Plans. Learn more [here →](https://www.notion.com/help/slack#slack-automation-actions)

* `Define variables` will allow you to create a custom variable using mentions and formulas. You can then use this variable in other database automation actions. Learn more about this below.

Get more inspiration for using database workflows in [this guide →](https://www.notion.com/help/guides/Create-streamlined-project-management-workflow-using-database-automations)

### Send mail to

**Note:**

* You need a Gmail account to use this automation.

* Once someone has linked their Gmail account to an automation, only they will be able to edit the automation. Others will only be able to use the automation.

* Emails sent using this automation may take up to two minutes to arrive in your recipient’s inbox.

* Be mindful of Gmail’s limits for how many recipients a message can have, or how many emails you can send in a day.

The `Send mail to` action for a database automation will send an email **from your Gmail account** to one or more email addresses when a trigger occurs. This is helpful if you want to send an email to someone to remind them to complete their past-due task, or to update your team on the status of all of your open projects.

To set up an automation to send an email:

1. Click `⚡` at the top of a database, then select `New automation` or an existing automation.

2. Select `New action` or `Add action` → `Send mail to…`.

3. If your Notion account is already tied to a Gmail account, you’ll see your email address next to `Send mail from`. If you want to use another Gmail account for this automation, click on your email address → `Add Gmail Account`.

4. You can set up various parts of your email:

   * `To`: This could be a person property (like `Whoever triggered` or `Page creator`), a person in your workspace, or a specific email address. This email address can be external — it doesn’t have to belong to someone in your workspace or your organization.

     * Select `CC/BCC` next to the `To` field to optionally CC or BCC other people.

   * `Subject`: Enter a subject for your email. Select `@` in the `Subject` field if you want your subject to contain a property from your trigger page, a time or date, a person or group in your workspace, or a link to a page in your workspace. Select `∑` in the `Subject` field if you want to create a formula for your subject.

   * `Message`: Enter a message for your email. Select `@` in the `Message` field if you want your message to contain a property from your trigger page, a time or date, a person or group in your workspace, or a link to a page in your workspace. Select `∑` in the `Message` field if you want to create a formula for your message.

   * `Send with display name`: This optional display name will appear next to your email when your recipient receives it. Select `@` in the display name field if you want your display name to contain a property from your trigger page, a time or date, a person or group in your workspace, or a link to a page in your workspace. Select `∑` in the display name field if you want to create a formula for your display name.

     ![hc: display name for gmail automation](https://images.ctfassets.net/spoqsaf9291f/QudfXyEND9ZCYOnERZ7zB/f665b5cfc16160b39ba81b2680ca03a6/Reference_Visuals_Group_122__2_.png)

   * `Send replies to`: If you want replies to your email to be sent to someone other than the email address you used to send it, you can use this optional setting to send the reply to a person property, or a person in your workspace.

### Define variables

You can define a custom variable with mentions and formulas. You can then use this variable in other database automation actions. To define a variable:

1. Click `⚡` at the top of a database, then select `New automation` or an existing automation.

2. Select `New action` or `Add action` → `Define variables`.

3. Click on `Variable 1` to give the variable a name, edit the formula, or duplicate it. You can also select `Add variable`.

4. Select `@` or `∑` in the variable field to define your variables.

5. You can use these variables in additional automation actions.

Let’s look at an example of when and how you’d create a custom variable. Let’s say you want to set an automation where when a parent task is marked as complete, all of its sub-tasks are automatically marked as complete.

1. Click `⚡` at the top of a database, then select `New automation` or an existing automation.

2. Select the trigger as `Status set to Complete`.

3. Select `New action` or `Add action` → `Define variables`.

4. Select `∑` in the field below `Variable 1`.

5. In the window that opens, select `Trigger page` in the list of properties to the left.

6. Put a period right after `Trigger page` in your formula, so that your formula reads `Trigger page.`. Once you do this, you’ll see the trigger page’s properties in the list of properties to the left.

7. Select `Sub-item`. Your formula should now read `Trigger page.Sub-item`.

8. `Save` your formula. Now, your custom variable is defined as the sub-items of the page that triggers your automation, or in other words, the page that is marked as complete.

9. Now, in your database automation settings, select `Add action`.

10. Select `Edit pages in...`.

11. Open the `Select database` dropdown and select `Variable 1`. This means that the automation will edit pages associated with variable 1, or in other words, sub-items associated with the page that is marked as complete.

12. Open the `Edit a property` dropdown and select `Status`.

13. Open the `Select` dropdown and select `Complete`.

14. Select `Save`.

The next time you mark a parent item that has sub-items as complete, you should see all of the sub-items’ statuses change to complete too!

## Mentions and formulas in database automation actions

**Note:**

* At this time, mentions and formulas can only be used in database automation **actions**, not triggers.

* Formulas can’t be used when sending Slack notifications.

You can use mentions and formulas in your database automation actions to make your automations work better for you. For example:

* You might want to mention the date in the name of a new page created in your database.

* You might want to set up a database automation to send a notification to someone that mentions a specific page.

* You might want to automatically send a message to someone when a ticket has been resolved, and use a formula in that message that calculates the time it took to complete the ticket.

To include a mention or formula in a database automation action:

1. Select the slider icon at the top of a database → `Automations`.

2. Select `New action` or `Add action`. Find the action you want and select it.

3. As you set up the automation action, select `@` in the field if you want to mention a date, person, page, or a property from the trigger page in your database. Select `∑` in the field if you want to create a formula.

4. Select `Save` when you’re done.

Notion AI can help create and edit formulas, as well as answer questions about formulas. Learn more [here →](https://www.notion.com/help/formulas#create-and-edit-formulas-with-Notion-AI)

## Database automation errors

To make sure your automation is working properly, we’ll help you understand where your automation is invalid.

* If your automation runs into any errors **while you’re setting it up**:

  * You’ll see information about where and what those errors are as you’re building or editing the automation.

  * You won’t be able to save the automation until you make the required corrections.

- If your automation has **worked before but runs into an error**, the automation will be paused.

  * We’ll notify you about errors in certain cases, including when a database or database property that your automation is updating is missing, or a third-party connection like Gmail or Slack is no longer valid or needs to be authenticated.

  * In other cases, including when formulas don’t execute properly or there are issues with webhooks, you may not be notified.

- You can click on the notification to go directly to the broken automation and fix it so it can be used again. Once your automation is fixed, you’ll need to turn it on, or un-pause it, manually. To do this:

  1. Open the database that your automation is tied to and select `•••` → `Automations`.

  2. Hover over the automation that you’ve just fixed and select `•••`.

  3. Toggle on `Active`.

- Automations may fail if they attempt to perform date calculations (such as `dateAdd`) on a field that is empty or undefined when the automation runs.

  * As a solution, create a filtered view that only includes items where the field is not empty, and configure the automation to run only on that view.

- Automations may fail if they’re applied to a database view that filters out relevant entries. Make sure the automation runs on a view that includes all the items it needs to act on.

## Edit, pause, or delete database automations

To see and manage all of the existing automations for a database:

1. Click `⚡` at the top of a database.

2. Hover over the automation and click **`•••`****.**

3. Select `Edit`, `Pause`, or `Delete`.


## FAQs

### How frequently is the database scanned for “changes” in properties?

Database automations work over a three second window. For example, within this three second window, a user can remove a trigger and delete any changes, resulting in no property change to the automation.


### Do automations work on pages in the entire database, or pages in a single database view?

Either one. During the creation process, you can specify if the automation should run on pages in the entire database, or in a specific view. If any filters in that view change, the automation will then apply to the adjusted list of pages.


### Can guests with full access to a database create automations?

Unfortunately, guests can't create database automations.


### Why isn’t my database automation triggering?

If your database automation isn’t triggering, it could be because:

* The automation is set to be triggered by another automation. Automations can’t currently trigger other automations. Try using a different, non-automated trigger instead.

* The page no longer matches a view’s filters *after* it’s edited. Automations only run if the page still matches the view when the trigger occurs.

* The database is locked.
