// Imports

const jwt = require('jsonwebtoken');
const JWT_SIGN_SECRET = 'AkLc0LAuUcKeHIPkLAjFFpvzZVwiInuD8oXLimO72vSGnJpPBX1lzHzgBpo7Bn2';
// Exported functions

module.exports = {
    generateTokenForUser: function (userData) {
        return jwt.sign({
            userId: userData.id,
        },
            JWT_SIGN_SECRET,
            {
                expiresIn: '1h'
            })
    },
    parseAuthorization: function (authorization) {
        return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    },
    getUserId: function (authorization) {
        const userId = -1;
        const token = module.exports.parseAuthorization(authorization);
        if (token != null) {
            try {
                var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
                if (jwtToken != null)
                    userId = jwtToken.userId;
            } catch (err) { }
        }
        return userId;
    }
}