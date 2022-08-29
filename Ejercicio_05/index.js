console.log("Ejercicio 5");

const reverse = (texto= "") => 
{
    
    (!texto)
    ?
        alert("No ingreso texto")
    :
        console.log(texto.split("").reverse().join(""));
}

reverse("Hello");