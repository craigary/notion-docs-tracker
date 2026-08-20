---
title: "Set up enterprise-managed connections for Notion MCP"
emoji: null
description: null
url: "https://www.notion.com/help/set-up-enterprise-managed-connections-for-notion-mcp"
key: "help:set-up-enterprise-managed-connections-for-notion-mcp"
coverImage: null
category: "Notion AI"
categoryKey: "category:notion-ai"
---

Enterprise-managed connections let your IT team manage how third-party AI tools like Claude connect to Notion, all in one place. Instead of each person approving the connection themselves, your Okta admin sets it up once for everyone. Notion still checks what each person can access and your workspace's admin settings on every request. The connection is built on Okta Cross App Access (XAA).

## What to know before you start

* This is available for workspaces on the Enterprise plan.

* Your company must use Okta to sign in to Notion, and your Notion [SAML single sign-on (SSO)](https://www.notion.com/help/saml-sso-configuration) needs to run through that same Okta account.

* The AI tool you’re connecting needs to support enterprise-managed connections.

  * Enterprise-managed connections only work with apps that support Okta Cross App Access (XAA). If an app doesn’t support this, each person will still need to connect Notion the usual way and approve access themselves. This is currently available for Claude on Enterprise plans when you use organization connectors.

* You’ll need an Okta admin, a Notion organization owner (or workspace owner if you’re not using organizations), and a Claude admin to complete setup.

## How it works

Notion MCP normally asks each person to approve the connection between their app and their Notion account. With enterprise-managed connections, that approval step goes away for your team:

1. A member signs in to Claude with your company's Okta SSO.

2. When Claude needs Notion, Okta checks the rules your admin set and confirms the connection is allowed.

3. Notion checks that the request really came from Okta, matches the member to their Notion account, and gives Claude the same access to Notion that the member already has. Nothing more.

Members won't see a Notion approval screen. Each connection stays active for up to eight hours at a time, and Notion checks your workspace's settings on every request. If you remove someone's access in Okta, they won't be able to start a new connection, but a connection that's already active can keep working until it expires. To stop someone's access right away, disconnect them in Notion.

## Set up enterprise-managed connections

Setting up an enterprise-managed connection has three steps:

* Connect the apps in Okta

* Turn it on in Notion

* Turn on the connector in Claude

## Connect the apps in Okta

An Okta admin can follow the steps below to connect Claude and Notion MCP:

1. In the Okta Admin Console, make sure SSO is turned on for both your Claude and Notion apps, and that Cross App Access is available.

2. Add the connection between Claude and Notion MCP, and assign the users or groups it should cover.

3. Note your Okta org's issuer URL (for example `https://acme.okta.com`). You'll enter it in Notion next.

For details, see [Configure Cross App Access](https://help.okta.com/oie/en-us/content/topics/apps/apps-cross-app-access.htm) in Okta's help center.

## Turn it on in Notion

A Notion organization owner (or workspace owner, if you're not using organizations) can follow the steps below to connect your Okta account to your Notion workspace:

1. Go to `Settings` → `Identity` → `Enterprise-managed connections`. If SAML is managed by a Notion organization, open the linked organization console.

2. Turn on enterprise-managed connections and confirm your Okta issuer URL. It must match the Okta address that runs your Notion SAML SSO.

3. Choose the one workspace this connection manages, then select `Turn on`.

## Turn on the connector in Claude

A Claude admin can follow the steps below to add Notion as an organization connector:

1. In Claude's admin settings, go to `Connectors` and add the Notion connector (`https://mcp.notion.com/mcp`).

2. Turn on `Enterprise managed authentication` for the connector.

3. Run the connection test. When all checks pass, members can use Notion in Claude right away.

## Manage & monitor access

* **Turn it off any time.** Turn off the connection in `Enterprise-managed connections`. Notion blocks any new requests and disconnects members who were connected this way.

* **Remove one person.** Remove them from the connection in Okta so they can't reconnect. To end an active connection right away, disconnect the member from the connection's member list in Notion.

* **See who's connected.&#x20;**&#x4D;anaged connections appear in your workspace's connected AI apps list, labeled as managed by your identity provider.

* **Audit everything.&#x20;**&#x45;ach member's first managed connection is recorded in the [workspace audit log](https://www.notion.com/help/audit-log) and sent to your security monitoring tools if you've set up the audit log event stream.


## FAQs