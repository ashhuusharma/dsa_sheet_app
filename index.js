// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const formData = require("express-form-data");
const path = require("path");

// Database Connection
require("./database/conn");

// Import Routes
const courseRoutes = require('./routes/course.route');
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');

// Middleware to serve static files (e.g., images, documents)
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// ------------------- Helpers -------------------
const { getPublicIpAddress } = require("./helpers/validation.helpers");

// Server Settings
const port = process.env.PORT || 3002;

// ------------------- CORS Setup -------------------
// Define allowed origins for CORS (Cross-Origin Resource Sharing)
const allowedOrigins = [
  'http://localhost:3001',
  'http://localhost:3000',
  'http://localhost:3002',
];

// Apply CORS middleware with a custom configuration
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow requests with no origin (e.g., mobile apps, curl requests)
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true); // Allow requests from the allowed origins
    } else {
      callback(new Error('Not allowed by CORS')); // Block requests from other origins
    }
  }
}));

// Enable parsing of form data (for handling file uploads)
app.use(formData.parse());

// ------------------ Data Parsing ------------------
// Middleware to parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ------------------- Routes -------------------

// Root Route: Example route to fetch the client's public IP address
app.get("/", async (req, res) => {
  const clientIP = await getPublicIpAddress(req);
  return res.status(200).json({ 
    success: true, 
    code: 200, 
    msg: `Hey, This is Node API, and your IP address is ${clientIP}` 
  });
});

// Course Routes: Handle all course-related API requests
app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);


// ------------------- Start Server -------------------
// Start the Express server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
