'use strict';

require('dotenv').config()

const ZeroMQ = require('./lib/ZeroMQ.js')

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', function (data) {
  ZeroMQ.send({
    'message' : data
  })
})
