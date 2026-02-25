---
title: Custom Agents security features
emoji: 🔓
description: We know your workspace data is important. Here's a look at the built-in security features for Custom Agents that help keep your workspace safe 🔐
url: https://www.notion.com/help/custom-agents-security-features
key: help:custom-agents-security-features
coverImage: https://images.ctfassets.net/spoqsaf9291f/QWXBOsXfXilDrUsflt30u/fc404cf0b2615b3aae63d1d93f01fe2b/security_best_practices.png
category: Security & privacy
---

**Note:** Custom Agents are currently in beta and subject to the beta terms of your agreement.

Custom Agents operate with their own independent permissions separate from individual user permissions. This means anyone who can use an agent might access information through it that they couldn't access directly. Custom Agent security features help you control this access to keep your data safe.

For general Notion AI security practices, see [Notion AI security & privacy practices](https://www.notion.com/help/notion-ai-security-practices) and [How Notion 3.0 protects against prompt injection risks](https://www.notion.com/help/how-notion-protects-against-prompt-injection-risks).

## Built-in security features

Custom Agents include multiple layers of protection to help you avoid sharing sensitive information.​

## Admin controls

Workspace admins can manage Custom Agents across the organization through an Agent Directory, creation controls, content search, audit logs, AI analytics, and ownership transfer tools to maintain visibility and control over all agents in the workspace.

Learn more about Admin controls [here.](https://www.notion.com/help/custom-agents-sharing-and-permissions)

### Warnings when sharing private resources

You'll see a clear warning explaining what sensitive resources the Agent can access and asking you to confirm you want to share it. This includes warnings for:

* Private Notion pages

* Email or Calendar data

* Third party integrations

* Access to all pages that are shared with everyone in the workspace

These warnings help you pause and consider whether everyone you're sharing with should have access to the agent's resources.

### Stricter edit permissions for third-party integrations

To prevent unintended data sharing through Slack and other third-party connected apps:

* For each Custom Agent, only the person who connected an integration can add more Slack channels or increase access (for example, from `Read Only` to `Read & Reply`).

* Users with “Can Edit” access can remove third-party connections, but cannot expand what the connection can see.

To edit third-party connection settings an editor did not set up, they must remove and then reconnect the integration.

Learn more about security for third-party connections in [this article.](https://www.notion.com/help/security-best-practices-for-agent-connections)

### Automatic editor access checks

Custom Agents include automatic security checks to prevent agents from continuing to access data if editors don't have the correct permissions:

* Each connected resource must have at least one Agent editor that has access to that resource

* If all editors lose access to a resource, the agent stops running.

This prevents "orphaned" agents from continuing to access sensitive data after everyone who set them up has left the team or lost access.

### Visibility in share menus

Custom Agents appear in the share menu of any page or database they have access to, just like people do.

* You can see which agents have access to a specific page or database.

* Shows clearly which agents can view or edit your content.

* Allows you to audit access at a glance.

To check, open any page or database, click `Share`, and look for Custom Agents in the list. If you have Full Access to the page or database, you'll see their permission level and can remove them if needed.

### Settings transparency for all users

Anyone with `Can view and interact` permission can see the agent's full settings page in view-only mode.

**What users can see:**

* Agent instructions.

* Which pages and databases the agent has access to.

* Connected tools and triggers.

* All configuration details.

Users with `Can view and interact` permissions can view agent settings but cannot edit, share, or modify the agent.

### Admin controls for Custom Agents

Workspace admins can manage Custom Agents across the organization through an Agent Directory, creation controls, content search, audit logs, AI analytics, and ownership transfer tools to maintain visibility and control over all agents in the workspace.

### URL confirmation

Custom Agents ask for confirmation before accessing unexpected external links:

* If an agent generates a URL that wasn't in your original prompt, it pauses and asks for confirmation.

* You'll receive a notification to review and approve the URL before the agent proceeds.
