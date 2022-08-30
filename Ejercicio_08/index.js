console.log("Ejercicio_08");

const sacarCarateres = (texto, basura= "") => 
{
    let expresionRegular = /\D/g;

    let nuevoTexto = texto.replace(expresionRegular, basura);

return(nuevoTexto)
}


console.log(sacarCarateres("wdfhfhdfdhw1, w2fgfdgfgdgs, w3fhfdhfdbfdbf, w4fdfdhfdhf, w5fhfdhdhdf"));