const util = require('util');
const verifyAsync = util.promisify(require('jsonwebtoken').verify);
const { getPublicIpAddress } = require('../function/function');

const authenticateToken = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return { success: false, code: 401, msg: 'Unauthorized - Missing or invalid token' };
        }

        const token = authHeader.split(' ')[1];
        try {
            // Verify the token
            const decoded = await verifyAsync(token, process.env.JWT_KEY);
            const ipaddress = await getPublicIpAddress(req);
            // Check if the token exists in usersLoginHistory and is still valid
            const checkTokenQuery = `SELECT * FROM usersLoginHistory WHERE username = ? AND token = ? AND DATE_SUB(NOW(), INTERVAL 60 MINUTE) < created_at AND ipaddress = ? `;
            const [userLogin] = await query(checkTokenQuery, [decoded.username, token, ipaddress]);

            if (!userLogin) {
                return { success: false, code: 401, msg: 'Unauthorized - Invalid token' };
            }

            // Attach the decoded token to the request for future use
            req.decodedToken = decoded;
            return { success: true };
            // Continue with the next middleware or route handler
        } catch (verifyError) {
            // Token verification failed (expired or invalid)
            if (verifyError.name === 'TokenExpiredError') {
                return { success: false, code: 401, msg: 'Unauthorized - Token has expired' };
            } else {
                return { success: false, code: 401, msg: 'Unauthorized - Invalid token' };
            }
        }
    } catch (error) {
        console.error(error);
        return { success: false, code: 501, msg: 'Internal Server Error' };
    }
};

module.exports = authenticateToken;
