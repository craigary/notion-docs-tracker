import { Client } from '@notionhq/client'
import config from '../../config'

// Initializing a client
export const notionClient = new Client({
  auth: config.notionToken,
})
