const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.json({bikes: req.repository.getBikes()})
})

router.post('/', (req, res) => {
  req.repository.addBike(req.body['bike'])
})

router.delete('/', (req, res) => {
  req.repository.deleteBike(req.body['bike'])
})

router.put('/', (req, res) => {
  req.repository.updateBike(req.body['bike'])
})


module.exports = router