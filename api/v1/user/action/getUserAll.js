const userModel = require('../../model/userModel');

const getUserAll = async (_req, res) => {
    try {
        let users = await userModel.find({});

        if (users.length > 0) {
            return res.status(200).json({
                sucess: true,
                msg: 'users fetched successfully',
                data: users
            });
        }

        return res.status(404).json({
            sucess: false,
            msg: 'No users found in the system',
            errors: [{msg: 'No users found in the system'}]
        });
    } catch (error) {
        return res.status(500).json({
            sucess: false,
            msg: 'something went wrong, Please try again',
            errors: [error]
        });
    }
}

module.exports = getUserAll;