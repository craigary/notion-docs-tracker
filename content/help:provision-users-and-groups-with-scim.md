---
title: Provision users & groups with SCIM
emoji: 🔑
description: You can provision and manage users and groups in your Notion workspace with the System for Cross-domain Identity Management (SCIM) API standard 🔑
url: https://www.notion.com/help/provision-users-and-groups-with-scim
key: help:provision-users-and-groups-with-scim
coverImage: https://images.ctfassets.net/spoqsaf9291f/2wnlyaUW3ASmq67cccMxks/9bffa290da4ed3a6065d9232dcd86c50/Provision_users___groups_with_SCIM__-_hero.png
category: Workspace administration
---

**Note:** This feature is only available for users on the Enterprise Plan.

## What you can do with Notion's SCIM API

Notion’s SCIM API allows you to do the following:

### User provisioning and management

* Create and remove members in your workspace.

* Update a member's profile information.

* Retrieve the members in your workspace.

* Find members by email or name.

### Group provisioning and management

* Create and remove groups in your workspace.

* Add and remove members in a group.

* Retrieve the groups in your workspace.

* Find groups by name.

**Note:** At this time, you can’t manage workspace **guests** using Notion’s SCIM API.

## How to set up provisioning with SCIM

We currently support Okta, OneLogin, Rippling, and custom SCIM applications. If you use another Identity Provider, please let us know. See instructions for Identity Provider setup for specific apps [here →](https://www.notion.com/help/set-up-identity-provider-for-scim)

### Prerequisites for SCIM with Notion

To use SCIM with Notion:

* Your workspace must be on an Enterprise Plan.

* Your Identity Provider (IdP) must support the SAML 2.0 protocol. See instructions for Identity Provider setup for specific apps [here →](https://www.notion.com/help/set-up-identity-provider-for-scim)

* A workspace owner must configure SCIM for the Notion workspace.

* You must have verified ownership over an email domain if you want to use SCIM to modify a user's name or email address. [Learn more about domain verification →](https://www.notion.com/help/domain-management#verify-a-domain-for-your-workspace)

### Generate your SCIM API token

Only Enterprise Plan [organization owners](https://www.notion.com/help/organization-level-controls#who-can-apply-organization-level-controls) can generate and view SCIM API tokens. To create a SCIM API token:

1. Open the workspace switcher and select `Manage organization`. You may need to `Set up organization` first if you haven’t already. Learn more [here →](https://www.notion.com/help/organization-level-controls)

2. In the `General` tab of your organization level controls, select `>` next to `SCIM provisioning`.

**Note:&#x20;**&#x46;or each workspace you want to manage via SCIM, you must generate a separate SCIM API token.

### Revoke tokens

When a workspace owner leaves the workspace or their role is changed, their token will be revoked. When this happens, an automated message will be sent to the remaining workspace owners to notify them to replace the revoked token.

In addition, active tokens can be revoked by any of the workspace owners in the workspace. To revoke a token, click the `🗑` alongside the respective token.

### Replace existing tokens

If a token is revoked, you will need to replace it in any existing integrations.

Any SCIM integration and user provisioning relying on the revoked token will be disabled until it is replaced by an active token.

**Note:** To avoid breaking existing integrations, make sure to replace any tokens associated with an admin before de-provisioning them.

### Suppress invite emails

To control whether users will receive invitations to workspaces and groups via email when provisioned by SCIM, Enterprise Plan organization owners can:

1. Open the workspace switcher and select `Manage organization`.

2. In the `General` tab, toggle on `Suppress invite emails from SCIM provisioning` if you don’t want to send emails to users.

### Provision restricted members through SCIM

To provision a [restricted member](https://www.notion.com/help/whos-who-in-a-workspace#restricted-members) through SCIM, you must set the SCIM ‘role’ attribute to ‘restricted\_member’:

`"urn:ietf:params:scim:schemas:extension:notion:2.0:User": { role: string // "owner" | "membership_admin" | "member" | "restricted_member" }`

To transition a page guest to a restricted member through SCIM, you must use `POST /scim/v2/Users`.

## Service Provider Configuration

* `GET /ServiceProviderConfig`

  * `GET <https://api.notion.com/scim/v2/ServiceProviderConfig>`

  * Retrieve a description of the SCIM specification features available.

  * Defined in [Section 5 of the SCIM Protocol Specification](https://tools.ietf.org/html/rfc7643#section-5).

* `GET /ResourceTypes`

  * `GET <https://api.notion.com/scim/v2/ResourceTypes>`

  * Retrieve a list of the SCIM resource types available.

  * Defined in [Section 6 of the SCIM Protocol Specification](https://tools.ietf.org/html/rfc7643#section-6).

## Users

The table below outlines the mapping between SCIM user attributes and Notion user profile fields. Organization owners choose which attributes to send to Notion and may update such attributes at any time. Notion processes the attributes you send through the Notion SCIM API to improve the experience of provisioning and managing users and groups.

| **SCIM Attribute**  | **Notion User Profile Field**                                                                                                             | **External Namespace**                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| userName            | Email (This field is required)                                                                                                            | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| name.formatted      | Name (The recommended name field. Since Notion has a single name field, you can create an expression in Okta to combine any name fields.) | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| name.familyName     | Name (Can use in combination with name.givenName as an alternative to name.formatted.)                                                    | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| name.givenName      | Name (Can use in combination with name.familyName as an alternative to name.formatted.)                                                   | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| photos              | Profile Photo                                                                                                                             | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| title               | Title                                                                                                                                     | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| phoneNumbers        | Phone Number                                                                                                                              | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| addresses           | Address                                                                                                                                   | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| roles               | Role                                                                                                                                      | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| locale              | Locale                                                                                                                                    | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| preferredLanguage   | Preferred Language                                                                                                                        | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| userType            | User Type                                                                                                                                 | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| emails              | Email                                                                                                                                     | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| active              | Active                                                                                                                                    | `urn:ietf:params:scim:schemas:core:2.0:User`                     |
| manager.value       | Manager (This should be an email address)                                                                                                 | `urn:ietf:params:scim:schemas:extension:``enterprise``:2.0:User` |
| manager.displayName | Manager                                                                                                                                   | `urn:ietf:params:scim:schemas:extension:``enterprise``:2.0:User` |
| division            | Division                                                                                                                                  | `urn:ietf:params:scim:schemas:extension:``enterprise``:2.0:User` |
| department          | Department                                                                                                                                | `urn:ietf:params:scim:schemas:extension:``enterprise``:2.0:User` |
| costCenter          | Cost Center                                                                                                                               | `urn:ietf:params:scim:schemas:extension:``enterprise``:2.0:User` |
| organization        | Organization                                                                                                                              | `urn:ietf:params:scim:schemas:extension:``enterprise``:2.0:User` |
| employeeNumber      | Employee Number                                                                                                                           | `urn:ietf:params:scim:schemas:extension:``enterprise``:2.0:User` |
| role                | Notion workspace role ("owner" \| "membership\_admin" \| "member")                                                                        | `urn:ietf:params:scim:schemas:extension:``notion``:2.0:User`     |

* `GET /Users`

  * `GET <https://api.notion.com/scim/v2/Users>`

  * Retrieve a paginated list of workspace members.

  * You can paginate using the `startIndex` and `count` parameters. Note that `startIndex` is 1-indexed and count has a maximum of 100.

  * You can filter the results with the `filter` parameter. Valid attributes to filter by are `email`, `given_name`, and `family_name`, e.g. `GET <https://api.notion.com/scim/v2/Users?startIndex=1&count=50&filter=email> eq email protected`

  * Note that `given_name` and `family_name` are case sensitive. Email is converted to lowercase.

* `GET /Users/<id>`

  * `GET <https://api.notion.com/scim/v2/Users/><id>`

  * Retrieve a specific workspace member by its Notion user ID. This will be an UUID with 32 characters in the following format: `00000000-0000-0000-0000-000000000000`.

  * Note that `meta.created` and `meta.lastModified` do not reflect meaningful timestamp values.

* `POST /Users`

  * `POST <https://api.notion.com/scim/v2/Users>`

  * If the user you are adding already has a Notion user account with the same email, then they will be added to your workspace.

  * If the user does not exist, calling this will create a new Notion user and then add that user to your workspace. They will be mapped to the Notion user profile that is created.

  * The SCIM API will read the profile photo property on user creation, but not on future updates.

* `PATCH /Users/<id>`

  * `PATCH <https://api.notion.com/scim/v2/Users/><id>`

  * Update through a series of operations, and returns the updated user record.

**Note:&#x20;**&#x59;ou can only update a member's profile information if you have verified ownership of the user's email domain (this is typically the same as the email domains you have configured for SAML Single Sign-On with Notion). <!-- -->Verify your domain using the instructions [here](https://www.notion.com/help/domain-management#verify-a-domain-for-your-workspace) →

* `PUT /Users/<id>`

  * `PUT <https://api.notion.com/scim/v2/Users/><id>`

  * Update, and returns the updated user record.

* `DELETE /Users/<id>`

  * `DELETE <https://api.notion.com/scim/v2/Users/><id>`

  * Remove a user from your workspace. The user is logged out of all active sessions.

    * The user account cannot be deleted through SCIM. Account deletion must be done manually.

    * Removing a user from your workspace can also be achieved by setting the `active` user attribute to `false` by sending a `PATCH /Users/<id>` or a `PUT /Users/<id>` request.

    * The workspace owner that created the SCIM bot token cannot be removed via the API. When a workspace owner is removed via the SCIM API, any tokens they created will be revoked and any integrations using that bot will be broken.

**Note:** You can assign workspace levels to `Users` using the `role` attribute, which is an extension of the existing User schema. The format is:

`"urn:ietf:params:scim:schemas:extension:notion:2.0:User": { role: string // "owner" | "membership_admin" | "member" }`

## Groups

* `GET /Groups`

  * `GET <https://api.notion.com/scim/v2/Groups>`

  * Retrieve a paginated list of workspace groups.

  * You can paginate using the `startIndex` and `count` parameters. Note that `startIndex` is 1-indexed and count has a maximum of 100, e.g. `GET <https://api.notion.com/scim/v2/Groups?startIndex=1&count=5>`

    * If pagination is not used, a maximum of 100 workspace groups will be returned in a request.

  * You can filter the results with the `filter` parameter. Groups can be filtered by their `displayName` attribute, e.g. `GET <https://api.notion.com/scim/v2/Groups?filter=displayName> eq Designers`

* `GET /Groups/<id>`

  * `GET <https://api.notion.com/scim/v2/Groups/><id>`

  * Retrieve a specific workspace group by its Notion group ID. This will be an UUID with 32 characters in the following format: `00000000-0000-0000-0000-000000000000`.

* `POST /Groups`

  * `POST <https://api.notion.com/scim/v2/Groups>`

  * Create a new workspace group.

* `PATCH /Groups/<id>`

  * `PATCH <https://api.notion.com/scim/v2/Groups/><id>`

  * Update a workspace group through a series of operations.

* `PUT /Groups/<id>`

  * `PUT <https://api.notion.com/scim/v2/Groups/><id>`

  * Update a workspace group.

* `DELETE /Groups/<id>`

  * `DELETE <https://api.notion.com/scim/v2/Groups/><id>`

  * Delete a workspace group.

**Note:&#x20;**&#x47;roup deletion will be forbidden if it would result in no one having full access to one or more pages.

**Learn more**

* [Set up Identity Provider (IdP) for SCIM](https://www.notion.com/help/set-up-identity-provider-for-scim)
