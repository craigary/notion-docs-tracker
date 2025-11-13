---
title: SAML SSO
emoji: 🔐
description: Notion provides Single Sign-On (SSO) functionality for Business and Enterprise customers to access the app through a single authentication source. This allows IT administrators to better manage team access and keeps information more secure 🔐
url: https://www.notion.com/help/saml-sso-configuration
key: help:saml-sso-configuration
coverImage: https://images.ctfassets.net/spoqsaf9291f/hk1bRz3TSmKCYa44qqk3a/89ff18b7391cfa356d45bb68a2324c01/SAML-sso-help.png
category: Workspace administration
---

**Note:** This feature is only available for users on the Business Plan or Enterprise Plan.

## What is SAML SSO?

With SSO, you can streamline user management across systems, and remove the need for end-users to remember and manage multiple passwords by allowing them to sign in at one single access point and enjoy a seamless experience across multiple applications.

## Who can use SAML SSO with Notion?

To use SSO with Notion:

* Your workspace must be on a Business Plan or Enterprise Plan.

* Your Identity Provider (IdP) must support the SAML 2.0 standard. See instructions for Identity Provider setup for specific apps [here →](https://www.notion.com/help/set-up-identity-provider-for-saml-sso?preview_mode=1738356012620)

* A workspace owner must configure SAML SSO for the Notion workspace.

* At least one domain must be verified by a workspace owner. [Learn more about domain verification →](https://www.notion.com/help/domain-management#verify-a-domain-for-your-workspace)

**Note:** Only workspace members can use SAML SSO to log in. Guests invited to pages in a SAML-enabled Notion workspace can’t log in with SAML SSO. Instead, they’ll need to use another login method, like their username and password or login with Google or Apple.

## Set up SAML SSO for a workspace

### Business Plan

To set up SAML SSO for a Business workspace, a workspace owner can:

1. Go to `Settings` → `General`.

2. In the `Allowed email domains`**&#x20;**&#x73;ection, remove all email domains.

3. Select the `Identity` tab in `Settings`.

   ![SAML SSO - menu](https://images.ctfassets.net/spoqsaf9291f/5zI2AMPYGB0XicJSQ3EsHy/ec1a95e69e18051e6ef1e857e8f13147/saml_sso.png)

4. Verify one or more domains. [See instructions for domain verification here →](https://www.notion.com/help/domain-management)

5. Toggle on `Enable SAML SSO` and the SAML SSO Configuration modal will automatically appear and prompt you to complete the set-up.

6. The SAML SSO Configuration modal is divided into two parts:

   * The `Assertion Consumer Service (ACS) URL` needs to be entered in your Identity Provider (IdP) portal.

   * The `Identity Provider Details` is a field in which you need to provide either an IdP URL or IdP metadata XML.

![saml sso configuration](https://images.ctfassets.net/spoqsaf9291f/4RBz9STjVIHO5D9SD4aATm/62035400d769d4e02b319f3d0f641054/saml_sso_configuration.png)

### Enterprise Plan

Enterprise Plan [organization owners](https://www.notion.com/help/organization-level-controls#who-can-apply-organization-level-controls) can manage SAML SSO for their workspace (or multiple workspaces belonging to their organization) by following these steps:

1. Open the workspace switcher and select Manage organization. You may need to Set up organization first if you haven’t already. Learn more [here →](https://www.notion.com/help/organization-level-controls)

2. In the `General` tab of your organization settings, toggle on `Enable SAML SSO`.

3. Choose a setup method (URL or metadata XML), paste the required information from your Identity Provider or IdP, and select `Save & enable`.

**Note:** At this time, organizations on the Enterprise Plan can only set up SAML SSO with one IdP.

## Enforce SAML SSO

Once you have completed your configuration of SAML SSO for a workspace, members will be able to log in via SAML SSO in addition to other login methods, like username and password or Google authentication.

If you want to ensure that members can log in using only SAML SSO and no other method, go to your SAML SSO settings and update the Login method to Only SAML SSO. Once this happens, workspace users will be logged out and required to log back in using SAML SSO. SAML SSO will only be enforced for members who use your verified domain.

On the Business Plan, this will look like this:

![enforce SAML SSO](https://images.ctfassets.net/spoqsaf9291f/DeppayIjZm1QYNCA5mtpZ/9838dbd4d03bb988f95c1ce9805524ce/enforce_SAML_SSO.png)

On the Enterprise Plan, this will look like this:

![hc: saml sso enforcement org console](https://images.ctfassets.net/spoqsaf9291f/v6eYrZNFUETHX7JhiO1RY/6eb3185218389c0d524e8991b702bd41/Reference_Visuals_Group_135.png)

### SSO bypass

In the event of IdP or SAML failure, certain users will be able to bypass SAML SSO by using their email and password credentials. They’ll be able to log in and disable or update their configuration.

* If a SAML configuration is managed at the organization level, only organization owners will be able to bypass SSO.

* If a SAML configuration is managed at the workspace level, only workspace owners will be able to bypass SSO.

## Require SAML SSO authorization for workspace access

**Note:** This feature is only available to users on the Enterprise Plan.

Workspace-level SAML authorization allows enterprises to require SAML SSO for workspace access, regardless of a user's email domain. This enables safer external collaboration in your workspace.

To enable workspace-level SAML authorization:

1. Open the workspace switcher and select `Manage organization`. You may need to `Set up organization` first if you haven’t already. Learn more [here →](https://www.notion.com/help/organization-level-controls)

2. In the `General` tab of your organization settings, toggle on `Require SAML authorization for workspace access`.

   ![hc: workspace-level saml authorization setting](https://images.ctfassets.net/spoqsaf9291f/1epns43NOHbsOt45SlSx05/ef7d1f5d68e0bc9372279469ce64b1c8/SAML_Authorization_Highlight_1.png)

**Note:** Before enabling, ensure all members are added to your Identity Provider (IdP) to prevent accidental lockouts from the workspace.

When enabled, members of the affected workspaces who haven’t already authorized with your organization’s IdP will be met with an additional authorization screen. They’ll need to go through SAML SSO to continue viewing your organization’s workspaces.

![hc: authorization screen for workspace saml](https://images.ctfassets.net/spoqsaf9291f/3NFHwX8Ulb7frDAnADxv2e/d5afcf93870db935512871e2ebdad146/User_Auth_Page_-_SAML_Authorization.png)

## Just-in-Time (JIT) provisioning

Notion supports Just-in-Time provisioning when using SAML SSO. This allows someone signing in via SAML SSO to join the workspace automatically as a member.

To enable Just-in-Time provisioning if you're on the Business Plan, go to `Settings`**&#x20;**→**&#x20;**`Identity` and make sure that `Automatic account creation` is enabled.

To enable Just-in-Time provisioning if you’re on the Enterprise Plan, go to your organization console → `General` and make sure that `Automatic account creation` is enabled.

**Note:&#x20;**&#x57;e don’t recommend enabling Just-in Time provisioning if you are using SCIM. Having an “allowed email domain” in place allows users on that domain to join the workspace so there could be a mismatch between membership in their Identity Providers and Notion.

**Learn more**

* [Set up Identity Provider (IdP) for SAML SSO](https://www.notion.com/help/set-up-identity-provider-for-saml-sso)


## FAQs

### Why can't I enable SAML SSO?

The most common reason is that you have not yet verified ownership of a domain. If this is the case, you'll notice that you either don’t have any domains listed in the verify email domain section or the domain is pending verification.

For next steps, [refer to our instructions on how to complete domain verification here →](https://www.notion.com/help/domain-management)


### Why can’t I edit my SAML SSO settings?

It's possible you're<!-- --> trying to modify the verified domains or SSO configuration from a linked workspace that's already associated with another SSO configuration.\
\
In linked workspaces, all domain management and SSO configuration settings are read-only. To modify the SSO configuration or remove this workspace from the SSO configuration, you must have access to the primary workspace. The name of the primary workspace can be found at the top of the `Identity & Provisioning`**&#x20;**&#x74;ab in your settings.


### Why do I need to verify a domain to enable SSO?

We ask that the email domain ownership is validated to ensure that only the owner of the domain can customize how their users log into Notion.


### I'm having trouble setting up SSO.

* Try using a URL instead of an XML.

* Test the setup process with a test account before enforcing it for users.

* If neither of these options help, reach out to support at

  email protected.


### Why should I remove email domains from the “Allowed Email Domains” setting before configuring SAML SSO for my workspace?

The `Allowed Email Domain` setting allows users with the selected domains to access your workspace without being provisioned via your IdP. To ensure that only users provisioned via your IdP can access your SAML-enabled workspace, disable this feature by removing all email addresses from the `Allowed Email Domain` list.


### Can I still log in to Notion if my Identity Provider (IdP) is out of service?

Yes, even with SAML enforced, workspace owners have the option to log in with email. A workspace owner can change the SAML configuration to disable `Enforce SAML` so users can log in with email again.


### How do I allow admins of other workspaces in my SAML configuration create new workspaces?

Only the admins of your primary workspace will be able to create new workspaces using your verified domain(s). Please reach out to our support team (email protected) to switch your primary SAML workspace to another linked workspace in your SAML configuration.
