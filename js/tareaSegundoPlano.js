

var contador = 10;
function decrementar() {

	postMessage(contador);
	if (contador != 0) {


		contador--;

		setTimeout("decrementar()", 2000);
	}

}

decrementar();