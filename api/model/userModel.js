let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var User = new Schema({
    roles: {
        type: Object
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
    timestamps: false
});

module.exports = mongoose.model('User', User);