# AI Safety Incident Log

A RESTful API for tracking and managing AI safety incidents. This application allows users to log, retrieve, and delete reports of AI system safety incidents.

![AI Safety](https://img.shields.io/badge/AI-Safety-red)
![Node.js](https://img.shields.io/badge/Node.js-v14+-green)
![Express](https://img.shields.io/badge/Express-v5.1.0-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-v4+-yellow)

## 📋 Features

- Create, read, and delete AI safety incident reports
- Categorize incidents by severity (Low, Medium, High)
- MongoDB database for persistent storage
- Simple RESTful API design

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/ai-safety-incident-log.git
cd ai-safety-incident-log
```

2. **Install dependencies**

```bash
npm install
```

3. **Create environment variables**

Create a `.env` file in the root directory with the following:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/ai-safety-incidents
```

Replace the MONGO_URI with your MongoDB connection string.

4. **Seed the database (optional)**

To populate the database with sample incidents:

```bash
node seeder.js
```

5. **Start the application**

```bash
node server.js
```

The server will start on http://localhost:5000 (or your specified PORT).

## 🔌 API Endpoints

### Incidents

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/incidents` | Retrieve all incidents |
| GET | `/incidents/:id` | Retrieve a specific incident by ID |
| POST | `/incidents` | Create a new incident |
| DELETE | `/incidents/:id` | Delete an incident by ID |

## 📝 API Documentation

### Get All Incidents

```
GET /incidents
```

#### Response

```json
[
  {
    "_id": "60f7b0b9e6e7b32b8c6a1234",
    "title": "Bias detected in AI hiring tool",
    "description": "The AI system showed unfair bias against certain demographics during hiring.",
    "severity": "High",
    "reported_at": "2023-07-21T14:30:45.123Z"
  },
  ...
]
```

### Get Specific Incident

```
GET /incidents/:id
```

#### Response

```json
{
  "_id": "60f7b0b9e6e7b32b8c6a1234",
  "title": "Bias detected in AI hiring tool",
  "description": "The AI system showed unfair bias against certain demographics during hiring.",
  "severity": "High",
  "reported_at": "2023-07-21T14:30:45.123Z"
}
```

### Create New Incident

```
POST /incidents
```

#### Request Body

```json
{
  "title": "AI Hallucination Detected",
  "description": "Language model generated false information during critical response.",
  "severity": "Medium"
}
```

#### Response

```json
{
  "_id": "60f7b0b9e6e7b32b8c6a5678",
  "title": "AI Hallucination Detected",
  "description": "Language model generated false information during critical response.",
  "severity": "Medium",
  "reported_at": "2023-07-21T15:45:23.456Z"
}
```

### Delete Incident

```
DELETE /incidents/:id
```

#### Response

```json
{
  "message": "Incident deleted successfully"
}
```

## 🧪 Testing with Postman

1. **Download and install [Postman](https://www.postman.com/downloads/)**

2. **Create a new Postman Collection**
   - Name it "AI Safety Incidents API"

3. **Add requests for each endpoint:**

### GET All Incidents
- Method: GET
- URL: `http://localhost:5000/incidents`

### GET Single Incident
- Method: GET
- URL: `http://localhost:5000/incidents/:id`
- Replace `:id` with an actual incident ID

### POST New Incident
- Method: POST
- URL: `http://localhost:5000/incidents`
- Headers: `Content-Type: application/json`
- Body: Raw JSON
```json
{
  "title": "Test Incident",
  "description": "This is a test incident created via Postman",
  "severity": "Low"
}
```

### DELETE Incident
- Method: DELETE
- URL: `http://localhost:5000/incidents/:id`
- Replace `:id` with an actual incident ID

4. **Save your requests and run them to test the API**

## 📊 Example Workflow

1. Start the server with `node server.js`
2. Run the seeder script with `node seeder.js` to populate with sample data
3. Use Postman to test each endpoint:
   - GET all incidents
   - Create a new test incident
   - Retrieve that specific incident using its ID
   - Delete the test incident

## 🔒 Data Validation

The API validates incoming data:
- All fields (title, description, severity) are required
- Severity must be one of: 'Low', 'Medium', 'High'

## 🛠️ Error Handling

The API returns appropriate status codes:
- 200: Successful operation
- 201: Resource created
- 400: Bad request (invalid input)
- 404: Resource not found
- 500: Server error

## 📈 Future Enhancements

- Authentication and authorization
- Incident updates and history tracking
- Advanced filtering and searching
- Reporting dashboard
- WebSocket notifications for critical incidents
