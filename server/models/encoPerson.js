const mongoose = require('mongoose');
var {PersonSchema} = require('./PersonSchema');

var EncoPersonSchema = new mongoose.Schema({
    child: PersonSchema,
    status: {
        type: Number,
        default: 0
    },
    personId: {
        type: String,
        unique: true,
        required: true
    },
    encoId: {
        type: String
    }
});

var EncoPerson = mongoose.model('EncoPerson', EncoPersonSchema);

module.exports = {EncoPerson}