---
title: Who’s who in a workspace
emoji: 👥
description: Learn about the different kinds of people in a workspace 👥
url: https://www.notion.com/help/whos-who-in-a-workspace
key: help:whos-who-in-a-workspace
coverImage: https://images.ctfassets.net/spoqsaf9291f/3oRXIXEWN14ymuR87cirAN/241c9ea1fd897d13b916ff469d33c672/Who-s_Who_in_a_Workspace__1_.png
category: Sharing & collaboration
---

A Notion workspace can have several types of users or roles:

* Members

* (Enterprise Plan only) Restricted members

* Guests

* Workspace owners

* (Enterprise Plan only) Membership admins

* (Enterprise Plan only) Organization owners

Read on to learn more about each type of user.

## Members

Members are individuals **in your company or organization**. These could be colleagues at the same organization or people who read, edit, and comment on a lot of the same pages in a workspace.

Members can be added to workspaces on the Free Plan at no charge. Workspaces with more than one member will be able to use up to 1,000 blocks in that workspace. If you want unlimited block usage on the Free Plan, you’ll need to make sure your workspace only contains one person. To do this, you can avoid adding new members, remove existing members, and add any collaborators as [guests](https://www.notion.com/help/add-members-admins-guests-and-groups). You can learn more about this [here →](https://www.notion.com/help/understanding-block-usage)

On paid plans, you’ll pay for each member that’s added to the workspace.

## Restricted members

**Note:** This feature is only available to users on the Enterprise Plan.

Restricted members share many capabilities with regular workspace members — they can create private pages, use Notion AI (<!-- -->respecting restricted members’ permissions),<!-- --> log in with SSO, be added to permission groups, and more. **They also affect your billing in the same way as adding a workspace member.**

There are a few ways that restricted members are different from regular workspace members, including:

* They need to be added to specific teamspaces and pages to be able to access them.

* They can’t create teamspaces.

* They can only share pages with members who have been added to the same teamspaces and pages as them.

* They can only @-mention members with whom they share access to a page or teamspace.

You can find controls related to restricted members in `Settings` — learn more [here →](https://www.notion.com/help/workspace-settings#workspace-security)

### Restricted members in teamspaces

The teamspace member role encapsulates both members and restricted members. This means that a restricted member can’t have a lower level of access than a regular member.

If you want to assign a lower level of access to restricted members in a teamspace, you’ll need to use permission groups or individual permissions. To do this:

1. Create a new IDP or permission group that includes all **workspace members** that should be part of the teamspace. For example, you could call it “Teamspace A members”.

2. Change the teamspace member’s access level to the level that you want to assign to **restricted members**.

   ![hc: change regular member access level in a teamspace](https://images.ctfassets.net/spoqsaf9291f/43tutzDbshTboBD6nNMFwM/90e9f1c61ff1561689c7c85ab9786abc/Image_from_Notion.png)

3. Add the permission group (for example, “Teamspace A members”) to the teamspace, and give it the access level you’d like.

   ![hc: assign permission group to restricted members in a teamspace](https://images.ctfassets.net/spoqsaf9291f/5Rcztor4H3dhGIyzifSr7B/c60cd83780268e8cf588eb30096d6988/Image_from_Notion__1_.png)

## Guests

Guests are individuals **external to your company or organization** who you invite into your workspace on a page-by-page basis. For example, guests could be:

* People who have a different organization email domain.

* Contractors or interns who are working with you temporarily.

* Clients who you want to provide feedback on your work.

* Friends, family, or mentors that you want to have contribute to or review your work.

### Guest limits

Unlike members, **guests are free to invite to your workspace as long as you stay within** [your plan’s guest limit](https://www.notion.com/pricing). If your workspace is above this limit, any new users that you share content with will be automatically added as members and not guests if they have the same organization email domain.

To ensure you’re adding users as guests and not members, you’ll need to remove existing guests so you’re below your limit, upgrade to a plan with a higher limit, or work with our sales team (for eligible customers).

### Guests vs. members

Guests share many capabilities with members, except:

* They can't be given workspace-wide access. They must be invited to individual pages in order to view them and their sub-pages.

* They can't be added to groups of members.

* They can't adjust workspace settings or billing information.

* They can't add new members to your workspace.

* They can't add new integrations to your workspace.

Once a guest has requested to join your workspace as a member, they’ll be able to create private pages in your workspace.

## Workspace owners

Workspace owners are admins who can manage workspace settings, delete a workspace, and manage other workspace owners, admins, members, and guests. Every workspace has at least one owner. Members can be turned into workspace owners.

## Membership admins

Membership admin is a role that exists only in the Enterprise Plan. Membership admins can add or remove members from workspaces or groups, but they don’t have the ability to change workspace settings. Members in an Enterprise Plan can be turned into membership admins.

## Organization owners

If your organization has multiple workspaces in Notion, those workspaces can be brought together as one organization. Organization owners are able to view and manage all of their workspaces and members in one central place and apply settings across the board. Learn more about organization owners and organization level controls [here →](https://www.notion.com/help/organization-level-controls)

## Change a user's role

To change a member or guest’s role in a workspace, a workspace owner or a membership admin can:

1. Go to `Settings` → `People` or `Members` (depending on the plan).

2. Go to the `Members` tab or the `Guests` tab.

3. Open the dropdown next to the member’s role or the guest’s pages.

4. Select `Workspace owner`, `Membership admin`, or `Member`. If you’re turning a guest into a member, select `Convert to member`.

If you’re looking to make someone an organization owner, you need to be an organization owner yourself. You’ll need to do the following:

1. Open your workspace switcher and select `Manage organization`.

2. In your organization settings, select the `People` tab → `Manage members`.

3. Select `•••` next to a member’s name → `Make organization owner`.

## Remove a user

To remove a member or guest from a workspace, a workspace owner or a membership admin can:

1. Go to `Settings` → `People` or `Members` (depending on the plan).

2. Go to the `Members` tab or the `Guests` tab.

3. Depending on the plan and who you’re trying to remove:

   * Open the dropdown for a member’s role or access level, then select `Remove from workspace`.

   * Open the dropdown for a guest’s pages or select `•••` next to a guest, then select `Remove` or `Remove from workspace`.

**Note:**

* When you remove a member from a workspace, that person will instantly lose access to the workspace, and pages from the `Private` section of their left sidebar will be hidden from view. If you invite that member back to the workspace, their private pages will be unhidden.

* If a user has left and rejoined a workspace within the last 30 days, their private pages, shared pages, group membership, and teamspace membership will be restored upon rejoining the workspace.

**Learn more**

* [Manage members & guests](https://www.notion.com/help/add-members-admins-guests-and-groups)

* [Notion pricing](https://www.notion.com/pricing)


## FAQs

### How can I decide whether to add someone as a guest or a restricted member?

You can add someone as a guest if:

* You don’t need to manage them through SCIM or permission groups.

* They only need access to a very specific list of pages.

You can add someone as a restricted member if:

* They need a broader level of access to your workspace, like the ability to interact with all pages in a teamspace.

* You want them to be able to use AI features in your workspace, with Notion AI respecting the restricted member’s permissions.
