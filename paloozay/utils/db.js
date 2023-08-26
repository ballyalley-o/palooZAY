import mongoose from 'mongoose'
// logger
import logger from '@utils/logger'
// config
import { GLOBAL } from '@config'

let isConnected = false

export const connectToDb = async () => {
  mongoose.set('strictQuery', true)

  logger.info('=> MONGODB STATUS: Connecting...')

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

    isConnected = true
    logger.success('=> MONGODB STATUS: Connected')
  } catch (error) {
    logger.error(`=> MONGODB STATUS: ${error.message}`)
  }
}
