// backend/routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const { addDoctor, listDoctors, getAllDoctors } = require('../controllers/doctorController');

router.post('/add-doctor', addDoctor);
router.get('/list-doctor-with-filter', listDoctors);
router.get('/all-doctors', getAllDoctors);

module.exports = router;