// routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const course = require('../controllers/course.controller');

// Route to add a new course
router.post('/add', course.addCourse);

// Route to get all courses
router.get('/', course.getCourses);

module.exports = router;
