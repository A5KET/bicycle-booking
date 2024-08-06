const { BikeStatus } = require('./types')


class InMemoryBikeService {
  constructor() {
    this.bikes = []
  }

  getBike(bikeId) {
    return this.bikes.find((bike => bike.id === bikeId))
  }

  getBikes() {
    return this.bikes
  }

  addBike(bike) {
    this.bikes.push(bike)
  }

  deleteBike(bikeId) {
    this.bikes = this.bikes.filter(curBike => curBike.id !== bikeId)
  }

  updateBike(bikeId, bike) {
    this.bikes = this.bikes.map(el => el.id == bikeId ? bike : el)
  }

  isBikeExists(bikeId) {
    return Boolean(this.getBike(bikeId))
  }
}


class MongoBikeService {
  constructor(databaseConnection) {
    this.databaseConnection = databaseConnection
    this.bikes = databaseConnection.collection('bikes')
  }

  async getBike(bikeId) {
    return await this.bikes.findOne({ id: bikeId }, { projection: { _id: 0 }})
  }

  async getBikes() {
    return await this.bikes.find({}, { projection: { _id: 0 }}).toArray()
  }

  async addBike(bike) {
    await this.bikes.insertOne(bike)
  }

  async deleteBike(bikeId) {
    await this.bikes.deleteOne({ id: bikeId })
  }

  async updateBike(bikeId, bike) {
    await this.bikes.updateOne({ id: bikeId }, { $set: bike })
  }

  async isBikeExists(bikeId) {
    return Boolean(await this.getBike(bikeId))
  }
}


module.exports = {
  InMemoryBikeService,
  MongoBikeService
}