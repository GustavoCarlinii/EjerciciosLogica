// Ejercicio 1 – Número par o impar


function esPar(numero){
    if(numero % 2 === 0){
        console.log(`El numero ${numero} es Par`);
    }else{
        console.log(`El numero ${numero} es impar`);
        
    }
}

// Ejercicio 2 – ¿Puede votar?

function puedeVotar(edad){
    if(edad > 16){ 
        console.log("Puede Votar");
        
    }else{
        console.log("No Puede Votar");
        }
}

