const { STRING } = require("sequelize");
const Patient = require("../models/patient.model")


const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find({}).select({'-clOrders': 0, '-glOrders': 0, "streetAddress": 0, 'city': 0, 'state': 0, 'zipCode': 0, 'createdAt': 0, updatedAt: 0});
    res.status(200).json(patients)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

const getThisPatient = async (req, res) => {
  try {
    const { id } = req.params
    const patient = await Patient.findById(id)
    res.status(200).json(patient)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

const findPatientByName = async (req, res) => {
  try {
    const { firstName, lastName } = req.params
    const thisPatient = await Patient.find({ "lastName": { $regex: lastName, $options: 'i'}, "firstName": { $regex: firstName, $options: 'i'}}).select({'-clOrders': 0, '-glOrders': 0, "streetAddress": 0, 'city': 0, 'state': 0, 'zipCode': 0, 'createdAt': 0, 'updatedAt': 0})

    res.json(thisPatient)
  } catch (error) {
    res.json({message: error.message})
  }
}

const findPatientByPhone = async (req, res) => {
  try {
    const { phoneNumber } = req.params
    const thisPatient = await Patient.find({ "phoneNumber": { $regex: phoneNumber, $options: 'i'}}).select({'-clOrders': 0, '-glOrders': 0, "streetAddress": 0, 'city': 0, 'state': 0, 'zipCode': 0, 'createdAt': 0, updatedAt: 0})

    res.status(200).json(thisPatient)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

const findPatientByDOB = async (req, res) => {
  try {
    const { dateOfBirth } = req.params
    const thisPatient = await Patient.find({ "dateOfBirth": new Date(`${dateOfBirth}`) }).select({'-clOrders': 0, '-glOrders': 0, "streetAddress": 0, 'city': 0, 'state': 0, 'zipCode': 0, 'createdAt': 0, updatedAt: 0})

    res.status(200).json(thisPatient)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(200).json(patient)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

const updatePatient = async (req, res) => {
  try {
    const { id } = req.params
    const patient = await Patient.findByIdAndUpdate(id, req.body)

    if (!patient) {
      res.status(404).json({message: "Patient not found"})
    }

    const updatedPatient = await Patient.findById(id)

    res.status(200).json(updatedPatient)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

module.exports = { getPatients, getThisPatient, updatePatient, createPatient, findPatientByName, findPatientByPhone, findPatientByDOB };