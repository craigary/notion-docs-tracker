---
title: "Manage your Enterprise workspace"
emoji: null
description: "This one's for administrators of workspaces on the Enterprise Plan! Find out more about your capabilities in Notion."
url: "https://www.notion.com/help/enterprise-admins"
key: "help:enterprise-admins"
coverImage: null
category: "Administer your workspace"
categoryKey: "category:enterprise-admin"
---

Workspaces on the Enterprise Plan have a few unique roles that allow for workspace management.

## Organization owner

If your organization has multiple workspaces in Notion, those workspaces can be brought together as one organization. Organization owners are able to view and manage all of their workspaces and members in one central place and apply settings across the board. Learn more about organization owners and [organization level controls](https://www.notion.com/help/organization-level-controls).

## Workspace owner

Workspace owners can manage everything in the workspace from settings and security to members and groups — and even delete an entire workspace.

Think of them as the primary administrator of a workspace with the most expansive permissions.

## Membership admin

Membership admins can add or remove members from workspaces, or add or remove members, other membership admins, and workspace owners from existing groups.

Membership admins can’t edit other workspace settings.

Note: Membership admins can add users to the workspace in a **member role only**. Membership admins cannot add workspace owners or membership admins to the workspace.

**Note:** Membership admins can only add other **members** to a workspace. They can't designate workspace owners or other membership admins.

## Admin roles

If your organization is on the Enterprise Plan, organization owners can hand off specific admin work by giving members admin roles. Each role unlocks one area of your organization settings, like membership or analytics. That way, you don't have to make someone a full organization owner just to manage one setting.

There are two kinds of admin roles. Ready-made roles each cover a whole area of settings. Custom roles allow you to choose the exact settings a person can manage.

### Ready-made admin roles

Notion offers a set of ready-made admin roles:

| **Role**             | **What it lets someone do**                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Compliance admin** | See the audit log, search content across the organization, and manage legal holds.                                                |
| **People admin**     | See and manage members, guests, groups, and teams across the organization.                                                        |
| **IT admin**         | Manage identity, security, and integrations across the organization.                                                              |
| **Analytics viewer** | See analytics about members, content, and search across the organization.                                                         |
| **Billing admin**    | See and manage your organization's Notion credits. This role only appears for organizations that work with the Notion sales team. |

### Create a custom admin role

**Note**: Custom admin roles are in beta and are subject to the beta terms of your agreement.

We recommend using a custom role when you want to give someone access to a specific set of features, or limit them to certain workspaces. Use a ready-made role when you want someone to manage a whole area and you want that role to stay up to date on its own.

**Note**: New Notion features aren’t added to custom roles by default. A custom role only includes the exact settings you chose when you built it. If Notion later adds a new feature to that area, the custom role won’t include it until you edit the role to add it.

Only organization owners can create custom roles. To create one:

1. Go to your organization settings.

2. Open `People` > `Manage admin roles`.

3. Select `Create new role`.

4. Give the role a name.

5. Choose what actions this role can complete. You can select whole areas, single actions inside an area, or a mix of both.

6. For some areas, you can also limit the role to certain workspaces. A dropdown will appear next to the action where you can select the workspace it should apply to.

7. Assign the team members who should have this role.

You can build a custom role with only the access levels you choose. For example, you can make a role that only covers one security setting, instead of the full IT admin role.

## Assign or remove an admin role

Only organization owners can assign or remove admin roles. To assign an admin role:

1. Go to your organization settings.

2. Open `People` > `Manage admin roles`.

3. Select a role to see what it covers and who has it.

4. Add or remove members from the role.

## Good to know

* Members can hold more than one admin role. The permissions from each role add together, on top of their existing workspace role. A narrower workspace-scoped role doesn’t override or subtract access granted by another role.

* Any member in your organization can be given an admin role. Guests and organization owners can't.

* Members with an admin role only see the parts of organization settings their roles cover. Everything else stays hidden.

* Some permissions can be limited to certain workspaces. This covers analytics, audit log, content search, and billing. Everything else applies across your whole organization.

* Admin roles don't change what someone can see or edit in pages or databases.

* Roles are assigned to members one at a time. You can't assign roles through SCIM or groups.

* Only organization owners can create, rotate, and delete the admin bots and tokens used with Notion's [admin APIs](https://developers.notion.com/reference/admin/intro).
