const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const generateToken = (payload) => { 
    const token = jwt.sign(payload, TOKEN_SECRET);
    return token;
};

module.exports = {
    generateToken,
};