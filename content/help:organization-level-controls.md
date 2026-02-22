---
title: Organization level controls
emoji: 🎮
description: Manage all of your organization’s workspaces and apply settings at the organization level in one place 🎮
url: https://www.notion.com/help/organization-level-controls
key: help:organization-level-controls
coverImage: https://images.ctfassets.net/spoqsaf9291f/1hLVkexczfU4pbkYrPQ65O/a866199a6aa3a69d394b57731bbb8dec/Mar_4_Screenshot_from_Figma__1_.png
category: Workspace administration
---

**Note:** This feature is only available to users on the Enterprise Plan. Domain verification is not required to enable this feature.

## Who can apply organization level controls?

To manage organization level controls, Enterprise workspace owners need to first set up their organization and become or designate an `Organization owner`. To do this:

1. Open the workspace switcher and select `Set up organization`.

   ![hc: set up organization](https://images.ctfassets.net/spoqsaf9291f/afp51ubPh4c4TYyOENccZ/9e9565631ce2f516ab815b448887492a/Reference_Visuals_Group_129.png)

2. If you don’t already have an approved email domain, you have the option to add one here. Follow the prompts to set one up, then select `Verify domain`. When you’re done, select `Configure organization`.

   * [Learn more about verifying domains here](https://www.notion.com/help/domain-management#verify-a-domain-for-your-organization)!

3. Choose an icon and name for your organization.

4. Select one or more organization owners. These can be the workspace owners of your organization’s Notion workspaces or whoever else you would like to help manage your organization. When you’re done, select `Finish setup`.

5. Select `Go to Admin console`.

## Access organization level controls

To view and manage your organization level controls from a Notion workspace:

1. Open the workspace switcher and select `Manage organization`.

   ![hc: manage organization](https://images.ctfassets.net/spoqsaf9291f/iPiJnNEMvh7DpZ1oeO2Kw/2783a15f794d5eedde64fa5b1aefe19f/Reference_Visuals_Group_127__1_.png)

2. This will open your organization level controls in your web browser. Feel free to bookmark this link for future use!

## How organization level controls impact workspaces

When a setting is applied at the organization level, workspace owners won’t be able to adjust those settings in their workspace settings. They’ll see that the settings are managed by their organization.

Workspace members won’t be impacted by organization level controls — these settings are only visible and available to organization owners.

## General

The `General` tab gives you a birds-eye view of your organization, including its members and workspaces. From this tab of your organization level settings, you can do the following:

* Select `Edit details` to update your organization’s name.

* See how many members belong to your organization. Select the `Members` tile to manage your members.

* See how many workspaces belong to your organization. Select the `Workspaces` tile to manage your members.

* Select `Manage email domains` to verify the email domains associated with your organization.

* Set up [SAML Single sign-on](https://www.notion.com/help/saml-sso-configuration)` (SSO)` and [SCIM provisioning](https://www.notion.com/help/provision-users-and-groups-with-scim) for your workspaces.

* Require users to authorize with SAML SSO when trying to access workspaces in your organization.

* Delete your organization.

## People

The `People` tab lets you see all the members and guests across all of your workspaces deduped in one view, so you can easily understand how they impact your billing. From the `People` tab of your organization level settings, you can do the following:

* Select `Add members` to add members to specific workspaces belonging to your organization.

* View and manage members, guests, groups, and user accounts. Click on `Manage members`, `Manage guests`, and so on to access a dashboard where you can see, search, and filter lists of people throughout your organization. You'll be able to view their email, workspaces or pages they have access to, their last active time, and more.

* Upgrade guests to members.

* Remove guest access.

* Allow users to grant Notion support access.

* Suspend or reactivate user accounts.

* Reset all users’ passwords.

* Log all managed users out of Notion and require them to authenticate again.

* Manage `Session duration length`.

## Security

From the `Security` tab of your organization level settings, you can control the following:

* Who can publish [Notion Sites](https://www.notion.com/help/public-pages-and-web-publishing), [forms](https://www.notion.com/help/forms), or [public links](https://www.notion.com/help/sharing-and-permissions#general-access) to the web.

* Who can export pages from workspaces.

* Who can duplicate pages to other workspaces.

* Who can request to add members.

* Who can request to add guests to pages.

* Who can add integrations.

* Who can access webhooks in database automations and buttons.

These settings can be `Workspace managed` so that they can be different for every workspace, `Enabled for everyone` in your organization, or `Disabled for everyone` in your organization.

Security settings can be applied to all of the workspaces and teamspaces within your organization using `Bulk apply`. Note that the most granular settings will override any settings at a higher level — for example, if your organization doesn’t allow publishing Sites and forms to the web but you enable publishing for a specific teamspace, that teamspace will be allowed to publish Sites and forms even though your organization setting is to have publishing disabled.

Make sure to `Save changes` once you’re done adjusting your security settings so they go into effect.

## Data and compliance

From the `Data & compliance` tab of your organization level settings, you can do the following:

* Search for any page within your organization. You can filter by workspace, created date, creator, and more.

* See all recent activity across your organization via audit log. You can filter by workspace, date, user, and more. Learn more about audit log events and what they mean [here →](https://www.notion.com/help/audit-log#audit-log-events)

## Analytics

From the `Analytics` tab of your organization level settings, you can do the following:

* See your most active members, guests, and teamspaces.

* See the content that has the most engagement.

* See popular search queries.

* Drill down by workspace and filter by specific date ranges.
