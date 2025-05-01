const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const doctorRoutes = require('./routes/doctorRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/doctors', doctorRoutes);

// Connect to DB and start server
connectDB().then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
});
