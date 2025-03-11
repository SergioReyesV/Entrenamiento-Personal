function suma(array: number[], test: (item: number) => boolean) {
	let total = 0;
	for (const item of array) {
		if (test(item)) {
			total += item;
		}
	}
	return total;
}

const resultado = suma([5, 10, 15, 20, 25, 30, 35], (algo) => algo > 20);

console.log(resultado);