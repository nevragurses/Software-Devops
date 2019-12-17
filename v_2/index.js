var express = require('express');
var socket = require('socket.io');
var request = require('request');


var front = express();
var back = front.listen(4000, function(){
	console.log("listening on 4000")
});

front.use(express.static('public'));

var io = socket(back);

io.on('connection', function(socket){
	socket.on('undeploy', function(data){
		undeployPost(data)
	});
});

function undeployPost(jsonData){
	request.post(
		'http://localhost:8081',
		{ json: jsonData },
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body);
			}
		}
	);
}