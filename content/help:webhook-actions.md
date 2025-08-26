---
title: Webhook actions
emoji: 🪝
description: Use webhook actions in Notion’s automation features 🪝
url: https://www.notion.com/help/webhook-actions
key: help:webhook-actions
coverImage: https://images.ctfassets.net/spoqsaf9291f/4CgnT1pWdUZRUahPRvukMM/08133d85de8c564ca3f9d5382d7d16b2/Share_your_work_-_hero.png
category: Automations
---

With the `Send webhook` action in [buttons](https://www.notion.com/help/buttons), [database buttons](https://www.notion.com/help/database-buttons), and [database automations](https://www.notion.com/help/database-automations), you can set up a trigger to send an HTTP POST request to a specific URL.

With this feature, you can leverage Notion to initiate workflows in your internal applications or third-party apps using low-code or no-code automation platforms like Zapier, Make, and more.

**Looking for&#x20;**[integration webhooks](https://www.notion.com/help/create-integrations-with-the-notion-api#integration-webhooks)**&#x20;instead?** Use integration webhooks to monitor changes across pages and databases in real time—ideal for powering advanced, multi-workspace automations.

## Who can use webhook actions?

Webhook actions are available to users on paid plans in automations across buttons, database buttons, and database automations.

## Send webhook

**Note:** The `Send webhook` action doesn’t require authentication.

To set up a webhook action:

1. In a button, database button, or a database automation, select `Add action`.

2. Select `Send webhook`.

3. Enter your URL. Any custom URL can be used.

4. If you’d like, select `Add custom header` and enter your `Key` and `Value`.

5. If you’re setting up the webhook in a database automation, you can select properties for your webhook’s content. Note that database button properties can’t be selected.

If your webhook action fails or doesn’t work as expected, you’ll see an exclamation mark next to where you set up the automation. The automation will automatically be paused, and you’ll need to resume the automation manually to use it again.

Get inspiration for using webhooks in [this guide →](https://www.notion.com/help/guides/share-social-media-posts-from-notion-with-webhook-actions)

## Webhooks limitations

At this time:

* You can set up a maximum of five webhook actions per automation.

* Webhooks only support POST request types.

* Webhooks aren’t available at the workspace level, but we’re working on this!

* Only database page properties, not page contents, can be sent using webhook actions.

* There isn’t a way to preview the payload for your requests, but you can use a website like [webhook.site](http://webhook.site) to do so.

## Disable webhook actions in a workspace

If you’re a workspace owner on an Enterprise Plan, you can disable the `Send webhook` action for your entire workspace. To do this:

1. Go to `Settings` in your sidebar.

2. Open the `Connections` tab.

3. Toggle off `Allow webhooks in automations`.

Once you’ve turned this feature off, members of your workspace won’t be able to select `Send webhook` as an action for any automations they set up.
