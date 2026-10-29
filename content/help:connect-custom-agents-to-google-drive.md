---
title: "Connect Custom Agents to Google Drive"
emoji: null
description: "Learn how to connect a Custom Agent to Google Drive so it can find and work with your Drive files."
url: "https://www.notion.com/help/connect-custom-agents-to-google-drive"
key: "help:connect-custom-agents-to-google-drive"
coverImage: null
category: "Custom Agents"
categoryKey: "category:custom-agents"
---

You can connect your [Custom Agents](https://www.notion.com/help/custom-agents) to Google Drive so they can search, read, write, and update files in real time.

This connection is tied to the person who set it up. When your Custom Agent uses Google Drive, it checks your Drive in real time. Nothing is saved or indexed by Notion. The agent can only access files you own, files that have been shared with you, and any Shared Drives you have access to.

## What to know before you start

* Make sure you can sign in to the Google account you want to use.

* Your Google Workspace admin may need to approve Custom Agents For Drive before you can connect.

* Review the permissions shown by Google before allowing access.

* If your workspace controls which connections are allowed, a workspace owner may need to turn on Google Drive for Custom Agents.

* Connecting Custom Agents to Google Drive is different from the [Notion AI Google Drive connector](https://www.notion.com/help/notion-ai-connectors-for-google-drive) which is for [Notion Agent](https://www.notion.com/help/notion-agent?_gl=1*1oedpsa*_gcl_au*NzYxMjYyNDY4LjE3ODI4NjIyNzI.*_ga*MTMyNTc2MTE1NC4xNzgyODYyMjcy*_ga_9ZJ8CB186L*czE3ODQwNjc2NDMkbzQ2JGcxJHQxNzg0MDY4OTg5JGo1NyRsMCRoMA..).

## Connect a Custom Agent to Google Drive

There are two ways to connect Google Drive. You can connect your Google account once from your settings, then add it to any agent. Or you can add Google Drive while you're working in a specific agent.

**Connect from your settings**

This is the quickest way if you want to use the same Google account across more than one agent.

1. Go to `Settings` → `Connections`.

2. Next to `Google Drive`, select `Connect`.

3. Sign in with the Google account you want to use.

4. Review the permissions Google shows, then continue.

Your Google account is now connected to Notion. You can add Google Drive to any Custom Agent from its Tools and access settings.

**Connect from an agent**

1. Open the Custom Agent you want to update.

2. Go to the agent’s `Settings` → `Tools and access`.

3. Select `+ Add connection` → `Google Drive`.

4. Follow the steps to sign in to Google and allow access. Optional: Choose specific shared drives or folders to limit what the agent can access.

5. Select `Save`.

Once you’re connected, you can choose exactly what your Custom Agent can access. In the agent’s **Tools & Access** settings, pick the specific Drive files or folders you want the agent to be able to view and/or edit.

To ensure the highest quality, mention Google Drive in your Custom Agent’s instructions when you want it to search or update Drive files.

## Choose an access level

When you add Google Drive, you'll choose how much the agent can do. You can change this later.

* **Limited access:&#x20;**&#x4E;otion AI can read any files the user can read, but can only edit files it has created or the user has selected.

* **Full access:** Notion AI mirrors user’s existing Drive permissions. It can read and edit any files the user can read and edit.

## What to expect when you connect

**Google asks you to approve access:&#x20;**&#x54;his is the normal setup flow. Pick the Google account you want, review what's being requested, and continue. Next, Google shows the Drive permissions for the access level you picked. You're connected once Notion says Google Drive is connected.

**You might not need admin review:&#x20;**&#x4D;any Google Workspaces let people connect new apps on their own. If your admin hasn't set a special rule for Custom Agents For Drive, you may be able to connect right away. Once an admin sets a rule for the app, that rule is what counts.

**Notion says "Connected" but you never saw a Google sign-in:&#x20;**&#x4E;otion may reuse a Google Drive connection you set up before. That's normal when it still works. If it's using the wrong Google account, or Drive isn't working, remove Google Drive under `Tools & access`, then connect again and pick the account you want.

## Disconnect Google Drive

You can remove Google Drive from every agent that uses it, or from just one agent.

**Remove your account from all agents**

This signs your Google account out of every Custom Agent that was using it.

1. Go to `Settings` → `Connections`.

2. Next to `Google Drive`, select `Disconnect`.

**Remove Google Drive from one agent**

1. Open the agent and go to `Tools and access`.

2. Select the three dots next to the Google Drive connection.

3. Select `Disconnect`.

## Add an optional trigger

When connecting a Custom Agent to Google Drive, you can set up a trigger so the agent checks Google Drive for changes. To do so, point it to a folder (or a Drive link) and choose how often it should look. If something changes, the agent will notice and run.

## Test the connection

Try one of these prompts to test your Custom Agent’s connection to Google Drive:

* “Search Google Drive for ‘roadmap’ and tell me what you find.”

* “Create a Google Doc called ‘Weekly recap’ with a short summary of this week.”

## What your Custom Agent can do in Google Drive

Once connected to Google Drive, your Custom Agent can:

* Search across the Docs, Sheets, and Slides you can access.

* Edit existing Docs, Sheets, and Slides, depending on the access scope you grant.

* Read and summarize file content in real time.

* Read the text of a PDF.

* Create new docs, spreadsheets, presentations, and folders.

* Act on a trigger when files are updated.

## What your Custom Agent can access

Your Custom Agent only has access to what the connected Google account can access. If that Google account loses access to a file or folder, the agent loses access too.

Editors can remove the Google Drive connection for a Custom Agent. Only the person who connected the Custom Agent to Google Drive can add more access (like adding more folders).

## Limit access for your Custom Agent

It’s best to limit access to only the shared drives or folders your Custom Agent needs. This helps the agent stay focused and reduces risk.

On a shared Custom Agent, anyone with access to that agent can query the connected Google Drive.

## What your Custom Agent can’t do in Google Drive

* Connect to more than one Google account per agent.

* This connection only works with files in your Google Workspace. If a file is shared from a different Google Workspace, the Custom Agent won’t be able to access it.

* If the Custom Agent is shared, anyone who can use the agent can also search the Drive it’s connected to.

## Fix connection problems

**"Your institution's admin needs to review this app"**

You'll see this when your organization hasn't approved one or more of the permissions the app needs. Only an admin can fix this one.

1. Select `Request access`.

2. Your Google Workspace admin gets the request under `Apps pending review`.

3. Try connecting again after your admin approves the app and all of its permissions.

**"Access blocked: Authorization error"**

You'll see this when your admin has blocked the app for your account or your group. Reach out to your Google Workspace admin. They need to allow Custom Agents For Drive for your group before you can connect.

**It worked before but stopped**

Your Google access may have expired or been turned off, or your admin may have changed a rule.

1. Reconnect Google Drive under `Tools & access`.

2. If Google shows an admin block, contact your Workspace admin.

3. If Google lets you in but Notion still can't connect, contact Notion support and share the error you see.

## For Google Workspace admins

To let someone connect, allow Custom Agents For Drive for their group (organizational unit) and approve every Google permission their access level asks for.

**How Google decides which apps people can connect**

In your Admin console under `API controls` → `Settings` → `Unconfigured third-party apps`, the default setting lets people connect new apps on their own. With that default, people can connect Custom Agents For Drive without your review, as long as you haven't set a separate rule for it.

The other settings only allow basic Google sign-in info, or block all new apps. Any rule you set for a specific app overrides the default. Guests are managed through their own group.

This setting covers app sign-in access. Google Workspace Marketplace installs are managed separately.

**Set up Notion Agents For Drive**

Setting up the app yourself lets people connect even when new apps are limited to basic sign-in or blocked.

1. Open `Admin console` → `Security` → `Access and data control` → `API controls` → `App access control`.

2. Open Configured apps, then select `Configure new app`.

3. Search using this exact OAuth client ID:

   `69206789846-avkmfeq0epeducrkoutjo361r8p5h103.apps.googleusercontent.com`

4. Pick the groups whose people should be able to connect.

5. Choose `Trusted` to allow every permission the app asks for, or choose `Specific Google data` and include every Drive and Google sign-in permission the connection needs.

6. Review your choices and select `Finish`.

7. Ask the person to connect again after the change takes effect.

**Review an app request**

When you review a request, check that:

* The app is Custom Agents For Drive.

* It's allowed for the person's group.

* Every Drive and Google sign-in permission is approved.

* A sub-group rule isn't quietly blocking it.

For **Specific Google data**, select every permission the connection asks for.

Google Workspace changes can take a while. Ask the person to connect again after the change goes through.


## FAQs

### Why don’t I see Google Drive as an option?

Ask a workspace owner to check if Google Drive is allowed for Custom Agents.


### Why does setup keep failing?

First, make sure you’re signing in to the right Google account. If your organization controls Google app access, a Google Workspace admin may need to approve the connection.

You can also try an incognito or private window to avoid signing into the wrong account.


### Why can’t my Custom Agent find a file?

Make sure the connected Google account can open the file in Google Drive. If you’ve limited access to certain drives or folders, make sure the file is inside those.


### The Custom Agent can read a page, but can’t edit it. Why?

Make sure the file is a Google Doc (not a PDF or a Google Sheet), and the connected Google account has edit access to the page.


### Is this the same as the Notion AI Google Drive connector?

No. The [Notion AI Google Drive connector](https://www.notion.com/help/notion-ai-connectors-for-google-drive) is for Notion AI search. This article is about connecting Google Drive to a Custom Agent so it can take actions like reading files and creating or updating Google Docs.


### Can I restrict what my Custom Agent can access in Google Drive?

Yes. Choose specific shared drives and folders during setup.


### What file types can my Custom Agent work with?

Your Custom Agent can read and write with Google Docs, Sheets, and Slides. Other file types may be read-only or may not work as well.
