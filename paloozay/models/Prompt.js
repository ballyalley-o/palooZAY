import { Schema, model, models } from 'mongoose'
// constants
import { SNACKS } from '@constants'

const PromptSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
  },
  prompt: {
    type: String,
    required: [true, SNACKS.PROMPT.required],
  },
  tag: {
    type: String,
    required: [true, SNACKS.TAG.required],
  },
})

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt
