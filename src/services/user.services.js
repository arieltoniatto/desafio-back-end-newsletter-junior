const { FormsAnswers } = require('../models/index');
const { generateToken } = require('../utils/JWT');
const { validateUser } = require('./validations/validations');

const createUser = async ({ displayName, email, cpf, phone }) => {
    const error = validateUser({ displayName, email, cpf, phone });

    if (error.type) {
        error.status = 400;
        return error;
    }

    const user = await FormsAnswers.findOne({
        where: { email },
    });
    
    if (user) {
        const e = { type: 'INVALID_FIELDS', status: 409, message: 'User already registered' };
        return e;
    }

    await FormsAnswers.create({
        displayName, email, cpf, phone,
    });
    return generateToken({ displayName, email });
};

const findAllUsers = async () => {
    const result = await FormsAnswers.findAll({
        attributes: ['id', 'displayName', 'email', 'cpf', 'phone', 'created_at'],
    });

    return result;
};


module.exports = {
    createUser,
    findAllUsers,
};