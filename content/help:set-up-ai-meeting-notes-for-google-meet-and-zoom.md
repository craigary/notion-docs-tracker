---
title: "Set up AI Meeting Notes for Google Meet & Zoom"
emoji: null
description: "Learn how workspace owners and IT admins can set up meeting notes for their whole team across Google Meet and Zoom."
url: "https://www.notion.com/help/set-up-ai-meeting-notes-for-google-meet-and-zoom"
key: "help:set-up-ai-meeting-notes-for-google-meet-and-zoom"
coverImage: null
category: "AI Meeting Notes"
categoryKey: "category:ai-meeting-notes"
---

If you manage Notion for a team, you can set up meeting notes for everyone instead of asking each person to do it themselves. This article is for workspace owners and IT admins. Each person on your team still starts their own transcription and is responsible for getting consent.

## Before you start

* Your team needs access to [AI Meeting Notes](https://www.notion.com/help/ai-meeting-notes), which comes with the Business and Enterprise plans.

* Members still set up their own devices and fix their own issues. Learn how to [set up the AI Meeting Notes Add-on for Google Meet](https://www.notion.com/help/install-the-notion-meetings-add-on) and [set up AI Meeting Notes for Zoom.](https://www.notion.com/help/get-speaker-labels-in-zoom-calls)

## Install the AI Meeting Notes Add-on for Google Meet

Workspace owners and IT admins can install the add-on for everyone in the workspace from the Google Admin console, so no one has to add it themselves.

1. Sign in to the Google Admin console.

2. Go to `Devices` → `Chrome` → `Apps & extensions` → `Users & browsers`.

3. Select the `+` button in the lower corner, then choose `Add from Chrome Web Store`.

4. Select `Search by ID` in the upper-right corner and paste the extension ID: `bmfgmiihbljnfndmpdffjfliciaddbfc`.

5. Choose `Select` to add the extension.

6. Set the policy to `Force install` or `Force install + pin to browser toolbar`.

Only the person transcribing needs the add-on. Once it’s installed, their next transcribed Google Meet call shows the pinned chat notice and the recording indicator, and their transcript labels each speaker.

## Pre-grant the Mac permission for Zoom speaker labels

To put people’s Zoom names on the transcript, Notion needs one Mac permission called Accessibility. It lets Notion read the Zoom participant list and see who’s speaking from the Zoom app on the Mac. Notion doesn’t record the screen or read Zoom chat.

Normally each person grants this permission the first time they turn on Zoom speaker labels. If you manage your team’s Macs with a device management (MDM) tool, you can approve it ahead of time so people don’t see a prompt.

### [For macOS 26 & earlier](https://www.notion.com/help/set-up-ai-meeting-notes-for-google-meet-and-zoom#for-macos-26-&-earlier)

Upload this configuration profile to your MDM tool and deploy it to the Macs that should get Zoom speaker labels. Once it’s installed, Notion has Accessibility access and people aren’t asked to turn it on.

`notion-accessibility.mobileconfig`

\<?xml version="1.0" encoding="UTF-8"?> \<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http\://www\.apple.com/DTDs/PropertyList-1.0.dtd"> \<plist version="1.0"> \<dict> \<key>PayloadContent\</key> \<array> \<dict> \<key>PayloadDescription\</key> \<string>Allows Notion to use Accessibility to label who's speaking in Zoom meeting notes.\</string> \<key>PayloadDisplayName\</key> \<string>Privacy Preferences Policy Control\</string> \<key>PayloadIdentifier\</key> \<string>com.notion.meeting-notes.accessibility.pppc\</string> \<key>PayloadOrganization\</key> \<string>Notion\</string> \<key>PayloadType\</key> \<string>com.apple.TCC.configuration-profile-policy\</string> \<key>PayloadUUID\</key> \<string>EAA4C83B-F8E3-4707-AC0E-F7EC89149E5F\</string> \<key>PayloadVersion\</key> \<integer>1\</integer> \<key>Services\</key> \<dict> \<key>Accessibility\</key> \<array> \<dict> \<key>Allowed\</key> \<true/> \<key>CodeRequirement\</key> \<string>identifier "notion.id" and anchor apple generic and certificate 1\[field.1.2.840.113635.100.6.2.6] /\* exists \*/ and certificate leaf\[field.1.2.840.113635.100.6.1.13] /\* exists \*/ and certificate leaf\[subject.OU] = LBQJ96FQ8D\</string> \<key>Comment\</key> \<string>Zoom speaker labels in Notion meeting notes\</string> \<key>Identifier\</key> \<string>notion.id\</string> \<key>IdentifierType\</key> \<string>bundleID\</string> \<key>StaticCode\</key> \<false/> \</dict> \</array> \</dict> \</dict> \</array> \<key>PayloadDescription\</key> \<string>Allows Notion to use Accessibility to label who's speaking in Zoom meeting notes.\</string> \<key>PayloadDisplayName\</key> \<string>Allow Notion Accessibility (Zoom speaker labels)\</string> \<key>PayloadIdentifier\</key> \<string>com.notion.meeting-notes.accessibility\</string> \<key>PayloadOrganization\</key> \<string>Notion\</string> \<key>PayloadScope\</key> \<string>System\</string> \<key>PayloadType\</key> \<string>Configuration\</string> \<key>PayloadUUID\</key> \<string>155BE97F-A457-42E5-A166-03B354B728FA\</string> \<key>PayloadVersion\</key> \<integer>1\</integer> \</dict> \</plist>

To build the profile in your MDM tool’s own settings instead, create a Privacy Preferences Policy Control (PPPC) profile with these values:

* **Identifier:** `notion.id`

* **Identifier type:** Bundle ID

* **Code requirement:** `identifier "notion.id" and anchor apple generic and certificate 1[field.1.2.840.113635.100.6.2.6] /* exists */ and certificate leaf[field.1.2.840.113635.100.6.1.13] /* exists */ and certificate leaf[subject.OU] = LBQJ96FQ8D`

* **Service:** Accessibility

* **Access:** Allow

### [For macOS 27 & later](https://www.notion.com/help/set-up-ai-meeting-notes-for-google-meet-and-zoom#for-macos-27-&-later)

On macOS 27, MDM can’t turn on Accessibility by itself. Deploy an app privacy permission defaults declaration (Declarative Device Management) instead. The first time someone opens Notion after it’s installed, macOS shows your organization’s reason and asks them to allow access.

Deploy the settings below as a custom declaration. In your MDM tool it must be user scoped, and scoped to Macs on macOS 27 or later. The key has to include Notion’s code requirement exactly as shown, or macOS ignores it. You can change the `OrganizationJustification` text.

`notion-accessibility-permission-defaults.json`

{ "Type": "com.apple.configuration.app.settings", "Identifier": "notion.app-settings.privacy", "ServerToken": "version-1", "Payload": { "Privacy": { "PermissionDefaults": { "notion.id {identifier \\"notion.id\\" and anchor apple generic and certificate 1\[field.1.2.840.113635.100.6.2.6] /\* exists \*/ and certificate leaf\[field.1.2.840.113635.100.6.1.13] /\* exists \*/ and certificate leaf\[subject.OU] = LBQJ96FQ8D}": { "OrganizationJustification": "Notion uses Accessibility to label who's speaking in Zoom meeting notes.", "Accessibility": "Allow" } } } } }

On Jamf, you can build the same declaration in `Blueprints` → `App Settings` → `App privacy permission defaults`, using this key:

`notion.id {identifier "notion.id" and anchor apple generic and certificate 1[field.1.2.840.113635.100.6.2.6] /* exists */ and certificate leaf[field.1.2.840.113635.100.6.1.13] /* exists */ and certificate leaf[subject.OU] = LBQJ96FQ8D}`

For the Jamf steps, see [Deploying App Privacy Permission Defaults in macOS 27](https://support.jamf.com/en/articles/16923001-deploying-app-privacy-permission-defaults-in-macos-27) <!-- -->→

If someone opened Notion before the declaration reached their Mac, macOS won’t show the prompt. To show it the next time they open Notion, run `tccutil reset All notion.id` on that Mac. This resets all of Notion’s privacy permissions on that Mac, including microphone access, so they’ll be asked for those again.

Here’s what the pre-grant does and doesn’t do:

* It means members won’t see the Mac permission prompt.

* It doesn’t collect consent from meeting participants. Your team is still responsible for getting consent.

* It doesn’t turn speaker names on by itself. Each person still turns on `Enable for Zoom` in `Settings` → `Meeting notes` → `Preferences`.

## Set consent controls for your workspace

Notion can post an automatic notice in the call chat when someone starts transcribing, so people know the meeting is being transcribed. You control how this works for your team.

* **Automated chat message in video calls:** on by default for every member in Google Meet and Zoom calls. Members can turn it off for themselves unless an owner requires it.

* **Require it for everyone:** go to `Settings` → `Meeting notes` and turn on `Enforce consent for all workspace members`. When you require it, members can’t turn it off.

* **Set it across an organization:** organization owners on the Enterprise plan can set this for every workspace from the organization console under `Security` → `Notion AI`.

## Check that each setup worked

Members can confirm each setup themselves in `Settings` → `Meeting notes` → `Preferences`.

* **Google Meet:** open the add-on from the Chrome toolbar. The status should say `Connected`. The Google Meet row shows `Installed for Google Meet` once Notion detects the add-on.

* **Zoom:** the Zoom row shows `Enabled for Zoom` once the permission is granted. If someone turned the permission off, they can turn it back on there with `Enable for Zoom`. Names show up in their next transcribed Zoom call.
