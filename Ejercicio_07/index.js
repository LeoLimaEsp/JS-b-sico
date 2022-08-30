console.log("Ejercicio_07");

const palindromo = (palabra = "") =>
{
    let alreves = palabra.split("").reverse().join("");

    if ( palabra == alreves )
    {
        return(` La palabra ${alreves} es igual a ${palabra}, por lo tanto "${palabra}" es palindromo.`)
    }
    else
    {
        return(` La palabra ${alreves} no es igual a ${palabra}, por lo tanto "${palabra}" no es palindromo.`)
    }
    
}

console.log(palindromo("arbol"));
console.log(palindromo("anitalavalatina"));
console.log(palindromo("oso oso"));