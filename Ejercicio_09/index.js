console.log("Ejercicio_09");

function getRandomArbitrary(min = 0, max= 0) {
    (!min)
    ? alert("No ingresate el valor minimo")
    :(!max)
    ? alert("No ingresaste el valor maximo")
    : console.log(Math.random() * (max - min) + min);
}

getRandomArbitrary(600,);

