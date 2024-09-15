const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    number: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('UserDetails', UserDetailsSchema);