---
title: Enterprise Search security & privacy practices
emoji: 🔒
description: Learn about our security and privacy practices for Enterprise Search, which allows you to find information from apps that you connect to Notion 🔒
url: https://www.notion.com/help/enterprise-search-security-and-privacy-practices
key: help:enterprise-search-security-and-privacy-practices
coverImage: https://images.ctfassets.net/spoqsaf9291f/6cOVzKdeMZt3WUSzjOlxYv/f209d951b6b63650d7f3eb76d0ec5f25/Reference_Visuals.png
category: Notion AI
---

Notion's Enterprise Search enables your workspace to securely search and analyze content from connected applications (like Slack, Microsoft Teams, Jira, and more) via [Notion AI Connectors](https://www.notion.com/help/notion-ai-connectors). This document provides comprehensive security and privacy information for teams evaluating Notion's Enterprise Search capabilities.

Enterprise Search and AI Connectors follow [Notion’s AI Security & Privacy practices](https://www.notion.com/help/notion-ai-security-practices).

## Architecture overview

Notion AI Connectors use a secure, privacy-preserving architecture to index and search your connected data.

Notion receives an embedding for data coming in through connected apps with AI Connectors and stores it in a vector database (e.g., Turbopuffer). The vector database is a data store optimized for embeddings that enables fast lookup of the most relevant pages given a user request.

![hc: enterprise search architecture overview](https://images.ctfassets.net/spoqsaf9291f/pjSfUdZf4Xc91YpL3qh0s/1c3f4fc7be59672c0df13466c7b9fa43/AI_Connector_Architecture_from_Enterprise_Search_Security___Privacy_Practices.png)

### **Key architecture components**

**Secure API connections**

* OAuth 2.0 authentication with Microsoft, Atlassian, and Slack

* All connections use TLS 1.2 or greater encryption in transit

* Zero-retention API calls to prevent data storage at the connector level

**Embedding**

* Content is processed into embeddings (numerical representations) that preserve meaning while protecting privacy

* Uses OpenAI's zero-retention embeddings API

* For details on how embeddings work, see [this article](https://www.notion.com/help/notion-ai-security-practices#embeddings)

**Vector database**

* Embeddings stored in Turbopuffer, a SOC 2 Type 2 certified vector database

* Enables fast, semantic search while maintaining security

* Complete data isolation between customer workspaces

**Query process**

* All queries respect user permissions for each connected app (permissions sync periodically; see [individual AI Connector documentation](https://www.notion.com/help/category/notion-ai) for specific details)

* Results filtered based on user's access rights in both Notion and connected apps

* No caching of sensitive content

### Security principles

**Data encryption**

* Encryption keys managed by Notion's key management infrastructure

* Embeddings in vector databases are encrypted at rest

**In transit**

* When you use Notion AI, your data is encrypted in-transit using TLS 1.2 or greater

* End-to-end encryption between Notion and all sub-processors

### Permission synchronization

* Permissions checked at query time, not just during indexing

* User mapping between Notion and connected services verified continuously

* Changes in source system permissions reflected within 1 hour (can take longer for large workspaces)

* Deleted content will become unsearchable; this can take around 30 minutes to one hour. See [individual AI Connector documentation](https://www.notion.com/help/category/notion-ai) for specific details.

## Data protection and privacy

### Data retention and deletion

**Automatic deletion timelines**

* When you disconnect a connector: Data deleted within 24 hours

* When source data is deleted: Immediately unsearchable, embeddings deleted within 60 days

* When a Notion workspace is deleted: All associated embeddings deleted within 60 days

* LLM providers retain data for 0 days (Enterprise) or a maximum of 30 days (all other plans)

**Customer control**

* Request immediate deletion through `Settings` → `Notion AI` → `{connected app}` → `Disconnect`

* Deletion requests processed automatically without manual intervention

* Audit trail available for deletion confirmations

### GDPR and privacy rights

**Data subject rights reported**

* Right to deletion: Remove specific content or entire connector data

* Right to portability: Export embeddings and metadata

* Data Processing Addendum (DPA) available for all customers

### Data synchronization security

**During the initial 36-hour sync period**

* All data transfers use encrypted channels (TLS 1.2+)

* Incremental processing prevents system overload

* No temporary copies stored in unsecured locations

* Rate limiting prevents abuse and ensures stable connections

* Failed syncs automatically retry with exponential backoff

* Progress monitoring available in connector settings

**Security measures during sync**

* Continuous permission validation throughout sync process

* Anomaly detection for unusual data volumes

* Automatic pause if authentication errors detected

* No data accessible via search until sync completes successfully

* Audit trail of all sync activities and errors

## Access controls and permissions

### Identity management

**Authentication requirements**

* Workspace owners required for initial connector setup

* Admin privileges needed in source systems (Slack admin, Google Workspace admin, etc.)

* Our connectors automatically link users who have the same primary email in Notion and in the connected app. Users who do not use the same primary email in the connected app will see a prompt asking them to auth.

* Guest users explicitly excluded from AI Connector access

See [individual AI Connector documentation](https://www.notion.com/help/category/notion-ai) for specific details.

## Third-party security and sub-processors

### Current sub-processors

Notion is model agnostic; we will continue to evaluate and incorporate the latest and greatest AI models. For features like Research Mode, we will use a variety of different models to perform multiple searches in order to provide the most comprehensive responses.

* **OpenAI**: Embeddings generation (zero retention)

* **Anthropic**: LLM queries (zero retention for Enterprise)

* **Turbopuffer**: Vector database (SOC 2 Type 2 certified)

### Models are not trained on your data

* Notion has contractual agreements with all AI providers that prohibit training on customer data

* Notion uses various large language models (LLMs) with zero-retention processing

* Embeddings cannot be reverse-engineered to recover original content

* No customer data is used to improve Notion's or any third-party's models

## Compliance and certifications

### Notion's certifications

**Current compliance**

* SOC 2 Type 2 (annually renewed)

* ISO 27001:2022 certified

* HIPAA compliant (with BAA for Enterprise)

* GDPR compliant with appointed DPO

* CCPA compliant

**AI Connector coverage**

* Included in SOC 2 Type 2 scope

* Covered under ISO 27001 certification

* HIPAA compliance enabled through zero-retention APIs

### Industry standards

**Security frameworks**

* NIST Cybersecurity Framework aligned

* OWASP Top 10 protections

* CIS Controls implementation

* Regular third-party penetration testing

## Incident response

### Response process

**Our commitment**

* 24/7 security incident response team

* Defined escalation procedures

* 72-hour breach notification (or faster per local requirements)

* Root cause analysis for all security events

* Transparent communication through [status.notion.so](http://status.notion.so)

### Customer notification

**What we'll tell you**

* Nature and scope of any incident

* Affected data and systems

* Remediation steps taken

* Recommendations for customer action

* Ongoing updates until resolution
