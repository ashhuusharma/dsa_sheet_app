const mongoose = require('mongoose');

const SubtopicProblemMapperSchema = new mongoose.Schema({
    problemId: { type: String, required: true },
    subtopicId: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('SubtopicProblemMapper', SubtopicProblemMapperSchema);  