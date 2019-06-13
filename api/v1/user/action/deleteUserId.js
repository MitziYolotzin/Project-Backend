const userModel = require('../../model/userModel');

const deleteUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        let user = await userModel.findByIdAndRemove(userId);
        if (user) {
            return res.status(204).json({
                sucess: true,
                msg: `user with id ${userId} deleted successfully`,
                data: user
            });
        }

        return res.status(404).json({
            sucess: false,
                msg: 'No users found in the system',
                errors: [{
                    msg: 'No users found in the system'
                }]
        });

    } catch (error) {

        return res.status(500).json({
            sucess: false,
            msg: 'something went wrong, Please try again',
            errors: [error]
        });
    }
}

module.exports = deleteUserId;