---
title: "Add & manage connections"
emoji: null
description: "You can connect other software to Notion, automate actions within your workspace, and access connections built by our partners."
url: "https://www.notion.com/help/add-and-manage-connections-with-the-api"
key: "help:add-and-manage-connections-with-the-api"
coverImage: null
category: "Connections"
categoryKey: "category:connections"
---

**Note:&#x20;**&#x4F;n Enterprise Plans, the following can be restricted to workspace owners:

* The ability to [add connections](https://www.notion.com/help/add-and-manage-connections-with-the-api#add-connections-in-your-workspace) and decide who can connect or disconnect them at the page level.

* The ability to [install workspace-wide security and compliance connections](https://www.notion.com/help/add-security-and-compliance-integrations).

## Add connections in your workspace

Both Members and Workspace owners can add connections to a workspace in `Settings` → `Connections`.

You can also open connection tools from the developer section in your sidebar after you turn on [Developer Mode](https://www.notion.com/help/turn-on-developer-mode-to-use-developer-tools-in-notion).

Use the search bar or category filters to find the connection you're looking for. Connections are grouped by app, so products with multiple capabilities appear as one entry. Once a connection is added, you can add it to individual pages and databases in the `•••` menu under `Connections`.

**Note:** On Enterprise plans, workspace owners can restrict which connections members are allowed to install. If a connection you're looking for isn't available, contact your workspace owner.

## Add connections to pages

Connections built with the API follow a similar permission system to the sharing permissions for Notion users. In order to use a connection in your workspace, you'll need to add it to the specific page where it will be active.

* Navigate to a page and select `•••` at the top right.

* At the bottom of the pop-up, click `Add connections`.

* In the resulting pop-up, search for and select the connection you would like to add to this page. You'll only see connections that have been created for and associated with this workspace.

![add connection menu](https://images.ctfassets.net/spoqsaf9291f/7zzSpPbv4zLVJBfFFSW5dU/23b05f9414fd0aa964b36205cc3b55ec/add_connections_to_pages.png)

* The connection will now appear in the `•••` menu for the page.

* If you want to remove a connection from a page, hover over its name and then press `Disconnect`.

### Manage connections in pages

**Note:** This feature is only available to users on the Enterprise Plan. Domain verification is not required to enable this feature.

Workspace owners on the Enterprise Plan can decide what pages a connection can access, as well as who can connect or disconnect them from pages. To do this:

1. Go to `Settings` → `Connections`.

2. In the `Manage` tab, select `•••` next to a connection.

3. In the menu that appears, select `Manage page access`.

4. Under `Select pages`, find and select specific pages that you want to give permission to the connection to access.

5. Under `Who can manage page access`, open the dropdown menu. Select `Connection owners & workspace members` if you want all workspace owners and members to be able to manage access. Select `Connection owners only` if you want only workspace owners to be able to manage access.

If you choose to allow only connection owners to manage access, that means only they will be able to connect or disconnect this particular connection from a page. Members won’t be able to take this action.

## Manage connections in your workspace

**Note:** Workspace owners manage all connections in a workspace. <!-- -->Learn more about [enterprise connection settings →](https://www.notion.com/help/enterprise-connection-settings)

* Go to `Settings` → `Connections`. Here, you'll see the full connections catalog of all connections grouped by app, with search and category filters.

* Select a connection to review or update it. You can edit settings, change permissions, or disconnect.

* Use the `Manage` tab to view admin controls including approval settings and connected-member visibility.

![Add & manage connections - connection menu](https://images.ctfassets.net/spoqsaf9291f/4o8nQj3zUQeC4cAw0idh0v/e068d8fbb27c219490085ec64d859b00/Integration_-_Share_3.png)

* Click the `•••` next to an connection to see additional options:

  * Retrieve an internal API token

  * Visit the developer's website or contact their support

  * View users with access to the connection

  * Disconnect the connection

Looking for a way to monitor and respond to real-time changes in your Notion workspaces? Try [connection webhooks](https://www.notion.com/help/create-integrations-with-the-notion-api#integration-webhooks)!

## View the connections page

Go to `Settings` → `Connections` to discover, install, and manage all the tools you connect to your Notion workspace.

To open the connections page:

1. Go to `Settings` in your sidebar.

2. Select `Connections`.

You'll see all available connections grouped by app. Use the search bar or filters to find a specific connection, or browse by category.

## Install a connection

1. Open `Settings` → `Connections`.

2. Find the connection you want and select it to open its details.

3. Follow the setup steps to authorize and connect your account.

Once installed, you can add the connection to specific pages or databases from the `•••` menu on any page.

**Note:** On Enterprise plans, workspace owners can limit which connections members are allowed to install. If a connection isn't available to you, contact your workspace owner.

## For workspace owners (Enterprise)

Workspace owners on Enterprise plans can:

* Restrict which connections members are allowed to install.

* Build and manage an approved connections list.

* View all members who have a specific connection installed.

* Disconnect members from a connection.

Go to `Settings` → `Connections` and select the `Manage` tab to access these controls.

Learn more about how to manage connections in [Enterprise connection settings](https://www.notion.com/help/enterprise-connection-settings) →

## Install from a developer

Check out our [**Connections gallery →**](https://www.notion.com/integrations/all)

### Install directly from a partner platform via OAuth

Notion has partnered directly with several services (such as [Zapier](https://www.notion.com/integrations/zapier) and [Typeform](https://www.notion.com/integrations/typeform)). You can add our partners' public connections to your workspace directly through their sites via OAuth.

* Search for `Notion` in the partner platform's app menu and add it.

* In the resulting authentication menu, you'll be asked by the partner connection to allow access your workspace. The access levels required by the connection will be specified.

* Connections are workspace-specific! Click the workspace name at the top right to switch to another workspace if needed. Then, press `Select pages`.

![Add & manage connections - OAuth](https://images.ctfassets.net/spoqsaf9291f/6MsEvgRLe5IrVKITLG1fQN/4626b76d1ddd630c1059f125d7346341/OAuth.png)

* Now, you'll see a list of all of the pages in the selected workspace. Choose the pages you would like the connection to be able to access, and then press `Allow access`.

* Once you've completed the authentication, you'll see this connection in your workspace's `Settings` menu → `Connections`.

* Click the `•••` menu next to the connection name to visit the developer's website, contact the developer's support team, or disconnect the connection from your workspace.

![Add & manage connections - public connection menu](https://images.ctfassets.net/spoqsaf9291f/2ij6nANbGgyau3YlzfAHoa/04de0f513c6ba2f64d87b638c2a40512/Integration_Menu_-_Public.png)

**Tip:** Want to see partner connections in action? [Check out this guide →](https://www.notion.com/help/guides/visual-link-previews-streamline-collaboration)

### Connect via installation access token

Some partner platforms require an installation access token in order to link to your workspace.

* In this case, first follow these instructions to create a corresponding internal connection for your workspace.

* Once you've created the internal connection, navigate to `Settings` in your sidebar and then the `Connections` tab.

* Click the `•••` menu next to the existing connection that you'd like to link to a partner platform, and press `Copy installation access token`.

![Add & manage connections - internal connection token](https://images.ctfassets.net/spoqsaf9291f/1EdzyxZuVOL043FzByZb62/d955d0171a63a62e6181831ce716416e/Integration_menu_-_Token.png)

* Paste this installation access token into the corresponding field on the partner platform's set up form.

**Note:** Notion does not support troubleshooting for partner connections. Please direct any feedback and questions to the respective partner's support team.
