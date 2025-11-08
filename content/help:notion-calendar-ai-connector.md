---
title: Notion Calendar AI Connector (beta)
emoji: 🗓️
description: Anyone on any Notion plan can connect Notion Calendar to Notion AI 🗓️
url: https://www.notion.com/help/notion-calendar-ai-connector
key: help:notion-calendar-ai-connector
coverImage: https://images.ctfassets.net/spoqsaf9291f/7gmpTAUpDLEDZKJqcrHgB0/ee6443167da37ddfd1670b982206a103/Notion_Calendar_Reference.png
category: Notion AI
---

**Note:** The Notion Calendar AI Connector is currently in beta and subject to the beta terms of your agreement.

## Connect Notion Calendar to Notion AI

**Who can connect Notion Calendar to Notion AI?**

Anyone on any Notion plan can connect Notion Calendar to Notion AI. Users must create a Notion Calendar account in order to set up the connection successfully.

At this time, the email you use for Notion Calendar must match with the email you use for your Notion workspace. Only your primary email will be accessed.

**How do I connect Notion Calendar?**

To connect Notion Calendar to Notion AI:

1. Go to `Settings` → `Notion AI`.

2. Select `+` next to `Notion Calendar`.

3. In the window that appears, select `Start connection`.

Notion AI will be able to search and answer questions related to your emails in Notion Calendar.

## Example prompts

Try prompting Notion AI with the following:

* “When is my next event?”

* “When are my doctor’s appointments in September?”

* “Summarize my events for next week.”

* “How often did I meet with Kiki this summer?”


## FAQs

### Can I add connect multiple Notion workspaces to my Notion Calendar?

Yes! As long as you’re logged into the same email address in your Notion workspace, you can connect that workspace to your Notion Calendar.


### Can I set up the Google Calendar and Notion Calendar in the same workspace?

No. If your workspace owner connects your Google Organization for Google Calendar, your Notion Calendar connection will disconnect and be replaced with your Google Calendar AI Connector.


### Why would I connect Notion Calendar instead of Google Calendar?

* The Google Calendar connector requires a paid Google Workspace plan type in order to set up the connection. This is a requirement from Google that only allows integrations for paid Google Workspace plan types. All plan types may access the Notion Calendar connector.

* The Google Calendar connector must be installed by a Notion Workspace owner and Google Workspace admin of a paid workspace. Notion Calendar can be set up by any individual member of a Notion workspace as long as a Notion Calendar account exists.

* The Google Calendar connector is only available to Business and Enterprise Plans.


### What data does Notion AI get access to?

Notion AI can read all calendar events in your Notion Calendar. We maintain strict cross-user security.


### Does Notion AI respect my Notion Calendar permissions?

Yes. Each Notion user’s AI searches only that user’s calendar — we use an exact email address match. See more details about our [Notion AI security practices](https://www.notion.com/help/notion-ai-security-practices).


### How long does it take for the integration to complete?

Once the integration is set up, Notion Calendar search will be available immediately.


### How long does it take for Notion AI to read new events?

New events will be available for search zero to thirty minutes after they are created.


### Can I limit the scope of my search to only Notion Calendar?

Yes! In Notion AI, click `All sources` and narrow your scope to only `Notion Calendar`.


### How does Notion store or reference my Notion Calendar data in its systems?

We do not store Notion Calendar data in vector databases like Turbopuffer, but we may temporarily cache content to provide a faster search experience. See [this article](https://www.notion.com/help/notion-ai-security-practices) for more information.


### How can I disconnect my Notion Calendar from Notion?

You can disconnect Notion Calendar from Notion AI by going to `Settings` → `Notion AI`. Select `⚙️` next to `Notion Calendar`, then `Disconnect`.


### What happens to my Notion Calendar data if I disconnect?

Notion handles your data following strict data minimization principles. When you disconnect Notion Calendar from Notion AI, your content becomes unsearchable immediately. All associated data is then deleted within 24 hours of your disconnection request.


### Can Notion AI read attachments?

No, not at this time.
