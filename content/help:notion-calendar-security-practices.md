---
title: Notion Calendar security practices
emoji: 🔒
description: Learn how Notion Calendar, a Notion product, provides secure access to your calendar and protects your data 🔒
url: https://www.notion.com/help/notion-calendar-security-practices
key: help:notion-calendar-security-practices
coverImage: https://images.ctfassets.net/spoqsaf9291f/7p7r9IQJhKKOhgrXa1QFoG/e8d045240fb448b29e0368488108e69e/notion-ai-security-practices.png
category: Notion Calendar
---

## General data and security

### What encryption does Calendar use?

Notion Calendar follows Notion’s encryption practices and data is encrypted at rest using AES-256. Customer data is encrypted when on Notion’s internal networks, at rest in Cloud storage, database tables, and backups. Data sent in-transit is encrypted using TLS 1.2 or greater. For further information, [please refer to this article →](https://www.notion.com/help/security-and-privacy)

### What data does Notion Calendar store?

Notion Calendar is verified by Google <!-- -->and iCloud<!-- --> to utilize OAuth API verification and does not access any user data categorized as restricted. [Learn more here →](https://support.google.com/cloud/answer/9110914)

Notion Calendar never stores nor sees your Google or iCloud password. You sign in directly with Google or iCloud and we carefully chose the scope of requested access to the minimum. For more information, [see this article →](https://www.notion.com/help/create-a-notion-calendar-account#create-a-notion-calendar-account-with-google)

### Who is your cloud service provider and what region are your instances located in?

Notion Calendar and Notion are on the same infrastructure and hosted on Amazon Web Services (AWS), one of the major cloud service providers. Our instances are located in the United States.

### Do you have a bug bounty program?

Notion Calendar and Notion follow the same bug bounty process. Please refer to our [Responsible Disclosure Policy](https://www.notion.com/Responsible-Disclosure-Policy-5f18bb6b86804eaf989c006131778b9c) for more information.

### Can Notion Calendar permanently delete my data?

None of your data is edited or deleted without your action. If you use Notion Calendar to delete events or contacts, they will remain in your Google or iCloud account's trash and can be restored.

If you want to delete your Notion Calendar user account, [follow the instructions here →](https://www.notion.com/help/manage-your-google-and-notion-calendar-accounts)

Calendar also follows Notion’s data handling practices. Please refer to the [Data Processing Addendum](https://www.notion.com/notion/Data-Processing-Addendum-361b540101274b1fa7e16b90402b0d99) for more information.

### What is pstmrk.it?

Postmark is one of our email service providers. Notion Calendar uses the domain [pstmrk.it](http://pstmrk.it/) to track link opens for aggregate analytics. You can learn more on [Postmark’s website](https://postmarkapp.com/support/article/1059-what-is-pstmrk-it).

### How are Notion Calendar sessions managed?

For Notion Calendar accounts that use Notion accounts to sign in, sessions will be shared with and tied to Notion login sessions. These sessions can be managed or revoked from Notion.

## Enterprise

### How do users authenticate into Notion Calendar?

Users use OAuth with Google to log into Notion Calendar. Google Workspace admins can opt-out of or restrict access to Notion Calendar for all users associated with their company’s domain.

### Do you have a GDPR Data Processing Agreement (DPA)?

Notion Calendar follows Notion’s [Data Processing Addendum](https://www.notion.com/notion/Data-Processing-Addendum-361b540101274b1fa7e16b90402b0d99).

### Who are your data sub-processors?

You can find a list of our sub-processors [here](https://www.notion.com/0430e1a7a00642d69daa1bb2f657b265?pvs=21).

### Is Notion Calendar SOC 2 certified?

Notion Calendar will be in scope for Notion’s upcoming SOC 2 attestation in May 2024.
