---
title: Managed users
emoji: 👥
description: As an enterprise workspace owner, you have many ways you can manage the users within your domain, including a dashboard where you can get information and make changes 👥
url: https://www.notion.com/help/managed-users-dashboard
key: help:managed-users-dashboard
coverImage: https://images.ctfassets.net/spoqsaf9291f/wHdtmHGUbZCr5FVQJhcyR/e226bbd130fcab1efb2f0e6770813c19/managed_users_hero.png
category: Workspace administration
---

**Note:** This feature is only available to users on the Enterprise Plan with at least one [verified domain](https://www.notion.com/help/domain-management).

Enterprise workspace owners have the ability to manage all the users within their organization. A managed user is any user with an account created with the organization's verified email domain.

![HC: User management](https://images.ctfassets.net/spoqsaf9291f/36U4gG33koLYyvmQ9EigQb/9cb590d0d0f103790fe5f5d091913d53/user_management_settings.png)

There are many ways in which workspace owners can manage users with their domain. To access these settings, go to `Settings` → `Identity`.

### Managing user accounts

Workspace owners can use these settings to apply more granularity to how their managed users work in Notion.

* `Allow users to change account information`: Let users change their preferred name, email address, and profile photo.

* `External workspace access`: Decide whether managed users can join workspaces that aren't owned by your organization.

* `Prevent managed users support access`: Control which users can allow Notion support to remote login for troubleshooting. For more information on what Notion support can view, see our terms of service.

* `Session duration`: Set how long a user can be logged in before they will be required to re-authenticate. This applies to all devices a user is logged in on.

  * For managed users on the Enterprise Plan, Notion has a default session duration of 180 days. However, workspace owners can customize their session duration from 1 hour to 180 days.

* `Log out all users`: Force all users to log out.

* `Reset passwords for all users`: Force all users to reset their passwords.

### Managed users dashboard

Enterprise workspace owners have access to a handy dashboard that gives them an overview of all users in their verified domain.

In this dashboard, workspace owners can:

* Search and filter all users using the workspace's verified domains

* Edit managed user's profile information

* View which external workspaces managed users are a part of

* Remove managed users from external workspaces

The dashboard displays user details such as name, email address, a list of workspaces they have access to, last active date, and the state of their 2-step authentication.

![HC: managed users dashboard](https://images.ctfassets.net/spoqsaf9291f/59EUrn6uzJCEWuVUtszQqs/e78127a28e3692d105ced53931981622/user_management_dashboard.png)

To access the managed users dashboard:

1. Click on `Settings` and navigate to `Identity & provisioning`.

2. Under `User management`, find `Managed users dashboard` and click `View dashboard`.

From this dashboard, workspace owners can search for users by name, email, or ID. Additionally, they can filter by workspace and 2-step verification method.

**Note:&#x20;**&#x53;uspended users remain as billable seats to whatever workspaces they are a part of.

All of their content and comments continue to show as normal, any integrations they set up continue to work, but their profile photo will appear as a gray crossed out silhouette.

On a specific user's profile, workspace owners can:

* Suspend the user

* Delete the user

* Change the user's name and email address. **The new email must belong to the verified domain.**

* Log the user out

* Reset the user's password

* Remove the user from external workspaces


## FAQs

### Will changes to managed user accounts made by the workspace admins be tracked?

Yes, all changes made by a workspace owner to a managed user’s account will be logged in the audit log.

If a password is reset or a user is removed from a workspace, they will receive an email notification.


### Will users in my workspace know that their account is being managed by the workspace admin?

Yes, users will see a badge when they go to `Settings` → `{their name}`.


### If my workspace is using SCIM, can I still make changes to managed user accounts through Notion?

Updating managed user profile information from this new dashboard is **not recommended** if the Enterprise workspace is using the SCIM API directly or through an Identity Provider (e.g. Okta, Azure AD, Google Workspace) to programmatically manage workspace members.

If the workspace is using SCIM, then changes made from the Notion Settings UI will be replaced when the next SCIM API request syncs up.


### My workspace has verified several domains. Will I see all managed users for all of our domains together in the dashboard?

Yes, you will see all your managed users (from multiple verified domains) together in the dashboard.


### What happens if a user is suspended?

Suspended users remain as billable seats to whatever workspaces they are a part of.

All of their content and comments continue to show as normal, any integrations they set up continue to work, but their profile photo will appear as a gray crossed out silhouette.

Other users can still share pages with the suspended user, @-mention them, and add them to workspaces or teamspaces. The suspended users won’t be able login, receive any notifications, or access any of these resources. They’ll see them if/when they’re unsuspended.


### What happens if a user is deleted?

All public or shared content created by the deleted user remains, but attributions and @-mentions change to `Deleted User`.

Any private or shared pages where no remaining users have full access will be deleted. Deletions are permanent, with a 30-day grace period to cancel and restore.

If the account may be needed in the future, it is recommended to suspend instead of delete. Deleted users do not contribute to the billable seat count of the workspace.
