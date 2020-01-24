const mongoose = require('mongoose')
const gradient = require('gradient-string')
mongoose.Promise = global.Promise
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/dismissal'

mongoose.connect(MONGODB_URI).then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */

    console.log(gradient.summer('Connected to Mongo'))
  },
  err => {
    /** handle initial connection error */

    console.log(gradient.vice('error connecting to Mongo: '))
    console.log(err)
  }
)

module.exports = mongoose.connection