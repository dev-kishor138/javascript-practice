function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

var output = factorial(10);
console.log(output);