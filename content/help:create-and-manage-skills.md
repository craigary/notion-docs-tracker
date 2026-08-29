---
title: "Create & manage skills"
emoji: null
description: "Learn what skills are and how to create, manage, and use them."
url: "https://www.notion.com/help/create-and-manage-skills"
key: "help:create-and-manage-skills"
coverImage: "https://img.youtube.com/vi/tcgNauq4joo/maxresdefault.jpg"
category: "Notion AI"
categoryKey: "category:notion-ai"
---

Skills are reusable instructions that teach [Notion AI](https://www.notion.com/help/notion-ai-faqs) how to complete a specific type of work. They’re written and maintained as Notion pages. You can mark any page as a skill and run it with [Notion Agent](https://www.notion.com/help/notion-agent) whenever you need it.

* Use skills for repeatable tasks like "Proofread," "Explain," or "Reformat."

* Skills are [pages](https://www.notion.com/help/category/write-edit-and-customize), so you can organize and share them like any other page in Notion.

* Notion Agent can also use your skills on its own when they're relevant to what you ask, so you don't always have to run them yourself.

* Find and manage all your skills in the `Skills` tab of your [Library](https://www.notion.com/help/manage-your-library).

* You can also download a skill to a local agent, so the same steps work outside Notion.

When you select text on a page, the text selection menu includes built-in skills like **Improve Writing**, **Proofread**, **Explain**, and **Reformat**. Any skill you or your team has created can be added to the menu, replacing or supplementing the defaults.

## How skills fit with the rest of Notion AI

Skills are one of a few ways to work with AI in Notion. Here is how each one compares:

|                                                                                                    |                                                                                                      |                                                           |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| What it is                                                                                         | Use it when                                                                                          | How it starts                                             |
| **Instructions:&#x20;**&#x59;our own guidance that shapes how Notion Agent works for you           | The same guidance should apply to most of what you ask                                               | Always on for Notion Agent                                |
| **Skill:&#x20;**&#x41; reusable method, standard, or format for one kind of work                   | You are directing the work and want AI to follow an approach that already works                      | You pick it in chat, or Notion Agent uses it when it fits |
| **Notion Agent:&#x20;**&#x59;our on-demand AI assistant                                            | You need help with a one-off or multi-step task                                                      | You ask in chat                                           |
| **Custom Agent:** An AI teammate you set up with its own instructions, access, tools, and triggers | A workflow comes up again and again, and your team should be able to run it or let it run on its own | A person, a schedule, or a trigger starts it              |

## When should I use skills?

Use a skill when your task is:

* **Repeatable:&#x20;**&#x59;ou or your team does this often.

* **Contextual:** It should run on a specific selection or page right now.

* **Consistent:** You want the same structure or quality every time.

A simple rule of thumb is that if you’d copy and paste the same prompt twice, it's a good candidate for a skill.

## Example use cases for skills

* Executive-ready rewrites (tone, length, format).

* Turning meeting notes into action items or a recap email.

* Converting drafts into a specific template (FAQ, PRD summary, spec skeleton).

* Standardizing formatting across documents (bullets, headings, style).

## Create a skill from your Library

1. Go to `Library` in your sidebar and open the `Skills` tab.

2. Select `+ Add a skill`.

3. Create a new skill page.

Your Library can have several tabs, so the `Skills` tab may not be the first one you see. You can also get there from:

* `Settings` → `Notion AI` → `Skills`.

* In Notion Agent chat, type `/` to see your skills. Then, select `See all skills in Library`.

## Create a skill from an existing page

From any page, select `•••` at the top, then select `Use as a skill`.

You can also ask Notion Agent to mark a page as a skill for you. Skill pages show a banner at the top, so you can tell them apart from regular pages.

## How to use a skill on a Notion page or in chat

You can run skills automatically or from the editor by highlighting text, hovering over a block, or typing `/` next to content.

In chat with Notion Agent, type `/` to see a menu of all the skills you've added, or type `/` followed by the skill's name to run one directly.

## How to run a skill automatically

Notion Agent can use your skills without you calling them by name. Describe what you need, and if a skill is a good fit, Notion Agent can use it automatically. Here's how it works:

* Automatic use is on by default, so Notion Agent can start using a skill as soon as it's ready.

  * If you want a skill to only run when you ask for it, turn off the toggle next to **Use automatically**, either in the `Skills` tab of your Library or on the skill page.

* A skill needs a description to run automatically, and only skills that live in a skills database have one. If your skill is a standalone page, add it to a skills database first. Learn more about [skills databases below](https://www.notion.com/help/create-and-manage-skills#create-a-skills-database).

* Notion Agent reads the description to decide whether the skill is a good match, so keep it clear and specific.

## How to run a skill in the text editor

Select a body of text, then choose a skill from the text selection menu.

## How to run a skill in the slash or block menus

Only skills with the **Add to text editor menu** option turned on appear in these menus. You can manage this from the `Skills` tab in your Library. Your custom skills appear first, followed by the built-in defaults: **Improve Writing**, **Proofread**, **Explain**, and **Reformat**.

In the slash menu:

* Type `/skill` next to content to browse your available skills. The slash menu only shows skills when there's content on the line, because a skill needs something to run on.

* In chat with Notion Agent, you can also type `/` followed by the skill's name to go straight to a specific skill. This shortcut doesn't work on a page unless there's content next to it.

In the block menu:

* Select the `⁚⁚` icon that appears when you hover over a block to open the block menu.

* Select `Skills`.

* Choose a skill to run it on that block.

Skills are available on text, headings (H1, H2, H3), quote, callout, bulleted list, numbered list, to-do, toggle, image, and synced blocks. Skills won't appear on empty blocks or block types not in this list. If you apply a skill to a block that has content nested inside it, the skill includes that nested content too.

## Keep your team's skills in a skills database

A skills database gives your team one place to create and manage skills together. Every page you create in it becomes a skill automatically, and each skill gets a description property. Notion Agent reads that description to decide when to use the skill on its own.

The database is where you manage skills. Your Library is where you find them.

In a skills database, you keep skills organized in one place, write each description, attach the files a skill needs, choose who can see or edit each skill, and keep quality up as the work changes. Page history, sharing settings, and database properties make it harder to change a skill by accident, and they make it easier to see which skills your team relies on most.

Your Library pulls in the skills from the databases and pages shared with you, so people can find a skill and start using it.

A skills database works like any other Notion database, with a couple of properties already set up for you:

* `Description` says what the skill does and when to use it. Notion Agent reads it to decide when the skill fits.

* `Files` holds supporting material, like examples, reference docs, images, data files, or scripts.

You can add any other properties your team cares about, like `Owner` to show who keeps a skill current, or `Status` to show which skills are ready to use.

**Start with one shared skills database**

One database works well when the same group uses the skills and the same people keep them up to date, because everyone knows where to look first. Add another team database, or a private one, when a group needs different access, different owners, or a place to work on a skill before sharing it.

## Create a skills database

* Create a new page, select `Database`, then choose `Skills` (or `Database - Inline` → `Skills`).

* Or select `+` next to a teamspace name and choose the same option.

Creating it in a teamspace means your team can reach it right away, so you don't have to move it or change access later.

## Turn an existing database into a skills database

1. Open the database and select `•••` → `More settings`.

2. Select `Turn into Skills database`.

This adds `Description`, `Files`, and `Tags` properties to the database. From then on, every page created in it becomes a skill. This works best when the pages in the database already explain how a task should be done, like a set of playbooks or how-tos.

## Move a page into a skills database

If you already have a page that explains how to do a repeatable task, move it into a skills database. The page becomes a skill and picks up the skill properties, including `Description`.

1. Open the page and select `•••` → `Move to`.

2. Choose your skills database.

3. Add a clear `Description` so Notion Agent knows when to use it.

## Edit & manage skills

**Edit a skill**

You can edit a skill from the text selection menu or the block menu.

To edit a skill's content from the text selection menu, hover over its name and select the pencil icon. You can also open a skill's page from its skills database to edit it.

**Manage skills from your Library**

1. Go to `Library` in your sidebar, and open the `Skills` tab.

2. From there, you can view your existing skills, add new skills, and open any skill page to edit it.

3. To choose which skills appear in the text editor, the slash menu, and the block menu, select

   `Add to text editor menu` or `Remove from text editor menu` next to each skill page.

**Manage skills from your text editor**

Highlight any text, then select `Manage Skills` next to your skills in the menu.

## Discover skills shared with you

* The Library's `Discover` tab shows skill pages that others have shared with you, so you can browse what your team has built.

* Found one you want? Select `Enable for me` to add it to your own skills. You'll see a confirmation as soon as it's added.

## Sharing & permissions for skills

Because skills are pages, sharing works the same way it does for any other page in Notion.

* If you share a skill with someone, they can run that skill once they have access to the skill page.

* If they can edit the skill page, their edits will change the skill.

* View skills you've created, skills shared with you, and skills in your workspace by going to `Library` in your sidebar and opening the `Skills` tab.

* Shared skill pages behave like regular pages, so they also show up under `Shared` in your Library.

* Share one skill page when only some people need that one workflow. Share the whole skills database when your team should get every skill in it.

* Anyone with edit access can change a shared skill for everyone who uses it, so pick editors with that in mind. Page history shows what changed if you need to go back.

Having access and turning a skill on are two different things. Access decides who can open or edit a skill. Turning it on decides whether it shows up in your own skills menu. Skills shared with you appear in the `Discover` tab of your Library, where you can select `Enable for me` to start using them.

## Remove a skill

There are a few ways to remove a skill, depending on what you want:

* **Delete the skill completely:** A skill is just a page, so you can move it to trash like any other page. This works for skill pages inside a skills database too. Keep in mind that deleting the page removes the skill for everyone who uses it.

* **Remove a skill you added:** If you added a skill from the `Discover` tab and don't want it anymore, you can toggle it off in the `Skills` tab of your Library. This only removes the skill for your Agent. It stays available for everyone else.

* **Turn a skill page back into a regular page:** Select `•••` at the top of the page → `Use with AI`, then uncheck `Use as AI skill`. The page and its content stay right where they are. It just stops being a skill.

## Download a skill to a local agent

Keep the skill page in Notion and send a copy to a local agent like Claude Code, Codex, Cursor, Gemini, or Grok. The instructions, references, and formats come with it.

To download a skill to your local agent:

1. Open the skill page in Notion.

2. Select `•••` at the top of the page.

3. Select `Download to local agents`.

4. Choose where to send the skill.

Notion saves the skill as a `SKILL.md` file, along with any files attached to the skill that are approved to share. Your local agent reads that file the same way it reads its own instructions, so you get the same results you get in Notion. When a skill changes in Notion, the downloaded skill is badged so you know to download the latest version to your local environment.

## Best practices for creating skills

* Use your Notion Agent to help brainstorm or write skills.

* Start with a common workflow you do weekly, like rewriting, recapping, summarizing, or formatting.

* Write your skill like a strong prompt, including the goal, inputs, constraints, and desired output format.

* Make output requirements explicit, like "return 5 bullets" or "include risks and next steps."

* Keep the skill page short and link to longer references when needed.

* Iterate over time by updating the skill page as you learn what works best.

* Give each skill a clear description of what it does and when to use it. This helps Notion Agent pick the right skill on its own.

* If your team also works in local agents, keep the skill page in Notion up to date and download it again after you make changes.

* Give each shared skill an owner, so one person keeps it current as your team's process changes.


## FAQs

### Can Custom Agents use skills?

Yes! Since skills are just pages, any Custom Agent with access to a skill page can use it. To set this up:

* Open the Custom Agent.

* Go to **`Tools and access`**, and add the skill page.

After that, the agent will follow the content of the skill page when it runs.


### How are skills different from instructions and Custom Agents?

* **Skills** are on-demand actions you trigger when you need them, for a specific task or selection.

* **Agent i****nstructions** are persistent preferences that apply to every Notion Agent response (your "default mode").

* **Custom Agents** are autonomous: they can run in the background, be triggered by events (like a schedule or a new page), and be shared with your team. Each Custom Agent has its own instructions and connections.


### How can I remove a skill?

To remove a skill, you can:

* Delete the skill page by moving it to Trash. This removes the skill for everyone.

* Turn off a skill you added by going to `Library` → `Skills` and toggling it off. This removes the skill for you, but not for anyone else.

* Turn a skill page back into a regular page by selecting `•••` at the top of the page → `Use with AI`, then uncheck `Use as AI skill`. The page and its content stay right where they are. It just stops being a skill.


### Why won’t my skill run automatically?

Automatic use only works for skills that live in a skills database, because that’s where the skill description is stored. Move your skill page into a skills database, then add a clear description. Automatic use turns on by default once the skill is in a skills database and has a description.

If you’d rather run the skill yourself, turn off automatic use in the `Skills` tab of your Library or on the skill page.


### Should my team use one skills database or several?

Start with one shared database when the same group uses the skills and the same people keep them current. Add another team database, or a private one, when a group needs different access, different owners, or a place to work on a skill before sharing it.
