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

2. If you're a workspace owner, choose `My notes` to follow the steps below, or `Granola spaces` to bring in shared spaces.

3. Choose where your notes go. Your default meetings database is already picked. Choosing a different one won’t change your default. A **Database access** card shows who has access to the database. Imported notes stay limited to their owners and confirmed viewers, so database access alone doesn’t let someone see them.

4. Select `Continue`.

5. Paste your key into `Personal Granola API key`. If you don’t have one, you can select `Get an API key`.

6. Select `Import` to bring over your notes. Only notes outside Granola spaces are imported.

## What imports & where it lands

Each Granola note becomes one AI Meeting Note in your database. Here’s what carries over:

* Meeting title, date, people, and folder tags.

* The summary, in `Summary`. It ends with `Imported from Granola` so you can tell it apart from notes you take in Notion. If Granola provides your own written notes, they appear in `Notes`.

* The transcript, with speakers and timestamps that show how far into the meeting each line was said.

## What doesn’t import

* Notes without a summary or transcript aren’t brought over.

* Notes in Granola spaces. Use the `Granola spaces` option for those.

* Notes you wrote yourself in Granola may not come over, because Granola doesn’t always share them.

* For repeating meetings, a calendar link may not open in Notion Calendar for anyone who wasn’t the meeting organizer.

## Track your import & read the results

When the import runs, you'll see counts for:

* **Notes imported:** Notes that came into Notion.

* **Notes require admin import:** Notes in a shared Granola space. A workspace owner needs to bring these in with the `Granola spaces` option.

* **Notes skipped because they were already imported:** Notes you brought over in an earlier import. Running the import again won't add them twice.

* **Notes couldn't be imported:** Notes that didn't come over for another reason. Run the import again to retry them.

* **Missing metadata items:** Details that couldn't be brought over for some notes, such as a calendar link, folder tag, or person. One note can be missing more than one item, so this count can be higher than the number of notes.

## Who can see your imported notes

* Each note keeps its Granola owner as its owner in Notion. Notion matches the owner by email. If the note's Granola owner has a Notion account with the same email, they stay the owner. If there's no match, the person who runs the import becomes the note's owner. People who were confirmed viewers in Granola keep their access.

* For everyone to show up correctly as people on a note, each person needs to run their own import, and their Granola and Notion email addresses need to match.

## Troubleshooting

* **Some notes are missing.** Check your import results to see why a note is missing. Notes in a shared Granola space need a workspace owner to bring them in with the Granola spaces option. Notes with no summary or transcript aren't available to import.

* **Some notes failed.&#x20;**&#x52;un the import again. It won’t duplicate the notes that already came over. If a note’s page or the whole database was deleted, the import can bring it back.

* **People aren’t showing up right.&#x20;**&#x4D;ake sure your Granola and Notion email addresses match, and have each person run their own import.
