---
title: Set up Identity Provider (IdP) for SAML SSO
emoji: 🔑
description: Here's how to set up your Identity Provider for SAML SSO in Notion 🔑
url: https://www.notion.com/help/set-up-identity-provider-for-saml-sso
key: help:set-up-identity-provider-for-saml-sso
coverImage: https://images.ctfassets.net/spoqsaf9291f/mzbz1SsE5vsNjUFhmIhTb/555461515fdda4a6e27c704c6b2cc5cb/Scim_IDP_Reference_Visuals.png
category: Workspace administration
---

These are instructions for setting up Notion [SAML SSO](https://www.notion.com/help/saml-sso-configuration) with Entra ID (formerly Azure), Google, Okta, and OneLogin. If you use a different Identity Provider and need assistance with configuration, please let us know.

**Note:** At this time, organizations on the Enterprise Plan can only set up SAML SSO with one IdP.

## Entra ID

### Step 1: Create a new application integration

To create a new application integration in Entra ID:

1. Sign in to the Entra ID portal. On the left navigation pane, select the `Azure Active Directory` service.

2. Navigate to `Enterprise Applications` and then select `All Applications`.

3. To add a new application, select `New application`.

4. In the `Add` from the gallery section, type `Notion` in the search box. Select Notion from results panel and then add the app. Wait a few seconds while the app is added to your tenant.

### Step 2: Create SAML Integration

To set up the SAML integration:

1. In the Azure portal, on the Notion application integration page, find the `Manage` section and selec&#x74;**&#xA0;**`Single sign-on`.

2. On the `Select a single sign-on method` page, select `SAML`.

### Step 3: SAML settings

To configure SAML settings in Notion:

1. In Notion, go to `Settings` → `General` if you’re on the Business Plan, or the `General` tab of your [organization settings](https://www.notion.com/help/organization-level-controls) if you’re on the Enterprise Plan.

2. In the `Allowed email domains` section, remove all email domains.

3. Select the `Identity` tab in `Settings` if you're on the Business Plan, or go to your organization settings → `General` → `SAML Single sign-on (SSO)` if you're on the Enterprise Plan.

4. Verify one or more domains. See instructions for domain verification [here →](https://www.notion.com/help/domain-management#verify-a-domain-for-your-workspace)

5. Toggle on `Enable SAML SSO`. The `SAML SSO Configuration` modal will automatically appear and prompt you to complete the set-up.

6. The SAML SSO Configuration modal is divided into two parts:

   * The `Assertion Consumer Service (ACS) URL` needs to be entered in your Identity Provider (IdP) portal.

   * The `Identity Provider Details` is a field in which you need to provide either an IdP URL or IdP metadata XML.

### Step 4: Configure Notion in Entra ID

To set up in Notion in Entra ID:

1. On the set up single sign-on with SAML page, click the pencil icon for `Basic SAML Configuration` to edit the settings.

2. On the `Basic SAML Configuration` section, if you wish to configure the application in IdP initiated mode, enter the values for the following fields:

   * In the `Identifier (Entity ID)` text box, enter the following URL: `https://www.notion.so/sso/saml`.

   * In the `Reply URL (Assertion Consumer Service URL)` text box, use the ACS URL from Notion, found on the `Identity & provisioning` tab of `Settings` in your left-hand sidebar.

   * In the `Sign on URL` text box, enter the following URL: `https://www.notion.so/login`.

3. In the `User attributes & claims` section, ensure the required claims are set to:

   * Unique User Identifier (Name ID): user.userprincipalname \[nameid-format:emailAddress]

   * firstName: user.givenname

   * lastName: user.surname

   * email: user.mail

4. On th&#x65;**&#xA0;**`Set up single sign-on with SAML`**&#xA0;**&#x70;age, in the `SAML Signing Certificate` section, click the copy button next to the `App Federation Metadata URL`.

5. In Notion, go to `Settings` → `Identity`, and paste the `App Federation Metadata URL` value you copied into the `IdP metadata URL field` text box. Make sure `Identity Provider URL` is selected.

### Step 5: Assign users to Notion

To assign users to Notion:

1. In the Azure portal, select `Enterprise Applications`, and then select `All applications`. In the applications list, select `Notion`.

2. In the app's overview page, find the `Manage` section and select `Users and groups`.

3. Select `Add user`, then select `Users and groups` in the `Add Assignment` dialog.

4. In the `Users and groups dialog`, select from the Users list, then click the `Select` button at the bottom of the screen.

5. If you are expecting a role to be assigned to the users, you can select it from the `Select a role`**&#xA0;**&#x64;ropdown. If no role has been set up for this app, you see `Default Access` role selected.

6. In the `Add Assignment`**&#xA0;**&#x64;ialog, click the `Assign` button.

**Learn more**

* <https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/notion-tutorial>

## Google

### Step 1: Get Google identity provider (IdP) information

To get information from Google Identity Provider (IdP):

1. Make sure you're[ signed into an administrator account](https://support.google.com/a/answer/182076) to ensure your user account has the appropriate permissions.

2. In Admin Console, go to `Menu` → `Apps` → `Web and mobile apps`.

3. Enter Notion in the search field and select the Notion SAML app.

4. On the `Google Identity Provider` details page, download the IdP metadata file.

5. Open the file, `GoogleIDPMetadata.xml` in a compatible editor, then select and copy the contents of the file.

6. Leave the Admin Console open. You'll continue with the configuration wizard after performing the next step in the Notion application.

### Step 2: Set up Notion as SAML 2.0 service provider

To set up Notion as a SAML service provider:

1. In Notion, go to `Settings` → `General` if you’re on the Business Plan, or the `General` tab of your [organization settings](https://www.notion.com/help/organization-level-controls) if you’re on the Enterprise Plan.

2. In the `Allowed email domains` section, remove all email domains.

3. Select the `Identity` tab in `Settings` if you're on the Business Plan, or go to your organization settings → `General` → `SAML Single sign-on (SSO)` if you're on the Enterprise Plan.

4. Add a new domain and verify it. This should be the same as your Google Workspace domain.

5. In `SAML Single sign-on (SSO)`**&#x20;**&#x73;ettings, toggle the `Enable SAML SSO` on. This opens the `SAML SSO Configuration`**&#x20;**&#x64;ialog.

6. In the dialog, do the following:

   1. Under `Identity Provider Details`, select `IDP metadata XML`.

   2. Paste the contents of the GoogleIDPMetadata.xml file, (copied in step 1 above) into the IdP metadata XML text box.

   3. Copy and save the Assertion Consumer Service (ACS) URL. You'll need this when you complete the Google-side configuration in Admin console in step 3 below.

   4. Click `Save Changes`.

7. Ensure that the remaining options (Login method, Automatic account creation and Linked workspaces)**&#x20;**&#x63;ontain the desired values for your configuration.

### Step 3: Finish SSO configuration in Admin Console

To complete SSO configuration in Admin Console:

1. Return to the Admin Console browser tab.

2. On the `Google Identity Provider details`**&#x20;**&#x70;age, click `Continue`.

3. On the `Service provider details`**&#x20;**&#x70;age, replace the ACS URL with the ACS URL you copied from Notion in Step 2 above.

4. Click `Continue`.

5. On the `Attribute Mapping`**&#x20;**&#x70;age, click the `Select field`**&#x20;**&#x6D;enu and map the following Google directory attributes to their corresponding Notion attributes. Note that firstName, lastName, and email are required attributes.

   **Note**: The profilePhoto attribute can be used to add a user photo in Notion. To use it, [create a custom attribute](https://support.google.com/a/answer/6208725) and populate it in the user profile with the URL path to the photo, then map the custom attribute to profilePhoto.

6. If you’d like, click `Add Mapping` to add any additional mappings you need.

7. Click `Finish`.

**Note:** Regardless of how many group names you enter, the SAML response will only include groups that a user is a member of (directly or indirectly). Find more information [here →](https://support.google.com/a/answer/11143403)

### Step 4: Enable the Notion app

To enable Notion:

1. In the Admin console, go to `Menu`**&#xA0;**→**&#x20;**`Apps`**&#x20;**→**&#x20;**`Web and mobile apps`.

2. Select `Notion`.

3. Click `User access`.

4. To turn a service on or off for everyone in your organization, click `On for everyone`**&#x20;**&#x6F;r `Off for everyone`, and then click `Save`.

5. To optionally turn a service on or off for an organizational unit, select the organizational unit and change the Service status by selecting `On` or `Off`**.**

   * If the Service status is set to `Inherited`**&#x20;**&#x61;nd you want to keep the updated setting, even if the parent setting changes, click `Override`. If the Service status is set to `Overridden`, either click `Inherit`**&#x20;**&#x74;o revert to the same setting as its parent, or click `Save`**&#x20;**&#x74;o keep the new setting, even if the parent setting changes. Learn more about [organizational structure](https://support.google.com/a/answer/4352075).

6. Optionally turn on the service for a group of users. Use *access&#x20;*&#x67;roups to turn on a service for specific users within or across your organizational units. Learn more [here →](https://support.google.com/a/answer/9050643)

7. Ensure that your Notion user account email IDs match those in your Google domain.

**Learn more**

* <https://support.google.com/a/answer/12863596>

## Okta

### Step 1: Add the Notion app from Okta's application directory

To add Notion from Okta’s application directory:

1. Log in to Okta as an administrator, and go to the `Okta Admin console`.

2. Go to the `Application` tab, select `Browse App Catalog`, and search for Notion in the Okta app catalog.

3. Select the Notion app and click `Add integration`.

4. In the `General Settings` view, review the settings and click `Next`.

5. In the `Sign-on Options` view, select the `SAML 2.0` option.

6. Above the `Advanced Sign-on Settings`**&#x20;**&#x73;ectio&#x6E;**,** click on the `Identity Provider`**&#x20;**&#x6D;etadat&#x61;**.** This will open a new browser tab. Copy the link of the URL.

### Step 2: Configure SAML settings in Notion

To set up Notion settings for SAML:

1. In Notion, go to `Settings` → `General` if you’re on the Business Plan, or the `General` tab of your [organization settings](https://www.notion.com/help/organization-level-controls) if you’re on the Enterprise Plan.

2. In the `Allowed email domains` section, remove all email domains.

3. Select the `Identity` tab in `Settings` if you're on the Business Plan, or go to your organization settings → `General` → `SAML Single sign-on (SSO)` if you're on the Enterprise Plan.

4. Verify one or more domains. See instructions for domain verification [here](https://www.notion.com/help/domain-management#verify-a-domain-for-your-workspace) →

5. Toggle on `Enable SAML SSO` and the `SAML SSO Configuration` modal will automatically appear and prompt you to complete the set-up.

6. In the `Identity Provider Details` field of the SAML SSO Configuration model, provide the `Identity Provider URL` by pasting the `Identity Provider metadata` URL you copied in Step 1.

7. Click `Save changes`.

8. In the `Identity` tab, copy the `Workspace ID` identifier.

9. In `Okta Admin console` → `Advanced Sign-on Settings`**&#x20;**&#x73;ection, paste the workspace ID in the `Organization ID` text box.

10. In `Credentials details`**,** select `Email` from the `Application username format` dropdown.

11. Click `Done`.

You'll be able to assign users and groups to Notion in the `Okta - Assignments` tab.

**Learn more**

* <https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-Notion.html>

## OneLogin

**Note:** If you’re planning to [configure provisioning with SCIM](https://www.notion.com/help/set-up-identity-provider-for-scim#onelogin), please do that before you configure SAML SSO.

### Step 1: Create SAML integration

To create a new application integration:

1. Go to `Applications` → `Applications` and select the Notion app connector you already added.

   * If you haven't already configured provisioning, click the `Add App` button, search for Notion in the search box, and select the SAML 2.0 version of Notion. Click `Save`.

2. Navigate to the `SSO` tab and copy the `Issuer URL` value. Paste it somewhere to be retrieved later.

### Step 2: SAML settings

To configure SAML settings in Notion:

1. In Notion, go to `Settings` → `General` if you’re on the Business Plan, or the `General` tab of your [organization settings](https://www.notion.com/help/organization-level-controls) if you’re on the Enterprise Plan.

2. In the `Allowed email domains` section, remove all email domains.

3. Select the `Identity` tab in `Settings` if you're on the Business Plan, or go to your organization settings → `General` → `SAML Single sign-on (SSO)` if you're on the Enterprise Plan.

4. Verify one or more domains. See instructions for domain verification [here →](https://www.notion.com/help/domain-management#verify-a-domain-for-your-workspace)

5. Toggle on `Enable SAML SSO` and the `SAML SSO Configuration` modal will automatically appear and prompt you to complete the set-up.

6. The SAML SSO Configuration modal is divided into two parts:

   * The `Assertion Consumer Service (ACS) URL` needs to be entered in your Identity Provider (IdP) portal.

   * The `Identity Provider Details` is a field in which you need to provide either an IdP URL or IdP metadata XML.

### Step 3: Configure Notion app in OneLogin

To set up Notion in OneLogin:

1. Copy `Assertion Consumer Service (ACS) URL` from Notion.

2. Go back to the OneLogin Administration UI.

3. Navigate to the `Configuration` tab of the Notion app connector your just added to your OneLogin account.

4. Paste the `Assertion Consumer Service (ACS) URL` from Notion into the `Consumer URL` textbox.

5. Click `Save`.

6. Go back to the Notion `Edit SAML SSO`**&#x20;**&#x63;onfiguration settings.

7. Paste the `Issuer URL` you copied from the `SSO` tab in OneLogin URL into the `Identity Provider URL` textbox. Make sure `Identity Provider URL` is selected.

**Learn more**

* <https://onelogin.service-now.com/support?id=kb_article&sys_id=db438e2b87938d50695f0f66cebb35ae>

## Rippling

For detailed documentation, visit Rippling's website [here →](https://www.rippling.com/app-shop/app/notion)

## TrustLogin

For detailed documentation, visit TrustLogin’s website [here →](https://support.trustlogin.com/hc/ja/articles/17155837255193-Notion-%E3%81%AESAML%E8%AA%8D%E8%A8%BC%E3%81%AE%E8%A8%AD%E5%AE%9A%E6%96%B9%E6%B3%95)

## Custom SAML SSO configuration

If you don't use one of Notion’s supported SAML providers, you can also configure your IdP to use SAML with Notion.

### Step 1: Set up your IdP

Your IdP must support the SAML 2.0 spec to be used with Notion. To set up your IdP:

1. Configure the ACS URL to the value Assertion Consumer Service (ACS) URL from Notion. You can find this in `Settings` → `Identity & Provisioning` → `Edit SAML SSO Configuration`.

2. Configure `NameID` to `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`.

   1. Similarly, configure `username` to `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`.

3. Configure `EntityID` to [https://notion.so/sso/saml](https://stg.notion.so/sso/saml). You can find this in `Settings` → the bottom of `Identity & Provisioning`.

4. Configure the following attributes:

   * `emailAddress`: This is a user's email address. Most IdPs set this by default.

   * (Optional) `firstName`

   * (Optional) `lastName`

   * (Optional) `profilePicture`

5. Copy the IdP metadata URL or IdP metadata XML for next steps.

### Step 2: Set up SAML in Notion

To set up SAML in Notion:

1. In Notion, go to `Settings` → `General` if you’re on the Business Plan, or the `General` tab of your [organization settings](https://www.notion.com/help/organization-level-controls) if you’re on the Enterprise Plan.

2. In the `Allowed email domains`**&#x20;**&#x73;ection, add new email domains and follow the prompts to verify them. These must be email domains of your users logging into Notion.

3. Select the `Identity` tab in `Settings` if you're on the Business Plan, or go to your organization settings → `General` → `SAML Single sign-on (SSO)` if you're on the Enterprise Plan.

4. In `SAML Single sign-on (SSO)`**&#xA0;**&#x73;ettings, toggle `Enable SAML SSO` on. This will open the SAML SSO Configuratio&#x6E;**&#xA0;**&#x64;ialog.

5. Under `Identity Provider Details`, input the IdP metadata URL or IdP metadata XML from your IdP.

6. Make sure you provide your desired inputs for `Login method`, `Automatic account creation`, and `Linked workspaces`.

## Switch identity providers

To switch identity providers:

1. In Notion, go to `Settings` → `General` if you’re on the Business Plan, or the `General` tab of your [organization settings](https://www.notion.com/help/organization-level-controls) if you’re on the Enterprise Plan.

2. Select the `Identity` tab in `Settings` if you're on the Business Plan, or go to your organization settings → `General` → `SAML Single sign-on (SSO)` if you're on the Enterprise Plan.

3. Enter your new information, then select `Save changes`.

When switching to a new IdP, we recommend that:

* SSO not be enforced during the transition, so you can minimize the risk of locking users out.

* Email addresses for the users under your new IdP match the user’s email in Notion.

**Note**: Changing identity providers does not end user sessions or deactivate users.

## Troubleshooting

If you encounter errors when setting up SAML SSO, check to make sure your IdP's metadata, SAML requests and responses are valid XML against the SAML XSD schemas. You can do so using [this online tool](https://www.samltool.com/validate_xml.php).

Note that we do not support the `EntitiesDescriptor` element. If your IdP's metadata contains this element, extract the contained `EntityDescriptor` element and try again.

**Learn more**

* [SAML SSO](https://www.notion.com/help/saml-sso-configuration)


## FAQs

### Are profile photos transmitted to Notion from the IdP?

Yes, profilePhoto is an optional custom attribute. You may assign this attribute to a corresponding attribute in your IdP, provided the attribute contains the URL to an image. If the profilePhoto field is set, this image will replace the avatar in Notion when the user signs in using SAML SSO.


### Can I still log in to Notion if my Identity Provider (IdP) is out of service?

Yes, even with SAML enforced, workspace owners have the option to log in with email. A workspace owner can change the SAML configuration to disable `Enforce SAML` so users can log in with email again.
