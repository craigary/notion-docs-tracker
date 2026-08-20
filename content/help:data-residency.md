---
title: "Data residency for Notion"
emoji: null
description: null
url: "https://www.notion.com/help/data-residency"
key: "help:data-residency"
coverImage: null
category: "Privacy & security"
categoryKey: "category:security-and-privacy"
---

Data residency, along with [Notion's security practices](https://www.notion.com/security), ensures that your data is stored and used only in the ways you require. With this update, eligible workspace owners will be able to choose whether to store their data at rest in their specified data region.

## Who can use this feature?

Enterprise Plan customers who are **sales-assisted** (in other words, customers who are working with an account team) can **migrate their existing data to their selected data region**.**&#x20;**&#x43;ontact your account team to set up data residency migration for an existing workspace. If you do not contact your account team and receive confirmation of data residency migration, your workspace will remain hosted in the United States.

Enterprise Plan customers who aren't currently working with an account team can request migrations by contacting email protected.

## How does data residency work?

Notion partners with Amazon Web Services to deliver reliable, high-performance data storage through regional data centers.

| **Data region**          | **Backup region**      |
| ------------------------ | ---------------------- |
| US-West-2 (Oregon)       | US-East-2 (Ohio)       |
| EU-Central-1 (Frankfurt) | EU-West-1 (Ireland)    |
| AP-Northeast-1 (Tokyo)   | AP-Northeast-3 (Osaka) |
| AP-Northeast-2 (Seoul)   | AP-Northeast-2 (Seoul) |

*\* Please contact your account team for more information about Notion’s hosting in Japan and Korea.*

## Data stored in the data region

The following categories of Customer Data (as defined in Notion's [Master Subscription Agreement](https://www.notion.com/Master-Subscription-Agreement-4e1c5dd3e3de45dfa4a8ed60f1a43da0)) will be stored at rest in a data center within the customer’s selected region as of the date that data residency is enabled:

* Page content

* Files (such as images and documents) uploaded to Notion

* Search index of Customer Data

* Third-party or bot-generated messages and files that are stored in Notion

## Data stored outside the data region

Unless listed above as [data stored in the data region](https://www.notion.com/help/data-residency?_ck=bb12d75484663688acf8eaa43caa0f1ee40c3dfc789d795e8f79c7e9ef8fcfc6#data-stored-in-the-data-region), data may be stored in regions outside of the customer’s data region. Examples:

* Account Information (as defined in Notion's [Master Subscription Agreement](https://www.notion.com/Master-Subscription-Agreement-4e1c5dd3e3de45dfa4a8ed60f1a43da0)).

* Usage Data (as defined in Notion's [Master Subscription Agreement](https://www.notion.com/Master-Subscription-Agreement-4e1c5dd3e3de45dfa4a8ed60f1a43da0)).

* Data processed by [Notion’s subprocessors](https://www.notion.com/notion/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734).

Notion Calendar and Notion Mail, any Notion Calendar and Notion Mail features, and any Beta Services are not covered by data residency.

**Note**: The data residency feature only changes the data at rest storage location for the categories of Customer Data described above stored by Notion in Amazon Web Services — no other aspects of Notion are affected. This commitment does not extend to any non-Notion Services. Notion will continue to store and process all categories of data in the United States and other international locations in accordance with Notion's Privacy Policy and, where applicable, the Data Processing Addendum. For more information on where information is stored and processed via our subprocessors or Notion affiliates, please see our [Subprocessors page](https://www.notion.com/notion/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734).

## Data migration

By default, your data will continue to reside in the United States. To migrate your organization's data to a data region, please contact your account team. Once the workspace is migrated, the categories of Customer Data described above will be deleted in the US after 30 days.

Enterprise organizations can specify a default region for newly created workspaces by going to your organization settings → `Data & Compliance` → `Data Residency`. Setting the region to Europe will prevent needing to migrate net new workspaces.

![Data migration set region](https://images.ctfassets.net/spoqsaf9291f/1y5ltYVaaSbXOly3vW7TxJ/3392f4942fff8f4c9307d3b89857cfd1/image__2_.png)


## FAQs