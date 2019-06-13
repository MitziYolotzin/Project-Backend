const userModel = require('../../model/userModel');

const putUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const {
            email,
            lastArticle
        } = req.body;

        if (email === undefined || email === '') {
            return res.status(422).json({
                sucess: false,
                msg: 'email is required',
                errors: [{
                    msg: 'email is required'
                }]
            });
        }


        let isUserExists = await userModel.findById(userId); // TODO: check .select('name , email') to speed up

        if (!isUserExists) {
            return res.status(404).json({
                sucess: false,
                msg: 'No user found in the system',
                errors: [{
                    msg: 'No user found in the system'
                }]
            });
        }

        const article = { lastArticle }


        const temp = {
            ...isEmailExists,
            ...article
        }

        let updateUser = await userModel.findByIdAndUpdate(userId, temp, {
            new: true
        });

        if (updateUser) {
            return res.status(200).json({
                sucess: true,
                msg: 'user updated successfully',
                data: updateUser
            });
        } else {
            throw new Error('something went wrong with updating MongoDB');
        }
    } catch (error) {

        return res.status(500).json({
            sucess: false,
            msg: 'something went wrong, Please try again',
            errors: [error]
        });
    }
}

module.exports = putUser;