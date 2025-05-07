import { mongoose, model } from "mongoose";
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  firstName: {
    type: String,
    required: "Must have a First Name.",
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  glOrders: [
    {
      type: Schema.Types.ObjectId,
      ref: "glOrder",
    }
  ],
  clOrders:  [
    {
      type: Schema.Types.ObjectId,
      ref: "clOrder",
    }
  ],
})

const Patient = model("Patient", patientSchema);
