---
title: Import data into Notion
emoji: 🚚
description: Like most people, you probably have data, documents, and notes scattered across many files and apps. You can centralize your information in one place by moving it all into Notion 🚚
url: https://www.notion.com/help/import-data-into-notion
key: help:import-data-into-notion
coverImage: https://img.youtube.com/vi/KMfJV5GyCEw/maxresdefault.jpg
category: Data & integrations
---

## How to import

**Note:** You can only import content on desktop or web, not on mobile.

* Notion lets you directly import the following file types:

  * Plaintext (.txt)

  * Markdown (.md or .markdown)

  * Microsoft Word (.docx)

  * CSV (.csv)

  * HTML (.html)

  * PDF (.pdf)

* You can also import data from a number of apps like Confluence, Asana, Evernote, and Trello, among others.

**There are a few ways you can import data:**

* Type `/` and type the content you want to import – like `csv` or `Trello`.

* Go to `Settings` in your sidebar, then select `Import`. This will bring up a window where you can choose which app or file type to import from.

![Import menu](https://images.ctfassets.net/spoqsaf9291f/2xwc6DjdVpipQAK1TOxl30/c38b8da969a6374119010babeabb10c7/importmenu.png)

**Some integrations have their own pages:**

* For Confluence, click [this article →](https://www.notion.com/help/import-from-confluence)

* For Asana, click [this article →](https://www.notion.com/help/asana)

* For Monday.com, click [this article →](https://www.notion.com/help/monday)

## Evernote

You can import all of your Evernote data into Notion in one go, and retain its organization. Note: This importer does not work for Evernote Teams.

1. Go to `Settings` and then `Import`. Then, choose `Evernote`.

2. Sign into your Evernote account.

3. Authorize Evernote to connect to Notion.

4. Once your Evernote account is linked, check the boxes next to the notebooks you'd like to move and click `Import`.

5. Your Evernote notebooks will appear as pages in Notion's sidebar. Inside, you'll find your notes as items in a list database.

6. Each note can be dragged and dropped anywhere else within Notion.

## Trello

You can move your Trello data into your workspace — all from inside Notion.

1. Type `/Trello` and hit enter.

2. Log in to your Trello account.

3. Grant access to Notion so you can import your Trello boards.

4. Once you've linked your Trello account, select the boards you'd like to migrate from the dropdown menu.

## Google Docs

**Note:&#x20;**&#x41;t this time, you can only import one Google Doc at a time. Thanks for your patience as we work to improve this experience.

You can import a Google Doc to Notion in several ways:

* Paste a Google Doc link into Notion → select `Import from Google Drive`.

* Enter the command `/Google Docs`.

* Go to `Settings` → `Import` → `Google Docs`.

In the menu that appears afterwards:

1. Select `Connect Google account` and sign in with your Google account.

2. Select the Google Doc you’d like to import. When you’re done, click `Select`.

**Note:&#x20;**&#x59;ou can also embed Google Docs in Notion. [Learn more about embeds here →](https://www.notion.com/help/embed-and-connect-other-apps)

## Quip

Unfortunately, Quip doesn't let you export more than one page at a time. You can, however, move individual pages to Notion.

1. In Quip, click the document icon at the top left of any page and choose `Export`.

2. Export as Markdown or HTML.

3. In Notion, go to `Settings` in your sidebar → `Import`.

4. Upload the file you exported from Quip.

## Dropbox Paper

In Dropbox Paper, you can export files individually or all at once.

To migrate individual files:

1. In Dropbox Paper, choose `Download` from the menu at the top right of your screen.

2. Download the page as `Word`.

3. In Notion, go to `Settings` in your sidebar → `Import` → `Word`.

4. Upload the `.docx` file you downloaded.

To migrate all your documents at once:

1. In Dropbox paper, choose `Download docs you created` from the menu at the bottom left of your screen.

2. Choose to download as `Word`. This will download a zip file to your computer.

3. Unzip the file.

4. In Notion, go to `Settings` in your sidebar → `Import` → `Word`.

5. Upload the `.docx` files.

## Hackpad

You can export all your files from Hackpad at once!

1. Select `Export` on the right of your Hackpad feed.

2. Choose to export as Markdown. You'll download a zip file.

3. Unzip the downloaded file.

4. In Notion, go to `Settings` in your sidebar → `Import` → `Text & Markdown`.

5. Upload the Markdown files you exported from Hackpad.

## Microsoft Word

1. Go to `Settings` in your sidebar → `Import` → `Word`.

2. Upload whatever `.docx` files you want to import from your computer.

## Microsoft Excel

1. In Microsoft Excel, export your content as `.csv`

2. In Notion, go to `Settings` in your sidebar → `Import` → `CSV`.

3. Upload the exported `.csv` files you want to import from your computer.

## WorkFlowy

You can export all your files from WorkFlowy at once!

1. Click the dropdown arrow to the right of `Help`.

2. Select `Plain text` and click to download.

3. In Notion, go to `Settings` in your sidebar → `Import` → `Text & Markdown`.

4. Upload the files you exported from WorkFlowy.

## CSV

1. In Notion, go to `Settings` in your sidebar → `Import` → `CSV`.

   * Or you can type `/csv`.

2. Upload whatever `.csv` files you want to import from your computer.

3. Setup the CSV columns by matching them to Notion properties.

**Alternatively, you can add a CSV to an existing database:**

1. While in a full page database, click `•••` at the top of a database → `Merge with CSV`.

2. Setup the CSV columns by matching them to Notion properties.

**Note:&#x20;**&#x46;or the best experience uploading your CSV into Notion:

* Make sure the first row of your CSV is the header row.

* Make sure CSV files are in UTF-8 format to allow for better parsing.

* Dates will be imported into Notion in MM/DD/YYYY format.

* If any column contains mixed data types, Notion will default to string to avoid data loss.

* The first text column of the CSV that doesn’t use rich text formatting will be set as the primary key for the database. Make sure to reorder accordingly.

* If you’re looking to import a CSV into an existing database, make sure that the first row in your CSV has the exact same names as the properties in the database you’re looking to upload into.

* Imports from CSV to existing database will add rows to the database, not update existing rows. Watch out for duplicate data.

* CSV columns cannot be merged with a Notion relation property.

## PDF

**Note:** This feature is in beta, which means it’s still a work in progress. Thank you for your patience!

There are several ways to import a PDF into Notion:

* Use the slash command `/import` and select `PDF`.

* Use the slash command `/pdf` and select `PDF` — make sure you’re importing, not embedding!

* Open `Settings` and select `Import` → `PDF`.

**Note:&#x20;**&#x57;hen your PDF’s contents are converted to a Notion page, it’s possible that some formatting elements of your PDF may not be preserved. For example:

* Tables will be converted to simple tables instead of databases.

  * Images, attachments, bullet lists, and numbered lists in simple tables aren’t supported.

* Headings, equations, and quotes may appear as plain text.

* Toggles, to-dos, code, callouts, and dividers may not appear as originally formatted.

* Font and background colors aren't supported.

The PDF importer is optimized to convert text for better search and accessibility via Notion AI. You may need to make slight adjustments to your Notion page to get it to look just the way you want.

Once your PDF is imported, its contents will be accessible via Notion search and Notion AI!


## FAQs

### Which versions of Confluence are supported?

We officially support importing from Confluence Cloud, in pages created using the new editor that Confluence introduced in late 2018.

Due to insufficient data in its index export, we do not support importing from Confluence Server.

For help importing an entire workspace from the legacy editor, please contact support at email protected.


### Do imported blocks count towards the storage limit for Free Plan workspaces with multiple members?

No, imported blocks will not count towards the limit. However, any blocks subsequently created inside imported pages will count towards the limit as usual.


### Is there a maximum import size for Confluence imports?

Confluence imports are limited to 5GB for zip-file imports and 30 GB for API imports.

If you run into the limit, you can try using the **Custom Export** option to select pages for export, omitting attachment-heavy pages.


### When I try to import from Confluence, I can't choose my file in the file upload window.

Please make sure to upload a `.zip` file created by the Confluence space export functionality. Word documents and standalone HTML files will not work, since Notion relies on the whole import to preserve structure and links between pages.


### I can't find the option to export my Confluence workspace.

If the "Export" tab does not appear in the Content Tools section of a workspace's settings, you may not have the appropriate permissions to export pages. Ask the workspace administrator for permission.


### I can't seem to import from Evernote China/Evernote Business.

Unfortunately, our importer only supports the standard edition of Evernote at the moment. We're working on it!
