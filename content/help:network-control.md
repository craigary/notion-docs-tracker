---
title: Network control
emoji: null
description: null
url: https://www.notion.com/help/network-control
key: help:network-control
coverImage: https://images.ctfassets.net/spoqsaf9291f/2fiL1MoGwFpWFSIxhW6FPT/56692c91b1cbaf5dc6e9a32d013ad55d/Network_Control_from_Figma.png
category: Workspace administration
---

With this feature, Workspace Owners can manage which Notion workspaces are accessible on their corporate network using their proxy or cloud access security broker (CASB) solution.

If you're a Workspace Owner, this article will show you how to approve Notion workspaces using an SSL proxy within your corporate network. By restricting connections, you can prevent users on your network from signing in to unauthorized workspaces.

## How it works

Workspace Owner can configure an on-premises or cloud-based proxy server to intercept traffic to [notion.so](http://notion.so/). The proxy inserts a new HTTP header (X-Notion-Allowed-Workspaces) that lists the workspaces your employees can access.

**Once enabled:**

* Your team will be able to access the approved workspace(s) and continue using Notion normally.

* If anyone tries to sign in to a workspace that isn't on the approved list, they'll see an error message.

  * If a user has an active session and joins a corporate network, they will see an error message.

## Approve workspaces for your network

1. **Check your proxy server:**

   * Make sure your proxy server supports SSL interception. We recommend referring to your product or service for details on how to configure the HTTP header.

2. **Identify workspace IDs:**

   * You can find this in Notion via `Settings` → `Identity` → scroll to the bottom to see `Workspace ID`.

3. **Configure the HTTP header:**

   * Add the header X-Notion-Allowed-Workspaces and set its value to a comma-separated list of allowed workspaces.
