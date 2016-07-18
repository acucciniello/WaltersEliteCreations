//server.js

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 3000;
server.listen(port);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/main.html');
})