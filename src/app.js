const express = require('express')
const router = require('./router/index.router')
const app = express();

app.use('/',router)

module.exports = app