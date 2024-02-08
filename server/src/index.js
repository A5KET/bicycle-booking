const express = require('express')

const { BikeRepository } = require('./bikes/repositories')
const BikeRouter = require('./bikes/router')
const { CORSMiddleware } = require('./middlewares')

const PORT = 3500
const app = express()

const bikeRepository = new BikeRepository()

app.use(CORSMiddleware, express.json())

app.use('/bikes', BikeRouter(bikeRepository))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})