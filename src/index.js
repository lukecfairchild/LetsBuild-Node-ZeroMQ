'use strict';

require('dotenv').config()

const ZeroMQ = require('./lib/ZeroMQ.js')

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', function (data) {
  ZeroMQ.send({
    'channel' : 'test',
    'message' : data
  })
})


ZeroMQ.on('minecraft', function (data) {
  console.log('minecraft', data, typeof data)
})

ZeroMQ.on('bungeecord', function (data) {
  console.log('bungeecord', data, typeof data)
})
