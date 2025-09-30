---
title: Slack AI Connector
emoji: 💬
description: Learn how to connect your Slack workspace to your Notion workspace so that you can find quick answers in Notion using information from your Slack conversations 💬
url: https://www.notion.com/help/notion-ai-connectors-for-slack
key: help:notion-ai-connectors-for-slack
coverImage: https://images.ctfassets.net/spoqsaf9291f/5R5Xs1T5Or2XqdzaiiBq8n/f774676f6acd55a13277974b1881640d/Slack_connectors.png
category: Notion AI
---

**Note:** This feature is only available on the Business or Enterprise Plan.

There are lots of other ways to use Slack and Notion together. Learn more about our Slack integration [here →](https://www.notion.com/help/slack)

Notion AI answers are generated using LLMs like GPT-5 and Claude. You should double-check all answers for accuracy.

## Connect Slack to Notion AI

**Note:** If you’re using Slack Enterprise Grid, please reach out to your sales representative to get your Notion AI connector set up.

**Who can connect Slack to Notion AI?**

* You must be a Slack workspace owner and a Notion workspace owner.

* Your workspace must be on the Business or Enterprise Plan and have more than one member.

* If you’re a Notion workspace owner but not also approved to connect external apps to Slack, you’ll need approval from someone who has the appropriate Slack permissions to complete the connection.

**How do I connect my Slack workspace?**

Make sure you're setting up the Slack AI connector in Notion; set up won't work if you initiate it in Slack.

To connect your Slack workspace to Notion AI:

1. Go to `Settings` → `Notion AI`.

2. Select `+` next to `Slack`.

   ![hc: notion ai slack connector entry point](https://images.ctfassets.net/spoqsaf9291f/7N2PMC7UueZIl4wU4axGqM/aa74311c69214de6029b13f51155f644/Help_Center_Updates_AI_Connectors_Settings_V2.jpg)

3. You'll be taken to Slack to start the connection. Make sure you're in the right Slack workspace before continuing the setup. **Don't close Notion during the setup process!**

   ![hc: notion ai connector set up in slack](https://images.ctfassets.net/spoqsaf9291f/2pxvevkde57cZHRFdnOcbJ/bef67dcdcb3f9c0218127794b25a051c/Help_Existing_AI_Connectors.png)

4. **If you’re a Slack workspace owner**, you’ll be able to select the Slack workspace and channels you want to connect. You can select `All public channels` or specific public channels. You also have the option to include public channels created in the future. This won’t include public channels containing external users, like Slack Connect channels. You also won’t be able to connect any private channels or private DMs.

   * **If you’re not a Slack workspace owner**, you can request this integration. Your Slack workspace owner or approved Slack members will be notified. Once your request is approved, you can choose the Slack channels you want to connect. **Make sure you’re requesting the integration for the right Notion workspace!**

5. Once Notion AI has joined those public channels, depending on how your Slack owner has set up your [workspace settings](https://slack.com/help/articles/115002695043-Manage-join-and-leave-messages-), a message will be sent in those public channels to say Notion AI has joined them and will join all future public channels. **This message won’t show up in Slack channels with external users.**

Once the integration is set up, it will be able to find messages going back a year from when the setup is complete. For example, if you connect Slack with Notion AI on June 1, 2024, Notion AI will be able to find information from messages in Slack sent on June 1, 2023 and later.

This process can take up to 36 hours.

### Which Slack channels can be connected to Notion AI?

When you connect Slack to Notion AI, you have the option to select specific public Slack channels you’d like to connect. Alternatively, you can choose to connect all public channels, including ones that are created in the future.

These public channels will not include any Slack Connect channels that you use to communicate with external partners.

**Note:**

* The Slack AI connector doesn't index Canvases and Lists.

* You can't automatically opt-in to all public channels; this needs to be set up manually by admins and users.

* At this time, you also can’t connect private Slack DMs and private Slack channels to Notion AI. Content from bots is also excluded from search results.

* New messages may need about 30 minutes to be indexed before they appear in search results.

## Where can I use my Slack AI Connector?

You can search Slack via Notion AI Connectors in the following places:

* The Notion AI chat in the bottom right of Notion.

* The Notion AI widget at the top of `Home`.

* `Search` in your sidebar.

You can narrow your search to just Slack by opening the `All sources` toggle in chat and `Home` and selecting `Slack`. You can also filter Notion AI `Search` results to show only information from Slack.

## Best practices and example prompts

**The Slack AI Connector is most helpful for:**

* Getting summaries and updates from specific time periods or channels.

* Finding conversations and information from Slack without leaving Notion.

* Summarizing information and gathering context that's scattered across channels.

* Discovering company knowledge.

**You could try prompting Notion AI with the following:**

* "Summarize company activity from this week."

* "What happened while I was out of office?"

* "Tell me the major updates from {channel name}."

**Learn more**

* [Notion AI Connectors](https://www.notion.com/help/notion-ai-connectors)

* [What is Notion AI?](https://www.notion.com/help/notion-ai-faqs)


## FAQs

### Does this integration respect existing Notion AI permissions?

Notion AI will honor existing permissions according to our existing [Notion AI Security Practices](https://www.notion.com/help/notion-ai-security-practices). Users will not be able to generate content or receive responses based on resources they do not have access to.

Specific to third party content, Notion AI is handling both private and public content with security in mind, only ingesting content according to the permissions mapping between Slack and Notion users.


### How are permissions mapped?

Notion AI maps Slack members to Notion members, so individuals must be authenticated at the user level for its use.

Through account mapping and real-time event subscriptions, Notion conducts ongoing checks for changes to permissions and access levels that would impact the Slack content surfaced in Notion AI for each individual.

*Examples of permissions-related scenarios that Notion proactively check and updates for:*

* When users edit or delete a message in Slack, Notion AI monitors for modified or deleted content via webhooks and will reflect these updates in near real-time.

* Slack or Notion guest users are not allowed to leverage Notion AI at all. In the case where a guest user is given full Slack workspace member and full Notion workspace member permissions, Notion AI monitor for membership changes and updates those permissions changes in near-real time.

* When a user is deactivated in Slack, Notion AI monitors permissions and updates that permission change within approximately 30 minutes.


### Are guests supported?

No, this integration is not available for guests in your Notion workspace, or guests in your Slack workspace (like people external to your organization that you may communicate with using Slack Connect).


### Will external Slack Connect channels be indexed?

No, all external messages and channels will be excluded.


### Do you support Slack Enterprise Grid?

Yes, we do! Please reach out to your sales representative to get started.


### How long does it take for the integration to complete for public channels?

Once the integration is set up, it will be able to find messages going back a year from when the setup is complete.

For example, if you connect Slack with Notion AI on June 1, 2024, Notion AI will be able to find information from messages in Slack sent on June 1, 2023 and later. Depending on the amount of content shared in your public channels during this time frame, this process can take up to 36 hours.


### How long does it take for Notion AI to read new Slack messages?

New messages in public channels may take 30 minutes to be searchable by Notion AI.


### If I connect Slack to Notion AI, does Notion AI automatically begin searching all of my Slack channels?

No, Notion AI only searches public Slack channels, and during initial setup, our configuration options allow you to choose either a discrete set of public channels or all public channels in your workspace to be included.

Additionally, you have the option to continuously include all public channels that are created after initial setup. This configuration requires approvals via the Notion workspace owner and the Slack admin.


### How does Notion store or reference my Slack data in its systems?

Slack<!-- --> content is stored as embeddings using vector databases like Turbopuffer. These embeddings allow for efficient searches and comparisons across different pieces of text to provide accurate and relevant responses to your questions.

Notion’s vector databases have been vetted by our Security team as well as by an external auditor to obtain their SOC2 Type II certification. See [this article](https://www.notion.com/help/notion-ai-security-practices) for more information.


### Why does the “This app is not approved by Slack” banner appear?

Users will see a This app is not approved by Slack banner because Slack does not approve apps that enable certain types of search functionality, like searching Slack content externally, making formal approval for Notion AI unlikely.

However, the integration is secure, follows Slack’s policies, and is commonly connected directly through Notion. The lack of approval is a policy limitation, not a security issue. Notion AI only accesses data users are authorized to see, stores it securely in a SOC2 Type II environment, and does not use customer data to train AI models.


### I connected the wrong Notion workspace. How can I disconnect my Slack workspace from Notion?

To disconnect your Slack workspace, go to `Settings` → `Notion AI`. Select `⚙️` next to Slack → `Settings` → `Disconnect`.


### What happens to my Slack data if I connect to Notion AI and then decide to disconnect?

Notion treats your Slack content with the privacy principle of data minimization in mind. If you decide to disconnect your Slack environment from Notion AI, your Slack content will immediately become unsearchable, and your Slack data used for Notion AI will be deleted in less than one day from when the request is made.
