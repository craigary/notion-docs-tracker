---
title: Domain management
emoji: 🧷
description: This article will cover how to verify ownership of a domain and which advanced workspace security settings it will unlock for Enterprise customers 🧷
url: https://www.notion.com/help/domain-management
key: help:domain-management
coverImage: https://images.ctfassets.net/spoqsaf9291f/3IqsZ71Q9AKGV1ZWA0gydy/ce6396c48205fcc5d8d2e5e2a11057bd/Group_49.png
category: Workspace administration
---

**Note:** This article is for users on the Enterprise Plan. If you’re on the Business Plan, check out this article to learn how to verify a domain for your workspace, and [this article](https://www.notion.com/help/saml-sso-configuration) to learn how to set up SAML SSO for your workspace.

Domain management features allows Enterprise [organization owners](https://www.notion.com/help/organization-level-controls#who-can-apply-organization-level-controls) to claim ownership over an email address domain associated with their workspace. This unlocks the ability to configure SAML SSO for an organization, build Notion integrations using link previews, and control who can create workspaces.

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

## Verify a domain for an integration

If you’re building an integration with Notion, like link previews, you’ll need to verify your domain in the integration management page and not in Notion. You can find the full instructions in our [developer guides →](https://developers.notion.com/)

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

Once an [organization owner](https://www.notion.com/help/organization-level-controls#who-can-apply-organization-level-controls) verifies a domain, an automated email will be sent to all workspace owners of workspaces created with that domain, notifying them that their workspaces are eligible to be claimed.

During this 14-day notification period, workspace owners can only request ownership transfers on single-member workspaces. They will be unable to delete single-member workspaces or claim multi-member workspaces.

After a domain is verified, users who create new workspaces with a verified domain will be notified upon creation that their workspace is eligible to be claimed.

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

The workspace consolidation tool is available to Enterprise customers through their Notion Account Management team. Learn more about workspace consolidation support [here](https://notion.notion.site/Notion-Workspace-Consolidation-Guide-0eca1f05f2614ff6818c86c3b3fb0357?pvs=4).


## FAQs

### How do I know if domain ownership verification is complete?

If domain ownership verification is complete, the verified domain will appear in a green color scheme.


### My domain is displayed in red. What does this mean?

If the domain is displayed in red that means that either the domain ownership has already been verified in another workspace or the Notion-provided verification code has expired (it expires after 1 week).

To verify the domain, please restart the verification process from the beginning.


### My domain is displayed in yellow. What does this mean?

If the domain is displayed in yellow, that means it’s pending validation. You need to either complete the instructions to update the DNS record or click `Verify` in the Verification modal.


### I verified my domain in the past with the help of the Notion Support team. What will my workspace creation permissions be?

If you verified your domain before the functionality to customize permissions for workspace creation was supported, your setting will remain as `Anyone` can create a workspace using your verified domain(s).


### Why would I want to verify more than one domain?

If you own multiple domains – e.g. acme.com and example.com – and you plan to use SAML SSO to manage users from these domains or customize their permissions to create new workspaces, you might want to verify multiple domains.


### Who is restricted from creating a workspace when the setting is Only Workspace Owners?

Users from your verified domain will be restricted from creating new workspaces. Only workspace owners of the workspace where the domains have been verified, will be able to create workspaces.


### What can workspace owners do with domain management?

Domain management features help Workspace owners better control and secure their workspaces. You can [configure SAML SSO](https://www.notion.com/help/saml-sso-configuration) for your workspace, build Notion integrations using [link previews](https://www.notion.com/help/link-previews-and-synced-databases#link-previews), and [control who can create workspaces](https://www.notion.com/help/domain-management#workspace-creation-permissions)


### What is visible to workspace owners with domain management?

Owners of a domain will be able to see a list of workspaces that were created using the corporate domain, including information such as the list of workspace owners, number of members, and created date. They will not be able to see the content within the workspace.


### What does it mean when a workspaces is in a pending state?

Once a domain claim request has been submitted, the workspace will remain in the pending state in the workspace view until the claim has been processed.


### Why can’t I claim a single-member workspace? I don’t want to delete it or request an account switch.

Consolidating workspaces to your primary workspace is coming soon. In the meantime, you can work with the workspace owner of the single-member workspace to move content in your primary workspace.


### Why can’t I delete a multi-member workspace?

Deleting a multi-member workspace is not supported in the domain management workspace view, but once you’ve successfully claimed a multi-member workspace you can follow the instructions to permanently delete the workspace as the new, sole workspace owner.


### Why can’t I claim ownership of a workspace when it’s eligible to be claimed?

If your claim request is not getting processed, it’s likely that the workspace you’re trying to claim is either:

* In a delinquent state on payments

* In the 14 day waiting period after a domain is newly verified


### Can I merge workspaces?

Consolidating workspaces to your primary workspace is coming soon. In the meantime, you can claim workspaces and manually move content to a primary workspace.


### Can I see all workspaces created by someone from my organization?

The workspace view in your domain management settings will only show workspaces that are eligible for domain claim. Workspaces on the Enterprise Plan will not be included.


### Why am I unable to delete this single-member workspace?

Workspaces may be ineligible for deletion if:

* The workspace has an outstanding unpaid invoice.

* The workspace is on a paid plan.


### What are the single and multi-member tabs in the workspace view?

Domain Management functionality with Notion is based on the number of members in the workspace.

* Single-member workspaces are eligible to either change ownership to a non-corporate account or delete.

* Multi-member workspaces are eligible to claim.
