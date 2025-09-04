import config from '../../config'
import { notionClient } from '../notion/client'

const res = await notionClient.databases.retrieve({
  database_id: config.frontendDsId!,
})

console.log(res)
