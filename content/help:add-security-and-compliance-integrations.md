---
title: Add security & compliance integrations
emoji: 🔐
description: Learn how to add security and compliance integrations to your workspace 🔐
url: https://www.notion.com/help/add-security-and-compliance-integrations
key: help:add-security-and-compliance-integrations
coverImage: https://images.ctfassets.net/spoqsaf9291f/4cBManwE4Muz3k8Qek1Vda/e6c35d9ee50fdc54634d422cbe277453/add-security-and-compliance-integrations.png
category: Workspace administration
---

Only Enterprise workspace owners can install workspace-wide security and compliance integrations. To add a security and compliance integration:

1. Go to `Settings` → `Connections`.

2. Open the `Workspace` tab.

## Prerequisites for adding security and compliance integrations

* Your workspace must be on an Enterprise Plan.

* Only a workspace owner can configure security and compliance integrations for a Notion workspace.

* You must have admin privileges in the partner tool.

## DLP partner integrations

Integrating with a DLP solution will help detect the use of sensitive data in your workspace and take automated action to remediate data breaches quickly by alerting workspace owners, redacting content, or restricting page access.

### Supported DLP partners

**Nightfall AI**

1. In Notion, go to `Settings` → `Connections` → open the `Workspace` tab.

2. Select `Connect` on the `Nightfall` tile → `Connect to Nightfall`.

3. Authenticate with your Nightfall credentials.

