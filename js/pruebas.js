
var bbb = "Felix Sanchez";



function habilitar() {

	var ele = document.getElementById("boton");
	var marca = document.getElementById("casilla").checked;
	if (marca) { 
		ele.removeAttribute("disabled");
	}
	else {
		ele.setAttribute("disabled","disabled");
	}
};

function cambiarParrafo() {
	var texto ="Nuevo texto para el párrafo pero sin reservar nada";
	document.getElementById("parraf").innerHTML = texto;
}		



function hacerPeque() {
	document.getElementById("foto").setAttribute("width","325");
	document.getElementById("foto").setAttribute("height", "115");
};		

function hacerGrande() {
	document.getElementById("foto").setAttribute("width", "625");
	document.getElementById("foto").setAttribute("height", "275");
};		



document.onmousedown = function(arg) {

	if (arg.button === 2) {
		alert("Click derecho bloqueado");
		return;
	}
	console.log(arg);
};


function aleatorioEntre(min,max) {

	var num = Math.floor( Math.random() * (max - min + 1) + min);
	console.log(num);
};


aleatorioEntre(1,49);


function obtenerAleatorio(){
	
	var aux = Math.random();
	console.log(aux);
	return aux;
};

// console.log(obtenerAleatorio() );


function retorBoleano(){
	if (obtenerAleatorio() > 0.5)
		return true;
	else
		return false;
};


console.log(retorBoleano() );


function validar() {

	var nombre = document.getElementById("fnombre").value;
	console.log(nombre);
	var apellido = document.getElementById("fapell").value;
	console.log(apellido);
	var fechaNac = document.getElementById("fec-nacimiento").value;
	console.log(fechaNac);



	alert("validando");
	return true;
};


/*
persona = {
	nombre: "Juan",
	apellido: "Martínez",
	imprimirNombre: function() {

		console.log(this);
	},
	direccion:{
		pais:"España",
		obtenerPais:function(){
			console.log(this);

			var nuevaDireccion = function(){

				console.log(this);
			}
			nuevaDireccion();
		}
	}

};

persona.imprimirNombre();
persona.direccion.obtenerPais();

*/

/*function crearFuncion(){
	return function(nombre) {
		for (i=0; i<10;i++) {
			console.log("Me crearon " + nombre , i);
		}
	}
};
var otraFuncion = crearFuncion();
otraFuncion(persona.nombre);

*/


/*
function crearFuncion(){
	return function(nombre) {
		for (i=0; i<10;i++) {
			console.log("Me crearon " + nombre , i);
		}
		return function(){
			console.log("Esta es la segunda función");
		}
	}
};
var otraFuncion = crearFuncion();
var segundaFuncion = otraFuncion(persona.nombre);
segundaFuncion();


function rr(){
	console.log("Función de primera clase");
}

rr();
rr.nombre = "FuncionPrimeraClase";

var personaMet = {
	nombre: "Jacinto",
	apellido: "Díez",
	imprimirNombre: function() {
		console.log("Nombre Completo");
	}
};
personaMet.imprimirNombre();


/*

var personaMet= {
	nombre: "Jacinto",
	apellido: "Díez",
	imprimirNombre: function() {
		console.log(this);
	},
	direccion:{
		calle: "Lancia 26",
		obtenerCalle: function() {
			// console.log(this); }
			console.log("La calle es: " + this.calle); }
		}
	};

	// personaMet.imprimirNombre();
	// personaMet.direccion.obtenerCalle();


	var personaMet= {
		nombre: "Jacinto",
		apellido: "Díez",
		imprimirNombre: function() {
			console.log(this);
		},
		direccion:{
			calle: "Lancia 26",
			obtenerCalle: function() {
				console.log("La calle es: " + this.calle);
				var nuevaCalle = function() {
					console.log(this);
				}
				nuevaCalle();
			}
		}
	};

	personaMet.direccion.obtenerCalle();



	*/
	

	// var juan ={};
	// console.log(juan); /* devuelve un objeto vacio */

	function Persona(nombre, apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = 30;

		this.obtenerNombre = function(){
			return this.nombre + " " + this.apellido + " " + this.edad;
		}
	};
	//var juan = Persona(); 	/* da un undefined */
	
	var juan = new Persona("Andres", "Díez");   /* objeto vacio de tipo Persona*/
	/*
	console.log( juan );
	console.log( juan.nombre );
	console.log( juan.obtenerNombre() );


	*/

	var fecha = new Date();

	var numPrim = [12,14,23,28,29,45]; 

	console.log( numPrim );

	numPrim = numPrim.join("/");
	console.log( numPrim );
	numPrim = numPrim.split("/");
	console.log( numPrim );
	numPrim.push("49");
	console.log( numPrim );




	function Academia(activ, nombre, calle, ciudad, autonomia, pais) {
		this.actividad = activ;
		this.nombre = nombre;
		this.calle = calle;
		this.ciudad = ciudad;
		this.codPost = 24003;
		this.ccAutonoma = autonomia;
		this.pais = pais;
		this.obtenerAcademia = function(){
			return this.nombre + " " + this.calle + " " + this.codPost;
		}
	};


	var acd = new Academia("Enseñanza", "Acción Laboral", "Lancia 26" ,"León", "Castilla y León","España");  

