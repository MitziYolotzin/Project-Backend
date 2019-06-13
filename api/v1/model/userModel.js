let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var UserV2 = new Schema({
    name: {
        type: String,
        required : [ true, 'name is required'],
        lowercase : true
    },
    email: {
        type: String,
        required : [ true, 'email is required'],
        unique : true,
        lowercase : true
    },
    password: {
        type: String,
        required : [ true, 'password is required']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('UserV2', UserV2);