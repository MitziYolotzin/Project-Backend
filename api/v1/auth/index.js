const express = require('express');
let authRouter = express.Router();
let { root, logIn, signUp } = require('./action');
let {
    validateLogIn, 
    validateSignUp 
} = require('./middleware');

authRouter.get('/', root);
authRouter.post('/signup', validateSignUp(), signUp);
authRouter.post('/login', validateLogIn(), logIn);

module.exports = authRouter;