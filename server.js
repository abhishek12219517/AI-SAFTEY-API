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

// Welcome route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the AI Safety Incident Log API',
    description: 'Track and manage AI safety incidents with this RESTful API',
    endpoints: [
      {
        path: '/incidents',
        method: 'GET',
        description: 'Retrieve all AI safety incidents'
      },
      {
        path: '/incidents/:id',
        method: 'GET',
        description: 'Retrieve a specific incident by ID'
      },
      {
        path: '/incidents',
        method: 'POST',
        description: 'Create a new incident',
        body: {
          title: 'string (required)',
          description: 'string (required)',
          severity: 'string (required) - must be Low, Medium, or High'
        }
      },
      {
        path: '/incidents/:id',
        method: 'DELETE',
        description: 'Delete an incident by ID'
      }
    ],
    documentation: 'See README.md for detailed documentation'
  });
});

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
