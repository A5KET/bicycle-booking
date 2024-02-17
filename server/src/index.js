const express = require('express')
const cors = require('cors')

const { MongoBikeRepository } = require('./repositories')
const BikeRouter = require('./router')
const { connectToDatabase } = require('./database')


async function start() {
  const PORT = 3500
  const app = express()

  app.use(cors(), express.json())
  
  const mongoDatabase = await connectToDatabase(process.env.MONGO_URI, 'bikes')
  const bikeRepository = new MongoBikeRepository(mongoDatabase)
  
  app.use('/bikes', BikeRouter(bikeRepository))
  
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}

start()