// console.log("actividad: " + acd.actividad);

// Academia.prototype.jefe = "Jacinto Díez";

// Academia.prototype.obtenerAcademia = function(){
// 	return this.nombre + " " + this.calle + " " + this.codPost;}


	// for (prop in acd) {
	// 	console.log(prop +" => "+ acd[prop]);
	// }

	console.log(acd);



// si en una función necesitamos un tipo de dato, siempre verifcar que recibimos el tipo de
// dato correcto, sino, mejor no seguir.

function controlParametros(parametro1){

	if (typeof parametro1 == "number") {
		console.log(  typeof parametro1,  parametro1);

	}else if (typeof parametro1 == "string") {
		console.log(  typeof parametro1,  parametro1);

	}else if (typeof parametro1 == "undefined") {
		console.log(  typeof parametro1,  parametro1);

	}else if (typeof parametro1 == "function") {
		console.log( typeof parametro1, parametro1());

	}else if (typeof parametro1 == "object") {

		if (parametro1 instanceof Academia) {
			console.log( typeof parametro1, parametro1);

		}else if (parametro1 instanceof Persona) {
			console.log( typeof parametro1, parametro1);

		}else if (parametro1 instanceof Array) {
			console.log( typeof parametro1, parametro1);
			console.log("Arrayyyyyyyyyyyy");

		}else if (parametro1 instanceof Date) {
			console.log( typeof parametro1, parametro1);
			console.log("Dateeeeeeeeeeeee");

		}
		else {
			console.log( typeof parametro1, parametro1);
		}
	}
};



var a = function pp1(){
	console.log("soy una función");
};

var b = {a: 2, b: "bbbb"};


controlParametros(a);






//Geolocalización
// if (navigator.geolocation) { 
// 	navigator.geolocation.getCurrentPosition(
// 		function(locali){
// 			console.log("latitud: ",locali.coords.latitude);
// 			console.log("longitud: ",locali.coords.longitude);
// 		},
// 		function() {
// 			Alert("pues nada, tu mismo");
// 		}
// 		);
// }
// else {
// 	alert("no esta soportado todavia");
// }



//localStorage
if (typeof(Storage) !== "undefined") { //el navegador lo soporta?

	localStorage.setItem("miClave", 1221); // Setter
	//getter
	var clavee = Number(localStorage.getItem("miClave"));
	console.log("local storage pagesize:", clavee);
}
else{  /*El navegador no lo soporta*/
	alert("no esta soportado todavia");
}



//localStorage
if (typeof(Storage) !== "undefined") { //el navegador lo soporta?

	//getter
	var paginas = Number(sessionStorage.getItem("pagVisitadas")) +1;
	

	sessionStorage.setItem("pagVisitadas", paginas); // Setter
	console.log("Paginas navegadas:", Number(sessionStorage.getItem("pagVisitadas")));
}
else{  /*El navegador no lo soporta*/
	alert("no esta soportado todavia");
}

//Worker

var tareaSP;
var pmensaje = document.getElementById("mensaje");
if (typeof(Worker) !== "undefined") { //el navegador lo soporta?
	//ejecuta el javaScript en segundo plano
	
	tareaSP = new Worker("tareaSegundoPlano.js");
	
	//recibir notificaciones
	tareaSP.onmessage = function(datos) {/*en event.data tenemos el dato que se notifica*/
		pmensaje.innerHTML = datos.data;
	}		
}else{ 
	/*El navegador no lo soporta Web Worker*/
	alert("no esta soportado todavia");
}

function pararTareaSP(){
	//terminar la tarea
	tareaSP.terminate();
	tareaSP = "undefined";
};

function fibonacci(numero) {
	var resultado;

	postMessage(resultado);

};

//fibonacci(39);





