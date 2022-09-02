console.log("Ejercicio_11");

const calcularFactorial = (num) =>
{
    if (num >= 1)
    {
        return num * calcularFactorial(num -1)
    }
    else
    {
        return 1
    }
}

console.log(calcularFactorial(5));

