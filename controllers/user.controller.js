const User = require('../models/User.model');
const UserDetails = require('../models/Userdetail.model');
const { validateMissingFields, isValidEmail, isValidMobileNumber } = require('../helpers/validation.helpers');

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude password
        return res.status(200).json({ success: true, users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Update user details
exports.updateUser = async (req, res) => {
    const { username, fname, lname, number } = req.body;

    const missingFields = validateMissingFields({ username, fname, lname, number });
    if (missingFields) {
        return res.status(400).json({ success: false, message: `Missing fields: ${missingFields.join(', ')}` });
    }

    if (!isValidMobileNumber(number)) {
        return res.status(400).json({ success: false, message: 'Invalid mobile number' });
    }

    try {
        const userDetails = await UserDetails.findOneAndUpdate(
            { username },
            { fname, lname, number },
            { new: true }
        );

        if (!userDetails) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        return res.status(200).json({ success: true, message: 'User details updated successfully', userDetails });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};
