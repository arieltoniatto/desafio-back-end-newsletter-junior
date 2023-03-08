const express = require('express');
const { createUser, findAllUsers } = require('../controller/user.controller');

const routers = express.Router();

routers.post('/', createUser);
routers.get('/', findAllUsers);

module.exports = routers;