const mongoose = require('mongoose');

const KeywordSchema = new mongoose.Schema({
    keywordId: { type: String, required: true, unique: true },
    courseId: { type: String, required: true },
    status: { type: Number, default: 1 }, // 1 = Active, 0 = Inactive
    points: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Keyword', KeywordSchema);