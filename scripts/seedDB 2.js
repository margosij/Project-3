const mongoose = require('mongoose')
const db = require('../models')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/dismissal'
console.log('MONGODB_URI:', MONGODB_URI)

mongoose.Promise = global.Promise
//  console.log('global:', global.Promise)
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })

db.Student.remove({})
  .then(() => db.Student.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
 