console.log("Ejercicio_10");

const numeroAlReves = (numero = 0) =>
{
    (!numero)
    ?console.log("No has ingresado nada")
    :(typeof numero !== "number")
    ?console.log("No es un numero pero funciona")
    : numero = numero.toString();
    
    let numeroNuevo = numero.split("").reverse().join("");

    if( numero == numeroNuevo)
    {
        return console.log(`El numero ${numero} es igual a ${numeroNuevo}.`)
    }
    else 
    {
        return console.log(`El numero ${numero} no es igual a ${numeroNuevo}.`)
    }
    
}

numeroAlReves("70000007");