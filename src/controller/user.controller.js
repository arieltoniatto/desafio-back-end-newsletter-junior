const service = require('../services/user.services');

const createUser = async (req, res) => {
    const token = await service.createUser(req.body);

    if (token.type) return res.status(token.status).json({ message: token.message });

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
};

const findAllUsers = async (_req, res) => {
    const result = await service.findAllUsers();

    res.status(200).json(result);
};

module.exports = {
    createUser,
    findAllUsers,
};