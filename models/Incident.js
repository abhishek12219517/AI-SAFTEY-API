// models/Incident.js

const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    severity: {
        type: String,
        required: true,
        enum: ['Low', 'Medium', 'High'], // only allowed values
    },
    reported_at: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Incident', IncidentSchema);
