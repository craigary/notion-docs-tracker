---
title: "MCP connections for Custom Agents"
emoji: null
description: null
url: "https://www.notion.com/help/mcp-connections-for-custom-agents"
key: "help:mcp-connections-for-custom-agents"
coverImage: null
category: "Custom Agents"
categoryKey: "category:custom-agents"
---

MCP (Model Context Protocol) connections let your Custom Agent securely connect to external apps. With MCP connections, your agent can read information and take actions using pre-configured connections with apps like Linear, Ramp, Figma, and more—or connect to any app by setting up custom MCP connections.

**Note:** MCP connections are available on Business and Enterprise plans only.

## What are MCP connections?

MCP connections let Custom Agents interact with external tools and services through the Model Context Protocol. MCP tools work with all trigger types, including scheduled runs, triggered runs based on Notion or Slack events, and manual runs from chat or @mentions.

Key features:

* **Pre-configured servers:&#x20;**&#x51;uickly connect to popular apps without any additional configuration.

* **Custom servers:&#x20;**&#x43;onnect to any tool that supports a hosted MCP server using publicly available URLs.

* **Customization:&#x20;**&#x54;ools for each connection can be toggled on or off, and you can choose whether to require confirmation before running, run automatically, or permanently allow all tools from a server.

## Unique ownership

Each MCP connection is unique to a single Custom Agent and uses the credentials of the person who authenticated it. Connections are not shared across agents, even if they connect to the same service.

This means:

* If you set up a Figma connection for agent A, agent B will need its own separate Figma connection.

* You must log in to each MCP server for each agent you configure.

* Revoking a connection in one agent does not affect other agents.

## Available pre-configured MCP connections

You can connect to the following apps without any additional configuration:

* [Amplitude](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)

