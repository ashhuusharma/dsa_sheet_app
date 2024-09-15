const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    topicId: { type: String, required: true, unique: true },
    courseId: { type: String, required: true },
    title: { type: String, required: true },
    status: { type: Number, default: 1 } // 1 = Active, 0 = Inactive
}, { timestamps: true });

module.exports = mongoose.model('Topic', TopicSchema);