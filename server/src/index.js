const express = require('express')

const { MongoBikeRepository } = require('./repositories')
const BikeRouter = require('./router')
const { CORSMiddleware } = require('./middlewares')
const { connectToDatabase } = require('./database')


async function start() {
  const PORT = 3500
  const app = express()
  
  const mongoDatabase = await connectToDatabase(process.env.MONGO_URI, 'bikes')
  const bikeRepository = new MongoBikeRepository(mongoDatabase)
  
  app.use(CORSMiddleware, express.json())
  
  app.use('/bikes', BikeRouter(bikeRepository))
  
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}

start()