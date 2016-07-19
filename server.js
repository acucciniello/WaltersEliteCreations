//server.js

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 3000;
server.listen(port);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/main.html');
})

app.get('/About', function(req, res){
	res.sendFile(__dirname + '/aboutUs.html')
})

app.get('/Contact', function(req, res){
	res.sendFile(__dirname + '/contact.html')
})

app.get('/Photos', function(req, res){
	res.sendFile(__dirname + '/photos.html')
})