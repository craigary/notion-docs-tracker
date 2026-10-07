---
title: "Notion IP addresses & domains"
emoji: null
description: "Contact your security team to allowlist these Notion IP addresses or domains."
url: "https://www.notion.com/help/allowlist-ip"
key: "help:allowlist-ip"
coverImage: null
category: "Privacy & security"
categoryKey: "category:security-and-privacy"
---

Notion provides a fixed range of outgoing IP addresses, as well as domains that you can allowlist, helping you increase the security of your network.

These can't be managed in your Notion account, so please contact your security team to allowlist these IP addresses or domains.

### Notion IP addresses and domains

Notion is hosted in US-West-2 (Oregon), EU-Central-1 (Frankfurt), AP-Northeast-1 (Tokyo) and AP-Northeast-2 (Seoul).

**Notion owned IP address blocks:**

* `131.149.232.0/21`

  * us-west-2: 131.149.232.0/24

  * eu-central-1: 131.149.233.0/24

  * ap-northeast-1: 131.149.234.0/24

  * ap-northeast-2: 131.149.235.0/24

* `208.103.161.0/24`

* `2602:F79A::/36`

**Notion owned domains:**

* notion.com

* notion.site

* app.notion.com

* api.notion.com

* img.notionusercontent.com

* notionusercontent.com

* secure.notion-static.com

* audioprocessor.app.notion.com

- Notion is hosted on CloudFlare, so we recommend allowlisting

  [Cloudflare IP addresses](https://www.cloudflare.com/ips/).

- The IP range you need depends on which way the connection goes.

  * **When Notion AI connects to a server you host:&#x20;**&#x49;f your server limits incoming connections by IP address, allow the full `131.149.232.0/21` range as a source IP range. A regional subnet or the narrower `208.103.161.0/24` range may not be enough to allow all connections.

  * **When you connect to Notion from your company's network:** Allow `208.103.161.0/24`.
