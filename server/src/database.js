const { MongoClient } = require('mongodb')


async function connectToDatabase(uri, databaseName) {
  const client = new MongoClient(uri)

  const database = client.db(databaseName)

  return database
}


module.exports = {
  connectToDatabase
}