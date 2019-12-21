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
    }
}