var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
},{ versionKey: false });



module.exports = mongoose.model('user', userschema);