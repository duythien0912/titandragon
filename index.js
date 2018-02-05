var express = require('express'),
	app = express()
	port = process.env.PORT || 3000,
	bodyParser = require('body-parser');

var todoRouter = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/static/views'))

app.get('/', function(req,res){
	res.sendFile("index.html");
});
app.use('/api/todos', todoRouter);

app.listen(port, function(){
	console.log("API ex run on "+ port);
});
