const express = require('express')
const router = express.Router()
const controller = require('../controller/prova.controller')

router.get('/', controller.getAll)

module.exports = router