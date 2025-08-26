---
title: Microsoft SharePoint & OneDrive AI Connector (beta)
emoji: null
description: Connect SharePoint & OneDrive to Notion AI.
url: https://www.notion.com/help/notion-ai-connector-for-microsoft-sharepoint-and-onedrive
key: help:notion-ai-connector-for-microsoft-sharepoint-and-onedrive
coverImage: https://images.ctfassets.net/spoqsaf9291f/6Z8O3RBHj6Y5QikcxRgFtz/ff135abae01e478379ab692c905d3f35/Sharepoint.png
category: Notion AI
---

The SharePoint and OneDrive AI Connector is a single Microsoft app and integration that gives Notion AI access to both SharePoint and OneDrive data.

This integration enables powerful search and analysis across your stored files, making it simple to find company policies, analyze project documentation, and process Excel data.

The SharePoint and OneDrive AI Connector is currently in beta and subject to the beta terms of your agreement.

## Connect SharePoint and OneDrive to Notion AI

**Who can****&#x20;connect SharePoint and OneDrive to Notion AI?**

* You must be a Microsoft 365 Admin and Notion workspace owner.

* You must be on a Business or Enterprise Plan.

Permissions for specific content will follow Microsoft – users will only see content they have access to.

**How do I connect SharePoint and OneDrive?**

To connect SharePoint and OneDrive to your Notion workspace:

1. In Notion, go to `Settings` → `Notion AI` → click `Connect` under `SharePoint and OneDrive`.

   ![HC: Sharepoint and OneDrive](https://images.ctfassets.net/spoqsaf9291f/4RPd2E4sBt8xZae1zADBpT/2c9f016bd748f7fd35a0b6c6ae79c3ca/Settings_V2_Help_Center_AI_Connectors.jpeg)

2. You'll be taken to Microsoft Teams. **Don't close Notion during the setup process!**

3. A Microsoft page should automatically open, asking to accept application permissions. Click `Accept`.

4. Once the installation is complete, return to Notion. You'll see a `Connection is in progress` screen. Click `Done`.

![HC: Sharepoint OneDrive Complete](https://images.ctfassets.net/spoqsaf9291f/4hwB6uByv6baWNUASZKebe/9539f338a72ec57c5fc44995b8d596a9/Onboarding_SharePoint__1_.png)

The connection can take up to 36 hours to complete.

You can manage the connection by opening Notion AI at the bottom of your screen and clicking on `•••` → `Connect SharePoint and OneDrive` → `Settings`.

## Best practices and example prompts

The SharePoint & OneDrive Connector is most helpful for:

**SharePoint:**

* Administrative questions (Questions about company policies and administrative matters)

* Project management queries (Questions about project documentation and team files.)

* Document analysis (Questions about content within documents and get insights.)

**OneDrive:**

* Find and analyze file contents.

* Data analysis (Ask questions about Excel files, financial data, calendars, and other structured information.)

* Finding insights (Ask about analyzing accumulated documents and creating summaries from multiple files.)

**You could try prompting Notion AI with the following:**

**SharePoint:**

* "What is our current work from home policy and when was it last updated?"

* "Can you find information about our company's parental leave benefits?"

* "What are the steps for requesting and approving business travel expenses?"

* "What are the key updates from the Q2 Product Development documentation?"

* "Compare the training documentation from last year with our current version and highlight major changes."

* "What are the common themes across our customer feedback documents from the past 6 months?"

**OneDrive:**

* "What are the total expenses from Q1 2025 in the budget spreadsheet?"

* "What are the top-performing regions based on our sales pipeline tracking data?"

* "Review Q1 budget reports and highlight key financial trends by department."

* "Summarize common challenges and solutions from last quarter's project retrospectives."

* "What are the best onboarding practices across different teams based on their materials?"


## FAQs

### What data does Notion AI get access to?

Notion AI can read DOCX, XLSX, PPTX, and PDF files, but it cannot currently read SharePoint site pages.


### Does Notion AI respect my SharePoint and OneDrive permissions? 

Yes. Notion AI strictly follows existing permissions as outlined in our [Notion AI Security Practices](https://www.notion.com/help/notion-ai-security-practices).

Users can only access and generate content for resources they have permission to view.

For third-party content, Notion AI manages permissions by processing information solely based on the access rights established between Microsoft and Notion users.


### How are permissions mapped between Notion AI and SharePoint/OneDrive?

Notion AI automatically maps Microsoft members to their corresponding Notion accounts.

Notion AI maps user permissions with the Microsoft SharePoint/OneDrive AI Connector by syncing with the permissions set in Microsoft 365.

It reads the Microsoft access control lists (ACLs) to ensure users can only access documents and files they have permission to view within their Microsoft tenant.

* This mapping is enforced by:

  * Fetching current file and folder permissions using Microsoft Graph API endpoints (like DriveItem list permissions).

  * Tracking changes to permissions using Microsoft’s DriveItem delta feature, polling every few hours to stay up to date.

  * Enforcing access rules—if you can’t access a file in SharePoint or OneDrive, you won’t see it in Notion AI either, regardless of its presence in the index.⁠

The system syncs content updates and permission changes from SharePoint/OneDrive every hour.


### How long does it take for the integration to complete and how far back does it look?

Once the integration is set up, it will be able to find documents created or viewed up to one year before the setup completion.

Depending on the amount of content during this timeframe, the process can take up to 36 hours.


### How long does it take for Notion AI to read new SharePoint and OneDrive content?

New content added to SharePoint or OneDrive updates hourly and becomes available in Notion AI searches.


### Can I limit the scope of my search to only SharePoint and OneDrive?

Yes! In the Notion AI, click `Find in` to toggle between `Everything you can access`, `Notion`, and `SharePoint and OneDrive`.


### Who can access Microsoft SharePoint content using Notion AI?

You must be both a Microsoft SharePoint/OneDrive user and a Notion workspace member to use this integration.

Notion AI automatically maps Microsoft members to their corresponding Notion accounts.

The system syncs content updates and permission changes from SharePoint/OneDrive every hour.


### How does Notion store or reference my SharePoint and OneDrive data in its systems?

SharePoint and OneDrive data is stored as embeddings using vector databases like Turbopuffer. These embeddings allow for efficient searches and comparisons across different pieces of text to provide accurate and relevant responses to your questions.

Notion’s vector databases have been vetted by our Security team as well as by an external auditor to obtain their SOC2 Type II certification. See [this article](https://www.notion.com/help/notion-ai-security-practices) for more information.


### Can I add connect multiple Notion workspaces to my SharePoint/OneDrive?

Not at this time. The workspace admin will only be able to connect one Notion workspace to one Microsoft Tenant.


### How can I disconnect my SharePoint and OneDrive from Notion?

Workspace owners can disconnect SharePoint and OneDrive by opening Notion AI at the bottom right of Notion and clicking on `•••` → `Connect SharePoint and OneDrive` → `Settings` → `Disconnect`.


### What happens to my SharePoint and OneDrive data if I disconnect?

Notion handles your SharePoint and OneDrive data following strict data minimization principles.

When you disconnect SharePoint and OneDrive from Notion AI, your content becomes unsearchable immediately. All associated data is then deleted within 24 hours of your disconnection request.


### What content is and is not supported with the SharePoint and OneDrive AI connector?

Notion AI can read DOCX, XLSX, PPTX, and PDF files, but it **cannot** currently read SharePoint site pages or personal OneDrives.
