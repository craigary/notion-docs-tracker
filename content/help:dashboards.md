---
title: "Dashboards view"
emoji: null
description: "Learn how to create a dashboard view, add and arrange widgets, and manage permissions and performance."
url: "https://www.notion.com/help/dashboards"
key: "help:dashboards"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/YMKjsIquapvJc0bzFpMOx/cfc103bb19fb5cef551b2e72985542bb/dashboard.png"
category: "Databases"
categoryKey: "category:databases"
---

Dashboard views turn any database into an at-a-glance control center. Instead of switching between multiple views, you can arrange widgets like tables, boards, calendars, charts, and timelines into a single layout.

Dashboard views are available on **Business** and **Enterprise plans**.

Dashboards work well for:

* Team status reports

* Ticket or incident overviews

* Sales and pipeline summaries

* Content or campaign performance

[](//videos.ctfassets.net/spoqsaf9291f/3m2WAOMMdvhDs46cv4fQ63/f4fef467ee8ec0a8dc75e3c48fcc3493/Full_view_dashboard_view.mp4)

## Create a dashboard view

You can add a dashboard view to any database.

1. Open a database (full-page or inline).

2. Select `+ Add a new view`.

3. Select `Dashboard`**.**

You’ll start in `Edit` mode, so you can begin designing your layout right away.

![hc: new dashboard view](https://images.ctfassets.net/spoqsaf9291f/3coUUDzdXxUq55VChvUBzG/67b58c0797c2e761506e1dd80988b946/New_dashboard_view.png)

### Create with a slash command

You can also create a dashboard view with a slash command:

1. Inside a page, open the command menu or type `/dash`.

2. Select `Dashboard `view.

3. Name the view, then start editing the layout.

You can create a dashboard manually, or use Notion Agent to generate a first draft.

### Create with Notion Agent

You can also use **Notion Agent** to create and refine a dashboard. This is especially helpful when you want a quick starting point or aren’t sure which widgets to include.

For example, you might ask:

*“Create a dashboard for my \[@ Tasks database] that gives me an overview of key metrics for the work.”*

[](//videos.ctfassets.net/spoqsaf9291f/1ME6JowN5NQhM9uOZTaTok/553b0a4be78cb2bee0d6cfa9ccf79baf/Dashboard_views_notion_Agent.mp4)

After the agent creates a first draft, switch to `Edit` mode to rearrange widgets, adjust row heights, and fine-tune the views each widget displays.

Notion Agent can also help you **iterate on an existing dashboard**. For example, you can ask it to:

* Add new widgets to track specific properties

* Reorganize the layout to highlight key metrics

* Create views that focus on certain tasks, owners, or statuses

## Build your dashboard

Widgets form the building blocks of dashboard views. Each widget displays a database view from a data source. Dashboards can combine widgets from one or multiple databases.

### Add widgets

1. Enter `Edit` mode by selecting `Edit` in the database header.

2. Click the `+` icon on a row or at the bottom of the table to add a new widget.

3. Choose the database view the widget should display:

   * Select an **existing view** in the database, or

   * Create a **new view** for this dashboard.

If you’re planning a larger layout, keep in mind dashboards support up to **4 widgets per row** and **12 widgets total**.

### Manage widgets

To open a widget’s actions menu, right-click the widget (or click its title).

* **Duplicate a widget:&#x20;**&#x53;elect `Duplicate` to create a copy with the same view settings and layout.

* **Delete a widget:** Select `Delete` to remove the widget from the dashboard.

### Arrange widgets

In `Edit` mode, you can organize your layout by moving widgets into different rows, reordering them within a row, or removing widgets you do not need.

* Drag widgets to move them into place.

* If you don’t see an option to move a widget, open the widget menu by right-clicking the widget or clicking its title, then use the available move or reorder options.

### **Adjust widget widths and row heights**

**Widths:**

* In `Edit` mode, hover between two widgets.

* Drag the handle left and right to resize.

**Heights:**

* In `Edit` mode, hover over the boundary between two rows.

* Drag the divider up or down.

[](//videos.ctfassets.net/spoqsaf9291f/3LbAVIQ1j5Jkwl6X8vv2d9/8c0c604ebd458be558593e88e16fab37/Adjust_widgets_dashboard_views.mp4)

### Change what a widget shows

Each widget displays a specific database view. From the widget’s view options, you can adjust settings such as:

* **Filters&#x20;**(for example, only “Open” tasks)

* **Sorts&#x20;**(for example, newest first)

* **Groups&#x20;**(for example, by status or assignee)

* **Visualization type&#x20;**(for example, table, board, or chart)

Check out our article on [Views, filters, sorts, and groups](https://www.notion.com/help/views-filters-and-sorts) to learn how to refine and structure your data.

Saving filters and sorts in dashboards

Filters and sorts applied in View mode won’t be saved to the dashboard by default. They’re stored locally unless you select “Save for everybody” and have edit permissions.

## Global filters

Global filters let you apply a filter across multiple widgets in a dashboard at once, even if those widgets pull data from different sources.

1. Select the filter icon in your dashboard.

2. Choose `Filter multiple sources`.

3. Select a property and set your filter criteria.

![hc : global filters dashboard view](https://images.ctfassets.net/spoqsaf9291f/4VnfvJaGUfrQda4Zeiw2XH/14db569c6569ea18ba718e9d13035a03/Filter_multiple_sources.png)

### Using global filters across widgets

Global filters work differently from widget-level filters:

* Global filters only affect widgets whose underlying views include the property you’re filtering.

  * For example, if you add a global filter for `Status`, it only applies to widgets that include a `Status`

    property.

* You can add **multiple global filters&#x20;**&#x74;o the same dashboard, including filters for different properties.

* You can apply global filters across **multiple sources**, as long as the widgets share the relevant properties.

## When to use view mode vs. edit mode

Dashboard views have two modes. This helps keep dashboards stable for viewers while giving editors a dedicated space to design the layout.

| Mode          | Use it when                                        | What you can do                                                                                                                                                                       |
| ------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **View mode** | You’re consuming a dashboard.                      | • Open pages from widgets. • Use visible filters, sorts, and groups inside a widget. • Interact with database items based on your permissions (for example, update a status or date). |
| **Edit mode** | You want to design or update the dashboard layout. | • Add, remove, and rearrange widgets. • Adjust row heights. • Change which database view each widget displays.                                                                        |

## When to edit a widget vs. edit the underlying view

Each widget displays a specific database view. You can adjust either the widget’s layout or the view it displays.

### **Edit the widget layout**

In `Edit` mode, you can:

* Move a widget to another row

* Resize its row

* Remove it from the dashboard

### **Edit the widget’s database view**

From the widget’s view options, you can update the underlying view settings (like filters, sorts, groups, and visualization type).

Edits to a view may appear in other pages

Changes to the underlying view may also appear anywhere else that view is used, depending on your workspace settings.

## Permissions and access

Dashboard views follow the same permissions as the underlying database.

**If you have edit access to the database, you can:**

* Create dashboard views

* Edit the dashboard layout

* Configure the views used by widgets

**If you only have view access to the database, you can:**

* Open dashboard views in **View mode**

* Interact with content based on your permissions (for example, open pages)

You need **edit access to the database** to change the dashboard layout.

## Improve your dashboard view’s performance

Dashboards can slow down if they load too much data at once. To keep them fast and responsive:

* **Focus each widget on what matters most.** Avoid adding more widgets than necessary.

* **Use filters to limit the data each widget loads.&#x20;**&#x46;or example, filter by “This week” or “Status is not Done.”

* **Avoid large, unfiltered table widgets.** Use charts or grouped views to show summaries, then click through for details.

* **Start with high-level insights.** Use widgets as entry points to explore the underlying data when needed.

Avoid overloading your dashboard

Dashboards support up to **12 widgets total** (up to **4 per row**). To keep things snappy, avoid adding multiple dashboard views to the same page.

## When to use dashboard views vs. inline views

You can build a dashboard-style page using inline database views arranged in columns. However, use dashboard views when you want a stable, repeatable layout.

If you need rich text, images, and multiple databases in one freeform page, use inline views in columns. If you want a consistent layout you can reuse as a view, use a dashboard view.

**Use a dashboard view when you want:**

* A stable, app-like surface that’s harder to accidentally break

* Clear separation between editing the layout and using the dashboard day to day

* Cleaner alignment, where rows resize together

**Use inline database views in columns when you want:**

* A more freeform page layout that mixes databases with rich text, images, and callouts

* The flexibility to experiment quickly without committing to a reusable view

* Highly customized layouts that change from page to page

## Layout ideas for dashboard views

Here are a few patterns you can use as a starting point.

### 1) Team status hub

A simple layout for weekly team check-ins, combining progress, current work, and blockers in one place.

* **Row 1&#x20;**:

  * Chart of pipeline by stage (or total ARR by segment)

* **Row 2&#x20;**:

  * Table of Top priority projects

  * Table of Risks or Blocked items

* **Row 3 :**

  * Timeline of key milestones

### 2) Incident or ticket overview

A triage-focused layout to monitor volume, urgency, and ownership so nothing slips through.

* **Row 1&#x20;**:

  * Chart of open tickets by severity

  * Chart of tickets by channel

* **Row 2&#x20;**:

  * Table of Unassigned tickets

  * Table of Breaching SLA tickets

* **Row 3 :**

  * Timeline of tickets by created date

### 3) Executive reporting

A high-level layout for leadership to scan key metrics, top priorities, and milestone timing at a glance.

* **Row 1&#x20;**:

  * Chart of pipeline by stage (or total ARR by segment)

* **Row 2&#x20;**:

  * Table of Top priority projects

  * Table of Risks or Blocked items

* **Row 3 :**

  * Timeline of key milestones


## FAQs

### Why is my dashboard loading slowly?

Dashboards can take longer to load when they include many widgets or large, unfiltered views. For best performance, keep widgets focused and use filters to limit how much data each widget needs to display.
