function factorial(num){
    var fact = 1;
    var i = 1;
    while(i < num){
        i++;
        fact = fact * i;
    }
    return fact;
}

var result = factorial(6);
console.log(result);