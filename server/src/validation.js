const { validate } = require('validate.js')

const { bikeConstraints } = require('./constraints')


function validateBike(bike) {
  return validate(bike, bikeConstraints)
}


module.exports = {
  validateBike
}
