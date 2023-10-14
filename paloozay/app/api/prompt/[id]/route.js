import { connectToDb } from '@utils/db'
import Prompt from '@models/prompt'
// assets
// utils
import logger from '@utils/logger'
import { toast } from 'react-toastify'
// constants
import { SNACKS } from '@constants'

export const GET = async (req, { params }) => {
  try {
    await connectToDb()
    const prompt = await Prompt.findById(params.id).populate('creator')

    if (!prompt) {
      logger.error(SNACKS.PROMPT.notFound)
      return new Response(SNACKS.PROMPT.notFound, {
        status: 404,
      })
    }
    // toast.success(SNACKS.PROMPT.found)
    logger.success(SNACKS.PROMPT.found)
    return new Response(JSON.stringify(prompt), {
      status: 200,
    })
  } catch (error) {
    logger.error(error.message)
    return new Response('Internal Server Error', { status: 500 })
  }
}

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json()
  console.log(prompt)
  try {
    await connectToDb()
    const updatePrompt = await Prompt.findById(params.id)

    if (!updatePrompt) {
      //   toast.(SNACKS.PROMPT.notFound)
      logger.error(SNACKS.PROMPT.notFound)
      return new Response(SNACKS.PROMPT.notFound, {
        status: 404,
      })
    }
    updatePrompt.prompt = prompt
    updatePrompt.tag = tag

    await updatePrompt.save()

    return new Response(JSON.stringify(updatePrompt), {
      status: 200,
    })
  } catch (error) {
    logger.error(error.message)

    return new Response(SNACKS.ERROR[500], { status: 500 })
  }
}

export const DELETE = async (req, { params }) => {
  try {
    await connectToDb()
    await Prompt.findByIdAndRemove(params.id)

    return new Response(SNACKS.PROMPT.deleted, {
      status: 200,
    })
  } catch (error) {
    logger.error(error)
    return new Response(SNACKS.ERROR[500], { status: 500 })
  }
}
