const express = require('express')
const route = express.Router()
const controller = require('../controller/index.controller')
route.get('/',controller.creatuser)
route.post('/create-user',controller.svaeuser)
route.get("/profile",controller.home)

module.exports = route
