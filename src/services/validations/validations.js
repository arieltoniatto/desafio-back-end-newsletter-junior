const { userSchema } = require('./schemas');


const validateUser = (userData) => {
    const { error } = userSchema.validate(userData);

    if (error) return { type: 'INVALID_FIELDS', message: error.message };

    return { type: null, message: '' };
};

module.exports = {
    validateUser,
};