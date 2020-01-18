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
        db.User.findOne({username : req.body.username})
        .then(
            (dbModel)=>{
                if (!dbModel) {
                    res.send('User not found')
                }
                if (bcrypt.compareSync(req.body.password, dbModel.password)) {
                    res.send('User logged in')
                }else {
                    res.send('Not logged in')
                }

            }
        )
        .catch(err => res.status(422).json(err))








        // res.send('Log In Route Was Hit')
    },
    findAllUsers: (req, res) => {
        db.User.find({})
            .then(dbModel => res.json(dbModel))
            .catch(error => res.status(422).json(error))
    },
}
