---
title: Audit log
emoji: 🔦
description: Audit logs give Enterprise organization owners access to detailed information about security and safety-related activity. This can help identify potential security issues, investigate suspicious behavior, and troubleshoot access 🔦
url: https://www.notion.com/help/audit-log
key: help:audit-log
coverImage: https://images.ctfassets.net/spoqsaf9291f/716WVYpSoYzNRkjGxmXt4n/f99b26d3e5beebd199410803d200d643/Audit_log_-_hero.png
category: Workspace administration
---

**Note:** The audit log feature is available to [organization owners](https://www.notion.com/help/organization-level-controls#who-can-apply-organization-level-controls) on the Enterprise Plan. If you upgrade to an Enterprise Plan, audit log events are recorded starting from the time of upgrade. Prior events will not be included in the audit log.

Audit logs give you information about events that happen across your organization’s workspaces, as well as who took specific actions and when. Where available, the IP address is also included.

By default, all events are shown in reverse chronological order. You can use the filters at the top of the audit log to find the information you’re looking for.

## Access your audit log

To see your audit log:

1. Open the workspace switcher and select `Manage organization`. You may need to `Set up organization` first if you haven’t already. Learn more [here →](https://www.notion.com/help/organization-level-controls)

2. Go to the `Data & Compliance` tab and select `Audit log`.

## Audit log events

Events are split into four main categories:

1. **Page events:&#x20;**&#x54;his includes events users take on a single Notion page.

2. **Teamspace events:** This includes events users take on one or more teamspaces.

3. **Workspace events:** This includes events users take on an entire Notion workspace.

4. **Account events:** This includes events about accounts of users in the workspace.

### Page events

* **Page edited:** That a user edited the content of a page.

* **Page property edited:** That a user edited a page’s property, like a page title or a database property.

* **Page viewed:** That a user viewed a page.

* **Page created:** That a user created a new page nested under another page.

* **Page moved to trash:** That a user moved a page to Trash.

* **Page deleted from trash:** That a user deleted a page from Trash.

* **Page restored:** That a user restored a formerly deleted page from Trash.

* **Page exported:** That a user exported a page.

* **Page moved:** That a user moved a page.

* **Page permission update:** That a member or guest’s page permissions were updated.

* **Page shared to web:** That a user enabled sharing (or disabled sharing) a page to the web.

* **File uploaded:** That a user uploaded a file.

* **File downloaded:** That a user opened or downloaded `file name` from a certain page.

* **Private content transferred:** That the private pages of a user who left the workspace were transferred to a current user. Learn more [here →](https://www.notion.com/help/transfer-content-deprovisioned-user)

* **Automation created:** That a user created a new automation.

* **Automation edited:** That a user edited an automation.

* **Comment added:** That a user added a new comment on a page.

* **Comment updated:** That a user edited a comment.

* **Comment deleted:** That a user deleted a comment.

* **Page suggestion created:** That a user suggested an edit in a page.

* **Page suggestion accepted:** That a user accepted a suggested edit in a page.

* **Page suggestion rejected:** That a user rejected a suggested edit in a page.

* **Page suggestion comment created:** That a user added a comment on a suggested edit in a page.

* **Page suggestion comment updated:** That a user updated a comment on a suggested edit in a page.

* **Page suggestion comment deleted:** That a user deleted a comment on a suggested edit in a page.

* **Page locked:&#x20;**&#x54;hat a page was locked.

* **Page unlocked:** That a page was unlocked.

### Page event audience

For page events, workspace owners can also view the audience or visibility level of each target page.

To see the audience, hover over the page-related audit log event. The audience captured in the audit log will be one of the following:

* **Private:** page is not shared with other users.

* **Shared internally:** page is shared with other members of the workspace only.

* **Shared externally:** page is shared with one or more guests outside of the workspace and/or with an integration bot.

* **Shared to web:&#x20;**&#x50;age is [published to the web](https://www.notion.com/help/public-pages-and-web-publishing).

Page event audience will also export as a column in CSV exports.

### Teamspace events

* **Member added to teamspace:&#x20;**&#x54;hat a user added another user to the teamspace. Will specify “as Teamspace owner” if user is invited as a teamspace owner

* **Member removed from teamspace:&#x20;**&#x54;hat a teamspace owner has removed a teamspace member from the teamspace

* **Group added to teamspace:&#x20;**&#x54;hat a user added a permission group to the teamspace

* **Group removed from teamspace:&#x20;**&#x54;hat a teamspace owner has removed a permission group from the teamspace

* **Member joined the teamspace:** That a user joined an open teamspace

* **Member left the teamspace:** That a user left a teamspace

* **Teamspace created:&#x20;**&#x54;hat a user created the teamspace

* **Teamspace archived:&#x20;**&#x54;hat a teamspace owner archived a teamspace

* **Teamspace restored:&#x20;**&#x54;hat a teamspace owner restored a teamspace

* **Teamspace name changed:&#x20;**&#x54;hat a user updated the teamspace’s name

* **Teamspace description changed:** That the teamspace description has been changed

* **Teamspace icon changed:**

  That the teamspace icon has been changed

* **Teamspace privacy type changed:** That a teamspace owner has changed the teamspace privacy type

* **Teamspace default toggled:**

  That a user enabled or disabled a teamspace as a default teamspace

* **Teamspace creation setting toggled:&#x20;**&#x54;hat a user has enabled or disabled the ability for everyone in the workspace to create a teamspace

* **Teamspace Members default page permission updated**: That the default page permissions of teamspace members have been changed

* **Everyone in workspace default page permission updated**: That the default page permissions of everyone at workspace have been changed

* **Member teamspace role updated:&#xA0;**&#x54;hat a has updated a teamspace member’s role in the teamspace

* **Custom permissions updated for a member in the teamspace:&#x20;**&#x54;hat a teamspace owner modified access to a teamspace member. Learn more [here](https://www.notion.com/help/guides/grant-access-teamspaces)

* **Custom permissions updated for a group in the teamspace:&#x20;**&#x54;hat a teamspace owner modified access to a group. Learn more [here](https://www.notion.com/help/guides/grant-access-teamspaces)

* **Teamspace invite access changed**: That a user has updated settings for who can invite teamspace members

* **Teamspace disable guests toggled: &#xA0;**&#x54;hat a teamspace owner has enabled or disabled the ability to add guests to a teamspace

* **Export toggled for teamspace:&#x20;**&#x54;hat a teamspace owner has disabled or enabled exporting for a teamspace

* **Public page sharing toggled for teamspace:&#xA0;**&#x54;hat a teamspace owner has switched public page sharing on/off for a teamspace

* **Teamspace sidebar editing toggled:&#x20;**&#x54;hat a teamspace owner has enabled or disabled the ability for users to change the teamspace sidebar section

* **Enabled teamspaces:&#x20;**&#x54;hat a user has enabled the teamspaces feature on a workspace

### Workspace events

* **Member invited:&#x20;**&#x54;hat a workspace owner or Membership admin invited a user to the workspace.

  * The new user's role will be specified as `Workspace owner` if they are invited as an workspace owner, or as `Membership admin` if they are invited as a membership admin.

* **Member joined:&#x20;**&#x54;hat a user has joined the workspace

* **Member role updated:&#x20;**&#x54;hat a workspace owner has updated a user’s role 

* **Member removed:&#x20;**&#x54;hat a workspace owner or membership admin has removed a user from the workspace

* **Guest removed:&#x20;**&#x54;hat a guest has been removed from a workspace

* **Guest invite request created**: That a guest invite to a page has been requested for approval by workspace owner

* **Invite link toggled:&#x20;**&#x54;hat a user either enabled or disabled the invite link

* **Invite link reset:&#x20;**&#x54;hat a user has reset an invite link

* **Workspace name changed:&#x20;**&#x54;hat a user updated the workspace’s name

* **Workspace icon changed:&#x20;**&#x54;hat the workspace icon has been changed

* **Workspace domain changed:&#x20;**&#x54;hat the domain of a workspace is changed

* **Page access requests toggled:&#x20;**&#x54;hat a user has enabled or disabled page access requests from non-workspace-members

* **Public page sharing toggled:&#x20;**&#x54;hat a workspace owner has switched public page sharing on/off

* **Workspace sidebar editing toggled:&#x20;**&#x54;hat a workspace owner has enabled or disabled the ability for users to change the Workspace sidebar

* **Disable guests toggled:&#x20;**&#x54;hat a workspace owner has enabled or disabled the ability to add guests to a workspace

* **Pages to other workspaces toggled:** That a workspace owner has either disabled or enabled moving pages to other workspaces

* **Export toggled:&#x20;**&#x54;hat a workspace owner has disabled or enabled exporting

* **Workspace content exported:&#x20;**&#x54;hat a user has exported content from a page or the entire workspace

* **Integration installation toggled:&#x20;**&#x54;hat a workspace owner has disabled or enabled integrations restrictions

* **Integration created:** That a new integration has been added to a workspace

* **Integration deleted:** That an integration has been deleted

* **Integration secret reset:** That an integration's secret token has been refreshed

* **Integration settings updated:&#x20;**&#x54;hat an integration's basic settings, like its name or icon, have been changed

* **Integration permission updated:&#x20;**&#x54;hat an integration's capabilities (reading content, inserting a comment, etc.) have been changed

* **Added allowed email domain:&#x20;**&#x54;hat the user added an allowed email domain to the workspace

* **Removed allowed email domain:&#x20;**&#x54;hat the user removed an allowed email domain from a workspace

* **Public home page set:&#x20;**&#x54;hat a workspace owner has changed public home page

* **Public home page link cleared:&#x20;**&#x54;hat a workspace owner has cleared public home page

* **SCIM token generated:&#x20;**&#x54;hat a workspace owner generated a SCIM API token

* **SCIM token revoked:&#x20;**&#x54;hat a workspace owner revoked a SCIM API token

* **IdP metadata URL updated:&#x20;**&#x54;hat a workspace owner has set or updated the IdP metadata URL

* **IdP metadata XML updated:&#x20;**&#x54;hat a workspace owner has updated the IdP metadata XML

* **IdP metadata XMP removed:&#x20;**&#x54;hat a workspace owner has removed IdP metadata XML

* **Toggled enable SAML for all spaces in the organization:&#x20;**&#x54;hat an organization owner has disabled or enabled SAML

* **Toggled enforce SAML for all spaces in the organization:** That an organization owner has disabled or enabled Enforce SAML

* **Auto-create accounts on sign-in toggled:&#x20;**&#x54;hat a workspace owner has enabled automatically creating accounts on sign-in

* **Workspace creation setting updated**: That a workspace owner has restricted creation of new workspaces by users with the claimed enterprise email domain

* **Group created:&#x20;**&#x54;hat a new group is created

* **Group deleted:&#x20;**&#x54;hat a group is deleted

* **Group name changed:&#x20;**&#x54;hat a group name has been changed

* **Member added to group:&#x20;**&#x54;hat a workspace owner or membership admin has added a user to a group

* **Member removed from group:&#x20;**&#x54;hat a workspace owner or membership admin has removed a user from a group

* **Claimable workspace transfer status change:&#x20;**&#x54;hat the status of ownership transfer on a claimable workspace has changed

* **Claimable workspace upgrade status change:&#x20;**&#x54;hat the status of a claim and upgrade to Enterprise of a claimable workspace has changed

* **Claimable workspace deletion status change:&#x20;**&#x54;hat the status of workspace deletion of a claimable workspace has changed

* **Membership request toggled:&#x20;**&#x54;hat a user has enabled or disabled new workspace membership requests

* **Membership request resolved:&#x20;**&#x54;hat a user has resolved a workspace membership request

* **Audit Log exported:&#x20;**&#x54;hat the user exported the Audit Log

* **User Analytics exported:&#x20;**&#x54;he the user exported the User Analytics table of [Workspace Analytics](https://www.notion.com/help/workspace-analytics)

* **Content Analytics exported:&#x20;**&#x54;hat the user exported the Content Analytics table of [Workspace Analytics](https://www.notion.com/help/workspace-analytics)

* **Workspace analytics tracking toggled:&#x20;**&#x54;hat the user enabled or disabled workspace analytics within the workspace

* **Content search queried**: That a workspace owner has used the [content search](https://www.notion.com/help/admin-content-search) functionality to find workspace content

* **Content search results exported**: That a workspace owner has exported the results from a [content search](https://www.notion.com/help/admin-content-search) query.

* **Notion AI toggled for workspace:&#x20;**&#x54;hat the user has enabled or disabled Notion AI in a workspace

* **Workspace consolidation started:** A Notion employee has initiated workspace consolidation from this source or to this target workspace.

* **Workspace consolidation completed:** The source or target workspace has finished consolidation.

* **Workspace consolidation failed:** That workspace consolidation has failed for the source or target workspace.

* **User suspended:&#x20;**&#x54;hat an admin has suspended a managed user account.

* **User unsuspended:** That an admin has unsuspended a managed user account.

* **Log out all managed users:** That an admin has logged out every managed user account.

* **Log out one managed user:&#x20;**&#x54;hat an admin has logged out a single managed user account.

* **Clear password for all managed users:&#x20;**&#x54;hat an admin has cleared all managed user accounts' passwords.

* **Clear password for one managed user:&#x20;**&#x54;hat an admin has cleared a single managed user account's password.

* **Integration added to approved connections:** That an integration was added to the workspace’s list of approved connections.

* **Integration removed from approved connections:** That an integration was removed from the workspace’s list of approved connections.

* **HIPAA compliance enabled:&#x20;**&#x54;hat a workspace owner has enabled HIPAA compliance by accepting Notion’s Business Associate Agreement.

* **HIPAA compliance disabled:** That a workspace owner has disabled HIPAA compliance.

* **Custom emoji created:** That a custom emoji was created.

* **Custom emoji updated:** That a custom emoji was updated.

* **Custom emoji deleted:** That a custom emoji was deleted.

### Account events

* **Login:&#x20;**&#x57;hen and from where a user has logged in

* **Logout:&#x20;**&#x57;hen and from where a user has logged out

* **Password set:&#x20;**&#x54;hat a user created a password

* **Password cleared:&#x20;**&#x54;hat a user cleared their password

* **Password changed:&#x20;**&#x54;hat a user changed their password

* **MFA SMS toggled:&#x20;**&#x54;hat a user updated their MFA via SMS text messages settings. Learn more[ here](https://www.notion.com/help/two-step-verification)

* **MFA TOTP toggled:** That a user updated their MFA via a TOTP (time-sensitive one time passcode) app. Learn more [here](https://www.notion.com/help/two-step-verification)

* **MFA backup code toggled:&#x20;**&#x54;hat a user updated their MFA backup code settings

* **Email changed:&#x20;**&#x54;hat the email of a user was changed

* **Picture changed:&#x20;**&#x54;he the profile photo of the user was changed

* **User deleted:&#x20;**&#x54;hat a specific user account has been deleted

* **Granted support access:&#x20;**&#x54;hat a user’s account was granted Notion support access

* **Revoked support access:&#x20;**&#x54;hat a user’s account was revoked Notion support access

* **Preferred name changed:** That a user has updated their account's preferred name

**Note:&#x20;**&#x49;f you are trying to find a deleted user or a user who has changed their name to a new name, the best way to do this is through an exported audit log.

## Export your audit log

Want to analyze the data in a spreadsheet or import your audit log to external tools? The workspace audit log can be exported in CSV format.

To export your audit log:

1. Open the workspace switcher and select `Manage organization`.

2. Go to the `Data & Compliance` tab and select `Audit log`.

3. Select `Export`.

**Note:** An exported audit log will <!-- -->show all applicable events within the chosen date range, up until 2 hours before the export time.
