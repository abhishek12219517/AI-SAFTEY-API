// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const incidentRoutes = require('./routes/incidents');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/incidents', incidentRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ Error connecting to MongoDB:', err));

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
