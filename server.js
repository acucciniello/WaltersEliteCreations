//server.js

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 5000;
server.listen(process.env.PORT || port);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/main.html');
})

app.get('/About', function(req, res){
	res.sendFile(__dirname + '/About/aboutUs.html')
})

app.get('/Contact', function(req, res){
	res.sendFile(__dirname + '/Contact/contact.html')
})

app.get('/Photos', function(req, res){
	res.sendFile(__dirname + '/Photos/photos.html')
})