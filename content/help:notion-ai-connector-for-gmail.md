---
title: Gmail AI Connector (Beta)
emoji: null
description: null
url: https://www.notion.com/help/notion-ai-connector-for-gmail
key: help:notion-ai-connector-for-gmail
coverImage: https://images.ctfassets.net/spoqsaf9291f/wulKPiF24CtxGfmNgzGVt/2f57b700663a6ba3c845ac842826175a/Gmail.png
category: Notion AI
---

## Connect Gmail to Notion AI

**Who can connect Gmail to Notion AI?**

* You must be a Google admin and Notion workspace owner.

* Your workspace must be on the Business or Enterprise Plan.

* You must be on one of Google Workspace’s paid plans as listed [here](https://workspace.google.com/lp/business/).

  * If you do not have a paid plan, you can connect via Notion Mail only to an individual account.

**How do I connect Gmail?**

1. In Notion, navigate to the Gmail AI Connector by going to `Settings` → `Notion AI` → `Gmail` in the AI Connectors section.

2. Click on `Gmail` and follow the instructions in Notion to start the connection. **Keep Notion open during this process!**

3. You will be redirected to the Notion AI for Gmail Google Marketplace app in a new tab. Click `Install`.

4. Click through the installation — we recommend selecting install for “All users in my organization” for better AI answers across your organization. You'll see a new modal on your screen. Click

   `Confirm connection` to complete your setup.

5. You're done!

   * The connection will be instant, but you might need to refresh your page to see the Gmail icon in the scope picker of Notion AI.

   * You can manage the connection in Notion AI settings by clicking the gear icon on `Gmail` anytime.

For users that do not have a paid Google Workspace plan or want to only install Gmail for a single account, you will have an option in the onboarding flow to connect to a Notion Mail account.

* You do not need to be Notion Admin to connect to Notion Mail.

* Notion Admins can toggle the ability for their workspace members to connect or disconnect to Notion Mail in their Notion Org Console. Navigate to `Manage Organization` → `People` → `Notion Mail.`


## FAQs

### What data does Notion AI get access to?

Notion AI can read all email messages in your selected Google Workspace orgs. We maintain strict cross-user security: i.e. no user will see other users’ emails in their search.


### Does Notion AI respect my Gmail permissions?

Yes. Each Notion user’s AI searches only that user’s Gmail inbox — we use an exact email address match. See more details about our [Notion AI Security Practices](https://www.notion.com/help/notion-ai-security-practices).


### How long does it take for the integration to complete and how far back does it look?

Once the Gmail integration is set up, Gmail search will be available immediately. It can search the entire inbox.


### How long does it take for Notion AI to read new Gmail emails?

New emails will be available for search zero to thirty minutes after they arrive in your inbox.


### Who can access Gmail content using Notion AI?

You must be both a Google Workspace and Gmail user and a Notion workspace member to use this integration.

Notion AI automatically maps Google Workspace members to their corresponding Notion accounts by email address. The system syncs permission changes from Google Workspace immediately.


### How does Notion store or reference my Gmail data in its systems?

We do not store Gmail data in vector databases like Turbopuffer, but we may temporarily cache email content via something like memcached to provide a faster search experience. See [this article](https://www.notion.com/help/notion-ai-security-practices) for more information.


### Can I connect multiple Notion workspaces to my Google workspace?

No, you can only connect one Google workspace to a Notion workspace and vice versa.


### How can I disconnect my Gmail from Notion?

Workspace owners can disconnect Gmail by clicking `Settings` → `Notion AI` → the `⚙️` icon on Gmail, then clicking` Disconnect`.

Your Google Worskpace admin should also delete the Gmail app from the Google Marketplace.


### What happens to my Gmail data if I disconnect?

Notion handles your Gmail data following strict data minimization principles.

When you disconnect Gmail from Notion AI, your content becomes unsearchable immediately. All associated data is then deleted within 24 hours of your disconnection request.


### Can Notion AI read attachments?

No, not at this time.
