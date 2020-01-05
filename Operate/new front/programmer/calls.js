var socket = io.connect('http://localhost:4001');

document.getElementById("ProjectPathButton").addEventListener('click', function(){
	socket.emit('upload', {
		group: 6,
		payload: {ProjectPath: document.getElementById("ProjectPath").value}
		
	});
	document.getElementById("ProjectPath").value = "";
});

