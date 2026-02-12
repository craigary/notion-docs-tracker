---
title: Set up Microsoft Intune with Notion (iOS and Android)
emoji: 📲
description: Set up Intune to manage Notion on iOS and Android mobile devices 📲
url: https://www.notion.com/help/set-up-microsoft-intune-with-notion-ios-and-android
key: help:set-up-microsoft-intune-with-notion-ios-and-android
coverImage: null
category: Workspace administration
---

**Note:** This is available for Enterprise plans only. Notion supports Microsoft Intune for the Notion mobile apps.

Microsoft Intune can apply security policies to the Notion mobile app. This helps IT teams protect company data in Notion on iOS and Android devices.

Notion supports Intune app protection policies (also called MAM without device enrollment). That means Intune manages the app and its data, not the entire device.

***

## What you’ll need to start

To configure Notion with Microsoft Intune, you’ll need:

* A Notion Enterprise plan

* Admin access in Microsoft Intune

* Admin access in Microsoft Entra ID (formerly Azure AD)

* Intune licenses for for all members who will use Notion on mobile devices

* The Notion mobile app installed on iOS or Android

***

## What policies are supported

Notion supports the following app protection controls through Intune:

* Restrict cut, copy, and paste

* Restrict screen capture

* Restrict sharing to other apps

* Restrict backups

* Require corporate credentials

* Require a PIN or biometrics

* Require re-authentication after a timeout

* Conditional launch checks (minimum OS version, app version, offline grace period, or blocked rooted/jailbroken devices)

* Selective wipe (remove work data from Notion)

* Block multiple accounts (restrict to one workspace at a time on managed devices)

## Set up Notion with Microsoft Intune

### Step 1: Add Notion to Intune

First, you’ll need to add Notion to Microsoft Endpoint Manager.

1. Sign in to the [Microsoft Intune admin center](https://intune.microsoft.com).

2. Go to `Apps`**&#x20;**→<!-- --> `All apps`**&#x20;**→ `Add`**.**

3. Add Notio&#x6E;**&#x20;**&#x66;rom the iOS store app or Android store app.

4. Assign the app to the right users or groups.

5. Click `Create`**&#x20;**&#x74;o add the app.

### Step 2: Create and assign app protection policies

App protection policies control how corporate data is handled within Notion. You'll need to create separate policies for iOS and Android.

1. In the Intune admin center, go to `Apps`**&#x20;**→ `App protection policies.`

2. Click `Create policy`**&#x20;**&#x61;nd select **iOS/iPadOS&#x20;**&#x6F;r **Android.**

3. Under `Apps`, select Notio&#x6E;**&#x20;**&#x66;rom the list of managed apps.

4. Choose the protection settings you want.

5. Assign the policies to the right users or groups.

6. Review and create the policy. Then, repeat for the other platform.

### Step 3: Enable Microsoft Intune in Notion

An organization owner must turn on Intune in Notion.

1. Open the admin console in Notion.

2. Find the Microsoft Intun&#x65;**&#x20;**&#x73;etting.

3. Turn it on.

Once you switch on this setting, members may see a one-time Microsoft sign-in the first time they open Notion on mobile.

![Connect Microsoft Intune to Notion](https://images.ctfassets.net/spoqsaf9291f/6MA5piNdQI6SQhtafAn6VX/615c3cd6480b14697146bda956b0a12a/Screenshot_2026-01-09_at_10.50.30%C3%A2__AM.png)

**Note:** Policies only apply to users who are assigned an Intune license and targeted by your Intune policy assignments.

***

## What users will see on mobile

After Intune is set up, users keep using the standard Notion mobile app. Depending on your policies, users may:

* Need to sign in with Microsoft

* Be blocked from copying or pasting content outside of Notion

* Be blocked from sharing content to other apps

* Be required to set up a PIN or biometrics for access

**Note:&#x20;**&#x57;hen signed into an Intune-managed workspace, users will see a "Managed" badge in the workspace switcher.

***

## Troubleshooting

* Policies aren’t applying

  * Confirm the user is included in the Intune policy assignment

  * Confirm the user has an Intune license

  * Wait a few minutes for policy changes to propagate, then have the user sign out and sign back in

  * Confirm the user is on the latest Notion mobile app

* Users can’t access Notion

  * Check conditional access settings (if your org uses them)

  * Confirm required Microsoft apps are installed if your setup requires them (like Microsoft Authenticator or Company Portal)

* Unexpected policy behavior

  * Check whether multiple policies apply, and whether policy priority is affecting results

  * Contact Notion support with details about expected vs. actual behavior

***

## FAQ

* Which Notion plans support Intune?

  Intune support is available on the **Enterprise** plan only.

* Do users need a separate Notion app?

  No. Users can use the standard Notion mobile app.

* Can I use Intune with personal Notion accounts?

  Intune policies apply to work accounts managed through your organization.

* What happens during selective wipe

  Work data on the device is removed from Notion. The Notion app stays installed.

***

## Related resources

* [Microsoft Intune documentation](https://learn.microsoft.com/en-us/mem/intune/)

* [App protection policies overview](https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy)

* [Conditional Access documentation](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview)


## FAQs