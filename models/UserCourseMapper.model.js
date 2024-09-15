const mongoose = require('mongoose');

const UserCourseMapperSchema = new mongoose.Schema({
    username: { type: String, required: true },
    courseId: { type: String, required: true },
    progress: { type: Number, default: 0 } // Progress percentage
}, { timestamps: true });

module.exports = mongoose.model('UserCourseMapper', UserCourseMapperSchema);