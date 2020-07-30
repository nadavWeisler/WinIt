var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        minlength: 2
    },
    personId:{
        type: String,
        require: true,
        unique: true 
    },
    lastName: {
        type: String,
        require: true,
        minlength: 2
    },
    ifActivist: {
        type: Boolean,
        default: false
    },
    birthDay: {
        type: Date
    },
    phoneNumber: {
        type: [String]
    },
    tags: {
        type: [String]
    }
});

module.exports = {PersonSchema};