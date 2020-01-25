const router = require('express').Router()
const adminRoutes = require('./admins')
const familyRoutes = require('./families2')
const userRoutes = require('./users')

// admin routes
router.use('/admins', adminRoutes)
// family routes
router.use('/families2', familyRoutes)
// user routes
router.use('/users', userRoutes)

module.exports = router
