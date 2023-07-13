import express from 'express'
import BOOKS_FROM from './data.js'
import dotenv from 'dotenv'
import { bookRoutes } from './routes/bookRouter.js'
import errorHandler from './middlewares/errorHandler.js'
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use('/api', bookRoutes(BOOKS_FROM))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
