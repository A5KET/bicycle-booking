const { Router } = require('express')

const { validateBike } = require('./validation')


function BikeRouter(repository) {
  const router = Router()

  router.get('/:bikeId', async (req, res) => {
    const bikeId = req.params.bikeId

    res.json({bike: await repository.getBike(bikeId)})
  })

  router.delete('/:bikeId', async (req, res) => {
    const bikeId = req.params.bikeId

    await repository.deleteBike(bikeId)
    res.end()
  })

  router.put('/:bikeId', async (req, res) => { 
    const bikeId = req.params.bikeId
    const bike = req.body['bike']

    if (!await repository.isBikeExists(bikeId)) {
      res.status(400).end()
      return
    }
    
    await repository.updateBike(bikeId, bike)
    res.end()
  })
  
  router.get('/', async (req, res) => {
    res.json({bikes: await repository.getBikes()})
  })
  
  router.post('/', async (req, res) => {
    const bike = req.body['bike']
    const validationErrors = validateBike(bike)

    if (validationErrors) {
      res.status(400).send(validationErrors)
      return
    }
    
    if (await repository.isBikeExists(bike.id)) {
      res.status(400).send({error: 'bike must have unique ID'})
      return
    }

    await repository.addBike(bike)
    res.end()
  })


  return router
}


module.exports = BikeRouter
