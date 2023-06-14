function primenumber(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return "not a prime number";
        }
        else{
            return "prime number";
        }
    }
}

var output = primenumber(4);
console.log(output);