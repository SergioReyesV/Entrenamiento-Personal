const miContador = function gg() {
	let _contador = 0;

	function incrementar() {
		return _contador++;
	}

	function decrementar() {
		return _contador--;
	}

	function valor() {
		return _contador;
	}

	return { incrementar, decrementar, valor };
};

const usar = miContador();
usar.incrementar();
console.log(usar.valor());
usar.incrementar();
usar.incrementar();
console.log(usar.valor());

function algo(
	param1: { incrementar: () => void },
	param2: () => number,
	param3: { decrementar: () => void },
) {}

algo(miContador(), miContador().valor, miContador());
