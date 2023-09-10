import { connectToDb } from '@utils/db'
// schema
import Prompt from '@models/prompt'
// utils
import logger from '@utils/logger'

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json()

  try {
    await connectToDb()
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    })

    await newPrompt.save()
    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    })
  } catch (error) {
    logger.error(error.message)
    return new Response(SNACKS.ERROR[500], { status: 500 })
  }
}
