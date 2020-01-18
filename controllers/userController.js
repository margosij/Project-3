const db = require('../models')
const bcrypt = require('bcrypt')


// Defining methods for the UserController
module.exports = {
    createUser: (req, res) => {
      let newuser = req.body
        newuser.password = bcrypt.hashSync(newuser.password, bcrypt.genSaltSync(10));

    

        db.User.create(newuser)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    logInUser: (req, res) => {
        res.send('Log In Route Was Hit')
    },
    findAllUsers: (req, res) => {
        db.User.find({})
            .then(dbModel => res.json(dbModel))
            .catch(error => res.status(422).json(error))
    },

  // find all Admin
  findAllAdmins: (req, res) => {
    db.Admin.find(req.query)
      .sort('lastName -test')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // find an Admin by id
  findAdminById: (req, res) => {
    db.Admin.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // create an Admin
  createAdmin: (req, res) => {
    db.Admin.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // update an Admin
  updateAdmin: (req, res) => {
    db.Admin.findOneAndUpdate({ _id: req.body._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // remove an Admin
  removeAdmin: (req, res) => {
    db.Admin.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
