const router = require('express').Router()
const guardiansController = require('../../controllers/guardiansController')

// Matches with "/api/guardians"
router
  .route('/')
  .get(guardiansController.findAllGuardians)
  .post(guardiansController.createGuardian)

// Matches with "/api/guardians/:id"
router
  .route('/:id')
  .get(guardiansController.findGuardianById)
  .put(guardiansController.updateGuardian)
  .delete(guardiansController.removeGuardian)

module.exports = router
