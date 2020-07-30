var mongoose = require('mongoose');
var {PersonSchema} = require('./personSchema');

var Person = mongoose.model('Person', PersonSchema);

module.exports = {Person};
