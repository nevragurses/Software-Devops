var socket = io.connect('http://localhost:4001');

document.getElementById("ProjectPathButton").addEventListener('click', function(){
	socket.emit('upload', {
		origin:"4",
		destination: "2",
		action: "upload",
		ProjectName: document.getElementById("ProjectName").value,
		ProjectPath: document.getElementById("ProjectPath").value
		
	});
	document.getElementById("ProjectPath").value = "";
	document.getElementById("ProjectName").value = "";
});

