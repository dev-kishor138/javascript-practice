function factorialNumber(number)
{
    var factorial = 1;
    for(var i = 1; i < number; i++)
    {
        factorial = factorial * i;
    }
    return factorial;
}

var result = factorialNumber(8);
console.log(result);