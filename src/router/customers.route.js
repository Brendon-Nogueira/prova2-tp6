const express = require('express')
const router = express.Router()
const controller = require('../controller/customers.controller')

router.get('/', controller.getAll)
router.post('api/v1/customers')
router.delete('api/v1/customers/:id')


module.exports = router