* [Attio](https://docs.attio.com/mcp/overview)

* [Box](https://docs.box.com/en/box-mcp/about-box-mcp-server)

* [ClickHouse](https://clickhouse.com/docs/use-cases/AI/MCP/remote_mcp#enable-remote-mcp-server)

* [Figma](https://developers.figma.com/docs/figma-mcp-server/)

* [GitHub](https://github.com/github/github-mcp-server)

* [HubSpot](https://developers.hubspot.com/mcp)

* [Intercom](https://developers.intercom.com/docs/guides/mcp)

* [Linear](https://linear.app/docs/mcp)

* [Mercury](https://docs.mercury.com/docs/what-is-mercury-mcp)

* [Miro](https://developers.miro.com/docs/miro-mcp)

* [Mixpanel](https://docs.mixpanel.com/docs/mcp#notion)

* [n8n](https://docs.n8n.io/advanced-ai/mcp/accessing-n8n-mcp-server/)

* [Ramp](https://docs.ramp.com/developer-api/v1/mcp)

* [Stripe](https://docs.stripe.com/mcp)

* [Sentry](https://docs.sentry.io/product/sentry-mcp/)

* [Wiz](https://www.wiz.io/blog/introducing-mcp-server-for-wiz)****

## How to add a pre-configured MCP connection

1. Open your Custom Agent's `Settings`.

2. Go to `Tools & Access`.

3. Click `Add connection` → `Add`.

4. Choose a pre-configured server.

5. Follow the authentication prompts to connect your account.

6. Select which tools from the server you want your agent to use. These will vary based on the server you choose.

7. Click `Connect`.

## How to add a custom MCP connection

To connect to an MCP server that isn’t in the pre-configured list, a workspace admin must first turn on this option. There are two separate settings: one to allow custom MCP servers, and one to decide whether members can install any connection or only ones you approve.

To allow custom MCP servers:

1. As a workspace admin, go to `Settings` → `Connections`.

2. In the `Manage` tab, toggle on **Enable custom MCP servers**.

To choose whether members can install any connection or only admin-approved connections:

1. As a workspace admin, go to `Settings` → `Connections`.

2. In the `Manage` tab, find the **Manage permissions** section.

3. Next to **Limit which connections members can install**, choose one:

   * `Approved & recommended`: Automatically approve all connections recommended by Notion.

   * `Approved only`: Manually select each connection members can install.

4. Select `Approved connections` to review what members can install.

5. Select `Add approved connection`, then choose what you want to allow:

   * `Connections`: Search for a connection by name or ID and add it to the approved list.

   * `Custom MCP server`: Add a specific custom MCP server URL you want to allow.

6. Click `Save`.

Once this is set, anyone in the workspace can connect to the approved options when they’re setting up a Custom Agent. They’ll authenticate with their own credentials.

To add a custom MCP to a Custom Agent:

1. Open your Custom Agent’s `Settings`.

2. Go to `Tools & Access`.

3. Click `Add connection` → `Custom MCP server`.

4. You’ll need to enter the MCP server’s URL from the tool or provider you’re connecting to (for example: your company’s internal tool team).

5. Provide a display name for the connection (optional).

6. Add any required authentication details.

7. Click `Connect`.

#### Authentication for custom MCP connections

Custom MCP servers may support one or both of the following sign-in methods:

* OAuth

* Header-based authentication

  (for example, API keys or bearer tokens)

Some OAuth servers don't support [dynamic client registration (DCR)](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization#dynamic-client-registration). This means Notion must pre-register a client application with the third-party service before OAuth sign-in can work. If the server you want to use doesn't support DCR, check its documentation to see if you can use an API key or bearer token instead. If neither option is available, the MCP server can't be used with Custom Agents.

## Managing available tools

You can decide how a Custom Agent should use an MCP connection in your agent’s `Settings` under `Tools & Access`. Expand the MCP connection entry to see available tools and determine how they run. Tools can be enabled or disabled using the adjacent toggle.

Read and write tools

* **Read tools** (ex: search, fetch, list, view) allow the Custom Agent to retrieve or view information without making changes to external systems.

* **Write tools&#x20;**(ex: create, update, delete, send, post) make changes to data in external systems. By default, these **r**equire confirmatio&#x6E;**&#x20;**&#x62;efore the agent executes the action.

Run automatically or always ask

* **Run automatically&#x20;**&#x61;llows the tool to execute without requiring confirmation from the user. This setting is best for read tools (search, fetch, list, view) since they don’t modify data.

* **Always ask&#x20;**&#x72;equires a user to approve or cancel an action before it executes. This is the default setting for write tools (create, update, delete, send) to prevent unintended changes.

* **Always allow** permanently approves all tools from a server and removes future confirmation prompts.

**To remove an MCP connection**

1. Open your agent’s `Settings`.

2. Go to `Tools & Access`.

3. Find the MCP connection and click `Disconnect`.

4. Click `Disconnect` to confirm`.`

5. Always test your agent after making changes. You can reconnect at any time by authenticating again.

**Note:** If you remove a connection, the agent can no longer access that service and scheduled runs that depend on that server may fail. <!-- -->Your agent’s workflows might break as soon as you disconnect. You can reconnect at any time by authenticating again.

## Permissions and security for MCP connections

MCP connections respect the user permission levels set on your Custom Agent. Here’s what each permission level can do with MCP-connected tools.

## Full Access & Can Edit permissions

Users with Full Access and Can Edit permissions to a Custom Agent can:

* Add new MCP connections to the Custom Agent.

* Chat with the agent and use all connected tools, even if they do not have access to the tool outside of the agent.

* View the agent’s activity log and MCP tool usage.

* Remove existing MCP connections.

* Reconnect or update the MCP server credentials.

And for MCP connections they set up, users with Full Access and Can Edit permissions can:

* Configure which tools are enabled or disabled and change tool execution settings (run automatically vs. always ask)

**Note:** Once an MCP connection is established, only the person who authenticates the MCP connection can configure and update tool settings - even if others have Full Access or Can Edit permissions to the Custom Agent. The agent uses that person’s credentials and permissions when accessing the external service.

## Can view & interact

Users with Can view and interact permissions to a Custom Agent can:

* Chat with the Custom Agent and use all connected tools, even if they do not have access to the tools outside of the Custom Agent.

* Trigger both read and write actions through the agent.

* Approve or cancel write actions when confirmation is required.

* View which MCP servers are connected (in the Custom Agent settings).

Users with Can view and interact permissions **cannot**:

* Add or remove MCP connections.

* Change which tools are enabled.

* Modify tool execution settings.

* View the agent’s full activity log.

**Note:** Write actions (like creating or updating items) require confirmation by default to prevent unintended changes. Users will see a prompt showing exactly what action the agent will take before it executes.

## Troubleshooting MCP connections for Custom Agents

If tools are not appearing after connecting:

* Refresh the agent settings page.

* Check that the MCP server successfully authenticated (look for a green checkmark or “Connected” status).

* Verify that the server is online and returning tool metadata.

* Try reconnecting the server, or disconnecting and re-adding it.

**If Custom Agent runs fail with MCP errors:**

* Check the **Activity&#x20;**&#x74;ab for specific error messages.

* Verify that your connection is still valid (tokens may have expired).

* Make sure the connection is still enabled in the agent’s settings.

* Try reconnecting the MCP server to refresh credentials.

* Update your Custom Agent’s instructions to mention the server or tool name you’re looking to use. For example: “Use Linear MCP to retrieve metadata for this mock.”


## FAQs