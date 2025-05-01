// backend/models/doctorModel.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  gender: String,
  experience: Number, // in years
  consultationFee: Number,
  availableDays: [String], // e.g., ['Monday', 'Wednesday']
  specialty: String,
  location: String
});

module.exports = mongoose.model('Doctor', doctorSchema);