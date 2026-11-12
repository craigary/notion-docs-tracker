---
title: "Set up the AI Meeting Notes Add-on for Google Meet"
emoji: null
description: "Learn how to install the add-on, tell everyone you're transcribing, and get speaker labels in your notes."
url: "https://www.notion.com/help/install-the-notion-meetings-add-on"
key: "help:install-the-notion-meetings-add-on"
coverImage: null
category: "AI Meeting Notes"
categoryKey: "category:ai-meeting-notes"
---

The AI Meeting Notes Add-on browser extension makes it clear to everyone in a Google Meet call that the meeting is being transcribed. It also labels who said what in your transcript.

This article walks you through setup from start to finish: install the add-on, connect it, start transcribing, let people know, and check that it's working.

When you start transcribing in a Google Meet call, the add-on can:

* Post and pin a message in the Meet chat, so everyone in the call, including people who join late, knows the meeting is being transcribed. This is off until it's turned on.

* Show a recording indicator over your camera while you transcribe.

* Label speakers in your transcript, so it's easy to see who said what.

The chat message and the camera indicator are off until they're turned on. You can turn them on for yourself, or an owner can turn them on for your whole workspace.

## Before you start

* The extension works with Google Meet in Chrome (version 127 or later) on a computer. To check, open Chrome and go to `Settings` → `About Chrome`. It doesn't work with other meeting tools or on phones and tablets.

* Only the person transcribing needs the extension. No one else in the call has to install anything.

* You'll need access to [AI Meeting Notes](https://www.notion.com/help/ai-meeting-notes) in Notion.

* You start transcribing from the Notion desktop app or from Notion open in Chrome, so keep one of those open while you meet.

## Step 1: Install the add-on

* Open the[ Add-on in the Chrome Web Store](https://chromewebstore.google.com/detail/notion-meetings-add-on/bmfgmiihbljnfndmpdffjfliciaddbfc).

* Select `Add to Chrome`.

* If a Google Meet tab was already open, reload it so the add-on can work there.

**Your IT team can install the add-on for everyone**

If your company sets this up for you, you may already have the add-on and you won’t need to install it again. You can skip to Step 2.

Learn more about [setup steps for admins →](https://www.notion.com/help/set-up-ai-meeting-notes-for-google-meet-and-zoom)

## Step 2: Connect the add-on

The add-on needs to connect to Notion. It connects to wherever you start transcribing:

* If you use the Notion desktop app, keep the app open and up to date.

* If you use Notion in Chrome, keep Notion open in a tab.

To check the connection, select the Notion Meetings Add-on icon in your Chrome toolbar. When it's ready, the popup says `Connected`.

## Step 3: Start transcribing

1. Join a Google Meet call in Chrome.

2. Start meeting notes from the Notion desktop app or from Notion open in Chrome.

3. While you transcribe, the add-on icon in your toolbar shows `Transcribing` with a link to the live meeting note. Select it to jump to your notes.

## Step 4: Let people know you're transcribing

You're responsible for getting everyone's consent before you transcribe. The add-on can help you tell people, but it doesn't ask for consent for you.

Two things can let people know:

* A pinned chat message. The add-on posts a message in the Meet chat and pins it, so it stays visible for anyone who joins later.

* A recording indicator over your camera, shown while you transcribe.

Both are off until they're turned on. To turn on the chat message for yourself, go to `Settings` → `Meeting notes` → `Preferences` and turn on `Automated chat message in video calls`. Your owner can turn this on for everyone, or require it so you can't turn it off. If it's required, you'll see it's already on.

The camera indicator only appears when your camera is on. The pinned chat message appears either way.

See more ways to [share a consent message or ask out loud →](https://www.notion.com/help/ai-meeting-notes)

You can also learn more about [consent and recording laws](https://www.notion.com/help/ai-meeting-notes) →

## Step 5: Check your setup

Here's how to confirm the add-on is working:

* The setup button changes from `Set up for Google Meet` to `Installed for Google Meet` once the add-on is installed and connected.

* During a call you're transcribing, the add-on icon shows `Transcribing` with a link to the live note.

* When you're not in a call, the add-on popup shows `Connected`.

## Speaker labels

Speaker labels need a meeting transcribed in a supported language. Right now that is English and Japanese, so if your transcript doesn't show names, the language may not be supported yet.

With the add-on installed, transcripts from your Google Meet calls label each speaker. This makes your notes easier to read, search, and organize, especially in group meetings.

**Why some lines don't have a name**

Sometimes a line in the transcript won't have a name. This usually happens when:

* Two or more people talk over each other.

* More than one person matches the same voice or name.

* The audio comes from outside the call, so there's no one to match it to.

## What Notion can see

To label speakers, the add-on reads who's in the call and who's currently speaking from Google Meet. The recording indicator is drawn on your own device.

The add-on doesn't collect the text of your Meet chat, and it doesn't send your video anywhere new. Speaker labels aren't available through the API or MCP.

## Troubleshoot

* **The message posted but didn't pin.&#x20;**&#x47;oogle Meet only lets some people pin messages in the chat. If the message posts but doesn't pin, your meeting's settings may not allow pinning. The message is still visible in the chat for everyone.

* **The message couldn't post.&#x20;**&#x4D;ake sure you're using Google Meet in Chrome and that the add-on says `Connected`. Reload the Meet tab, then start transcribing again.

* **The camera indicator shows an error.&#x20;**&#x54;he indicator only works when your camera is on. Turn your camera on and reload the Meet tab. The pinned chat message still works even if the indicator doesn't.

* **The add-on says it's temporarily unavailable.&#x20;**&#x54;his usually clears on its own. Wait a moment, reload the Meet tab, and try again. If it keeps happening, make sure the Notion desktop app is running and up to date.

* **Nothing happens in a Meet tab you already had open.&#x20;**&#x49;f a Google Meet tab was open before you installed or updated the add-on, reload that tab so the add-on can work in it.

* **The popup doesn't say&#x20;****`Transcribing`****&#x20;during a call.** Reload the Meet tab and start transcribing again. If you use the desktop app, make sure it's open and up to date. If you use Notion in Chrome, keep that tab open.

* **Your transcript has no speaker labels.&#x20;**&#x43;heck that the add-on says `Connected`, then reload the Meet tab. If you see `Not connected`, the Notion desktop app usually isn't running or needs an update. Open Notion, update to the latest version, then reload your Meet tab. Remember that some lines stay unnamed on purpose, like during crosstalk.


## FAQs

### Do other people in my meeting need the add-on?

No. Only the person transcribing needs it installed.


### Does the add-on record on its own?

No. It only adds the chat message and indicator when you choose to start transcribing, and only if you've turned them on.


### Which meeting tools does it work with?

The extension works with Google Meet.


### Can I use this on my phone?

No, the extension works in Chrome on a computer.


### Why don't people see a message that I'm transcribing?

The chat message is off until it's turned on. Turn it on in `Settings` → `Meeting notes` → `Preferences`, or ask a workspace owner to turn it on for everyone.
