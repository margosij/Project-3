const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  User: {
    type: Schema.Types.ObjectID,
    ref: 'User'
  }
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin
