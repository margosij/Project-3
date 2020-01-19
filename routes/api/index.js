const router = require('express').Router()
const adminRoutes = require('./admins')
const familyRoutes = require('./families')
const userRoutes = require('./users')

// admin routes
router.use('/admins', adminRoutes)
// family routes
router.use('/families', familyRoutes)
// user routes
router.use('/users', userRoutes)

module.exports = router
