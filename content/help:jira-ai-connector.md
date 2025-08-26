---
title: Jira AI Connector (beta)
emoji: 🎟️
description: Connect Notion AI with your Jira site to seamlessly bring in information from your projects, issues, and tasks 🎟️
url: https://www.notion.com/help/jira-ai-connector
key: help:jira-ai-connector
coverImage: https://images.ctfassets.net/spoqsaf9291f/6x1aZwUhMiZmaRHStYIDK/9863ed867e5c62d8f6f5636cffa8f94c/Notion_AI_Connector_for_Jira.png
category: Notion AI
---

**Note:**

* This feature is only available for users on the Business Plan or Enterprise Plan.

* The Notion AI connector for Jira is currently in beta and subject to the beta terms of your agreement.

## Connect Jira to Notion AI

**Who can connect Jira to Notion AI?**

* You must be a Jira admin and Notion workspace owner.

* Your workspace must be on the Business or Enterprise Plan and have more than one member.

**How do I connect my Jira site?**

**Note:** Notion AI connectors support all Jira cloud products, including:

* Jira Software

* Jira Service Management

* Jira Product Discovery

* Jira Work Management

Projects, issues, and comments can be indexed.

To connect Jira to your Notion workspace:

1. Go to `Settings` → `Notion AI`.

2. Select `+` next to `Jira`.

   ![hc: jira connector entry point](https://images.ctfassets.net/spoqsaf9291f/2JpYNtXNADSZVCXgaTk3fN/efdb26a6d953a2977903d563f8404405/Jira_Settings_V2.jpeg)

3. You'll be taken to Jira. **Don't close Notion during the setup process!**

   ![hc: connector setup in jira](https://images.ctfassets.net/spoqsaf9291f/145EyAVWz8WeMBoIknaLCj/4b12a1aa41b1b1fc8fc60ae34c537ccd/Help_Existing_AI_Connectors__2_.png)

4. A page to the Jira Marketplace for the Notion AI application should automatically open. Install the Notion AI application by clicking `Get it now` and select the Jira Site that you’d like to connect.

5. Copy your Jira Site URL.

6. Navigate back to Notion and click `Check installation`.

7. Paste in your Jira Site URL.

   ![hc: paste jira site url](https://images.ctfassets.net/spoqsaf9291f/1DZizh3gIH0DXHKwpWnQY1/10f0b1a9ac6add325499a14c08b9bcdd/Frame.png)

8. To fetch your Admin Personal access token, navigate to <https://id.atlassian.com/manage-profile/security/api-tokens>.

9. After landing on this page, click `Create API Token`.

   ![hc: create api token jira](https://images.ctfassets.net/spoqsaf9291f/7d2O3IwX8eI6905JF4SWuN/b9eecb7b2cbe0b695a9aca3af5bbccbe/image.png)

10. Assign a name and set the expiration date to one year from now.

11. Copy your API token.

12. Paste the API token into Notion.

13. Click `Check credentials`.

14. Notion will install a Jira Forge app named Notion-AI-Connector using the credentials provided. The connection can take up to 36 hours to complete. You can manage the connection by opening Notion AI at the bottom of your screen and clicking on `•••` → `Connect Jira` → `Settings`.

### What content from Jira can be connected to Notion AI?

All Jira Cloud products are supported: Jira Software, Jira Product Discovery, Jira Service Management, Jira Work Management.

The Jira AI Connector can search:

* Company managed Projects

* Team managed Projects

* Jira issues with default details

* Issue security and permissioning

* Custom fields

* Issue comments

The Jira AI Connector **does not support**:

* Jira on-premise products: Jira Server, Jira Data Center

* Jira Dashboards

* Jira Filters

* Jira Boards: Notion AI will only cite specific tasks or projects, it won't cite Jira Boards.

## Best practices and example prompts

The Jira AI Connector is most helpful for:

* Finding information about active projects.

* Surfacing project details and information.

* Learning what specific people are working on.

* Asking questions referring to specific people or that can be answered by a Jira ticket.

* Simple analytical questions.

You could try prompting Notion AI with the following:

* "Show me a summary of what {person's name} is working on."

* “This feature isn’t working as expected. Why not?"

* "What is {team name} working on this week?"

* “What is the average time to close tickets in this Project?”

* “What are the Jira projects that involve the mobile app?”

**Note:** Notion AI isn't meant to run complex analytics or perform math on large data sets. For example, it won't be able to tell you how many tickets were created in the last month. Try asking questions about specific projects or issues.


## FAQs

### Does the Jira AI Connector support filters?

No, the Jira AI Connector does not support dashboards or filters at this time.


### I connected the wrong Notion workspace. How can I disconnect my Jira site?

Workspace owners can disconnect projects after the initial integration is complete by going to `Settings` → `Notion AI`. Select `⚙️` next to `Jira` → `Settings` → `Disconnect`.


### How long does it take for the integration to complete?

Setting up the integration can take up to 36 hours depending on the size of the Jira site.


### How long does it take for new content from Jira to reflect in Notion AI?

We will start indexing new data as soon as 30 minutes and can take up to 36 hours for full indexing.


### Can I limit the scope of my search to only Jira?

Yes, absolutely! In the Notion AI entry point, open the `All sources` dropdown and select `Jira`.


### Can everyone in the Notion workspace access information from Jira?

Once the Jira AI Connector is set up for the workspace, members can use the integration to retrieve answers based on their permissions in Jira.

Members in a workspace will only have access to retrieve information from Jira if they have access to the Jira site. If additional permissions are set on a project or issues level, users will only be able to ask questions to those that they have access to.


### How far back in Jira can I ask questions about?

The integration will be able to find information going back a year.


### Does this integration respect existing Notion AI permissions?

Absolutely. Notion AI will honor existing permissions according to our existing [Notion AI Security Practices](https://www.notion.com/help/notion-ai-security-practices).

Users will not be able to generate content or receive responses based on resources they do not have access to. Specific to third party content, Notion AI is handling both private and public content with security in mind, only ingesting content according to the permissions mapping between Jira and Notion users.


### How does Notion AI handle permissions mapping?

Notion AI for Jira maps Jira members to Notion members. The user must be both a Jira and Notion member to authenticate this app at the user level. Every hour, we periodically sync permissions from Jira and update the permissions in Notion.


### How is Notion storing or referencing my Jira data in its systems?

We store create and store embeddings in a vector database hosted by Turbopuffer, which powers the ability to provide responses to questions that leverage third party content (like in Jira). Turbopuffer has been vetted by our security team as well as an external auditor to obtain their SOC2 Type II certification. [Learn more about Turbopuffer’s security here →](https://turbopuffer.com/docs/security)
