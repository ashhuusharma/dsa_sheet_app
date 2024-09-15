const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    noteId: { type: String, required: true, unique: true },
    courseId: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: Number, default: 1 } // 1 = Active, 0 = Inactive
}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);