const mongoose = require('mongoose');

const TopicCourseMapperSchema = new mongoose.Schema({
    courseId: { type: String, required: true },
    topicId: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('TopicCourseMapper', TopicCourseMapperSchema); 