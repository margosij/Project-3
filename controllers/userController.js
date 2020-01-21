const db = require('../models')
const bcrypt = require('bcrypt')

// Defining methods for the UserController
module.exports = {
  findAllUsers: (req, res) => {
    db.User.find({})
      .then(dbModel => res.json(dbModel))
      .catch(error => res.status(422).json(error))
  },
  findAUserById: (req, res) => {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(error => res.status(422).json(error))
  },
  createUser: (req, res) => {
    let newUser = req.body
    newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(10))
    db.User.create(newUser)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  updateUser: (req, res) => {
    db.User.findOneAndUpdate({ _id: req.body._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
   removeUser: (req, res) => {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }, 
  logInUser: (req, res) => {
    db.User.findOne({ username: req.body.username })
      .then(dbModel => {
        if (!dbModel) {
          res.send('User not found')
        }
        if (bcrypt.compareSync(req.body.password, dbModel.password)) {
          res.send('User logged in')
        } else {
          res.send('Not logged in')
        }
      })
      .catch(err => res.status(422).json(err))
  }
}
