function primeNumber(n)
{
    for(i = 2; i < n; i++)
    {
        if(n % i == 0)
        {
            return 'not a prime number';
        }
    }
    return 'This number is a prime number';
}

var result = primeNumber(10);
console.log(result);