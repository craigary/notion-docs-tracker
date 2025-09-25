---
title: Forms
emoji: 🖋️
description: Learn how to create, share, and gather information using forms 🖋️
url: https://www.notion.com/help/forms
key: help:forms
coverImage: https://img.youtube.com/vi/h4SZQvX2hUU/maxresdefault.jpg
category: Databases
---

Forms make it easy to collect information from others, even if those people aren’t part of your Notion workspace or don’t use Notion at all. **All members on all Notion plans** can create and use forms.

Forms are connected to databases, so each question in your form is connected to a property in your database. This way, your form lives right alongside its responses, and you can use the information you collect in the same way you use information in any other kind of database.

**Note:** The following actions are only possible using Notion’s desktop and web apps, and can’t currently be done on a mobile device:

* Creating a new form.

* Customizing a form.

## Create a new form

To create a new form:

1. In a page, use the slash command `/form`.

   [](//videos.ctfassets.net/spoqsaf9291f/1FV6mwgA4OvJ0P4OjwGa6S/6e20bd635afceb7f5c62ca28604fa5c9/New_Form.mp4)

2. Select `Form` in the menu that appears.

When you create your new form, a `Respondent` property will be created automatically to capture your respondents’ names. You can also allow respondents to remain anonymous in your [form sharing settings →](https://www.notion.com/help/forms#share-your-form)

## Create a form from an existing database

**Note:** To create a form from an existing database, you must have `Full access` to the database that the form is connected to.

If you have a database you’ve already been using to collect information from various people, it’s easy to add a form to that database! To create a form from an existing database:

1. In a database, select `+` next to your existing views. Depending on your screen size, you may have to open the dropdown next to your current view and select `Add view`.

2. In the menu that appears, select `Form`.

3. Select `Create {#} questions` to proceed.

Create a `Created by` property in your database if you’d like to capture your respondents’ names. You can also allow respondents to remain anonymous in your [form sharing settings →](https://www.notion.com/help/forms#share-your-form)

## Configure and preview your form

**Note:**

* To edit a form, you must have `Can edit` access or `Full access` to the database that the form is connected to.

* Conditional logic, which allows you to customize what questions are shown to respondents based on their responses, is only available on Business and Enterprise Plans.

Once you’ve created a form, you’ll be taken to the form builder, which looks like this.

![hc: form builder](https://images.ctfassets.net/spoqsaf9291f/36LCmtPCSn9FCFveRlPfSn/a8640ff278da10e7a30215af1b990c1a/Reference_visuals__3_.png)

The form builder lets you decide what your form will look like and how it will work when you share it for others to fill out. To configure your form:

1. Give your form a title and an optional description.

2. Hover over the form’s title to add a `Form icon` or a `Form cover`.

3. Click into the questions in your form to edit them. By default, any changes you make in the form will be synced with the names of your database properties. For example, If you create a new question that asks “What time do you prefer?”, a new property with that same name will be created in your database. If you change a form question from “Favorite color” to “What’s your favorite color?”, your “Favorite color” database property will be renamed to “What’s your favorite color?”.

4. To add more questions to your form, select `+` underneath the last question.

5. Hover over each question in your database and select `•••`. From here, you can:

   * Make the question `Required`. This means that respondents will have to answer the question to submit the form.

   * Add a `Description` to your question so people can better understand what you’re asking about.

   * `Show options as` a list view or a dropdown if your question is multiple choice.

   * Allow a `Long answer` for text property questions.

   * Change the `Question type`, which is the equivalent of the property type. For example, this could be a `Multiple choice` question type or property if you want to ask a yes or no question. It could be a `Date` question type or property if you want to ask about someone’s availability or birthday.

     * For questions that are tied to multi-select, relation, and people properties, you can specify a maximum number of selections per response.

   * Toggle off `Sync with property name` if you want your form questions to look different from your database property names. For example, maybe you’d like to ask “What’s your favorite color?” in your form, but you want the responses to be collected in a property with a more simple name, like “Favorite color”.

   * `Add conditional logic` if your question is multiple choice and you’re on the Business or Enterprise Plan. For example, if the user selects option A, you can direct them to a specific follow-up question.

   * `Duplicate question` or `Delete question`.

6. Select `•••` at the top of your form builder → `Customize form`. From here, you can adjust the submission experience for your respondents, like the submit button's `Color` and `Text`, as well as the `Confirmation title` and `Confirmation body`.

7. Once you’re done setting up your form, select `Preview` at the top to see what your form will look like when you share it with others.

![hc: preview form](https://images.ctfassets.net/spoqsaf9291f/2VSPm0h0C0ILRcT6DTBXDu/79ceb28a5f10cc1cdd5ce019d5c76976/form_preview.gif)

## Share your form

**Note:**

* To change sharing settings for a form, you must have `Full access` to the database that the form is connected to.

* To copy and share a form’s URL, you must have at least `View access` to the database that the form is connected to.

* Workspace owners on the Enterprise Plan can choose to prevent forms from being shared to the web. Learn how [here →](https://www.notion.com/help/forms#prevent-members-from-sharing-forms-to-the-web)

To share your form:

1. Select `Share form` at the top of the form builder.

2. Select `Who can fill out` and choose one of the following options:

   * `Anyone at {your workspace} with link`, which means that any workspace members can fill out the form if they have the link. Guests can only fill out the form if they have been given access to the database that the form is connected to.

   * `Anyone on the web with link`, which means people who aren’t part of your Notion workspace and people who don’t use Notion can fill out the form if they have the link.

   * `No access`, which you can select if you’d like to close your form and stop accepting new responses.

3. If your form is available only to people in your workspace and anonymous responses are turned off, you’ll be able to select `Access to submission` and choose how respondents can interact with their submissions after they’ve been submitted:

   * `No access` means that the respondent won’t be able to see their form responses after submission.

   * `Can view` means that the respondent will be able to see their form responses after submission.

   * `Can comment` means that the respondent will be able to comment on their form responses after submission.

   * `Can edit` means that the respondent will be able to edit their form responses after submission.

   * `Full access` means that the respondent will be able to edit their form responses after submission, as well as update permissions for the page containing their form responses.

4. If you’ve chosen to share your form with anyone on the web who has the link and **you’re on a paid Notion plan**, you can toggle `Notion branding` on or off depending on whether you want the Notion logo to appear in your form.

5. Toggle `Anonymous responses` on or off depending on whether you want the respondent’s name to be recorded when your form is filled out. Respondents for forms available to `Anyone on the web with link` will automatically be anonymous.

   * In forms created from scratch, this information will be captured in the `Respondent` property, which is automatically created in your database.

   * In forms created from an existing database, you can create a `Created by` property in the database to capture this information.

6. Copy the link to the form at the top of the menu and you’re ready to share.

**Note:** If you’re sharing a form that is part of a template you have duplicated into your Notion workspace, make sure you set up a separate version of the form from scratch so that all of your form responses go to you and not the original form’s creator.

## Fill out a form

You can fill out a form using your desktop or mobile device as long as you have the form link and the permissions required to do so. Keep in mind that some forms can only be filled out when you’re logged into the Notion workspace where that form has been created.

To get a copy of your form responses, you’ll need to log into your Notion account or create a new one. You’ll only be able to edit your form responses if you have `Can edit content` access to the database, or `Can edit` access to the database page where your responses are stored.

## View and analyze form responses

**Note:**

* To view form responses, you must have at least `Can view` access to the database that the form is connected to.

* To edit form responses, you must have at least `Can edit content` access to the database that the form is connected to.

* If your form has a very high volume of responses, it might be slower to load. You might want to create a second version of your form or delete older responses that you no longer need.

* At this time, you can't export a Form view of a database. Try exporting your questions and responses from Table view instead.

By default, form responses will be stored in a [Table view](https://www.notion.com/help/tables) of your database named `Responses`. You’ll see your form questions as database properties.

You can analyze your form responses by [filtering and sorting](https://www.notion.com/help/views-filters-and-sorts) them. You can also [add a chart view to your database](https://www.notion.com/help/charts#add-a-chart-view-to-a-database) and [customize it](https://www.notion.com/help/charts#customize-your-chart) to visualize your responses. Learn more about how to analyze your form responses here →

## Build automations in your form

You can [build automations into your form](https://www.notion.com/help/guides/use-forms-to-collect-organize-and-act-on-responses-in-notion) so that specific actions can be taken when you get a new response or when a question is answered a certain way. You can send status updates to the respondent, send them notifications in Slack, and more.

To do this:

1. Open your form builder.

2. Select `•••` at the top → `Automations`.

3. Add one or more triggers for the automation.

4. Add one or more actions for the automation.

Learn more about automations [here →](https://www.notion.com/help/database-automations)

## Prevent members from sharing forms to the web

If you’re a workspace owner on an Enterprise Plan, you can prevent workspace members from making forms available to anyone on the web who has the link. To do this, workspace owners can:

1. Go to `Settings` → `Security`.

2. In the `Security` tab, toggle on `Disable publishing sites, forms, and public links`.

Any forms already live on the web will be taken down once you turn this setting on. Note that turning this setting on will also prevent members of your workspace from publishing [Notion Sites](https://www.notion.com/help/public-pages-and-web-publishing).
