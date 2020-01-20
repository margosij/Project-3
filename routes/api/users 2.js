const router = require('express').Router()
const userController = require('../../controllers/userController')

// Matches with "/api/users/"
router
  .route('/')
  .get(userController.findAllUsers)
  .post(userController.createUser)

// Matches with "/api/users/login"
router
  .route('/login')
  .post(userController.logInUser)

module.exports = router
