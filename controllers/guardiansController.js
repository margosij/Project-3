const db = require('../models')

// Defining methods for the GuardiansController
module.exports = {
  // find all Guardians
  findAllGuardians: (req, res) => {
    db.Guardian.find(req.query)
      .sort({ date: -1 })
      .populate('students')
      .populate('family')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // find a Guardian by id
  findGuardianById: (req, res) => {
    db.Guardian.findById(req.params.id)
      .populate('students')
      .populate('family')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // create a Guardian
  createGuardian: (req, res) => {
    db.Guardian.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // update a Guardian
  updateGuardian: (req, res) => {
    db.Guardian.findOneAndUpdate({ _id: req.body._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // remove a Guardian
  removeGuardian: (req, res) => {
    db.Guardian.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
