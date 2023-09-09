import { connectToDb } from '@utils/db'
import User from '@models/user'
// utils
import logger from '@utils/logger'
// constants
import { SNACKS } from '@constants'

export const GET = async (req, { params }) => {
  try {
    await connectToDb()
    const user = await User.find({
      _id: params.id,
    })

    if (!user) {
      logger.error(SNACKS.PROMPT.notFound)
      return new Response(SNACKS.PROMPT.notFound, {
        status: 404,
      })
    }
    logger.success(SNACKS.PROMPT.found)
    return new Response(JSON.stringify(user), {
      status: 200,
    })
  } catch (error) {
    logger.error(error.message)
    return new Response(error.message, { status: 500 })
  }
}
