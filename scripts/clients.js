var clientsArray = new Array();
var pos = 0;

/*-------------------- Ajax code ---------------------- */
	
function getXmlHttpRequestObject() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest(); //Not IE
	} else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP"); //IE
	} else {
		alert("Your browser doesn't support the XmlHttpRequest object.");
	}
}						
						
function slideShow() {
	// create a request object
	var Req = getXmlHttpRequestObject();		
	var txtStrings = "";		

	// now  get the hello_world.txt file
	Req.open("GET", 'data/clientsData.txt', true);
	// readyState is 4 when the resource is completely loaded
	Req.onreadystatechange = function() {
		if (Req.readyState == 4) {
			txtStrings = Req.responseText;					
			txtArray = txtStrings.split("\n");					
			for(var i = 0; i < txtArray.length; i++) {
				tempArray = txtArray[i].split(",");	
				clientsArray[i] = {
					title : tempArray[0],
					path : tempArray[1],
					alt : tempArray[2],
					url : tempArray[3],
					desc : tempArray[4]
				};
			}
			switchImage();
		}		
	} 		
	Req.send(null);
}
/*---------------------- DOM Code --------------------------- */
function switchImage() {
	if (pos >= clientsArray.length) {
		pos = 0;
	}	else {
		if(pos < 0) {
		pos = clientsArray.length - 1;
		}
	}
	document.images.namedItem("path").src="images/clients/"+clientsArray[pos]["path"];
	document.images.namedItem("path").alt=clientsArray[pos]["alt"];
	document.getElementById("title").innerHTML=clientsArray[pos]["title"];
	document.getElementById("desc").innerHTML=clientsArray[pos]["desc"];
	document.links.namedItem("url").href=clientsArray[pos]["url"];
	
	if (pos == clientsArray.length) {
   	pos = -1;
   }
   pos++;	
}
/*----------------------  Event handling code --------------- */
window.onload = function() {
			var eipClients = setInterval(slideShow, 7000);
		}		