import express from 'express'
import requestIp from 'request-ip'
import cors from 'cors'
import { db } from './database/db'
import routes from './routes/index.routes'
import config from './config'

const app = express()
const PORT = config.api.PORT

app.use(requestIp.mw())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use( routes )

db.authenticate()
  .then(() => {
    console.log('Connection with database has been established successfully.')
    app.listen(PORT, () => console.log(`Server listened on port ${PORT}`))
  })
  .catch(err => console.error('Unable to connect to the database:', err))

