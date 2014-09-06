var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/', function(req, res) {
	res.sendfile("static/index.html");
});

app.get("/index.html", function(req, res) {
	res.redirect('/');
});
