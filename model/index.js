var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://thien:thien@ds111138.mlab.com:11138/titandragon-db');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");