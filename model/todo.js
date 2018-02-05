var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var todoSchema = new Schema({
	name: {
		type: String,
		required: 'Name cannot black'
	},
	completed: {
		type: Boolean,
		default: false,
	},
	create_date: {
		type: Date,
		default: Date.now,
	}
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;