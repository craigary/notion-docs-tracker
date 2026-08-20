---
title: "Microsoft Teams AI Connector"
emoji: null
description: null
url: "https://www.notion.com/help/notion-ai-connector-for-microsoft-teams"
key: "help:notion-ai-connector-for-microsoft-teams"
coverImage: null
category: "Notion AI Connectors"
categoryKey: "category:notion-ai-connectors"
---

The Microsoft Teams AI Connector transforms collaboration by integrating AI into your daily workflow. This powerful tool lets you track project updates, search team discussions, access admin communications, and get automatic meeting summaries—all from within Teams.

## Connect Microsoft Teams to Notion AI

**Who can connect Microsoft Teams to Notion AI?**

* A Microsoft Teams admin who has at least a `Privileged Role Administrator` role, or a `Global Administrator` role.

* A Notion workspace owner.

  * Note that the email address of the Microsoft Teams admin and Notion workspace owner must be the same.

* You must be on at least a Microsoft 365 Business Basic Plan.

* You must be on Notion’s Business or Enterprise Plan.

Permissions for specific content will follow Microsoft. Users will only see content they have access to. If your organization connects Microsoft Teams at the org level, permissions still work the same way.

## Organization-level connection (for multi-workspace orgs)

Some organizations have multiple Notion workspaces tied to the same Microsoft 365 account. If that’s you, you can connect Microsoft Teams at the organization level. Once it’s set up, you can use the same Microsoft account across workspaces.

Before you setup an organization-level connection, you’ll first need to get in touch with your sales contact at Notion to make the change. If you already connected Teams in a single workspace, you’ll need to disconnect it first, then reconnect.

With an org-level connection:

* You don’t need to repeat Microsoft Teams setup for every workspace.

* It can be easier to roll out Notion AI search across workspaces.

* People can only search and reference Teams content they already have access to in Microsoft.

* The first sync time and supported content stay the same.

If you already have Microsoft Teams connected in one workspace, you may need to disconnect it there, then connect it again after org-level connection is in place.

![HC: Microsoft Teams](https://images.ctfassets.net/spoqsaf9291f/49JL8i1UzBrxBdhiI7Ui65/181cc2b4632088c0ef579215e64811df/Settings_V2_from_Notes.jpeg)

## How do I connect Microsoft Teams?

To connect Microsoft Teams to your Notion workspace:

1. In Notion, navigate to the the Microsoft Teams AI Connector by going to `Settings` → `Notion AI` → `Microsoft Teams` in the AI Connectors section.

2. Click on `Microsoft Teams` and follow the instructions in Notion to start the connection. **Keep Notion open during this process!**

3. You will be redirected to Microsoft in a new tab, asking to accept application permissions. Click

   `Accept`.

4. Once the installation is complete, return to Notion. You'll see a new modal on your screen. Click `Got it` to complete your setup or `Customize connected content` to customize your connection.

   * The initial Microsoft Teams sync may take up to 72 hours depending on the amount of data (channels, messages, and files). Subsequent syncs will be incremental and faster.

   * You can manage the connection by opening Notion AI at the bottom of your screen and clicking on → `Connect Microsoft Team` → `Settings`.

If your organization is using an org-level connection, your IT admin can complete the Microsoft side of setup for you. In that case, you might need to finish setup in your Notion workspace.

## Best practices and example prompts

The Microsoft Teams Connector is most helpful for:

* Project management updates and tracking progress.

* Finding information from team discussions and meetings.

* Accessing administrative communications shared on Teams.

* Creating summaries from meeting transcripts.

You could try prompting Notion AI with the following:

* "What are the latest updates on the mobile app development project from our team meetings?"

* "Find discussions about the Q2 marketing campaign timeline from recent team meetings"

* "What decisions were made in yesterday's product strategy meeting?"

* "Show me all project blockers mentioned in team discussions this week."


## FAQs