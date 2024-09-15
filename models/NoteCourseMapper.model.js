const mongoose = require('mongoose');

const NoteCourseMapperSchema = new mongoose.Schema({
    courseId: { type: String, required: true },
    noteId: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('NoteCourseMapper', NoteCourseMapperSchema);