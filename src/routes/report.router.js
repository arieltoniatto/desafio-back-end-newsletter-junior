const express = require('express');
const { findUsersByDate } = require('../controller/user.controller');

const routers = express.Router();

routers.post('/', findUsersByDate);

module.exports = routers;