const { body } = require('express-validator/check');

const validateLogIn = () => {
    return [ 
        body('email').exists()
        .withMessage('email field is required')
        .isEmail()
        .withMessage('Email is invalid'),
        body('password')
        .exists()
        .withMessage('password field is required')
        .isLength({min : 6,max: 24})
        .withMessage('password must be in between 8 to 24 characters long')
       ] 
};

module.exports = validateLogIn;