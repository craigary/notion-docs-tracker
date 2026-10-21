---
title: "Connect SharePoint and OneDrive to Notion Agents"
emoji: null
description: "Give your Custom Agent access to specific SharePoint and OneDrive sites, libraries, folders, or files."
url: "https://www.notion.com/help/connect-sharepoint-and-onedrive-to-notion-agents"
key: "help:connect-sharepoint-and-onedrive-to-notion-agents"
coverImage: null
category: "Notion AI Connectors"
categoryKey: "category:notion-ai-connectors"
---

This connector replaces our [legacy version](https://www.notion.com/help/notion-ai-connector-for-microsoft-sharepoint-and-onedrive). To keep your data current, **update to the new connector by October 31, 2026.&#x20;**&#x49;f you haven’t connected by that date, SharePoint access in Notion AI will be unavailable until you complete setup.

Each user must connect their own Microsoft account, even if a workspace administrator has already connected the legacy connector or approved the Microsoft app. Once you connect, Notion AI uses your personal live connection.

Connect your Microsoft 365 account to read SharePoint and OneDrive files in Notion AI. Ask Notion Agent to summarize documents, analyze spreadsheets, and find the files you need. Creating and editing files is coming soon.

Notion Agent retrieves files through live Microsoft tools when you need them. It can access only files that your connected Microsoft account has permission to access.

## Who can connect SharePoint and OneDrive to Notion AI?

* You need an active Microsoft 365 work or school account with SharePoint and OneDrive access.

* You need a Notion Business or Enterprise plan.

* Your organization may require a Microsoft administrator to approve the app.

Your access follows Microsoft permissions. You can access content shared directly with you or through modern groups. For details, see [Microsoft’s guide to SharePoint permissions](https://learn.microsoft.com/en-us/sharepoint/modern-experience-sharing-permissions). Classic (legacy) groups aren’t supported.

## How do I connect SharePoint and OneDrive?

If Microsoft asks for administrator approval, contact your Microsoft administrator. After they approve the app, return to Notion and finish connecting your account. Approval lets users authorize the app, but it doesn’t connect their accounts for them.

## Connect from Settings

1. Open `Settings` → `Connections` → `Browse`.

2. Search for `SharePoint`, open its connection tile, and select `Connect`.

3. Sign in with the Microsoft account you want to use, review the requested permissions, and complete authorization.

## Connect from a Notion AI chat

1. Open Notion AI and ask it to “Connect SharePoint.”

2. Select `Connect` in the connection card.

3. Sign in with the Microsoft account you want to use.

4. Review the permissions requested by the app and complete Microsoft’s authorization flow.

5. Return to your chat and ask Notion Agent to find or read a SharePoint or OneDrive file.

## Connect to a Custom Agent (Coming soon)

Use a Custom Agent when you want a repeatable workflow with a defined set of files. To connect:

1\. Open the Custom Agent’s settings and go to `Tools & access`.\
2\. Add `SharePoint` and attach your Microsoft connection.\
3\. Paste links to the sites, document libraries, folders or individual files the agent should use.\
4\. Choose `Read` for each resource.\
5\. Save the configuration and test the agent with a file inside the allowed resources.

## Microsoft administrator approval

Whether users can authorize the app themselves depends on your Microsoft tenant’s consent policies. If your organization requires administrator approval, an authorized Microsoft administrator must review and approve the requested permissions in Microsoft.

For an app already listed in your tenant, your administrator can use the following steps:

1. Sign in to the Microsoft Entra admin center with a role authorized to grant consent.

2. Go to `Entra ID` → `Enterprise apps` → `All applications`.

3. Select the Notion application identified in the user’s consent request. Verify the application before approving it.

4. Under `Security`, select `Permissions` and review the requested access.

5. If the permissions meet your organization’s requirements, select `Grant admin consent`.

Microsoft administrators can also control which users may sign in to the application through user assignment policies. See [Microsoft’s guide to granting admin consent](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent) for prerequisites and other approval methods.

**Users still need to connect their own accounts after administrator approval. There is no separate Notion workspace-wide sign-in that authenticates every user.**

## How to work with your files in Notion AI

The connection supports these file workflows:

* **Find and read files**: Search for files, browse folders and summarize supported documents.

* **Analyze documents**: Compare policies, pull out decisions or bring together information from multiple files.

* **Work with Excel**: Read workbook data, update cell ranges and append rows within the permissions of your Microsoft account.

* **Work on a specific file**: Provide its SharePoint or OneDrive link so the agent can access that resource directly.

For example, you could ask:

* “Find our parental leave policy in SharePoint and summarize the eligibility requirements.”

* “Compare these two project proposals and highlight the differences: \[file links].”

* “Read the regional sales workbook and summarize performance by region.”


## FAQs

### Why do I see “Contact a Notion admin” when trying to connect?

Your Notion workspace may require admin approval for connections. Workspace owners and admins can control which personal connections members can use, along with link previews, database sync, and MCP connections. If SharePoint isn’t approved for your workspace, the connection shows `Contact an admin` instead of `Connect`.

Ask a workspace owner or admin to approve SharePoint in `Settings` → `Connections` → `Manage`. Once SharePoint is approved, connect your own Microsoft account. Notion workspace approval is separate from Microsoft administrator approval, and your organization may require both.


### What permissions will Notion AI have once connected?

Notion Agents use your Microsoft account and can access files you can open. Custom Agents use their creator’s connection and are limited to configured resources and the creator’s Microsoft permissions.


### What file types and limitations apply?

Supported: DOCX, XLSX, PPTX, PDF, CSV, TXT, and Markdown. Site pages, Lists, OneNote, and SharePoint triggers aren’t supported. Reads and downloads are limited to 10 MiB; uploads to 5 MB; spreadsheet extraction to 500 rows per sheet (request a specific range for more). SharePoint results aren’t available through external tools via Notion MCP.


### How fresh are the results?

The connection requests content from Microsoft when the agent searches or reads a file, rather than waiting for a Notion workspace-wide ingestion cycle. Microsoft’s own search indexing can still affect when a newly created or updated file appears in search.

If you have the file’s link, provide it directly to the agent. Live access does not guarantee that every new file immediately appears in Microsoft search results.


### Why can’t Notion AI find a file I can open in Microsoft?

First, check that you connected the Microsoft account that can open the file, then try providing the file’s direct link. Also check that the file type and size are supported.

For a Custom Agent, make sure the file is inside a resource configured in `Tools & access` and that the attached connection can still access it. A read-only grant allows reading but not writing.


### Can I choose which files a Custom Agent can access?

Yes. Configure individual files, folders, document libraries or sites in `Tools & access`, and choose the allowed actions for each resource. These settings restrict the agent even when the connected Microsoft account has broader access.


### Does a SharePoint connection give the agent more access to Notion?

No. The Microsoft connection does not expand the agent’s access to Notion pages. Its Notion permissions and its Microsoft connection are separate.


### Is all my SharePoint content indexed by Notion?

This connection retrieves content through live Microsoft tools; it does not build a workspace-wide SharePoint search index in Notion. Retrieved content can be used in your agent’s responses and workflow, so refer to [Notion AI security practices](https://www.notion.com/help/notion-ai-security-practices) for information about how Notion AI handles data.


### Can I restrict the SharePoint and OneDrive connection to a single Microsoft tenant?

If your organization has more than one Microsoft tenant and you want Notion to reach only one of them, a Microsoft administrator can set this up in Microsoft Entra:

1. Keep the Notion app turned on in the tenant you want to allow.

2. In every other tenant, turn off user sign-in for the Notion app (or block it).

After that, accounts in the blocked tenants can't connect SharePoint or OneDrive to any Notion workspace, and connections they already made stop working. In the allowed tenant, people still only see content their Microsoft permissions give them access to.
