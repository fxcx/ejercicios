import express from 'express'
import { BOOKS } from './data.js'
import { v4 as uuid } from 'uuid'

const port = 3000

const app = express()

app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', 'public')
app.use(express.static('public'))

app.get('/home', (_, res) => {
  return res.render('index.ejs', { name: 'SANTIIII', title: 'Página desde el server' })
})

app.get('/books', (_, res) => {
  return res.json(BOOKS)
})

app.get('/books/:id', (req, res) => {
  const { id } = req.params
  const book = BOOKS.find((book) => book.id === id)
  if (!book) {
    return res.status(404).json({ message: 'Book not found' })
  }
  return res.status(200).json(book)
})

app.post('/books', (req, res) => {
  const newBook = req.body
  const books = structuredClone(BOOKS)
  books.push({
    id: uuid(),
    ...newBook
  })
  return res.status(201).json(books)
})

app.put('/books/:id', (req, res) => {
  const { id } = req.params
  const books = structuredClone(BOOKS)
  const book = books.find((book) => book.id === id)
  if (!book) {
    return res.status(404).json({ message: 'Book not found' })
  }
  const updatedBook = req.body
  const index = books.indexOf(book)
  books.splice(index, 1, { id: book.id, ...updatedBook })
  return res.status(200).json(books)
})

app.delete('/books/:id', (req, res) => {
  const { id } = req.params
  const books = structuredClone(BOOKS)
  const book = books.find((book) => book.id === id)
  if (!book) {
    return res.status(404).json({ message: 'Book not found' })
  }
  const index = books.indexOf(book)
  books.splice(index, 1)
  return res.status(200).json(books)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
