const express = require('express')
const Patient = require('../models/patient.model.js')
const { getPatients, getThisPatient, updatePatient, createPatient, findPatientByName, findPatientByPhone, findPatientByDOB} = require('../controllers/patient.controller.js')
const router = express.Router();

router.get('/', getPatients);

router.get('/:id', getThisPatient);

router.get('/searchName/:lastName/:firstName', findPatientByName);
router.get('/searchPhone/:phoneNumber', findPatientByPhone);
router.get('/searchDOB/:dateOfBirth', findPatientByDOB);

router.post('/', createPatient)

// Update Patient
router.put('/:id', updatePatient)


module.exports = router;