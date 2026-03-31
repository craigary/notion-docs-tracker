import { Client } from '@notionhq/client'

import config from '../config'

export const notionClient = new Client({
  auth: config.notionToken,
  notionVersion: config.notionVersion
})
