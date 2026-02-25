---
title: Box AI Connector
emoji: 📁
description: Connect your Box account to Notion AI so you can search and use Box files directly in Notion 📂
url: https://www.notion.com/help/box-ai-connector
key: help:box-ai-connector
coverImage: https://images.ctfassets.net/spoqsaf9291f/1ienWaIrGsNYRe7fojYuzh/35b45707701f86309a0c30775f318314/box.png
category: Notion AI
---

### Who can connect Box to Notion AI?

To connect Box to Notion AI:

* You must be a Box Admin and Notion workspace owner.

* You must be on a paid Enterprise Notion plan.

### How do I connect Box?

To connect Box to your Notion workspace:

1. In Notion, open Notion AI at the bottom of your screen and click on `•` → `Connect Box`. You can also go to `Settings` →

   `Notion AI` click `+` under `Box` and follow the onboarding steps. Don't close Notion during the setup process!

2. You'll be redirected to a page in Box, which will ask you to grant access to to the connection. Click “Grant Access to Box”

3. Once the installation is complete, return to Notion.

4. Click `Got it`.

The connection will be complete immediately. You can manage the connection by opening Notion AI in the Settings modal and click the gear icon ⚙️ → `Settings.`


## FAQs

### What data does Notion AI Box Connector get access to?

Notion AI can read all Box files and folders associated with the connected account.


### Does Notion AI respect my Box permissions?

Yes. Notion AI strictly follows existing permissions as outlined in our [Notion AI Security Practices](https://www.notion.com/help/notion-ai-security-practices). Users can only generate content and receive responses about files they have permission to access in Box.

Box Permissions are inherited downward from parent folders.

💡 Example:` In Box → Folder 1 > Folder 2 > Folder 3 > text.txt`

* If a user has access to `Folder 1`, they will have access to `Folder 2 `and `Folder 3` . The user can not have access to `Folder 1 `but not `Folder 2` or `Folder 3`

* If user has access to `Folder 3` they would not have access to `Folder 1 `or `Folder 2 `unless directly granted access.

* `text.txt` is accessible to everyone who is directly granted access or has access to `Folder 3` or has access to `Folder 2` or `Folder 1`

In Box, shared links are an **overlay** that can expand access beyond collaborators depending on link scope. For example, you can customize the link's access permissions, like setting it to be accessible only to people within your company or to anyone with the link. Shared link permissions are currently not supported.


### Does Notion AI respect collaboration expiration and retention rules?

Yes. When a collaboration expires, users can no longer access those files. When a file reaches the retention period, users will not longer have access to those files. Checks are performed hourly.


### How long does it take for the integration to complete and how far back does it look?

The integration can take up to 72 hours to complete. Once the integration is set up, it will be able to find folders and files that were created, viewed or modified in the past year.


### How long does it take for Notion AI to read new Box content?

New files and folders received in Box will be available in Notion AI searches within an hour.


### Can I limit the scope of my search to only Box?

Yes! In Notion AI, click `Find in` to toggle between `Everything you can access`, `Notion,` and `Box`.


### Who can access Box content using Notion AI?

You must be both an Box user and a Notion workspace member to use this integration. Notion AI automatically maps Box members to their corresponding Notion accounts by email address. The system syncs permission changes every hour.


### How does Notion store or reference my Box data in its systems?

Files are stored as embeddings using vector databases like Turbopuffer. These embeddings allow for efficient searches and comparisons across different pieces of text to provide accurate and relevant responses to your questions.

These have been thoroughly vetted by our Security team as well as by an external auditor to obtain their SOC2 Type II certification. See [this article](https://www.notion.com/help/notion-ai-security-practices) for more information.


### Can I add connect multiple Notion workspaces to my Box?

Not at this time. The workspace admin will only be able to connect one Notion workspace to one Box account


### How can I disconnect my Box from Notion?

Workspace owners can disconnect Box by opening Notion AI Settings in the Settings menu and clicking on the gear ⚙️ next to `Box` → `Settings` → `Disconnect`.


### What happens to my Box data if I disconnect?

Notion treats your Box data with the privacy principle of data minimization in mind. If you decide to disconnect your Box from Notion AI, your Box content will immediately become unsearchable.
