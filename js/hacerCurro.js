

self.addEventListener("message", function(e) {
	console.log("Aquí en el worker estamos currando.....");
	console.log("me has enviado: ", e.data);
	self.postMessage("Gracias, estoy ok");
}, false);