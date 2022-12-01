const express = require('express')
const router = express.Router()
const controller = require('../controller/ordereds.controller')

router.get('/', controller.getAll)
router.post('api/v1/ordereds')
router.delete('api/v1/ordereds/:id')


module.exports = router