---
title: Transfer content from a deprovisioned user
emoji: 📖
description: This article outlines how a workspace owner can transfer content from a member who has been deprovisioned from an Enterprise Plan workspace 📖
url: https://www.notion.com/help/transfer-content-deprovisioned-user
key: help:transfer-content-deprovisioned-user
coverImage: https://images.ctfassets.net/spoqsaf9291f/10tl925CiiBTlasoUaxaM1/60befda7bdd6eb12cc9bc1811cf9cbba/Duplicate_public_pages_-_hero.png
category: Workspace administration
---

## When can a workspace owner transfer content?

When a user is deleted, deprovisioned, or leaves a workspace, they may leave behind private page content. This feature allows a workspace owner of an Enterprise Plan workspace to transfer this content to another, current user so it is easily recovered.

**Note:&#x20;**&#x54;his process applies on a user’s *private content* after they have left a workspace. Content shared with a current workspace member will **not** be transferrable.

A workspace owner is able to reassign the private content of a user who has recently left the workspace if:

* The user is not currently part of the workspace (they have been deprovisioned).

* The user had private pages.

* The user’s private pages were not already reassigned to another user.

* The user was part of the workspace fewer than 30 days ago.

* The workspace is on an Enterprise Plan subscription.

## Reassign content in Notion settings

1. Go to `Settings` and click the `Members` section.

2. Navigate to the `Recently left` users tab.

3. For the user who has been deprovisioned (the “recently left user”), select the destination where you would like to send the deprovisioned user’s private pages.

4. You will see a confirmation modal; select `Transfer private pages` to continue the private page transfer process.

5. All of the deprovisioned user's private pages will appear in the destination user’s sidebar, nested under a new top-level private page.

**Note:&#x20;**&#x41; user who has had all their private pages reassigned will no longer be visible in the `Recently left` list.

## Reassign content using the Content Transfer API

Enterprise plan workspace owners can use the Content Transfer API to transfer private pages from recently removed workspace members to another member. This API requires the same eligibility criteria mentioned [above](https://www.notion.com/help/transfer-content-deprovisioned-user#when-can-a-workspace-owner-transfer-content).

To use this API, Enterprise Plan workspace owners can:

1. [Create a new internal integration](https://www.notion.com/profile/integrations) with the `Transfer content` capability.

   ![hc: content transfer api](https://images.ctfassets.net/spoqsaf9291f/1xgJY9WrwhBD6kf9Uopl7l/0bd3f1489e482ae1cdbafab5143e3f94/content_transfer_api.webp)

2. Use the following API call for transferring content:

> `curl -X POST '<https://api.notion.com/v1/users/transfer>' \\`
>
> `-H 'Authorization: Bearer <token>' \\`
>
> `-H 'Notion-Version: 2022-06-28' \\`
>
> `-H "Content-Type: application/json" \\`
>
> `-d '{ "from_user_id": <from_user_id>,"to_user_id":<to_user_id>}'`

* The `from_user_id` represents the removed user. If you’re using the SCIM webhook, the user\_id is included in the payload.

* The `to_user_id` represents the recipient of the transferred content. You can retrieve this user\_id by querying the Notion Public API using the [list users API endpoint](https://developers.notion.com/reference/get-users) or using the API provided by your Identity Provider. For instance, Okta provides the [listAppUsers API](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/#tag/ApplicationUsers/operation/listApplicationUsers). The [externalID](https://developer.okta.com/docs/api/openapi/okta-management/management/tag/ApplicationUsers/#tag/ApplicationUsers/operation/listApplicationUsers!c=200\&path=externalId\&t=response) of the appUser is the notion user ID.

> `curl '<https://api.notion.com/v1/users>' \\\\`
>
> `-H 'Authorization: Bearer '"$NOTION_API_KEY"'' \\\\`
>
> `-H "Notion-Version: 2022-06-28"`

3\. The API will return a failure response if the validation fails. Validations can fail if the from user is still in the workspace, or the workspace is not on the Enterprise Plan. If the validation passes, the API will return a success response and start processing the transfer. When the transfer is complete, transferred content should appear in the recipient's private Notion content. The recipient will also receive an inbox and email notification.

## Restore a user's content and access

If a user has left and rejoined a workspace within the last 30 days, workspace owners will be able to restore their private pages, shared pages, group membership, and teamspace membership.

To do this, simply add a member back to your workspace and their content and access will be automatically restored once they rejoin.
