const express = require('express')
const router = express.Router()
const controller = require('../controller/index.controller')

router.get('/userCreate',controller.indexCotroler)
module.exports = router