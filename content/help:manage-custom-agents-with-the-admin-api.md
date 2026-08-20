---
title: "Manage Custom Agents with the Admin API"
emoji: null
description: "Learn how Enterprise admins can use the Admin API to manage Custom Agents, track credit usage, and apply workspace-wide controls."
url: "https://www.notion.com/help/manage-custom-agents-with-the-admin-api"
key: "help:manage-custom-agents-with-the-admin-api"
coverImage: null
category: "Custom Agents"
categoryKey: "category:custom-agents"
---

If you're an admin on the Enterprise Plan, you can manage the [Custom Agents](https://www.notion.com/help/category/custom-agents) in your workspace with the Admin API. Instead of clicking through settings one agent at a time, your team can pull agent and usage info into your own tools and apply the same rules across many agents at once. The Admin API is available only to Enterprise org admins using an org-owned admin token.

## What you can do with the Admin API

* **See every&#x20;**[Custom Agent](https://www.notion.com/help/category/custom-agents)**&#x20;in your workspace.** Get a list of all agents, including who created each one, whether it's active, which model it uses, when it last ran, and what it has access to.

* **Track who has access to a Custom Agent.** Update an agent’s [sharing permissions](https://developers.notion.com/reference/admin/update-agent-permissions).

* **Track credit usage.** See how many credits each agent has used, and [track credit usage](https://developers.notion.com/reference/admin/get-agents-credit-usage) in bulk.

* **Set credit limits.&#x20;**&#x53;et or change the credit limit for a single agent, or set a workspace default for all Custom Agents.

* **Choose who can create agents.** Set your workspace's agent creation policy, and pause all agents across the workspace if you need to.

* **Turn an agent off or on.&#x20;**&#x53;top a specific agent from running without deleting its setup, and turn it back on later.

* **Delete an agent.&#x20;**&#x52;emove an agent from use. Its setup is kept so it can be recovered if needed.

## Who can use it

* Your workspace must be on the Enterprise Plan.

* The Admin API uses organization-level admin access that your organization sets up, not personal integration tokens. For setup steps, see the [developer documentation →](https://developers.notion.com/reference/admin/get-workflows-metadata-for-space)

## Admin API & Settings work together

Everything the Admin API does has a matching control in Notion:

* The Agent Directory (`Settings` → `Notion AI` → `Agents`) shows and manages the agents in your workspace.

* The Notion credits dashboard shows agent credit usage.

* Creation controls set who can create agents.

Use Settings for one-off changes. Use the Admin API when you want to automate these tasks, manage many agents at once, or bring usage data into your own reporting tools.

## Common ways teams use it

* Pull credit usage into internal reports, so each team can see what its Custom Agents cost.

* Apply the same limits or rules to many agents at once.

* Transfer ownership for agents that should continue. Turn off or remove agents that are no longer needed.


## FAQs

### Does the Admin API show up in the audit log?

Changes made through the Admin API are attributed to your organization's admin access, so you can keep track of what changed and when. [Learn more about audit logs →](https://www.notion.com/help/audit-log)


### Where do I find the full API reference?

The complete reference, including setup steps, lives in the [developer documentation →](https://developers.notion.com/reference/admin/get-workflows-metadata-for-space)
