---
title: "GitHub AI Connector"
emoji: null
description: null
url: "https://www.notion.com/help/notion-ai-connector-for-github"
key: "help:notion-ai-connector-for-github"
coverImage: null
category: "Notion AI Connectors"
categoryKey: "category:notion-ai-connectors"
---

* This feature is available on Business and Enterprise Plans.

* Notion AI generates answers using LLMs like GPT-5 and Claude. Be sure to double-check all answers for accuracy.

* There are many other ways to use Slack and Notion together. Learn more about our [Slack connection →](https://www.notion.com/help/slack)

## Connect GitHub to Notion AI

**Who can****&#x20;connect GitHub to Notion AI?**

* You must be a GitHub organization owner and Notion workspace owner.

* Your workspace must be on the Business or Enterprise Plan and have more than one member.

Once the GitHub AI Connector is set up for the workspace, members can use the integration to retrieve answers:

* Public repos: No additional authentication required after initial connector set-up by an owner.

* Private repos: Each member must log in/authenticate with GitHub to verify access.

**How do I connect GitHub?**

There are two different ways to connect GitHub to Notion AI. To connect the GitHub organization, you'll need to be a workspace owner and GitHub owner. To connect private repositories, you can be a workspace member.

**If you're a Notion workspace owner and GitHub owner:**

To connect GitHub to your Notion workspace:

1. Go to `Settings` → `Notion AI`.

2. Select `+` next to `GitHub`.

   ![hc: github connector entry point](https://images.ctfassets.net/spoqsaf9291f/4BqiliaDmI12UzYMrJg9KL/3df8ef35fb4b27c2a6b7f449c4e0733d/Help_Center_Updates_for_AI_Connectors__1_.jpg)

3. You'll be taken to GitHub. Make sure you're logged in with the correct GitHub account. **Don't close Notion during the setup process!**

   ![hc: github connector setup](https://images.ctfassets.net/spoqsaf9291f/4lMlwWzqjm4cWAKzWonk3f/da3fc9fc7db7e15ec04f3405cdb3e6ad/AI_Connectors_Help_Image.png)

4. In the page that opens, connect to GitHub and select the organization you want to sync. Note that if you want to connect a personal GitHub repository, you must first create an organization and then move the repository into the organization.

5. Select `All repositories` (recommended) or `Select repositories`, then select `Install`.

6. Return to Notion.

Once the integration is set up, it will be able to index PRs and issues going back a year from when the setup is complete. You’ll also have access to all code files including markdown files and READMes with no time restrictions.

**Note:** At this time, wikis and [forked repositories](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) aren’t supported.

It can take up to 72 hours for the connection to complete. Afterwards, each user in your Notion workspace must authenticate with GitHub individually to use the integration, and their permissions will be mapped accordingly.

**If you're a Notion workspace member:**

If you aren’t the owner of your Notion workspace or your GitHub organization, you’ll need an owner to connect Notion with GitHub first before you can use the integration. Once the integration has been set up by an owner, you’ll have to log in to connect your private repositories. To do this:

1. In Notion, open [Notion AI](https://www.notion.com/help/notion-ai-faqs) at the bottom of your screen and click on `•••` → `Connect GitHub`.

2. Select `Log In` and connect your GitHub account.

![hc: github connector for members](https://images.ctfassets.net/spoqsaf9291f/19D9MKIIIA3YlIwGfb9eAc/3814a6db166d049fb628aa41689ebc00/Reference_Visuals_Group_124.png)

### What content from GitHub can be connected to Notion AI?

Once the AI Connector has been set up for the workspace it can index code, PRs, Issues, Files, and READMEs.

Each user will only be able to use Notion AI to see and search content that they have access to in GitHub. Notion AI can retrieve the past year's worth of information from PRs.

## Where can I use my GitHub Notion AI Connector?

You can search GitHub via Notion AI Connectors in the following places:

* The Notion AI chat in the bottom right of Notion.

* The Notion AI widget at the top of `Home`.

* `Search` in your sidebar.

You can narrow your search to just GitHub by opening the `All sources` toggle in chat and `Home` and selecting `GitHub`. You can also filter Notion AI `Search` results to show only information from GitHub.

## Best practices and example prompts

The GitHub AI Connector is most helpful for:

* Asking about recent changes and project updates.

* Finding code implementations.

* Looking up issues and their status.

* Debugging issues. For example, you can get context when features are broken or throwing errors by reading through recent PRs.

* Finding security patterns.

You could try prompting Notion AI with the following:

* "What's the latest with {project name}?"

* "Which pull requests did we work on over the past week?"

* "What are the recent changes to our authentication system?"

* "Show me examples of how we're implementing error handling in our codebase."

* "What are the main dependencies used in our frontend components?"

* "Find implementations of the database migration functions."

* "What security patterns are we using for API endpoints?”

**Learn more**

* [Notion AI Connectors](https://www.notion.com/help/notion-ai-connectors)

* [What is Notion AI?](https://www.notion.com/help/notion-ai-faqs)


## FAQs