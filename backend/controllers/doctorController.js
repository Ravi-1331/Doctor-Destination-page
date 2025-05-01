// backend/controllers/doctorController.js
const Doctor = require('../models/doctorModel');

exports.addDoctor = async (req, res) => {
  try {
    const data = req.body || [];

    if (!Array.isArray(data)) {
      return res.status(400).json({ message: "Expected an array of doctors." });
    }

    const doctors = await Promise.all(
      data.map(async (val) => {
        const doctor = new Doctor(val);
        await doctor.save();
        return doctor;
      })
    );

    res.status(201).json(doctors);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// In doctorController.js
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find(); // No filters
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.listDoctors = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      gender,
      experience,
      maxFee,
      day,
      specialty,
      location
    } = req.query;

    const query = {};

    if (gender) query.gender = gender;
    if (experience) query.experience = {$gte: Number(experience)}; // exact match only
    if (maxFee) query.consultationFee = { $lte: Number(maxFee) };
    if (day) query.availableDays = day;
    if (specialty) query.specialty = specialty;
    if (location) query.location = location;

    const doctors = await Doctor.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Doctor.countDocuments(query);

    res.json({ total, doctors });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

