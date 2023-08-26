import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// schemma
import { User } from '@models'
// global
import { GLOBAL } from '@config'
// db
import { connectToDb } from '@utils/db'
// utils
import logger from '@utils/logger'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GLOBAL.GOOGLE_AUTH.clientId,
      clientSecret: GLOBAL.GOOGLE_AUTH.clientSecret,
    }),
  ],
  async session({ session }) {
    const sessionUser = await User.findOne({
      email: session.user.email,
    })

    session.user.id = sessionUser._id.toString()
    return session
  },
  async signIn({ account }) {
    try {
      await connectToDb()
      // check if user exists
      const userExists = await User.findOne({ email: account.email })

      // if not, create a new user
      if (!userExists) {
        await User.create({
          email: account.email,
          username: account.name.replace(' ', '.').toLowerCase(),
          image: account.picture,
        })
      }
      return true
    } catch (error) {
      logger.error(error.message)
      return false
    }
  },
})

export { handler as GET, handler as POST }