4. You can find additional instructions [here](https://help.nightfall.ai/nightfall-ai/nightfall-for-notion), and learn more about the integration [here](https://www.nightfall.ai/integrations/notion).

### Disconnecting by partner

**Nightfall AI**

1. In Notion, go to `Settings` → `Connections` → open the `Workspace` tab.

2. Select `•••` beside the `Nightfall` integration → `Disconnect`.

3. In the [Nightfall application](http://app.nightfall.ai), select `Notion` in `My Integrations`, and remove the relevant Notion workspace from the `Workspaces` list.

## SIEM partner integrations

Integrating with a SIEM solution will bring your Notion audit log information into a shared platform with the rest of your SaaS app logs in order to:

* Provide visibility into Notion user and workspace activity in a third-party audit log for better analysis, searches, and correlations.

* Configure off-the-shelf alerts on unusual user activity in real-time.

* Provide reports and dashboards to support incident investigation.

**Note:&#x20;**&#x4F;n the Notion end, we don’t support connecting to any SIEM partner until the partner instance is ready to handle events.

### Supported SIEM partners

**Datadog**

1. In Notion, go to `Settings` → `Connections` → open the `Workspace` tab.

2. Select `Connect` on the `Datadog` tile → `Connect to Datadog`.

   * **Note:** At this time, one Datadog instance can only be connected to one workspace at most.

3. Authenticate with your Datadog credentials by selecting your organization.

4. You can find additional instructions [here](https://docs.datadoghq.com/integrations/?q=notion).

**Panther**

* Log into your Panther console.

* In the left side navigation of your Panther Console, select `Configure` → `Log Sources` → `Create New`.

* Search for `Notion`, then select the Notion tile.

* In the slide-out panel, the `Transport Mechanism` dropdown in the upper right corner will be pre-populated with the HTTP option. Select `Setup`.

* Follow [Panther's instructions for configuring an HTTP Source](https://docs.panther.com).

  * Note: You will be required to use [HMAC authentication](https://dev.notion.so/~/changes/Dd8nx2iqd1Pp2OzWJaWk/data-onboarding/data-transports/http#hmac).

* The `Header Name` associated with your `Secret Key Value` will be locked with a value of `x-notion-signature`.

* Be sure to securely copy your `Secret Key Value` and store it in a safe location. You'll need this to configure the connection in Notion.

* You can find additional instructions [here](https://docs.panther.com/~/changes/Dd8nx2iqd1Pp2OzWJaWk/data-onboarding/supported-logs/notion).

**Splunk**

* **Note:** Depending on your Splunk instance type, the `Webhook URL` and `Secret code` may vary. Currently, we support Splunk Cloud or Enterprise licenses (not On-Prem).

* Retrieve `Webhook URL` (HEC URL).

* Log into your Splunk instance.

* Navigate to the `Search & Reporting` app and select `Settings`.

* Under the `Data` section, click on `HTTP Event Collector`.

* Locate the desired HEC configuration and select its name, or create a new one.

* On the configuration page, you'll find the HEC URL. Typically, it begins with https\:// followed by the hostname or endpoint provided by Splunk, and ends with the HEC token. For example: `https://<your-splunk-instance>.splunkcloud.com:8088/services/collector/event`

* Retrieve the `Secret code` (HEC token) and repeat the steps above.

* On the configuration page, you'll find the HEC token, a long alphanumeric string under the `Token` field.

* You can find additional instructions [here](https://docs.splunk.com/Documentation/Splunk/9.0.4/Data/UsetheHTTPEventCollector#Create_an_Event_Collector_token_on_Splunk_Cloud_Platform).

**Sumo Logic**

* Log into your Sumo Logic instance.

* Select `Manage Data` → `Collection`.

* Navigate to `Setup Wizard` and select `Get started`.

* When presented with `Data Type`, select `Your Custom App` → `HTTPS Source`.

* Copy the `HTTP Source URL` into Notion settings.

* You can find additional instructions [here](https://help.sumologic.com/docs/send-data/hosted-collectors/http-source/logs-metrics/upload-logs/).

### Setup tips by partner

To set up most of this integration, you will need to manually provide a webhook URL or token.

* [Datadog](https://docs.datadoghq.com/integrations/notion): The `Webhook URL` and `Token` are not required.

* [Panther](https://docs.panther.com/~/changes/Dd8nx2iqd1Pp2OzWJaWk/data-onboarding/supported-logs/notion): Enter the HTTP Source URL in the `Webhook URL` field and the HMAC Authentication Secret Key Value in the `Token` field.

* Splunk: Enter the HTTP Event Collector (HEC) URL in the `Webhook URL` field and the HTTP Event Collector (HEC) token in the `Token` field.

* Sumo Logic: Enter the HTTP Event Collector (HEC) URL in the `Webhook URL` field. A token is required.

## Available SIEM events

Below is a comprehensive list of webhook events that will be available in your SIEM platform once you set up the Notion SIEM connection. All events available in your SIEM platform will correspond to an audit log event. The glossary will help you understand the specific events that are being tracked and how they relate to your organization's security posture. Use this information to fine-tune your dashboards, alerts, and incident management processes.

### Event types

Events are split into five main categories:

* **Page events**: This includes events users take on a single Notion page.

* **Teamspace events**: This includes events users take on one or more teamspaces.

* **Workspace events**: This includes events users take on an entire Notion workspace.

* **User events**: This includes events about accounts of users in the workspace.

* **Integration events**:**&#x20;**&#x54;his includes events about internal integrations associated with the workspace.

### Page audience

For page events, the page audience describes the visibility level of the target page. The audience captured will be one of the following:

* **Private**: The page is not shared with other users.

* **Internal**: The page is shared with other members of the workspace only.

* **External**: The page is shared with one or more guests outside of the workspace and/or with an integration bot.

* **Public**: The page is shared to the web.

### SIEM event glossary

**Workspace**

* **workspace.audit\_log\_exported**: A workspace owner exported the workspace’s audit log.

* **workspace.content\_analytics\_exported**: A workspace owner exported workspace content analytics.

* **workspace.content\_exported**: Workspace content for a page or for the entire workspace was exported by a workspace user.

* **workspace.content\_search\_exported**: The results of a [content search](https://www.notion.com/help/admin-content-search) for a workspace was exported by a workspace owner.

* **workspace.content\_search\_queried**: A workspace owner used the [admin content search](https://www.notion.com/help/admin-content-search) functionality to find workspace content. Content searches can retrieve content from public and private pages.

* **workspace.domain\_management.transfer\_request\_status\_updated**: A transfer request for a workspace created by a user with a verified domain was updated. (See [this article](https://www.notion.com/help/domain-management) for more information.)

* **workspace.external\_account\_connected**: A public/external integration was connected to the workspace.

* **workspace.external\_account\_disconnected**: A public/external integration was disconnected from the workspace, or a workspace owner removed access to a public integration for all users in the workspace.

* **workspace.group.permissions.member\_added**: A workspace owner or membership admin added a new member to a group. A group is a defined collection of workspace members.

* **workspace.group.permissions.member\_removed**: A workspace owner or membership admin removed a member from a group.

* **workspace.integration\_added**: An integration was added to the workspace for the first time. (This event will only be emitted the first time an integration is added to a workspace.)

* **workspace.integration\_removed**: All bots for a specific public integration are removed.

* **workspace.members\_exported**: A list of workspace members was exported.

* **workspace.membership\_request\_resolved**: A membership request from a member to add a new person to the workspace was resolved, i.e. the workspace owner either approved or denied the request.

* **workspace.permissions.guest\_removed**: A guest was removed from the workspace by a workspace owner or membership admin.

* **workspace.permissions.member\_added**: A user accepted an invite to join a new workspace and have been added to the member list.

* **workspace.permissions.member\_invited**: A user was invited to a workspace by a workspace owner or membership admin.

* **workspace.permissions.member\_removed**: A member was removed from the workspace by a workspace owner or membership admin.

* **workspace.permissions.member\_role\_updated**: A member’s role in a workspace was updated. Roles include member, membership admin, workspace owner.

* **workspace.private\_content\_transferred**: The private content of a deprovisioned workspace member was transferred to a new location. Enterprise workspace owners can [transfer content](https://www.notion.com/help/transfer-content-deprovisioned-user) from deprovisioned users.

* **workspace.saml\_sso\_idp\_metadata\_url\_added**: The IdP (Identity Provider) metadata URL was added by a workspace owner.

* **workspace.saml\_sso\_idp\_metadata\_url\_updated**: The IdP (Identity Provider) metadata URL was updated by a workspace owner.

* **workspace.saml\_sso\_idp\_metadata\_xml\_added**: The IdP (Identity Provider) metadata XML (Extensible Markup Language) was added by a workspace owner.

* **workspace.saml\_sso\_idp\_metadata\_xml\_removed**: The IdP (Identity Provider) metadata XML (Extensible Markup Language) was removed by a workspace owner.

* **workspace.saml\_sso\_idp\_metadata\_xml\_updated**: The IdP (Identity Provider) metadata XML (Extensible Markup Language) was updated by a workspace owner.

**Teamspace**

* **teamspace.archived**: A teamspace was archived.

* **teamspace.created**: A teamspace was created.

* **teamspace.permissions.custom\_group\_role\_added**: A teamspace owner added custom permissions for a group that is added to the teamspace.

* **teamspace.permissions.custom\_group\_role\_removed**: A teamspace owner removed custom permissions for a group that is added to the teamspace.

* **teamspace.permissions.custom\_group\_role\_updated**: A teamspace owner updated custom permissions for a group that is added to the teamspace.

* **teamspace.permissions.custom\_member\_role\_added**: A teamspace owner added custom page permissions for a specific teamspace member.

* **teamspace.permissions.custom\_member\_role\_removed**: A teamspace owner removed custom page permissions for a specific teamspace member.

* **teamspace.permissions.custom\_member\_role\_updated**: A teamspace owner updated custom page permissions for a specific teamspace member.

* **teamspace.permissions.default\_member\_role\_updated**: The default teamspace page permissions applied to teamspace members was updated.

* **teamspace.permissions.default\_workspace\_role\_added**: A teamspace owner gave page permissions to workspace users in a closed teamspace.

* **teamspace.permissions.default\_workspace\_role\_removed**: A teamspace owner removed page permissions from workspace users in a closed teamspace.

* **teamspace.permissions.default\_workspace\_role\_updated**: A teamspace owner updated the default page permissions for all workspace users in a teamspace.

* **teamspace.permissions.group\_added**: A group was added to a teamspace. A group is a defined collection of users.

* **teamspace.permissions.group\_removed**: A group was removed from the teamspace by a teamspace owner.

* **teamspace.permissions.member\_added**: A user was added to the teamspace. The user either joined an open teamspace or was added by another member. The event payload will specify “as Teamspace owner” if the user was added with teamspace owner privileges.

* **teamspace.permissions.member\_removed**: A teamspace member was removed from the teamspace. Removal can be triggered by a member leaving or being removed by a teamspace owner.

* **teamspace.permissions.member\_role\_updated**: A teamspace member’s role was updated. Roles include Teamspace Member and Teamspace Owner.

* **teamspace.restored**: A previously archived teamspace was restored.

* **teamspace.settings.allow\_content\_export\_setting\_updated**: The setting to allow exporting teamspace content was enabled or disabled.

* **teamspace.settings.allow\_guests\_setting\_updated**: A teamspace owner enabled or disabled the ability to add guests (non-members) to a specific teamspace.

* **teamspace.settings.allow\_public\_page\_sharing\_setting\_updated**: The setting to allow publicly sharing a teamspace page was enabled or disabled by a workspace owner.

* **teamspace.settings.allow\_sidebar\_editing\_setting\_updated**: The setting that determines who can edit the sidebar was updated. The setting will indicate if any teamspace member can edit the sidebar or if editing is only available for teamspace owners.

* **teamspace.settings.default\_setting\_updated**: The teamspace’s default permissions settings were updated.

* **teamspace.settings.description\_updated**: The teamspace description was updated.

* **teamspace.settings.icon\_updated**: The teamspace icon was updated.

**Page**

* **page.button\_automation\_created**: A repeating [button](https://www.notion.com/help/template-buttons) automation was created on a page.

* **page.button\_automation\_updated**: A repeating [button](https://www.notion.com/help/template-buttons) automation was updated on a page.

* **page.content\_edited**: The content of an existing page was edited by a user. Page content is also known as a [block](https://www.notion.com/help/what-is-a-block). Content edit events are consolidated into one event every minute while edits are occurring.

* **page.created**: A new page nested under a parent page was created by a user.

* **page.deleted**: A page was deleted by a user. Deleted pages may be restored in the future.

* **page.discussion.comment.created**: A comment on a page was created by a user.

* **page.discussion.comment.deleted**: A comment on a page was deleted by a user.

* **page.discussion.comment.updated**: A comment on a page was edited by a user. Comment edit events are consolidated into one event every minute while edits are occurring.

* **page.exported**: A page was exported to a PDF, HTML, or Markdown file by a user.

* **page.file\_deleted**: A file was deleted from the page by a user.

* **page.file\_downloaded**: A file in a page was downloaded or opened by a user.

* **page.file\_uploaded**: A file was uploaded to a page by a user.

* **page.moved**: A page was relocated by a user, i.e. the page’s parent page updated.

* **page.permissions.group\_role\_added**: A workspace group’s page permissions were added, which will allow them to access the page.

* **page.permissions.group\_role\_removed**: A group’s page permissions were removed for a page, which will restrict them from having access to the page.

* **page.permissions.group\_role\_updated**: A workspace group’s page permissions were updated, changing their type of access.

* **page.permissions.guest\_role\_added**: A guest’s page permissions were added, which will allow them to access the page.

* **page.permissions.guest\_role\_removed**: A guest’s page permissions were removed, which will restrict them from having access to the page.

* **page.permissions.guest\_role\_updated**: A guest’s page permissions were updated, changing their type of access.

* **page.permissions.integration\_role\_added**: A user added an [integration](https://www.notion.com/help/add-and-manage-connections-with-the-api) to a page. Integrations of any type — internal or public/external — will trigger this event.

* **page.permissions.integration\_role\_removed**: A user removed the page permissions for an integration (or “connection”), which will restrict the integration from having access to the page. Integrations of any type — internal or public/external — will trigger this event.

* **page.permissions.integration\_role\_updated**: A user updated the page permissions of an integration (or “connection”). Integrations of any type — internal or public/external — will trigger this event.

* **page.permissions.member\_role\_added**: A member’s page permissions were added, which will allow them to access the page.

* **page.permissions.member\_role\_removed**: A member’s page permissions were removed, which will restrict them from having access to the page.

* **page.permissions.member\_role\_updated**: A member’s page permissions were updated, changing their type of access.

**User and account**

* **user.deleted**: A user account was deleted. This event will be sent to any workspace with which the account is associated.

* **user.login**: A user logged into an account.

* **user.logout**: A user logged out of an account.

* **user.settings.login\_method.mfa\_backup\_code\_updated**: A user updated their MFA (Multi-Factor Authentication) back-up code settings.

* **user.settings.login\_method.mfa\_sms\_updated**: A user updated their MFA (Multi-Factor Authentication) SMS (Short Message Service) settings.

* **user.settings.login\_method.mfa\_totp\_updated**: A user updated their MFA (Multi-Factor Authentication) TOTP (Time-based One-Time Password) settings.

* **user.settings.login\_method.password\_added**: A user added a password to their account for login purposes.

* **user.settings.login\_method.password\_removed**: A user removed a password from their account.

* **user.settings.login\_method.password\_updated**: A user updated their password.

* **Authorized via Workspace SAML**: Verified workspace access via SAML SSO.

**Integration**

* **integration.created**: A developer created an internal integration and associated it with the workspace.

* **integration.deleted**: An internal integration associated with the workspace was deleted. Deletions can occur in the My Integrations dashboard, or an admin can remove access to an internal integration for all users.

* **integration.secret\_reset**: The authentication secret for an internal integration was reset (or “refreshed”).

## Compliance partner integrations

### Drata

If your policy content lives in Notion, you can connect Notion with Drata to manage that content. Changes you make to policies in Notion will be synced with Drata.

**Note:**

* For the best experience, try to avoid using database blocks in Notion pages that you sync with Drata.

* You can’t sync any private Notion pages to Drata.

* If a policy stored in Notion is deleted by a user, you’ll be prompted to import a new file in Drata.

To integrate Notion with Drata:

1. In Notion, go to `Settings`→ `Connections` → open the `Workspace` tab.

2. Select `Connect` on the `Drata` tile.

3. Give Drata permission to access your Notion workspace, then select `Allow access`.

Learn more about the integration [here →](https://help.drata.com/en/articles/9294590-connect-to-notion)


## FAQs

### I just made updates to a page, but I didn't receive a Slack notification.

There's a five minute delay built in to prevent these notifications from getting too noisy! email protected if you still aren't seeing them show up! We'll help out.


### I'm trying to enable the integration in Slack's App Directory, but it just takes me to Notion's homepage.

Sorry for the confusion 🙈You can't enable the integration from Slack. You'll need to turn it on inside Notion with the instructions on this page.


### What permissions are granted when the Slack integration is enabled? 

Notion's integration with Slack operates on a per-page basis. When you enable the Slack integration for a specific page in your Notion workspace, you're granting Notion access to publish updates to the Slack channel of your choosing.


### Can I add more than one login for a link preview integration?

You can! You can do so via `Settings` → `My connections`. For the desired integration, select “Connect another account”.

**Note**: Some applications do not support multi-account login in the browser (e.g. GitHub), so you might need to logout of whichever account is currently logged in on your browser to be prompted to login with a different account.

We’ll determine which of your accounts to use to preview given resources and show an error if none of them are successful.


### I’m receiving a general  “Can’t load preview” error in my link preview.

Run through these steps to try to resolve.

1. Confirm you’ve authenticated with the correct account for the resource.

2. Confirm no access restrictions for your organization.

3. Delete your integration in Notion via the `My connection` settings. You may also want to revoke the integration the corresponding platform: [GitHub, ](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth)[Jira, ](https://confluence.atlassian.com/jirasoftwareserver/allowing-oauth-access-939938965.html#AllowingOAuthaccess-revokingtokensRevokingOAuthaccesstokens)[Slack, ](https://slack.com/help/articles/360003125231-Remove-apps-and-custom-integrations-from-your-workspace)[Asana, ](https://asana.com/guide/help/fundamentals/settings#gl-apps)[Trello.](https://help.trello.com/article/1183-revoking-a-trello-token)

4. Try to unfurl again.

5. Finally, if all else fails, reach out to support! Unfortunately, we cannot help resolve errors related to **Access denied** or **Content not found.** Please provide the following information when reaching out to support:

   * Integration you’re trying to use

   * Error message and code

   * URL you’re trying to preview (if possible)


### I’m receiving an “Access denied” or “Content not found” error in my link preview.

There are two possible reasons for this:

1. You may not have authenticated with the account that has access. You can connect multiple accounts either through `Settings` → `My connections`, or the error drop down.

2. Your organization may have limited access to content via 3rd party integrations or IP addresses. Please confirm with your workspace or organization administrator and ask to have Notion’s integration approved if this is the case. Here are instructions for specific integrations: [GitHub, ](https://docs.github.com/en/organizations/keeping-your-organization-secure)[Jira, ](https://support.atlassian.com/security-and-access-policies/docs/manage-your-users-third-party-apps/)[Slack, ](https://slack.com/help/articles/222386767-Manage-app-approval-for-your-workspace)[Asana, ](https://asana.com/guide/help/premium/admin-console#gl-apps)[Trello.](https://help.trello.com/article/1078-enterprise-admin-dashboard)


### What do security and compliance connections have access to in my workspace?

* SIEM integrations will be authorized to receive event logs on all workspace activity.

* DLP integrations will be authorized to:

  * Receive event logs on all workspace activity.

  * Vew content, view comments, edit content, edit comments, and create comments in **all&#x20;**&#x70;ages.

  * See basic information about all workspace members and guests, including their names, profile images, and email addresses.


### I’m not seeing SIEM events even after connecting. What should I do?

* Sometimes, the event may appear under a different label or in a different place than where you expect. We recommend triggering a new page event and querying in your SIEM querying language for `type: "page.created"` or `email: "[your email address]"` for all events triggered by you.

* When a new Panther <!-- -->instance is created, it can take up to 10 minutes for it to be fully ready to receive events.


### What happens to my SIEM events if my SIEM provider has an outage?

In the event of an outage, you should reach out to your SIEM provider for more information.


### Why can’t I connect more than one instance of the same SIEM provider?

SIEM provider can only be connected to a single Notion workspace at this time.


### Having trouble setting up your SIEM connections? Here are some common issues.

* Incorrect webhook URL

* Incorrect HMAC or HEC token

* Do not have admin privileges in your SIEM provider

* SIEM provider is an on-prem instance
