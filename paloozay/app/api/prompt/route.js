import { connectToDb } from '@utils/db'
import { Prompt } from '@models'
// assets
// utils
import logger from '@utils/logger'
import { toast } from 'react-toastify'
// constants
import { SNACKS } from '@constants'

export const GET = async (req) => {
  try {
    await connectToDb()
    const prompts = await Prompt.find({}).populate('creator')

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
    return new Response(SNACKS.ERROR[500], { status: 500 })
  }
}
