import { Schema, model, models } from 'mongoose'
// constants
import { SNACKS, regEx } from '@constants'

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, SNACKS.EMAIL.required],
    unique: [true, SNACKS.EMAIL.exists],
  },
  username: {
    type: String,
    required: [true, SNACKS.USERNAME.required],
    match: [regEx.username, SNACKS.USERNAME.invalid],
  },
  image: {
    type: String,
  },
})

const User = models.User || model('User', userSchema)

export default User
