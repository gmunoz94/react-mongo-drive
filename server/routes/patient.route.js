const express = require('express')
const Patient = require('../models/patient.model.js')
const { getPatients, getThisPatient, updatePatient, createPatient, findPatient} = require('../controllers/patient.controller.js')
const router = express.Router();

router.get('/', getPatients);

router.get('/:id', getThisPatient);

router.get('/search/:lastName/:firstName', findPatient);

router.post('/', createPatient)

// Update Patient
router.put('/:id', updatePatient)


module.exports = router;