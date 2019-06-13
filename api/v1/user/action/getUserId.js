const userModel = require('../../model/userModel');

const getUserId = async (req, res) => {
    try {
        let { userId } = req.params;

        let user = await userModel.findById(userId).select('name , email');

        if (!user) {
            return res.status(404).json({
                sucess: false,
                msg: 'No user found in the system',
                errors: [{
                    msg: 'No user found in the system'
                }]
            })
        }

        return res.status(200).json({
            sucess: true,
            msg: `user ${userId} fetched successfully`,
            data: user
        })
    } catch (error) {

        return res.status(500).json({
            sucess: false,
            msg: 'something went wrong, Please try again',
            errors: [error]
        });
    }
}

module.exports = getUserId;