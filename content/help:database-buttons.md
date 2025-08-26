---
title: Database buttons
emoji: 🔘
description: Database buttons take actions on your behalf with one click 🔘
url: https://www.notion.com/help/database-buttons
key: help:database-buttons
coverImage: https://images.ctfassets.net/spoqsaf9291f/6EoS1qqpvfD8A4lCcwzdW7/49c952f4717e2aaf5e4e71f84cd30a27/Database_Buttons_-_Reference_Visuals.png
category: Automations
---

Database buttons are a type of database property that automates your workflows. For example, you could use a button to approve a document or mark a daily habit as complete. When a database button is clicked, it’ll take actions on your behalf to save you time.

## Who can use database buttons?

* Database buttons are available on all plans, but certain database button actions are only available on paid plans. You can learn more [below →](https://www.notion.com/help/database-buttons#database-button-actions)

* If someone has `Full access` or `Can edit` permissions in a database, they can create and edit database buttons.

* If someone has `Full access`, `Can edit`, or `Can edit content` permissions in a database, they can click database buttons.

## Create a database button

To add a database button property:

1. Select the slider icon at the top of a database → `Edit properties` → `New property` → `Button`.

2. Add a label for your button, like `Approve` or `Complete`.

3. Select `Edit automation`.

4. Select `New action` and choose an action. Learn more about button actions [below →](https://www.notion.com/help/database-buttons#database-button-actions)

5. Add more actions if you’d like, then select `Save`.

As you set up your button actions, you can pull in certain pages, people, and more by using mentions and formulas. To do this, select `@` in the field if you want to include a date, person, page, or group. Select `∑` in the field if you want to create a formula. Learn more about using mentions and formulas [below →](https://www.notion.com/help/database-buttons#mentions-and-formulas-in-button-actions)

Want more real-life examples of how to use database buttons? [Read this guide →](https://www.notion.com/help/guides/make-work-more-efficient-database-button-property)

## Database button actions

**Note:** If you’d like your automation to add or edit pages and databases, make sure that you have permission to edit those pages and databases. Additionally, make sure edited pages are available are not `Private` or `Shared`. Otherwise, your automation won’t work.

* `Edit property` will edit the properties of pages in the database you are currently in.

* `Add page to` will add a page to a database of your choosing, and edit the properties of that page.

* `Edit pages in` will edit pages and properties in a database of your choosing.

* `Send notification to` will send a notification to specific people in your Notion workspace. Your recipient can be up to 20 people in your workspace, or people who are associated with a certain People property in your database. Add a message that you want to go along with the notification.

* `Send mail to` will send an email from your Gmail account to one or more recipients. This action is only available to users on paid plans. Learn more about this below.

* `Send webhook` will send an HTTP POST requests to the specified URL. This action is only available to users on paid plans. Learn more in [this article →](https://www.notion.com/help/webhook-actions)

* `Show confirmation` will open a small confirmation screen anytime someone clicks the button. For example, you can use it to show a warning before a page or database is changed by the button.

* `Open page or URL` will open a selected page or link. If you choose to set the button to open a Notion page, this could be an existing page or a page that’s created within the button itself.

* `Send Slack notification to` will send a custom notification to the Slack channel you want. This feature is only available on the Plus, Business, and Enterprise Plans. Learn more [here →](https://www.notion.com/help/slack#slack-automation-actions)

* `Define variables` will allow you to create a custom variable using mentions and formulas. You can then use this variable in other database button actions. Learn more about this below.

### Send mail to

**Note:**

* You need a Gmail account to use this automation.

* Once someone has linked their Gmail account to an automation, only they will be able to edit the automation. Others will only be able to use the automation.

* Emails sent using this automation may take up to two minutes to arrive in your recipient’s inbox.

* Be mindful of Gmail’s limits for how many recipients a message can have, or how many emails you can send in a day.

The `Send mail to` action for a database button will send an email **from your Gmail account** to one or more email addresses when a trigger occurs. This is helpful if you want to send an email to someone to remind them to complete their past-due task, or to update your team on the status of all of your open projects.

To set up a button to send an email:

1. Select `•••` at the top right of your database → `Properties` → `New property` → `Button`.

2. Select `Edit automation`.

3. Select `Add action` → `Send mail to…`.

4. If your Notion account is already tied to a Gmail account, you’ll see your email address next to `Send mail from`. If you want to use another Gmail account for this automation, click on your email address → `Add Gmail Account`.

5. You can set up various parts of your email:

   * `To`: This could be a person property (like `Whoever triggered` or `Page creator`), a person in your workspace, or a specific email address. This email address can be external — it doesn’t have to belong to someone in your workspace or your organization.

     * Select `CC/BCC` next to the `To` field to optionally CC or BCC other people.

   * `Subject`: Enter a subject for your email. Select `@` in the `Subject` field if you want your subject to contain a property from your trigger page, a time or date, a person or group in your workspace, or a link to a page in your workspace. Select `∑` in the `Subject` field if you want to create a formula for your subject.

   * `Message`: Enter a message for your email. Select `@` in the `Message` field if you want your message to contain a property from your trigger page, a time or date, a person or group in your workspace, or a link to a page in your workspace. Select `∑` in the `Message` field if you want to create a formula for your message.

   * `Send with display name`: This optional display name will appear next to your email when your recipient receives it. Select `@` in the display name field if you want your display name to contain a property from your trigger page, a time or date, a person or group in your workspace, or a link to a page in your workspace. Select `∑` in the display name field if you want to create a formula for your display name.

     ![hc: display name for gmail automation](https://images.ctfassets.net/spoqsaf9291f/QudfXyEND9ZCYOnERZ7zB/f665b5cfc16160b39ba81b2680ca03a6/Reference_Visuals_Group_122__2_.png)

   * `Send replies to`: If you want replies to your email to be sent to someone other than the email address you used to send it, you can use this optional setting to send the reply to a person property, or a person in your workspace.

### Define variables

You can define a custom variable with mentions and formulas. You can then use this variable in other database button actions. To define a variable:

1. Select `•••` at the top right of your database → `Properties` → `New property` → `Button`.

2. Select `Edit automation`.

3. Select `New action` → `Define variables`.

4. Click on `Variable 1` to give the variable a name, edit the formula, or duplicate it. You can also select `Add variable`.

5. Select `@` or `∑` in the variable field to define your variables.

6. You can use these variables in additional button actions.

## Mentions and formulas in database button actions

**Note:**

* At this time, mentions and formulas can only be used in button **actions**, not triggers.

* Formulas can’t be used in the following button actions:

  * Inserting blocks.

  * Opening a page or URL.

  * Sending Slack notifications.

You can use mentions and formulas in your button actions to make your automations work better for you. For example:

* You might want to mention the date in the name of a new page that your button creates in a particular database.

* You might want to set up a button to send a notification to someone that mentions a specific page in your Notion workspace.

To include a mention or formula in a database button automation action:

1. Select `•••` at the top right of your database → `Properties` → `New property` → `Button`.

2. Select `Edit automation`.

3. Find an existing action or select `Add action`.

4. As you set up the button action, select `@` in the field if you want to include a date, person, page, or group. Select `∑` in the field if you want to create a formula.

5. Select `Save`.

Notion AI can help create and edit formulas, as well as answer questions about formulas. Learn more [here →](https://www.notion.com/help/formulas#create-and-edit-formulas-with-Notion-AI)

## Database button errors

To make sure your automation is working properly, we’ll help you understand where your automation is invalid.

If your automation runs into any errors **while you’re setting it up**:

* You’ll see information about where and what those errors are as you’re building or editing the automation.

* You won’t be able to save the automation until you make the required corrections.

If your automation has **worked before but runs into an error**, it’s possible that:

* A database that your automation is adding to or editing is missing.

* A database property that your automation is editing is missing.

* A third-party connection, like to Gmail or Slack, is no longer valid or needs to be authenticated.

You can go to the broken automation and fix it so it can be used again.
