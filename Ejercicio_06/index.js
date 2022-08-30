console.log("Ejercicio_06");

// const buscarPalabras = (cadena, palabra) => 
// {
// let contador = 0;
// let i = 0;

//     while( i !== -1)
//     {
//         i = cadena.indexOf(palabra, i);
        
//         if(i !== -1)
//         {
//             contador ++;
//             i++;
//         }
//     }
//     return(`La palabra ${palabra}, se repite ${contador} veces.`)
// }


// console.log(buscarPalabras("casa casa casa", "casa"))


const ejercicioDePrueba = (cadenaDeTexto, palabraAEncontrar) => 
{
    let contador2 = 0;
    let j = 0;

    while( j != -1)
    {
        j = cadenaDeTexto.indexOf(palabraAEncontrar, j)
        if( j != -1)
        {
            contador2++
            j++
        }
    }
    return(`La palabra "${palabraAEncontrar}", se repite ${contador2} veces.`)
}

console.log(ejercicioDePrueba("La palabra a encontrar es palabra y palabra tiene muchas palabras", "palabra"));

