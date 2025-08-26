---
title: Set up Identity Provider (IdP) for SCIM
emoji: 🪪
description: Learn how to set up your Identity Provider to use SCIM in Notion 🪪
url: https://www.notion.com/help/set-up-identity-provider-for-scim
key: help:set-up-identity-provider-for-scim
coverImage: https://images.ctfassets.net/spoqsaf9291f/mzbz1SsE5vsNjUFhmIhTb/555461515fdda4a6e27c704c6b2cc5cb/Scim_IDP_Reference_Visuals.png
category: Workspace administration
---

To set up provisioning with [SCIM](https://www.notion.com/help/provision-users-and-groups-with-scim) in Notion, you’ll first need to make sure that your Identity Provider, or IdP, supports the SAML 2.0 protocol. Here are some app-specific instructions for setting up your IdP.

## Azure

Notion’s Azure SCIM integration supports the following provisioning features:

* Creating users.

* Removing users.

* Keeping user attributes synchronized between Azure AD and Notion.

* Provisioning groups and group memberships in Notion.

* [Single sign-on](https://learn.microsoft.com/en-us/azure/active-directory/saas-apps/notion-tutorial) to Notion (recommended).

### Step 1: Configure user provisioning in Notion

Start by configuring Notion to support provisioning with Azure AD. To do this:

1. Go to notion.com/settings/organization.

2. Go to the `General` tab and select `SCIM provisioning`.

3. Copy an existing token or select `Add token` to create a new token.

   * Notion’s SCIM tenant URL is [https://www.notion.so/scim/v2](https://www.notion.com/scim/v2), which you’ll use later.

### Step 2: Add Notion from the Azure AD application gallery

Next, you’ll want to add Notion from the Azure AD application gallery following [these instructions](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/add-application-portal).

The Azure AD provisioning service allows you to scope who will be provisioned based on assignment to the application and or based on attributes of the user or group.

If you choose to scope who will be provisioned to your app **based on assignment**, you can use the following [steps](https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/assign-user-or-group-access-portal) to assign users and groups to the application.

If you choose to scope who will be provisioned **based solely on attributes of the user or group**, you can use a scoping filter as described [here](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/define-conditional-rules-for-provisioning-user-accounts).

### Step 3: Configure automatic user provisioning to Notion

To configure user provisioning in Azure:

1. Sign in to the [Azure portal](https://portal.azure.com/).

2. Select `Enterprise Applications` → `All applications`.

3. In the applications list, select `Notion`**.**

4. Select the `Provisioning`**&#x20;**&#x74;ab.

5. Set the `Provisioning Mode`**&#x20;**&#x74;o `Automatic`.

6. Under the `Admin Credentials`**&#x20;**&#x73;ection, input your Notion Tenant URL and Secret Token. Click `Test Connection`**&#x20;**&#x74;o ensure Azure AD can connect to Notion. If the connection fails, ensure your Notion account has Admin permissions and try again.

7. Select `Save`.

8. Under the `Mappings` section, select `Synchronize Azure Active Directory Users to Notion`.

9. Review the user attributes that are synchronized from Azure AD to Notion in the `Attribute-Mapping` section.

10. Select `Save` to commit any changes.

11. Under the `Mappings` section, select `Synchronize Azure Active Directory Groups to Notion`.

12. Review the group attributes that are synchronized from Azure AD to Notion in the `Attribute-Mapping` section.

13. Select `Save` to commit any changes.

14. To enable the Azure AD provisioning service for Notion, change the `Provisioning Status` to `On` in the `Settings` section.

15. Define the users and groups that you would like to provision to Notion by choosing the desired values in `Scope` in the `Settings` section.

16. When you're ready to provision, click `Save`.

**Note:&#x20;**&#x54;his operation starts the initial synchronization cycle of all users and groups defined in `Scope` in the `Settings` section.

The initial cycle takes longer to perform than subsequent cycles, which occur approximately every 40 minutes as long as the Azure AD provisioning service is running.

**Learn more**

* ****[https://learn.microsoft.com/en-us/entra/identity/saas-apps/notion-provisioning-tutorial](https://learn.microsoft.com/en-us/entra/identity/saas-apps/notion-provisioning-tutorial#step-1-plan-your-provisioning-deployment)

## Google

Notion’s Google SCIM integration supports the following provisioning features:

* Creating users.

* Updating user attributes, if the user has an email domain belonging to your organization.

* Deactivating users, which removes them from your workspace.

### Step 1: Configure user provisioning in Notion

To configure user provisioning in Notion:

1. Go to notion.com/settings/organization.

2. Go to the `General` tab and select `SCIM provisioning`.

3. Copy an existing token or select `Add token` to create a new token.

### Step 2: Configure provisioning in Google

To configure user provisioning in Google:

1. Make sure you’re [signed into an administrator account](https://support.google.com/a/answer/182076) to ensure your user account has the appropriate permissions.

2. Continue the steps shown on [Google Workspace Admin Help](https://support.google.com/a/answer/13063106#zippy=%2Cset-up-auto-provisioning-for-the-notion-application) starting at "Set up auto-provisioning for the Notion application".

**Note:&#x20;**&#x47;oogle’s SCIM integration does not support group provisioning and de-provisioning.

**Learn more**

* <https://support.google.com/a/answer/13063106>

## Okta

Notion's Okta SCIM integration supports the following provisioning features:

* Creating users.

* Updating user attributes, if the user has an email domain belonging to your organization.

* Deactivating users, which removes them from your workspace.

* Pushing groups.

### Step 1: Configure user provisioning in Notion

To configure user provisioning in Notion:

1. Go to notion.com/settings/organization.

2. Go to the `General` tab.

3. Toggle on `Enable SAML SSO`. The SAML SSO configuration modal will automatically appear and prompt you to complete the setup.

4. The SAML SSO configuration modal is divided into two parts:

   * The `Assertion Consumer Service (ACS) URL` needs to be entered in your Identity Provider (IdP) portal.

   * The `Identity Provider Details` is a field in which you need to provide either an IdP URL or IdP metadata XML.

5. Go to the `General` tab and select `SCIM provisioning`.

6. Copy an existing token or select `Add token` to create a new token.

### Step 2: Configure user provisioning in Okta

To configure user provisioning in Okta:

1. Add the Notion app from [Okta's integration catalog](https://www.okta.com/integrations/notion/).

2. In the `Sign-on Options` view, select `Email` for the `Application username` format on the `Sign On application` tab.

3. Under the `Provisioning` tab, select `Configure API integration`, and click on the `Enable API integration`**&#x20;**&#x63;heckbo&#x78;**.**

4. Enter the Notion SCIM API token you copied in Step 1 into the `API Token` text box, and select `Save`**.**

5. Click `Edit` next to `Provisioning to App`, and enable your preferred features (`Create users`, `Update user attributes`, or `Deactivate users`.

6. Click `Save`**.**

7. After setting up the API integration, open the `Push Groups` tab, and add the Okta groups you want to sync with Notion from the `Push Groups` button.

**Note:** When updating users/groups via an existing SCIM configuration, please do not delete the Notion App from Okta. Doing so will remove all provisioned users from the workspace.

**Learn more**

* <https://www.okta.com/integrations/notion/>

## OneLogin

**Note:** If you plan to provision users to Notion via OneLogin, it’s important to configure SCIM before configuring [SSO](https://www.notion.com/help/set-up-identity-provider-for-saml-sso#onelogin).

Notion’s OneLogin SCIM integration supports the following provisioning features:

* Creating users.

* Updating user attributes, if the user has an email domain belonging to your organization.

* Deactivating users, which removes them from your workspace.

* Creating rules to map OneLogin roles with permission groups in Notion.

### Step 1: Configure user provisioning in Notion

To configure user provisioning in Notion:

1. Go to notion.com/settings/organization.

2. Go to the `General` tab.

3. Toggle on `Enable SAML SSO`. The SAML SSO configuration modal will automatically appear and prompt you to complete the setup.

4. The SAML SSO configuration modal is divided into two parts:

   * The `Assertion Consumer Service (ACS) URL` needs to be entered in your Identity Provider (IdP) portal.

   * The `Identity Provider Details` is a field in which you need to provide either an IdP URL or IdP metadata XML.

5. Go to the `General` tab and select `SCIM provisioning`.

6. Copy an existing token or select `Add token` to create a new token.

**Note:** Workspace owners can only copy and use tokens that they themselves have generated. If a token has already been created by another workspace owner, you can coordinate to determine if another token is necessary. All tokens will expire once the workspace owner that generated the token leaves the workspace or is downgraded to a member.

### Step 2: Configure provisioning in OneLogin

To configure user provisioning in OneLogin:

1. Go to `Administration`**&#x20;**→ `Applications`**&#x20;**→**&#x20;**`Applications`.

2. Click the `Add App` button, search for Notion in the search box, and select the SAML 2.0 version of Notion.

3. Click `Save`**.**

4. Go to the `Configurations` tab.

5. Paste the Assertion Consumer Service (ACL) URL into the `Consumer URL` field.

6. Paste the `SCIM API token` into the `SCIM Bearer Token` field.

7. Click `Enable`.

8. Go to the `Provisioning` tab.

9. Under `Workflow`, check `Enable provisioning`.

10. Click `Save` in the upper right corner.

    * You can optionally enable or disable requirement for admin approval when users are created, deleted, or updated under `Require admin approval before this this action is performed`.

    * You can optionally select what happens to a user in Notion when that user is deleted from OneLogin. Choose between `Delete` (removing the user from the Notion workspace) or `Do Nothing.`

11. Click `Save` in the top right corner.

**Learn more**

* <https://onelogin.service-now.com/support?id=kb_article&sys_id=5fe1022b87938d50695f0f66cebb3546>

**Learn more**

* [Provision users & groups with SCIM](https://www.notion.com/help/provision-users-and-groups-with-scim)****
