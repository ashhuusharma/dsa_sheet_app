// routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const course = require('../controllers/course.controller');

// Route to add a new course
router.post('/add', course.addCourse);

// Route to get all courses
router.get('/get', course.getCourses);
router.get('/:slug', course.getCourseBySlug);

router.post('/:courseId/topic/add', course.createTopic);
router.post('/:topicId/subtopic/add', course.createSubTopic);
router.post('/:subtopicId/problem/add', course.createProblem);

module.exports = router;
