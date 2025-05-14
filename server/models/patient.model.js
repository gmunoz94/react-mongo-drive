const mongoose = require('mongoose')

const Schema = mongoose.Schema();

const PatientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter First Name"]
  },
  lastName: {
    type: String,
    required: [true, "Please enter Last Name"]
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Please enter Date of Birth"]
  },
  email: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter Phone Number"]
  },
  streetAddress: {
    type: String,
    required: [true, "Please enter Street Address"]
  },
  city: {
    type: String,
    required: [true, "Please enter City"]
  },
  state: {
    type: String,
    required: [true, "Please enter State"]
  },
  zipCode: {
    type: String,
    required: [true, "Please enter Zip Code"]
  },
  glOrders: [
    {
      type: mongoose.ObjectId,
      ref: "GlOrder"
    }
  ],
  clOrders: [
    {
      type: mongoose.ObjectId,
      ref: "ClOrder",
    }
  ]
},
  {
    timestamps: true
  })

const Patient = mongoose.model("Patient", PatientSchema)

module.exports = Patient;