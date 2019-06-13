const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator/check');

const userModel = require('../../model/userModel');

const postSignUp = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            sucess: false,
            msg: "Request is well-formed, however, due to semantic errors it is unable to be processed. Validation errors",
            errors: errors.array() 
        });
    }

    try {
        let { name, email, password } = req.body;
    
        let isEmailExists = await userModel.findOne({ "email": email });
    
        if (isEmailExists) {
            return res.status(409).json({
                sucess: false,
                msg: "email already exists",
                errors: [{
                    "msg": "email already exists"
                }]
            })
        }
    
        let hashedPassword = await bcrypt.hash(password, 8);
        let user = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword
        });

        if (!user) {
            return res.status(500).json(
                {
                    sucess: false,
                    msg: "there was a problem creating user in database.",
                    errors: [{
                        "msg": "there was a problem creating user in database."
                    }]
                }
            );
        }

        return res.status(201).json({
            sucess: true,
            msg: "user registered successfully",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
                sucess: false,
                msg: "there was a problem sign up the user.",
                errors: [
                    error
                ]
        });
    }


}

module.exports = postSignUp;