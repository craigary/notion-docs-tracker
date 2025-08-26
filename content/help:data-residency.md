---
title: Data residency for Notion
emoji: 🗃️
description: Learn about Notion’s data residency offering 🗃️
url: https://www.notion.com/help/data-residency
key: help:data-residency
coverImage: https://images.ctfassets.net/spoqsaf9291f/4TlJQBAgbEwCH1otCiKmRD/2a99a687e60b1f80695fd959de6fcc12/Create_a_database_-_hero.png
category: Security & privacy
---

Data residency, along with [Notion's security practices](https://www.notion.com/security), ensures that your data is stored and used only in the ways you require. With this update, eligible workspace owners will be able to choose whether to store their data at rest either in the US or EU.

## Who can use this feature?

Only Enterprise Plan customers who are **sales-assisted** (in other words, customers who are working with an account team), can **migrate their existing data to the EU region**.**&#x20;**&#x43;ustomers who aren't currently working with an account team cannot switch regions at this time. Contact your account team to set up data residency migration for an existing workspace. If you do not contact your account team and receive confirmation of data residency migration, your workspace will remain hosted in the United States.

## How does data residency work?

Notion partners with Amazon Web Services to deliver reliable, high-performance data storage through regional data centers.

| **Data region**          | **Backup region**    |
| ------------------------ | -------------------- |
| US-West-2 (Oregon)       | US-East-1 (Virginia) |
| EU-Central-1 (Frankfurt) | EU-West-1 (Ireland)  |

## Data stored in the data region

The following categories of Customer Data (as defined in Notion's [Master Subscription Agreement](https://www.notion.com/Master-Subscription-Agreement-4e1c5dd3e3de45dfa4a8ed60f1a43da0)) will be stored at rest in a data center within the customer’s selected region as of the date that data residency is enabled:

* Page content

* Files (such as images and documents) uploaded to Notion

* Search index of Customer Data

* Third-party or bot-generated messages and files that are stored in Notion

## Data stored outside the data region

The following categories of data may be stored in regions outside of the customer’s data region:

* User account information

* Workspace name and billing information

* Workspace membership information

* Usage information and data used to measure seat count and revenue

* Analytics data to measure performance and quality of service

* Notion Calendar and Notion Mail, any Notion Calendar and Notion Mail features, and any Beta Services are not covered by data residency

**Note**: The data residency feature only changes the data at rest storage location for the categories of Customer Data described above stored by Notion in Amazon Web Services — no other aspects of Notion are affected. This commitment does not extend to any non-Notion Services. Notion will continue to store and process all categories of data in the United States and other international locations in accordance with Notion's Privacy Policy and, where applicable, the Data Processing Addendum. For more information on where information is stored and processed via our subprocessors or Notion affiliates, please see our [Subprocessors page](https://www.notion.com/notion/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734).

## Data migration

By default, your data will continue to reside in the United States. To migrate your organization's data to the EU data region, please contact your account team. Once the workspace is migrated, the categories of Customer Data described above will be deleted in the US after 30 days.


## FAQs

### What is the cost of enabling data residency?

Data residency is available free of charge to customers on the Enterprise Plan.


### What products are not covered by data residency?

Notion Calendar and Notion Mail, any Notion Calendar and Notion Mail features, and any Beta Services are not covered by data residency.


### Is Customer Data stored in the EU when using Notion AI?

The categories of Customer Data described above are stored in the EU with the data residency feature. The large language model (LLM) providers we use to provide Notion AI utilize zero data retention for Enterprise Plan workspaces, so no data is stored with LLM providers. See [here](https://www.notion.com/help/notion-ai-security-practices) for more information on Notion AI security and privacy practices.


### How does Notion handle backups?

Notion’s backups are stored within the same region as production in the Europe. Notion is hosted by AWS and stores Customer Data using a combination of databases. By default, AWS provides durable infrastructure to store important data and is designed for durability of 99.9% of objects. Automated backups of all customer and system data is enabled, and data is backed up daily at minimum. The backups are encrypted in the same way as live production data, and are monitored and alerted.


### Will integrations still be available?

Yes, previously enabled apps will remain enabled. Admins can choose to disable the addition of new integrations that are not allowlisted. Data that is hosted or processed by integrations and non-Notion Services are outside the scope of Notion’s data residency offering.


### My company isn’t based in the EU. Can I still have my data hosted there? 

Yes, customers on our Enterprise Plan can contact their account team to migrate an existing workspace to the EU and have their data hosted there.


### When is Customer Data processed outside the EU?

The data residency feature only changes the data at rest storage location for the categories of Customer Data described above that are stored by Notion in Amazon Web Services.

Processing of Customer Data outside the EU can include:

* Customer Data processed by Notion [subprocessors](https://notion.notion.site/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734), including LLM providers

* [Duplicating content](https://www.notion.com/help/transfer-content-to-another-account) from other workspaces such as downloading templates and moving content from a US workspace to an EU workspace

* If a [synced block’s](https://www.notion.com/help/synced-blocks) source is a US hosted workspace
