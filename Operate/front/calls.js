var socket = io.connect('http://localhost:4001');

//document.getElementById("UndeployButton").addEventListener('click', function(){
//	socket.emit('undeploy', {
//		ProjectName: document.getElementById("ProjectName").value
//	});
//	document.getElementById("ProjectName").value = "";
//});

document.getElementById("ProjectPathButton").addEventListener('click', function(){
	socket.emit('upload', {
		group: 5,
		payload: {ProjectPath: document.getElementById("ProjectPath").value}
		
	});
	document.getElementById("ProjectPath").value = "";
});

socket.on('postIncoming', function(data){
	document.getElementById("ProjectName").value = "got the value " + data.hi + " as an argument of \"hi\" in POST";
});