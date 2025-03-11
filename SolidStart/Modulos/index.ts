import {   /// EXPORT NAME          
	secret_number,
	suma,
	resta,
	multiplicacion,
	division,
	Mate,
} from "./math.ts";

import Hola from "./math.ts" /// EXPORT DEFAULT

import * as todo from './math.ts'; //// EXPORT NAME


console.log("El numero secreto es ", secret_number);   //// EXPORT NAME
console.log("Resultado suma es ", suma(5, 5));
console.log("Resultado resta es ", resta(5, 5));
console.log("Resultado multiplicacion es ", multiplicacion(5, 5));
console.log("Resultado division es ", division(5, 5));


const obj = new Hola();     /// EXPORT DEFAULT
console.log('Resultado ',obj.add(10,5));
console.log('Resultado ',obj.rest(10,5));


const mat = new Mate();      //// EXPORT NAME
console.log('Resultado al cuadrado ',mat.alCuadrado(4));
console.log(mat.mensaje());
 