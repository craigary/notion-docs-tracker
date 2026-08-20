---
title: "Jira AI Connector (beta)"
emoji: null
description: null
url: "https://www.notion.com/help/jira-ai-connector"
key: "help:jira-ai-connector"
coverImage: null
category: "Notion AI Connectors"
categoryKey: "category:notion-ai-connectors"
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

13. Next, find your Atlassian Developer Space ID. Go to the Atlassian developer console at [developer.atlassian.com/console](https://developer.atlassian.com/console) and open your developer space. Your Developer Space ID is shown in your developer space settings.

14. Copy your Developer Space ID and paste it into Notion. Every Jira connection needs this ID.

15. Click `Check credentials`.

Notion will install a Jira Forge app named Notion-AI-Connector using the credentials provided. You don't need to build or install this app yourself. Once your Site URL, API token, and Developer Space ID are confirmed, Notion sets it up for you automatically. The connection can take up to 36 hours to complete. You can manage the connection by opening Notion AI at the bottom of your screen and clicking on `•••` → `Connect Jira` → `Settings`.

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

## Troubleshooting

If you see the error "We couldn't authenticate with the provided credentials" during setup, check the following:

* Your Jira Site URL matches your site exactly.

* Your API token hasn't expired, and you copied the full token.

* Your Atlassian Developer Space ID is correct.

* You don't need to create your own app in Atlassian. Once all three fields are confirmed, Notion installs the Notion-AI-Connector app for you.


## FAQs