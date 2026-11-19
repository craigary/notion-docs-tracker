---
title: "Fix Slack permission errors in Notion AI"
emoji: null
description: "Learn how to update your Slack connection when Notion AI needs a new permission."
url: "https://www.notion.com/help/fix-slack-permission-errors-in-notion-ai"
key: "help:fix-slack-permission-errors-in-notion-ai"
coverImage: null
category: "Notion AI Connectors"
categoryKey: "category:notion-ai-connectors"
---

Slack may ask you to approve Notion AI again when a feature needs a permission your earlier connection didn't include. Usually only the new action fails. Everything you already use in Slack keeps working.

## Why Slack asks for permissions again

A permission lets an app do one specific thing in Slack, such as read messages, read files, or post a message and add reactions. The permissions Notion AI needs can change by feature, by your settings, and by how your Slack is set up.

Permissions can apply to the Notion AI app installed in your Slack workspace or organization, or to your own Slack sign-in. When Notion AI adds a new permission, Slack doesn't add it to older sign-ins on its own. Your older connection keeps working for the actions it already covers. A new action asks you to update your access.

## What you need to do

If you use Notion Agent, two things have to happen when Notion AI needs a new permission:

* A Slack admin must approve the new permission for the Notion AI app.

* Each person must update their own Slack sign-in.

Admin approval alone isn't enough. Even after an admin approves the app, every person needs to update their own connection.

## What you'll see

What you see depends on your Slack settings. These are the four common cases.

| **Your situation**                                                 | **What you see**                                                                                                                                                                                                                                  | **What to do next**                                                                                                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A Slack admin must approve, and Slack lets you send a request      | In your Notion Agent chat, you’ll see a card that says your Slack connection needs updated permissions. You click `Update`, and Slack shows an approval screen with a button to send a request. Sending the request doesn't grant the permission. | Send the request. After an admin approves, open Notion AI, click `Update` again, finish the Slack approval, then try the action again.                     |
| A Slack admin must approve, and Slack won't let you send a request | You click `Update`, and Slack shows an approval screen with no way to send a request. You can't continue from that screen.                                                                                                                        | Ask your Slack admin to approve Notion AI. After they approve, open Notion AI, click `Update` again, finish the Slack approval, then try the action again. |
| No admin approval is needed                                        | You click `Update`, and Slack shows the normal approval screen with the list of permissions.                                                                                                                                                      | Click `Allow`. Your own sign-in gets the new permission. Try the action again. Other people's connections don't change.                                    |
| An admin approved before you clicked Update                        | The permissions-update card appears the next time Notion Agent tries a Slack action that needs the new permission. You click `Update`, and Slack shows the normal approval screen, with no admin block.                                           | Click `Allow`. Your sign-in gets the new permission, then try the action again. Admin approval by itself doesn't update your sign-in.                      |

## Before you upgrade: you can't undo a permission upgrade

After you grant a new permission, you can't go back to the old set. To remove the access, you have to disconnect Slack. If you disconnect and sign in again from Settings, Notion asks for its standard Slack permissions. To grant the newer permissions Notion Agent needs, use the `Update` button on the card in your chat.

## Update your Slack connection step by step

1. **Find out what's failing.** Note the Notion feature (the Notion AI connector, Notion Agent, or a Custom Agent), the exact Slack action, and the Slack workspace. Check that you're signed in to the right Slack account and that you're a member of that workspace.

2. **Ask the right Slack admin to approve Notion AI.** For a single workspace, ask a Slack Workspace Owner or an app manager. In Slack's app settings, open Notion AI and approve the requested permissions. If you're a Notion workspace admin, you may see **Admins: Update your Slack connection** in your Notion sidebar. Click `Update now` to open the Notion AI app's permissions page in Slack. A Slack admin still has to approve there. If Slack lets members send a request, you can send one. If not, an admin has to approve it.

3. **On Slack Enterprise Grid, check both approval levels.** Ask a Slack Org Owner or Admin to approve Notion AI for the organization, then confirm approval for each affected workspace. Approving one workspace may not cover an organization-wide rule.

4. **Update your own Slack sign-in.** After the admin approves, go back to Notion. In your Notion Agent chat, click `Update` on the card, sign in to the right Slack account, and click `Allow`. Sign in to the right Slack account and approve the permissions. If you no longer see the card, ask Notion Agent to try the Slack action again. The card appears again if the permission is still missing. Then click `Update`.

5. **Try the action again.** Give Slack a few minutes, then try the action that first failed. If it still fails, check whether your other Slack features still work. That helps tell a missing permission apart from a bigger connection problem.

## Troubleshoot

Try these checks before you treat it as a full Slack outage:

* **Only a new action fails.** Your sign-in may work for older actions but be missing the new permission. Use the update option in Notion and confirm the permission was approved.

* **Slack shows an admin approval screen.** Ask your Slack admin to approve the change. If you can't send a request, contact your Workspace Admin or Org Admin directly.

* **Only one person still fails.** Recheck that person's Slack account, workspace membership, and whether they finished their own update after the admin approved. Matching email addresses can help line up accounts, but they don't prove the permission was granted.

* **You're on Slack Enterprise Grid.** Include the exact feature and workspace in your support request. Private channels and direct messages can behave differently, so updating again may not fix a feature that works differently.

* **Notion says Slack is connected, but every action fails after a blocked sign-in.** Stop retrying the approval and contact Notion Support. Share the error you see and the connection state so Support can check whether the sign-in finished.

When you contact Support, include: the Slack workspace name, whether it uses Enterprise Grid, the Notion feature and action, the exact error or a screenshot, when it happened, who's affected, whether other Slack actions work, and which admin approvals are done.

Never share passwords, sign-in tokens, or one-time codes.
