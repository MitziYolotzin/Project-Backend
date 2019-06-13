var UserModel = require('../../model/userModel');

module.exports = {
    create = UserModel.create(),
    findOne = UserModel.findOne(),
}