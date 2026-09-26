---
title: "Turn on web browser for Notion Agent"
emoji: null
description: "Learn how to turn on web browsing for Notion Agent, what it can do on websites, and how to follow along as it works."
url: "https://www.notion.com/help/turn-on-web-browser-for-notion-agent"
key: "help:turn-on-web-browser-for-notion-agent"
coverImage: null
category: "Notion AI"
categoryKey: "category:notion-ai"
---

[Notion Agent](https://www.notion.com/help/notion-agent) can do more than search the web for answers. With web browsing on, it can open websites and get things done for you: click through pages, fill out and submit forms, and download files, then bring what it finds back into Notion. It works even on sites that don't connect to Notion, and you can watch every step as it happens.

Your agent has a built-in computer: a private, secure space where it can run code, work with files, and build things for you. On its own, that computer is closed off from the internet. It can reach the internet in two ways:

* **Web search** looks things up on the web and answers you in chat.

* **Web browsing** opens the computer to the internet, so your agent can visit websites, download files, and take action online.

Turning on web browsing is what gives your agent this direct access. Web search can answer questions, but only web browsing lets your agent act on websites.

Web browsing is on by default for most plans. If you're on an Enterprise plan or you work with an account manager, an owner or admin has to turn it on first.

## For Enterprise plan admins: Turn web browsing on or off

If you’re on an Enterprise plan or you work with an account manager, a workspace owner or admin must allow web browsing before you can use it. Once allowed, it stays on until an owner or admin turns it off.

1. Go to `Settings` → `Notion AI`.

2. Turn on `Enable web browsing for computer`.

After you turn it on, you can ask Notion Agent to do tasks that involve websites. Owners and admins can turn it off from the same setting at any time.

**Try this prompt:&#x20;**"Find showtimes for \[movie] near me this weekend."

## Controls for web browsing

Two things determine whether your agent can browse the web:

1. **Your workspace has to allow it.** Admins decide whether internet access is available in the workspace. If it's turned off for the whole workspace, you won't be able to turn on web browsing.

2. **You turn it on for your agent.** Your workspace can allow web browsing, but it stays off until you turn it on. To switch on web browsing for your agent, go to `Settings` → `Notion AI`. Then turn on `Web browsing`.

## What Notion Agent can do on the web

* Open websites and click through them, even sites that don't have a Notion connection.

* Fill out and submit forms.

* Download files and bring them into Notion.

* Gather info from several sites and organize it in Notion, like a page or a table.

* Handle a few more technical tasks when a job calls for them, like adding extra tools it needs, looking at public code from sites like GitHub, or pulling in data from other online services.

With web browsing off, your agent can still run code, create files, build charts, and work with your documents. It just can't reach anything outside Notion, or through a Notion connection tool.

## Watch Notion Agent as it works

Follow your agent’s progress in the live browser view. You can see each page it visits and each action it takes.

* The view starts minimized and shows what your agent is working on. Open it to see more.

* You can click or type in the browser to help your agent while it works.

## Security risks to consider before turning on web browsing

When your agent can access the open internet, keep these risks in mind:

* **Prompt injection:** A website or code your agent opens could contain instructions that try to change what your agent does.

* **Data exposure:** Your agent could send info from your chat to an external service.

* **Untrusted code:** Tools or code your agent gets from the web could behave in unexpected ways.

These risks can't be eliminated completely when an AI agent connects to the open internet. Review them before you turn on web browsing.

## Try these prompts

* "Book a table for four at \[restaurant] on Friday."

* "Fill out and submit this form with our company details: \[link]."

* "Download the latest report from \[site] and summarize it in a new page."

* "Compare prices for \[product] across a few sites and put them in a table."


## FAQs

### Who can turn on web browsing?

Your workspace admin decides whether internet access is available. When it is, you can turn on web browsing for your own agent.


### How is this different from web search?

Web search reads pages to answer your questions. With web browsing, Notion Agent can also take action on websites, like clicking buttons, filling out forms, and downloading files.


### How do I stop my agent from browsing?

Open your agent settings, and turn off `Web browser`.


### What if a website asks me to sign in?

If a website needs you to sign in, you’ll see a pop-up. You can sign in there, or take control of the browser to sign in. Your agent waits while you finish.


### Can Notion or my agent see my passwords?

No. Your login details go directly to the browser. They aren't saved in Notion, and your agent can't see them. This works like signing in through any web browser.


### Do I have to sign in every time?

No. The browser remembers your sign-ins between sessions, like a web browser that keeps you signed in to sites such as Gmail. Notion doesn't store these sign-in cookies, and remembering your sign-in isn't the same as saving your login details.
