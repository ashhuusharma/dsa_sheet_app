const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    problemId: { type: String, required: true, unique: true },
    subtopicId: { type: String, required: true },
    title: { type: String, required: true },
    article: { type: String },
    youtube: { type: String },
    practices: { type: String }, // practice problems, links, etc.
    note: { type: String },
    difficulty: { type: Number, default: 1 }, // 1 = Easy, 2 = Medium, 3 = Hard
    status: { type: Number, default: 1 } // 1 = Active, 0 = Inactive
}, { timestamps: true });

module.exports = mongoose.model('Problem', ProblemSchema);  