---
title: Notion API integrations
emoji: 🏗️
description: With Notion's API, you'll be able to create custom internal integrations. Some of our partners may also require an internal integration token in order to link their platform to your Notion workspace - below, we'll walk you through how to set this up 🏗️
url: https://www.notion.com/help/create-integrations-with-the-notion-api
key: help:create-integrations-with-the-notion-api
coverImage: https://images.ctfassets.net/spoqsaf9291f/12hDHQuwwWB60tA3rEbJ1c/7c76c8059fe7e69e02c82992de113d39/Create_integrations_with_the_Notion_API_-_hero.png
category: Data & integrations
---

Visit our [developer hub](http://developers.notion.com/) for documentation, resources, and integration management tools.

**Note:** Workspace owners manage all connections in a workspace. <!-- -->Learn more [here →](https://www.notion.com/help/enterprise-connection-settings)

## Create an internal integration

1. In your left sidebar, navigate to `Settings` and then the `Integrations` tab.

2. Only Workspace owners will be able to access the `Integrations` tab and create integrations. If you are not an admin, please contact your Workspace admin or use a different workspace.

3. Click the `Develop your own integrations` link at the bottom.

4. [My integrations](https://www.notion.com/my-integrations) will open in your default browser. Click the `+ New integration` button.

5. Provide a `Name` for your integration. Optionally, you can also upload an image to use as a `Logo`.

6. Use the dropdown menu to specify which `Associated workspace` you would like to use this integration with.

   **Note:** Make sure you're logged into Notion on your web session with the same account that you used on desktop. Otherwise, you will not see the correct account and workspaces!

   ![Integration info](https://images.ctfassets.net/spoqsaf9291f/2wD6nPwE9Jcm7zHxH00YOw/78187a345065a2920c388143f3251d56/Integration_info.png)

7. Your internal integration has been added successfully! You'll now be able to see it in your workspace, in the `Settings` menu → `Connections`.

8. Click the `•••` next to the internal integration to retrieve the internal integration token. You'll need this token for any API-based automations or workflows your team creates, or to link your workspace to some partner platforms.

![Integration info](https://images.ctfassets.net/spoqsaf9291f/2wD6nPwE9Jcm7zHxH00YOw/78187a345065a2920c388143f3251d56/Integration_info.png)

**Note:** Internal integrations are workspace-specific, so to change the associated workspace, you'll have to create a new integration.

![Integration menu - create](https://images.ctfassets.net/spoqsaf9291f/4SjzAtvGtNgrIqsV1vqARz/12dcc258e6238bc1176f6695c5f65a50/Integration_menu_-_create.png)

## Create a public integration

All newly added integrations are internal initially. If you're a developer working on a public integration, first use the above instructions to create an internal integration.

Then, follow the instructions in our [developer guide](https://developers.notion.com/docs/authorization) to convert it to a public integration.

## Granular integration permissions

During the app setup process, developers will be able to choose the access level required from the user.

* Content capabilities:

  * Read content only

  * Write content only

  * Insert content

* User capabilities

  * No user information

  * Read user info (not including user's email address)

  * Read user info (including email)

[](//videos.ctfassets.net/spoqsaf9291f/4WIemLpzP6uADZdktNCUNU/19fd1eb50d6ed462607cb011991a3f9d/integration_granular_permissions.mp4)

When users install integrations, this access level will be displayed. It will also show in the `Share` menu of any pages that the integration that has been added to. [Learn more about installing integrations in a workspace →](https://www.notion.com/help/add-and-manage-connections-with-the-api)

## Integration webhooks

Integration webhooks enable integrations to monitor and respond to changes in Notion workspaces in real-time.

When changes occur in pages or databases shared with your [integration](https://www.notion.com/integrations/all), Notion automatically sends notifications to your webhook endpoint, allowing your integration to instantly update other tools, run automated tasks, or display the latest changes.

### Set up integration webhooks

For instructions, please visit our [developer docs](https://developers.notion.com/reference/integration-webhooks).

**Integration webhooks currently do not support notifications for:**

* User changes (including workspace membership changes, email/name updates, and permission modifications).

* Workspace and teamspace settings changes.

For these types of notifications, use the [audit log](https://www.notion.com/help/audit-log) instead.

### Webhook actions vs. integration webhooks

[Webhook actions](https://www.notion.com/help/webhook-actions#webhooks-limitations) and integration webhooks share some similarities—both have triggers and can send events to third-party services. However, integration webhooks offer broader capabilities:

* They can monitor activity across multiple workspaces.

* They can handle an unlimited number of actions.

In contrast, webhook actions are designed for simpler use cases and are configured through database automations with a limited set of triggers.

**Learn more**

* [Notion API](http://developers.notion.com/)

* [File upload API](https://developers.notion.com/reference/file-upload)

* [Best practices for handling API keys](https://developers.notion.com/docs/best-practices-for-handling-api-keys)
