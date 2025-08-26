---
title: Connect a custom domain with Notion Sites
emoji: null
description: If you already have a custom domain, you can use it with Notion Sites. Learn how to do this, both in Notion and in your DNS provider 🔧
url: https://www.notion.com/help/connect-a-custom-domain-with-notion-sites
key: help:connect-a-custom-domain-with-notion-sites
coverImage: https://images.ctfassets.net/spoqsaf9291f/3ccuGglCOEBrobLN9bQSjl/163076aca7f9ce90c07f569a42e6b417/Group_87.png
category: Notion Sites
---

**Note:&#x20;**&#x54;his feature is only available on paid plans.

Workspace owners on paid plans can connect their existing custom domains with Notion Sites by purchasing the custom domain add-on. **Notion doesn’t sell custom domains or replace your current domain provider** — the add-on allows you to use Notion Sites with a custom domain you already own.

## Custom domain add-on pricing and billing

Once a workspace owner on a paid plan connects a custom domain with Sites, they'll be charged an additional $10 per month. **Note that with annual billing, you’ll unlock a discounted rate for the custom domain add-on** of an additional $8 per month.

For each custom domain you want to use with Notion Sites, you’ll have to purchase a separate custom domain add-on. You can do this for up to 25 custom domains.

Billing for the custom domain add-on must match your billing for Notion — if you pay for Notion annually, you’ll also be billed annually for the custom domain. If you pay for Notion monthly, you’ll also be billed monthly for the custom domain.

If you add a custom domain to your existing paid plan, you’ll pay a prorated amount for the remaining time left on your current billing cycle. On your next billing date, the custom domain add-on charge will be added to your regular billing cadence.

## Connect a custom domain

To connect a custom domain with Notion Sites:

1. Go to `Settings` in your sidebar → `Sites`.

2. Next to `Domains`, select `New domain`.

3. Select `Custom domain` → `Continue`. You’ll be prompted to set up a payment method for this add-on if you don’t already have one on file.

4. Enter your custom domain → `Continue`.

   There are a few important rules to follow when adding your domain to ensure a smooth setup:

   * You must already have purchased your domain from a DNS provider.

   * When entering your domain, **you must include a subdomain**. This is typically `www`, but any other subdomain works too (ex.: `careers.my-domain.com` or `portfolio.my-domain.com`).

   If you want your root domain to point to your Notion Site, we recommend setting up your subdomain to `www` and setting up a redirect with your DNS provider. Here are some instructions from common providers for how to set this up:

   * <https://www.namecheap.com/support/knowledgebase/article.aspx/385/2237/how-to-set-up-a-url-redirect-for-a-domain/>

   * <https://www.godaddy.com/help/forward-my-godaddy-domain-12123>

   * <https://support.squarespace.com/hc/en-us/articles/214767107-Forwarding-a-Squarespace-domain>

5. You’ll be prompted to go to your DNS provider and add a CNAME record for the domain you want to connect. Set the CNAME target to `external.notion.site.`. Note the period at the end of the CNAME target!

   **Learn more about domains**

   * <https://www.godaddy.com/help/what-is-dns-665>

   * <https://www.godaddy.com/help/manage-dns-records-680>

   * <https://www.namecheap.com/support/knowledgebase/article.aspx/434/2237/how-do-i-set-up-host-records-for-a-domain/>

   * <https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/>

   * <https://developers.cloudflare.com/dns/zone-setups/partial-setup/setup/>

   * <https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain>

6. Next, add a TXT record for the domain. You can copy the record name and value for easy use.

7. Select `Verify`.

Once you add a custom domain, you’ll see it and its status in your list of domains.

