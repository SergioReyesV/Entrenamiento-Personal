export const secret_number = 30;

export const suma = (a, b) => a + b;
export const resta = (a, b) => a - b;
export const multiplicacion = (a, b) => a * b;
export const division = (a, b) => a / b;

export class Mate{
    alCuadrado(x){
        return x*x;
    }
    mensaje(){
        return 'Esto es un mensaje';
    }
}

export default class Hola {

    add(a, b){ 
        return a + b;
    }

    rest(a, b){ 
        return a - b;
    }

};