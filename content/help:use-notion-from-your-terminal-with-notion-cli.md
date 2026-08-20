---
title: "Use Notion from your terminal with Notion CLI (beta)"
emoji: null
description: null
url: "https://www.notion.com/help/use-notion-from-your-terminal-with-notion-cli"
key: "help:use-notion-from-your-terminal-with-notion-cli"
coverImage: null
category: "Explore developer tools"
categoryKey: "category:developer-platform"
---

Notion CLI `ntn` is a tool that lets developers and AI coding agents work with Notion by typing commands in a terminal. You can read and write Notion content, and (if you have access) manage Workers from the command line.

You can also view Workers and read logs in Notion with [Developer Mode](https://www.notion.com/help/turn-on-developer-mode-to-use-developer-tools-in-notion). Use the CLI when you need to deploy Workers or change their code or setup.

This article is a high-level overview. For technical setup, see the [developer documentation](https://developers.notion.com/guides/get-started/overview).

[YouTube video player](https://www.youtube-nocookie.com/embed/k-6ldiWIDsg?enablejsapi=1\&autoplay=0\&mute=0\&playsinline=1\&controls=1\&loop=0\&modestbranding=1\&rel=0)Play

Uh-oh! It looks like your ad blocker is preventing the video from playing.

Please watch it on [YouTube](https://www.youtube.com/watch?v=k-6ldiWIDsg)

![](https://www.notion.com/front-static/illustrated-icons/catLookingUp.png)

## What to know before you start

* The CLI is designed for developers and technical builders.

* The CLI is available on all plans. However, deploying and managing [Notion Workers](https://www.notion.com/help/run-custom-code-with-workers) requires a Business or Enterprise plan.

* Some developer platform features you use through the CLI may require specific plans or admin enablement.

* If something looks off, first make sure you are on the latest version of the CLI.

* If you only need to view a Worker, read logs, turn it off, or delete it, you can do that in Notion after you turn on [Developer Mode](https://www.notion.com/help/turn-on-developer-mode-to-use-developer-tools-in-notion).

## Install the CLI

The CLI works on Mac, Linux, and Windows. On any of these, you can install it with `npm install -g ntn`.

For more info about installation, see the [developer documentation](https://developers.notion.com/cli/get-started/installation).

## If something isn’t working

Start with these quick checks:

1. **Update the CLI, then try again.** The CLI is designed to stay current, and older versions can behave differently.

2. **Confirm you’re signed into the right Notion account.** If you have multiple accounts or workspaces, sign out and back in.

3. **Check your access in Notion first.** If you can’t open the page or database in Notion, the CLI won’t be able to read or change it either.

4. **If you’re trying to use Workers commands, confirm Workers are enabled.** Workers access can depend on your plan and whether a workspace owner has turned it on.

5. **Still stuck?** Use the developer docs for the exact error and fix, since the steps can be different for each command.


## FAQs