const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema
mongoose.Promise = Promise

const userSchema = new Schema({
  username: {
    type: String,
    // required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})
userSchema.methods = {
  checkPassword: (inputPassword) => {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}
userSchema.pre('save', (next) => {
  if (!this.password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save')
    this.password = this.hashPassword(this.password)
    next()
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
