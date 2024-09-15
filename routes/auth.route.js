// routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');

// Route to add a new course
router.post('/login', auth.loginUser);

// Route to get all courses
router.get('/register', auth.registerUser);

module.exports = router;
