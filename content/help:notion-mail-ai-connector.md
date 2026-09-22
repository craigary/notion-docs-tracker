---
title: "Personal Gmail AI Connector  (beta)"
emoji: null
description: "Learn how to connect your personal Gmail to Notion AI on any Notion plan."
url: "https://www.notion.com/help/notion-mail-ai-connector"
key: "help:notion-mail-ai-connector"
coverImage: null
category: "Notion AI Connectors"
categoryKey: "category:notion-ai-connectors"
---

**Note:**

* The personal Gmail AI Connector is currently in beta and subject to the beta terms of your agreement

This article covers the personal Gmail connector for individual Notion users connecting their own inbox. No admin access needed, and it works on any plan.

If your organization wants to connect Gmail for the whole team, see the [Gmail AI Connector for Business and Enterprise →](https://www.notion.com/help/notion-ai-connector-for-gmail)

## Connect Gmail to Notion AI

The Gmail account you connect must match the email address you use for your Notion workspace. To connect Gmail to Notion AI:

1. Go to `Settings` → `Notion AI`.

2. Select `+` next to `Gmail`.

3. In the window that appears, select `Start connection`.

Notion AI will be able to search and answer questions related to your emails in Notion Mail.


## FAQs

### Can I add connect multiple Notion workspaces?

Yes. As long as you're logged into your Notion workspace using the same email address as your Gmail account, you can connect that workspace.


### Can I connect Gmail if the email doesn't match my Notion workspace email?

Not at this time.


### What data does Notion AI get access to?

Notion AI can read all email messages in your connected Gmail account. We maintain strict cross-user security. No user will see other users' emails.


### Does Notion AI respect my email permissions?

Yes. Notion AI searches only your connected inbox — we use an exact email address match. See Notion AI security practices [here](https://www.notion.com/help/notion-ai-security-practices).


### How long does it take for the integration to complete, and how far back does it look?

Once the integration is set up, search will be available right away. It can search your entire inbox.


### How long does it take for Notion AI to read new emails?

New emails may take up to 3 hours to be indexed by Notion AI before they appear in search results. Larger data volumes may take additional time.


### Can I limit the scope of my search to only this connector?

Yes. In Notion AI, click `All sources` and narrow your scope to only `Gmail`.


### How does Notion store or reference my email data in its systems?

We don't store email data in vector databases, but we may temporarily cache email content to provide a faster search experience. Learn more about [Notion AI security and privacy](https://www.notion.com/help/notion-ai-security-practices?_gl=1*561poh*_gcl_au*MzMxNDM2MDIxLjE3ODY5OTI3NzEuOTE1OTIzODA3LjE3ODkxNTU0NzUuMTc4OTE1Njg3NS44OTI3NDE1MS4xNzg5MTU1NDc1LjE3ODkxNTY4NzU.*_ga*NDkxMzI5ODU3LjE3ODY5OTI3NzE.*_ga_9ZJ8CB186L*czE3OTAwOTY1NDkkbzExMSRnMSR0MTc5MDA5Nzg5OCRqNTUkbDAkaDA.).


### How can I disconnect my email from Notion?

1\. Go to `Settings` → `Notion AI`.\
2\. Select ⚙️ next to `Gmail`, then select `Disconnect`.


### What happens to my data if I disconnect?

Notion handles your data following strict data minimization principles. When you disconnect, your content becomes unsearchable immediately. All associated data is deleted within 24 hours.


### Can Notion AI read attachments?

No, not at this time.


### Can I set up both this connector and the Gmail AI Connector (Business) in the same workspace?

No. If your workspace owner connects your Google organization for Gmail (Business or Enterprise plan), your personal Gmail connection will be replaced by the workspace-level Gmail AI Connector.


### What's the difference between this and the Gmail AI Connector for Business?

****

* **This connector (personal):&#x20;**&#x57;orks for any individual Notion user on any plan. You set it up yourself in a few clicks. No admin access needed. It connects your personal Gmail inbox only.

* **Gmail AI Connector (Business and Enterprise plans):&#x20;**&#x53;et up by a Notion workspace owner who is also a Google Workspace admin. Connects Gmail for everyone in the organization. Requires a Business or Enterprise Notion plan, and a paid Google Workspace plan. [Learn more →](https://www.notion.com/help/notion-ai-connector-for-gmail)
