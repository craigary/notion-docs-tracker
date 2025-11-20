---
title: People Directory
emoji: 👥
description: View information about all the members in your Notion workspace 👥
url: https://www.notion.com/help/people-directory
key: help:people-directory
coverImage: https://images.ctfassets.net/spoqsaf9291f/55aXJD4v1MJwiz9fwhd1Fd/22af034cc19e136e96d37ff6d3158871/Reference_Visuals_Image_29.png
category: Sharing & collaboration
---

The People Directory is a built-in database in your Notion workspace that contains profiles for all current and former workspace members. It’s a central resource to view and manage information about people in your workspace, and you can even add properties tailored to your organization's needs.

Enterprise Plan workspaces with SCIM configured can keep information up-to-date by automatically [importing data from a HRIS provider](https://www.notion.com/help/people-directory#sync-scim-properties-to-the-people-directory). You can choose which properties to display from the directory settings.

**Note:** Guests in your workspace won’t be shown in the People Directory.

## Who can use the People Directory?

All workspaces on all Notion plans have a People Directory. Depending on what role you have in a workspace, your level of access to the People Directory varies.

* **Workspace members** can edit their own profile page (including properties), and view the entire People Directory.

* **Workspace owners** can edit the entire People Directory, including properties.

If you want to sync attributes from external sources like SCIM or HRIS data to your People Directory, you'll need to be on the Enterprise Plan, with [SCIM](https://www.notion.com/help/provision-users-and-groups-with-scim) set up.

## Access the People Directory

There are several ways to access the People Directory:

* Use the search bar and type "People" to find the directory.

* Go to `Settings` → `People` or `Members` (depending on your plan) and click `People Directory` at the top of the screen.

* When you have a workspace member’s profile open, click `People` in the breadcrumb navigation.

* Favorite the People Directory to pin it to your sidebar for quick access.

## Customize your People Directory

Everyone can edit their own profile page in the People Directory. Only workspace owners can edit the entire People Directory, meaning they can add, edit, reorder, and hide properties. For example, you could add a select property that indicates which office an employee is located in.

![hc: add custom property to people directory](https://images.ctfassets.net/spoqsaf9291f/3GM5LTxzj90OeREzbJ5pD7/856a7d890645d21214ebf035663f96c6/CleanShot_Oct_27_from_People_Directory_Alpha_Guide.gif)

**Note:**

* Workspace owners can’t delete certain core properties like a person’s name and email.

* Workspace owners can reorder properties at the database level and at the individual profile page level, but the order of the properties in the database won’t reflect in individual profile pages, and vice versa.

* You can hide a specific property from someone’s profile by navigating to any profile page and clicking `Property visibility` → `Always hide` for that property.

  * This doesn’t mean the property will no longer exist — it just means that that property won’t be highlighted prominently in the page. People will still be able to view the property and its information when they select `{#} more properties` in a profile page.

## Sync SCIM properties to the People Directory

**Note:** This feature is only available to users on the Enterprise Plan.

If your Enterprise workspace has [SCIM](https://www.notion.com/help/provision-users-and-groups-with-scim) set up, you can automatically import data from your HRIS provider into the People Directory. To do this:

1. Click the slider icon at the top of your People Directory.

2. Under `SCIM properties`, select `Edit properties`.

3. Find and select the SCIM properties you want to connect.

4. Select `Update properties`.

After your initial import, any new information from these SCIM properties will reflect automatically in your People Directory within a few hours.
