'use strict'

const ZeroMQ = require('zeromq')


// Subscriber
const Subscriber = ZeroMQ.socket('sub')

Subscriber.zap_domain      = 'global'
Subscriber.curve_server    = 0
Subscriber.curve_publickey = process.env.LOCAL_PUBLIC_KEY
Subscriber.curve_secretkey = process.env.LOCAL_SECRET_KEY
Subscriber.curve_serverkey = process.env.SERVER_PUBLIC_KEY
Subscriber.bindSync('tcp://127.0.0.1:3022')
Subscriber.subscribe('')
Subscriber.on('message', function (buffer) {
  const data = buffer.toString('utf8')

  console.log(data)
})


// Publisher
const Publisher  = ZeroMQ.socket('pub')

Publisher.zap_domain      = 'global'
Publisher.curve_server    = 1
Publisher.curve_publickey = process.env.LOCAL_PUBLIC_KEY
Publisher.curve_secretkey = process.env.LOCAL_SECRET_KEY
Publisher.bindSync('tcp://127.0.0.1:3021')

module.exports = {
  send : function (data) {
    Publisher.send(JSON.stringify({
      'publisherid' : 'node',
      'channel'     : data.channel || 'global',
      'message'     : data.message
    }))
  }
}
