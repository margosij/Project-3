require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const gradient = require('gradient-string')
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
    console.log(gradient.vice('New client connected\n'))
    
    // just like on the client side, we have a socket.on method that takes a callback function
    socket.on('arrived', (data) => {
      // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
      // we make use of the socket.emit method again with the argument given to use from the callback function above
      console.log('Name', gradient.summer(JSON.stringify(data, null, 2)))
      socket.emit('im here', data)
    })
    
    // disconnect is fired when a client leaves the server
    socket.on('disconnect', () => {
      console.log(gradient.atlas('user disconnected'))
    })
  })