---
title: Microsoft Teams AI Connector (beta)
emoji: null
description: Connect Notion AI to Microsoft Teams to keep all your work in context.
url: https://www.notion.com/help/notion-ai-connector-for-microsoft-teams
key: help:notion-ai-connector-for-microsoft-teams
coverImage: https://images.ctfassets.net/spoqsaf9291f/1LIi8TEPYxiakx2vkQwKU7/a99e212e808b4ff24e5d52e4b0d43e91/Teams.png
category: Notion AI
---

The Microsoft Teams AI Connector transforms collaboration by integrating AI into your daily workflow. This powerful tool lets you track project updates, search team discussions, access admin communications, and get automatic meeting summaries—all from within Teams.

The Microsoft Teams AI Connector is currently in beta and subject to the beta terms of your agreement.

## Connect Microsoft Teams to Notion AI

**Who can connect Microsoft Teams to Notion AI?**

* A Microsoft Teams admin who has at least a `Privileged Role Administrator` role, or a `Global Administrator` role.

* A Notion workspace owner.

  * Note that the email address of the Microsoft Teams admin and Notion workspace owner must be the same.

* You must be on at least a Microsoft 365 Business Basic Plan.

* You must be on Notion’s Business or Enterprise Plan.

Permissions for specific content will follow Microsoft – users will only see content they have access to.

![HC: Microsoft Teams](https://images.ctfassets.net/spoqsaf9291f/49JL8i1UzBrxBdhiI7Ui65/181cc2b4632088c0ef579215e64811df/Settings_V2_from_Notes.jpeg)

**How do I connect Microsoft Teams?**

To connect Microsoft Teams to your Notion workspace:

1. In Notion, navigate to the the Microsoft Teams AI Connector by going to `Settings` → `Notion AI` → `Microsoft Teams` in the AI Connectors section.

2. Click on `Microsoft Teams` and follow the instructions in Notion to start the connection. **Keep Notion open during this process!**

3. You will be redirected to Microsoft in a new tab, asking to accept application permissions. Click

   `Accept`.

4. Once the installation is complete, return to Notion. You'll see a new modal on your screen. Click `Got it` to complete your setup or `Customize connected content` to customize your connection.

   * The initial Microsoft Teams sync may take up to 72 hours depending on the amount of data (channels, messages, and files). Subsequent syncs will be incremental and faster.

   * You can manage the connection by opening Notion AI at the bottom of your screen and clicking on → `Connect Microsoft Team` → `Settings`.

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

### How long does the Microsoft Teams connection take to complete, and what message history can it access?

The integration can access messages dating back one year from the setup date.

For example, if you connect Microsoft Teams with Notion AI on June 1, 2024, you'll have access to messages from June 1, 2023 onward.

The initial Microsoft Teams sync may take up to 72 hours depending on the amount of data (channels, messages, and files). Subsequent syncs will be incremental and faster.


### How long does it take for Notion AI to read new Teams messages?

New messages in public channels become searchable within 30 minutes.


### Can I limit the scope of my search to only Microsoft Teams or only Notion?

Yes! In the Notion AI entry point, click Find in to toggle between Everything you can access, Notion, and Microsoft Teams.


### If I connect Microsoft Teams to Notion AI, which channels does Notion AI read?

By default, Notion AI syncs all private (1:1 and group chats), public, and shared channels in the selected teams.

During setup, Notion workspace owners can choose which specific teams to sync—including future teams. This requires approval from both the Notion workspace owner and Microsoft Teams admin.


### Who can access Microsoft Teams content using Notion AI?

Individuals who are both a Microsoft Teams and a Notion workspace member can use this integration. Notion AI maps Microsoft Teams members to Notion members. Through account mapping and polling, Notion conducts ongoing checks for changes to permissions and access levels that would impact the Microsoft Teams content surfaced in Notion AI for each individual. **This integration is not available for guests in your Notion workspace.** Notion will still sync channels that have guest members.

Here are a few examples of permissions-related scenarios that Notion proactively checks and updates for:

* When a user is added to a private Multi DM, that user will only be able to ask questions about the chat from the time they were added. In Microsoft Teams, the user may be elected to view all of the chat’s history.

* When a user is removed from a private Multi DM, the user will only be able to access the messages in the period that they were in the group chat during the time that Microsoft Teams was connected to Notion AI. Microsoft Teams allows users to access messages from group chats for the period they were part of the chat.

* When users edit or delete a message in Microsoft Teams, Notion AI monitors for modified or deleted content every hour

* Microsoft Teams or Notion guest users are not allowed to leverage Notion AI at all. In the case where a guest user is given full Microsoft Teams member and full Notion workspace member permissions, Notion AI monitor for membership changes and updates those permissions changes every hour

* When a user is removed from a team, Notion AI monitors permissions and updates every hour.


### What happens to messages when my team is added to a shared channel?

When a team is added to a Shared channel in Microsoft Teams, new messages in the Shared Channel are available to all the members of the team every hour. Syncing access to older messages for members in new team will also take up to one hour. When a team is removed from shared channel, they cannot search for any newer messages in the channel, but can search older messages for up to one hour.


### I have B2B direct connect channels set up with external users. Will these channels be indexed?

No, all external messages and channels are excluded.


### How does Notion store or reference my Microsoft Teams data in its systems?

Microsoft Teams content is stored as embeddings in vector databases like Turbopuffer. These embeddings enable efficient text searches and comparisons to provide relevant responses to your questions.

Notion's vector databases have been vetted by our Security team and an external auditor to obtain SOC2 Type II certification. See [this article](https://www.notion.com/help/notion-ai-security-practices) for more information.


### I connected the wrong Notion workspace. How can I disconnect my Microsoft Teams from Notion?

To disconnect Microsoft Teams, open Notion AI at the bottom of your screen and click on → `Connect Microsoft Teams` → `Settings` → `Disconnect`.

Upon disconnection, your Microsoft Teams content becomes immediately unsearchable, and all related data is deleted within one day of the request.


### What content in Microsoft Teams is supported with the AI connector?

By default, Notion AI syncs all private (1:1 and group chats), public, and shared channels in the selected teams.

During setup, Notion workspace owners can choose which specific teams to sync—including future teams.

This requires approval from both the Notion workspace owner and Microsoft Teams admin.
