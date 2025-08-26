---
title: Notion Mail security practices
emoji: ✉️
description: Learn about how we handle security for Notion Mail ✉️
url: https://www.notion.com/help/notion-mail-security-practices
key: help:notion-mail-security-practices
coverImage: https://images.ctfassets.net/spoqsaf9291f/7p7r9IQJhKKOhgrXa1QFoG/e8d045240fb448b29e0368488108e69e/notion-ai-security-practices.png
category: Notion Mail
---

## General questions

**What email providers does Notion Mail support?**

Notion Mail currently only supports Gmail. Microsoft Outlook is not supported at this time.

**Is Notion Mail compatible with SSO and SCIM protocols?**

Yes, Notion Mail offers full compatibility with SSO (Single Sign-On) and SCIM (System for Cross-domain Identity Management) protocols, ensuring seamless integration with your existing authentication and user provisioning systems.

**Does Notion Mail integrate with Notion’s analytics and audit log?**

Not at this time. However, administrators can monitor user activity and retrieve audit logs through the Google Admin Console.

**Can administrators control member access to Notion Mail?**

Yes, administrators have the ability to approve or deny member access to Notion Mail through both the Notion [Admin Console](https://www.notion.com/help/organization-level-controls) or Google Admin Console. In the Notion Admin Console, select to `People` in the left sidebar, and toggle on or off `Enable Notion Mail`. In your Google Workspace, you can manage Notion Mail access at the Google admin level. See more information [here →](https://support.google.com/a/answer/7281227?hl=en)

**Can administrators opt-out of Notion Mail’s AI features for their organization?**

If you’re **on Notion’s Enterprise Plan and have a verified domain**, you’ll be able to turn off Notion AI features in both Notion and Notion Mail for everyone in your workspace by going to `Settings` in Notion and toggling on `Notion AI`. If you don’t have a verified domain, you can [follow these steps](https://www.notion.com/help/domain-management#verify-a-domain-for-your-organization) to verify a domain for your organization and try again.

## Data and security

**What encryption does Notion Mail use?**

Notion Mail follows Notion’s encryption practices and data is encrypted at rest using AES-256. Customer data is encrypted when on Notion’s internal networks, at rest in Cloud storage, database tables, and backups. Data sent in-transit is encrypted using TLS 1.2 or greater. For further information, please refer to [this article →](https://www.notion.com/help/security-and-privacy)

**What data types are collected and stored by Notion Mail?**

Notion Mail collects and stores the following data types:

* Metadata on email, such as email labels, email send and receive dates, and recipients’ and senders’ addresses.

* Email body (including sent and received email content, text snippets and subject lines) and email summary.

* Quick replies (suggested replies that users choose from).

* User settings and preferences, such as signature, display name, and profile picture.

Notion Mail cannot see or store your Google password. Users will connect their Google account to their Notion Mail account. Notion Mail requires the following access:

* /auth/userinfo.email: Your primary Google Account email address.

* /auth/userinfo.profile: Your personal info, including any that you've made publicly available.

* /auth/calendar: This permission is used to manage calendars by creating events, deleting events, accepting RSVPs, and declining RSVPs, as well as creating new calendars as the user deems necessary.

* /auth/contacts.readonly: This permission is used to help autocomplete a recipient list when a user is attempting to send an email.

* /auth/contacts.other.readonly: This permission is used to help autocomplete a recipient list when a user is attempting to send an email.

* /auth/directory.readonly: This permissions is used to help autocomplete a recipient list with users from within the same GSuite organization.

* https\://mail.google.com/: This permission is used to allow users to two-way synchronize their inbox with Gmail, as well as compose and send emails from our client.

**How do users authenticate into Notion Mail?**

Users sign into Notion Mail using their existing sign in flow for Notion. Notion Mail leverages the same authentication settings as Notion. If users use SAML to authenticate into Notion, then users will log into Notion Mail using the same SAML settings. No additional configuration is required.

Users authorize Notion Mail to access Gmail data directly using OAuth 2.0. Notion Mail is approved by Google to utilize these sensitive and restricted Google OAuth scopes to access Gmail data. Learn more [here →](https://support.google.com/cloud/answer/13463073?visit_id=638730759465397515-73725525\&rd=1)

Google workspace admins can opt-out of or restrict access to Notion Mail for all users associated with their company’s domain.

**Who is your cloud service provider and what region are your instances located in?**

Notion Mail is hosted on Amazon Web Services (AWS) in the us-west-2 region (Oregon). More information can be found on [Notion's List of Subprocessors](https://www.notion.com/notion/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734).

**Do you have a bug bounty program?**

Yes, Notion Mail is incorporated into our bug bounty program. Please refer to our [Responsible Disclosure Policy](https://www.notion.com/Responsible-Disclosure-Policy-5f18bb6b86804eaf989c006131778b9c) for more information.

**Can Notion Mail permanently delete my data?**

Notion Mail is a two-way sync client that reflects changes between Notion Mail and Gmail. When a user moves an email to trash in Notion Mail, it will also appear in Gmail's trash folder. If a user doesn’t restore the email from trash, it will be permanently deleted. The same is applicable to Gmail labels.

**Can I uninstall Notion Mail and delete my Notion Mail data?**

If you want to delete your Notion Mail data, you can navigate to Settings within Notion Mail to delete Mail data.

**How does Notion Mail load remote images?**

Notion Mail securely and privately proxies all remote image loading to prevent IP tracking.

**Does Notion Mail block trackers?**

Notion Mail blocks IP and geographic tracking. We hope to block read receipts in the near future.

**Is my email data used to train AI models?**

Notion and its AI sub-processors do not use Customer Data to train any models. We specifically have contractual agreements in place with our AI sub-processors that prohibit the use of Customer Data to train their models.

Your use of Notion AI does not grant Notion any right or license to your Customer Data to train our machine learning models.

**Do you have a GDPR Data Processing Agreement (DPA)?**

Notion Mail follows [Notion’s Data Processing Addendum](https://www.notion.com/notion/Data-Processing-Addendum-361b540101274b1fa7e16b90402b0d99).

**Who are your data sub-processors?**

Notion Mail shares the list of Notion’s third-party Subprocessors [here](https://www.notion.com/notion/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734).

**Is Notion Mail SOC 2 compliant?**

Notion Mail is SOC 2 Type I compliant and working towards SOC 2 Type II.

**Is Notion Mail HIPAA compliant?**

Notion Mail is HIPAA compliant, provided that the customer follows [Notion's HIPAA configuration guidelines](https://www.notion.com/help/hipaa).

**Is Notion Mail ISO 27001 certified?**

Notion Mail will be certified against ISO 27001:2022 by the end of 2025.

**Does Notion Mail have zero retention polices for AI inference?**

If any of a user’s Notion workspaces are on the Enterprise plan, then all Notion Mail AI inferences will adopt zero retention for the user.

Notion AI [Subprocessors](https://www.notion.com/notion/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734) have data retention policies that allow Notion to meet [our obligations to customers for the processing of data](https://notion.notion.site/Data-Processing-Addendum-361b540101274b1fa7e16b90402b0d99?pvs=4). When using Notion AI, our LLM providers utilize zero data retention for Enterprise plan workspaces, so no data is stored with LLM providers. For all non-Enterprise plan workspaces, LLM providers only retain Customer Data for 30 days or fewer before deletion. Notion AI is additionally powered by OpenAI's embeddings. OpenAI does not retain any Customer Data through their embeddings service.
