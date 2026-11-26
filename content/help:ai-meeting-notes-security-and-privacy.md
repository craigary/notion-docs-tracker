---
title: "AI Meeting Notes security & privacy"
emoji: null
description: "Learn how AI Meeting Notes records, stores, and deletes your meeting audio and transcripts, who can open your notes, and what to consider legally before recording."
url: "https://www.notion.com/help/ai-meeting-notes-security-and-privacy"
key: "help:ai-meeting-notes-security-and-privacy"
coverImage: null
category: "AI Meeting Notes"
categoryKey: "category:ai-meeting-notes"
---

AI Meeting Notes records and transcribes your meetings so you can stay in the conversation. This article explains what gets recorded, where it's stored, how long it's kept, who can open your notes, and legal considerations for recording and transcribing conversations.

## How Notion processes & stores audio & transcriptions

AI Meeting Notes engages [sub-processors](https://www.notion.com/notion/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734) (OpenAI, Anthropic, Fireworks, Baseten Labs, X.AI, and AssemblyAI) to record the meeting, process the audio file into a transcription, and then produce insights, such as a meeting summary, action items, participants in the call, and more.

When you use AI Meeting Notes in the Notion app or browser, the audio file is sent directly to our sub-processors for real-time transcription. Sub-processors do not store audio. A temporary copy of audio is stored locally on your device for up to 24 hours. If real-time processing fails, the locally stored audio is uploaded to Notion's servers and sent to our sub-processors to reattempt transcription. Uploaded audio is retained by Notion for up to 3 days to reattempt processing.

When you use AI Meeting Notes on the Notion mobile app, the audio file is uploaded to Notion's servers and sent to our sub-processors to generate a transcription. Sub-processors do not store audio. After successful processing, uploaded audio is immediately deleted. If processing or deletion fails, uploaded audio may remain on Notion's servers for up to 30 days. A temporary copy of audio is also stored locally on your device during the session. The local audio copy is deleted automatically usually within 7 days, with exact timing depending on your device and app activity.

Notion gives you the option to upload your own audio or video for AI Meeting Notes transcription. You can upload a file directly to an AI Meeting Notes block, or upload through `/audio` or `/video` and convert that upload into an AI Meeting Notes block. Unlike a live recording, an uploaded file is stored on Notion's servers. An uploaded file is deleted when you delete it from the AI Meeting Notes block by clicking the slider icon → `Delete audio` or `Delete video`, or when the page containing the block is deleted (once deleted, the page will follow your workspace's [data retention settings](https://www.notion.com/help/duplicate-delete-and-restore-content)).

If you're a workspace owner and don't want the AI Meeting Notes feature available to members of your workspace, you can opt-out your workspace at any time by going to `Settings` → `Meeting notes` and toggling off `Enable Meeting notes for workspace`.

## Local audio storage

Local copies of recorded meeting audio are available to the user initiating AI Meeting Notes (the "recorder"). The 10 most recently recorded meeting audio files will be stored on the recorder's local device and available to download. Only the recorder has the ability to download a locally saved audio file.

This capability is only available in the Notion desktop app or browser and is turned off by default for all plans. If you want local audio storage enabled to your users, you can opt-in your workspace at any time by going to `Settings` → `Meeting notes` and toggling on `Store audio locally`.

## Delete transcription & audio

### [Delete a transcription](https://www.notion.com/help/ai-meeting-notes-security-and-privacy?_ck=34f93fc9bcd426db13c090baa004a57da7d09f1177867418f10198e43b9d1d8a#delete-a-transcription)

You can delete a transcription in two ways:

* Directly in the AI Meeting Notes block, by clicking the slider icon → `Delete transcript`. This will also delete the accompanying locally stored audio from the recorder's device.

* By deleting the parent page where the AI Meeting Notes block sits. Once deleted, the page will follow your workspace's [data retention settings](https://www.notion.com/help/duplicate-delete-and-restore-content).

Enterprise Plan workspace owners can set an **automatic** deletion schedule for transcriptions by going to `Settings` → `Meeting notes` and setting a deletion schedule for `Automatic transcript deletion`. Summaries and notes will remain in AI Meeting Notes blocks in your workspace, but all transcriptions will be automatically deleted following the chosen deletion schedule. The automatic transcript deletion schedule will not delete transcripts in pages that are [legally held](https://www.notion.com/help/legal-holds).

### [Delete locally stored audio](https://www.notion.com/help/ai-meeting-notes-security-and-privacy?_ck=34f93fc9bcd426db13c090baa004a57da7d09f1177867418f10198e43b9d1d8a#delete-locally-stored-audio)

You can choose to store audio recordings on the recorder's local device when using AI Meeting Notes in the Notion desktop app or browser. The recorder can delete locally stored audio from their local device at any time by clicking the slider icon in the AI Meeting Notes block, hovering over `Audio Recordings`, and selecting `Delete recordings`. This deletes all recordings for the specific AI Meeting Notes block.

If an Enterprise Plan workspace owner has turned on both `Automatic transcript deletion` and `Store audio locally` in their settings, local audio recordings will follow the automatic deletion schedule selected for transcriptions. When a transcription is deleted following the automatic deletion schedule, the associated audio recordings stored on the recorder's local device will also be deleted. If a workspace owner sets transcriptions to be deleted immediately after the AI Meeting Notes summary is generated, then no audio will be stored locally on the recorder's device.

**Once the recorder downloads a locally stored meeting audio file, the audio file is within the recorder's sole control**

If the recorder downloads an audio file, deletion of the downloaded audio file is up to the recorder. Similarly, if the recorder chooses to share an audio file with third parties, deletion of the distributed copies of the audio file is up to those third parties.

### [**Retention controls**](https://www.notion.com/help/ai-meeting-notes-security-and-privacy?_ck=34f93fc9bcd426db13c090baa004a57da7d09f1177867418f10198e43b9d1d8a#retention-controls)

By default, we retain meeting audio and transcripts for 1 day, and audio is deleted as soon as it's transcribed. Keeping meeting context findable is the point of the feature, so we recommend 1-day retention as the default rather than zero-day retention. Organizations that need content removed on demand can use our full delete APIs to remove recordings and transcripts. Enterprise owners can also set an automatic transcript deletion schedule.

## Who can see a meeting note

Every meeting note has its own sharing settings, just like any other page. Open the note, select `Share`, and choose who can open it. Notes saved in a shared database can inherit access from that database, so turning off auto-sharing doesn't make a note in a shared database private.

Learn more about [who can access your meeting notes →](https://www.notion.com/help/ai-meeting-notes#control-who-can-access-your-meeting-notes)

To let someone outside your company open a recap, [invite them to the note as a guest](https://www.notion.com/help/add-members-admins-guests-and-groups). Guests are added by name to that specific page, so you control exactly who gets in, and you can remove them at any time. This works differently from a recap behind a shared password: instead of one secret that anyone can pass along, each person has their own account you can give access to or take away.

## Handling sensitive content

Some considerations for using AI Meeting Notes for sensitive conversations:

* Always get consent and remind everyone what's being recorded before you start.

* Stop transcribing before a sensitive part of the meeting and resume only after obtaining everyone's consent, or don't record in the meeting at all.

* Delete the transcript once you no longer need it.

* On Enterprise, set an automatic transcript deletion schedule.

* Share the note with only the people who need it.

**What summaries include**

Summaries are written to capture what was decided, who owns what, and the next steps. Every summary is editable page content, so you can change or remove it before you share the note. Deleting the transcript removes the full record along with the locally stored audio. To keep something out of the summary entirely, stop transcribing before that part of the meeting.

## Legal considerations for recording & transcribing communications

Below is some general information on the laws and regulations that relate to transcriptions, as well as some best practices to consider when enabling AI Meeting Notes.

**This is provided for informational purposes only and is not legal advice**

Consult with your legal counsel to evaluate your specific use case to make sure that you use AI Meeting Notes in a legally compliant manner. You are responsible for ensuring that your use of Notion complies with all applicable laws and regulations. See our [Master Subscription Agreement](https://www.notion.com/Master-Subscription-Agreement-4e1c5dd3e3de45dfa4a8ed60f1a43da0) and [Content and Use Policy](https://www.notion.com/notion/Content-Use-Policy-1b9a773d5583486cb5c1d39a8d777a55) for more information.

### [Laws related to recording & transcribing communications](https://www.notion.com/help/ai-meeting-notes-security-and-privacy?_ck=34f93fc9bcd426db13c090baa004a57da7d09f1177867418f10198e43b9d1d8a#laws-related-to-recording-&-transcribing-communications)

In the United States, certain laws require consent of at least one of the participants before recording or transcribing a call or conversation. Others require you to obtain consent from every participant before recording or transcribing a call.

Outside the United States, such as in the European Union, there are similar laws requiring consent of participants before recording or transcribing a call.

In addition to consent requirements, there may also be laws governing how you use, disclose, and secure your call recordings or transcriptions. These laws may vary depending on where your participants are located, the business sector, and industry standards.

### [Best practices for recording & transcribing communications](https://www.notion.com/help/ai-meeting-notes-security-and-privacy?_ck=34f93fc9bcd426db13c090baa004a57da7d09f1177867418f10198e43b9d1d8a#best-practices-for-recording-&-transcribing-communications)

**Obtaining consent**

Determining which consent laws apply can be complicated when meeting participants are in multiple states or countries, or if you cannot be sure about the location of one or more participants. **We recommend complying with the strictest consent laws and always obtaining consent from all participants before using AI Meeting Notes to record and transcribe a meeting.**

**Other best practices**

* Clearly explain to participants that you will transcribe the call using a third-party provider (e.g., Notion AI Meeting Notes).

* Keep adequate records of how you obtained consent.

* Respect a participant's choice not to be transcribed.

* If new participants join a call after transcription has begun, stop and obtain consent from new participants before proceeding.

* Make clear to your users how you plan to use and/or share recordings and transcriptions (or any information derived from them).

* Make sure that you only use and share recordings and transcriptions in a way that is consistent with what you told your users and all applicable laws.

* Keep recordings and transcriptions only for as long as you need.

AI Meeting Notes provides ways to disclose your use of the feature and obtain consent from meeting participants, which you can learn more about in [Consent message](https://www.notion.com/help/ai-meeting-notes), but note that these are just a few examples of how you might obtain consent.

## Where to learn more

* Learn how your data is retained by plan, and why Notion doesn't train models on your content in [Notion AI security & privacy practices](https://www.notion.com/help/notion-ai-security-practices) →

* Learn how retention and restore work across your workspace in [Use Notion's Data Retention settings](https://www.notion.com/help/guides/notions-data-retention-settings) →

* Learn how a [legal hold keeps content from being deleted](https://www.notion.com/help/legal-holds) →

* Learn what an owner can reach in [Data accessible by your workspace owner](https://www.notion.com/help/data-accessible-by-your-workspace-owner) →

* Learn how to [take meeting notes in Notion](https://www.notion.com/help/ai-meeting-notes) →
