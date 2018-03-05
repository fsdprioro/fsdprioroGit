
document.onmousedown = function(arg) {

	if (arg.button === 2) {
		alert("Click derecho bloqueado");
		return;
	}
	// var objNombre = document.getElementById("fnombre");
	// console.log("Este es mi nombre: " ,objNombre.value   );
	// objNombre.addEventListener("blur",validoApe());
	console.log(arg);
};


function validoApe(arg) {

	console.log("Estoy validando el Apellido");
	console.log(arg.value);
	alert("fecha OK" );
};



+

function sumarDias(fechaForm, fechaNav) {

	var cincoDias = 432000;
	var DifeSegs= Math.round((fechaForm.getTime() - fechaNav.getTime())/1000);
	
	if (DifeSegs <= cincoDias) {
		DifeSegs = Math.round((fechaForm.getTime()/1000)) + (cincoDias - DifeSegs);
		var fechaEntrega = new Date((DifeSegs*1000));
		return fechaEntrega;
	} else {
		return fechaForm;
	}
	//return fechaNavPlazo.setDate(fechaNavPlazo.getDate() + plazo);
};


function controlFecha(fechaForm, horaForm) {

	fechaForm = fechaForm + "T" + horaForm  + ":00";
	var fechaNav = new Date();
	var fechaFor = new Date(fechaForm);
	var fechaEnt = new Date();
	
	if (fechaFor >= fechaNav) {
		fechaEnt = sumarDias(fechaFor, fechaNav);
	}
	else {
		return false;
	}

	fechaFor = fechaFor.getFullYear()+"-"+(fechaFor.getMonth()+1)+"-"+fechaFor.getDate();
	fechaNav = fechaNav.getFullYear()+"-"+(fechaNav.getMonth()+1)+"-"+fechaNav.getDate();
	fechaEnt = fechaEnt.getFullYear()+"-"+(fechaEnt.getMonth()+1)+"-"+fechaEnt.getDate();

	console.log("Fecha Nav2: ", fechaNav);
	console.log("Fecha For2: ", fechaFor);
	console.log("Fecha Ent2: ", fechaEnt);

	alert("2222");
	return true;
};


function validar() {

	var nombre = document.getElementById("fnombre").value;
	console.log(nombre);
	var apellido = document.getElementById("fapell").value;
	console.log(apellido);
	var fechaPeticion = document.getElementById("fec-peticion").value;
	console.log(fechaPeticion);
	var horaPeticion = document.getElementById("hor-peticion").value;
	console.log(horaPeticion);
	var sexo = document.getElementById("estado").value;
	console.log("Estado: " + sexo);
	

	var hombreForm=false;
	if (document.getElementById("genero-hombre").checked){
		hombreForm = true;
	}
	var mujerForm=false;
	if (document.getElementById("genero-mujer").checked){
		mujerForm = true;
	}
	var lunForm=false;
	if (document.getElementById("lunes").checked){
		lunForm = true;
	}
	var martForm=false;
	if (document.getElementById("martes").checked){
		martForm = true;
	}

	if (controlFecha(fechaPeticion, horaPeticion)){
		alert("fecha OK "+"  "+ fechaPeticion );
		return false;
	}
	else {
		alert("fecha NO OK "+"  "+ fechaPeticion );
	}
	return false;
};



