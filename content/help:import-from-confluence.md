---
title: "Import from Confluence"
emoji: "📥"
description: "Import your Confluence data right into Notion 📥"
url: "https://www.notion.com/help/import-from-confluence"
key: "help:import-from-confluence"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/3wbZVuYIYC1TY0Qw18GuDk/9e0576569ed2e5fb2b5e112f84d0fcfd/confluence_importer_hc.png"
category: "Import & export your data"
categoryKey: "category:import-export-and-integrate"
---

It's important to have all your data in one spot. Here's a helpful tutorial for importing your Confluence space into Notion. Depending on your needs, there are two ways you can import from Confluence into Notion.

* **Zip-file importer:** Can be used to import only part of your workspace. Can only import smaller workspaces of up to 5GB (or 15GB upon request).

* **API importer:** Can only import the entire workspace. Can import workspaces of up to 30GB. Retains comments and user-mapping.

**Multi-space imports:** Up to 10 Confluence spaces can be imported at once directly through the UI. Each selected Confluence space generates its own log page and imports as a separate top-level private page (into different Notion teamspaces as needed). This feature is only available to Business and Enterprise plans.

## What imports (and what doesn't)

| **✅ Imports**                                  | **❌ Doesn't import**                                                |
| ---------------------------------------------- | ------------------------------------------------------------------- |
| Pages (up to 50k pages per import)             | Permissions (imported pages land private to the importing user)     |
| Page hierarchy                                 | Most macros/plugins (many macros flatten to text, images, or links) |
| Basic formatting                               | Table styling                                                       |
| Content blocks                                 | Private pages                                                       |
| Images                                         | Custom emojis                                                       |
| Attachments                                    | Charts                                                              |
| Basic metadata (page title only)               | Previews                                                            |
| Simple tables (complex constructs may degrade) | History                                                             |
| Cloud and server/data center instances         | Folders                                                             |
| Comments (API import only)                     | Comments (ZIP import only)                                          |

## Confluence → Notion mapping

* Confluence site → Notion organization

* Confluence space → Notion workspace

* Confluence page → Notion page

* Macros → flattened content or closest Notion block type (e.g., Confluence Expand → Notion Toggle)

## Size limits & timing

* Import up to **\~50k pages** or **30GB** in size. Larger imports may fail.

  * **Tip:&#x20;**&#x46;or large spaces, split exports by subspace or sections and use the ZIP importer. If workspace size is >100GB, contact your account manager.

* Once the import begins, you can safely close your browser — we'll send you an email when it's complete.

* Review the progress of your import in **`Settings`** → **`Import`**. There you can see the status of your import and completed imports.

## Import from Confluence into Notion

### Import with .zip files

**Export your Confluence space to HTML**

1. From your Confluence workspace, go to **`Space Settings`** in the top-right sidebar.

2. Select **`Content Tools`** in the top toolbar, then **`Export`**. If you don't see either of these options, you may need to request permission to export from a Workspace admin.

3. Select **`HTML `**&#x66;rom the list of formats.

4. Select **`Custom Export`** and uncheck the **`Include comments`** box.

5. Select which pages you want to export. Note that pages containing large attachments can significantly increase the export size and complexity.

6. Allow your export to finish processing. This can take a while for large workspaces.

7. Once complete, click **`Download`** to save the export to your computer. The file will be titled something like **`Confluence-space-export-XXXXXX.html.zip`**.

**Import into Notion**

1. Navigate to the Notion workspace you'd like to import your Confluence content into.

2. Go to **`Settings`** in your sidebar → **`Import`** → **`Third party imports`** → **`Confluence`**.

3. Navigate to the **`.zip`** file exported from Confluence and select it for upload. You do not need to unzip the file - upload the entire archive.

4. You'll see an "Uploading..." message as the browser uploads your file, then a status message as the import progresses.

5. When your import completes, you'll be taken to your newly imported content.

### Import with Confluence API

**Connect Confluence and Notion**

1. Go to **`Settings`** in your sidebar → **`Import`** → **`Confluence`**.

2. Choose **`Import via API`**.

3. Select your Confluence instance type: cloud or server. To find your instance type, open Confluence, click **`Help`** → **`?`** next to your profile → **`About Confluence`**. Notion only supports cloud and server instances.

**Authenticate with Confluence Cloud**

