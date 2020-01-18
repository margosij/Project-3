const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date
  }
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin
