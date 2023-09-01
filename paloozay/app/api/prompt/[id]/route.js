import { connectToDb } from '@utils/db'
import { Prompt } from '@models'
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
      //   toast.error(SNACKS.PROMPT.notFound)
      logger.error(SNACKS.PROMPT.notFound)
      return new Response(JSON.stringify({ message: SNACKS.PROMPT.notFound }), {
        status: 404,
      })
    }
    // toast.success(SNACKS.PROMPT.found)
    logger.success(SNACKS.PROMPT.found)
    return new Response(JSON.stringify(prompt), {
      status: 200,
    })
  } catch (error) {
    logger.error(error)
    return new Response(JSON.stringify(error), { status: 500 })
  }
}

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json()

  try {
    await connectToDb()

    const updatePrompt = await Prompt.findById(params.id)

    if (!updatePrompt) {
      //   toast.error(SNACKS.PROMPT.notFound)
      logger.error(SNACKS.PROMPT.notFound)
      return new Response(JSON.stringify({ message: SNACKS.PROMPT.notFound }), {
        status: 404,
      })
    }
    updatePrompt.prompt = prompt
    updatePrompt.tag = tag

    await updatePrompt.save()

    // toast.success(SNACKS.PROMPT.updated)
    return new Response(JSON.stringify(updatePrompt), {
      status: 200,
    })
  } catch (err) {
    logger.error(err)

    return new Response(JSON.stringify(err), { status: 500 })
  }
}

export const DELETE = async (req, { params }) => {
  const { prompt, tag } = await req.json()

  try {
    await connectToDb()
    await Prompt.findByIdAndRemove(params.id)

    toast.success(SNACKS.PROMPT.deleted)

    return new Response(JSON.stringify({ message: SNACKS.PROMPT.deleted }), {
      status: 200,
    })
  } catch (err) {
    logger.error(err)
    toast.error(err)

    return new Response(JSON.stringify(err), { status: 500 })
  }
}
