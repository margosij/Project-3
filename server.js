require('dotenv').config()
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const bcrypt = require('bcrypt')
const cors = require('cors')
const gradient = require('gradient-string')
// var whitelist =

const PORT = process.env.PORT || 3001

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/dismissal'
console.log('MONGODB_URI:', MONGODB_URI)

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.use(function(req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', `http://localhost:${PORT}`)

//   // Request methods you wish to allow
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, OPTIONS, PUT, PATCH, DELETE'
//     )

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true)

//     // Pass to next layer of middleware
//     next()
//   })
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}
// Add routes, both API and view
app.use(routes)

// Connect to the Mongo DB
mongoose.Promise = global.Promise
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })

// Start the API server
const server = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
const io = require('socket.io')(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log(gradient.vice('\nNew client connected'))

  socket.on('admin', data => {
    console.log('\nAdmin Message:', gradient.summer(data.message))
    // socket.emit('im here', data)
  })
  socket.on('adminID', data => {
    console.log('\nAdmin ID Message:', gradient.summer(data.message))
    // socket.emit('im here', data)
  })
  socket.on('adminGreet', data => {
    console.log('\nAdmin Greet Message:', gradient.summer(data.message))
    io.emit('helloParents', data)
  })
  socket.on('adminTime', data => {
    console.log('\nAdmin Time Message:', gradient.summer(data.message))
    // socket.emit('im here', data)
  })
  socket.on('arrived', data => {
    console.log('\nArrival Message:', gradient.summer(data.message))
    io.emit('hello', { message: 'We see you' })
  })

  socket.on('testTime', data => {
    console.log('\nTest Time Data Received:', gradient.summer(data.message))
    // socket.emit('im here', data)
  })
  socket.on('testFamily', data => {
    console.log('\nTest Family Data Received:', gradient.summer(data.message))
    // socket.emit('im here', data)
  })

  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log(gradient.atlas('\nuser disconnected'))
  })
})
