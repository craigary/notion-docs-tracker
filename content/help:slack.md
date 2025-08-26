---
title: Integrate Slack
emoji: 💬
description: Bring Notion and Slack together so your team can work better from anywhere 💬
url: https://www.notion.com/help/slack
key: help:slack
coverImage: https://img.youtube.com/vi/fdA1qqfV5v4/maxresdefault.jpg
category: Data & integrations
---

Notion's integration with Slack enables seamless communication between the two platforms. You can send Slack messages to Notion databases and receive Slack notifications for Notion activities. Read on to learn about the different features of the integration and how you can set them up.

## Set up Slack integration

To receive Slack notifications about things that happen in Notion:

1. Go to `Settings` in your sidebar → `Notifications`.

2. Find `Slack notifications`.

3. Click `Add new account` and go through the authentication flow.

To set up Slack notifications as part of a database automation:

1. Select `•••` at the top of a database.

2. Select `Automations` and `Add trigger`.

3. Then choose `Page added` or `Property edited` → `Send Slack notification to...`

4. Select a Slack channel.

   * If you haven't already, you'll be asked to asked to connect your Slack account.

Notion AI can find answers to your questions based on information from your Slack conversations. Learn more about this feature [here →](https://www.notion.com/help/notion-ai-connectors-for-slack)

## Send a Slack message to a Notion database

When Slack messages turn into an action item or a new idea, send them right to a Notion database so they don't get lost. Here's how:

1. Enter the command `/notion create` into Slack, or click `⋮` next to any Slack message → `Send to Notion`. You may need to select `More message shortcuts...` to find this option.

2. Search for the database where you'd like this new page to live or paste the link to the database. Then give the page a title.

3. Select `Add property` to add more information to your new page based on the database’s existing properties.

4. Check the box next to `Confirm page creation publicly` if you’d like others in your Slack discussion to be notified of the new database item you’ve created.

5. Click `Save`.

**Note:** The `/notion create` command only works at the Slack channel level, and not inside of Slack threads.

## File a Notion task in Slack

To create a Notion task directly from Slack:

1. Enter the command `/notion task` into Slack, or click `⋮` next to any Slack message → `Create task in Notion`. You may need to select `More message shortcuts...` to find this option.

2. Search for the project where you'd like this new task to live or paste the link to the Notion project. You can give the task a name, an assignee, status, due date, and description.

3. Check the box next to `Confirm page creation publicly` if you’d like others in your Slack discussion to be notified of the new task you’ve created.

4. Click `Save`.

**Note:** The `/notion task` command only works at the Slack channel level, and not inside of Slack threads.

## Get notifications in Slack

Get Slack notifications when certain things happen in Notion. There are two ways you can set up these notifications:

* You can choose to only be notified when you’re mentioned in a page, a comment, or a person property in a database.

* You can choose to be notified when all of the above happens, as well as when:

  * You get a comment on a page you own, or a comment is added to a comment thread you’re already a part of.

  * A property is changed in a database that you’ve [set up notifications](https://www.notion.com/help/updates-and-notifications#page-notifications) for.

  * You’re invited to a page.

  * Someone has requested access to a page that you own.

To set this up:

1. Go to `Settings` in your sidebar → `Notifications`.

2. Open the dropdown next to Slack notifications and select the name of your Slack workspace. You can also select `Add new account` if you don't see your Slack workspace listed.

3. Toggle on `Activity in your workspace` to be notified of all of the above. This will automatically also toggle on `Only user or group mentions`. If you only want to receive Slack notifications when you’re mentioned in your workspace, toggle off `Activity in your workspace`.

### Turn Slack notifications off

To stop receiving notifications in Slack:

1. Go to `Settings` in your sidebar → `Notifications`.

2. Open the dropdown next to `Slack notifications` and select `Off`.

## Slack automation actions

**Note:&#x20;**&#x54;his feature is only available on paid plans.

When you build a button, database button, or database automation in Notion, you can set it to send a Slack notification to a specific Slack channel. You can even customize the notification with:

* Rich text like bold and italics.

* Hyperlinks.

* @-mentions to specific Notion pages, people, or teamspaces.

* Dynamic variables like `@now` and `@trigger.person` (the person who triggered the Slack notification).

* Slack-specific variables like `@channel` and `@here`.

* Emojis.

Let’s look at the various places you can build a Slack notification automation in Notion.

### In a button

When you create a button in your page, you can set it to send a Slack notification to a specific Slack channel. To do this:

1. Insert a button in a page.

2. Under `Do this`, select `Add action` → `Send Slack notification to...`.

3. Select the Slack channel you want the notification to be sent to. At this time, you can't select private DMs.

Whenever that button is clicked in the future, a Slack notification will be sent. Learn more about buttons and how to set them up [here →](https://www.notion.com/help/buttons)

### In a database

You can receive a message in Slack anytime someone adds or makes a change to a page in a database.

1. Click `•••` at the top right of any Notion database.

2. Select `Automations`.

3. Select `New automation`.

4. Name the notification and select `Add trigger` to choose what action will trigger the automation, such as `Page added`**&#x20;**&#x6F;r `Any property` edited.

5. Add additional triggers if necessary by selecting `+`.

6. Select `Add action` → `Send Slack notification to...`.

7. Choose a destination channel for the notification. At this time, you can't select private DMs.

![hc: slack db automation](https://images.ctfassets.net/spoqsaf9291f/r2tJqNjdMVFWiLQ6um9i3/5e8cf6f7e740b7fe25aef0aabf3ec2e1/Group_27.png)

### In a database button

When you add a button property to your database, you can set it to send a Slack notification to a specific Slack channel. To do this:

1. Add a new property in a database.

2. Under `Type`, select `Button`.

3. Under `Do this`, select `Add action` → `Send Slack notification to...`.

4. Select the Slack channel you want the notification to be sent to. At this time, you can't select private DMs.

Whenever that button is clicked in the future, a Slack notification will be sent. Learn more about database buttons [here →](https://www.notion.com/help/database-buttons)

## Preview Slack messages in Notion

1. Copy a link from Slack and paste it into Notion.

2. In the menu that appears, select `Paste as preview`.

You’ll see a preview of the message as well as when it was sent, what channel it was sent to, and how many replies it has. This information will update as it changes; you can also select `•••` → `Reload preview` to see the latest.

## Share Notion links in Slack

When you paste a Notion link in Slack, it’ll unfurl to provide useful information about your page. For database pages with the [AI summary property](https://www.notion.com/help/creating-and-editing-with-ai#text-property), Slack will automatically unfurl the AI summary.

You can also grant access permissions to the unfurled Notion page directly from inside Slack.

## Invite a Slack contact to a Notion page

1. On a Notion page, click `Share`.

2. Click into the search bar.

3. Select `Add contacts from Slack`.

4. Search for the person you want to invite, then select `Invite`.


## FAQs

### Can I choose to use just one part of the integration?

Unfortunately, this is not possible today. When you install Notion’s Slack integration you’ll have the full functionality/all features of the Slack integration.

However, since only users with edit access to a page can set up Notion notifications to Slack, you can control parts of the integration by restricting permissions.


### What permission level is required to create a database notification?

A user needs `Full Access` to a Notion database to be able to set up database notifications.

Anyone with at least `View` access to a database can see all the existing Slack notifications that have been set up. However, they can’t edit or create any themselves.


### How do permissions work when I share a Notion page in a Slack channel?

The user that shares the pag&#x65;*&#x20;*&#x77;ill get a prompt informing them some people in the channe&#x6C;*&#x20;*&#x64;on't have access to the doc. The user is then able to decide if they want to share the page with the people that don't have access. They also have the option to delete the page preview in Slack.


### Can admins control who can connect Slack to a Notion workspace?

As an admin in Slack you can manage settings that give you approval rights for any Slack integration. The same settings will apply to Notion if you choose to turn them on.

On Enterprise plans, Notion admins can also restrict members from installing the Slack integration using their admin permissions to manage connections.


### Where can you view and manage the Slack notifications you've set up in your Notion workspace?

Database notifications can be managed and edited in the the individual database they’ve been created in. There is currently no way to see all database notification workflows in your workspace from one central place.

Personal @-mention notifications can be managed from `Settings` → `Notifications`.


### When one person connects Notion to Slack, does that turn it on for everyone?

No, when one user sets up the integration all Slack users will be able to see an unfurled Notion page link or a Slack link preview in Notion.

But to use the functionality themselves, other users have to connect Slack individually.


### How do I send Slack messages to a specific database view?

The easiest way to send a Slack message to a specific database view (e.g. you might have a view for only your team’s tasks), is to copy the link to the database view and paste that link into the send to Notion prompt in Slack.

When you send a Slack message to a specific database view, the properties are auto-filled for you. No need to update them yourself manually!


### Does the @-mentioned notification in Slack work when a user is mentioned as part of a group @-mention in Notion?

Yes. A group mention in Notion will trigger the @mention notification in Slack to all members of the Notion group that have the Slack @mention turned on.


### Are there other 3rd party integrations providers and can I continue to use them (e.g. Zapier)?

Yes. Those integrations will continue to work as before.
