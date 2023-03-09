const Joi = require('joi');

const userSchema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    cpf: Joi.string().min(11).required(),
    phone: Joi.string().min(6).required(),
});

const datesSchema = Joi.object({
    initialDate: Joi.string().length(10).required(),
    finalDate: Joi.string().length(10).required(),
});

module.exports = { 
    userSchema,
    datesSchema,
};