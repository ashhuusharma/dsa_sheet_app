const mongoose = require('mongoose');

const ProblemMapperSchema = new mongoose.Schema({
    problemId: { type: String, required: true },
    username: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ProblemMapper', ProblemMapperSchema);  