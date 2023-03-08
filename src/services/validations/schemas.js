const Joi = require('joi');

const userSchema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    cpf: Joi.string().min(11).required(),
    phone: Joi.string().min(6).required(),
});

module.exports = { 
    userSchema,
};