const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.plugin(uniqueValidator, { message: ' username is already taken.' });
const User = mongoose.model('User', userSchema)

module.exports = User
