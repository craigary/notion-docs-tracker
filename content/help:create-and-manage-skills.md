---
title: "Create & manage skills"
emoji: null
description: "Skills are reusable instructions that make AI agents more capable and keep them consistent with your team's workflows. You write a skill once as a Notion page, and then you can use it in Notion Agent, as well as connected agents."
url: "https://www.notion.com/help/create-and-manage-skills"
key: "help:create-and-manage-skills"
coverImage: "https://img.youtube.com/vi/bIe1rxKytAk/maxresdefault.jpg"
category: "Notion AI"
categoryKey: "category:notion-ai"
---

## Why keep skills in Notion

Skills become more useful when a whole team shares them. Notion gives your team one shared skills library that every agent can use.

* **Works for the whole team.** Anyone can write a skill in the Notion editor, with no Markdown required. Teammates can leave comments and suggested edits, and a skill can link to any page in your workspace.

* **Works with every agent.** Connect an agent to Notion once and it loads your skills live. You can also sync skills to GitHub or download them to local agents.

* **Built-in controls.** Skills are pages, so page permissions and version history apply. Admins can install skills for everyone in the workspace, and analytics show how often each skill is used.

**Get started with skills**

* [Create a skill](https://www.notion.com/help/create-and-manage-skills#create-a-skill-from-your-library)

* [Use skills in other agents](https://www.notion.com/help/create-and-manage-skills#use-skills-in-other-agents)

* [Bring in skills you already have](https://www.notion.com/help/create-and-manage-skills#bring-in-skills-you-already-have)

## How skills fit with the rest of Notion AI

Skills are one of a few ways to work with AI in Notion. Here is how each one compares:

| **What it is**                                                                                     | **Use it when**                                                                                      | **How it starts**                                                                           |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Instructions:&#x20;**&#x59;our own guidance that shapes how Notion Agent works for you           | The same guidance should apply to most of what you ask                                               | Always on for Notion Agent                                                                  |
| **Skill:&#x20;**&#x41; reusable method, standard, or format for one kind of work                   | You're directing the work and want AI to follow an approach that already works                       | You manually invoke it with a `/` command, or your agent automatically uses it when it fits |
| **Notion Agent:&#x20;**&#x59;our on-demand AI assistant                                            | You need help with a one-off or multi-step task                                                      | You ask in chat                                                                             |
| **Custom Agent:** An AI teammate you set up with its own instructions, access, tools, and triggers | A workflow comes up again and again, and your team should be able to run it or let it run on its own | A person, a schedule, or a trigger starts it                                                |

## When should I use skills?

Use a skill when your task is:

* **Repeatable:&#x20;**&#x59;ou or your team does this often.

* **Contextual:** It should run on a specific selection or page right now.

* **Consistent:** You want the same structure or quality every time.

A good rule of thumb is that if you’d copy and paste the same prompt twice, it's a good candidate for a skill.

## Example use cases for skills

* Executive-ready rewrites (tone, length, format).

* Turning meeting notes into action items or a recap email.

* Converting drafts into a specific template (FAQ, PRD summary, spec skeleton).

* Standardizing formatting across documents (bullets, headings, style).

## Basic usage

### [Create a skill from your Library](https://www.notion.com/help/create-and-manage-skills#create-a-skill-from-your-library)

1. Go to `Library` in your sidebar and open the `Skills` tab.

2. Select `New skill`.

3. Notion creates a new private skill page and opens it. Write your instructions, then add a **Description** that says what the skill does and when to use it.

Your Library can have several tabs, so the `Skills` tab may not be the first one you see. You can also get there from Notion Agent chat by typing `/` to see your skills. Then, select `See all skills in Library`.

Every skill page has a **Description** field and a **Files** field. Use **Files** for supporting material like examples, templates, or scripts.

### [Create a skill from an existing page](https://www.notion.com/help/create-and-manage-skills#create-a-skill-from-an-existing-page)

From any page, select `•••` at the top, select `Use with AI`, then select `Use as AI skill`.

You can also ask Notion Agent to mark a page as a skill for you.

Skill pages show skill controls at the top, like the `Enabled` switch and `Run`, so you can tell them apart from regular pages.

### [Bring in skills you already have](https://www.notion.com/help/create-and-manage-skills#bring-in-skills-you-already-have)

If you already have skills saved as `SKILL.md` files, you can bring them into Notion:

* **Upload a skill:** In `Library` → `Skills`, select `More ways to add a skill` → `Upload skill`. You can upload a `.md` or `.zip` file.

* **Ask your agent:** When you [connect an agent](https://www.notion.com/help/create-and-manage-skills#use-skills-in-connected-agents-over-mcp), it offers to upload the skills it finds on your computer to Notion. You can also ask it to upload a skill folder later.

* **Turn a database of how-tos into skills:** Learn how to [turn an existing database into a skills database →](https://www.notion.com/help/create-and-manage-skills#turn-an-existing-database-into-a-skills-database)

### [Choose which skills to enable ](https://www.notion.com/help/create-and-manage-skills#choose-which-skills-to-enable)

Turning on a skill makes it available to you in Notion Agent and in your connected agents. Turning it off removes it from both.

1. Go to `Library` → `Skills`.

2. Turn on the switch in the **Enable for me** column next to the skill.

To keep a skill in Notion Agent but out of your connected agents, open the skill's settings menu (the sliders icon next to the skill or at the top of the skill page). Under **Other agents**, hover over `Use in connected agents` and choose `Disabled`.

Your choices are personal. They don't change what other members see.

## How to use a skill on a Notion page or in chat

You can run skills automatically or from the editor by highlighting text, hovering over a block, or typing `/` next to content.

In chat with Notion Agent, type `/` to see a menu of all the skills you've added, or type `/` followed by the skill's name to run one directly.

## How to run a skill automatically

Notion Agent can use your skills without you calling them by name. Describe what you need, and if a skill is a good fit, Notion Agent can use it automatically. Here's how it works:

* Automatic use is on by default, so Notion Agent can start using a skill as soon as it's ready.

  * If you want a skill to only run when you ask for it, open the skill's settings menu. Under **Notion Agent**, set `Use automatically` to `Disabled`.

* A skill needs a description to run automatically. Add one in the **Description&#x20;**&#x66;ield at the top of the skill page, or in the `Description` property if the skill is in a skills database.

* Notion Agent reads the description to decide whether the skill is a good match, so keep it clear and specific.

## How to run a skill in the text editor

Select a body of text, then choose a skill from the text selection menu.

## How to run a skill in the slash or block menus

Only skills set to show in a page appear in these menus. To change this, open the skill's settings menu in the `Skills` tab of your Library and select `Show skill`. Your custom skills appear first, followed by the built-in defaults: **Improve Writing**, **Proofread**, **Explain**, and **Reformat**.

In the slash menu:

* Type `/skill` next to content to browse your available skills. The slash menu only shows skills when there's content on the line, because a skill needs something to run on.

* In chat with Notion Agent, you can also type `/` followed by the skill's name to go straight to a specific skill. This shortcut doesn't work on a page unless there's content next to it.

In the block menu:

* Select the `⁚⁚` icon that appears when you hover over a block to open the block menu.

* Select `Skills`.

* Choose a skill to run it on that block.

Skills are available on text, headings (H1, H2, H3), quote, callout, bulleted list, numbered list, to-do, toggle, image, and synced blocks. Skills won't appear on empty blocks or block types not in this list. If you apply a skill to a block that has content nested inside it, the skill includes that nested content too.

## How to run a skill on your meeting notes

Notion can suggest skills on your AI meeting notes, so you can act on a meeting in one click.

1. Open a meeting note that's being transcribed, or one with a finished summary.

2. You'll see suggested skills on the note. You can also open your Notion Agent from the face icon in the bottom corner of the note to see them.

3. Select a suggested skill to run it, like recapping decisions during the meeting or creating follow-up tasks after it ends. You can also create a new skill from here.

You'll see different suggestions during the meeting than after it ends. To choose which skills appear on meeting notes, go to `Library` → `Skills`, open the skill's settings menu, select `Show skill`, and turn on `During meetings`, `After meetings,` or both. Each list holds up to 12 skills.

Learn more about [AI Meeting Notes →](https://www.notion.com/help/ai-meeting-notes)

## Use skills in other agents

There are three ways to use your Notion skills outside Notion. Each one keeps Notion as the place where skills are written and maintained.

|                         | **Connected agents**                                                  | **GitHub sync**                                          | **Download to local agents**                       |
| ----------------------- | --------------------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------- |
| **Best for**            | Anyone who uses an agent connected to Notion                          | Teams that want skills built into their agent apps       | Trying a skill in a local agent on your computer   |
| **Setup**               | Paste one prompt into each agent                                      | An admin sets up a repository, may need IT               | A few clicks in the Notion desktop app             |
| **Updates**             | Live, every session                                                   | Every hour                                               | When you download again                            |
| **Who controls access** | Members and admins in Notion                                          | Admins in the agent app                                  | You                                                |
| **Works with**          | Claude, ChatGPT, Cursor, Codex, and any agent connected to Notion MCP | Claude, Codex, and other agents with plugin marketplaces | Claude Code, Codex, Cursor, Gemini, and Grok Build |

### [Use skills in connected agents over MCP](https://www.notion.com/help/create-and-manage-skills#use-skills-in-connected-agents-over-mcp)

Agents connected to Notion over MCP can load your skills from Notion at the start of each session and pick the right one for the task. When you edit a skill in Notion, every connected agent gets the update. You need a working [Notion MCP connection](https://www.notion.com/help/notion-mcp) first.

1. Open `Library` → `Skills`.

2. Select `Set up` in the banner that says **Use your skills with connected agents?**

3. Select `Copy` to copy the setup prompt.

4. Paste the prompt into a new chat with your agent, then follow its lead. It adds a line to its instructions so it loads your skills every session, and offers to upload any skills you already have on your computer.

Set up each agent app separately. If you use Claude and Cursor, run the setup prompt in each one.

### [Sync skills to GitHub](https://www.notion.com/help/create-and-manage-skills#sync-skills-to-github)

GitHub sync copies your Notion skills to a GitHub repository every hour. Your admin can then add that repository as a plugin marketplace in [Claude](https://support.claude.com/en/articles/13837433-manage-plugins-for-your-organization) or [ChatGPTcodex](https://help.openai.com/en/articles/20001504-importing-and-syncing-plugin-marketplaces-from-github), so skills show up for everyone in those apps. Get started with the open-source [Notion skills GitHub sync](https://github.com/makenotion/notion-skills-github-sync) project.

### [Download a skill to a local agent](https://www.notion.com/help/create-and-manage-skills#download-a-skill-to-a-local-agent)

Send a copy of a skill to a local agent like Claude Code, Codex, Cursor, Gemini, or Grok Build. This works in the Notion desktop app, if your workspace allows local skill downloads.

1. Open the skill page in the Notion desktop app.

2. Open the skill's settings menu (the sliders icon) at the top of the page.

3. Under **Other agents**, select `Download for local agents`, then choose where to send the skill.

Notion saves the skill as a `SKILL.md` file and asks before installing any attached files. When the skill changes in Notion, the downloaded copy is marked as out of date so you know to download it again.

### [Use the Skills API](https://www.notion.com/help/create-and-manage-skills#use-the-skills-api)

Developers can also list, download, and upload skills with the Agent Skills API. See the [developer docs](https://developers.notion.com/guides/agent-skills/overview) →

## Keep your team's skills in a skills database

A skills database gives your team one place to create and manage skills together. Every page you create in it becomes a skill automatically, and each skill gets a description property. Notion Agent reads that description to decide when to use the skill on its own.

A skills database works like any other Notion database, with a couple of properties already set up for you:

* `Description` says what the skill does and when to use it. Notion Agent reads it to decide when the skill fits.

* `Files` holds supporting material, like examples, reference docs, images, data files, or scripts.

You can add any other properties your team cares about, like `Owner` to show who keeps a skill current, or `Status` to show which skills are ready to use.

**Start with one shared skills database**

One database works well when the same group uses the skills and the same people keep them up to date, because everyone knows where to look first. Add another team database, or a private one, when a group needs different access, different owners, or a place to work on a skill before sharing it.

**Database vs Library**

The Skills Library is not a database. It’s a view that rolls up all the skills you have access to across all databases in your workspace.

## Create a skills database

* Create a new page, select `Database`, then choose `Skills` (or `Database - Inline` → `Skills`).

* Or select `+` next to a teamspace name and choose the same option.

Creating it in a teamspace means your team can reach it right away, so you don't have to move it or change access later.

## Turn an existing database into a skills database

1. Open the database.

2. In the view toolbar, open settings (slider icon).

3. In the settings panel, select `More settings` → `Turn into`.

4. Select `Turn into Skills database`.

5. You'll see a setup dialog. Choose which existing properties to map to `Description`, `Files`, and `Tags`, or keep the defaults to create new ones. To also turn on the existing pages as skills for yourself right away, check the **Enable skills for me** box (it shows the number of pages).

From then on, every page created in the database becomes a skill. This works best when the pages in the database already explain how a task should be done, like a set of playbooks or how-tos.

## Move a page into a skills database

If you already have a page that explains how to do a repeatable task, move it into a skills database. The page becomes a skill and picks up the skill properties, including `Description`.

1. Open the page and select `•••`, then select `Move to`.

2. Choose your skills database.

3. Add a clear `Description` so Notion Agent knows when to use it.

## Edit & manage skills

**Edit a skill**

You can edit a skill from the text selection menu or the block menu.

To edit a skill's content from the text selection menu, hover over its name and select the pencil icon. You can also open a skill's page from your Library or its skills database to edit it.

**Manage skills from your Library**

1. Go to `Library` in your sidebar, and open the `Skills` tab.

2. From there, you can view your existing skills, add new skills, and open any skill page to edit it.

3. To choose where a skill appears, open its settings menu and select `Show skill`. Choose `In a page` for the text editor, slash menu, and block menu, `In chat` for Notion Agent chat, and `During meetings` or `After meetings` for meeting notes.

**Manage skills from your text editor**

Highlight any text, then select `Manage Skills` next to your skills in the menu.

## Discover skills shared with you

* The Library's `Discover` tab shows skill pages that others have shared with you, so you can browse what your team has built.

* Found one you want? Turn on the switch in the **Enable for me** column to add it to your own skills.

## Sharing & permissions for skills

Because skills are pages, sharing works the same way it does for any other page in Notion.

* If you share a skill with someone, they can run that skill once they have access to the skill page.

* If they can edit the skill page, their edits will change the skill.

* View skills you've created, skills shared with you, and skills in your workspace by going to `Library` in your sidebar and opening the `Skills` tab.

* Shared skill pages behave like regular pages, so they also show up under `Shared` in your Library.

* Share one skill page when only some people need that one workflow. Share the whole skills database when your team should get every skill in it.

* Anyone with edit access can change a shared skill for everyone who uses it, so pick editors with that in mind. Page history shows what changed if you need to go back.

* Connected agents only see the skills you can access in Notion.

Having access and turning a skill on are two different things. Access decides who can open or edit a skill. Turning it on decides whether it shows up in your own skills menu. Skills shared with you appear in the `Discover` tab of your Library, where you can turn them on in the **Enable for me** column.

## See how your skills are used

Skill analytics show how often a skill runs, in Notion and in other agents.

* **In your Library:&#x20;**&#x54;he `Uses` column in `Library` → `Skills` shows how many times people in your workspace used each skill over the last 28 days, including uses in connected agents over MCP.

* **For one skill:** Open the skill's settings menu and select `View analytics` to see how its usage has changed over time.

New uses can take a few hours to show up.

## Admin settings

Workspace owners can choose skills to install for everyone, so the whole team starts with the same set. Go to `Settings` → `Notion AI` → `General` and find **Default workspace skills** in the **Skills** section.

1. Choose who the skills are for: everyone in the workspace, or a specific group.

2. Select `Add skill` and pick the skills to install.

3. For each skill, choose where it shows up, like in chat or in a page.

Default skills are installed for members automatically, including in their connected agents. Members can still turn off a default skill for themselves.

The **Skills** section also has settings to turn off skills for the whole workspace, to turn off skills in connected agents, and to turn off local skill downloads.

## Remove a skill

There are a few ways to remove a skill, depending on what you want:

* **Delete the skill completely:** A skill is a page, so you can move it to trash like any other page. This works for skill pages inside a skills database too. Keep in mind that deleting the page removes the skill for everyone who uses it.

* **Remove a skill you added:&#x20;**&#x49;f you added a skill from the `Discover` tab and don't want it anymore, turn off the switch in the **Enable for me** column in the

  `Skills` tab of your Library. This removes the skill for you in Notion Agent and your connected agents. It stays available for everyone else.

* **Turn a skill page back into a regular page:** Select `•••` at the top of the page, select `Use with AI`, then uncheck `Use as AI skill`. You can also select `Unset page as skill` in the skill's settings menu. The page and its content stay right where they are. It stops being a skill.

## Best practices for creating skills

* Use your Notion Agent to help brainstorm or write skills.

* Start with a common workflow you do weekly, like rewriting, recapping, summarizing, or formatting.

* Write your skill like a strong prompt, including the goal, inputs, constraints, and desired output format.

* Make output requirements explicit, like "return 5 bullets" or "include risks and next steps."

* Keep the skill page short and link to longer references when needed.

* Iterate over time by updating the skill page as you learn what works best.

* Give each skill a clear description of what it does and when to use it. Notion Agent and your connected agents use the description to pick the right skill on their own.

* If your team also works in local agents, keep the skill page in Notion up to date and download it again after you make changes.

* Give each shared skill an owner, so one person keeps it current as your team's process changes.

## Limitations

Agents read the name and description of every skill you've turned on before they choose one. These limits keep that list focused, so agents pick the right skill quickly:

| **Type**                                   | **Limit** |
| ------------------------------------------ | --------- |
| Skills you can turn on                     | 200       |
| Skills a connected agent loads per session | 50        |
| Default workspace skills                   | 50        |

If a connected agent is missing some of your skills, turn off the ones you don't need in connected agents.


## FAQs

### Can Custom Agents use skills?

Yes! Since skills are pages, any Custom Agent with access to a skill page can use it. To set this up:

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

* Turn off a skill you added by going to `Library` → `Skills` and turning off its switch in the **Enable for me** column. This removes the skill for you, but not for anyone else.

* Turn a skill page back into a regular page by selecting `•••` at the top of the page → `Use with AI`, then uncheck `Use as AI skill`. The page and its content stay right where they are. It stops being a skill.


### Why won’t my skill run automatically?

A skill needs a description to run automatically. Add a clear one in the **Description** field at the top of the skill page, or in the `Description` property if the skill is in a skills database. Then check that `Use automatically` is set to `Enabled` in the skill's settings menu.

If you’d rather run the skill yourself, set `Use automatically` to `Disabled`.


### Should my team use one skills database or several?

Start with one shared database when the same group uses the skills and the same people keep them current. Add another team database, or a private one, when a group needs different access, different owners, or a place to work on a skill before sharing it.
