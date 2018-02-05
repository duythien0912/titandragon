var db = require('../model');

exports.getTodos = function(req,res){
	db.Todo.find()
	.then(function(todos) {
		// body...
		res.json(todos);
	})
	.catch(function(err) {
		// body...
		res.send(err);
	});
};

exports.CreateTodo = function(req,res) {
	// body...
	db.Todo.create(req.body)
	.then(function(newtodo) {
		// body...
		res.status(201).json(newtodo);
	})
		.catch(function(err) {
		// body...
		res.send(err);
	});

};

exports.getOneTodo = function(req,res) {
	// body...
	db.Todo.findById(req.params.todoId)
	.then(function(foundTodo) {
		// body...
		res.json(foundTodo);
	})
	.catch(function(err) {
	// body...
		res.send(err);
	});	
}

exports.updateTodo = function(req,res) {
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
	.then(function(todo) {
		// body...
		res.json(todo);
	})
	.catch(function(err) {
	// body...
		res.send(err);
	});	
}

exports.deleteTodo = function(req,res) {
	db.Todo.remove({_id: req.params.todoId})
	.then(function() {
		// body...
		res.json({message: 'Just delete it!'});
	})
	.catch(function(err) {
	// body...
		res.send(err);
	});	
}

module.exports = exports;