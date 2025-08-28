---
title: Notion Mail AI Connector (beta)
emoji: 📮
description: Anyone on any Notion plan can connect Notion Mail to Notion AI 📮
url: https://www.notion.com/help/notion-mail-ai-connector
key: help:notion-mail-ai-connector
coverImage: https://images.ctfassets.net/spoqsaf9291f/2SBfsPfdWN8oF5X5akzwxx/a4a1fbccc03420ee52f5d24846334b97/Notion_Mail_Logo__1_.png
category: Notion AI
---

**Note:** The Notion Mail AI Connector is currently in beta and subject to the beta terms of your agreement.

## Connect Notion Mail to Notion AI

**Who can connect Notion Mail to Notion AI?**

Anyone on any Notion plan can connect Notion Mail to Notion AI. Users must create a Notion Mail account in order to set up the connection successfully.

At this time, the email you use for Notion Mail must match with the email you use for your Notion workspace.

**How do I connect Notion Mail?**

To connect Notion Mail to Notion AI:

1. Go to `Settings` → `Notion AI`.

2. Select `+` next to `Notion Mail`.

3. In the window that appears, select `Start connection`.

Notion AI will be able to search and answer questions related to your emails in Notion Mail.


## FAQs

### Can I add connect multiple Notion workspaces to my Notion Mail?

Yes! As long as you’re logged into your Notion workspace using the same email address that you use for Notion Mail, you can connect that workspace to your Notion Mail.


### If I'm using Notion Mail with an email address that's not the one I use for my Notion workspace, can I still connect the two?

Not at this time.


### Can I set up the Gmail and Notion Mail calendar in the same workspace?

No. If your workspace owner connects your Google Organization for Gmail, your Notion Mail connection will disconnect and be replaced with your Gmail AI Connector.


### Why would I connect Notion Mail to Notion AI and not Gmail?

* All Notion plans allow access to the Notion Mail AI Connector. However, the Gmail AI Connector is available only on Notion's Business or Enterprise Plan. It also requires a paid Google Workspace plan type in order to set up the connection.

* The Gmail connector must be installed by someone who is both a Notion workspace owner and Google Workspace admin (of a paid workspace). Notion Mail can be set up by any individual member of a Notion workspace as long as they also have a Notion Mail account.


### What data does Notion AI get access to?

Notion AI can read all email messages in your Notion Mail. We maintain strict cross-user security; no user will see other users’ emails.


### Does Notion AI respect my Notion Mail permissions?

Yes. Notion AI searches only your connected inbox — we use an exact email address match. See Notion AI security practices [here](https://www.notion.com/help/notion-ai-security-practices).


### How long does it take for the integration to complete, and how far back does it look?

Once the integration is set up, Notion Mail search will be available immediately. It can search the entire inbox.


### How long does it take for Notion AI to read new emails?

New emails will be available for search within 30 minutes of arriving in your inbox.


### Can I limit the scope of my search to only Notion Mail?

Yes! In Notion AI, click `All sources` and narrow your scope to only `Notion Mail`.


### How does Notion store or reference my Notion Mail data in its systems?

We do not store Notion Mail data in vector databases like Turbopuffer, but we may temporarily cache email content via something like memcached to provide a faster search experience. See [this article](https://www.notion.com/help/notion-ai-security-practices) for more information.


### How can I disconnect my Notion Mail from Notion?

You can disconnect Notion Mail from Notion AI by going to `Settings` → `Notion AI`. Select `⚙️` next to `Notion Mail`, then `Disconnect`.


### What happens to my Notion Mail data if I disconnect?

Notion handles your mail data following strict data minimization principles. When you disconnect Notion Mail from Notion AI, your content becomes unsearchable immediately. All associated data is then deleted within 24 hours of your disconnection request.


### Can Notion AI read attachments?

No, not at this time.
