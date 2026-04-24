---
title: "MCP connections for Custom Agents"
emoji: "📶"
description: "Connect your Custom Agents to external systems and data sources with MCP 📶"
url: "https://www.notion.com/help/mcp-connections-for-custom-agents"
key: "help:mcp-connections-for-custom-agents"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/5yUrXL0g6goX2lRQ3wa8se/f6cfdb89cfe49af29470cd7de1f3e735/mcp.png"
category: "Custom Agents & Database Agents"
categoryKey: "category:custom-agents"
---

MCP (Model Context Protocol) connections let your Custom Agents securely connect to external apps. With MCP connections, your agents can read information and take actions using pre-configured connections with apps like Linear, Ramp, Canva, and more—or connect to any app by setting up custom MCP connections.

**Note:** MCP connections are available on Business and Enterprise plans only.

## What are MCP connections?

MCP connections enable Custom Agents to interact with external tools and services through the Model Context Protocol. MCP tools work with all trigger types, including scheduled runs, triggered runs based on Notion or Slack events, and manual runs from chat or @mentions.

**Key features:**

* **Pre-configured servers:&#x20;**&#x51;uickly connect to popular apps without any additional configuration.

* **Custom servers:&#x20;**&#x43;onnect to any tool that supports a hosted MCP server using publicly available URLs.

* **Customization:&#x20;**&#x54;ools for each connection can be toggled on or off, and you can choose whether to require confirmation before running or run automatically.

## Unique ownership

**Each MCP connection is unique to a single Custom Agent and uses the credentials of the person who authenticated it. Connections are not shared across agents, even if they connect to the same service.**

This means:

* If you set up a Figma connection for Agent A, Agent B will need its own separate Figma connection.

* You must log in to each MCP server for each agent you configure.

* Revoking a connection in one agent does not affect other agents.

## Available pre-configured MCP connections

You can connect to the following apps without any additional configuration:

* [Linear](https://linear.app/docs/mcp)

* [Ramp](https://docs.ramp.com/developer-api/v1/mcp)

* [Figma](https://developers.figma.com/docs/figma-mcp-server/)

* [GitHub](https://github.com/github/github-mcp-server)

* [Stripe](https://docs.stripe.com/mcp)

* [Sentry](https://docs.sentry.io/product/sentry-mcp/)

* [Attio](https://docs.attio.com/mcp/overview)

* [HubSpot](https://developers.hubspot.com/mcp)

* [Amplitude](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)

* [Intercom](https://developers.intercom.com/docs/guides/mcp)

* [Wiz](https://www.wiz.io/blog/introducing-mcp-server-for-wiz)

* ****[n8n](https://docs.n8n.io/advanced-ai/mcp/accessing-n8n-mcp-server/)****

## How to add a pre-configured MCP connection

1. Open your Custom Agent's `Settings`**.**

2. Go to `Tools & Access`**.**

3. Click `Add connection`**&#x20;→&#x20;**`Add`**.**

4. Choose a pre-configured server.

5. Follow the authentication prompts to connect your account.

6. Select which tools from the server you want your agent to use. These will vary based on the server you choose.

7. Click `Save`**.**

## How to add a custom MCP connection

If you want to connect to an MCP server that’s not in the pre-configured list:

1. In order to use custom Agent MCP connections, a **workspace admin&#x20;**&#x6E;eeds to enable this in `Settings` → `Notion AI` → `AI connectors` → `Enable Custom MCP servers`.

2. Once the Workspace Admin has allowed custom MCP connections, open your Custom Agent’s `Settings`**.**

3. Go to `Tools & Access`**.**

4. Click `Add connection`**&#x20;→&#x20;**`Custom MCP server`**.**

5. Enter the MCP server URL.

6. Provide a display name for the connection.

7. Add any required authentication details.

8. Click `Save`**.**

#### Authentication for custom MCP connections

Custom MCP servers ***may*** support one or both of the following sign-in methods:

* **OAuth**

* **Header-based authentication**

  (for example, API keys or bearer tokens)

Some OAuth servers don't support [dynamic client registration (DCR)](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization#dynamic-client-registration). This means Notion must pre-register a client application with the third-party service before OAuth sign-in can work. If the server you want to use doesn't support DCR, check its documentation to see if you can use an API key or bearer token instead. If neither option is available, the MCP server can't be used with Custom Agents.

## Managing available tools

You can decide how a Custom Agent should use an MCP connection in your agent’s `Settings`**&#x20;**&#x75;nde&#x72;**&#x20;**`Tools & Access`. Expand the MCP connection entry to see available tools and determine how they run. Tools can be enabled or disabled using the adjacent toggle.

**Read and write tools**

* **Read tools** (ex: search, fetch, list, view) allow the Custom Agent to retrieve or view information without making changes to external systems.

* **Write tools&#x20;**(ex: create, update, delete, send, post) **make changes to data&#x20;**&#x69;n external systems. By default, these

  **require confirmation&#x20;**&#x62;efore the agent executes the action.

**Run automatically or always ask**

* **Run automatically&#x20;**&#x61;llows the tool to execute **without requiring confirmation**

  from the user. This setting is best for read tools (search, fetch, list, view) since they don’t modify data.

* **Always ask&#x20;**&#x72;equires a user to approve or cancel an action before it executes. This is the **default setting for write tools** (create, update, delete, send) to prevent unintended changes.

**To remove an MCP connection**

1. Open your agent’s `Settings`**.**

2. Go to `Tools & Access`**.**

3. Find the MCP connection and click `Remove`**.**

4. Click `Save`**.**

5. Always test your agent after making changes. You can reconnect at any time by authenticating again.

**Note:** If you remove a connection, the agent can no longer access that service and scheduled runs that depend on that server may fail. Your agent’s workflows might break if you remove a connection, even before clicking Save.

## Permissions and security for MCP connections

MCP connections respect the user permission levels set on your Custom Agent. Here’s what each permission level can do with MCP-connected tools.

## Full Access & Can Edit permissions

Users with Full Access & Can Edit permissions to an agent can:

* Add new MCP connections to the agent

* Chat with the agent and use all connected tools, even if they do not have access to the tool outside of the Custom Agent

* View the agent’s activity log and MCP tool usage

* Remove existing MCP connections

* Reconnect or update the MCP server credentials

And for MCP connections **they set up**, users with Full Access & Can Edit permissions can:

* Configure which tools are enabled or disabled and change tool execution settings (run automatically vs. always ask)

**Note:** Once an MCP connection is established, only the person who authenticates the MCP connection can configure and update tool settings - even if others have Full Access or Can Edit permissions to the agent. The agent uses that person’s credentials and permissions when accessing the external service.

## Can view and interact

Users with Can view and interact permissions to an agent can:

* Chat with the agent and use all connected tools, even if they do not have access to the tools outside of the Custom Agent.

* Trigger both read and write actions through the agent

* Approve or cancel write actions when confirmation is required

* View which MCP servers are connected (in the agent settings)

Users with Can view and interact permissions **cannot**:

* Add or remove MCP connections

* Change which tools are enabled

* Modify tool execution settings

* View the agent’s full activity log

**Note:** Write actions (like creating or updating items) require confirmation by default to prevent unintended changes. Users will see a prompt showing exactly what action the agent will take before it executes.

## Troubleshooting MCP connections for Custom Agents

**If tools are not appearing after connecting:**

* Refresh the agent settings page.

* Check that the MCP server successfully authenticated (look for a green checkmark or “Connected” status).

* Verify that the server is online and returning tool metadata.

* Try reconnecting the server, or disconnecting and re-adding it.

**If Agent runs fail with MCP errors:**

* Check the **Activity&#x20;**&#x74;ab for specific error messages.

* Verify that your connection is still valid (tokens may have expired).

* Make sure the connection is still enabled in the agent’s settings.

* Try reconnecting the MCP server to refresh credentials.

* Update your Agent’s instructions to mention the server or tool name you’re looking to use. For example: “use Linear MCP to retrieve metadata for this mock”.


## FAQs

### Can I share MCP connections across multiple agents?

No. Each Custom Agent requires its own connection to each MCP server. This keeps the security model simple and ensures each agent has appropriate access controls.


### Can I connect multiple accounts for the same service?

Not within a single agent. If you need to use multiple accounts, you'll need to create separate Custom Agents, each with its own connection.


### What if the MCP server is down or unreachable?

If the MCP server is unavailable:

* The agent will report an error in the run log

* Tools from that server will fail but won't crash the entire agent

* Check the `Activity` tab for specific error messages


### What's the difference between MCP servers and native Notion integrations?

**Native integrations&#x20;**(like Slack) are built directly into Notion and must be authorized by a workspace owner first. They offer read & write access plus trigger capabilities.

**MCP servers&#x20;**&#x66;ollow an open protocol and can be added by any workspace member. They have read & write access but no trigger capabilities.

Both work with Custom Agents, but MCP servers offer more flexibility for connecting custom tools and services.