1. Enter your Confluence email and site.

2. Create an API token from your Atlassian account and enter it into the field. [Read more](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/) about creating tokens in Confluence.

3. Click **`Authenticate`**.

**Authenticate with Confluence Server**

1. Find and select your Confluence [version](https://confluence.atlassian.com/confkb/how-do-i-know-what-version-of-confluence-is-running-179441565.html).

2. Enter your Confluence email and site.

3. If you're running Confluence 7.9 or later, create a **`Personal Access Token `**&#x61;nd paste it. If you're using an earlier version, enter your Confluence username and password.

4. Click **`Authenticate`**.

**Import**

1. Click **`Confluence`** from the Import menu.

2. Monitor the progress of your import — this step may take several hours for large spaces.

   * Once you see **`Importing pages…`**, you can safely close your browser window. We will send you an email once the import is complete.

3. Repeat this section if you want to import more than one Confluence space.

## What to expect after import

* Notion imports everything into a single root/parent in the private section, or into a selected teamspace of the person doing the import.

* Users are expected to clean up and set up the workspace architecture before inviting others.

* Permissions must be reapplied in Notion — plan a post-import pass to map Confluence groups and restrictions to Notion groups, teamspaces, and page-level permissions.

* If there are files or attachments in a Confluence table, it will become a Notion database; otherwise it becomes a simple table.

## Limitations

* Table styling and macros/plugins often degrade (e.g., ui-steps, callouts, image captions).

* Most macros are unsupported. Notion tries to map data to the nearest Notion block.

* Transient failures due to Confluence API unreliability can cause the overall import or certain pages to fail. You may need to retry the entire import.

* For multiple spaces, run imports sequentially (one space at a time) unless using multi-space import (Business/Enterprise only).

* Import failures can occur with complicated Confluence data (e.g., merged cells, tables within tables).

* Notion only supports user-scoped API tokens (not scoped tokens). Use the personal API token option when authenticating.

* Attachments and media not referenced on pages will not be imported.

* Hierarchy sometimes isn't fully preserved — validate with a pilot import.

## Troubleshooting

* **LaTeX Math blocks import incorrectly**

  * **Why this happens:** The Confluence LaTeX plugin's block macro format differs from inline math. Notion supports inline LaTeX macros but not the block macro variant.

  * **To fix:&#x20;**&#x43;onvert LaTeX block macros to inline macros in Confluence before re-importing, or place the LaTeX in a code block and convert to a math block manually after import.

* **Unable to import Gliffy content**

  * **Why this happens:&#x20;**&#x4E;otion doesn't support Gliffy images via the file importer.

  * **To fix:&#x20;**&#x4D;odify the HTML to replace the Gliffy block with an image block referencing the correct file before importing.

* **Import is failing**

  * **Why this happens:** Very large spaces, malformed exports, rate limits, or timeouts.

  * **To fix:** Import one space at a time, split large spaces into sections, re-export a clean ZIP, or use the API importer with scoped runs.

* **Import is missing images or attachments**

  * **Why this happens:** Assets may not be bundled in the export or not reachable by the API token.

  * **To fix:** Ensure "Include attachments" is selected on export, keep relative paths intact in the ZIP, or re-upload key assets after import.

* **Jira link previews are broken after import**

  * **Why this happens:&#x20;**&#x4A;ira link previews only work if the user is authenticated before starting the migration.

  * **To fix:&#x20;**&#x41;uthenticate with Jira before running the migration.

* **Hierarchy of files is not preserved as expected**

  * **Why this happens:&#x20;**&#x45;dge cases in export structure or deep nesting.

  * **To fix:&#x20;**&#x54;est with a representative subset first; reorganize in Notion post-import.

* **Confluence macros and/or special formatting is lost**:

  * **Why this happens:** Unsupported macros or app content.

  * **To fix:&#x20;**&#x4D;ap to Notion-native blocks: Expand → Toggle, Action items → To-do. Simplify complex tables or export to CSV and import into a Notion database.

* **Confluence permissions are not replicated in Notion**:

  * **Why this happens:&#x20;**&#x54;his is expected with self-serve imports.

  * **To fix:&#x20;**&#x50;lan and execute a permissions mapping after content lands in Notion, using Notion groups, teamspaces, and page-level permissions.
