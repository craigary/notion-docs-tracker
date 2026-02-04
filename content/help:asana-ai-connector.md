---
title: Asana AI Connector
emoji: ✅
description: Connect Notion AI with your Asana workspace to seamlessly bring in information from your teams, projects, and tasks ✅
url: https://www.notion.com/help/asana-ai-connector
key: help:asana-ai-connector
coverImage: https://images.ctfassets.net/spoqsaf9291f/2vgTEkyNzMDDsyAc8xg0O2/04210f4a1ea7eb4fa0ce65722f3faacd/asana.png
category: Notion AI
---

## Connect Asana to Notion AI

**Who can connect Asana to Notion AI?**

* You must be a Notion workspace owner.

* You must be on a Business or Enterprise Notion plan.

* For Asana Enterprise customers, you must be an Admin

**How do I connect Asana?**

To connect Asana to your Notion workspace:

In Notion, open [Notion AI](https://www.notion.com/help/notion-ai-faqs) at the bottom of your screen and click on `All sources` → `Connect apps`. This will direct you to `Settings` → `Notion AI.` Click `+` under `Asana `and follow the onboarding steps. **Don't close Notion during the setup process!**

You can select from two modes to connect Asana:

1. **Enterprise Account&#x20;**&#x65;nables access for all `Asana Enterprise users`

   * For Enterprise account types, admins must provide an API token to establish their connection. To generate the token, login into your [Asana admin portal](https://app.asana.com/admin/), Navigate to `Apps` → `Service accounts` and add a new service token. Name the new token to “Notion AI” and set permissions to **Full permissions.**

   * Once the token is generated, copy the token and paste it into the input box in Notion and continue.

   * Once the connection is created, select the workspace and then continue.

   * Click `Got it.`

2. **All other account** which includes Personal, Starter and Advanced accounts

   * For other accounts, you'll be redirected to a page in Asana, which will ask you to grant access to to the connection. Click “Allow”.

   * Once the installation is complete, return to Notion.

   * Select the workspace and then continue.

   * Click `Got it.`

The connection can take up to 72 hours. You can manage the connection by opening Notion AI in the Settings modal and click the gear icon ⚙️ → `Settings`.


## FAQs

### What data does Notion AI Asana Connector get access to?

Notion AI can read Asana workspaces, users, teams, projects, and tasks under the connected account.


### Does Notion AI respect my Asana permissions?

Yes. Notion AI strictly follows existing permissions as outlined in our [Notion AI Security Practices](https://www.notion.com/help/notion-ai-security-practices). Users can only generate content and receive responses about workspaces, projects and teams they have permission to access in Asana.


### Is a Service account mandatory for Enterprise customers?

No, but recommended. This allows Notion AI to access to read private tasks that a user creates that are not linked to any project.


### I don’t have an Asana Enterprise account, can I still connect?

Yes, all other plan types in Asana are supported. Users will only have access to the data they have access to.


### What happens if I connect using “All other plans” ?

If you connect Asana using the **“All other plans”** option, The connector access will be limited to what is available to the user who is creating the connection.

Notion AI can only read:

* Public projects in the workspace

* Private projects the connected user is a member of

* Tasks the connected user has access to

Notion AI **cannot** access:

* Private projects where the connected user is not a member

* Any tasks inside those inaccessible private projects

* Any private user tasks which are not part of any project

As a result, Notion AI **cannot answer questions or perform analysis** on content from private projects that the connected user does not have permission to view.


### How long does it take for the integration to complete and how far back does it look?

The integration can take up to 72 hours to complete. Once the integration is set up, it will be able to find projects and tasks that were created, viewed or modified in the past year.


### How long does it take for Notion AI to read new Asana content?

New projects and tasks created in Asana will be available in Notion AI searches usually within 2 hrs.


### Can I limit the scope of my search to only Notion?

Yes! In Notion AI, click `Find in` to toggle between `Everything you can access`, `Notion`, and `Asana`.


### Who can access Notion content using Notion AI?

You must be both an Asan user and a Notion workspace member to use this integration. Notion AI automatically maps Asana members to their corresponding Notion accounts by email address. The system syncs permission changes every hour


### How does Notion store or reference my asana data in its systems?

Projects and tasks are stored as embeddings using vector databases like Turbopuffer. These embeddings allow for efficient searches and comparisons across different pieces of text to provide accurate and relevant responses to your questions.

These have been thoroughly vetted by our Security team as well as by an external auditor to obtain their SOC2 Type II certification. See [this article](https://www.notion.com/help/notion-ai-security-practices) for more information.


### Can I add connect multiple Asana workspaces to my Notion?

Not at this time. The workspace admin will only be able to connect one Asana workspace to one Notion workspace.


### How can I disconnect my Asana from Notion?

Workspace owners can disconnect Asana by opening Notion AI Settings in the Settings menu and clicking on the gear ⚙️ next to `Asana` → `Settings` → `Disconnect`.


### What happens to my Asana data if I disconnect?

Notion treats your Asana data with the privacy principle of data minimization in mind. If you decide to disconnect your Asana from Notion AI, your Asana content will immediately become unsearchable.
