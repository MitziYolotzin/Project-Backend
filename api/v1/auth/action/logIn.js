const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator/check');

const config = require('../../../../config/env/config');
const userModel = require('../../model/userModel');

const postLogIn = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            sucess: false,
            msg: "Request is well-formed, however, due to semantic errors it is unable to be processed. Validation errors.",
            errors: errors.array() 
        });
    }

    let { email, password } = req.body

    try {
        let isUserExists = await userModel.findOne({ "email": email });

        if (!isUserExists) {
            return res.status(404).json({
                sucess: false,
                msg: "email not found on MongoDB",
                errors: [{
                    "msg": "email is wrong"
                }]
            })
        }

        let isPasswordValid = await bcrypt.compare(password, isUserExists.password);

        if (!isPasswordValid) {
            return res.status(403).json({
                sucess: false,
                msg: "Password for given email is not correct",
                errors: [{
                    "msg": "password is wrong"
                }]
            })
        }

        let token = jwt.sign({ id: isUserExists._id }, config.secret, { expiresIn: 86400 });

        return res.status(200).json({
            sucess: true,
            msg: "user login successfully",
            data: {
                "email": email,
                "token": token,
                "id": isUserExists._id
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                sucess: false,
                msg: "there was a problem log in a user.",
                errors: [ 
                    error
                ]
            }
        );
    }

}

module.exports = postLogIn;