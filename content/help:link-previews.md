---
title: Link previews
emoji: 🔗
description: See live, synced visualizations of links from popular platforms right in your workspace — no need to switch between apps or lose context 🔗
url: https://www.notion.com/help/link-previews
key: help:link-previews
coverImage: https://images.ctfassets.net/spoqsaf9291f/2m3dDw9vnYBiZRupN7od9t/11b6a3d794ba5d112d276e9fe1c90cf2/Link_previews.png
category: Data & integrations
---

Link previews allow you to see live, synced visualizations of links directly in Notion.**&#x20;This is currently supported for several platforms:**

|                       |                                   |
| --------------------- | --------------------------------- |
| GitHub                | Jira                              |
| Slack                 | Asana                             |
| Trello                | Linear                            |
| Zoom                  | Figma                             |
| Adobe XD              | Dropbox                           |
| OneDrive & Sharepoint | Pitch                             |
| Amplitude             | Hex                               |
| GRID                  | GitLab                            |
| Box                   | Lucid (Lucidspark and Lucidchart) |
| Whimsical             | ClickUp                           |
| Zendesk               |                                   |

**Note:&#x20;**&#x55;<!-- -->sers will need edit access in<!-- --> <!-- -->SharePoint and OneDrive in order to use link previews.

## Pasting a link as a preview

![Connect to app](https://images.ctfassets.net/spoqsaf9291f/2KOxOx9KiZFrVoEkTBIXD3/dcea560337723daad6249caa3f68dd86/Connect_to_app.png)

1. Copy a link from any of the supported platforms. Paste it into Notion and select `Paste as: Preview`.

2. The first time that you paste a link from one of these platforms, you'll see a button that asks you to connect to the app.

   ![Authenticate connected app](https://images.ctfassets.net/spoqsaf9291f/1b765E5vTZbhEVc6SX44AO/66220c57aacb39d70ea8f0b90ab9f9d9/Authenticate_connected_app.png)

3. Once you click the button to connect, you'll be redirected to a browser window. Here, the app will ask for authentication and permission to display content in Notion.

4. When you've authenticated with the app, you'll see a detailed preview of the linked content. This preview updates as changes are made to any relevant fields.

**Note:** Once you've authenticated a connected app, anyone who can view your Notion page will be able to see corresponding content that you've pasted as a link preview.

In some cases, information will be abstracted (e.g., channel names from Slack private channels and DMs).

## Pasting a link as a mention

In addition to previews, you can also paste links from these platforms as mentions. These provide a more condensed visualization of the content in the link.

![Paste link mention](https://images.ctfassets.net/spoqsaf9291f/0IxEMrgaadrWZo2KNkJWX/8217a3d6e33f96844d11441946b7afe7/Paste_link_mention.png)

1. Copy a link from any of the supported platforms. Paste it into Notion and you'll see the option to `Paste as: Mention`.

2. Similarly to previews, you'll have to authenticate the app the very first time you paste a corresponding link in Notion. Click the button to open the authentication window and grant the necessary permissions. Afterward, you'll see the link mention pop up!

**Tip:** You can paste links as mentions directly inline, next to other text!


## FAQs

### I’m receiving an “Access denied” or “Content not found” error in my link preview.

There are two possible reasons for this:

1. You may not have authenticated with the account that has access. You can connect multiple accounts either through `Settings` → `My connections`, or the error drop down.

2. Your organization may have limited access to content via 3rd party integrations or IP addresses. Please confirm with your workspace or organization administrator and ask to have Notion’s integration approved if this is the case. Here are instructions for specific integrations: [GitHub, ](https://docs.github.com/en/organizations/keeping-your-organization-secure)[Jira, ](https://support.atlassian.com/security-and-access-policies/docs/manage-your-users-third-party-apps/)[Slack, ](https://slack.com/help/articles/222386767-Manage-app-approval-for-your-workspace)[Asana, ](https://asana.com/guide/help/premium/admin-console#gl-apps)[Trello.](https://help.trello.com/article/1078-enterprise-admin-dashboard)


### Can I add more than one login for a link preview integration?

You can! You can do so via `Settings` → `My connections`. For the desired integration, select “Connect another account”.

**Note**: Some applications do not support multi-account login in the browser (e.g. GitHub), so you might need to logout of whichever account is currently logged in on your browser to be prompted to login with a different account.

We’ll determine which of your accounts to use to preview given resources and show an error if none of them are successful.


### I’m receiving a general  “Can’t load preview” error in my link preview.

Run through these steps to try to resolve.

1. Confirm you’ve authenticated with the correct account for the resource.

2. Confirm no access restrictions for your organization.

3. Delete your integration in Notion via the `My connection` settings. You may also want to revoke the integration the corresponding platform: [GitHub, ](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth)[Jira, ](https://confluence.atlassian.com/jirasoftwareserver/allowing-oauth-access-939938965.html#AllowingOAuthaccess-revokingtokensRevokingOAuthaccesstokens)[Slack, ](https://slack.com/help/articles/360003125231-Remove-apps-and-custom-integrations-from-your-workspace)[Asana, ](https://asana.com/guide/help/fundamentals/settings#gl-apps)[Trello.](https://help.trello.com/article/1183-revoking-a-trello-token)

4. Try to unfurl again.

5. Finally, if all else fails, reach out to support! Unfortunately, we cannot help resolve errors related to **Access denied** or **Content not found.** Please provide the following information when reaching out to support:

   * Integration you’re trying to use

   * Error message and code

   * URL you’re trying to preview (if possible)
