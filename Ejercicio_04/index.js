console.log("Ejercicio 4");



const repetirPalabras = (texto,numero) => 
{
    if (texto != "string" && typeof numero != "number")
    {
        alert("Ingresa los datos correctos")
    }
    else
    {
        console.log(texto.repeat(numero));
    }
}

repetirPalabras("hola. "  , 200);