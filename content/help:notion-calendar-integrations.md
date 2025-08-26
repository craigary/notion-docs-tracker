---
title: Notion Calendar integrations & API
emoji: 🔌
description: Notion Calendar works with a lot of other tools that you already use in your day to day. It also works seamlessly with Notion 🔌
url: https://www.notion.com/help/notion-calendar-integrations
key: help:notion-calendar-integrations
coverImage: https://images.ctfassets.net/spoqsaf9291f/3Rj0DP4zcZd8LTN01qNPXl/158584fb1998759dff32a7e70a4edaba/notion-calendar-integrations__1_.png
category: Notion Calendar
---

Did you know you can use Notion Calendar with Notion? [Learn more here →](https://www.notion.com/help/use-notion-calendar-with-notion)

## Conferencing integrations

For the best experience with setting up conferencing integrations and adding conferencing links to events, use Notion Calendar on desktop or web.

Notion Calendar integrates with conferencing tools like Zoom, Microsoft Teams, and many more. There are three types of conferencing integrations in Notion Calendar:

* Default integrations: Conferencing that is available to you by default from your calendar provider. Google Meet, which is linked to Google Calendar, is one example.

* Connected integrations: An integration you can set up by logging into a conferencing tool. New events you create on desktop or web will generate new links for this conference tool from within Notion Calendar. Zoom is an example of a connected integration that Notion Calendar supports.

* Custom integrations: You can add a stable conferencing link for a conferencing tool of your choice by going to `Settings` → `Conferencing` → `Conferencing providers` → `Add`. You can give your integration a name. This conferencing tool will show up in the conferencing dropdown when you create events. Any stable links will work, but Notion Calendar can detect popular services, including [Around](https://around.co/), [BlueJeans](https://www.bluejeans.com/), [Doxy.me](https://doxy.me/), [Microsoft Teams](https://www.microsoft.com/en/microsoft-teams/group-chat-software), [Skype](https://www.skype.com/), [Webex](https://www.webex.com/), and [Whereby](https://whereby.com/).

**Note:**

* If an event contains conferencing links in both its description and conferencing field, you’ll be taken to the link from the event’s description when you join a meeting from Notion Calendar.

* At this time, Notion Calendar doesn’t support FaceTime as a conferencing option.

### Set a default conferencing option

A default conferencing option allows you to automatically add conferencing to an event that has at least one other participant when you’re using Notion Calendar on desktop. To set Zoom as this default option, go to `Settings` → `Conferencing` → `Default conferencing`, then in the dropdown, select `Zoom`.

### Zoom

**Connect your Zoom account**

To connect your Zoom and Notion Calendar accounts, go to `Settings` → `Conferencing`. Find `Zoom` and select `Configure`. When you’re redirected to your browser, make sure you’re logged in with the right Zoom account, then select `Authorize` to give Notion Calendar access.

Notion Calendar asks only for the [Zoom permissions](https://developers.zoom.us/docs/integrations/oauth-scopes/) that we absolutely need to make sure the integration with Notion Calendar works properly. These permissions are only used to allow you to connect your account and add Zoom meetings to events. [Learn more about our security practices here →](https://www.notion.com/help/security-and-privacy)

**Passcode settings**

If you’ve enabled the use of Personal Meeting IDs (PMIs) in your [Zoom Profile Settings](https://zoom.us/profile/setting), Notion Calendar will use your configured stable PMI and passcode when adding a Zoom link to a meeting. If this setting is off in Zoom, Notion Calendar will protect your Zoom calls with a secure, one-time PIN and include it in the meeting for you and participants to join with a single click. Notion Calendar generates these PINs according to your Zoom admin's [passcode complexity requirements](https://support.zoom.us/hc/en-us/articles/360033559832).

**Disconnect your Zoom account**

To stop using your Zoom account with Notion Calendar, go to `Settings` → `Conferencing`. Find Zoom and select `Disconnect`.

If you remove Notion Calendar from your installed apps in Zoom App Marketplace, we will follow Zoom's [deauthorization and data compliance](https://marketplace.zoom.us/docs/guides/auth/deauthorization) guidelines.

**Note:**

* If you’re having trouble authorizing Notion Calendar as you set up the integration, have an admin sign into [marketplace.zoom.us](http://marketplace.zoom.us/), search for Notion Calendar, and turn on `Pre-approve`.

* Currently, when you join a meeting in the Zoom app from Notion Calendar, your video will be turned off by default.

* If you have any problems joining a meeting, try disconnecting then reconnecting your Zoom account.

### Google Meet

Because Notion Calendar is already connected to your Google account, you don’t need to do anything else to add Google Meet links to your meetings! Even if you’ve connected multiple Google accounts to Notion Calendar, Notion Calendar will make sure you’re joining meetings across your various calendars from the right Google account.

**Note:&#x20;**&#x49;f you don’t see Google Meet as a conferencing option in Notion Calendar, it might mean your Google Workspace doesn’t have Google Meet enabled. Reach out to an admin to [turn on Meet video calling](https://support.google.com/a/answer/9493952).

## Notion integration

Notion Calendar can be used with Notion. Add Notion pages to your event details for easy access and view important dates from Notion databases directly in Notion Calendar so you don’t have to track your database events separately from your other important plans. [Learn more here →](https://www.notion.com/help/use-notion-calendar-with-notion)

## Notion Calendar API

Notion Calendar has a simple local API you can use to open Notion Calendar to a specific event from another tool. This works on desktop, on both macOS and Windows.

Here is an example schema:

`cron://email protected&email protected&startDate=2022-01-05T20:30:00.000Z&endDate2022-01-05T21:00:00.000Z&title=Test&ref=com.example.test`

Here are the components of the schema:

| Component                 | Definition                                                                                                                                                                                                                                                                                     | Example                                             |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `accountEmail` (required) | The Google account the event belongs to                                                                                                                                                                                                                                                        | email protected                                     |
| `iCalUID` (required)      | The event identifier as defined in RFC5545 (see documentation from [Apple Developer](https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507283-calendaritemexternalidentifier) and [Google Workspace](https://developers.google.com/calendar/api/v3/reference/events#iCalUID)) | email protected                                     |
| `startDate` (required)    | ISO 8601 date, with an optional time                                                                                                                                                                                                                                                           | 2022-01-05 (all-day event) 2022-01-05T20:30:00.000Z |
| `endDate` (required)      | ISO 8601 date, with an optional time                                                                                                                                                                                                                                                           | 2022-01-06 (all-day-event) 2022-01-05T21:00:00.000Z |
| `title` (optional)        | The title of the event to be opened                                                                                                                                                                                                                                                            | Weekly meeting                                      |
| `ref` (optional)          | Your app’s referrer                                                                                                                                                                                                                                                                            | com.example.test                                    |

**Learn more**

* [Use Notion Calendar with Notion](https://www.notion.com/help/use-notion-calendar-with-notion)

* [Notion Calendar for teams](https://www.notion.com/help/notion-calendar-for-teams)

* [Notion Calendar keyboard shortcuts](https://www.notion.com/help/notion-calendar-keyboard-shortcuts)

* [Notion Calendar apps](https://www.notion.com/help/notion-calendar-apps)
