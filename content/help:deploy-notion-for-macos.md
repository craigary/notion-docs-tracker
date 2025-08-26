---
title: Deploy Notion for macOS
emoji: 🚀
description: Learn how to install and update Notion for your organization 🚀
url: https://www.notion.com/help/deploy-notion-for-macos
key: help:deploy-notion-for-macos
coverImage: https://images.ctfassets.net/spoqsaf9291f/78NPUf9DYi7G1aP1xmImLW/0be494b48237767fb058cb3d34e9d06c/deploy-notion-for-macos.png
category: Workspace administration
---

Notion's desktop app provides IT administrators with enhanced control over installations and updates. You have the flexibility to select the installation path for Notion and manage update settings. By default, the Notion app is set up in the /Applications folder on your employees’ machines and is configured to update automatically with each new release.

**Note:** Regular updates are crucial for access to the latest features and ensuring the highest level of security, especially if automatic updates are turned off.

## Installing Notion on shared machines

Notion allows for use on shared machines by multiple users. It can be installed in either the /Applications or \~/Applications folder of a user's machine. The best installation method depends on your organization's specific needs.

**/Applications**

* All users on the machine use the same installation of Notion.

* Updates made to Notion apply to all users on the machine.

* Users must be administrators to update Notion.

**\~/Applications**

* Each user on a shared machine has their own installation of Notion.

* Updates made to one instance of Notion do not affect other instances of Notion for other users on the same machine.

* Users do not need to be administrators to update Notion.

## Distribute Notion

After deciding on the installation method, download the appropriate Notion desktop app build. There are three builds available: [Intel (x64)](https://www.notion.com/desktop/mac-intel/download), [Apple Silicon (arm64)](https://www.notion.com/desktop/mac-apple-silicon/download), and [Universal (x64 or arm64)](https://www.notion.com/desktop/mac-universal/download). Ensure you distribute the correct build to match your employees' machine types.

**Note:** The Universal build works on Intel and Apple Silicon machines. Keep in mind the installation file is much larger than the other builds.

## Disable automatic updates

Notion allows you to disable automatic updates for individual users. This feature is useful for when you want to test new Notion app versions before a widespread rollout, or if you prefer to stagger the update process. To keep the app working smoothly and securely, we advise updating Notion with each new version release.

To prevent Notion from automatically checking for updates, run the following terminal command as each user who will be running Notion:

`defaults write notion.id NotionNoAutoUpdates -bool YES`

Use the following command to re-enable automatic updates:

`defaults write notion.id NotionNoAutoUpdates -bool NO`

## Allow users to update Notion

If Notion is installed in the \~/Applications folder, users can update the app independently without needing special permissions. However, if the app is installed in the /Applications folder, update permissions are required. **Users must be machine administrators and have write access to /Applications, notion.app, and all its subfiles.**

For shared machines, we recommend setting up a permissions group for all Notion users and installing Notion in a subfolder of /Applications. You can grant this group ownership and write access to the subfolder using the terminal command below. Make sure you replace **group** with your permissions group name and **subfolder** with your subfolder name:

`chown -R :group /Applications/subfolder && chmod -R 775 /Applications/subfolder`
