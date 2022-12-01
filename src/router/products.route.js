const express = require('express')
const router = express.Router()
const controller = require('../controller/products.controller')

router.get('/', controller.getAll)
router.post('api/v1/products')
router.delete('api/v1/products/:id')


module.exports = router