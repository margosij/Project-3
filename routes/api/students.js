const router = require('express').Router()
const studentsController = require('../../controllers/studentsController')

// Matches with "/api/students"
router
  .route('/')
  .get(studentsController.findAllStudents)
  .post(studentsController.createStudent)

// Matches with "/api/students/:id"
router
  .route('/:id')
  .get(studentsController.findStudentById)
  .put(studentsController.updateStudent)
  .delete(studentsController.removeStudent)

module.exports = router
