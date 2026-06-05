---
title: "Move & duplicate content"
emoji: "📦"
description: "If you have multiple Notion workspaces or accounts, you may want to move content from one to another. We'll show you how 📦"
url: "https://www.notion.com/help/transfer-content-to-another-account"
key: "help:transfer-content-to-another-account"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/1d1cQPS5QFoIaXWyFLe5E8/bfdc63f8e69d2d83dc9a314f87c56c36/Transfer_content_to_another_account__-_hero.png"
category: "Pages & blocks"
categoryKey: "category:write-edit-and-customize"
---

**Note:**

* When you move content from one place to another, your content will be duplicated into the destination workspace or account, and the original content will continue to live where it used to.

* In the process of duplicating pages from one place to another, some content or settings in the duplicated page may be broken. This could include links, relations, permissions, page history, and more. We recommend keeping your original content until you're absolutely sure the duplicated content is set up correctly.

## Duplicate content to another workspace

If you have multiple workspaces associated with your Notion account and you want to duplicate content from one workspace to another:

1. Select `+ New page` in the sidebar of the workspace associated with the content you want to duplicate — this page will contain all of the content you want to duplicate to make it easier for you to do so in bulk.

2. From your sidebar, drag all the pages you want to duplicate into that new page.

3. Open the new page, then select `•••` → `Move to`.

4. Open the dropdown next to your current workspace’s name, then select the destination workspace.

5. Find a place in your destination workspace for your duplicated pages to live.

6. Select `I understand, duplicate`.

## Duplication error message troubleshooting

If you’re seeing “Duplication failed” or a similar error message when attempting to move content from one workspace to another, review and try the list of common solutions below.

### You reached the duplication rate limit

Notion has a max duplication rate limit of 50,000 blocks per hour. Large sets of pages, databases, and nested content can quickly exceed this limit.

If too much content is duplicated within a short period, you may see a more specific error, such as “Rate limit reached, please try again later”.

To resolve this:

* Split large content into small batches and duplicate each batch gradually over time.

* Wait 1 hour before retrying the duplication.

### The destination workspace can’t accept additional blocks

The workspace you’re moving content to may have plan or workspace-level limitations that prevent new blocks from being created. This is most common with free plans and workspaces that have exceeded their block or usage limits.

To resolve this:

* Check if the destination workspace has usage restrictions.

* Reduce the amount of content being duplicated.

* Upgrade the destination workspace if needed.

### The content being moved includes a locked or protected template

Some Marketplace templates and protected content include blocks with restricted access. This content will duplicate successfully within the same workspace, but fail when an attempt is made to duplicate it to different workspaces.

To resolve this:

* Check if the source content originated from a locked Marketplace template.

* Use an unlocked version of the template if available.

* If needed, recreate the content structure manually within the destination workspace.

### Permissions or account access issues

The duplicating account must have the right permissions in both the source and destination workspaces. Duplication can fail if:

* You’re logged into a different Notion account.

* You don’t have permission to create content in the destination workspace.

* Some nested pages or databases in the content you’re moving have restricted access.

To resolve this:

* Confirm you’re logged into the same account, and that this account has access to both workspaces.

* Ensure you access to all nested pages and databases included in the move.

* Ensure you have permissions to create pages in the destination workspace.

### None of the above

If none of the above resolves the issue, or if you’re not sure what’s causing it, try the solutions below.

#### Test with a small page

Try duplicating only a small page to the destination workspace. If the small page succeeds, the issue is most likely related to:

* Content size

* Duplication rate limits

* Large databases or nested pages

If the small page fails, check for account permissions issues or workspace limitations.

#### Split large content into smaller batches

For large migrations, try splitting content into small batches to move gradually over time. Keep each batch below the approximate 50,000 blocks per hour limit. When duplicating each batch:

* Move smaller sections separately.

* Avoid duplicating very large databases all at once.

* Space out large duplication batches over time.

#### Retry duplication after waiting 1 hour

If a duplication effort fails, wait 1 hour before trying again. This resets the 50,000 blocks per hour limit.

## Duplicate content to another account

**Tip:** If you want your Notion account to be associated with a new email address, simply change your email following the instructions [here →](https://www.notion.com/help/account-settings#account-security-settings)

To duplicate content from one Notion account to another:

1. Log into the account associated with the content you want to duplicate.

2. Select `+ New page` in your sidebar — this page will contain all of the content you want to duplicate to make it easier for you to do so in bulk.

3. From your sidebar, drag all the pages you want to duplicate into that new page.

4. Go into the new page and select `Share`.

5. Enter the email address associated with the Notion account you want to duplicate content into.

6. Make sure `Full access` is granted.

7. Select `Invite`.

8. Log into the account that you want to duplicate the content into. You should be able to see the page you just shared from your other account.

9. From inside that page, drag to select all of the pages inside, then select `⋮⋮`**&#x20;**→ `Move to`. Note that the page containing all of the pages can’t be duplicated.

10. Find a place for your duplicated pages to live.

11. Select `I understand, duplicate`.


## FAQs

### I tried changing my email address but got an error message saying: "A user with this email already exists.

If you'd like to change your account email to one that already exists within Notion, you can log into the account that holds the email you want and delete that account to free up that email address.

To delete the account, go to `Settings` in the left sidebar, then `My Account`, then `Delete My Account`.

Then log into your current account, and go to `Settings`, then `My Account`, and select `Change email`. You should be able to switch to the freed up email address.


### I can't seem to invite another account to my page.

You may have enabled the `Disable guests` feature. You can find it in the `Security & identity` section of `Settings` in your sidebar.


### I can't find any workspaces in the Move to menu.

You may have enabled the `Disable moving pages to other workspaces` setting. You can find it in the `Security & identity` section of `Settings` in your sidebar.
