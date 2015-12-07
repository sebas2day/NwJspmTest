var gui = require('nw.gui');

var win = gui.Window.get();
win.show();
	
// Add debugger functionality 
window.addEventListener('keyup', function(e){
	if(e.keyCode == 123){
		win.showDevTools();
	}
	if(e.keyCode == 116){
		location.reload();
	}
});