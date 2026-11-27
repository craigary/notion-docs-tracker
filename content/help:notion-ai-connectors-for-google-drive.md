---
title: "Connect Google Drive to Notion AI"
emoji: null
description: "Get answers from your Google Drive files without leaving Notion."
url: "https://www.notion.com/help/notion-ai-connectors-for-google-drive"
key: "help:notion-ai-connectors-for-google-drive"
coverImage: null
category: "Notion AI Connectors"
categoryKey: "category:notion-ai-connectors"
---

## Connect Google Drive to Notion AI

To connect Google Drive to Notion AI:

* You must be a Google Drive admin and Notion workspace owner.

* Your workspace must be on the Business or Enterprise Plan.

* Your organization must be on a paid Google Workspace plan. [See Google Workspace's paid plans →](https://workspace.google.com/lp/business/)

## How do I connect my Google Drive?

The Google Drive AI Connector supports all Google Drive file types, including Google Docs, Slides, Sheets, and uploaded files like PDF, .docx, .pptx, .xlsx, and .csv. Uploaded files larger than 10 MB aren't supported.

1. Go to `Settings` → `Notion AI`.

2. Select `+` next to `Google Drive`.

   ![hc: google drive connector entry point](https://images.ctfassets.net/spoqsaf9291f/7ffcaR0NLarMtpPwqZfc8h/07f46a0a0e5220bb1e8c926026e0ee19/Help_Center_Updates_for_AI_Connectors.jpg)

3. You'll be taken to the Google Marketplace. Make sure you’re in the correct Google workspace, and keep Notion open during setup.

   ![hc: notion ai connectors](https://images.ctfassets.net/spoqsaf9291f/6lILP8AeSe4OZWZNqaaZPp/dee472fe60313196a121a60dfe4babba/Help_Existing_AI_Connectors__1_.png)

4. Select `Install` → `All users in their organization`.****

   * We recommend this setting. If a group isn't selected, those people can't use the Google Drive connector, and Notion AI won't be able to find their files.

5. Return to Notion when you're done.

Connection time depends on how many users and files are in your Google Drive. Most connections complete within 36 hours, but large organizations can take longer.

[Target audiences](https://support.google.com/a/answer/9934697?hl=en) are not supported (for example, 20 individual users added to a target audience named “Sales team”). Even if a file has been shared with a target audience, only people who have access to the file directly or through a group can search for it.

### Which content from Google Drive can I connect to Notion AI?

* If you select `All users in their organization` while you're connecting Google Drive to Notion AI, Notion AI can search all Google Docs, Slides, Sheets, and files in your drive.

* Notion AI can find a file if its owner is in a user group or organizational unit you selected in Google Workspace. For files in a shared drive, a selected user must be a contributor, manager, or content manager of that drive.

* You can exclude certain shared drives in Notion's settings.

* You can exclude user groups and organizational units in Google's settings. If you leave a user group or organizational unit out, Notion AI won't be able to find their files, and those people won't be able to use the connector.

* Files shared with `Anyone with link `need to be opened at least once before Notion AI can find them.

## Where can I use my Google Drive AI Connector?

You can search Google Drive with Notion AI in the following places:

* The Notion AI chat in the bottom of Notion.

* The Notion AI chat in your sidebar (Home tab or Chats tab).

* Search in your sidebar.

You can narrow your search to just Google Drive by opening the `All sources` toggle in chat and Home and selecting `Google Drive`. You can also filter Notion AI search results to show only information from Google Drive.

## Best practices & example prompts

The Google Drive AI Connector is most helpful for gathering insights from presentations, reports, and other files you have in Google Drive. It can’t analyze the data inside spreadsheets.

Try these prompts for Notion AI:

* "What were the key points from last month's marketing presentation?"

* "Summarize our ARR growth from recent documents."

## Troubleshooting

If you installed the Notion AI app in your Google Workspace but can't finish setup in Notion, check the following:

* You forgot to select yourself in Google Workspace while installing the app.

* The Google Workspace admin who installed the app isn't in your Notion workspace. Try again with an account that belongs to both your Google Workspace and your Notion workspace.

**More resources**

* [Notion AI Connectors](https://www.notion.com/help/notion-ai-connectors)

* [What is Notion AI?](https://www.notion.com/help/notion-ai-faqs)


## FAQs

### Is there a way for me to connect Google Drive to Notion AI without having super admin permissions?

To set this up:

1. A Google Workspace Super Admin installs the Notion AI app from the Google Workspace Marketplace.

2. A Google admin with the privileges listed below can then initiate the connection in Notion.

Ask your super admin to create a role with the privileges listed below and assign it to the person who will initiate the connection in Notion. This person must also be a Notion workspace owner.

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

Notion AI will index the following files:

* **My Drive files:&#x20;**&#x55;ser-owned files that aren’t in a shared drive. The file must be owned by a user selected in the user group or organizational unit in Google Workspace.

* **Shared drive files:** Team-owned files in a shared drive. Shared drives are included by default unless you exclude specific drives in the connector settings. Notion AI can index shared drive files when at least one selected Google Workspace user has contributor, content manager, or manager access to that shared drive.


### How do shared drives work?

To connect a shared drive to Notion AI:

* The shared drive must be in your Google Workspace.

* Shared drives must be included during the initial setup.

* At least one shared drive owner must be selected among the users and groups.

* At least one selected Google Workspace user must have contributor, content manager, or manager access to that shared drive.

Notion AI will respect the sharing permissions of both the shared drive and the files in it.


### Why can’t I see a certain Google Drive file?

Some files can only be opened with a direct link. Open the file at least once. After that, you can search for it with Notion AI.


### What content in Google Drive is supported with the AI Connector?

The Google Drive AI Connector supports all Google Drive file types, including Google Docs, Slides, Sheets, and uploaded files like PDF, .docx, .pptx, .xlsx, and .csv.


### I connected the wrong Notion workspace. How can I disconnect my Google Drive Workspace from my Notion workspace?

To disconnect your Google Drive Workspace, go to `Settings` → `Notion AI`. Select `⚙️` next to `Google Drive` → `Settings` → `Disconnect`.


### How do the permission settings work?

Google Drive permissions are always respected. Notion AI can only surface a file to someone who already has access to it in Google Drive.

Here’s how different Google Drive sharing settings work:

* **Restricted:** Only people added directly to the file can access it.

* **{Company Name}:** Anyone in the company can access the file.

  * **Can find in search results:&#x20;**&#x41;nyone in the company can find and open it.

  * **Must have link:&#x20;**&#x50;eople can open it only if they have the link (and have opened it at least once).

* **Anyone with link:** Anyone in the company can access the file if they have the link and have opened it at least once.


### How long does it take for the connection to complete?

The first sync usually takes about 36 hours. Large organizations can take longer.


### How long does it take for new content to appear?

New content in Google Drive syncs about once an hour, then appears in Notion AI search.


### Will all future content or shared/user drives be available?

Yes. When your organization adds a new shared drive or user drive, it syncs to Notion AI automatically. You can change this in your settings.


### Can I edit the connection after setup?

You can edit your connection by going to `Settings` → `Notion AI`. Select `⚙️` next to Google Drive.


### Can I add connect multiple Notion workspaces to my Google Workspace?

No. You can only connect one Notion workspace to one Google Workspace.


### Does Notion AI respect Google Drive permissions?

Yes. Notion AI always respects Google Drive permissions. It can only surface a file to someone who already has access to it in Google Drive. Notion AI will also honor existing permissions according to our Notion AI Security Practices. Users won't be able to generate content or get responses based on resources they don't have access to.


### How does Notion store or reference my Google Drive data in its systems?

Like our core Notion AI product, we create and store embeddings in a vector database hosted by Turbopuffer. These embeddings power the ability to respond to questions using third party content like Google Drive files. Turbopuffer has been vetted by our security team and an external auditor, and has obtained SOC 2 Type II certification.


### Which account should I use to initiate the connection for Google Drive in Notion?

The account used to initiate the connection is stored in Notion as the customer admin email. We use this email for future updates, so choose an address that is unlikely to change and will remain active to avoid disruption if, for example, an admin leaves the company.

A service email that has admin privileges in your Google Workspace and won't change is a good choice.
