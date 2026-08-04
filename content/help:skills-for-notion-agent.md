---
title: "Skills for Notion Agent"
emoji: null
description: "Learn what Skills are and how to create, manage, and use them in Notion Agent."
url: "https://www.notion.com/help/skills-for-notion-agent"
key: "help:skills-for-notion-agent"
coverImage: "https://img.youtube.com/vi/tcgNauq4joo/maxresdefault.jpg"
category: "Notion AI"
categoryKey: "category:notion-ai"
---

A Skill is any page you’ve marked as a Skill. You can run Skills with Notion Agent whenever you need them.

* Use Skills for repeatable tasks like "Proofread," "Explain," or "Reformat."

* Skills are pages, so you can organize and share them like any other page in Notion.

When you select text on a page, the text selection menu includes built-in Skills like `Improve Writing`, `Proofread`, `Explain`, and `Reformat`. Any Skill you or your team has created can be added to the menu, replacing or supplementing the defaults.

To keep Notion AI fast and reliable, Business and Enterprise plans include a [usage allowance](https://www.notion.com/help/manage-your-usage-allowance-for-notion-ai) for certain Notion AI features, including Skills.

## When should I use Skills?

Use a Skill when your task is:

* **Repeatable:** You or your team does this often.

* **Contextual:** It should run on a specific selection or page right now.

* **Consistent:** You want the same structure or quality every time.

A simple rule of thumb is that if you’d copy and paste the same prompt twice, it's a good candidate for a Skill.

### Example use cases for Skills

* Executive-ready rewrites (tone, length, format).

* Turning meeting notes into action items or a recap email.

* Converting drafts into a specific template (FAQ, PRD summary, spec skeleton).

* Standardizing formatting across documents (bullets, headings, style).

## Create a Skill

**In Settings**

1. Go to `Settings` → `Notion AI` → `Skills`.

2. Select `+ Add a Skill`.

3. Create a new Skill page or choose an existing page.

**In an existing page**

1. From any page, go to ••• → `Use with AI` → `Use as AI Skill`.

## How to edit & manage Skills

To edit a Skill's instructions, hover over its name and click the pencil ico&#x6E;**.**

### In settings

1. To manage Skills, go to `Settings` → `Notion AI` → `Skills`.

2. From there, you can view your existing Skills, add new Skills, and edit Skill pages by selecting `Open page`.

3. To choose which Skills appear in the text editor, the slash menu, and the block menu, select `Add to text editor menu` or `Remove from text editor menu` next to each Skill page.

### In the text editor

* Highlight any text.

* Next to Skills, choose `Manage Skills`.

## Best practices for creating Skills

* Start with a common workflow you do weekly, like rewriting, recapping, summarizing, or formatting.

* Write your Skill like a strong prompt, including the goal, inputs, constraints, and desired output format.

* Make output requirements explicit, like "return 5 bullets" or "include risks and next steps."

* Keep the Skill page short and link to longer references when needed.

* Iterate over time by updating the Skill page as you learn what works best.

## How to use a Skill

You can run Skills from a few places, depending on what you are doing.

### In Notion Agent

* In chat, ask Notion Agent to run a Skill by typing `@` then the name of the Skill page.

### In the text editor

* Select a body of text, then choose a Skill from the text selection menu.

### In the slash menu

* Type `/skill` next to content to browse your available Skills.

* You can also type `/[skill name]` to go straight to a specific Skill.

### In the block menu

* Click the `⋮⋮` icon that appears when you hover over a block to open the block menu.

* Select `Skills`.

* Choose a Skill to run it on that block.

**Which Skills show up in the slash and block menus?**

* Only Skills with the **Add to text editor menu** option turned on appear in these menus.

* You can manage this in `Settings` → `Notion AI` → `Skills`. Your custom Skills appear first, followed by the built-in defaults: Improve Writing, Proofread, Explain, and Reformat.

**Which blocks work with Skills?**

* Skills are available on text, headings (H1, H2, H3), quote, callout, bulleted list, numbered list, to-do, toggle, image, and synced blocks.

* Skills won't appear on empty blocks or block types not in this list. If you apply a Skill to a block that has content nested inside it, the Skill includes that nested content too.

## Sharing & permissions

Because Skills are pages, sharing works the same way it does for any other page in Notion.

* If you share a Skill with someone, they can run that Skill once they have access to the Skill page.

* If they can edit the Skill page, their edits will change the Skill.

* View Skills you’ve created, Skills shared with you, and Skills in your workspace by going to `Settings` → `Notion AI` → `Skills`.


## FAQs

### Can Custom Agents use Skills?

Yes! Since Skills are just pages, any Custom Agent with access to a Skill page can use it.


### How are Skills different from Instructions and Custom Agents?

* **Skills** are on-demand actions you trigger when you need them, for a specific task or selection.

* **Instructions** are persistent preferences that apply to every Notion Agent response (your "default mode").

* **Custom Agents** are autonomous: they can run in the background, be triggered by events (like a schedule or a new page), and be shared with your team. Each Custom Agent has its own Instructions and connections.


### How can I remove a Skill?

Go to `Settings` → `Notion AI` → `Skills`. Click `Unset page as Skill` next to the Skill page you want to remove.
