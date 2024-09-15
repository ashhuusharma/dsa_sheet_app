const User = require('../models/User.model');
const UserDetails = require('../models/Userdetail.model');
const jwt = require('jsonwebtoken');
const { validateMissingFields, isValidEmail, isValidMobileNumber, generateUsername, generatePassword, verifyPassword } = require('../helpers/validation.helpers');

// Register a new user
exports.registerUser = async (req, res) => {
    const { fname, lname, email, password, number } = req.body;

    // Validate missing fields
    const missingFields = validateMissingFields({ fname, lname, email, password, number });
    if (missingFields) {
        return res.status(400).json({ success: false, message: `Missing fields: ${missingFields.join(', ')}` });
    }

    // Validate email format
    if (!isValidEmail(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email format' });
    }

    // Validate mobile number
    if (!isValidMobileNumber(number)) {
        return res.status(400).json({ success: false, message: 'Invalid mobile number' });
    }

    try {
        // Generate a unique username and hash the password
        const username = generateUsername(fname);
        const hashedPassword = await generatePassword(password);

        // Create and save the User
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        // Create and save the UserDetails
        const userDetails = new UserDetails({ username, fname, lname, number });
        await userDetails.save();

        return res.status(201).json({ success: true, message: 'User registered successfully', username });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};

// User login
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Validate missing fields
    const missingFields = validateMissingFields({ email, password });
    if (missingFields) {
        return res.status(400).json({ success: false, message: `Missing fields: ${missingFields.join(', ')}` });
    }

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }

        // Verify password using the helper function
        const isMatch = await verifyPassword(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // Generate a JWT token with user details
        const token = jwt.sign({ username: user.username, email: user.email, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        return res.status(200).json({ success: true, token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};