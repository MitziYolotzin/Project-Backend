const userModel = require('../../model/userModel');

const postUser = async (req, res) => {
    try {

        const {
            name,
            email
        } = req.body;

        if (name === undefined || name === '') {
            return res.status(422).json({
                sucess: false,
                msg: 'name is required',
                errors: [{
                    msg: 'name is required'
                }]
            });
        }

        if (email === undefined || email === '') {
            return res.status(422).json({
                sucess: false,
                msg: 'email is required',
                errors: [{
                    msg: 'email is required'
                }]
            });
        }


        let isEmailExists = await userModel.findOne({
            "email": email
        });

        if (isEmailExists) {
            return res.status(409).json({
                sucess: false,
                msg: 'email already exists',
                errors: [{
                    msg: 'email already exists'
                }]
            });
        }

        const temp = {
            name: name,
            email: email
        }

        let newUser = await userModel.create(temp);

        if (newUser) {
            return res.status(201).json({
                sucess: true,
                msg: 'user created successfully',
                data: newUser
            });
        } else {
            throw new Error('something went worng');
        }
    } catch (error) {
        return res.status(500).json({
            sucess: false,
            msg: 'something went wrong, Please try again',
            errors: [error]
        });
    }
}

module.exports = postUser;