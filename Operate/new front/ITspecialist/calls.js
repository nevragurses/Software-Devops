var socket = io.connect('http://localhost:4001');



document.getElementById("AssignmentButton").addEventListener('click', function(){
	socket.emit('assignment', {
		group: 5,
		payload: {ProjectName: document.getElementById("ProjectName").value,
		 ProjectDescription:document.getElementById("ProjectDescription").value}
		
	});
	document.getElementById("ProjectName").value = "";
	document.getElementById("ProjectDescription").value = "";
});

document.getElementById("UndeployButton").addEventListener('click', function(){
	socket.emit('undeploy', {
		group: 5,
		payload: {UndeployProjectName: document.getElementById("UndeployProjectName").value}
		
	});
	document.getElementById("UndeployProjectName").value = "";
});



socket.on('postIncoming', function(data){
	document.getElementById("ProjectName").value = "got the value " + data.hi + " as an argument of \"hi\" in POST";
});