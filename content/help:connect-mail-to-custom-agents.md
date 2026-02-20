---
title: Connect Mail to Custom Agents
emoji: 📬
description: Automate your email workflows without ever leaving Notion 📬
url: https://www.notion.com/help/connect-mail-to-custom-agents
key: help:connect-mail-to-custom-agents
coverImage: https://images.ctfassets.net/spoqsaf9291f/3nDcdnr55ZxnKwDqmQurY0/38cbd9f8fb3c89437466706b9936697f/mail_in_custom_agents__1_.png
category: Notion AI
---

Custom Agents can connect to your Gmail to automate email workflows. Once connected, agents can read, organize, draft, and send emails on your behalf through automated triggers or by chatting with the agent directly.

Mail connections work with Gmail or Notion Mail. Using Notion Mail is not required to make use of the Mail connection capabilities.

The Mail connection for Custom Agents is available on any plan with access to Custom Agents.

## What your Custom Agent can do with Mail

The below actions are supported in both Notion Mail and Gmail:

|                          |                                               |
| ------------------------ | --------------------------------------------- |
| **Action**               | **What it does**                              |
| Search                   | Find specific emails in your inbox            |
| Archive                  | Archive emails to clean up your inbox         |
| Star                     | Mark important emails with a star             |
| Trash                    | Delete unwanted emails                        |
| Manage labels            | Create, apply, or remove labels               |
| Unsubscribe              | Unsubscribe from mailing lists                |
| Block and unblock sender | Block and unblock specific email addresses    |
| Write                    | Draft new emails or replies                   |
| Send                     | Send emails from your account                 |
| Manage filters           | List, create filters via chatting with agents |

#### **Notion Mail-only actions**

The below actions are supported ***only*** if using Notion Mail:

|                             |                                                |
| --------------------------- | ---------------------------------------------- |
| **Action**                  | **What it does**                               |
| Manage email status         | Update status and triage state in Notion Mail  |
| Set reminder                | Create reminders to follow up later            |
| Create mail block in Notion | Save emails as synced blocks in your workspace |

## How to connect Mail to your Custom Agent

1. Chat with your agent. Give it specific direction on how to handle mail events.

   * This can also be done manually in a Custom Agent's **`Settings`****.&#x20;**&#x47;o to **`Tools & Access`**, then choose **`+ Add connection`** → **`Mail`** → **`Connect`**

2. Go to **`Settings`** → **`Tools & Access`**

3. Choose the inboxes you want your agent to have access to.

4. Grant the permissions your agent needs: **Modify inbox, Draft**, and **Send**.

5. Choose if the Agent should **Require confirmation&#x20;**&#x62;efore executing an action.

6. Test the connection. If the agent’s behavior isn’t what you expect, chat with your agent to clarify instructions.

**Tip:** Be specific in your instructions. For example: "Archive all emails from newsletters with the word 'weekly' in the subject line" or "Draft a polite reply to customer inquiries and save them for my review."

## Mail triggers in Custom Agent

Add a mail-based trigger in your Custom Agent’s **`Settings`**.

1. Go to `Triggers. `Click **`+ Add trigger`** → **`Mail`** → **`Connect`**.

2. Under Mail, choose from the following triggers:

   * **New email received**: Runs when a new email arrives in the connected mailbox.

   * **New email sent**: Runs when you send a new email from the connected mailbox.

   * **New email received or sent**: Runs when a new email is either received or sent.

   * **Label applied to email**: Runs when a specific label is applied to an email.

3. Choose the Inbox you want the trigger to run on.

4. Add a **filter** to narrow which events fire a Mail trigger. Each trigger can be filtered to only run when an email fits a specified **From, To, Subject, Body,** or **Domain** attribute.

## Mail permissions in Custom Agent

When you connect Mail, you can choose your Agent’s permissions:

* **Modify inbox**: Archive, trash, apply labels, set reminders, block senders, and unsubscribe.

* **Draft**: Create drafts.

* **Send**: Send emails from your account.

* **Require confirmation**: Requires a user to approve or cancel an action before it executes. When toggled off, the agent can take the allowed actions without approval.

**Tip:** Use permissions and triggers (like running only when a label is applied) if you want to restrict which emails the agent processes.

## Sharing Custom Agents with Mail connections

If you share a Custom Agent that’s connected to Mail, anyone who has access to that Agent can view emails in the connected inbox. A warning will be shown before taking this action.

## Example instructions for Custom Agent

To get the best results, give your Custom Agent specific instructions.

#### **Inbox organizer**

Automatically triage incoming messages by applying labels, archiving low-priority emails, and setting reminders for important ones.

**Tell your Custom Agent:** *"When I receive an email, check if it's a newsletter. If yes, apply the 'Newsletter' label and archive it. If it's from a customer, star it and apply the 'Customer' label."*

#### **Inbox cleanup assistant**

Unsubscribe from unwanted mailing lists and archive or delete promotional emails automatically.

**Tell your Custom Agent:** *"Review my inbox for subscription emails. Unsubscribe from any newsletters I haven't opened in 30 days and archive them."*

#### **Email-to-database sync**

Extract key information from emails and create or update records in a Notion database.

**Tell your Custom Agent:** *"When I receive an email from a new contact, create a page in my CRM database with their name, email, and company. Add a link to the original email."*

#### **Auto-reply assistant**

Draft responses to common inquiries and save them for your review before sending.

**Tell your Custom Agent:** *"When I receive an email asking about pricing, draft a friendly reply with our standard pricing information and save it as a draft for me to review."*

## Troubleshooting

If your Custom Agent encounters errors, give the run a “thumbs down” and chat with the Agent to diagnose the issue. Then try these steps:

**Connection errors**

If you can’t find Mail in Tools & Access, Mail disconnects, or your agent says it can’t access email:

* Confirm your Agent is connected to the correct email account.

* Verify you have permission to edit the agent (**Can edit** or **Full access**).

* Disconnect and reconnect the Mail connection, then refresh Notion.

**Trigger errors**

If your agent isn’t running when email is received, is running multiple times, or can’t access email content:

* Check the agent’s **Activity** to confirm whether the trigger is firing vs. firing but failing.

* Verify the Mail connection is still active in **Tools & Access.**

* For label-based triggers, confirm the label name matches exactly.


## FAQs

### Can my agent send emails without my approval?

Yes, if you give it the **send** permission and include sending in your instructions. If you want to review emails before they’re sent, instruct your agent to save drafts instead.


### Which email providers work with this connection?

Mail connections work with Gmail or Notion Mail. Using Notion Mail is not required to make use of the Mail connection capabilities.


### Do Custom Agents have access to all my emails?

Custom Agents can only access emails in accounts you’ve connected to Notion and explicitly granted permission to access when setting up the connection.


### Can a Custom Agent agent manage multiple Gmail addresses?

Yes. You can connect more than one Gmail addresses with your agent. This can also be done manually in a Custom Agent's **`Settings`****.** Go to **`Tools & Access`**, then choose `+ `**`Add connection`** → **`Mail`** → **`Connect`**.

If you are a Notion Mail users, you can add additional email addresses via the **`Notion Mail UI`**. Click on the **`account switcher`** → **`+ Connect another address`**.
