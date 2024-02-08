const { BikeStatus } = require('../types')


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
      },
      {
        name: 'City Cruiser',
        id: 2,
        status: BikeStatus.Busy,
        type: 'City Bike',
        color: 'Green',
        pricePerHour: 18.50,
      },
      {
        name: 'Electric Commuter',
        id: 3,
        status: BikeStatus.Available,
        type: 'Electric Bike',
        color: 'Silver',
        pricePerHour: 25.75,
      }
    ]
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

  deleteBike(bike) {
    this.bikes = this.bikes.filter(curBike => curBike.id == bike.id)
  }

  updateBike(bike) {
    this.bikes = this.bikes.map(el => el.id == bike.id ? bike : el)
  }
}


module.exports = {
  BikeRepository
}