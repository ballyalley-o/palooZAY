import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// schemma
import User from '@models/User'
// global
import { GLOBAL } from '@config'
// db
import { connectToDb } from '@utils/db'
// utils
import logger from '@utils/logger'
import { randomUsername } from '@utils/generate-username'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GLOBAL.GOOGLE_AUTH.clientId,
      clientSecret: GLOBAL.GOOGLE_AUTH.clientSecret,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      })

      session.user.id = sessionUser._id.toString()
      return session
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDb()

        const userExists = await User.findOne({ email: profile.email })

        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: randomUsername(profile?.name),
            image: profile?.picture,
          })
        }
        return true
      } catch (error) {
        logger.error(error.message)
        return false
      }
    },
  },
})

export { handler as GET, handler as POST }
