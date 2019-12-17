var socket = io.connect('http://localhost:4000');



document.getElementById("UndeployButton").addEventListener('click', function(){
	socket.emit('undeploy', {
		ProjectName: document.getElementById("ProjectName").value
	});
	document.getElementById("ProjectName").value = "";
}); 

