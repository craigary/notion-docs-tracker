---
title: Buttons
emoji: 🍣
description: In Notion, you can easily automate simple and repetitive tasks to save time 🍣
url: https://www.notion.com/help/buttons
key: help:buttons
coverImage: https://images.ctfassets.net/spoqsaf9291f/2O8VB9lhxHdXAALDin0ROh/595844aef457c9faed8812afb0bbfbcd/Buttons_-_hero.png
category: Automations
---

Many of your workflows might include small, repetitive tasks like making a meeting agenda or changing the status of a task. With the click of a button, you can automate these tasks and save time.

## Who can use buttons?

* Buttons are available on all plans, but certain button actions are only available on paid plans. You can learn more [below →](https://www.notion.com/help/buttons#button-actions)

* If someone has `Full access` or `Can edit` permissions in a page, they can create, edit, and click buttons in that page.

## Create a button

To create a button:

1. Type `/` in a page, then find and select `Button`.

2. Give the button a name and emoji.

3. Select `New action` and choose an action. Learn more about button actions [below →](https://www.notion.com/help/buttons#button-actions)

4. Add more actions if you’d like, then select `Done`.

Try using buttons to instantly notify people. Find out how in [this guide →](https://www.notion.com/help/guides/notify-people-instantly-with-a-click-of-a-button)

## Button actions

**Note:** If you’d like your automation to add or edit pages and databases, make sure that you have permission to edit those pages and databases. Additionally, make sure edited pages are available are not `Private` or `Shared`. Otherwise, your automation won’t work.

* `Insert blocks` will add blocks of your choice, like text, bullets, toggles, and more, into your page. You can choose to add these blocks `Above button`, `Below button`, `At top of page`, or `At bottom of page`.

* `Add page to` will add a page to a database of your choosing, and edit the properties of that page.

* `Edit pages in` will edit pages and properties in a database of your choosing.

* `Send notification to` will send a notification to specific people in your Notion workspace. Your recipient can be up to 20 people in your workspace, or people who are associated with a certain People property. Add a message that you want to go along with the notification.

* `Send mail to` will send an email from your Gmail account to one or more recipients. This action is only available to users on paid plans. Learn more about this below.

* `Send webhook` will send an HTTP POST request to a specific URL. This action is only available to users on paid plans. Learn more [here →](https://www.notion.com/help/webhook-actions)

* `Show confirmation` will open a small confirmation screen anytime someone clicks the button. For example, you can use it to show a warning before a page or database is changed by the button.

* `Open page or URL` will open a selected page or link. If you choose to set the button to open a Notion page, this could be an existing page or a page that’s created within the button itself.

* `Send Slack notification to` will send a custom notification to the Slack channel you want. This feature is only available on the Plus, Business, and Enterprise Plans. Learn more [here →](https://www.notion.com/help/slack#slack-automation-actions)

* `Define variables` will allow you to create a custom variable using mentions and formulas. You can then use this variable in other button actions. Learn more about this below.

### Send mail to

**Note:**

* You need a Gmail account to use this automation.

* Once someone has linked their Gmail account to a button, only they will be able to edit the button. Others will only be able to click the button.

* Emails sent using this automation may take up to two minutes to arrive in your recipient’s inbox.

* Be mindful of Gmail’s limits for how many recipients a message can have, or how many emails you can send in a day.

This will send an email **from your Gmail account** to one or more email addresses when a trigger occurs. To set up your button to send an email via Gmail:

1. In your button settings, select `Add action`.

2. If you don’t have a Gmail account connected to your Notion account, you’ll be prompted to connect one. If your Notion account is already tied to a Gmail account, you’ll see your email address next to `Send mail from`. If you want to use another Gmail account for this automation, click on your email address → `Add Gmail Account`. Else you'll be prompted to connect a new account.

3. You can set up various parts of your email:

   * `To`: This could be a person property (like Whoever clicked or Page creator), a person in your workspace, or a specific email address. This email address can be external — it doesn’t have to belong to someone in your workspace or your organization.

     * Select `CC/BCC` next to the `To` field to optionally CC or BCC other people.

   * Subject: Enter a subject for your email. Select `@` in the `Subject` field if you want your subject to mention a person, specific Notion page, or date. Select `∑` in the `Subject` field if you want to create a formula for your subject using properties of your button, like who clicked it, the date the button action was triggered, and more.

   * Message: Enter a message for your email. Select `@` in the `Message` field if you want your message to mention a person, specific Notion page, or date. Select `∑` in the `Message` field if you want to create a formula for your message using properties of your button, like who clicked it, the date the button action was triggered, and more.

   * `Send with display name`: This optional display name will appear next to your email when your recipient receives it. Select `@` in the display name field if you want your display name to mention a person, specific Notion page, or date. Select `∑` in the display name field if you want to create a formula for your display name using properties of your button, like who clicked it, the date the button action was triggered, and more.

     ![hc: display name for gmail automation](https://images.ctfassets.net/spoqsaf9291f/QudfXyEND9ZCYOnERZ7zB/f665b5cfc16160b39ba81b2680ca03a6/Reference_Visuals_Group_122__2_.png)

   * `Send replies to`: If you want replies to your email to be sent to someone other than the email address you used to send it, you can use this optional setting to send the reply to whoever clicked your button, or a person in your workspace.

4. Click `Done`.

### Define variables

This will allow you to create a custom variable using mentions and formulas. You can then use this variable in other button actions. To define a variable:

1. In your button settings, select `Add action`.

2. Add a step and select `Define variables`.

3. Click on `Variable 1` to give the variable a name, edit the formula, or duplicate it. You can also select `Add variable`.

4. Select `@` or `∑` in the variable field to define your variables.

5. You can use these variables in additional button actions.

## Mentions and formulas in button actions

**Note:**

* At this time, mentions and formulas can only be used in button **actions**, not triggers.

* Formulas can’t be used in the following button actions:

  * Inserting blocks.

  * Opening a page or URL.

  * Sending Slack notifications.

You can use mentions and formulas in your button actions to make your automations work better for you. For example:

* You might want to mention the date in the name of a new page that your button creates in a particular database.

* You might want to set up a button to send a notification to someone that mentions a specific page in your Notion workspace.

To include a mention or formula in a button action:

1. Hover over your button and click `⚙️`.

2. Find an existing action or select `Add another step`.

3. As you set up the button action, select `@` in the field if you want to include a date, person, page, or group. Select `∑` in the field if you want to create a formula.

4. Select `Done`.

Notion AI can help create and edit formulas, as well as answer questions about formulas. Learn more [here →](https://www.notion.com/help/formulas#create-and-edit-formulas-with-Notion-AI)

## Button errors

To make sure your automation is working properly, we’ll help you understand where your automation is invalid.

If your automation runs into any errors **while you’re setting it up**:

* You’ll see information about where and what those errors are as you’re building or editing the automation.

* You won’t be able to save the automation until you make the required corrections.

If your automation has **worked before but runs into an error**, it’s possible that:

* A database that your automation is adding to or editing is missing.

* A database property that your automation is editing is missing.

* A third-party connection, like to Gmail or Slack, is no longer valid or needs to be authenticated.

You can go to the broken automation and fix it so it can be used again.

## Edit or delete a button

To edit your button:

1. Hover over your button and click `⚙️`.

2. Edit your button styling, name, and actions.

To delete your button:

1. Hover over your button and click `⋮⋮` in the left margin.

2. Click `Delete` to remove your button entirely.


## FAQs

### Can I use an @-tag such as @today inside a template button?

Yes! You'll be able to specify whether you want the @-mention to input a fixed date or user, or the date or user upon duplication.


### What permission level do I need to interact with a button?

A user must have `Full access` or `Can edit` permissions to interact with a button on a page.

If the button is interacting with or making changes to another page or database, additional permissions will be required:

* If the button is adding a page to or editing a page in a database, the person who clicks the button must be an editor of the target database.

* If the button is opening a page, the person who clicks the button must have access to view the page.


### Why is my button not naming a created page properly?

One reason this might happen is if you're using a template within a button to create a page. The values from the template overwrite the values from the button.
