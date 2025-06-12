//1. Crear una función que reciba una lista de nombres y los imprima con su índice.
//2. Crear una función que reciba una cadena y devuelva cuántas vocales tiene.



let nombres = ["Gustavo", "Milena", "Estefania"];

function imprimirNombres (array){ 
    for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(i + " - " + element);
    }

}

imprimirNombres(nombres);


let contador = 0;

function contarVocales(cadena){
    for (let i = 0; i < cadena.length; i++ ){
        if(cadena[i] === 'A' ||cadena[i] === 'a' ||cadena[i] === 'E' ||cadena[i] === 'e' ||cadena[i] === 'I' ||cadena[i] === 'i' ||cadena[i] === 'O' || cadena[i] === 'o' || cadena[i] === 'U' || cadena[i] === 'u' ){
            contador ++;

        }
    }
    console.log(contador);
    
}


contarVocales("AAAaudd");