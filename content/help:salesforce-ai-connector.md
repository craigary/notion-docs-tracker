---
title: "Salesforce AI Connector"
emoji: "🔁"
description: "Connect Notion AI with your Salesforce to seamlessly bring in information from your accounts, leads, opportunities, and contacts 🔁"
url: "https://www.notion.com/help/salesforce-ai-connector"
key: "help:salesforce-ai-connector"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/5kPfjQ1541RLvl1YLMsYt3/10ec0390f6f04ec2c9afb236b2383251/Group_175.png"
category: "Notion AI"
categoryKey: "category:notion-ai"
---

## Connect Salesforce to Notion AI

**Who can connect Salesforce to Notion AI?**

* You must be a Salesforce Admin and Notion workspace owner.

* You must have API access in Salesforce to connect your SFDC to Notion workspace

* You must be on an Enterprise Notion plan.

**How do I connect Salesforce?**

To connect Salesforce to your Notion workspace:

1. In Notion, open [Notion AI](https://www.notion.com/help/notion-ai-faqs) at the bottom of your screen and click on `All sources` → `Connect apps`. This will direct you to `Settings` → `Notion AI.` Click `+` under `Salesforce `and follow the onboarding steps. **Don't close Notion during the setup process!**

2. You'll be redirected to a page in Salesforce, which will ask you to grant access to to the connection. Click `Allow.`

3. Once the installation is complete, return to Notion.

4. Click `Got it`.

The connection can take up to 36 hours. You can manage the connection by opening Notion AI in the Settings modal and click the gear icon ⚙️ → `Settings`.

## How do Members connect Salesforce?

A member login allows members to use advanced SOQL to answer complex queries that cannot be answered through regular search.

Workspace members can go to `Settings` → `Notion AI` in the Settings modal and click the gear icon ⚙️ → `Log in`.

## Best practices and example prompts

* What regional and segment data do we have for opportunities?

* Who are the main contacts or points of contact for each account?

* What is the total opportunity size of X account?

* What is the latest activity for X account?

Members who have authenticated to Salesforce will be able to ask more advanced query-based questions like the following:

* Collect all my opportunities from the last quarter and organize it based on stage and key contacts.

* What was my average close rate last quarter?

* What was my average deal size in Q2?


## FAQs

### What data does Notion AI Salesforce Connector get access to?

Notion AI can read all Salesforce objects and records that the connected account has access to. This includes accounts, leads, opportunities, and contacts with all properties associated.


### Does Notion AI respect my Salesforce permissions?

Yes. Notion AI strictly follows existing permissions as outlined in our [Notion AI Security Practices](https://www.notion.com/help/notion-ai-security-practices). Users can only generate content and receive responses about emails they have permission to access in Salesforce.

1. Global overrides

2. Object permissions

3. Record permissions

4. Field level permissions (not supported yet)


### Why are my org members seeing the OAuth Error “app must be installed into org” even though Notion app is connected?

Your Salesforce organization has extra security enabled. Your org admin needs to install the Notion AI app from `Setup` → `Connected Apps OAuth Usage` and click install for the `Notion AI` app.


### Is member login mandatory for all users?

No, however this is highly encouraged. A member login allows members to use advanced SOQL to answer complex queries that cannot be answered through regular search.


### Does Notion AI respect retention rules?

No, currently we are not supporting retention rules in Salesforce.


### How long does it take for the integration to complete and how far back does it look?

The integration can take up to 72 hours to complete, however can take longer depending on your Salesforce instance. Once the integration is set up, it will be able to find folders and files that were created, viewed or modified in the past year.


### How long does it take for Notion AI to read new Salesforce content?

New objects and records created in salesforce will be available in Notion AI searches within an hour.


### Can I limit the scope of my search to only Salesforce?

Yes! In Notion AI, click `Find in` to toggle between `Everything you can access`, `Notion`, and `Salesforce`.


### Who can access Salesforce content using Notion AI?

Individuals who are both a Salesforce and a Notion workspace member can use this integration. Notion AI maps Salesforce members to Notion members. Permission changes are synced within an hour.


### How does Notion store or reference my salesforce data in its systems?

Objects and records are stored as embeddings using vector databases like Turbopuffer. These embeddings allow for efficient searches and comparisons across different pieces of text to provide accurate and relevant responses to your questions.

These have been thoroughly vetted by our Security team as well as by an external auditor to obtain their SOC2 Type II certification. See [this article](https://www.notion.com/help/notion-ai-security-practices) for more information.


### Can I add connect multiple Notion workspaces to my Salesforce?

Not at this time. The workspace admin will only be able to connect one Notion workspace to one Salesforce account.


### How can I disconnect my Salesforce from Notion?

Workspace owners can disconnect Salesforce by opening Notion AI Settings in the Settings menu and clicking on the gear ⚙️ next to `Salesforce` → `Settings `→ `Disconnect`.


### What happens to my Salesforce data if I disconnect?

Notion treats your Salesforce data with the privacy principle of data minimization in mind. If you decide to disconnect your Salesforce from Notion AI, your Salesforce content will immediately become unsearchable.
