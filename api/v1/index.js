const express = require('express');
const authController = require('./auth');
const userController = require('./user');

let v1router = express.Router();

v1router.use('/auth', authController);
v1router.use('/user', userController);

module.exports = v1router;