const express = require('express')
const cors = require('cors')

const BikeRouter = require('./router.js')


function createApp(bikeService) {
  const app = express()

  app.use(
    cors(),
    express.json()
  )
  app.use('/bikes', BikeRouter(bikeService))

  return app
}


module.exports = createApp