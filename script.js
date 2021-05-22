setInterval(function fun(){
	var current = new Date();
	document.getElementById("myTime").innerHTML = current.toLocaleTimeString();
},100);
