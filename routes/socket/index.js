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
    io.emit('/waiting', data) // sending data to Waiting Container
  })

  socket.on('/Admin/GeoArrived', data => {
    console.log('data received by', data)
    io.emit('/waiting', data) // sending data to Waiting Container
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
module.exports = io