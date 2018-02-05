var express = require('express');
var router = express.Router();
var db = require("../model/index");
var helper = require("../helper/todos");

router.route('/')
	.get(helper.getTodos)
	.post(helper.CreateTodo);


router.route('/:todoId')
	.get(helper.getOneTodo)
	.put(helper.updateTodo)
	.delete(helper.deleteTodo);

module.exports = router;
