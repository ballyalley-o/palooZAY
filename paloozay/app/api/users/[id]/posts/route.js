import { connectToDb } from '@utils/db'
import { Prompt } from '@models'
// utils
import logger from '@utils/logger'
import { toast } from 'react-toastify'
// constants
import { SNACKS } from '@constants'

export const GET = async (req, { params }) => {
  try {
    await connectToDb()
    const prompts = await Prompt.find({
      creator: params.id,
    }).populate('creator')

    if (!prompts) {
      toast.error(SNACKS.PROMPT.notFound)
      logger.error(SNACKS.PROMPT.notFound)
      return new Response(JSON.stringify({ message: SNACKS.PROMPT.notFound }), {
        status: 404,
      })
    }
    logger.success(SNACKS.PROMPT.found)
    return new Response(JSON.stringify(prompts), {
      status: 200,
    })
  } catch (error) {
    logger.error(error)
    return new Response(JSON.stringify(error), { status: 500 })
  }
}
