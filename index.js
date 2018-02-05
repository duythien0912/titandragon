var express = require('express'),
	app = express()
	port = process.env.PORT || 3000,
	bodyParser = require('body-parser');

var todoRouter = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
	res.send("hello from root");
});
app.use('/api/todos', todoRouter);

app.listen(port, function(){
	console.log("API ex run on "+ port);
});
