var express = require('express');
var socket = require('socket.io');

var front = express();
var back = front.listen(4000, function(){
    console.log("listening on 4000")
});

front.use(express.static('public'));

var io = socket(back);

io.on('connection', function(socket){
    console.log("connect")
})