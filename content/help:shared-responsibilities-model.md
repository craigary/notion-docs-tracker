---
title: "Shared Responsibilities Model"
emoji: null
description: "This Shared Responsibilities Model makes sure that Notion and its users work together to create a safe and effective workspace experience. Please refer to Notion’s MSA and DPA for defined terms."
url: "https://www.notion.com/help/shared-responsibilities-model"
key: "help:shared-responsibilities-model"
coverImage: null
category: "Privacy & security"
categoryKey: "category:security-and-privacy"
---

This Shared Responsibilities Model makes sure that Notion and its Customers work together to create a safe and effective Workspace experience.

Please refer to Notion’s [MSA](https://app.notion.com/p/notion/Master-Subscription-Agreement-4e1c5dd3e3de45dfa4a8ed60f1a43da0?source=copy_link) and [DPA](https://app.notion.com/p/notion/Data-Processing-Addendum-361b540101274b1fa7e16b90402b0d99?source=copy_link) for defined terms.

# 1. What is the Notion Shared Responsibilities Model?

Notion is a single space where you can think, write, and plan. As an all-in-one space that allows users to build their own tools for doing their best work, users entrust Notion with professional and personal information and, through [Connections](https://www.notion.com/connections) and [AI features](https://www.notion.com/help/guides/category/ai), with access to information held in other systems.

A Shared Responsibilities Model (SRM) is a framework that outlines the division of responsibilities between a service provider and its users. It clearly defines which security and operational tasks are handled by each party.

This document outlines the responsibilities shared between Notion and its Customers in protecting and maintaining the security of Notion's systems, user accounts, and Workspaces.

# 2. Why the Notion SRM is important

The Notion SRM provides clarity for both Notion and its Customers on which party is responsible for specific processes, operations or controls. This allows Notion to focus on, and take responsibility for, the areas where we can best protect the confidentiality, integrity and availability of Notion's systems, while identifying where Customers are better placed to secure their own accounts, Workspaces and Customer Data. Overall, this enhances security and efficiency in protecting Notion systems and accounts.

The SRM also promotes transparency in how Notion's Services are delivered, giving Customers the information they need to assess Notion within their own risk and assurance processes, and supporting both Notion and its Customers in meeting their respective obligations under applicable local, regional, national and international regulations.

# 3. Structure of Notion's SRM

In short: Notion is responsible for building, operating, and protecting the architecture of the Notion Service. Customers are responsible for how they configure and use that Service including protecting their credentials, managing who has access to their Workspaces and Customer Data, and adhering to the [Content & Use policy](https://notion.notion.site/Content-Use-Policy-1b9a773d5583486cb5c1d39a8d777a55?pvs=143) and other relevant [Terms](https://notion.notion.site/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac?pvs=143).

Some responsibilities described in this document can only be carried out by Customers with elevated permissions in a Workspace or organization. It is the User's responsibility to assign those permissions appropriately.

The tools available to meet a given responsibility vary by plan. Where a capability is limited to specific Subscription Plans, Customers on Subscription Plans without a given capability remain responsible for the underlying outcome, and should consider alternative controls.

# 4. Summary of the SRM Controls and Responsibilities

| **Control Category**                                | **Notion Responsibilities**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | **User Responsibilities**                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Access & authentication**                         | • Provide and operate [authentication](https://www.notion.com/help/log-in-and-out) mechanisms, including password, single sign-on ([SSO](https://www.notion.com/help/saml-sso-configuration)), and two-factor authentication options.• Manage session handling.• Control and monitor Notion personnel access to production systems.                                                                                                                                                                                  | • Protect login credentials and avoid reuse across services.• Maintain individual rather than shared accounts.• Enable two-factor authentication.• Configure SSO and provisioning, and deprovision members promptly on departure.                                                                                                                                                                                                                                     |
| **Authorization, sharing & collaboration**          | • Provide and enforce the [permission](https://www.notion.com/help/sharing-and-permissions) model, sharing controls, [guest access](https://www.notion.com/help/add-members-admins-guests-and-groups) controls, and admin settings that govern public publishing.                                                                                                                                                                                                                                                    | • Apply appropriate permissions to pages and Customer Data.• Manage guest and external collaborator access.• Review access periodically.• Set Workspace-level sharing and publishing policies.                                                                                                                                                                                                                                                                        |
| **Data governance & privacy**                       | • Process Customer Data in accordance with the applicable agreement, including the [DPA](https://notion.notion.site/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac?pvs=143) and other applicable laws.• Encrypt data in transit and at rest.• Provide deletion functionality and delete or return in accordance with the applicable agreement and retention requirements.• Maintain the [subprocessor list](https://notion.notion.site/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734?pvs=143). | • Determine what Customer Data is appropriate to store in Notion.• Set and apply retention practices.• [Delete](https://www.notion.com/help/duplicate-delete-and-restore-content) Customer Data that is no longer required.• Submit accurate Account Information.• Act as controller for Customer Data, including handling data subject requests within the Workspace.                                                                                                |
| **Availability, backup & recovery**                 | • Maintain Service availability and publish [status](https://www.notion-status.com/).• Operate platform-level backup and disaster recovery for the Notion Service.                                                                                                                                                                                                                                                                                                                                                   | • [Recover](https://www.notion.com/help/duplicate-delete-and-restore-content) individual Customer Data using version history, trash, and restore features.• Maintain an independent copy of critical Customer Data where internal policy or regulation requires it, using [backup](https://www.notion.com/help/back-up-your-data), [export](https://www.notion.com/help/export-your-content) or the [API](https://developers.notion.com/guides/get-started/overview). |
| **Logging & monitoring**                            | • Generate and retain security and infrastructure logs for Notion's own systems.• Monitor for threats to the platform.                                                                                                                                                                                                                                                                                                                                                                                               | • Review Workspace [audit logs](https://www.notion.com/help/audit-log) and act on unexpected activity.• Export log data where longer retention is required.• Configure log export and any SIEM [integrations](https://www.notion.com/help/add-security-and-compliance-integrations).                                                                                                                                                                                  |
| **Application, infrastructure & endpoint security** | • Develop, test, patch, and harden the Notion Service and underlying infrastructure.• Manage network security. Secure Notion's corporate systems and endpoints.                                                                                                                                                                                                                                                                                                                                                      | • Maintain supported and appropriately patched endpoint environments including [web browsers](https://www.notion.com/help/notion-for-web).• Review any local controls that could block Notion client updates to browser or [desktop](https://www.notion.com/help/notion-for-desktop) versions.                                                                                                                                                                        |
| **Integrations, API & AI**                          | • Provide the [API](https://developers.notion.com/guides/get-started/overview), [integration](https://www.notion.com/connections) platform, and [AI features](https://www.notion.com/help/guides/category/ai).• Provide admin controls governing which integrations and AI features can be enabled.                                                                                                                                                                                                                  | • Decide which integrations, connections, and AI features to enable.• Review permissions and scopes before authorizing. Manage and rotate internal integration tokens.• Govern what Customer Data is made available to connected systems.                                                                                                                                                                                                                             |
| **Incident response & notification**                | • Detect, investigate, and respond to security incidents affecting Notion.• Notify affected customers in line with the DPA and applicable law.                                                                                                                                                                                                                                                                                                                                                                       | • [Report suspected vulnerabilities](https://app.notion.com/p/notion/Responsible-Disclosure-Policy-5f18bb6b86804eaf989c006131778b9c?source=copy_link), compromised accounts, and misuse to Notion promptly.• Respond to incidents affecting the Workspace, including any resulting regulatory or data subject notifications.                                                                                                                                          |
| **Compliance & certification**                      | • Maintain certifications and engage third-parties to perform independent audits.• Make security and compliance documentation [available](https://trust.notion.com).                                                                                                                                                                                                                                                                                                                                                 | • Determine whether Notion is suitable for the data and regulatory context in question.• Meet obligations arising under laws applicable to the User.                                                                                                                                                                                                                                                                                                                  |
| **Acceptable use & content**                        | • Publish and enforce the [Content & Use policy](https://notion.notion.site/Content-Use-Policy-1b9a773d5583486cb5c1d39a8d777a55?pvs=143) and other relevant [Terms](https://notion.notion.site/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac?pvs=143).                                                                                                                                                                                                                                                          | • Use Notion within its intended capacity, without attempting to circumvent or test security controls.• Comply with the Content & Use Policy and Terms at all times.                                                                                                                                                                                                                                                                                                  |

# 5. Detailed Notion & User Responsibilities

## Access & authentication

Notion provides the authentication methods and administrative controls that govern how people sign in to Notion and how Workspace access is granted and removed. Customers are responsible for selecting and configuring the controls appropriate to their organization, and for protecting the credentials used to access their accounts.

**Notion Responsibilities**

* Provide and operate authentication methods, including email and password, Google and Apple sign-in, and SAML 2.0 single sign-on for Workspaces on the Business and Enterprise Plans.

* Provide two-factor authentication for accounts that sign in with a password, using an authenticator app or a text message code.

* Provide SCIM APIs enabling Enterprise organizations to automate the creation, updating, and removal of Users from their identity provider.

* Provide administrative controls governing session duration, forced logout, password reset, account suspension, and domain verification.

* Require verified proof of domain ownership before a domain can be used to control how its user base sign in to Notion.

* Revoke a user's access to Customer Data when that user is removed from the Workspace. Provide controls allowing an organization to terminate sessions and reset credentials across its managed user base.

* Maintain least-privilege access controls across Notion's own infrastructure, and require Notion employees and contractors to be bound by confidentiality obligations.

* Access Customer Data for support purposes only where a user or Workspace owner has granted consent, and expire that consent automatically after a defined period.

**User Responsibilities**

* Protecting login credentials, using strong and unique passwords, and avoiding reuse across other services.

* Maintaining individual accounts rather than shared accounts, and not sharing login information.

* Using two-factor authentication on accounts that sign in with a password.

* Updating credentials in line with internal policy, and promptly where an external credential breach is identified.

* Selecting and configuring the authentication methods appropriate to the organization, including whether single sign-on is enforced.

* Ensuring Workspace access is limited to intended Users, and that access is removed promptly when someone departs or changes role. Automated deprovisioning requires SCIM; where it is not in use, removal is a manual process.

* Setting session duration in line with internal policy, and maintaining a recovery procedure for loss of access to the identity provider.

* [Controlling](https://www.notion.com/help/data-access-consent) whether Notion support can access an account or Workspace, and revoking that access when it is no longer required.

## Authorization, sharing & collaboration

Notion provides the permissions model that determines what an authenticated user can see and do, along with administrative controls that set the boundaries for sharing. Customers are responsible for deciding how that model is applied to their Customer Data, and for reviewing the access that results.

**Notion Responsibilities**

* Provide a permissions model operating at Workspace, teamspace, page, and database level, including permission groups, and enforce it consistently across the product.

* Provide distinct access for members and guests, so that external collaborators can be granted access to specific Customer Data rather than an entire Workspace.

* Provide administrative controls that allow an organization to restrict public page sharing, guest access, export, and the movement or duplication of pages to other Workspaces.

* Provide controls governing who may publish Customer Data to the web, including Notion Sites, forms, and public links.

* Provide visibility tooling that allows an organization to identify who has access to a page, which pages are shared externally or published to the web, and to change those permissions.

* Respect configured Workspace permissions when providing AI and search features.

**User Responsibilities**

* Determining the appropriate level of access for Customer Data, and applying permissions accordingly.

* Deciding whether external collaboration and public publishing are permitted, and configuring the available controls to reflect that decision.

* Understanding how access is inherited. Access granted to a page extends by default to the pages nested within it, and access granted through multiple routes resolves to the highest level granted.

* Reviewing access periodically, including Workspace members, guests, permission groups, Customer Data shared externally, and Customer Data published to the web.

* Removing access to Customer Data when a collaborator's involvement ends, including guests and external collaborators whose access is not managed through the organization's identity provider.

* Ensuring Customer Data published to the web is intended for a public audience, and configuring options such as search engine indexing accordingly.

* Transferring Customer Data held privately by a user before that user departs, or within the limited window during which transfer remains possible. After that window, private Customer Data is generally unrecoverable, and transfer tooling is available only on the Enterprise Plan.

## Data governance & privacy

Notion stores and processes Customer Data on behalf of its Customers and protects it in transit and at rest. Customers determine what data is placed in Notion, how long it is kept, and what legal obligations attach to it.

**Notion Responsibilities**

* Process Customer Data in accordance with the Master Subscription Agreement, the Data Processing Addendum, and applicable data protection law.

* Encrypt Customer Data at rest using AES-256 or an industry-standard algorithm providing equivalent or stronger security, including in cloud storage, database tables, and backups, and encrypt data in transit using TLS 1.2 or greater.

* Maintain and publish a current list of subprocessors.

* Offer data residency for defined categories of Customer Data, allowing eligible organizations to select the region in which that data is stored at rest.

* Refrain from using Customer Data to train Notion's machine learning models, and contractually prohibit AI subprocessors from doing so without explicit customer consent.

* Provide functionality allowing Customers to export, retain, and delete their Customer Data, and delete Customer Data at the end of the contract in accordance with the agreement.

* Enter into a Data Processing Addendum, and a Business Associate Agreement where applicable, with customers who require one.

**User Responsibilities**

* Determining what data is appropriate to store in Notion, and ensuring that regulated data is only stored where the necessary agreements and configuration are in place.

* Establishing and applying retention practices, and deleting Customer Data that is no longer required.

* Configuring the retention and deletion settings available in the product to reflect internal policy.

* Submitting complete and accurate Account Data, and correcting it promptly where errors are identified.

* Meeting the obligations that fall to the controller of the personal data held in a Workspace, including providing privacy information to individuals, establishing a lawful basis for processing, and responding to data subject requests relating to Customer Data.

* Determining whether a specific data residency region is required, requesting it where needed, and understanding which categories of data and which Notion products fall outside that scope.

* Reviewing Notion's [subprocessor list](https://app.notion.com/p/notion/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734).

## Availability, backup & recovery

Notion operates the infrastructure that keeps the Service available and maintains backups of that infrastructure for the purpose of recovering the Service. Customers are responsible for recovering their own Customer Data using the tools Notion provides, and for holding an independent copy of that Customer Data where their own obligations require one.

**Notion Responsibilities**

* Operate the Notion Service in accordance with the availability commitments set out in the Service Level Terms, using redundant infrastructure across multiple availability zones.

* Publish the [operational status](https://www.notion-status.com/) of the Service.

* Maintain automated, encrypted and monitored backups of Customer Data.

* Store backups according to Notion's [published backup-region mapping](https://www.notion.com/help/data-residency) for the selected data residency region. Data residency applies only to the defined categories of Customer Data.

* Maintain and periodically test disaster recovery and business continuity plans.

* Provide in-product recovery tools, including trash and version history, allowing Customers to restore Customer Data themselves.

* Provide export functionality allowing Customers to obtain a copy of their Customer Data.

**User Responsibilities**

* Recovering individual pages and Customer Data using trash and version history, within the retention periods applicable to the User's plan.

* Configuring Customer Data retention settings, where available, to reflect internal policy.

* Maintaining an independent copy of Customer Data where internal policy, contractual commitments, or regulation require retention beyond what the product provides, or require a copy held outside Notion.

* Producing exports on a schedule appropriate to those requirements, and verifying that exports are complete. Customer Data that the exporting account cannot access is not included in an export.

* Retrieving exports within the period the download link remains valid.

* Planning for the possibility of service unavailability as part of the User's own business continuity arrangements.

**What Notion's backups are and are not**

Notion's backups exist to restore the Notion Service. They are not a customer-facing restore point, and they cannot be used to return a Workspace to its state at a chosen moment in time. Recovery of individual Customer Data is performed by Customers through trash and version history. Once Customer Data has passed the applicable trash and retention periods, it is purged and cannot be restored. Customers should not rely on support as a retention mechanism.

An export produces a portable copy of Customer Data in formats such as HTML, Markdown, CSV, or PDF, depending on the export type and plan. It is not a full Workspace backup: importing exported Customer Data will not recreate the Workspace’s original permissions, settings, or complete configuration, and may require manual restructuring.

## Logging & monitoring

Notion generates records of relevant activity within a Workspace and makes them available to the organization. Customers are responsible for reviewing those records, retaining them where required, and acting on what they show.

**Notion Responsibilities**

* Record security and safety-related events occurring across an organization's Workspaces, including the actor, the action, the time, and where available the IP address.

* Retain audit log history within the product for a defined period, and provide export and streaming mechanisms so that Customers can retain it for longer.

* Provide a means of streaming events to a User's own security monitoring platform in real time, and support connections to data loss prevention tools.

* Monitor Notion's own infrastructure, networks, and systems for malicious activity, and maintain internal logging for those systems.

**User Responsibilities**

* Reviewing audit log activity, and investigating and acting on activity that appears unexpected or unauthorized.

* Retaining log data for the period required by Customer’s own internal policy or regulation, by exporting or streaming events before they pass out of the retention window.

* Configuring monitoring, alerting, and any security or compliance connections in the User's own environment, and ensuring those integrations remain operational.

* Defining what constitutes suspicious activity in the context of the organization, and assigning responsibility for reviewing it.

* Reporting suspicious activity to Notion where it may indicate a compromise of the Service.

**What the audit log does and does not cover**

The audit log records events. Log entries and streamed payloads describe actions taken and by whom; they do not contain the Customer Data of pages.

Audit log recording begins when an organization becomes eligible for the feature. Activity that took place beforehand is not retrospectively available.

## Application, infrastructure & endpoint security

Notion develops, operates, and maintains the Notion Service and the infrastructure it runs on, including securing and patching that infrastructure. Customers are responsible for the environments from which they access Notion.

**Notion Responsibilities**

* Develop, test, patch, and maintain the Notion application and the infrastructure supporting it. Updates to the Service are applied by Notion and require no action from Customers.

* Conduct threat modeling and secure design reviews for new releases, and perform code audits, code reviews, and security scanning of the codebase.

* Commission annual independent penetration testing.

* Implement and manage network security across Notion's systems.

* Monitor Notion's infrastructure, networks, and assets for malicious activity.

* Operate a public [vulnerability disclosure program](https://app.notion.com/p/notion/Responsible-Disclosure-Policy-5f18bb6b86804eaf989c006131778b9c?source=copy_link), and commission independent penetration testing.

* Secure Notion's own corporate systems and employee devices, including encryption at rest, endpoint detection and response, and centralized device management.

* Publish Notion client applications and deliver updates to them.

**User Responsibilities**

* Maintaining supported and appropriately patched endpoint environments, including web browsers, and any controls that may prevent Notion client updates.

* Securing the devices and networks used to access Notion, in line with the User's own endpoint security standards.

* Where Notion client updates are managed centrally, ensuring updates continue to be applied in a timely manner. Deferring or disabling automatic updates transfers responsibility for timely patching of the client to the User.

* Ensuring installation configurations do not prevent Users from receiving updates.

* Reporting suspected vulnerabilities in the Notion Service to Notion rather than exploiting or publicly disclosing them.

**Where the boundary sits**

Notion patches the Notion Service. Customers do not apply patches to Notion, and no customer action is required for server-side updates.

**Client&#x20;**&#x61;pplications are different. Notion publishes updates, but whether a given device receives them depends on how that device is configured and managed. Where an organization manages installation or update behavior, keeping clients current is the organization's responsibility.

## Integrations, API & AI

Notion provides an API, an integration platform, and AI features that can act on Customer Data and reach into connected systems. Customers are responsible for deciding which of these to enable, what access to grant them, and how they are governed.

**Notion Responsibilities**

* Provide and maintain the Notion API, integration platform, connections, and AI features.

* Honor user permissions in Notion AI, Notion Agent, and AI Connectors. Custom Agents use their own explicitly granted permissions, which may differ from those of the person interacting with the agent.

* Provide administrative controls governing which integrations and external AI tools may be installed, which agents may be created, and whether AI features are enabled.

* Provide controls to enable or disable AI web search and require confirmation before external web requests.

* Maintain defenses designed to detect and reduce prompt-injection risk, including detection of hidden instructions in third-party content and uploaded files, restrictions on link handling, and additional checks where agents act autonomously.

* Refrain from using Customer Data to train Notion's models, and contractually prohibit AI subprocessors from doing so without explicit customer consent.

* Record integration, connection, agent, and external AI tool activity in the audit log.

**User Responsibilities**

* Deciding which integrations, connections, AI features, and agents are appropriate for the organization, and configuring the available controls to reflect that decision.

* Reviewing the access and capabilities requested by an integration or connection before authorizing it, and confirming that the third-party service meets the User's own vendor requirements.

* Managing internal integration tokens, including restricting their distribution, rotating them, and revoking those no longer required.

* Governing the creation and configuration of agents, including what Customer Data and connected tools each agent can reach, and reviewing that access periodically.

* Customers must ensure that agent permissions are scoped appropriately.

* Determining whether data-retaining models may be enabled for features that require them.

* Ensuring Customer Data made available to Notion through connected systems is appropriate for that purpose, and that access granted in the connected system is itself correctly scoped.

* Making Users aware that Customer Data originating outside the Workspace, including web pages and uploaded files, may attempt to influence AI behavior.

**What Customers should understand about connected data**

Access granted through a connection is only as narrow as the permissions granted in the connected system. Notion enforces the permissions reported by the connected system but does not remediate overly broad source-system permissions.

Permission changes in connected systems are reflected in Notion after a synchronization interval rather than immediately, and newly added or deleted Customer Data may take time to appear or become unavailable.

## Incident response & notification

Notion is responsible for the security of the Notion service and for notifying customers where an incident affects their Customer Data. Customers are responsible for how they respond to incidents involving their own accounts, Workspaces, and Customer Data, including any notifications they are required to make.

**Notion Responsibilities**

* Maintain a documented incident response plan, and test it periodically.

* Detect, triage, investigate, contain, and remediate security incidents affecting Notion's systems and the Customer Data Notion holds.

* Notify affected customers of security incidents in accordance with the Data Processing Addendum and applicable law.

* Conduct post-incident review, including root cause analysis, and apply the findings to Notion's controls and response plan.

* Publish the operational status of the service and communicate availability incidents.

* Operate a vulnerability disclosure program, and triage and remediate reported vulnerabilities.

**User Responsibilities**

* Reporting suspected security incidents, compromised accounts, suspected vulnerabilities, and misuse of the service to Notion promptly, through the appropriate channel.

* Detecting and responding to incidents occurring within the User's own Workspaces and accounts, including compromised credentials, inappropriate sharing, and misuse by internal Users.

* Maintaining the User's own incident response arrangements, and defining who is responsible for acting on activity identified in Notion.

* Taking containment action available within the product, including removing access, revoking sessions, resetting credentials, revoking integration tokens, and withdrawing published Customer Data.

* Preserving relevant evidence, including exporting audit log records before they pass out of the retention window.

* Determining whether an incident triggers a notification obligation owed by the User to a regulator, customer, or affected individual, and making that notification.

* Keeping administrative and security contact details current, so that notifications from Notion reach the right people.

* Reporting suspected vulnerabilities to Notion rather than exploiting them or disclosing them publicly.

**Which party detects what**

Notion monitors its own infrastructure and can detect incidents affecting the Service. Notion cannot determine whether an otherwise valid Workspace action was authorized under the User's internal policies. Customers are responsible for monitoring Workspace activity and responding to misuse.

This includes incidents such as a member publishing confidential Customer Data, a departing employee exporting data, or a credential being misused by its legitimate holder. Detecting and responding to these events depends on the User's review of the activity records and controls available to them.

## Compliance & certification

Notion maintains an information security and privacy program that is independently audited, and makes the resulting documentation available. Customers determine whether Notion is appropriate for their own regulatory obligations and configure it accordingly.

**Notion Responsibilities**

* Maintain independently assessed security and privacy programs in accordance with applicable audit and certification cycles.

* Make compliance documentation, including audit reports and certifications, available to customers and prospective customers via the [Notion Trust Center](https://trust.notion.com).

**User Responsibilities**

* Determining whether Notion is suitable for the data the User intends to store and the regulatory obligations that apply to them.

* Entering into the agreements required for that use, including a Data Processing Addendum or Business Associate Agreement where applicable.

* Applying the configuration required by those agreements, including enabling any compliance-specific settings and the security features on which they depend.

* Completing the User's own assessments, including vendor risk assessment and any data protection impact assessment required by law.

* Reviewing Notion's certifications, audit reports, and subprocessor list as part of the User's own assurance and change management processes.

* Demonstrating to the User's own auditors and regulators that the User's configuration and use of Notion meets the obligations that apply to them.

**What certification covers**

Notion's independent third party certifications and audit reports cover the controls Notion operates. They do not extend to how an individual organization configures or uses Notion.

A Workspace holding regulated data is not compliant by virtue of Notion holding a certification. Where an obligation depends on configuration, such as restricting sharing, enforcing single sign-on, retaining audit records, or limiting where data is stored, meeting it remains the User's responsibility.

## Acceptable use & content

Notion sets the terms under which the service may be used and enforces them. Customers are responsible for their own use of Notion and for the Customer Data held in their Workspaces.

**Notion Responsibilities**

* Publish and maintain the [Content & Use policy](https://notion.notion.site/Content-Use-Policy-1b9a773d5583486cb5c1d39a8d777a55?pvs=143), relevant [Terms](https://notion.notion.site/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac?pvs=143), and related policies.

* Provide a mechanism for anyone viewing a public Notion page to report Customer Data they believe is prohibited.

* Investigate reports, and remove Customer Data or restrict access where a violation is identified.

* Apply additional scrutiny to categories of use associated with higher rates of abuse, and suspend or discontinue access where necessary to protect the availability of the Service.

**User Responsibilities**

* Using Notion in accordance with the Terms and the Content & Use Policy, and ensuring that people using Notion under the User's subscription do the same.

* Ensuring that Customer Data stored in, shared from, or published through Notion complies with those policies and with applicable law.

* Moderating Customer Data contributed by others where the User distributes user-generated Customer Data through Notion.

* Using Notion within its intended capacity, and not attempting to circumvent, disable, or interfere with its security controls.

* Conducting any security testing of Notion only through Notion's vulnerability disclosure program and within its terms.

* Using support and reporting channels in good faith.
