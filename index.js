const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");
const formData = require("express-form-data");
const path = require("path");
// Middleware to serve static files
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// ------------ Middleware --------------------
const authenticateToken = require("./middleware/authenticateToken");

// ---------------- Helpers ----------------
const { getPublicIpAddress } = require("./function/function");

// Server Settings
const port = process.env.PORT || 3002;

// --------------------------------- Middleware --------------------------------
// Apply the tokenAuth middleware to all routes except the login route
// Set up allowed origins for CORS
const allowedOrigins = [
  'http://localhost:3001',
  'http://localhost:3000',
  'http://localhost:3002',
];

// Apply CORS middleware with the custom configuration
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow requests with no origin (e.g., mobile apps or curl requests)
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// app.use(cors())

app.use(formData.parse()); // Middleware to parse FormData

// ------------------------ DATA Decoding -------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(async (req, res, next) => {
  // const userAgent = req.headers['user-agent'];
  // if (userAgent && userAgent.includes('Postman')) {
  //   // Bypass authentication for Postman requests
  //   return next();
  // }
  if (req.path.startsWith("/uploads")) {
    return next(); // Allow access without authentication
  }
  if (
    req.path === "/user/login" ||
    req.path === "/token/update" ||
    req.path === "/"
  ) {
    return next();
  } else {
    const rep = await authenticateToken(req, res);
    if (!rep.success) {
      return res.status(rep.code).json({ success: rep.success, code: rep.code, msg: rep.msg });
    } else {
      return next();
    }
  }
});

app.get("/", async (req, res) => {
  // Example query execution
  const clientIP = await getPublicIpAddress(req);
  // return false
  return res.status(200).json({ success: true, code: 200, msg: "Hey, This is node api, and Your IP address is " + clientIP });
});

// --------------------- User APIS --------------------------------------

// Close the connection when the application is shutting down
process.on("SIGINT", function () {
  conn.end(function (err) {
    if (err) {
      return console.log("Error closing database connection:", err.stack);
    }
    console.log("Database connection closed.");
    process.exit();
  });
});

app.listen(port, () => {
  console.log(`Example app on port ${port}`);
});
