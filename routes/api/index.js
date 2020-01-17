const router = require('express').Router()
const adminRoutes = require('./admins')
const familyRoutes = require('./families')

// admin routes
router.use('/admins', adminRoutes)
// family routes
router.use('/families', familyRoutes)


module.exports = router
