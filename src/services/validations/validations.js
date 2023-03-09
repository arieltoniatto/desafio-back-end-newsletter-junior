const { userSchema, datesSchema } = require('./schemas');


const validateUser = (userData) => {
    const { error } = userSchema.validate(userData);

    if (error) return { type: 'INVALID_FIELDS', message: error.message };

    return { type: null, message: '' };
};

const validateDate = (date) => {
    const { error } = datesSchema.validate(date)

    if (error) return { type: 'INVALID_FIELDS', message: error.message };

    return { type: null, message: '' };
}

module.exports = {
    validateUser,
    validateDate,
};