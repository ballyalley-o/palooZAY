import { META } from '@constants/meta-data'

const LANG = {
  en: 'en',
  es: 'es',
  fr: 'fr',
}

const GLOBAL = {
  META,
  API_URL: process.env.API_URL_DEV,
  LOCALE: LANG.en,
  GOOGLE_AUTH: {
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  MONGODB: {
    uri: process.env.DB_URI,
    db: process.env.DB,
    host: process.env.DB_HOST,
      // port: process.env.MongoDB_PORT,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  },
}

export default GLOBAL
