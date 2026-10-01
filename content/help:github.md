---
title: "Connect GitHub to Notion"
emoji: null
description: "Keep pull requests alongside your team’s project plans in Notion."
url: "https://www.notion.com/help/github"
key: "help:github"
coverImage: null
category: "Connections"
categoryKey: "category:connections"
---

A managed GitHub sync creates a **GitHub Pull Requests** database from repositories you choose. Notion imports existing pull requests and checks GitHub for updates in the background.

This guide covers **Database sync** in your GitHub connection settings. Synced properties are read-only. Make changes to pull requests in GitHub.

**Note:** This GitHub integration replaces our [legacy version](https://www.notion.com/help/github-legacy). To keep your external data current, **set up your new syncs by October 30, 2026**. Your existing synced databases will remain in Notion, but they will stop updating after that date.

## What you can sync

You can sync pull requests from multiple repositories available through a GitHub App installation. The selected repositories feed into one Notion database.

| Information  | Properties                                                             |
| ------------ | ---------------------------------------------------------------------- |
| Pull request | Title, PR Number, GitHub URL, Repository                               |
| State        | State: Open, Draft, Merged, or Closed                                  |
| Author       | Author (GitHub), and Author when a matching Notion member can be found |
| Organization | Labels, Base Branch, Head Branch                                       |
| Dates        | Created At, Updated At, Closed At, Merged At                           |

The **Author (GitHub)** property contains the GitHub username. **Author** is a Notion person property when the author’s available public email matches a workspace member.

The **Description** property syncs the pull request’s description as plain text, copied exactly as written in GitHub. It isn’t rendered as Markdown.

This sync doesn’t include GitHub issues, comments, assignees, or review details.

## Before you start

You’ll need:

* Membership in the Notion workspace.

* A GitHub account with access to the repositories you want to sync.

* A GitHub App installation with access to those repositories.

* A Business plan (Mobile Business also qualifies). GitHub sync isn’t available on other plans.

Both your GitHub account and the app installation need access. Your GitHub organization may require an owner to approve or install the app.

## Create a GitHub sync

1. In Notion, go to **Settings** → **Connections** → **GitHub**.

2. Open **Database sync** and connect your GitHub account if you haven’t already.

3. Complete GitHub’s authorization and installation steps.

4. Choose the organization or account whose repositories you want to sync. Use **Add organization…** if you need to add another installation.

5. Select the repositories to include.

6. Choose all available history or a history window.

7. Select **Create sync**.

Notion creates **GitHub Pull Requests** in your **Private** sidebar section and starts importing matching pull requests.

**Tip:&#x20;**&#x41; repository is missing? Use **Manage access on GitHub** to check which repositories the app can access. If installation requires approval, ask a GitHub organization owner to approve it.

## How GitHub syncs run

During the first import, Notion reads pull requests from each selected repository, starting with the most recently updated records and working through the selected history.

After the import, Notion regularly checks each repository for new and updated pull requests. Changes such as a new label, a closed pull request, or a merge update the corresponding properties in Notion.

The sync runs even when you close Notion. Large repositories, GitHub request limits, and temporary service issues can delay updates. Check the sync’s status for progress or errors.

## Choose how much history to sync

Choose **All history**, **Last 30 days**, **Last 90 days**, or **Last 365 days**. When all-history syncing is offered as a toggle, leave **Sync all available history** on to include all available pull requests.

The window uses the pull request’s **Updated At** time. It doesn’t depend on when the pull request was created or whether it’s open, closed, or merged.

For example, an open pull request that hasn’t changed in more than 90 days can fall outside a 90-day window.

**Tip: Older pages can be removed.** When a pull request falls outside the selected window, its page is removed from the synced database, including values in your own Notion properties. Use all available history if you need to retain unchanged pull requests.

## Change or pause a sync

Open the sync in **Settings** → **Connections** → **GitHub** → **Database sync**.

* **Add repositories:** Edit the selection and select **Save changes**. Notion imports matching pull requests from the added repositories.

* **Remove repositories:** Deselect them and save. Their synced pull request pages are removed from Notion.

* **Change history:** A longer window imports additional records. A shorter window removes records outside the new window.

* **Pause updates:** Select **Pause sync**. The existing data and settings remain.

* **Resume updates:** Select **Resume sync** to continue syncing.

Before removing repositories or shortening history, preserve any Notion-only information you need from the affected pages.

## Work with pull requests in Notion

Create views by repository, state, author, or label. Add your own properties to track release readiness or connect pull requests with your team’s planning process. Your own property values stay in Notion.

To change a GitHub property, open the pull request using **GitHub URL** and make the change in GitHub.

The database starts as private. If you share it, Notion’s sharing settings determine who can see the imported data. Viewers don’t each need access to the source repository, so review the database’s permissions before sharing private repository information.

## Troubleshoot a GitHub sync

### I can’t find an organization or repository

Check that you’ve selected the correct GitHub account and app installation. Confirm that both your account and the app have repository access. If an organization restricts app installations, ask an owner to approve access.

### A repository was renamed or moved

Open the sync’s repository settings, review the repository selection, and save it again. If it moved to a different organization, confirm that the connection has access in the new location.

### The Author property is empty

A GitHub username doesn’t always have an available public email that matches a Notion workspace member. Use **Author (GitHub)** to identify the author when the person property is empty. Changes to an author’s email or workspace membership may not refresh older synced pull requests automatically.

### A pull request is missing

Confirm that its repository is selected, that its last update is within the history window, and that your Notion view isn’t filtering it out. The first import may still be running.

### The database has stopped updating

Open the sync’s status details. Reconnect your GitHub account or restore repository access if prompted. GitHub request limits and temporary outages can delay updates while Notion retries.

## Related guides

For a comparison with Workers and shared troubleshooting guidance, see [Sync data from other tools to Notion →](https://www.notion.com/help/sync-data-from-other-tools-to-notion)
