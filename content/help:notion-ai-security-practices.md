---
title: Notion AI security & privacy practices
emoji: 🔒
description: At Notion, we want to be transparent with our customers about our products and how we use AI to enhance our users’ experience. Below is an overview of Notion AI functionality and related security and privacy practices 🔒
url: https://www.notion.com/help/notion-ai-security-practices
key: help:notion-ai-security-practices
coverImage: https://images.ctfassets.net/spoqsaf9291f/7p7r9IQJhKKOhgrXa1QFoG/e8d045240fb448b29e0368488108e69e/notion-ai-security-practices.png
category: Notion AI
---

## What is Notion AI?

Notion offers a suite of AI-powered capabilities, integrated seamlessly across your workspace. Notion AI has the capabilities of multiple AI tools, all in one place. Use it to:

* Get answers and research topics using information from your Notion workspace, connected apps, and the web

* Create databases

* Generate docs and edit your writing

* Analyze PDFs and images

* Chat about anything, using AI knowledge from models like GPT-4 and Claude

* Autofill summaries and insights across entire databases

* Automatically summarize and transcribe meeting notes

Notion AI appears seamlessly in your workspace but leverages technology from several AI Subprocessors to provide you with the service. Check out our [Subprocessor Page](https://notion.notion.site/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734) for a complete list of our current Subprocessors, and learn more about Notion AI [here →](https://www.notion.com/help/category/notion-ai)

## How does Notion AI work?

### Who are Notion’s Large Language Model Provider&#x73;**?**

Notion currently utilizes various large language models (LLMs) hosted by Notion as well as by organizations such as Anthropic and OpenAI. We continuously evaluate LLM providers and their models to provide the highest quality experience to our Notion AI users. Any third parties that process Customer Data will be published in our [Subprocessor Page](https://www.notion.com/notion/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734).

**How do I subscribe to new Subprocessor notifications?**

Customers may sign up to receive notification of new Subprocessors by emailing email protected with the subject “Subscribe to New Subprocessors.” Once a customer has signed up to receive new Subprocessor notifications, Notion will provide that customer with notice of any new Subprocessors before authorizing the new Subprocessor to process Customer Data. For additional information, please see our [Data Processing Addendum](https://notion.notion.site/Data-Processing-Addendum-361b540101274b1fa7e16b90402b0d99).

### How does Notion AI use content from a workspace?

Notion AI is able to reference content from your workspace through two key phases:

1. Generating an embedding (i.e., a semantic representation of the information stored in your workspace).

2. Generating responses informed by the content in your workspace.

**What are embeddings?**

Embeddings are numerical representations of text or documents. These representations capture the meaning and context of the text in a multidimensional space, where similar topics have similar numerical representations. By using embeddings, vector search algorithms can efficiently compare and find similarities between different pieces of text or documents. For Notion AI, embeddings are created from workspace content to enable the system to provide accurate and relevant responses to user questions.

Here is an example of an embedding from [OpenAI](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings):

`[
-0.02541878,
-0.0104167685,
-0.0015037002,
...,
-0.004155378,
-0.00043069973,
-0.01679479
]`

**How are embeddings created?**

1. For each page in your workspace, we generate an embedding by using an OpenAI zero-retention embeddings API.

2. Notion receives an embedding for each Notion page and stores it in a vector database (e.g., Turbopuffer). The vector database is a data store optimized for embeddings that enables fast lookup of the most relevant pages given a user request.

![How are embeddings created?](https://images.ctfassets.net/spoqsaf9291f/6txs8A5i0ETt2VV1TFo0IK/51fdbb0e877d6034132fcb6c65f5955a/Creating_Embeddings_Sept_18_from_Notion_AI_Edits.png)

**How are embeddings protected?**

Notion treats embeddings with the same level of security and privacy considerations as Customer Data. All our Customer Data commitments outlined in our Master Service Agreement (MSA) and Data Processing Agreement (DPA) apply to embeddings. View our [Terms and Privacy Page](https://notion.notion.site/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac) for more information.

We store embeddings with vector databases like Turbopuffer. These vector databases have been vetted by our security team as well as an external auditor to obtain their SOC 2 Type 2 certification.

### How are responses generated?

1. Notion receives a request from a user.

2. The request is passed to LLMs and AI Models. If the request does not require searching the Notion workspace, a response is generated at this point and returned. If the user’s request requires searching their workspace, LLMs and AI Models generate a search query most relevant for the user request.

3. The query is passed to a vector database, where a list of pages is found based on relevance to that query.

4. Notion sends the query — and the pages identified by the vector database — to LLMs and AI Models where the pages are refined and ranked by relevance to the query.

5. The query, refined list of pages, and ranking of pages are processed by the LLMs and AI Models to generate a response that fulfills the user’s request.

6. Notion processes the output to adhere to the right format and language and displays the output to the user.

![HC: Using Notion AI](https://images.ctfassets.net/spoqsaf9291f/4iKRJ2GyHYKIf1jr7NTp7H/6d1d6ebd1fedc21fb912fd5e63d317ee/Notion_AI_Proposed_Nov_18.png)

## How is my data protected?

### Does Notion AI respect existing permissions?

Yes, Notion AI honors existing permissions. The LLMs and AI Models used to generate AI responses for a user cannot see or use any information to which that user does not already have access.

### How is Customer Data protected when sent to AI Subprocessors?

Notion AI is designed to protect your Customer Data and prevent information leaks to other users of the service.

Prior to engaging any third-party Subprocessor or vendor, Notion evaluates their privacy, security, and confidentiality practices, and executes an agreement implementing its applicable security, privacy, and legal obligations. All Subprocessors are monitored and reviewed at least annually to ensure continued compliance with Notion’s security and privacy expectations. This includes reviewing documents such as attestation reports, penetration tests, and other artifacts based on the Subprocessor’s criticality and other risk factors. As part of the onboarding and ongoing reviews, technology security questionnaires are distributed to vendors and are required to be completed. Significant public security events are also assessed to protect the supply chain attack surface.

When we send your Customer Data to third parties, it is encrypted in-transit using TLS 1.2 or greater.

For more information about how Notion processes your data, please refer to our [Data Processing Addendum](https://notion.notion.site/Data-Processing-Addendum-361b540101274b1fa7e16b90402b0d99?pvs=4).

### Will my data be used to train any models?

By default, Notion and its AI Subprocessors do not use Customer Data to train any models. We specifically have contractual agreements in place with our AI Subprocessors that prohibit the use of Customer Data to train their models.

Your use of Notion AI does not grant Notion any right or license to your Customer Data to train our machine learning models.

### How is Customer Data segregated?

Individual customer accounts are kept separate in our production environment. We do not mix or process data from different customers together during AI processing. This means we do not expose your data to other Notion customers.

### What are the data retention obligations of third-party AI providers?

Notion AI [Subprocessors](https://www.notion.com/notion/Notion-s-List-of-Subprocessors-268fa5bcfa0f46b6bc29436b21676734) have data retention policies that allow Notion to meet [our obligations to customers for the processing of data](https://notion.notion.site/Data-Processing-Addendum-361b540101274b1fa7e16b90402b0d99?pvs=4).

When using Notion AI, our LLM providers utilize zero data retention for Enterprise plan workspaces, so no data is stored with LLM providers. For all non-Enterprise plan workspaces, LLM providers only retain Customer Data for 30 days or fewer before deletion. Notion AI is additionally powered by OpenAI's embeddings. OpenAI does not retain any Customer Data through their embeddings service.

Embeddings stored in vector databases are deleted within 60 days from when the page or workspace is deleted.

If a user deletes a Notion page or Notion workspace, we can restore the content within 30 days. After 30 days, the data is deleted and unrecoverable. This includes any AI-generated data and embeddings. For more information about deleting or restoring your data, please refer to [this article](https://www.notion.com/help/duplicate-delete-and-restore-content).

### What compliance standards does Notion AI meet?

Notion AI is included in the scope of Notion’s SOC 2 Type 2 report and ISO 27001 certification, demonstrating our commitment to various regulatory and industry standards.

Notion AI enables HIPAA compliance by utilizing LLM provider’s zero-retention APIs and allows for the processing of protected health information (PHI).

## What controls exist or can be added?

### Are there settings I can enable?

Workspace owners on any Notion plan can go to `Settings` → `Notion AI` and adjust settings for Notion AI’s web search functionality. There are two settings available:

* `Enable web search for workspace`: Turn this on if you want Notion AI to be able to search the web for information when answering questions.

* `Require confirmation for web requests`: Turn this on if you want Notion AI to request confirmation before looking at external websites.

### Can data loss prevention (DLP) be configured to alert for data being used by Notion AI?

Customers can trigger data loss prevention (DLP) alerts for sensitive content in their Notion workspace using third-party integration partners on our Enterprise Plan. That will include content in an AI prompt and the content generated by AI. Learn more about our DLP integrations [here](https://www.notion.com/help/add-security-and-compliance-integrations).

## What are the legal considerations?

### Are there rules against what I can do with Notion AI?

The [Notion AI Supplementary Terms](https://www.notion.com/Notion-AI-Supplementary-Terms-fa9034c8b5a04818a6baf3eac2adddbb?pvs=21) apply to your usage of Notion AI. In addition, Notion’s [Content & Use Policy](https://www.notion.com/Content-Use-Policy-1b9a773d5583486cb5c1d39a8d777a55?pvs=21) applies to any content on Notion, including content generated by Notion AI. Violating these terms can result in removal of your content or suspension of access to your workspace.

### Who owns the rights to content generated by Notion AI?

Notion does not claim ownership of your input or the generated output. This is addressed in the [Notion AI Supplementary Terms](https://www.notion.com/Notion-AI-Supplementary-Terms-fa9034c8b5a04818a6baf3eac2adddbb?pvs=21) in the "Input and Output" section:

> You may provide input to be processed by Notion AI (“Input”), and receive output generated and returned by Notion AI based on the Input (“Output”). When you use Notion AI, Input and Output are your Customer Data.

**Learn more**

* [Shared responsibilities model](https://www.notion.com/help/shared-responsibilities-model)

* [Notion's commitment to AI safety](https://www.notion.com/help/ai-safety)

* [Enterprise Search security & privacy practices](https://www.notion.com/help/enterprise-search-security-and-privacy-practices)

* [What is Notion AI?](https://www.notion.com/help/notion-ai-faqs)

* [Security practices](https://www.notion.com/help/security-and-privacy)

* [Privacy practices](https://www.notion.com/help/privacy)
