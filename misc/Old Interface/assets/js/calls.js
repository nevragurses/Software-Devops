function UndeployCall(){
	 $.ajax({
              url: "../assets/py/post.py",
             context: document.body
            }).done(function() {
             alert('finished python script');;
            });	
}
