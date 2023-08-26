const GLOBAL = {
  API_URL: 'http://localhost:3000/api/v1',
  GOOGLE_AUTH: {
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  MONGODB: {
    uri: process.env.MongoDB_URI,
    db: process.env.MongoDB_DB,
    host: process.env.MongoDB_HOST,
    // port: process.env.MongoDB_PORT,
    user: process.env.MongoDB_USER,
    pass: process.env.MongoDB_PASS,
  },
}

export default GLOBAL
