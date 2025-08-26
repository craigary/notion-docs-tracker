---
title: Passkeys
emoji: 🔑
description: Learn how to log into Notion using passkeys, a simple and secure alternative to passwords 🔑
url: https://www.notion.com/help/passkeys
key: help:passkeys
coverImage: https://images.ctfassets.net/spoqsaf9291f/3G9lsSF7xET8hko0HHDzoM/a8f7c018fd8e54bf938a609742b6fd7e/Security___privacy_-_hero.png
category: Settings
---

## What are passkeys?

Passkeys are secure, easy-to-use alternatives to passwords. Instead of remembering your password, you can sign into Notion using the same method you use to unlock your device. Behind the scenes, passkeys use public-key cryptography to create unique security keys that work only with your Notion account.

Passkeys are simpler and more secure than passwords, even with [two-step verification](https://www.notion.com/help/two-step-verification) enabled. Since passkeys are stored on your device and require biometric authentication like Face ID or Touch ID, they provide better protection against phishing attacks than traditional login credentials.

**Note:** In order to use passkeys,**&#x20;**&#x79;ou **can’t** be in an organization that requires [login using an identity provider](https://www.notion.com/help/saml-sso-configuration) such as Okta, Microsoft Azure, or Google Workspace.

## Set up a passkey

To set up a passkey on web or desktop:

1. Go to `Settings` in your sidebar → `{your name}`.

2. Under `Account security`, select `Add passkey`.

3. Choose where you’d like to store your passkey: in iCloud Keychain, Chrome Profile, or Password Manager. You can add up to five passkeys.

![hc: add a passkey](https://images.ctfassets.net/spoqsaf9291f/6gYkCcPaf8sDoQKUfduXl7/c4d0692837ac2f019a843577626c3d2f/create_passkey.gif)

To set up a passkey on mobile:

1. Go to `Settings` in your sidebar.

2. Under `My settings`, select `Add passkey`.

3. Choose where you’d like to store your passkey: in iCloud Keychain, Chrome Profile, or Password Manager. You can add up to five passkeys.

## Types of passkeys Notion supports

Notion supports two kinds of passkeys so you can choose the method that works best for you:

1. Synced passkeys

   * Operating systems: Use passkeys stored in your operating system’s credential manager such as Apple’s iCloud Keychain or Google’s Password Manager.

   * Password manager passkeys: Use passkeys stored in password managers like 1Password or Bitwarden.

2. Device-bound passkeys

   * Hardware security keys: Use physical security keys that support the FIDO2 standard, such as YubiKey.

   * Mobile device passkeys: Use your phone or tablet's built-in authentication methods.

## Log in with a passkey

To log in using a passkey:

1. In the login page, select `Continue with Passkey`.

2. Select the location of your passkey and provide confirmation of the passkey. This will usually be done using a biometric, like Face ID or Touch ID.

![hc: log in with passkey](https://images.ctfassets.net/spoqsaf9291f/6Jd8yYLbsV17eUWPpAwvCr/6e4e0d64cc44a92f856fe021be85ec8e/log_in_with_passkey.gif)

## Remove a passkey

To remove a passkey on web or desktop:

1. Go to `Settings` in your sidebar → `{your name}`.

2. Under `Account security`, select `Manage passkeys`.

3. Delete the passkey that you would like to remove.

4. You can optionally delete the passkey from your device or password manager as well.

To remove a passkey on mobile:

1. Go to `Settings` in your sidebar.

2. Under `My settings`, select `Manage passkeys`.

3. Delete the passkey that you would like to remove.

4. You can optionally delete the passkey from your device or password manager as well.

**Learn more**

* [Account settings](https://www.notion.com/help/account-settings)

* [Two-step verification](https://www.notion.com/help/two-step-verification)

* [I can’t log in](https://www.notion.com/help/cant-log-in)


## FAQs

### Do I need to set up a passkey to use Notion?

Passkeys aren’t required for Notion users, but we highly recommend them as an extra layer of security to protect your work.

Note that this feature is designed for users who **don’t use&#x20;**[SAML SSO](https://www.notion.com/help/saml-sso-configuration) to log into Notion.


### Can I set up different kinds of passkeys at the same time?

Yes, you can set up up to five passkeys — for example, you could have one that uses your browser and one that uses your password manager. You may consider setting up multiple passkeys so you always have a backup.


### I use verification codes to log into Notion. Can I still setup passkeys if I don’t have a password for Notion?

Yes, you can use passkeys with or without a password.


### What are the costs or fees associated with passkeys?

Passkeys are available across all plan types. There are no additional costs or fees to use passkeys with your account.


### What if I lose my phone or verification device that I use for passkeys? How do I log in?

You can simply use another sign in method. You can continue to log in with Google or Apple, or enter your email and use the verification code you’re sent to sign in.


### How do I troubleshoot issues with passkeys?

If you can’t access your passkeys, we advise that you use a different login method and go to your settings to update your login methods. If you continue to have issues, please contact our support team.


### I’m a workspace owner. Can I enforce passkeys for everyone in my workspace?

Unfortunately, workspace owners can’t enforce this feature for all users in their workspace at this time. We’d love to hear your feedback — if this is something you need for your workspace, please reach out and let us know.
