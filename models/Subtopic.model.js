const mongoose = require('mongoose');

const SubtopicSchema = new mongoose.Schema({
    subtopicId: { type: String, required: true, unique: true },
    topicId: { type: String, required: true },
    title: { type: String, required: true },
    status: { type: Number, default: 1 } // 1 = Active, 0 = Inactive
}, { timestamps: true });

module.exports = mongoose.model('Subtopic', SubtopicSchema);

