const createApp = require('./src/app.js')
const { MongoBikeService } = require('./src/services.js')
const { createDatabaseConnection } = require('./src/database.js')


async function start() {
  const PORT = 3500
  const connectionURI = process.env.MONGO_URI
  const databaseConnection = await createDatabaseConnection(connectionURI, 'bikes')
  const bikeService = new MongoBikeService(databaseConnection)
  const app = createApp(bikeService)
  
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}


start()
