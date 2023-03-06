import dotenv from 'dotenv'
dotenv.config()

const config = {
  database: {
    NAME: process.env.DB_DATABASE as string,
    HOST: process.env.DB_HOST as string,
    USER: process.env.DB_USER as string,
    PASSWORD: process.env.DB_PASS as string
  },
  api: {
    PORT: process.env.PORT || "5000"
  },
  spotify: {
    URL_TOKEN: "https://accounts.spotify.com/api/token",
    URL_API: "https://api.spotify.com/v1",
    CLIENT_ID: process.env.SPOTIFY_CLIENTID as string,
    CLIENT_SECRET: process.env.SPOTIFY_SECRET as string
  }
}

export default config