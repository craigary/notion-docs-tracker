---
title: "Create & manage groups"
emoji: "💼"
description: "Groups in Notion allow you to bring people together and collaborate more easily. Learn about group owners, plus how to create and manage groups 💼"
url: "https://www.notion.com/help/create-and-manage-groups"
key: "help:create-and-manage-groups"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/7yeAygbOMGjCu58qywlkiL/bb56d1c34680c77456692dc182356a03/Create_and_Manage_Groups.png"
category: "Share & collaborate"
categoryKey: "category:sharing-and-collaboration"
---

You can set varying permissions for different groups and teams without having to divide your people into different workspaces. Create groups inside one workspace and grant them different levels of access page by page.

## Create and edit groups

**Note:** Only workspace members can be assigned to groups. Groups can't contain workspace guests.

Workspace owners and membership admins can create and edit groups. To do this:

1. Go to `Settings` → `People` or `Members` (depending on your plan) → `Groups`.

2. Select `Create a group` and enter a name for your group. To set an icon for the group, just click the emoji icon that appears on hover.

3. Toggle open your new group and select `Add members`.

4. Add as many members as you want to any group.

5. You can also click `Remove` to the right of any group member.

6. Select `•••` next to a group to `Rename` it, `Create teamspace from group`, or `Delete` it.

7. You can always search someone's name or email to see which group they're in.

![HC: Manage groups](https://images.ctfassets.net/spoqsaf9291f/5SZvcOROmtVWj6Ps0iFUhj/528181945e993c0ab27a30583252ac67/Group_70__1_.png)

## Add or manage group owners

If your workspace allows members to create groups, any member can select `Create a group`. The person who creates the group will become a group owner by default.

Workspace owners and membership admin can assign or manage a group owner.

To add or manage group owners:

1. Go to `Settings` → `Members`.

2. Select the three-dot menu next to a member.

3. Select `Make group owner` or `Remove from group`.

Group owners can manage a specific group without needing to be a workspace owner or membership admin. Depending on your workspace settings, group owners can:

* Add or remove members from the group.

* Delete the group.

* Rename the group.

* Assign other group owners, and change owners to members.

* Create teamspaces from a group, or remove teamspace associations from a group.

Workspace owners and membership admins can assign one or more group owners to a group. Group owners can’t manage other groups unless they’re also a workspace owner or membership admin.

## Synced (SCIM-managed) groups

If your organization provisions groups through SCIM, some groups may be labeled `Synced`. These groups are managed by your identity provider (like Okta or Microsoft Entra ID).

If you try to rename a synced group or change its membership in Notion, you’ll see a warning. Changes made in your identity provider can overwrite edits made in Notion.

To learn more about SCIM provisioning, see [this article](https://www.notion.com/help/provision-users-and-groups-with-scim).

## Share a page with groups

For any page, choose which groups can read, comment, edit, and share it. To share a page with a group:

1. Click `Share`, then `Invite`. You'll see all groups at the bottom of the pop-up.

2. Pick a group, then choose what type of access you'd like to give that group from the dropdown:

   * **Full access:** They can edit and share the page.

   * **Can edit:** They can edit the page's content, but they can't share the page. (This is only available on paid plans.)

   * **Can comment:** They can only read and comment, not edit or share.

   * **Can view:** They can only read the content, and can't share it.

   * **Remove:** Revokes their access to the page.

3. Once a group has been added, you'll see it in the `Share` menu, and you can adjust their access level in the drop-down.

   * You can give multiple groups access at any level on the same page.

   * Permissions on any page also apply to all of their sub-pages.

### Share a teamspace with groups

Teamspaces are a dedicated area for every team within your organization or company, and can be customized on an individual basis. [Learn more about teamspaces →](https://www.notion.com/help/intro-to-teamspaces)

To share a teamspace with groups in your workspace:

1. Hover over the name of the teamspace in your sidebar.

2. Click the `•••` button, then `Teamspace settings`.

3. From here, you'll be able to search and add groups to the teamspace.

## Mention groups in pages and person properties

* [Mention](https://www.notion.com/help/comments-mentions-and-reminders#mentions) a user group in a page by typing `@ `followed by the name of the group.

* If you have a [person property](https://www.notion.com/help/database-properties) in a database, you can mention a group in that property. You can even change the property settings to notify groups when they’re mentioned in a property — learn more [here →](https://www.notion.com/help/updates-and-notifications#notifications)


## FAQs

### How can groups be used instead of multiple separate workspaces?

We've seen people create multiple workspaces instead of groups to set granular permissions. For instance, they create separate workspaces for Design, Marketing, and their executive team so these groups can't access, edit, or get distracted by each other's work. There's a quick workaround for this using groups:

* Disable `Workspace access`. That way pages won't show for people and groups who aren't specifically granted access.

* On every page, grant different levels of access per group. Those access levels will hold true for all the sub-pages on that page.

* So, for example, you could have a section of your workspace just for the engineering team. Create a group of all your engineers, then on the top-level page for that team, turn on `Full access` for only that group. Nest pages inside that page, and only the engineering team can access them, too!


### Who can manage groups in my workspace?

Workspace owners and membership admins can create and manage all groups.

Group owners can manage membership, group owners and rename the groups they own.


### Can I restrict who can create groups?

On Enterprise plans, workspace owners can restrict group creation to workspace owners and membership admins only.
