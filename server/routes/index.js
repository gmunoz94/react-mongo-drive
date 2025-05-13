const router = require('express').Router();
const patientRoutes = require('./patient.route');

router.use('/patients', patientRoutes)

export default router;