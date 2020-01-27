const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema
const autoPopulate = require('mongoose-autopopulate')
const UserSchema = new Schema({
  // name: {
  //   type: String,
  //   unique: true
  // },
  // username: {
  //   type: String,
  //   // required: true,
  //   unique: true
  // },
  email: {
    type: String,
    // required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  },
  userId: {
    type: String,
    required: true
  }
})
const User = mongoose.model('users', UserSchema)
UserSchema.plugin(autoPopulate)
module.exports = User
