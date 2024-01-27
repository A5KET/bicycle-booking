const express = require('express')

const { BikeRepository } = require('./repositories')
const router = require('./routes')
const { CORSMiddleware } = require('./middlewares')


const app = express()
const PORT = 3500

const repository = new BikeRepository()

app.use(CORSMiddleware, express.json())

app.use((req, res, next) => {
  req.repository = repository

  return next()
})

app.use('/bikes', router)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})