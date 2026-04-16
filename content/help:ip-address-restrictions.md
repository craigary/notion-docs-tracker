---
title: "IP address restrictions"
emoji: "🔒"
description: "Enterprise organization owners can restrict login to specific IP addresses 🔒"
url: "https://www.notion.com/help/ip-address-restrictions"
key: "help:ip-address-restrictions"
coverImage: "https://images.ctfassets.net/spoqsaf9291f/5StPeXrRtUwpJVSJprYDWk/54461e2b82a6026fec33cd0574ed5c3e/Reference_Visuals_Group_163.png"
category: "Workspace administration"
categoryKey: "category:enterprise-admin"
---

You can restrict access to your organization’s workspaces by setting an allowlist of IP addresses that [managed users](https://www.notion.com/help/managed-users-dashboard) can use to log in to Notion.

This can be useful if you want to restrict account access to users connecting from specific locations (such as your office) or through a specific VPN.

## Who can use this feature?

To set up allowed IP addresses, you must be an Enterprise [organization owner](https://www.notion.com/help/organization-level-controls#who-can-apply-organization-level-controls).

## Set up allowed IP addresses for your organization

To create a list of allowed IP address for your organization:

1. In your sidebar click on your organization’s name, select `Settings`.

2. From settings click on `Organization` → `Security`.

3. Click `IP restrictions `/ `Allowed IP addresses`, then set the enforcement option to Require reauthentication. When enabled, the session ends as soon as a device leaves the allowed IP ranges, and the user must sign in again.

4. Provide a name for your address (like “SF Office” or “NY Office”) and then enter the corresponding IP address. To set a range of IP addresses, you can use CIDR notation (e.g., 127.0.0.1/24).

   To ensure that no one gets locked out of their account before all IP restrictions are set, we recommend that you add the relevant IP addresses first, then activate the allowed list afterwards.

5. After you've added a list of IP addresses that you want to approve for the account, select the checkbox above the list → `Activate`.

   * Ensure your own IP address is included in the allowed list. Otherwise, you'll receive an error message and your list of allowed IP addresses won’t be activated.

Once the allowed IP list is enabled, you’re all set. Users will only be able to access their accounts when they’re on an IP address included in the allowlist.

![hc: restricted ip address login error](https://images.ctfassets.net/spoqsaf9291f/4uJ4tMOCzfrdiJ9NT8qL40/04920a35e2ce7800170bf5d07b61e15d/IP_Address_Restrictions_Reference.png)

## How IP address restrictions impact managed users

If a managed user attempts to sign in from an IP address that doesn’t match an address on the allowlist, they’ll see an error message and can’t proceed.

Previously, IP address restrictions were effectively enforced at login time only. That meant once a user authenticated from an allowed IP, their session could remain active for up to 90 days (as long as they stayed signed in), even if the device later moved outside the allowed IP ranges.

Now, admins can enable an enforcement option that ends the session as soon as a device leaves the allowed IP ranges. When this happens, the user must reauthenticate (sign in again).

![hc: restricted ip address error message](https://images.ctfassets.net/spoqsaf9291f/43CdtjFnBV5vBAh0B3Rfu9/e8f0bcaf4e7d580cf9ff5b85ebe6c083/IP_Address_Restrictions_Reference__1_.png)

## Audit log events

When you’re managing IP addresses for your organization, you’ll have access to the following audit log events:

* Created IP allowlist: That a user created an IP allowlist rule.

* Deleted IP allowlist: That a user deleted an IP allowlist rule.

* Updated IP allowlist: That a user updated an IP allowlist rule.

* Enabled IP allowlist: That a user either enabled the IP allowlist rules.

* Disable IP allowlist: That a user either disabled the IP allowlist rules.
