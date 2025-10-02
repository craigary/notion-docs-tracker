---
title: Microsoft Outlook AI Connector
emoji: 📮
description: Connect your emails from Microsoft Outlook to Notion AI 📮
url: https://www.notion.com/help/microsoft-outlook-ai-connector
key: help:microsoft-outlook-ai-connector
coverImage: https://images.ctfassets.net/spoqsaf9291f/3E1IruTfe6Z0yB5m8fCq70/bdee658eb717a4745abd61e0505f9371/Outlook_AI_Connector_from_Figma.png
category: Notion AI
---

**Note:** <!-- -->This feature is only available on the Enterprise Plan.

## Connect Microsoft Outlook to Notion AI

**Who can connect Microsoft Outlook email to Notion AI?**

To connect Microsoft Outlook to Notion AI:

* You must be a Microsoft 365 Admin and Notion workspace owner.

* You must be on Notion’s Enterprise Plan.

**How do I connect Microsoft Outlook email?**

To connect your Microsoft Outlook emails to Notion AI:

1. In Notion, go to `Settings` → `Notion AI`.

2. Select `+` next to `Outlook`.

3. Follow the onboarding steps. **Keep Notion open during this process!**

4. A popup from Microsoft will ask to accept application permissions. Click `Accept`.

5. Once the installation is complete, return to Notion.

6. Click `Done`.

The connection will be complete immediately. You can manage the connection by going to `Settings` → `Notion AI` and selecting `⚙️` next to `Outlook`.


## FAQs

### What data does the Microsoft Outlook AI Connector get access to?

Notion AI can read all Microsoft Outlook emails associated with the connected account. However, it currently can't read email attachments.


### Does Notion AI respect my Microsoft Outlook permissions? 

Yes. Notion AI strictly follows existing permissions as outlined in our [Notion AI Security Practices](https://www.notion.com/help/notion-ai-security-practices). Users can only generate content and receive responses about emails they have permission to access in Microsoft Outlook.


### How long does it take for the integration to complete and how far back does it look?

Once the integration is complete, Notion AI will be able to search all your emails immediately; there's no setup delay.


### How long does it take for Notion AI to read new Microsoft Outlook content?

New emails received in Microsoft Outlook will be searchable via Notion AI immediately.


### Can I limit the scope of my search to only Microsoft Outlook?

Yes, absolutely! In Notion AI, open the `All sources` menu and select `Outlook`.


### Who can access Microsoft Outlook content using Notion AI?

Individuals who are both a Microsoft Outlook and a Notion workspace member can use this integration. Notion AI maps Microsoft members to Notion members. Permission changes are synced immediately.


### How does Notion store or reference my Outlook data in its systems?

Outlook data is not stored directly, but auxiliary statistics and data may logged via our observability systems. These have been thoroughly vetted by our Security team as well as by an external auditor to obtain their SOC2 Type II certification. See [this article](https://www.notion.com/help/notion-ai-security-practices) for more information.


### Can I connect multiple Notion workspaces to my Microsoft Outlook account?

Not at this time. The workspace admin will only be able to connect one Notion workspace to one Microsoft Tenant.


### How can I disconnect Microsoft Outlook and Notion?

Workspace owners can disconnect projects after the initial integration is complete by going to `Settings` → `Notion AI`. Select `⚙️` next to `Outlook` → `Settings` → `Disconnect`.


### What happens to my Microsoft Outlook data if I disconnect?  

Notion treats your Microsoft Outlook data with the privacy principle of data minimization in mind. If you decide to disconnect Microsoft Outlook from Notion AI, that content will immediately become unsearchable.
