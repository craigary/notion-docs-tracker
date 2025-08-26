---
title: Integrate GitHub
emoji: 🧮
description: Connect Notion and GitHub so you can keep your workflows in sync 🧮
url: https://www.notion.com/help/github
key: help:github
coverImage: https://images.ctfassets.net/spoqsaf9291f/6hWH8Qhv0JreyWyujm0AwU/e531399268bd8ad05b6dd7c380490829/GitHub.png
category: Data & integrations
---

Notion's integration with GitHub allows you to seamlessly connect your development workflows. You can link GitHub content directly in Notion pages, pull GitHub information into Notion databases, and sync pull requests with Notion tasks to keep your team informed of project statuses. Read on to learn about the different features of the integration and how you can set them up.

## Set up GitHub integration

**Note:** You can only connect one Notion workspace to a GitHub organization. If you’d like to connect a different Notion workspace to your GitHub organization, you’ll first have to [disconnect](https://www.notion.com/help/github#disconnect-github-from-notion) your current Notion workspace.

You will need to be both a Notion workspace owner and a GitHub org admin to connect Notion and the GitHub workspace app.

1. Go to `Settings` in the sidebar → `Connections.`

2. Find `GitHub (Workspace)`.

3. Click `Connect` and go through the authentication flow.

## Create GitHub code previews

Link to a file or specific lines from a file directly in Notion. You can even link from a specific commit or branch if you want the code you’re referencing to be up-to-date.

1. Copy the [permalink](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet#linking-to-code) for your desired lines from GitHub.

2. Paste it into a Notion page and select `Paste as preview` to embed the code into your page.

## Create a synced database

You can sync your GitHub repositories (including pull requests and issues) into Notion as databases. To do this:

1. In GitHub, copy the link to a PR or issue.

2. Paste the link into Notion and select `Paste as database`.

   * If you haven't already, you will be prompted to sign in and connect Notion with your GitHub account.

3. The synced database will be created in a [table view](https://www.notion.com/help/tables), with all GitHub properties automatically added.

4. The database will begin populating automatically and will continue to sync if you navigate away from the page.

### Supported GitHub properties

Here is a list of GitHub properties that we support:

|                    |                                  |
| ------------------ | -------------------------------- |
| Title              | Assignees                        |
| Description        | State                            |
| PR or Issue number | Creator                          |
| Created time       | Merged, updated, and closed time |
| Reviewers          |                                  |

Labels and tags aren’t supported at this time.

### People properties

You can use identity mapping to connect GitHub identities to your team's Notion profiles. To do this:

1. Navigate to your [GitHub email settings](https://github.com/settings/emails) and ensure that the `Keep my email addresses private` setting is **not** checked on.

2. In your GitHub profile (`https://github.com/{YOUR_USERNAME_HERE}`), edit your profile to add your Notion email address.

This enables your identity to be mapped to synced databases in workspaces you are a member of.

## Link GitHub PRs to Notion

To link PRs from GitHub to a Notion, you'll need a prefixed unique ID property in your database.

[Learn more about unique IDs here](https://www.notion.com/help/unique-id)!

The GitHub Pull Request property inside your Notion database will automatically keep your cross-functional teams informed of task statuses. It also has many attributes that you can use in rollups, formulas, and filters.

1. In a Notion database, click `+` to add a new property.

2. Search for and click `GitHub Pull Requests` to add this property to your database.

3. Make sure your database has a [Unique ID property](https://www.notion.com/help/unique-id). This property will be added to your database if it doesn’t already have one.

4. To use the GitHub Pull Request property, make sure you’ve connected your GitHub account with Notion. Then, either add the Unique ID of the Notion task to the pull request, or paste the GitHub pull request URL into the property.

By default, Notion enables backlinks on Notion tasks to GitHub. If you want to turn this off, click on the GitHub Pull Request property in your database → `Edit property`. Toggle off `Linkbacks in GitHub`.

### Automate task status updates

You can use the GitHub Pull Requests property to automatically update the status of your tasks in Notion.

1. Select the title of your `GitHub Pull Requests` property and click `Edit property`.

2. Find the `Auto-update` section and select the status property you want to update from the drop down menu.

3. Select the task status to be set when the GitHub PR is Opened, Review Requested, Approved, and Merged.

4. Now when the PR progresses in GitHub, your task status in Notion will be updated automatically based on your settings.

You can also show GitHub activity in the linked Notion task. To do this, click on the GitHub property in your database → `Edit property`. Turn on `Activity Comments`.

![GitHub Auto-update status](https://images.ctfassets.net/spoqsaf9291f/lt0UE8MLZvMcGZDXCIhwi/eea3c6bdb042c5fce199a06b77438e39/notion_github_marketplace_3.png)

### Use magic words to link GitHub PRs to Notion tasks

If you want to link a GitHub PR to one or more Notion tasks, simply enter a magic word and the Notion tasks’ [unique ID](https://www.notion.com/help/unique-id) in your PR’s description.

Magic words are key words that help establish relationships between Notion tasks and GitHub PRs. You can use any of the following words:

* close, closes, closed

* fix, fixes, fixed

* resolve, resolves, resolved

* complete, completes, completed, completing

* ref, references

* part of

* related to

* contributes to

* towards

For example, your PR could have the description “fixes CTT-13”. Once that description is set, your Notion task with the ID CTT-13 will be linked with that PR.

If your PR description uses magic words associated with closing or finishing a task, the Notion task will be marked as done when the PR is merged.

If your PR description uses magic words associated with referring to or relating to a task, the Notion task will not be marked as done when the PR is merged.

You can link Notion tasks as reference-only, so that those tasks won’t be marked as done.

## Disconnect GitHub from Notion

To disconnect GitHub from Notion, you’ll need to be a Notion workspace owner.

1. Go to `Settings`.

2. Select `Connections`.

3. Next to GitHub, select `•••` → `Disconnect all users`.

When you disconnect GitHub from Notion, nobody in your workspace will be able to use the integration until it’s set up again.
