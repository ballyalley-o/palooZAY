import { connectToDb } from '@utils/db'
import { Prompt } from '@models'
// utils
import logger from '@utils/logger'
// constants
import { SNACKS } from '@constants'

export const GET = async (req, { params }) => {
  try {
    await connectToDb()
    const prompts = await Prompt.find({
      creator: params.id,
    }).populate('creator')

    if (!prompts) {
      logger.error(SNACKS.PROMPT.notFound)
      return new Response(SNACKS.PROMPT.notFound, {
        status: 404,
      })
    }
    logger.success(SNACKS.PROMPT.found)
    return new Response(JSON.stringify(prompts), {
      status: 200,
    })
  } catch (error) {
    logger.error(error.message)
    return new Response(error.message, { status: 500 })
  }
}
