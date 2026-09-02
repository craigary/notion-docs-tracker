---
title: "Admin APIs for Enterprise organizations"
emoji: null
description: "Run admin work with code instead of configuring settings."
url: "https://www.notion.com/help/admin-apis-for-enterprise-organizations"
key: "help:admin-apis-for-enterprise-organizations"
coverImage: null
category: "Administer your workspace"
categoryKey: "category:enterprise-admin"
---

**Note**: This feature is only available on the Enterprise Plan, and only organization owners can set it up.

Notion's admin APIs let your organization handle admin work with code. This includes common tasks like starting a workspace export, creating and releasing legal holds, logging managed users out of Notion, and more.

You can set this up in your organization settings. You create an admin bot for your organization, then give it a token with only the access it needs.

## Who can use admin APIs

* Your organization needs to be on the Enterprise Plan.

* You must be an organization owner.

* This is built for admin, IT, security, and compliance teams. Members and guests won't notice any change in their day-to-day work.

## Set up admin connection and token

1. Open the workspace switcher and select `Manage organization`.

2. Go to `General`, then open `Manage organization-level admin API tokens`.

3. Select `Create connection`.

4. Give the connection a name that your team will recognize, like “Compliance automation,” and pick only the access it needs. If a connection only runs exports, don't give it legal hold access.

5. Select `Create token`, then copy the token and save it in the secrets manager your team already uses.

You'll see the new connection listed in your organization settings, along with who created it and when. You can come back and copy the token again anytime from the connection's menu.

**Tip**: Give each automation its own connection and token. If one token has to be turned off, the rest of your automations keep running.

## Keep your tokens safe

* Pick the smallest set of access that still gets the job done.

* Rotate tokens on a schedule your security team sets.

* Delete a token right away if it's shared by mistake or the person who owned it changes roles. Any script using that token stops working immediately.

* You can't limit an admin token to specific IP addresses or networks. Use the controls you already have, like storing tokens in a secrets manager and running calls from systems you trust.

## See admin API activity in your audit log

Actions taken with an admin token show up in your [audit log](https://www.notion.com/help/audit-log). The admin bot is listed as the actor, so you can tell automated work apart from human work.

## Troubleshooting

* **The call is rejected.** Check that your organization is on the Enterprise Plan.

* **You get a permission error.** Check that the token has access to the action you're calling. A token scoped to exports can't create a legal hold.

* **A logout call does nothing.** Check that the account is a [managed user](https://www.notion.com/help/managed-users-dashboard). Accounts outside your verified domains aren't covered.

## Where to find endpoint details

For request formats, parameters, and code samples, see the [admin API reference](https://developers.notion.com/reference/admin/intro) in the developer docs.


## FAQs

### Is this the same as a Notion API connection token?

No. A [connection token](https://www.notion.com/help/create-integrations-with-the-notion-api) works inside one workspace and reads or writes page content. An admin token belongs to your organization and only handles admin actions like exports, legal holds, and logging users out.


### Does this replace organization settings?

No. Everything you can do with the admin API can still be done by hand in organization settings. The API is there when you want to repeat the same work at scale.


### Can I limit a token to certain IP addresses?

Not right now. [IP address restrictions](https://www.notion.com/help/ip-address-restrictions) apply to people signing in, not to admin tokens.
