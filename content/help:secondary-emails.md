---
title: Secondary emails
emoji: 📨
description: Add multiple email addresses to a single Notion account. 📨
url: https://www.notion.com/help/secondary-emails
key: help:secondary-emails
coverImage: https://images.ctfassets.net/spoqsaf9291f/3sVx6yqPBL92vCmBcGf5EX/2737ea79369b8fb999887a5f4a54648a/notion-mail-security-practices.png
category: Settings
---

Secondary Emails allow you to associate multiple verified email addresses with a single Notion account. All your secondary emails point to the same account, so you can log in, receive shares, and be mentioned using any of your verified email addresses.

You can can log in, receive page shares, and be @mentioned using any of your verified addresses.

Enterprise admins have control over secondary email policies for managed users, including enabling or restricting which domains are allowed.

## Why use secondary emails?

Secondary emails help you:

* **Prevent account lockouts**: Add a backup email so you never lose access to your account if your primary email becomes unavailable

* **Use multiple work emails**: Enterprise users can add company email addresses so login and sharing work seamlessly across all your email addresses

* **Keep access after graduation**: Students can add a personal email before losing access to their educational email address

## How secondary emails work

When you add a secondary email to your Notion account:

* **Login**: Sign in to Notion using any of your verified email addresses

* **Sharing**: Pages and content shared to any of your secondary emails will appear in your account

* **Single identity**: All your emails connect to the same account and identity in Notion

## Adding and managing secondary emails

### Add a secondary email

1. Go to `Settings` in your sidebar

2. Click on your profile

3. Under `Account security`, click `Manage emails`

4. Enter the email address you want to add

5. Click `Send verification code`

6. Check your inbox for the verification code and enter it to confirm

You can add up to **5 secondary emails** per account.

### Change your primary email

Your primary email is where Notion sends account notifications. To change which email is your primary:

1. Go to `Settings`, then click on your profile

2. In `Manage emails`, find the email you want to make primary

3. Select `Make primary`

### Remove a secondary email

1. Go to `Settings`, then click on your profile

2. Under `My emails`, find the email you want to remove

3. Select `Remove`

**For Student plan users:** If you remove your educational email address, you will lose your Student plan discount.

## Secondary email controls

Organizations on Enterprise plans can control whether users are allowed to add and manage secondary emails.

### Default settings for managed users

By default, secondary emails are disabled for users with verified domain email addresses. This means:

* Users on verified domains cannot add secondary emails unless an admin enables the setting

* Admins have full control over secondary email management through organization settings

* Verified domains cannot be added as secondary emails to accounts outside the organization

### Organization settings

Organization owners can configure secondary email settings:

1. Go to `Manage organization` → `People tab`

2. Find `Allowed secondary emails`

3. Choose from the following options:

   * `Disabled`: Users cannot add or manage secondary emails

   * `Only verified domains`: Users can only add secondary emails that match your organization's verified domains

### Admin management of secondary emails

Administrators can manage secondary emails for their users through:

* **Manage orgnanization:** Add, remove, or change the primary email for any managed user

* **SCIM provisioning**: Programmatically manage secondary emails using the `emails` field in your SCIM integration

* **Audit logs:** Track all secondary email add, remove, and primary email change actions

### SSO with secondary emails

If your organization uses SSO, users can sign in with any verified email as long as your Identity Provider (IDP) supports those email addresses.

For example, if a user has both email protected and email protected configured in your IDP, they can use either email to sign in via SSO

## Limitations

* **Maximum secondary emails:** Up to 5 secondary emails per account

* **Uniqueness:** Each email address can only be associated with one Notion account

* **Notifications:** Account notifications default to your primary email address

* **Verification required:** All email addresses must be verified before use

* **Domain restrictions:** For enterprise managed users, policy restrictions apply based on verified domains


## FAQs

### Can I log in with any of my email addresses?

Yes. You can log in to Notion using your primary email or any verified secondary email on your account.


### What happens when someone shares a page with one of my secondary emails?

The page will appear in your Notion account. Shares to your primary email or any secondary email resolve to the same account.


### Do mentions work with secondary emails?

Yes. If someone @mentions any of your email addresses, you'll receive the notification and it will reference your account.


### Is this the same as a recovery email?

Secondary emails are more than just recovery emails. While they do help with account recovery, they're full email addresses that work for login, sharing, and mentions: not just recovery purposes.


### Can I add an email that's already used by another Notion account?

No. Each email address can only be associated with one Notion account. If you need to use an email that's currently on another account, you'll need to remove it from that account first.


### Can enterprise users add personal email addresses as secondary emails?

This depends on your organization's policy. If your organization has set the policy to "Only verified domains," you can only add secondary emails that match your company's verified domains. If the policy is set to "Disabled," you cannot add any secondary emails.
