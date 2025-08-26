---
title: Linear AI Connector
emoji: null
description: null
url: https://www.notion.com/help/notion-ai-connector-for-linear
key: help:notion-ai-connector-for-linear
coverImage: https://images.ctfassets.net/spoqsaf9291f/1b5mzSyCfFYoIFkFCCetvv/f226b1ee8ba3b7a1990eeadeb1970318/Linear.png
category: Notion AI
---

## Connect Linear to Notion AI

**Who can connect Linear to Notion AI?**

* You must be a Linear workspace admin.

* You must be a Notion workspace owner.

* Your workspace must be on the Business or Enterprise Plan.

**How do I connect Linear?**

To connect Linear to your Notion workspace:

1. In Notion, navigate to the Linear AI Connector by going to `Settings` → `Notion AI` → `Linear` in the AI Connectors section.

   ![HC: Linear entry point](https://images.ctfassets.net/spoqsaf9291f/3yruHPZ1ikgRyvWlAvaSsZ/e1dca61353c5e4bd183d6d00417b45bc/Settings_V2_Linear.jpg)

2. Click on `Linear` and follow the instructions in Notion to start the connection. **Keep Notion open during this process!**

3. You will be redirected to Linear to select team access. Click `Authorize`.

   ![HC: Linear auth](https://images.ctfassets.net/spoqsaf9291f/7wDL1kVBrOoY2GGCU77hBl/56c323d30f118ecec7de38d7738e7ac1/CleanShot_May_21_2025.png)

4. Click through the installation. If successful, you'll be redirected to Notion and see a modal on your screen indicating that you’re done! If not, navigate back to Notion and click Check connection to complete your setup.

5. You're done!

   * The connection can take up to 36 hours.

   * You can manage the connection in Notion AI settings by clicking the gear icon on `Linear` at any time.


## FAQs

### What data does Notion AI get access to?

Notion AI can read all projects and issues details including the title, assignee, creator and all issue comments. However, project progress, and milestones are not supported at this time.


### Who can use this integration?

Individuals who are both a Linear member and a Notion workspace member can use this integration.


### Does Notion AI respect my Linear permissions?

Notion AI strictly follows existing permissions as outlined in our [Notion AI Security Practices](https://www.notion.com/help/notion-ai-security-practices). Users can only access and generate content for resources they have permission to view.

Notion AI will honor permissions according to their role in Linear. Users will not be able to generate content or receive responses based on resources they do not have access to.


### How are permissions mapped?

Notion AI will honor permissions according to their role in Linear. Users will not be able to generate content or receive responses based on resources they do not have access to.

Notion AI automatically maps Linear members to their corresponding Notion accounts by email address.

Notion AI conducts ongoing checks for changes to permissions and access levels that would impact the Linear content surfaced in Notion AI for each individual. The system syncs permission changes every hour.


### How long does it take for the integration to complete and how far back does it look?

Depending on the workspace size, the integration can take up to 36 hours to complete.

Once the integration is set up, Notion AI will only be able to reference:

* Issues updated within the last year.

* The latest 50 comments and labels.

* The last 10 cycles for each team.

* The 5 most updates for each project.

* The <!-- -->5 most recent comments for each project.

Subsequent comments, labels and project updates will be updated immediately after.


### Are attachments and documents ingested by Notion AI?

Not at this time.


### How do I change my teams selection? How long does it take to reflect the changes?

Change your team selection directly in Linear settings or navigate to the Linear AI Connector by going to `Settings` → `Notion AI `→ `Linear` in the AI Connectors section. Click on the `⚙️` icon and this will re-direct you into the settings page in Linear to edit application settings.

Changes should be reflected within the hour.


### How long does it take for Notion AI to read updates in Linear?

Notion AI reads updates every 30 minutes through webhooks.


### How can I disconnect Linear from Notion?

Workspace owners can disconnect Linear by going to `Settings` → `Notion AI `→` `the `⚙️` icon on Linear, then clicking `Disconnect`.

Linear admins can disconnect in Linear by navigating to `Settings` → `Applications` → Select app → `Revoke access`.


### How do the permission settings work?

Individuals who are both a Linear member and a Notion workspace member can use this integration.

Notion AI maps Linear members to Notion members through emails and conducts ongoing checks for changes to permissions and access levels that would impact the Linear content surfaced in Notion AI for each individual.
