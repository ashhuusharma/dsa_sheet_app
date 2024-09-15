const mongoose = require('mongoose');

const KeywordCourseMapperSchema = new mongoose.Schema({
    courseId: { type: String, required: true },
    keywordId: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('KeywordCourseMapper', KeywordCourseMapperSchema);