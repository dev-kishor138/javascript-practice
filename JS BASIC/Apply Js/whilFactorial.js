var i = 1;
var factorial = 1;
while(i <= 5){
    var factorial = factorial * i;
    i++;
    // console.log(i, factorial);
}
console.log(factorial);



// now function
function checkFacttorial(n){
    var i = 1;
    var factorial = 1;
    while(i <= n){
        var factorial = factorial * i;
        i++;
    }
    return factorial;
}

var output = checkFacttorial(7);
console.log(output);