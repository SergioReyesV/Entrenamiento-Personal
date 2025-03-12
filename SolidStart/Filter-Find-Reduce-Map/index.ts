const arreglo = [1, 2, 3, 4, 5, 6];

///MAP  hace una copia del arreglo original
const ejemploMap = arreglo.map((v)=>v)
console.log('Resultado Map: ',ejemploMap);



const resultado = arreglo.filter((v) => {
	//FILTER regresa un nuevo arreglo con los indices que cumplen la condicion
	return v % 2 === 0;
});
console.log(resultado);

const personas = [
	{
		nombre: "Sergio",
		apellido: "Reyes",
		edad: 24,
	},
	{
		nombre: "Edgar",
		apellido: "Rebollo",
		edad: 25,
	},
	{
		nombre: "Bruce",
		apellido: "Wayne",
		edad: 33,
	},
];
const adultos = personas.filter((v) => v.edad > 24);
console.log(adultos);

//////////////////////////////////////////////////////////////////////////////////

const resultado2 = arreglo.find((v) => v > 3); // FIND regresa el primer indice que cumpla con la condicion
console.log(resultado2);

const adultos2 = personas.find((v) => v.apellido === "Wayne");
if (!adultos2) {
	console.log("Undefine");
} else {
	console.log(adultos2);
}

// REDUCE

const res = arreglo.reduce((accum, item) => {
	return accum + item;
});
console.log(res);

const hola = {
	saludo: "lHoa soy",
	edad: 24,
};


//KEYS obtiene las propiedades de un objeto
console.log(Object.keys(personas));

//VALUES obtiene los valores de un objeto
console.log(Object.values(personas));

