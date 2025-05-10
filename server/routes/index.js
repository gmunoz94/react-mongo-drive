const router = require('express').Router();
const patientRoutes = require('./patient');

router.use('/patients', patientRoutes)

module.exports = router;