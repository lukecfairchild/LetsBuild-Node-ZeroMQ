'use strict';

require('dotenv').config()

const ZeroMQ = require('./lib/ZeroMQ.js')

ZeroMQ.on('minecraft', function (event) {
  ZeroMQ.send(event)
})

ZeroMQ.on('bungeecord', function (event) {
  ZeroMQ.send(event)
})

/* bungeecord events
  connected
  {
    state    : 'connected',
    server   : 'server',
    username : 'username',
    uuid     : 'uuid'
  }

  disconnected
  {
    state    : 'disconnected',
    server   : 'server',
    username : 'username',
    uuid     : 'uuid'
  }

  switched
  {
    state     : 'switched',
    newserver : 'server2',
    oldserver : 'server1'
    username  : 'username',
    uuid      : 'uuid'
  }
*/


/* minecraft events
  Message
  {
    'type'    : 'message',
    'data'    : 'Message string',
    'targets' : TargetObject
  }

  Kick
  {
    'type'    : 'kick',
    'data'    : 'Kick Reason',
    'targets' : TargetObject
  }


  TargetObject
  { // if targets is not included its done to everyone
    'players' : ['kookster', '_NILLEKE_'],
    'ranks'   : ['trusted'],
    'worlds'  : ['spawn'],
    'servers' : ['hub', 'show']
  }
*/
