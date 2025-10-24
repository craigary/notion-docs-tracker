---
title: Google Drive AI Connector
emoji: 📂
description: Get answers from your Google Drive files without having to leave Notion 📂
url: https://www.notion.com/help/notion-ai-connectors-for-google-drive
key: help:notion-ai-connectors-for-google-drive
coverImage: https://images.ctfassets.net/spoqsaf9291f/2cW4DFrsu1VSoECYIWXNFx/d944f19f651723732e16ffb25b896da6/Google_Drive_connectors__2_.png
category: Notion AI
---

**Note:** This feature is only available on the Business or Enterprise Plan.

## Connect Google Drive to Notion AI

**Who can connect Google Drive to Notion AI?**

* You must be a Google Drive admin and Notion workspace owner.

* Your workspace must be on the Business or Enterprise Plan.

* You must be on one of Google Workspace’s paid plans as listed [here](https://workspace.google.com/lp/business/).

**How do I connect my Google Drive?**

**Note:&#x20;**&#x54;he Google Drive AI Connector supports all Google Drive file types, including Google Docs, Slides, Sheets, and uploaded files like PDF, .docx, .pptx, .xlsx, and .csv.

1. Go to `Settings` → `Notion AI`.

2. Select `+` next to `Google Drive`.

   ![hc: google drive connector entry point](https://images.ctfassets.net/spoqsaf9291f/7ffcaR0NLarMtpPwqZfc8h/07f46a0a0e5220bb1e8c926026e0ee19/Help_Center_Updates_for_AI_Connectors.jpg)

3. You'll be taken to the Google Marketplace. Make sure they’re in the right Google workspace. **Don't close Notion during the setup process!**

   ![hc: notion ai connectors](https://images.ctfassets.net/spoqsaf9291f/6lILP8AeSe4OZWZNqaaZPp/dee472fe60313196a121a60dfe4babba/Help_Existing_AI_Connectors__1_.png)

4. Click `Install` → `All users in their organization`.**&#x20;**&#x57;e recommend this setting since groups that aren't selected won't be able to use the Notion AI Connector feature in Notion for Google Drive, and files owned by them won't be available via Notion AI.

5. Return to Notion when you're done.

The connection can take up to 36 hours to complete.

**Note:** [Target audiences](https://support.google.com/a/answer/9934697?hl=en) are not supporte&#x64;*&#x20;*(for example, 20 individual users added to a target audience named `Sales team`). <!-- -->Even if a file has been shared with a target audience, it’ll only be searchable for people who have access to the file directly or via a group.

### Which content from Google Drive can be connected to Notion AI?

* If you select `All users in their organization` while you're connecting Google Drive to Notion AI, all Google Docs, Slides, Sheets, and files in your drive will be ingested.

* Notion AI can access information if the file is owned by a user that was selected in the user group or organizational unit in the Google Workspace. If the file belongs to a shared drive, the user selected in the user group must be a contributor, manager, or content manager.

* You can exclude certain shared drives in Notion's settings.

* You can exclude user groups and organizational units in Google's settings. For all user groups and organizational units you choose not to include, Notion won't ingest files that are owned by this audience, and this audience also won't be able to use the Notion AI Connector.

* Files with `Anyone with link` permission must have been visited at least once before they become searchable via Notion AI.

## Where can I use my Google Drive AI Connector?

You can search Google Drive via Notion AI Connectors in the following places:

* The Notion AI chat in the bottom right of Notion.

* The Notion AI widget at the top of `Home`.

* `Search` in your sidebar.

You can narrow your search to just Google Drive by opening the `All sources` toggle in chat and `Home` and selecting `Google Drive`. You can also filter Notion AI `Search` results to show only information from Google Drive.

## Best practices and example prompts

The Google Drive AI Connector is most helpful for gathering insights from presentations, reports, and other files you have in Google Drive. It's not able to perform data analysis on spreadsheets.

You could try prompting Notion AI with the following:

* "What were the key points from last month's marketing presentation?"

* "Summarize our ARR growth from recent documents."

## Troubleshooting

If you've installed the Notion AI app in your Google Workspace but can't complete the setup in Notion, this may be due to the following:

* You forgot to select yourself in Google Workspace while installing the app.

* Your Google Workspace admin is a user who doesn't exist in Notion. If this is the case, you can try again by installing the app under a user who is both in your Google Workspace and Notion workspace.

**Learn more**

* [Notion AI Connectors](https://www.notion.com/help/notion-ai-connectors)

* [What is Notion AI?](https://www.notion.com/help/notion-ai-faqs)


## FAQs

### Is there a way for me to connect Google Drive to Notion AI without having super admin permissions?

The Google Drive admin with super admin must install the Notion AI app on Google Marketplace, however a role with the correct privileges can initiate the connection between Notion and Google Drive.

**Please ask your super admin to create a new role with the privileges listed below** and assign it to the person who can then initiate the connection in Notion. **This person must also be a Notion Workspace owner.**

**Privilege name:**

* Users → Select Read

* Users → Select Groups

* Services → Drives and Docs → Select Settings

* Services → Security Center → Activity Rules → Select Manage and View → This user has full administrative rights for Security Centre → Audit and Investigation → Manage → Select Drive

  * Under Manage → View → Select Admin + Select Drive

* Google Workspace Marketplace → Select Settings

**Admin API Privileges:**

* Reports → Select Reports

* Reports → Manager customer → Select Read customer and all the settings under it

* Groups → Select Groups

* Organization Units → Select Read

* Users → Select Read


### What does Notion AI have access to?

Notion AI will only have access to a file if both conditions are satisfied:

* The file is owned by a user that was selected in the user group or organizational unit in the Google Workspace. If the file is owned by a shared drive, the user selected in the user group must be either a contributor, manager, or content manager.

* The shared drive is selected in Notion AI (this is true by default). If you select All users in their organization while you’re connecting Google Drive to Notion AI, all Google Docs, Slides, and Sheets in that drive will be ingested.


### Why can’t I see a certain Google Drive file?

It’s possible for a file to only be accessible if you have the direct link. If you’ve visited the file at least once before, you should be able to search that specific file.


### What content in Google Drive is supported with the AI Connector?

The Google Drive AI Connector supports all Google Drive file types, including Google Docs, Slides, Sheets, and uploaded files like PDF, .docx, .pptx, .xlsx, and .csv.


### I connected the wrong Notion workspace. How can I disconnect my Google Drive Workspace from my Notion workspace?

To disconnect your Google Drive Workspace, go to `Settings` → `Notion AI`. Select `⚙️` next to Google Drive → `Settings` → `Disconnect`.


### How do the permission settings work?

All permissions in a Google document will be respected for individual users and general access types listed below:

* **Restricted:** Only users who have been directly added to the document will have access.

* **{Company Name}:** Anyone in the company can access the document.

  * **Can find in search results:** All users can access.

  * **Must have link to access:&#x20;**&#x55;sers will have access to the doc only if they have visited the doc at least once.

* **Anyone with link:** Anyone in the company can access the document if they have visited the document at least once.


### How long does it take for the integration to complete?

Upon initial connection, it will take the integration approximately 36 hours to sync. Once the integration syncs, you can expect real-time updates to your Google Drive to be reflected in Notion AI on an ongoing basis.


### How long does it take for new content to appear?

New content added to Google documents will update every hour and will be available in searches then in Notion AI.


### Will all future content or shared/user drives be available?

Yes. Anytime your organization sets up up a new shared or user-level drive, it will be synced to Notion AI. You can edit this option in your settings.


### Can I edit the connection after set up?

You can edit your connection by going to `Settings` → `Notion AI`. Select `⚙️` next to Google Drive.


### Can I add connect multiple Notion workspaces to my Google Workspace?

Not at this time. The workspace admin will only be able to connect one Notion workspace to one Google Workspace.


### Does Notion AI respect Google Drive permissions?

Notion AI will honor existing permissions according to our existing [Notion AI Security Practices](https://www.notion.com/help/notion-ai-security-practices). Users will not be able to generate content or receive responses based on resources they do not have access to.\
Specific to third party content, Notion AI is handling both private and public content with security in mind, only ingesting content according to the permissions mapping between Google Drive and Notion users.


### How do shared drives work?

To connect a shared drive to Notion AI:

* The drive must live inside your Google Workspace.

* Shared drives must be included during initial setup.

* At least one owner of the shared driver must be selected among the users and groups.

* At least one user selected in the user groups must be a contributor, content manager, or manager for the shared drive.

We will respect the permission settings of the drive (if the shared drive was directly shared with you) or the file (if the file has been shared directly with you or with a group that you are a part of).


### How does Notion store or reference my Google Drive data in its systems?

Similar to our core Notion AI product, we store create and store embeddings in a vector database hosted by Turbopuffer, which powers the ability to provide responses to questions that leverage third party content (like in Google Drive). Turbopuffer has been vetted by our security team as well as an external auditor to obtain their SOC2 Type II certification. [Learn more about Turbopuffer’s security here](https://turbopuffer.com/docs/security) →


### Which account should I use to initiate the connection for Google Drive in Notion?

Whichever account is used to initiate connection will be stored in the Notion system as a customer admin email, and we will use this admin email for future updates, so it's important for customers to provide an email that won't change in terms of permissions or active status so that service isn't impacted when, for example, an admin leaves the company.

You can use any service email that has admin privileges to your Google Workspace and will remain the same, like email protected.
