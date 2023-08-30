import mongoose from 'mongoose'
// logger
import logger from '@utils/logger'
// config
import { GLOBAL } from '@config'

let isConnected = false
let isSnoozed = true

export const connectToDb = async () => {
  mongoose.set('strictQuery', true)

  logger.info('=> MONGODB STATUS: Connecting...')
  isSnoozed = false
  logger.snoozeOff('=> MONGODB STATUS: Snooze MODE OFF')

  if (isConnected) {
    logger.success('=> MONGODB STATUS: Connected')

    return
  }

  try {
    await mongoose.connect(GLOBAL.MONGODB.uri, {
      dbName: GLOBAL.MONGODB.db,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    isSnoozed = false
    isConnected = true
    logger.success('=> MONGODB STATUS: Connected')
  } catch (error) {
    logger.error(`=> MONGODB STATUS: ${error.message}`)
  } finally {
    isSnoozed = true
    logger.snooze('=> MONGODB STATUS: Snooze MODE ON')
  }
}
