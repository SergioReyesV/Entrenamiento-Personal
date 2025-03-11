const numeros2 = [1, 2, 3, 4, 5];

numeros2.map((x) => {
	console.log(x);
});
//console.log(numeros2);

const numeros = [
	{
		num1: 10,
		num2: 10,
	},
	{
		num1: 20,
		num2: 20,
	},
	{
		num1: 30,
		num2: 30,
	},
	{
		num1: 40,
		num2: 40,
	},
];

const resultado = numeros.map(({num1, num2}) => num1 * num2).reverse();

console.log(resultado);