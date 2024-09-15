const mongoose = require('mongoose');

const SubtopicTopicMapperSchema = new mongoose.Schema({
    courseId: { type: String, required: true },
    subtopicId: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('SubtopicTopicMapper', SubtopicTopicMapperSchema);
