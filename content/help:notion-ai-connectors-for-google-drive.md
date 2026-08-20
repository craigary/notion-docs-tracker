---
title: "Connect Google Drive to Notion AI"
emoji: null
description: null
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