console.log("Ejercicio 2")

//_______________substring______________________________________________

let palabra = "Hola a todo el mundo."

function obtenerPalabras() {
    console.log(palabra.substring(0,4));
}
obtenerPalabras();
//__________________slice_________________________________________________

let dividir = (texto,numero) => {
    console.log(texto.slice(texto,numero))
}
dividir("Hola mundo",4)