
import express from 'express'
import { BOOKS } from './data.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json()) // nos permite leer formato json

// motor dee plantilla
app.set('view engine', 'ejs') // motor para las vistas
app.set('views', 'public/views') // las vistas van a estar en una una carpeta public
app.use('/static', express.static('/public')) // exprexx utilice archivos estaticos

app.get('/', (_, res) => {
  res.render('home.ejs', { name: 'bienvenidos' })
})

app.get('/books', (_, res) => {
  return res.json(BOOKS)
})

app.get('/books/id:', (req, res) => {
  const { id } = req.params
})
// muestro el error 404 en un archivo ejs
app.use((_, res) => {
  res.status(404).render('404')
})

app.listen(PORT, () => {
  console.log(`se levanto el servidor PORT ${PORT}!`)
})