// DB Function
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);

const validateMissingFields = (fields) => {
    const missingFields = [];

    for (const field in fields) {
        const value = fields[field];

        // Check if the value is a string and then trim
        const trimmedValue = typeof value === 'string' ? value.trim() : value;

        if (!trimmedValue) {
            missingFields.push(field);
        }
    }

    return missingFields.length === 0 ? null : missingFields;
};

const isValidEmail = (email) => {
    // Trim white spaces from the start and end of the email
    const trimmedEmail = email.trim();

    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(trimmedEmail);
};

const isValidMobileNumber = (mobileNumber) => {
    // Trim white spaces from the start and end of the mobileNumber
    const trimmedMobileNumber = mobileNumber.trim();

    // Basic validation for an Indian mobile number (10 digits starting with 6, 7, 8, or 9)
    const mobileNumberRegex = /^[6-9]\d{9}$/;
    return mobileNumberRegex.test(trimmedMobileNumber);
};

const containsOnlyLetters = (str) => {
    // Use a regular expression to match letters and spaces
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(str);
};

const generateUsername = (firstName) => {
    // Remove spaces and convert to lowercase
    let cleanFirstName = firstName
    if (firstName.length < 4) {
        cleanFirstName = cleanFirstName.slice(0, 4);
    }
    cleanFirstName = cleanFirstName.replace(/\s/g, '').toLowerCase();

    // Generate a random number between 1000 and 9999
    const randomDigits = Math.floor(1000 + Math.random() * 9000);

    // Combine the cleaned first name with the random number
    const username = `${cleanFirstName}${randomDigits}`;

    return username;
};

const generateRandomId = (firstStr, lastStr) => {
    // Remove spaces and convert to lowercase
    const cleanFirstName = firstStr.replace(/\s/g, '').toUpperCase();
    const cleanlastStr = lastStr.replace(/\s/g, '').toUpperCase();

    // Generate a random number between 1000 and 9999
    const randomDigits = Math.floor(1000 + Math.random() * 9000);

    // Combine the cleaned first name with the random number
    const randomId = `${cleanFirstName}${randomDigits}${cleanlastStr}`;

    return randomId;
};

const generatePassword = async (password) => {
    // Generate a salt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
};
const verifyPassword = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
};

// Function to generate JWT token
const generateJwtToken = (payload) => {
    const jwtOptions = {
        expiresIn: '1h', // You can adjust the expiration time as needed
    };
    return jwt.sign(payload, process.env.JWT_KEY, jwtOptions);
};


const decodeJwtToken = (payload) => {
    return jwt.verify(payload, process.env.JWT_KEY);
};

const getPublicIpAddress = (req) => {
    // If 'x-forwarded-for' header is not present, use the remote address from the request object
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress || "100.100.100.100";
};

const getUsernameAndRole = (decodedToken) => {
    if (!decodedToken) {
        throw new Error('Unauthorized - Token is missing');
    }
    const { username, role } = decodedToken;
    if (!username || !role) {
        throw new Error('Unauthorized - Username or role is missing in the token');
    }
    return { username, role };
};

const validateRole = (role) => {
    if (role !== 1 && role !== 2) {
        throw new Error('Unauthorized - You do not have permission to do it');
    }
};

const validateRoleForAdmin = (role) => {
    if (role !== 1) {
        throw new Error('Unauthorized - You do not have permission to do it');
    }
};

const getStationIdByUsername = async (username) => {
    // Check if username exists
    const userQuery = 'SELECT status, isDeleted FROM users WHERE username = ?';
    const [userData] = await query(userQuery, [username]);
    if (!userData) {
        throw new Error('Your account is not found');
    }
    const { status, isDeleted } = userData;

    // Check if user's status is 1
    if (status !== 1) {
        throw new Error('Your account is not active');
    }
    if (isDeleted !== 0) {
        throw new Error('Your account is deleted');
    }

    const stationIdQuery = 'SELECT stationId FROM userStationMapping WHERE username = ?';
    const [stationIdData] = await query(stationIdQuery, [username]);
    // Check if station ID is available

    if (!stationIdData) {
        throw new Error('Station is not found for you');
    }
    const { stationId } = stationIdData;
    if (!stationId) {
        throw new Error('Station is not found for you');
    }

    // Check if the station is active
    const stationQuery = 'SELECT status FROM stations WHERE stationId = ?';
    const [stationData] = await query(stationQuery, [stationId]);

    if (!stationData || stationData.status !== 1) {
        throw new Error('Station is not active');
    }

    return stationId;
};

const validateMissingFile = (file, fieldName, maxSizeMB, allowedExtensions) => {
    if (!file || !file[fieldName]) {
        return `${fieldName} is required`;
    }

    const { size, name } = file[fieldName];

    // Validate file size
    const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to bytes
    if (size > maxSizeBytes) {
        return `${fieldName} size exceeds the allowed limit ${maxSizeMB * 1024 * 1024}`;
    }

    // Validate file extension
    const fileExtension = path.extname(name).toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
        return `Invalid ${fieldName} extension ${allowedExtensions}`;
    }

    return null; // No missing file
};

const uploadFile = async (req, fileFieldName, filePath1, allowedExtensions, maxSizeMB, nameStartsFrom) => {
    try {

        if (!fileFieldName) {
            throw new Error('File Name does not exist from api');
        }
        if (!filePath1) {
            throw new Error('File path does not exist from api');
        }
        if (!allowedExtensions) {
            throw new Error('File allowed does not exist from api');
        }
        if (!maxSizeMB) {
            throw new Error('File max size does not exist from api');
        }
        if (!nameStartsFrom) {
            throw new Error('File starting name does not exist from api');
        }

        let filePath = 'uploads/' + filePath1;
        const file = req.files[fileFieldName];

        if (!file || !file.size) {
            throw new Error(fileFieldName + ' File does not exist');
        }

        // Validate file size
        const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to bytes
        if (file.size > maxSizeBytes) {
            throw new Error('File size exceeds the allowed limit');
        }

        // Validate file extension
        const fileExtension = path.extname(file.name).toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) {
            throw new Error('Invalid file extension');
        }

        // Generate a unique filename
        const timestamp = Date.now();
        const uniqueFilename = `${nameStartsFrom}_${timestamp}${fileExtension}`;

        // Check if the specified directory exists, if not, create it
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, { recursive: true });
        }

        const fullPath = path.join(filePath, uniqueFilename);
        const buffer = fs.readFileSync(file.path);

        await writeFile(fullPath, buffer);
        return fullPath;
    } catch (error) {
        throw new Error(error || 'Something went wrong');
    }
};

module.exports = {
    validateMissingFields,
    isValidEmail,
    isValidMobileNumber,
    generateRandomId,
    generateUsername,
    generatePassword,
    verifyPassword,
    generateJwtToken,
    decodeJwtToken,
    getPublicIpAddress,
    containsOnlyLetters,
    uploadFile,
    validateMissingFile,
    getUsernameAndRole,
    validateRole,
    validateRoleForAdmin,
    getStationIdByUsername,
};
