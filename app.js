var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendfile("static/index.html");
});

app.get("/index.html", function(req, res) {
	res.redirect('/');
});

app.use(express.static('static'));

app.listen(3000);
console.log("Server started");
