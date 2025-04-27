// seeder.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Incident = require('./models/Incident');

dotenv.config();

// Sample incidents to insert
const sampleIncidents = [
  {
    title: "Bias detected in AI hiring tool",
    description: "The AI system showed unfair bias against certain demographics during hiring.",
    severity: "High"
  },
  {
    title: "Unexpected AI decision in healthcare",
    description: "An AI diagnostic tool made an unusual diagnosis without clear reasoning.",
    severity: "Medium"
  },
  {
    title: "Data leak through chatbot",
    description: "A chatbot unintentionally exposed private user information.",
    severity: "High"
  }
];

// Connect to MongoDB and insert data
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('✅ Connected to MongoDB for seeding.');

  // Clear existing data
  await Incident.deleteMany({});
  console.log('🗑️  Old incidents deleted.');

  // Insert new sample incidents
  await Incident.insertMany(sampleIncidents);
  console.log('🌱 Sample incidents inserted successfully!');

  mongoose.disconnect();
})
.catch((error) => {
  console.error('❌ Error connecting to MongoDB:', error);
  process.exit(1);
});
