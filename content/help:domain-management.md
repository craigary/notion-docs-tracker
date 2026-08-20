---
title: "Domain management"
emoji: null
description: null
url: "https://www.notion.com/help/domain-management"
key: "help:domain-management"
coverImage: null
category: "Administer your workspace"
categoryKey: "category:enterprise-admin"
---

**Note:** This article is for users on the Enterprise Plan. If you’re on the Business Plan, check out this article to learn how to verify a domain for your workspace, and [this article](https://www.notion.com/help/saml-sso-configuration) to learn how to set up SAML SSO for your workspace.

Domain management features allows Enterprise [organization owners](https://www.notion.com/help/organization-level-controls#who-can-apply-organization-level-controls) to claim ownership over an email address domain associated with their workspace. This unlocks the ability to configure SAML SSO for an organization, build Notion connections using link previews, and control who can create workspaces.

## Verify a domain for your organization

**Note:&#x20;**&#x54;o verify a domain for your organization, you must be an [organization owner](https://www.notion.com/help/organization-level-controls).

To verify a domain for your workspace:

1. Go to [notion.com/settings/organization](https://www.notion.com/settings/organization).

2. In the `General` tab of your organization settings, select `Manage email domains`.

3. Select `Add email domain`.

4. Enter your email domain and select `Get verification code`.

5. Follow the prompts to update your DNS record.

6. Click `Verify domain` to prompt Notion to check your DNS record.

   * If your domain’s status is `Pending`, select `•••`**&#x20;**&#x6E;ext to the domain → `View details` → `Verify` to manually verify it.

7. Once verification is complete, you’ll see a confirmation dialog and your domain’s status will be `Verified`.

**Note:**

* Typically, a change in the DNS record takes only minutes to propagate; however, there are cases where it may take up to 72 hours.

* You must verify a domain within one week of adding the domain. After a week, the verification code will expire and you’ll have to repeat the steps above.

## Customize permissions for workspace creation using your domain

**Note:** To customize workspace creation permissions, you must be an [organization owner](https://www.notion.com/help/organization-level-controls#who-can-apply-organization-level-controls) with at least one [verified domain](https://www.notion.com/help/domain-management#verify-a-domain-for-your-workspace).

To customize workspace creation permissions:

* Your workspace must be on the Enterprise Plan.

* You must be an [organization owner](https://www.notion.com/help/organization-level-controls#who-can-apply-organization-level-controls).

* You have verified at least one domain. [Instructions for domain verification can be found above →](https://www.notion.com/help/domain-management#verify-a-domain-for-your-workspace)

You can customize permissions for who can create new workspaces using your verified domains. To do this:

1. Go to [notion.com/settings/organization](https://www.notion.com/settings/organization).

2. Go to the `People` tab.

3. In the `Managed accounts` section, toggle `Allow users to create new workspaces` on or off. When toggled off, only organization owners will be able to create new workspaces with your verified domain.

**Note:&#x20;**&#x54;he default setting for workspace creation permissions once a domain is verified is workspace owners only.

## Domain claim

**Note:** To claim a domain, you must be an [organization owner](https://www.notion.com/help/organization-level-controls) on a **sales-assisted** Enterprise Plan.

Once a domain is verified, [organization owners](https://www.notion.com/help/organization-level-controls#who-can-apply-organization-level-controls) on the Enterprise Plan can transfer, delete, or claim ownership over workspaces created by users with their verified domain.

To view and manage claimable workspaces:

* You must be an organization owner on the Enterprise Plan.

* Your verified domain must not be an educational domain.

* Your verified domain must have been verified for at least 14 days.

* For single-member workspaces, the workspace creator’s email must belong to the verified corporate domain.

* For multi-member workspaces, the workspace creator’s email must belong to the verified corporate domain (the creator does not need to be a current member of the workspace). At least one current workspace owner (either the creator or someone else) must be using the verified email address.

* If you want to claim an Enterprise workspace, that workspace must not be part of another organization.

Enterprise organization owners can view all non-enterprise workspaces created by users with their verified domain by going to the `General` tab of their organization’s settings → `Manage workspaces`. From there, they can:

* View each workspace with information like its name, plan type, number of members, and more.

* Select `Add workspace` to claim multi-member workspaces and upgrade them to the Enterprise Plan (if they’re not already on the Enterprise Plan).

* Request ownership change for or delete single-member workspaces.

### Change workspace ownership

With domain management, [organization owners](https://www.notion.com/help/organization-level-controls#who-can-apply-organization-level-controls) on the Enterprise Plan can request a change in ownership transfer on single-member workspaces using a verified domain to a non-corporate email address. This is especially helpful when users created a workspace using a corporate email address, but use the workspace primarily for personal projects.

To change workspace ownership:

* You must be an organization owner on an Enterprise Plan.

* The workspace must only have one member.

To do this, organization owners can follow these steps:

1. Go to [notion.com/settings/organization](https://www.notion.com/settings/organization).

2. Open the `General` tab.

3. Select `Manage workspaces` → `Add workspace`.

4. Select `•••` next to a single-player workspace.

5. Select `Request transfer`.

When the change request is submitted, an email notification will be sent to the workspace owner of the selected workspace and the user will not be able to access their workspace until they have completed the remaining transfer steps as follows:

1. Log into the workspace.

2. Follow the instructions and change email address associated with the account to a non-corporate email address. **Note that while a single-member workspace ownership change is requested, the user cannot change the email associated with their user account.**

3. A verification code will be sent to the email address to confirm the user’s ownership of the account. Enter this verification code in the workspace.

4. An automated email will be sent once the change is complete.

### Notification period

Once an [organization owner](https://www.notion.com/help/organization-level-controls#who-can-apply-organization-level-controls) verifies a domain, an automated email will be sent to all workspace owners of workspaces <!-- -->that already exist with <!-- -->that domain, notifying them that their workspaces are eligible to be claimed.

During this 14-day notification period, workspace owners can only request ownership transfers on single-member workspaces. They will be unable to delete single-member workspaces or claim multi-member workspaces.

**Note:&#x20;**&#x54;his notification email is **only sent** when the domain is first verified, not when new workspaces are created later.

### Export list of claimable workspaces

[Organization owners](https://www.notion.com/help/organization-level-controls) can also export the list of claimable workspaces as a CSV. To do this:

1. Go to [notion.com/settings/organization](https://www.notion.com/settings/organization).

2. Open the `General` tab.

3. Select `Manage workspaces` → `Add workspace` → `⬇️`.

The CSV export will be sent to you via email.

### Delete workspaces

With domain management, Enterprise [organization owners](https://www.notion.com/help/organization-level-controls) can more easily govern how a verified domain is used and where related projects are stored on Notion. For example, when an employee leaves a company, Enterprise organization owners can delete their single member workspaces to clean up old content while remaining compliant.

To delete a workspace:

* You must be an organization owner on the Enterprise Plan.

* The domain was verified at least 14 days ago.

* The workspace must only have one member, and must either be on a Free Plan or have made all their payments if they’re on a Paid Plan.

**Note:&#x20;**&#x53;ingle-member workspaces that are deleted by an organization owner using domain management are not eligible for refunds or credits.

To delete a workspace, organization owners can follow these steps:

1. Go to [notion.com/settings/organization](https://www.notion.com/settings/organization).

2. Open the `General` tab.

3. Select `Manage workspaces` → `Add workspace`.

4. Select `•••` next to a single-player workspace.

5. Select `Schedule deletion`.

### Consolidate workspaces

The workspace consolidation tool is available to sales-assisted Enterprise customers through their Notion Account Management team. Learn more about workspace consolidation support [here](https://notion.notion.site/Notion-Workspace-Consolidation-Guide-0eca1f05f2614ff6818c86c3b3fb0357?pvs=4).


## FAQs