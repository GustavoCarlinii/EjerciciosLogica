// Ejercicio 1 – Número par o impar

function esPar(numero) {
  if (numero % 2 === 0) {
    console.log(`El numero ${numero} es Par`);
  } else {
    console.log(`El numero ${numero} es impar`);
  }
}

// Ejercicio 2 – ¿Puede votar?

function puedeVotar(edad) {
  if (edad > 16) {
    console.log("Puede Votar");
  } else {
    console.log("No Puede Votar");
  }
}


// Ejercicio 3 – Clasificador de edad

function clasificadorEdad(edad){
    if(edad <18){
        console.log("Menor de Edad");
        
    }else if(edad > 18 && edad <60){
        console.log("Mayor de Edad");
        
    }else{
        console.log("Jubilado/a");
        
    }
}


const mensaje = clasificadorEdad(); //<=INGRESAR UNA EDAD 
console.log(mensaje);