---
title: "SAML SSO"
emoji: null
description: "Notion provides Single Sign-On (SSO) functionality for Business and Enterprise customers to access the app through a single authentication source. This allows IT administrators to better manage team access and keeps information more secure."
url: "https://www.notion.com/help/saml-sso-configuration"
key: "help:saml-sso-configuration"
coverImage: null
category: "Administer your workspace"
categoryKey: "category:enterprise-admin"
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

7. Choose how people sign in and whether new accounts are created for them, then select `Save & enable`. You can make all of these choices before you save. You don’t need to save first and open the settings again.

![saml sso configuration](https://images.ctfassets.net/spoqsaf9291f/4RBz9STjVIHO5D9SD4aATm/62035400d769d4e02b319f3d0f641054/saml_sso_configuration.png)

**Note**: A Business plan workspace uses one SAML configuration. If you need more than one identity provider, you must upgrade to the Enterprise plan.

### Enterprise Plan

Enterprise Plan [organization owners](https://www.notion.com/help/organization-level-controls#who-can-apply-organization-level-controls) can manage SAML SSO for every workspace in their organization. An organization can have more than one SAML configuration, so different groups of people can sign in with different identity providers. This is helpful when business units, regional IT teams, or companies you’ve acquired each have their own provider.

**Note**: An organization can have up to 25 SAML configurations. There’s no limit on how many domains you verify.

To add a new SAML configuration:

1. Open the workspace switcher and select `Manage organization`. You may need to select `Set up organization` first if you haven’t already. Learn more about [organization level controls here →](https://www.notion.com/help/organization-level-controls)

2. In the `General` tab of your organization settings, click `SAML configurations`. You’ll see every SAML configuration your organization has.

3. Select `Create configuration` and give it a name your team will recognize, like the business unit or provider it belongs to.

4. Select `Enable SAML SSO for login` to set this as a login option for the selected email domains.

5. Set the `Login method` for the people this configuration covers. Choose `Any method` to let users sign in with this SAML as an additional login option, or `Only SAML SSO` which requires users to sign in with this SAML only.

6. Select `Automatic account creation` to automatically create accounts for new SAML SSO users who sign up using one of the selected email domains.

7. Choose one or more verified email domains for the configuration. Adding a verified domain means any user that logs in with that domain will be able to use this SAML. A domain has to be verified before you can add it. See [instructions for domain verification here →](https://www.notion.com/help/domain-management)

8. Copy the `Assertion Consumer Service (ACS) URL` for this configuration and add it in your identity provider. Each configuration has its own ACS URL, so give each provider its own app on their side.

9. Copy the `SAML SSO Entity ID` for this configuration and add it to your identity provider.

10. Choose whether to add your provider’s details with an IdP metadata URL or IdP metadata XML.

11. Paste the URL from your IDP, then save.

**Note**: If your organization already uses SAML SSO, that setup carries over as your first configuration. Your verified domains stay attached to it, and no one has to sign in again.

## Enforce SAML SSO

Once you have completed your configuration of SAML SSO for a workspace, members will be able to log in via SAML SSO in addition to other login methods, like username and password or Google authentication.

You can pick this while you are first setting up SAML, in the same save. You can also change it later.

If you want to ensure that members can log in using only SAML SSO and no other method, go to your SAML SSO settings and update the Login method to Only SAML SSO. Once this happens, workspace users will be logged out and required to log back in using SAML SSO. SAML SSO will only be enforced for members who use your verified domain.

On the Enterprise plan, you set this for each configuration. Setting the `Login method` to `Only SAML SSO` applies to the domains in that configuration and leaves your other configurations alone. A domain can be part of several configurations, but only one of them can be required at a time.

On the Business Plan, this will look like this:

![enforce SAML SSO](https://images.ctfassets.net/spoqsaf9291f/DeppayIjZm1QYNCA5mtpZ/9838dbd4d03bb988f95c1ce9805524ce/enforce_SAML_SSO.png)

On the Enterprise Plan, this will look like this:

![hc: saml sso enforcement organization setting](https://images.ctfassets.net/spoqsaf9291f/v6eYrZNFUETHX7JhiO1RY/6eb3185218389c0d524e8991b702bd41/Reference_Visuals_Group_135.png)

### SSO bypass

In the event of IdP or SAML failure, certain users will be able to bypass SAML SSO by using their email and password credentials. They’ll be able to log in and disable or update their configuration.

* If a SAML configuration is managed at the organization level, only organization owners will be able to bypass SSO.

* If a SAML configuration is managed at the workspace level, only workspace owners will be able to bypass SSO.

This works the same when your organization has more than one configuration. An organization owner can sign in with an email and password, then fix, turn off, or stop requiring the configuration that is causing the problem.

## Require SAML SSO authorization for workspace access

**Note:** This feature is only available to users on the Enterprise Plan. Domain verification is not required to enable this feature.

Workspace-level SAML authorization allows enterprises to require SAML SSO for workspace access, regardless of a user's email domain. This enables safer external collaboration in your workspace.

To enable workspace-level SAML authorization:

1. Open the workspace switcher and select `Manage organization`. You may need to `Set up organization` first if you haven’t already. Learn more about [organization level controls here →](https://www.notion.com/help/organization-level-controls)

2. In the `General` tab of your organization settings, select SAML configurations.

3. In the list of workspaces, pick which SAML configuration each workspace requires. You can leave a workspace without one.

**Note:** Before enabling, ensure all members are added to your Identity Provider (IdP) to prevent accidental lockouts from the workspace.

When enabled, members of the affected workspaces who haven’t already authorized with your organization’s IdP will be met with an additional authorization screen. They’ll need to go through SAML SSO to continue viewing your organization’s workspaces.

If a workspace requires a specific configuration, members who haven’t signed in with that provider yet are asked to do it when they open the workspace. Notion brings them back to the workspace once they’re done. Someone who works in two workspaces that require different providers may be asked to sign in to each one.

![hc: authorization screen for workspace saml](https://images.ctfassets.net/spoqsaf9291f/3NFHwX8Ulb7frDAnADxv2e/d5afcf93870db935512871e2ebdad146/User_Auth_Page_-_SAML_Authorization.png)

## Just-in-Time (JIT) provisioning

Notion supports Just-in-Time provisioning when using SAML SSO. This allows someone signing in via SAML SSO to join the workspace automatically as a member. You can turn this on while you set up SAML, in the same save.

To enable Just-in-Time provisioning if you're on the Business Plan, go to `Settings`**&#x20;**→**&#x20;**`Identity` and make sure that `Automatic account creation` is enabled.

To enable Just-in-Time provisioning if you’re on the Enterprise Plan, go to your organization settings → `General` and make sure that `Automatic account creation` is enabled.

On the Enterprise plan, you can turn `Automatic account creation` on or off for each configuration. The workspace that new people are added to is set for the whole organization, so it’s the same no matter which provider they used. Give people access to other workspaces the way you normally would.

**Note:&#x20;**&#x57;e don’t recommend enabling Just-in Time provisioning if you are using SCIM. Having an “allowed email domain” in place allows users on that domain to join the workspace so there could be a mismatch between membership in their Identity Providers and Notion.

**Learn more**

* [Set up Identity Provider (IdP) for SAML SSO](https://www.notion.com/help/set-up-identity-provider-for-saml-sso)

## Good to know

* Business plan workspaces use one configuration. Enterprise plans allow for more than one SAML configuration.

* An organization can have up to 25 configurations. There is no limit on verified domains.

* A verified domain can be part of several configurations, but only one of them can be required at a time.

* A parent domain does not cover its subdomains. Verify each domain and subdomain you want to send to a provider, then add it to a configuration.

* An email domain can belong to only one Notion organization. Two organizations can’t share it.

* Only organization owners, and admins who already manage SAML, can add or change configurations. Members can’t.


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


### Do I have to save my SAML settings twice?

No. You can add your provider details, pick how people sign in, and choose whether new accounts are created, then save once. Everything takes effect together.


### Can each of our teams use its own identity provider?

Yes, if you’re on the Enterprise plan. An organization owner can add a configuration for each provider and choose which verified email domains use it.


### Can two providers be required for the same email domain?

No. A domain can be part of several configurations, but only one of them can be required at a time.
