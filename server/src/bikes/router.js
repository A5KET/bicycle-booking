const { Router } = require('express')

function BikeRouter(repository) {
  const router = Router()

  router.get('/:bikeId', (req, res) => {
    const bikeId = req.params.bikeId

    res.json({bike: req.repository.getBike(bikeId)})
  })
  
  router.get('/', (req, res) => {
    res.json({bikes: req.repository.getBikes()})
  })
  
  router.post('/', (req, res) => {
    repository.addBike(req.body['bike'])
  })
  
  router.delete('/', (req, res) => {
    repository.deleteBike(req.body['bike'])
  })
  
  router.put('/', (req, res) => {
    repository.updateBike(req.body['bike'])
  })

  return router
}


module.exports = BikeRouter
