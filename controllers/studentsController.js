const db = require('../models')

// Defining methods for the studentsController
module.exports = {
  // find all students
  findAllStudents: (req, res) => {
    db.Student.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // find a student by id
  findStudentById: (req, res) => {
    db.Student.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // create a student
  createStudent: (req, res) => {
    db.Student.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // update a student
  updateStudent: (req, res) => {
    db.Student.findOneAndUpdate({ _id: req.body._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // remove a student
  removeStudent: (req, res) => {
    db.Student.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
