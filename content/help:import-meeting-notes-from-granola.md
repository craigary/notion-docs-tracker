---
title: "Import meeting notes from Granola"
emoji: null
description: "Bring your past Granola meeting notes into Notion so your meeting history lives next to the rest of your work."
url: "https://www.notion.com/help/import-meeting-notes-from-granola"
key: "help:import-meeting-notes-from-granola"
coverImage: null
category: "AI Meeting Notes"
categoryKey: "category:ai-meeting-notes"
---

When you move your Granola meeting notes into Notion, each note becomes an [AI Meeting Note](https://www.notion.com/help/category/ai-meeting-notes) in a meetings database, with its title, date, people, summary, and transcript. Your meeting history ends up right next to your projects, tasks, and docs, so it’s easy to search and link.

## Before you start

* **Get your Personal API key from Granola.&#x20;**&#x59;ou’ll use it to bring in your own notes. Granola API keys require a paid Granola plan (Business or Enterprise).

* **Choose a Meetings database you can edit.&#x20;**&#x49;f you don’t have one yet, Notion creates one for you, or you can convert an existing database in the picker.

* **Be a workspace member.&#x20;**&#x47;uests can’t import from Granola.

* **Use Notion on desktop or web.&#x20;**&#x59;ou can’t import meeting notes from Granola on a mobile device.

## Import your Granola notes into Notion

1. Go to `Settings` → `Import` → `Granola`.

2. Choose where your notes go. Your default meetings database is already picked. Choosing a different one won’t change your default. A **Database access** card shows who has access to the database. Imported notes stay limited to their owners and confirmed viewers, so database access alone doesn’t let someone see them.

3. Select `Continue`.

4. Paste your key into `Personal Granola API key`. If you don’t have one, you can select `Get an API key`.

5. Select `Import` to bring over your notes. Only notes outside Granola spaces are imported.

**Want to bring in a shared Granola space?**

That’s a separate `Granola spaces` option, and only workspace owners can use it.

## What imports & where it lands

Each Granola note becomes one AI Meeting Note in your database. Here’s what carries over:

* Meeting title, date, people, and folder tags.

* The summary, in `Summary`. It ends with `Imported from Granola` so you can tell it apart from notes you take in Notion. If Granola provides your own written notes, they appear in `Notes`.

* The transcript, with speakers and timestamps that show how far into the meeting each line was said.

## What doesn’t import

* Notes without a summary or transcript aren’t brought over.

* Notes in Granola spaces. Use the `Granola spaces` option for those.

* Notes whose owner isn’t a member of your Notion workspace.

* Notes you wrote yourself in Granola may not come over, because Granola doesn’t always share them.

* For repeating meetings, a calendar link may not open in Notion Calendar for anyone who wasn’t the meeting organizer.

## Track your import & read the results

When the import runs, you’ll see counts for:

* **Created:&#x20;**&#x4E;otes that came into Notion.

* **Skipped:&#x20;**&#x4E;otes that weren’t added. Usually you already imported them, they’re in a Granola space, or their owner isn’t in your Notion workspace.

* **Failed:&#x20;**&#x4E;otes that didn’t come over. Run the import again to retry them.

* **Data omissions:&#x20;**&#x44;etails that couldn’t be brought over for some notes, such as a calendar link, folder tag, or person.

## Who can see your imported notes

* Each note keeps its Granola owner as its owner in Notion, matched by email. People who were confirmed viewers in Granola keep their access.

* For everyone to show up correctly as people on a note, each person needs to run their own import, and their Granola and Notion email addresses need to match.

## Troubleshooting

* **Some notes are missing.&#x20;**&#x43;heck the skipped count. Notes in Granola spaces and notes whose owner isn’t in your workspace are skipped. Notes with no summary or transcript aren’t available to import.

* **Some notes failed.&#x20;**&#x52;un the import again. It won’t duplicate the notes that already came over. If a note’s page or the whole database was deleted, the import can bring it back.

* **People aren’t showing up right.&#x20;**&#x4D;ake sure your Granola and Notion email addresses match, and have each person run their own import.
