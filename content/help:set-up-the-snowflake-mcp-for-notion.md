---
title: "Set up the Snowflake MCP for Notion"
emoji: null
description: "Learn how to connect Snowflake to a Custom Agent or your Notion Agent so you can ask questions about your company's data in Notion."
url: "https://www.notion.com/help/set-up-the-snowflake-mcp-for-notion"
key: "help:set-up-the-snowflake-mcp-for-notion"
coverImage: null
category: "Notion AI"
categoryKey: "category:notion-ai"
---

**Some features are in alpha.**

Some features covered in this article, including workspace-configured MCP connections and per-user authorization in Custom Agents, are currently in alpha and may not be available in your workspace yet.

To request access, contact your Notion account team or [apply to our early access program for data agents →](https://www.notion.com/use-case/data-agents)

Your [Custom Agents](https://www.notion.com/help/custom-agents) and [Notion Agent](https://www.notion.com/help/notion-agent) can connect to Snowflake through an [MCP (Model Context Protocol)](https://www.notion.com/help/connect-mcp-servers-to-your-notion-agent) server that Snowflake runs. Once it's set up, you can ask your agent about your Snowflake warehouse data and get answers directly in Notion.

Setup happens in stages, and different people own each one:

* **A Snowflake admin** sets up the role, warehouse, and Snowflake-managed MCP server.

* **A Notion workspace owner or admin** configures the Snowflake MCP connection for the workspace.

* **Workspace members** can then connect to the Snowflake MCP from Custom Agents using their own Snowflake credentials, or connect Snowflake directly to their Notion Agent. Steps 1–10 of this article are the same for both paths. The paths split at Step 11, depending on which agent you want to connect.

## Availability

* The tools available can vary by your Snowflake cloud region.

* Snowflake's managed MCP server isn't available in mainland China or government regions.

## Before you start

* Your Notion workspace needs to be on a Business or Enterprise plan.

* Use Notion on web or desktop. This feature isn't available on mobile.

* Your company needs a Snowflake account.

* To build a [Custom Agent](https://www.notion.com/help/custom-agents), you need permission to create agents in your workspace.

**A shared setup doesn't give everyone the same data.**

The workspace stores connection details, including an OAuth client ID and secret. These details configure the connection; they aren't a shared login. Each person signs in to Snowflake with their own account. Whether they're using a Custom Agent or their own Notion Agent, the agent can access only the data that account can access.

## For Snowflake admins: get Snowflake ready

Before your team can connect Snowflake to Notion, a Snowflake admin needs to set up access. This is the most involved step, and you only need to do it once. Work with your Notion workspace admin: Notion provides a redirect URI, and Snowflake provides an OAuth client ID and secret.

You'll set up a role and warehouse, create the Snowflake-managed MCP server, grant it access to the resources it needs, configure the OAuth scope and security integration, and add a network policy if your organization requires one.

### Collect these values first

Fill in this worksheet with your Notion workspace admin before you start. Members can skip it and sign in with their own Snowflake accounts once setup is complete.

**Keep the OAuth client secret private.**

Don't add it to Slack, tickets, source control, or terminal history. Share it only through an approved secure channel.

| **Field**                    | **Value**                                                                                                     | **Owner**              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Snowflake account identifier | `<organization-account>`                                                                                      | Snowflake admin        |
| MCP database                 | `<database_name>`                                                                                             | Snowflake admin        |
| MCP schema                   | `<schema_name>`                                                                                               | Snowflake admin        |
| MCP server                   | `<mcp_server_name>`                                                                                           | Snowflake admin        |
| Warehouse                    | `<warehouse_name>`                                                                                            | Snowflake admin        |
| Access role                  | `<mcp_access_role>`                                                                                           | Snowflake admin        |
| Server URL                   | `https://<account_host>/api/v2/databases/<database_name>/schemas/<schema_name>/mcp-servers/<mcp_server_name>` | Snowflake admin        |
| Primary role scope           | `session:role:<mcp_access_role>`                                                                              | Snowflake admin        |
| Redirect URI                 | Copy the URI that Notion generates                                                                            | Notion workspace admin |
| OAuth client ID              | Retrieve from Snowflake                                                                                       | Snowflake admin        |
| OAuth client secret          | Transfer through an approved secret channel                                                                   | Snowflake admin        |

The account hostname uses hyphens, not underscores. Make sure each object name in the server URL matches the corresponding object name in Snowflake.

## Step 1: Choose an access model

Use a dedicated, least-privileged role and one approved warehouse whenever possible.

**Restricted role with no secondary roles (recommended).** This model is easier to understand and audit. Set `OAUTH_USE_SECONDARY_ROLES = NONE`, specify `ALLOWED_ROLES_LIST`, and use the Notion scope `session:role:<mcp_access_role>`.

**A user's default secondary roles (optional).** Use this model only when the server needs privileges inherited from each user's Snowflake `DEFAULT_SECONDARY_ROLES`. Set `OAUTH_USE_SECONDARY_ROLES = IMPLICIT`, omit `ALLOWED_ROLES_LIST`, and use an explicit primary-role scope. Snowflake doesn't allow `IMPLICIT` secondary roles with `ALLOWED_ROLES_LIST`, so omit the allowlist when you use this model.

### Step 2: Create or choose the role and warehouse

Use a dedicated, least-privileged role for the MCP server whenever possible.

Grant this role through your normal identity-management process. If Okta or SCIM manages Snowflake role membership, don't add users manually outside that process.

## Step 3: Create the Snowflake-managed MCP server

Create or choose a database and schema owned by the team that will run the server.

For governed business questions, you can expose a Cortex Agent as the tool members use. It keeps semantic views, verified queries, Search, and orchestration in one place. A Cortex Agent is optional. If you create one, use the specification below. If you replace an existing agent, make sure the replacement matches your approved specification.

**`execution_environment`****&#x20;must stay nested under the Analyst tool resource.**

If you put `warehouse` at the top level, the agent definition may be created, but the tool won't have an execution warehouse at runtime.

Other supported Snowflake MCP tool types include `CORTEX_ANALYST_MESSAGE`, `CORTEX_SEARCH_SERVICE_QUERY`, `GENERIC`, and `SYSTEM_EXECUTE_SQL`.

**If you need direct SQL access, put it on a separate MCP server with its own least-privileged role, and make sure that role is read-only.**

Adding `SYSTEM_EXECUTE_SQL` to the governed agent's server can let clients bypass its semantic views and verified queries.

Give each tool a clear name and description. Explain what data it covers, how detailed its results are, and when to use it. This helps the agent choose the right tool.

## Step 4: Grant access to each required resource

The `USAGE` privilege on an MCP server lets a role connect to the server and discover its tools. It doesn't give the role access to the warehouse, agent, semantic view, Search service, stored procedure, or underlying data. Grant the role access to each resource the server's tools need.

Grant access only to the additional resources each tool needs. For example, grant `SELECT` on an approved semantic view, `USAGE` on a Cortex Search service, or `USAGE` on a specific function or procedure. Don't grant the role to `PUBLIC` or add broad privileges for current or future objects.

Before setting up OAuth, check the MCP server and its grants:

## Step 5: Set the OAuth scope

Configure the MCP schema to advertise the exact role members should request:

Use an explicit role scope. Don't use `session:role:all`. Snowflake treats that value as the user's default primary role, not as access to every role, and policies for privileged roles may block it. An explicit role makes the requested access clear and easier to check.

## Step 6: Create the OAuth security integration

Before running this SQL, coordinate with your Notion workspace admin. Ask them to enter the Snowflake server URL in the workspace MCP setup form and turn on `Manually configure authentication` and `Use a workspace-shared OAuth client`. Notion generates a redirect URI. Copy it and send it to the Snowflake admin. After Snowflake creates the client ID and secret, the workspace admin can finish setting up the connection.

Use the redirect URI exactly as Notion provides it. Don't add a trailing slash or query parameters, and don't change the host.

Setting `IS_AGENTIC = TRUE` marks sessions created through this integration as agent sessions. Snowflake's `IS_AGENT_ACTIVATED()` function then returns `TRUE`, which lets Snowflake apply agent-specific auditing and governance. If you use the optional secondary-role model, set `OAUTH_USE_SECONDARY_ROLES = IMPLICIT` and omit `ALLOWED_ROLES_LIST`.

The refresh-token validity value `7776000` seconds equals 90 days. Before using it, confirm that it matches your organization’s reauthorization and token-rotation policies. For routine changes, avoid `CREATE OR REPLACE SECURITY INTEGRATION`. Replacing the integration can interrupt existing connections.

To check the integration without displaying its secret, run:

Confirm that the integration is turned on, the redirect URI matches exactly, the role is allowed and not blocked, refresh tokens and PKCE are on, and both the authorization and token endpoints use Snowflake's public account host.

## Step 7: Add a network policy if required

This step is only needed if your organization requires a network policy. Ask your security or network owner to approve Notion's current egress ranges.

The OAuth integration must allow both Notion paths:

1. the API path that handles OAuth callbacks and exchanges authorization codes

2. the workspace runtime path that validates the connection, runs tools, and refreshes tokens

These paths may use different Notion egress addresses. If you allow only the address used during the initial token exchange, sign-in may succeed, but validation or token refresh may fail. Use Notion's current, approved egress ranges. Don't add a one-time IP address from a browser or log to a production allowlist.

Attach this network policy to the OAuth integration, not to individual users. Don't change your account-wide policies for browser sign-in, VPN access, or user network access. If a network policy blocks a token request, Snowflake may return `invalid_client`. This error doesn't necessarily mean the client ID or secret is incorrect.

## Step 8: Retrieve and share the OAuth credentials

Run this in a secure Snowflake worksheet. The integration name is case-sensitive and is usually uppercase:

Share the client ID and its matching secret with your Notion workspace admin using an approved secure channel. Snowflake provides two valid secrets, so you can rotate them without downtime. Never paste either secret into documentation, chat, tickets, or source control.

## For Notion workspace admins: add Snowflake

**Workspace-configured MCP connections is a feature currently in alpha.**

If your workspace doesn't have access yet, reach out to your account team or apply to our data agents [early access program](https://www.notion.com/use-case/data-agents).

Once Snowflake is ready, a workspace owner or admin adds the server once for the workspace. Members can then find it without seeing the OAuth client secret, whether they’re connecting the Snowflake MCP to a Custom Agent or to their own Notion Agent.

## Step 9: Open workspace MCP settings

1. Go to `Settings` for the workspace.

2. Select `Connections` → `Workspace shared MCPs`.

3. Select `New workspace MCP`.

## Step 10: Set up the workspace preset

Fill in these fields, then select `Add MCP server`:

| **Field**                           | **What to enter**                                                                                                                                         |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                                | A clear, member-facing name, like `Company Snowflake Data Agent`.                                                                                         |
| Description                         | A short note on the data and how it’s meant to be used.                                                                                                   |
| Server URL                          | The exact public Snowflake MCP URL from the worksheet.                                                                                                    |
| Manually configure authentication   | Turn on. Notion discovers Snowflake’s OAuth details.                                                                                                      |
| Use a workspace-shared OAuth client | Turn on.                                                                                                                                                  |
| Redirect URI                        | Generated by Notion. Confirm it matches the URI you gave the Snowflake admin.                                                                             |
| Client ID                           | The client ID from the Snowflake OAuth integration.                                                                                                       |
| Client secret                       | The matching secret you received through the approved secret channel.                                                                                     |
| OAuth scopes                        | Pick the exact `session:role:<mcp_access_role>` scope. **All scopes** is fine only when Snowflake advertises that one approved scope and nothing broader. |

After you save, confirm that the new row appears under `Shared with this workspace` and that `Workspace OAuth client` shows `Configured`.

**What this setup does:**

* Helps members find the approved server.

* Stores the OAuth client secret once in Notion's encrypted connection storage.

* Makes sure members sign in with the server URL, client, and scopes you approved.

* Doesn't create a shared Snowflake session or bypass Snowflake's access controls.

* Doesn't connect every member automatically. Each person must sign in separately.

If you remove this setup, new members can no longer find the server. Existing connections may still appear, so coordinate this change with revoking Snowflake grants and removing existing connections.

## Step 11: Connect Snowflake to an agent

Once your admins have the Snowflake MCP connection ready, there are two ways to use it. If you’re setting this up for a team, start with 11A. If you just want to ask your own questions, skip to 11B. You can do both; they’re separate connections.

### Step 11A: Set up a managed Custom Agent for your team

A Custom Agent gives your team one place to ask about Snowflake data. You connect Snowflake once, add instructions about your metrics and tables, and share the agent with your team. Everyone who uses it will be required to sign in to Snowflake with their own credentials, so each person gets answers only based on the data they’re allowed to see.

**Per-person authentication in Custom Agents is currently in alpha.**

If your workspace doesn't have access yet, reach out to your account team or apply to our data agents early access program.

**Connect Snowflake to a Custom Agent**

1. Open your Custom Agent, or [create a new one](https://www.notion.com/help/custom-agents).

2. Go to `Settings` → `Tools & Access`.

3. Select `Add connection`, then choose the Snowflake server labeled `Workspace Managed`. Don't select `Custom MCP server` or enter the server URL manually.

4. Sign in to Snowflake in your browser. Your organization's usual Okta or SSO sign-in may appear.

5. Review and approve the requested Snowflake role.

6. Choose which tools the agent can use. Leave write-capable tools and `CORTEX_AGENT_RUN` set to ask for approval until you've tested them.

7. Select `Connect`, and confirm the connection shows as `Connected`.

**Give the agent context**

The connection gives the agent access to Snowflake. Your instructions tell it how your company uses that data. In the agent’s instructions, describe which tools to use for which kinds of questions, how your team defines key metrics, and which tables or semantic views to start from. A few verified example questions go a long way. For a ready-made starting point, see the Data Scout toolkit guide.

**Share the agent**

Share the agent with your team the same way you share any Custom Agent. The first time someone asks it a question that needs Snowflake, they'll be prompted to sign in with their own Snowflake account. They won't be asked for a client ID or secret.

**Per-person authentication applies when someone chats with the agent directly.**

Scheduled and triggered runs don't have a signed-in person, so they can't use anyone's Snowflake access yet. If you need Snowflake data on a schedule, talk to your Snowflake admin before setting that up.

### Step 11B: Connect Snowflake to your own Notion Agent

If you want to ask your own questions in your own chat, connect Snowflake to your Notion Agent. You sign in with your own Snowflake account, so your agent reaches only what you're allowed to see.

1. Go to `Settings` → `Notion AI`.

2. Under `MCP servers`, select `Add MCP server`.

3. Select the Snowflake server labeled `Workspace Managed`. Don't select `Custom MCP server` or enter the server URL manually.

4. Select `Connect`.

5. Sign in to Snowflake in your browser. Your organization's usual Okta or SSO sign-in may appear.

6. Review and approve the requested Snowflake role.

7. When your browser asks whether to open Notion, select `Open Notion`.

8. Confirm that the server status is `Connected`, not `Needs authentication`.

After you connect, Snowflake appears in `All sources` → `MCP servers` in chat.

**You shouldn't be asked for an OAuth client ID or secret on either path.**

If Notion asks for either, you may have selected the custom MCP option instead of the workspace-managed server, or your admin may not have turned on **Use a workspace-shared OAuth client**. Go back and select the **Workspace Managed** server instead.

## Step 12: Check that it works

1. Ask a harmless question with a known answer that should use Snowflake.

2. Confirm that the agent uses Snowflake and returns a result.

3. Confirm that you can't access data outside the role you were given.

If you set up a Custom Agent, also ask a teammate with a narrower Snowflake role to try it. They should see only their own data, not yours. That's the quickest way to confirm the agent is using each person's access rather than the builder's.

For a deeper check, ask your Snowflake admin to confirm your user, role, warehouse, and query history. A successful sign-in confirms your identity, but it doesn't confirm that every grant is correct.

## Use Snowflake in chat

Ask the agent a specific question about your Snowflake data. For example:

* "From Snowflake, what were our total signups last month?"

* "From Snowflake, what were our 10 highest-revenue accounts this quarter?"

With a Custom Agent, you can usually skip "from Snowflake" once its instructions make clear when to use it. With your Notion Agent, naming Snowflake helps the agent pick the right source.

Large requests can take longer or time out. If that happens, ask a narrower question or split the request into smaller questions.

## Staying connected

Most of the time, you stay connected without doing anything. Snowflake uses short-lived access tokens, and Notion refreshes them in the background. An expiring access token by itself won't disconnect you.

You'll need to sign in again if:

* Your refresh token expires or an admin revokes it

* An admin replaces the OAuth integration or client secret

* Your Snowflake role is removed

* An admin removes the workspace setup or your connection

* A network policy blocks the token refresh

With a Custom Agent, each person's sign-in is separate. If one person is asked to sign in again, it doesn't affect anyone else, and the person who built the agent doesn't need to do anything.

**If you're rotating the client secret:** Use Snowflake's two-secret rotation instead of replacing the integration. Keep both secrets valid long enough to update and test the workspace setup before retiring the old one.

`ALTER SECURITY INTEGRATION <oauth_integration_name>
REFRESH OAUTH_CLIENT_SECRET_2;`

## Troubleshooting

* **The Snowflake MCP connection isn't listed.** Your workspace admin may not have added it yet, or your workspace may limit custom servers. Ask your admin for help.

* **You're asked for a client ID or secret.** You probably picked the custom MCP option. Go back and choose the Snowflake server marked **Workspace Managed** instead.

* **You're asked to sign in again.** Your Snowflake session may have expired, or an admin may have updated the connection. Sign in to Snowflake again.

* **You opened a Custom Agent and it asked you to sign in to Snowflake.** That's expected the first time. Each person using a managed Custom Agent is required to sign in with their own Snowflake credentials.

* **A teammate gets different results from the same Custom Agent.** That's expected. The agent uses each person's Snowflake access, so people with different roles see different data.

* **The Custom Agent works in chat but not on a schedule.** Scheduled and triggered runs don't have a signed-in person, so they can't use Snowflake with per-person sign-in yet.

* **You signed in, but it won't connect or the tools fail.** Signing in proves who you are, but your access still depends on your Snowflake grants. Ask your Snowflake admin to confirm your role can reach the server, warehouse, agent, and data.

* **The agent can't find a table.** The agent can reach only the data your Snowflake account can reach. Check your Snowflake permissions, and include the table name in your question.

* **A request times out.** Ask a more specific question, or split your request into smaller questions.

### For admins: sign-in and connection errors

These errors usually come from Snowflake settings, not Notion. Share them with your Snowflake admin.

* **The server URL looks doubled, like&#x20;**`https://https%3A...` The address was pasted with an extra `https://` in front. Fix it so the URL starts with just one `https://`.

* **You see "This server does not support OAuth authentication."** The security integration isn’t set up for OAuth, or the server URL is wrong. Ask your Snowflake admin to check the OAuth security integration and the server URL.

* **You see&#x20;**`invalid_client`**&#x20;while signing in or refreshing.** The client ID or secret is wrong, or the secret was changed. Ask your admin for the current client ID and secret.

* **Sign-in works, then fails right away.** Your role may not reach the server, or a role or network rule is blocking the session. Ask your admin to check your grants and policies.

* **You see "The role ALL requested has been explicitly blocked."** The connection asked for every role at once (`session:role:all`), which is blocked. Use one exact role instead, like `session:role:analyst`, with your real role name.

* **You see a redirect error (error 390307).** The redirect URL saved in Snowflake does not match the one Notion uses. Ask your admin to set the redirect URL on the security integration to the exact Notion value.

* **You see error 390311 about an invalid code challenge.** This is a PKCE mismatch. Ask your admin to confirm `OAUTH_ENFORCE_PKCE` is set correctly on the security integration.

* **You are connected, but no tools show up.** Your role may be missing `USAGE` on the MCP server. Ask your admin to confirm the grant, then run `DESCRIBE MCP SERVER` to check the setup.

* **You can reach more or less data than you expected.** Secondary roles change what your session can see. Check which roles are active in your session with your admin.

* **It worked before, and now everyone fails after a secret change.** The client secret was rotated, so the saved connection is out of date. Ask your admin for the new secret, then connect again.

* **It worked before, and now it fails just for you.** A role, grant, or policy may have changed, or your session expired. Sign in again, then ask your admin to confirm your access did not change.

* **Your account identifier is rejected.** Use the `organization-account` format with a hyphen, like `myorg-myaccount`, not dots.

* **A PrivateLink account can't connect.** PrivateLink accounts need extra network setup. Ask your admin whether PrivateLink allows the Notion connection.

* **Snowflake is not available in scheduled or triggered runs.** Those runs have no signed-in person, so they cannot use per-person sign-in yet. Run your request in chat instead.

* **You see&#x20;**`oauth_security_error`**&#x20;after signing in through the browser.** An account-level network policy may be blocking the request. Your admin can confirm by running:

- **Sign-in seems to work but you get a role error, even with the right scope.** Your default role may be blocked, for example `ACCOUNTADMIN` or a role in `BLOCKED_ROLES_LIST`. Your admin can check and fix it:

## Useful read-only Snowflake checks

These read-only commands help your admin confirm the setup without changing anything. Run them in Snowflake.

**ACCOUNT\_USAGE views can lag, so a missing row is not proof that a request never happened.**

Don't rotate secrets, weaken policies, or broaden grants until you know which layer is failing.

## Snowflake references

Use these Snowflake guides to complete the setup:

* [Snowflake-managed MCP server](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp)

* [Create a Snowflake OAuth security integration](https://docs.snowflake.com/en/sql-reference/sql/create-security-integration-oauth-snowflake)

* [Snowflake OAuth for custom clients](https://docs.snowflake.com/en/user-guide/oauth-custom)

* [Snowflake OAuth overview](https://docs.snowflake.com/en/user-guide/oauth-snowflake-overview)

* [Snowflake account identifiers](https://docs.snowflake.com/en/user-guide/admin-account-identifier)

## Related articles

* [Custom Agents](https://www.notion.com/help/custom-agents)

* [MCP connections for Custom Agents](https://www.notion.com/help/mcp-connections-for-custom-agents)

* [Connect MCP servers to your Notion Agent](https://www.notion.com/help/connect-mcp-servers-to-your-notion-agent)

* [Security best practices for Agent connections](https://www.notion.com/help/security-best-practices-for-agent-connections)


## FAQs

### Should I set up a Custom Agent or connect Snowflake to my Notion Agent?

If you're setting up the Snowflake MCP connection for your team, build a Custom Agent. It gives everyone the same instructions, the same definitions of your metrics, and one place to go with questions, while each person still signs in with their own Snowflake credentials. If you just want to ask your own questions, connect the Snowflake MCP to your Notion Agent. You can do both.


### Does connecting Snowflake to my Notion Agent also connect it to our Custom Agent?

No. Each is a separate connection, and each Custom Agent needs its own. The Snowflake setup from Steps 1–10 is shared; the sign-in isn't.


### Does everyone on the team see the same data?

No. Each person signs in to Snowflake with their own credentials, and the agent can only reach what that account can reach. That's true for a Custom Agent too.


### Do I have to share my Snowflake password with my team?

No. Nobody shares credentials. The workspace stores the OAuth client details once, and each person signs in to Snowflake themselves.
