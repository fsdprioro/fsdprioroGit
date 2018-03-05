

var esDeLeon = false;


function validarDatosPersonales(datoPer, tam) {

	return datoPer.length >= tam ? true : false;
};



function obtenerFechaIngreso() {

	var fechaIngre = new Date();
	
	var fechaFor = fechaIngre.getFullYear()+"-"+(fechaIngre.getMonth()+1)+"-"+fechaIngre.getDate();
	var horaFor = fechaIngre.getHours()+ ":" + fechaIngre.getMinutes();

	console.log("fecha Ingreso", fechaFor);
	console.log("hora Ingreso", horaFor);

	document.getElementById("fecIngreso").value = fechaFor;
	document.getElementById("horIngreso").value = horaFor;

	return true;
};



function validarDocNacIdent(documentoIdent) {

	var longDni = documentoIdent.length;

	if (longDni > 7) {
		var dniNumb = new Number(documentoIdent.substr(0,(longDni - 1)));
		if (Number.isNaN(dniNumb)) return false;

		var alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
		if (alfabeto.indexOf(documentoIdent.substr((longDni - 1),1).toUpperCase()) < 0)
			return false;

		return true;
	}
	else {
		return false;
	}
};



function desdeHaceCuantoTiempo(){

	var visita = document.getElementsByName("tiempoVisita");

	var tiempoVisita =0;
	for( var i=0; i < visita.length; i++) {
		if (visita[i].checked) {
			console.log("visita pulsado:" + visita[i].value)
			tiempoVisita = visita[i].value;
		}
	}
	console.log("tiempoVisita: ", tiempoVisita);
	return tiempoVisita;
};



function obtenerDolencias(){

	var diasIng =0;
	if (document.getElementById("fiebre").checked == true) diasIng+=2;  

	if (document.getElementById("dolorMus").checked == true) diasIng+=2;  

	if (document.getElementById("dolorEst").checked == true) diasIng+=2; 

	if (document.getElementById("vomitos").checked == true)  diasIng+=2; 

	if (document.getElementById("mareos").checked == true)  diasIng+=2;  

	if (document.getElementById("hipertension").checked == true)  diasIng+=2; 
	
	if (document.getElementById("trauma").checked == true) diasIng+=2; 

	if (document.getElementById("perdidaSensi").checked == true)  diasIng+=2;

	if (document.getElementById("insuCardio").checked == true)  diasIng+=2; 

	if (document.getElementById("insuRespi").checked == true)  diasIng+=2; 

	if (document.getElementById("otrasDol").checked == true)  diasIng+=2; 

	console.log("totalDiasIngreso", diasIng);
	alert("dias Ingreso");

	return diasIng;
};



function validarDatos() {
	var totalDiasIngreso = 0;

	var nombre = document.getElementById("nombreFor").value;
	console.log(nombre);
	if (!validarDatosPersonales(nombre,3))
		return false;

	var apellido = document.getElementById("apellFor").value;
	console.log(apellido);
	if (!validarDatosPersonales(apellido,3))
		return false;

	var documentoIdent = document.getElementById("dniFor").value;
	console.log(documentoIdent);
	if (!validarDocNacIdent(documentoIdent))
		return false;

	var numeroSS = document.getElementById("numSsFor").value;
	console.log(numeroSS);
	if (!validarDatosPersonales(numeroSS,12))
		return false;

	if (numeroSS.substr(0,2) == "24"){
		console.log("Es de los nuestros : " , numeroSS.substr(0,2));
		totalDiasIngreso = totalDiasIngreso + 1;
	}

	var visita = desdeHaceCuantoTiempo();
	console.log("tiempoVisita: ", visita);
	obtenerFechaIngreso();
	
	var diasDolen = obtenerDolencias();
	if (diasDolen > 0) {
		totalDiasIngreso = totalDiasIngreso + diasDolen;
		document.getElementById("diasIngreso").value = totalDiasIngreso;
	}
	else 
		return false;

	console.log("diasIngreso: ", totalDiasIngreso);
	alert("fecha2 y hora2");
	

	return false;
};



