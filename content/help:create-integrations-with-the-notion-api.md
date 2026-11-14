---
title: "Notion API connections"
emoji: null
description: "With Notion's API, you'll be able to create custom internal connections. Some of our partners may also require an API token in order to link their platform to your Notion workspace - below, we'll walk you through how to set this up."
url: "https://www.notion.com/help/create-integrations-with-the-notion-api"
key: "help:create-integrations-with-the-notion-api"
coverImage: null
category: "Connections"
categoryKey: "category:connections"
---

You can manage personal access tokens from Notion. Turn on Developer Mode from `Settings`, then open personal access tokens from the developer section in your sidebar. Visit our [developer hub](http://developers.notion.com/) for documentation, resources, and connection management tools.

**Note:** Each connection has one or more owners, and every owner can manage the connection and get its API token. Who can create a connection depends on your plan and your workspace's settings. Learn more about [enterprise connection settings →](https://www.notion.com/help/enterprise-connection-settings)

Looking for admin tokens? The tokens on this page work inside one workspace and handle page content. If you need to run organization admin work like exports, legal holds, or logging users out, see [Admin APIs for Enterprise organizations](https://www.notion.com/help/admin-apis-for-enterprise-organizations).

**Which token do I need?** Notion uses a few different tokens. The one you copy for an internal connection is the **API token**, which is what this article covers. **Personal access tokens** are tied to your own account. **OAuth** handles apps you sign in to. If a partner platform asks for a token for a connection you made, use the API token.

## Create an internal connection

1. In your left sidebar, navigate to `Settings` and then the `Connections` tab.

2. Who can create a connection depends on your workspace. On Free and Plus plans, only workspace owners can create connections. On Business and Enterprise plans, workspace owners can also let members, or members in certain groups, create them. If you can't create a connection, ask a workspace owner.

3. Turn on [Developer Mode](https://www.notion.com/help/turn-on-developer-mode-to-use-developer-tools-in-notion), then open personal access tokens from the developer section in your sidebar.

4. Click `+ New connection`.

5. Provide a `Name` for your connection. Optionally, you can also upload an image to use as a `Logo`.

6. Use the dropdown menu to specify which `Associated workspace` you would like to use this connection with.

   **Note:** Make sure you're logged into Notion on your web session with the same account that you used on desktop. Otherwise, you will not see the correct account and workspaces!

   ![Integration info](https://images.ctfassets.net/spoqsaf9291f/2wD6nPwE9Jcm7zHxH00YOw/78187a345065a2920c388143f3251d56/Integration_info.png)

7. Your internal connection has been added successfully! You'll now be able to see it in your workspace, in the `Settings` menu → `Connections`.

8. Click the `•••` next to the internal connection to copy its API token. You'll need this token for any API-based automations or workflows your team creates, or to link your workspace to some partner platforms.

![Integration info](https://images.ctfassets.net/spoqsaf9291f/2wD6nPwE9Jcm7zHxH00YOw/78187a345065a2920c388143f3251d56/Integration_info.png)

**Note:** Internal connections are workspace-specific, so to change the associated workspace, you'll have to create a new connection.

![Integration menu - create](https://images.ctfassets.net/spoqsaf9291f/4SjzAtvGtNgrIqsV1vqARz/12dcc258e6238bc1176f6695c5f65a50/Integration_menu_-_create.png)

## Share ownership of a connection

Every internal connection has at least one owner. Owners can change the connection's settings and get its API token. You can share ownership so more than one person can manage the same connection. That way, work doesn't stop if someone changes roles or leaves.

To add or remove an owner:

1. Open the Developer Portal and select your connection.

2. Open the `Connection owners` tab.

3. Add a member or group as an owner, or remove one.

Please note the following about connection owners:

* Only full members and workspace owners can be owners. Guests and members with limited access can't.

* Who you can add as an owner also follows your workspace's setting for who can create connections.

* A connection always keeps at least one owner, so you can't remove the last one.

* If you're a workspace owner and need to take over a connection, add yourself as an owner first.

* If the last owner leaves the workspace, the connection's API token stops working right away.

You can share ownership on Plus, Business, and Enterprise plans, using Notion in your browser or the desktop app.

## Create a public connection

All newly added connections are internal initially. If you're a developer working on a public connection, first use the above instructions to create an internal connection.

Then, follow the instructions in our [developer guide](https://developers.notion.com/docs/authorization) to convert it to a public connection.

### [Choose where your public connection can be installed](https://www.notion.com/help/create-integrations-with-the-notion-api#choose-where-your-public-connection-can-be-installed)

When you create a public connection, you choose who can install it:

* `Any workspace`: anyone can install your connection in their own Notion workspace.

* `Selected workspaces`: only the workspaces you list can install your connection.

Pick `Selected workspaces` when you are building something just for your own company and you do not want other organizations to install it.

Notion checks this every time someone installs your connection. If their workspace is not on your list, the install stops and they see an error.

Only connections that anyone can install can be listed in the connections gallery. A connection that is limited to selected workspaces will not show up there.

**Note**: You choose this when you create the connection. If you need a different setting later, create a new connection.

A connection you own shows up in the developer portal for every workspace that is allowed to install it, already has it installed, or is the workspace where you built it.

### [Change the workspace where you build a public connection](https://www.notion.com/help/create-integrations-with-the-notion-api#change-the-workspace-where-you-build-a-public-connection)

Every public connection has one workspace where you build and test it. You can switch to a different one without starting over.

1. Open your connection in the developer portal.

2. Go to the connection's settings.

3. Pick the workspace you want to build in.

Notion connects your connection to the workspace you picked. You do not need to create a new connection.

## Granular connection permissions

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

When users install connections, this access level will be displayed. It will also show in the `Share` menu of any pages that the connection that has been added to. [Learn more about installing connections in a workspace →](https://www.notion.com/help/add-and-manage-connections-with-the-api)

## Connection webhooks

Connection webhooks enable connections to monitor and respond to changes in Notion workspaces in real-time.

When changes occur in pages or databases shared with your [connection](https://www.notion.com/integrations/all), Notion automatically sends notifications to your webhook endpoint, allowing your connection to instantly update other tools, run automated tasks, or display the latest changes.

### [Set up connection webhooks](https://www.notion.com/help/create-integrations-with-the-notion-api#set-up-connection-webhooks)

For instructions, please visit our [developer docs](https://developers.notion.com/reference/webhooks).

**Connection webhooks currently do not support notifications for:**

* User changes (including workspace membership changes, email/name updates, and permission modifications).

* Workspace and teamspace settings changes.

For these types of notifications, use the [audit log](https://www.notion.com/help/audit-log) instead.

### [Webhook actions vs. connection webhooks](https://www.notion.com/help/create-integrations-with-the-notion-api#webhook-actions-vs.-connection-webhooks)

[Webhook actions](https://www.notion.com/help/webhook-actions#webhooks-limitations) and connection webhooks share some similarities—both have triggers and can send events to third-party services. However, connection webhooks offer broader capabilities:

* They can monitor activity across multiple workspaces.

* They can handle an unlimited number of actions.

In contrast, webhook actions are designed for simpler use cases and are configured through database automations with a limited set of triggers.

**Learn more**

* [Notion API](http://developers.notion.com/)

* [File upload API](https://developers.notion.com/reference/file-upload)

* [Best practices for handling API keys](https://developers.notion.com/docs/best-practices-for-handling-api-keys)
