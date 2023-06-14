function factorial(num){
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}

const output = factorial(7);
console.log(output);


function factorialRecursive(num){
    if(num == 1){
        return 1;
    }
    else{
        return num * factorialRecursive(num - 1);
    }
}
var result = factorialRecursive(7);
console.log(output);