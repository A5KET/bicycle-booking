const { MongoClient } = require('mongodb')


async function createDatabaseConnection(uri, databaseName) {
  const client = new MongoClient(uri)

  const database = client.db(databaseName)

  return database
}


module.exports = {
  createDatabaseConnection
}