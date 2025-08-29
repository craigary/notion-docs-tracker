---
title: Notion AI Connectors
emoji: 👣
description: With Notion AI Connectors, you can use Notion as a single place to find the information you need — even if it lives outside your workspace 👣
url: https://www.notion.com/help/notion-ai-connectors
key: help:notion-ai-connectors
coverImage: https://images.ctfassets.net/spoqsaf9291f/3k1FtgOXYJLRMQPTlNLAqf/f93d19f3dfa0e08592f42aa496f428bd/Reference_Visuals_Group_149.png
category: Notion AI
---

**Note:** To connect third-party apps to Notion AI, you must be on the Business or Enterprise Plan.

Notion Mail is **free to connect** for all plans; you’ll need to sign up for Notion Mail before setting up the connection.

Ready to get started with Notion AI connectors? You’ll find app-specific information and instructions [here →](https://www.notion.com/help/category/notion-ai)

## What are Notion AI Connectors?

Today, [Notion AI](https://www.notion.com/help/notion-ai-faqs) enables you to ask any questions about the content in your Notion workspace. With Notion AI Connectors, when you ask a question, Notion AI will also surface relevant information from your connected apps, citing specific sources it referenced.

Notion AI Connectors are available for the following apps:

| **Chat**                                                                               | **Knowledge**                                                                                                            | **Projects**                                                         | **Notion apps**                                                                              |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Slack](https://www.notion.com/help/notion-ai-connectors-for-slack)                    | [Google Drive](https://www.notion.com/help/notion-ai-connectors-for-google-drive)                                        | [Jira](https://www.notion.com/help/jira-ai-connector)                | [Notion Mail](https://www.notion.com/help/notion-mail-ai-connector) (available on all plans) |
| [Microsoft Teams](https://www.notion.com/help/notion-ai-connector-for-microsoft-teams) | [Microsoft SharePoint & OneDrive](https://www.notion.com/help/notion-ai-connector-for-microsoft-sharepoint-and-onedrive) | [GitHub](https://www.notion.com/help/notion-ai-connector-for-github) |                                                                                              |
|                                                                                        |                                                                                                                          | [Linear](https://www.notion.com/help/notion-ai-connector-for-linear) |                                                                                              |

You can search your connected apps via Notion AI Connectors in the following places:

* The Notion AI chat in the bottom right of Notion.

* The Notion AI widget at the top of `Home`.

* `Search` in your sidebar.

## Set up and manage Notion AI Connectors

**Note:**

* To set up a Notion AI connector, you need to be the owner of your Notion workspace. You’ll also need to have admin rights in the app that you’re trying to connect.

* Depending on how much content is in your connected app, it can take up to 72 hours for Notion AI connectors to ingest.

Go to `Settings` → `Notion AI` to manage all of your Notion AI Connectors in one place. From here, you can:

* See what apps you’ve already connected.

* Select `⚙️` next to an existing connector to make adjustments to the connection or to disconnect.

* Select `+` next to an app you haven’t yet set up to connect it.

AI Connectors are installed for the workspace and is unrelated to the workspace owner that installed it.

If the workspace owner who setup the connection leaves, the AI connector will continue to work as is.

The disconnection only happens if a workspace owner intentionally uninstalls it on the 3rd party app or `Disconnects` the AI connector in the `Notion AI` settings.

The only exception is Google Drive where Notion will automatically find another workspace owner with the correct permissions to re-establish the connection.

## Limitations and best practices

It’s important to understand what Notion AI is most helpful for, as well as what Notion AI might not be able to do. To make the most out of Notion AI Connectors, make note of the following:

* Notion AI Connectors are best for finding and summarizing information. They’re not meant to run complex calculations or perform data analysis.

* It’s best to ask specific questions about specific information in your apps. For example, you could ask Notion AI "Can you find me the action items from this thread?” with a link to a particular Slack conversation.

* Notion AI might have a more difficult time with aggregating lots of information from an app or multiple apps.

- Each app has its own best practices, so make sure to read the [articles for each app](https://www.notion.com/help/category/notion-ai) you want to connect to learn more.

- You can also pick up some prompting skills by reading [this guide →](https://www.notion.com/help/guides/how-to-get-better-answers-from-notion-ai)

**Learn more**

* [What is Notion AI?](https://www.notion.com/help/notion-ai-faqs)

* [Notion AI](https://www.notion.com/help/category/notion-ai)


## FAQs

### Why connect third-party apps with Notion AI?

Notion AI enables you to ask any questions about the content in your Notion workspace. When you choose to connect third-party apps like Slack, Notion AI will also surface relevant information from those third-party data sources you enable, citing the specific messages it referenced.

Notion’s collection of AI products and features like third-party connections to Notion AI appear seamlessly in your workspace but leverage technology from several AI Subprocessors. Read our [Notion AI security and privacy practices](https://www.notion.com/help/notion-ai-security-practices) for more information, as well as our [list of subprocessors](https://notion.notion.site/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734). Our goal is to protect your data and workspaces while allowing you to be more effective in your organizations.


### Will my data be used to train Notion’s models?

No. We only process your Customer Data to provide the functionality. We do not process your Customer Data to train our models and do not allow our sub-processors to process your Customer Data to train their models. View our [terms and privacy pages](https://notion.notion.site/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac) for more information.


### Are existing permissions respected when using Notion AI Connectors?

Notion AI will honor existing permissions according to our existing [Notion AI Security Practices](https://www.notion.com/help/notion-ai-security-practices). Users will not be able to generate content or receive responses based on resources they do not have access to.

Specific to third party content, Notion AI is handling both private and public content with security in mind, only ingesting content according to the permissions mapping between each connected app and Notion.

Similar to our core Notion AI product, we store create and store embeddings in a vector database hosted by Turbopuffer, which powers the ability to provide responses to questions that leverage third party content. Turbopuffer has been vetted by our security team as well as an external auditor to obtain their SOC2 Type II certification. These embeddings allow for efficient searches and comparisons across different pieces of text to provide accurate and relevant responses to your questions.


### How far back can the integration access data?

Generally, the integration can access information dating back one year from the setup date. For example, if you connect with Notion AI on June 1, 2024, you'll have access to content from June 1, 2023 onward.

For specifics, you can reference articles for each Notion AI Connector [here](https://www.notion.com/help/category/notion-ai).


### How long does it take for new content to appear in Notion AI?

Generally, new content is searchable and appears in Notion AI on an hourly basis. Some Connectors (Slack, GitHub, Teams) update every 30 minutes, but indexing can take up to 36 hours in some cases.

For specifics, you can reference articles for each Notion AI Connector [here](https://www.notion.com/help/category/notion-ai).


### What happens to my data if I disconnect?

Notion treats all of your content with the privacy principle of data minimization in mind. If you decide to disconnect a tool from Notion AI, your content will become unsearchable (for some AI Connectors, this can take up to one hour). Additionally, your data will be deleted within a day of disconnecting.
