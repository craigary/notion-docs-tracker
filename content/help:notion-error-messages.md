---
title: Common Notion errors
emoji: null
description: null
url: https://www.notion.com/help/notion-error-messages
key: help:notion-error-messages
coverImage: https://images.ctfassets.net/spoqsaf9291f/15MnehxCRUUA3LITX21Lar/7c80798bd5cce07c4b492cb6543419c7/Troubleshooting_Reference_Visuals.png
category: Troubleshooting
---

Check our [status page](https://status.notion.so/) and [X](https://twitter.com/NotionStatus) for live updates on any known issues.

## General errors and solutions

Some common error messages and issues you might encounter in Notion include:

* “Something’s not right”

* “Something went wrong”

* “Hmm… something’s not right”

* “There was an issue persisting your edits”

* “Cannot save changes”

* "Storage operation did not complete"

* “Notion is damaged”

* Not being able to access Notion or specific Notion pages

The following may help resolve these errors:

* Check our [status page](https://status.notion.so/) and [X](https://twitter.com/NotionStatus) for live updates on any known issues.

* Log out and log back into your Notion account.

* Restart your device and trying again.

* Access Notion from a different device or browser, or from an incognito tab.

* Clear your local storage and cache on your browser. Here are some resources on how to clear local storage for various platforms:

  * [Chrome](https://support.google.com/accounts/answer/32050?hl=en\&co=GENIE.Platform%3DDesktop)

  * [Edge](https://www.microsoft.com/en-us/edge/learning-center/how-to-manage-and-clear-your-cache-and-cookies?form=MA13I2)

  * [Firefox](https://support.mozilla.org/en-US/kb/how-clear-firefox-cache)

  * [Notion desktop app](https://www.notion.com/help/reset-notion)

* Quit and restart your browser.

* Reset your Notion app following the instructions [here](https://www.notion.com/help/reset-notion), and make sure you’re on the latest version of Notion.

* Make sure you’re using Notion on a supported device and platform.

  * If you’re using a Chromebook or a ChromeOS device, these devices aren’t supported. You should use a web browser like Chrome, Firefox, Safari, or Edge or an Android or iOS mobile device to access all of Notion’s features.

  * If your Apple mobile device is on iOS 15 or earlier, these OS versions aren’t supported. If your device supports an upgrade to iOS 16 or later, upgrade it. If your device doesn’t support iOS 16 or later, you may still be able to use Notion, but the app may not work as expected.

* Disable any VPNs that you may be using and try again.

* Allowlist the [notion.so](http://notion.so) domain with your VPN and try again.

## "Offline" or "Connect to the internet"

**When this error may occur**

If you see an error that says “Offline” or “Connect to the internet to get started”, it’s possible that you’ve lost your internet connection or that your network, or some privacy or security software installed on your device is blocking access to Notion.

**What you can try to fix the error**

To fix this error:

* Make sure you’re connected to the internet, and that your internet isn’t down or spotty.

* Check if you’re using a proxy, firewall, or VPN software on your computer that may be blocking access to Notion.

* If you’re connected to a network that belongs to a school, corporation, or organization, ask IT to unblock Notion on that network.

* If you’re on a personal network, try changing your DNS to 1.1.1.1 or 8.8.8.8. You can learn more about how to do this [here →](https://developers.google.com/speed/public-dns/docs/using)

## "Your file is over the limit"

**When this error may occur**

You might see an error that says “Your file is over the 5MB limit of the Free Plan”. Remember that on the Free Plan, you have a limit of 5MB for imports.

**What you can try to fix the error**

To fix this error:

* You can remove any imported files that you no longer need.

* You can [upgrade to a paid plan](https://www.notion.com/pricing), which will increase your import limit to 50MB.

## "Rate limit reached"

**When this error may occur**

You might see an error that says “Rate limit reached, please try again later”.

This error usually occurs when you’ve exceeded the number of allowed requests to Notion’s API by trying to duplicate a large amount of content in Notion. Currently, you can duplicate up to 50,000 blocks per hour. This limit is in place to make sure all users have fair access to Notion.

**What you can try to fix the error**

To fix this error:

* Wait an hour and try the duplication again so that you don’t hit the limit.

* Make the content that you’re trying to duplicate smaller. For example, if you’re trying to duplicate a page, you can try removing parts of the page that you don’t need duplicated, or split the page up into multiple pages. Then, try the duplication again.

## "Request body too large"

**When this error may occur**

When trying to add text to your page, you might see an error that says “Request body too large”. This error, also known as an HTTP 413 error, can occur when you try to paste a lot of text (over 500kb) into a Notion page.

**What you can try to fix the error**

To fix this error, try splitting up the text you’re trying to copy and paste into smaller chunks.

## "Unsaved transactions"

**When this error may occur**

You might see an error that says “Unsaved transactions: You don’t have access to move this page to the desired location”. This could happen because:

* You’re trying to set up an integration or a bot on a page that you only have guest access to, or that you don’t have full access to.

* Your integration or bot doesn’t have access to the page you’re in.

**What you can try to fix the error**

To fix this error:

* Make sure that you have proper access to the page you’re in.

* Give your integration or bot access to the page you’re in.
