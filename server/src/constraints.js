const bikeConstraints = {
  id: {
    presence: true,
    length: { minimum: 6 }
  },
  name: {
    presence: true,
    length: { minimum: 6 } 
  },
  type: {
    presence: true,
    length: { minimum: 6 }
  },
  color: {
    presence: true,
    length: { minimum: 3 }
  },
  description: {
    presence: true,
    length: { minimum: 6 }
  },
  status: {
    inclusion: {
      within: ['available', 'unavailable', 'busy']
    }
  },
  wheelSize: {
    presence: true,
    numericality: { greaterThan: 0 }
  },
  pricePerHour: {
    presence: true,
    numericality: { greaterThan: 0 }
  },
}


module.exports = {
  bikeConstraints
}