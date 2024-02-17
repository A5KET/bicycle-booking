const { BikeStatus } = require('./types')


class BikeRepository {
  constructor() {
    this.bikes = [
      {
        name: 'Mountain Explorer',
        id: 1,
        status: BikeStatus.Available,
        type: 'Mountain Bike',
        color: 'Blue',
        pricePerHour: 15.99,
        wheelSize: 12
      },
      {
        name: 'City Cruiser',
        id: 2,
        status: BikeStatus.Busy,
        type: 'City Bike',
        color: 'Green',
        pricePerHour: 18.50,
        wheelSize: 15
      },
      {
        name: 'Electric Commuter',
        id: 3,
        status: BikeStatus.Available,
        type: 'Electric Bike',
        color: 'Silver',
        pricePerHour: 25.75,
        wheelSize: 17
      }
    ]
  }

  async getBike(bikeId) {
    return this.bikes.find((bike => bike.id === bikeId))
  }

  async getBikes() {
    return this.bikes
  }

  async addBike(bike) {
    this.bikes.push(bike)
  }

  async deleteBike(bikeId) {
    this.bikes = this.bikes.filter(curBike => curBike.id !== bikeId)
  }

  async updateBike(bikeId, bike) {
    this.bikes = this.bikes.map(el => el.id == bikeId ? bike : el)
  }

  async isBikeExists(bikeId) {
    return Boolean(await this.getBike(bikeId))
  }
}


module.exports = {
  BikeRepository
}