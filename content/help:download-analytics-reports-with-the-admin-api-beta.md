---
title: "Download analytics reports with the Admin API (beta)"
emoji: null
description: " Learn how to pull user, content, and AI usage data as files you can load into your own tools."
url: "https://www.notion.com/help/download-analytics-reports-with-the-admin-api-beta"
key: "help:download-analytics-reports-with-the-admin-api-beta"
coverImage: null
category: "Administer your workspace"
categoryKey: "category:enterprise-admin"
---

**Analytics reports with the Admin API is in beta**

This is a new feature that's still rolling out, so it may not be turned on for your organization yet. If the analytics options don't show up when you set up a token, your organization can't use it yet.

If you're on an Enterprise plan, an organization owner can use the Admin API to create analytics reports and download them as CSV or JSONL files. There are three reports: user activity, content pages, AI usage, and skills usage. You start a report for one workspace and time period, wait for it to finish, then download the file.

This works with the same organization admin API tokens you already use for other admin API work. You don't need a new kind of token.

## Who can use this

* Your organization needs to be on the Enterprise Plan.

* You must be an organization owner to set up the token.

* It's built for admin, IT, security, and data teams. Members and guests won't notice any change.

## Turn on access

To create reports, set up an organization-level admin API token with access to the reports you want to create:

1. Open the workspace switcher and select `Manage organization`.

2. Go to `General`, then select `Manage organization-level admin API tokens`.

3. Select `Create connection`, name the connection, and open the Analytics card `Create and download analytics reports`.

4. Turn on only the scopes this token needs:

   * **Read user analytics** for user activity reports

   * **Read content analytics** for content pages reports

   * **Read AI analytics reports** for AI usage reports

   * **Read skills analytics&#x20;**(`skills-analytics:read`) for skills usage reports

5. Select `Create token`. Copy the token and save it in your team's secrets manager.

**Read AI analytics reports** turns on the AI usage report

It’s different from **Read AI usage**, which covers premium AI credits. If the report stops working, check that your token has **Read AI analytics reports** turned on.

## The reports

Each report is a downloadable file. The rows show:

* **User activity:** one row for each current member, with their name, email, role, teamspaces, page views, page edits, active days, and most recent recorded activity.

* **Content pages:** one row for each page with activity during the selected time period, including views, an approximate number of unique viewers, edits, title, teamspace, creator, and last editor. You can narrow the report to specific pages or teamspaces.

* **AI usage:** one row for each member and AI feature they used, such as Notion Agent, connectors, meeting notes, and Custom Agents. Each row includes the total number of AI actions for the period. These totals match the numbers in `Settings` → `Analytics` → `AI`.

* **Skills usage**: one row per skill per day, including days with no usage. Each row includes the skill name, creator, date, and usage count. Use the `Read skills analytics` scope (`skills-analytics:read`). Choose a start and end date in UTC. Time zones aren't supported.

## How a report works

1. **Start a report.** Choose a report type, one workspace, and a time period.

   * For user activity and content pages, choose a start date and end date. You can also set a time zone. If you don't, UTC is used.

   * For AI usage, choose one of these time windows: the last 7, 28, 60, 90, 180, or 365 days.

2. **Pick a file type**. Choose CSV (the default) or JSONL.

3. **Check the status.** The report moves through queued, running, completed, or failed.

4. **Download the file.** When the report is complete, the API provides a download link that's available for one week. The file is stored for 30 days.

## Who can see reports

Reports belong to your organization, not to an individual token. Any organization token with the required access can view and download reports created by another token. You can also list past reports and download them again.

## Keep in mind

* **One workspace per report.&#x20;**&#x45;ach report covers one workspace. To combine data from multiple workspaces, run a separate report for each and combine the files in your own tools.

* **Report limits.** Your organization can have up to 20 reports waiting to finish and 5 running at once. These limits are shared across all tokens, workspaces, and report types.

* **Content pages.** Reports include only pages with activity during the selected time period. They don't include last-viewed time, owner, or verification data.

* **Current members only.** User activity and AI usage reports include current members, not people who have left your organization.

* **AI usage details.** Choose from set time windows, not custom dates. Reports show totals for the full period, not day-by-day activity, and don't include credits, tokens, or model details. Members won't have a row for features they didn't use. Workspaces with more than 50,000 members aren't fully covered.

* **No automatic reports.** You need to check the status and download each file yourself. You can't schedule reports, send them to a data warehouse, or receive a webhook.

* **Large reports can take time.** For example, a full year of content pages for a very large workspace can take hours. A report will fail if it waits more than 2 hours to start or isn't finished within 16 hours of creation.

## Troubleshooting

* **Your report failed.** Try a shorter time range or, for a content pages report, narrow it to a teamspace. If several reports are running, wait for one to finish before starting another.

* **A large report shows a general error.** Reports that are too large show the same general error as other failures. Try a shorter time range or narrow a content pages report to a teamspace. If that works, the report may have been too large.

* **Your AI usage report stopped working.** Create a new token with Read AI analytics reports turned on.

* **The Analytics options don't appear.** Your organization may not have access to analytics reports yet, or you may not be an organization owner.

## Keep your data safe

* After you download a file, it’s stored in your own systems. Protect it like any other sensitive export.

* Give each token only the access it needs. Store tokens in a secrets manager, and rotate them on your security team’s schedule.

## See report activity in your audit log

Starting a report and creating a download link are recorded in your [audit log](https://www.notion.com/help/audit-log) and its CSV export. Creating another download link for the same report adds another entry.

Analytics reports aren't available for HIPAA workspaces with zero data retention. Creating, checking, listing, or downloading a report for one of these workspaces returns an error. This restriction applies to each workspace, not your entire organization.

## Where to find endpoint details

For request formats, parameters, and code samples, see the [admin API reference](https://developers.notion.com/reference/admin/intro) in the developer docs.

**More resources**

* [Admin APIs for Enterprise organizations](https://www.notion.com/help/admin-apis-for-enterprise-organizations) →

* [Workspace analytics](https://www.notion.com/help/workspace-analytics) →


## FAQs

### What does the AI usage report include?

The report includes one row for each current workspace member and AI product they used during the selected period. Each row includes the member’s user ID, name, email, the AI product, and the number of actions. Members won’t have a row for products they didn’t use.


### Which AI products are included?

Notion Agent (`agent`), connectors (`connectors`), AI meeting notes (`meeting_notes`), and Custom Agents (`custom_agent`).


### What time periods can I choose?

Choose the last 7, 28, 60, 90, 180, or 365 days.


### Who is included?

The report includes current workspace members. Workspaces with more than 50,000 members aren’t fully covered.
