const router = require('express').Router()
const userController = require('../../controllers/userController')

// Matches with "/api/users/"
router
  .route('/')
  .get(userController.findAllUsers)
  .post(userController.createUser)

  // Matches with "/api/families/:id"
router
  .route('/:id')
  .get(userController.findAUserById)
  .put(userController.updateUser)
  .delete(userController.removeUser)

  // Matches with "/api/users/login"
router
  .route('/login')
  .get(userController.findOneUser)
  .post(userController.logInUser)


module.exports = router
