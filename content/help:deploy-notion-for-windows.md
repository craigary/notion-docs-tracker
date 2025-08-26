---
title: Deploy Notion for Windows
emoji: 🚀
description: Learn how to install and update Notion for your organization 🚀
url: https://www.notion.com/help/deploy-notion-for-windows
key: help:deploy-notion-for-windows
coverImage: https://images.ctfassets.net/spoqsaf9291f/78NPUf9DYi7G1aP1xmImLW/0be494b48237767fb058cb3d34e9d06c/deploy-notion-for-macos.png
category: Workspace administration
---

## Distribute Notion

Notion’s installer is based on the Nullsoft Scriptable Install System and supports most of the command line flags aimed at supporting IT administrators with rolling out Notion to a fleet of machines.

### Silent installation and uninstallation

If you want to install Notion silently from a script, you can use the `/S` parameter. With this flag, Notion will install itself without showing any user interface. Once the installation has finished, it will **not** launch itself.

Please note that PowerShell by default does not wait for external processes to finish before moving on to the next command. If you want to wait for the installation to complete, you can use the common PowerShell trick of piping output to the `Out-Null` command like so:

> `Notion Install.exe /S | Out-Null`

### Install to a custom directory

If you want to install Notion to a custom directory, you can use the `/D` parameter.

* The `/D` parameter must be the last parameter in the command.

* There should be no quotes around the path, even if it contains spaces.

* The path must be an absolute path, not relative.

Please note that Notion’s auto-updater will attempt to write to this path, so your users should have read and write permissions.

> `Notion Install.exe /D=C:\Custom InstallPath | Out-Null`

## Disable automatic updates

At this time, Notion for Windows doesn't allow disabling of automatic updates.
