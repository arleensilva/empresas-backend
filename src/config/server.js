const port = process.env.PORT || 3000;

const bodyParser = require('body-parser')
const express = require('express')

const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port,function listen() {
    console.log(`Backend is running on port ${port}`) // eslint-disable-line
})

module.exports = server