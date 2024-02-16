const { Router } = require('express')

const { validateBike } = require('./validation')


function BikeRouter(repository) {
  const router = Router()

  router.get('/:bikeId', (req, res) => {
    const bikeId = req.params.bikeId

    res.json({bike: repository.getBike(bikeId)})
  })

  router.delete('/:bikeId', (req, res) => {
    const bikeId = req.params.bikeId

    repository.deleteBike(bikeId)
    res.end()
  })

  router.put('/:bikeId', (req, res) => { 
    const bikeId = req.params.bikeId
    const bike = req.body['bike']

    if (!repository.isBikeExists(bikeId)) {
      res.status(400).end()
      return
    }
    
    repository.updateBike(bikeId, bike)
    res.end()
  })
  
  router.get('/', (req, res) => {
    res.json({bikes: repository.getBikes()})
  })
  
  router.post('/', (req, res) => {
    const bike = req.body['bike']
    const validationErrors = validateBike(bike)

    if (validationErrors) {
      res.status(400).send(validationErrors)
      return
    }
    
    if (repository.isBikeExists(bike.id)) {
      res.status(400).send({error: 'bike must have unique ID'})
      return
    }

    repository.addBike(req.body['bike'])
    res.end()
  })



  return router
}


module.exports = BikeRouter
