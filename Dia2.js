//1. Crear una función que reciba un array de números y devuelva su suma.
//2. Crear una función que reciba un array y diga cuál es el mayor número.


let numeros = [0, 1,3,9];
let resultado = 0;
let variable1= 0;
let variable2= 0;

for (let i = 0; i < numeros.length; i++) {
    resultado += numeros[i];         

}

console.log(resultado);



numeros.sort((a,b) => b -a);

console.log(numeros[0]);
