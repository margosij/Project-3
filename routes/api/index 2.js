const router = require('express').Router()
const adminRoutes = require('./admins')
const familyRoutes = require('./families')
const guardianRoutes = require('./guardians')
const studentRoutes = require('./students')

// admin routes
router.use('/admins', adminRoutes)
// family routes
router.use('/families', familyRoutes)
// guardian routes
router.use('/guardians', guardianRoutes)
// student routes
router.use('/students', studentRoutes)

module.exports = router
