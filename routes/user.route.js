const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// User routes
router.get('/get', userController.getUsers); // Get all users
router.put('/update', userController.updateUser); // Update user

module.exports = router;
