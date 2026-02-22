---
title: Enterprise connection settings
emoji: null
description: Enterprise connection settings empower workspace owners with granular control. Manage member access, approve connections, and streamline your Notion workspace's integration ecosystem — all from one centralized dashboard.
url: https://www.notion.com/help/enterprise-connection-settings
key: help:enterprise-connection-settings
coverImage: https://images.ctfassets.net/spoqsaf9291f/3EvinCberMWv1O39Xd0N2N/1ed8baee3f128c1aba33293dba5633eb/Enterprise_connection.png
category: Workspace administration
---

**Note:** This feature is only available to users on the Enterprise Plan. Domain verification is not required to enable this feature.

Workspace owners on the Enterprise Plan have access to additional settings for managing connections within the workspace.

## Restrict members from installing connections

1. If you're a workspace owner, go to `Settings` → `Connections`.

2. Under the `Member` tab, you'll see the option to `Restrict members from adding connections`. Click the dropdown to the right to access two options:

   * `No restrictions`: All workspace members can install any connection in the workspace.

   * `Only from approved list`: Workspace members can only install connections pre-approved by a workspace owner. If a workspace owner installs an integration that isn’t already on the approved list, it’ll automatically be added to the approved list afterwards.

![Integration - Enterprise menu](https://images.ctfassets.net/spoqsaf9291f/5hClC5SVCaqs0It9asEcEr/59d3a712c45bd39b71a2d4a45c8368be/Integration_-_Enterprise_menu.png)

### Auto-approve connections built by Notion

* If `From approved list` is selected, workspace owners will see an additional option to auto-approve connections that are built by Notion. [See the full list of these connections here →](https://www.notion.com/integrations/all?collection=made-by-notion)

![Integration - Auto-approve](https://images.ctfassets.net/spoqsaf9291f/gyWbkRiuR2zBqjRU6ArGb/2ad5adfa347fee5bab390f991dcac8dd/Integration_-_Auto-approve.png)

### Approved connections list

1. Click the `+ Add approved connection` button to approve additional connections for members in your workspace.

   **Note:&#x20;**&#x42;efore you can approve a connection for the rest of your workspace, you or another admin will have to install it first! Only connections already installed in the workspace will show up in the `+ Approved connection` dropdown.

   Instructions for installing connections are specified [below](https://www.notion.com/help/add-and-manage-connections-with-the-api#install-public-integrations-from-developers).

2. Under the `Approved connections` heading, workspace owners will see a full list of connections that have been approved and installed in the workspace.

3. To the right of each connection's name, the name(s) of the users who have installed the connection in the workspace are listed.

4. Click the `•••` menu to:

   * Filter by user.

   * Revoke specific users' access to a connection.

   * Disconnect all users.

   * Remove the connection from the approved list.

![Integration - Options](https://images.ctfassets.net/spoqsaf9291f/501dZyRoaYclqaXOwQVV1u/269b881a7bbcb1f56bcfd8a43b069b7e/Integration_-_Options.png)

## Disable webhook actions in a workspace

Workspace owners on an Enterprise Plan can also disable the `Send webhook` action for your entire workspace. Learn more about webhook actions [here →](https://www.notion.com/help/webhook-actions)

To turn off webhook actions for your workspace:

1. Go to `Settings` in your sidebar.

2. Open the `Connections` tab.

3. Toggle off `Allow webhooks in automations`.

Once you’ve turned this feature off, members of your workspace won’t be able to select `Send webhook` as an action for any automations they set up.
