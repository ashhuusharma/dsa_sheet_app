const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    courseId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
