const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    problemId: { type: String, required: true, unique: true },
    subtopicId: { type: String, required: true },
    title: { type: String, required: true },
    difficulty: { type: Number, default: 1 }, // 1 = Easy, 2 = Medium, 3 = Hard
    note: { type: String },
    youtubeLink: { type: String },
    geeksForGeeksLink: { type: String },
    articleLink: { type: String },
    status: { type: Number, default: 1 }, // 1 = Active, 0 = Inactive
    content: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Problem', ProblemSchema);  