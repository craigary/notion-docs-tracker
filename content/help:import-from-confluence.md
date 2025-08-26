---
title: Import from Confluence
emoji: 📥
description: Import your Confluence data right into Notion 📥
url: https://www.notion.com/help/import-from-confluence
key: help:import-from-confluence
coverImage: https://images.ctfassets.net/spoqsaf9291f/3wbZVuYIYC1TY0Qw18GuDk/9e0576569ed2e5fb2b5e112f84d0fcfd/confluence_importer_hc.png
category: Data & integrations
---

It's important to have all your data in one spot. Here's a helpful tutorial for importing your Confluence space into Notion.

Depending on your needs, there are two ways you can import from Confluence into Notion.

**Zip-file importer**

* Can be used to import only part of your workspace if you prefer

* Can only import smaller workspaces of up to 5GB (or 15GB upon request)

**API importer**

* Can only import the entire workspace

* Can import workspaces of up to 30 GB

* Retains comments and user-mapping

## Import with .zip files

### Export your Confluence space to HTML

1. From your Confluence workspace, go to `Space Settings` in the top-right sidebar.

2. Select `Content Tools` in the top toolbar, then `Export` in the toolbar below. If you don't see either of these options, you may need to request permission to export from a Workspace admin.

3. Select `HTML` from the list of formats.

4. Select `Custom Export` and uncheck the `Include comments` box.

5. Select which pages you want to export — please note that pages containing large attachments can significantly increase the export size and complexity!

6. Allow your export to finish processing — this can take a while if you have a large workspace.

7. Once the export is complete, click `Download` here to save the export to your computer.

8. You should have a file titled something like `Confluence-space-export-XXXXXX.html.zip`, where `XXXXXX` is a sequence of digits.

### Import

1. Start by navigating to the Notion workspace that you'd like to import your Confluence content into.

2. Go to `Settings` in your sidebar → `Import` → `Confluence`.

3. Navigate to the `.zip` file exported from Confluence in the previous step, and select it for upload. You do not need to unzip the file! Just upload the entire archive.

4. You should see an "Uploading..." message as the browser uploads your file, then a status message as the import progresses.

5. When your import completes, it should take you to your newly imported content!

## Import with Confluence API

### Connect Confluence and Notion

1. Go to `Settings` in your sidebar → `Import` → `Confluence`.

2. Choose `Import via API`.

3. For authentication, select your Confluence instance type: cloud or server. To find your instance type, open Confluence, click `Help` → `?` next your profile → `About Confluence`. This tells you if your instance is cloud, server, or datacenter. Notion only supports cloud and server instances.

### Authenticate with Confluence Cloud

1. Enter your Confluence email and site.

2. Create an API token from your Atlassian account and enter it into the field. [Read more](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/) about creating tokens in Confluence.

3. Click `Authenticate`.

### Authenticate with Confluence Server

1. Find and select your Confluence [version](https://confluence.atlassian.com/confkb/how-do-i-know-what-version-of-confluence-is-running-179441565.html).

2. Enter your Confluence email and site.

3. If you're running Confluence 7.9 or later, create a `Personal Access Token` and paste it. If you're using a version prior to Confluence 7.9, enter your Confluence username and password.

4. Click `Authenticate`.

### Import

1. To begin importing, click on `Confluence`**&#x20;**&#x66;rom the Import menu.

2. On the following screen, you can monitor the progress of your import. This step may take several hours, depending on the size of the space.

   * Once you see the message `Importing pages…`, you can safely close your browser window. We will send you an email once the import is complete.

3. Repeat this section if you want to import more than one Confluence space.