When you use a custom domain with Notion Sites, you’ll also have the option to remove any Notion branding for that custom domain. Learn more about customizing your Sites in [this article →](https://www.notion.com/help/edit-and-customize-your-notion-sites)

## Delete a custom domain

1. Go to `Settings` in your sidebar → `Sites`.

2. Next to your desired domain, select `•••`.

3. From here, select `Delete` to remove your domain. If any Notion Sites have been published to the domain you’re trying to delete, you’ll be asked to unpublish those Sites before proceeding.

**Note:** <!-- -->When you delete a custom domain, you'll still be able to use it with Notion Sites until the end of your current billing cycle. After that time, you will no longer be charged for that custom domain.

## Examples of incorrect DNS configurations

In the setup below, the name of the TXT record is set to `notes` but should instead be `_notion-dcv.notes`. The value of the record is set to `_notion-dcv.notes` but should instead be the unique TXT record code provided in Notion when you’re setting up the custom domain.

![hc: incorrect dns setup 1](https://images.ctfassets.net/spoqsaf9291f/3TUkTNTu8GWMV1t1QSU6Mn/5d544331d8920b6b1f3f9e7eaa91f33a/Untitled_2__3_.png)

In the setup below, the CNAME host is set to `external.notion.site` but should instead be set to your desired subdomain, like `careers.my-domain.com`. The CNAME value is correctly set to `external.notion.site`.

![hc: incorrect dns setup 2](https://images.ctfassets.net/spoqsaf9291f/3bvEUSTdvtmYRGz2HiDwWi/7eac88f30b253556d7ed3cfa87c9f9b2/Untitled__1_.png)

## Setup instructions per DNS provider

Below are instructions for setting up your CNAME and TXT records with some of the most common DNS providers.

**Note:**

* The screenshots used below are just examples. Make sure you use your specific values as you follow the steps!

* For more help setting up, please reach out to your DNS provider.

### GoDaddy

1. Find your domain and select `Manage DNS`.

   ![hc: godaddy step 1](https://images.ctfassets.net/spoqsaf9291f/215mNsdJm6Y15sR4xQg9YY/d620821baab6ed7311241e99b7cd0a34/Untitled__1_.png)

2. Add the CNAME and TXT DNS record. In this example, because we’re setting up the subdomain `www.my-domain.com`, the CNAME will be set to `www`. Make sure to adjust accordingly depending on your chosen subdomain.

   ![hc: godaddy step 2](https://images.ctfassets.net/spoqsaf9291f/1efg7fkSYSDw8pkoOpPtVK/5eabcc43bda91b3bec601a5f4eef0c12/Untitled__2_.png)

3. Select `Save All Records`.

4. Confirm the two records have been successfully added.

   ![hc: godaddy step 4](https://images.ctfassets.net/spoqsaf9291f/1Ca4yObkf3hmGZk1xMsQh8/bbc65723529423392ecc3b11da0f96b7/Untitled__3_.png)

### Namecheap

1. Go to your domain list and find the domain you want to set up with Notion.

2. Open the `Advanced DNS` tab.

   ![hc: namecheap step 2](https://images.ctfassets.net/spoqsaf9291f/2IUiVyvRD5FXyrVnxgB8rf/cd1e5f2316fb3d790d37e767b63d07ee/Untitled__4_.png)

3. Add the CNAME and TXT DNS record. In this example, because we’re setting up the subdomain `www.my-domain.com`, the CNAME will be set to `www`. Make sure to adjust accordingly depending on your chosen subdomain.

4. Select `SAVE ALL CHANGES`.

5. Confirm the two records have been successfully added.

### Squarespace

1. Open the `Domains` tab and select the domain you want to set up with Notion.

2. Open the `DNS Settings` tab.

3. Add the CNAME and TXT DNS record. In this example, because we’re setting up the subdomain `www.my-domain.com`, the CNAME will be set to `www`. Make sure to adjust accordingly depending on your chosen subdomain.

   ![hc: squarespace step 3](https://images.ctfassets.net/spoqsaf9291f/6rvwvSzLK2kZX23Zilqzmq/8372008eddaebaa09a96cc48c8caacc2/Screenshot_2024-07-01_at_9.24.52_AM.png)

4. Save your changes.

5. Confirm the two records have been successfully added.

   ![hc: squarespace step 5](https://images.ctfassets.net/spoqsaf9291f/63JHYpL5RseVUv9wzmlcUE/eaca30041666b279e626d2dae211eecc/Screenshot_2024-06-24_at_2.36.24_PM.png)

### Cloudflare

1. Find `Websites` and select the domain you want to set up with Notion.

2. Using the left navigation menu, select `DNS` → `Records`.

3. Add the CNAME and TXT DNS record. In this example, because we’re setting up the subdomain `www.my-domain.com`, the CNAME will be set to `www`. Make sure to adjust accordingly depending on your chosen subdomain.

4. **Make sure&#x20;**`Proxy status`**&#x20;is toggled off.**

   ![hc: cloudflare step 4](https://images.ctfassets.net/spoqsaf9291f/2ruOBgyArzyHdmODUt11In/93842264fe3be3d1bc5baf773e5d652d/Group_88.png)

5. Add the TXT record.

   ![hc: cloudflare step 5](https://images.ctfassets.net/spoqsaf9291f/5FStvFMrALdy8J0N8a32MS/7151b88ad194134b4bb1a6cc3f95fa99/Untitled__5_.png)

### 123-reg

1. Find `My Products` and select the domain you want to set up with Notion.

2. Open the `DNS Records` tab.

3. Add the CNAME and TXT DNS record. In this example, because we’re setting up the subdomain `www.my-domain.co.uk`, the CNAME will be set to `www`. Make sure to adjust accordingly depending on your chosen subdomain.

   ![hc: 123-reg step 3](https://images.ctfassets.net/spoqsaf9291f/2RsIiUjDK5y0MU1r9y1jxb/4d8bc19756598fd9f6fb9febb3e2c816/Untitled__7_.png)

4. Select `Save`.

5. Add the TXT record.

   ![hc: 123-reg step 3](https://images.ctfassets.net/spoqsaf9291f/1RbNotfx2ESOnbCNydfjQ5/285a98a406993c3f8fa8440d2424eebd/Untitled__8_.png)

6. Select `Save`.

7. If you would like to set up your top-level domain (in this case, `my-domain.co.uk`) to redirect to the domain you have set up with Notion (`www.my-domain.co.uk`), open the `Forwarding` tab. Then, selec&#x74;**&#x20;**`Set up`**&#x20;**&#x61;nd enter your domain.

![hc: 123-reg step 7](https://images.ctfassets.net/spoqsaf9291f/63TMLgjoCcZh9ItJmmVFL1/39829d9408468cf642d154b6ce3831e3/Untitled__10_.png)

**Note:** Your DNS records might display a period at the end of your subdomain. While in general this shouldn’t impact your setup, you can try removing this if you’re having issues connecting your custom domain with Notion Sites.

**Learn more**

* [Notion Sites availability and pricing](https://www.notion.com/help/notion-sites-availability-and-pricing)

* [Manage your Notion Sites](https://www.notion.com/help/manage-your-notion-sites)
