// var factorial = 1;
// for(var i = 1; i <= 10; i++)
// {
//     var factorial = factorial * i;
//     console.log(factorial);
// }


function factorialCheck(n){
    var factorial = 1;
    for(var i = 1; i <= n; i++)
    {
        var factorial = factorial * n;
    }
    return factorial;
}


var output = factorialCheck(67);
console.log(output);

var array = [89, 37, 67, 45, 65, 56];
for(var i = 0; i <= array.length; i++){
    var output = array[i];
    console.log(output);
}


// var string = 'fsjfhfjh';
// var number = 7877;
// var array = [87, "kishor"];
// var bolian = true;
// var object = {
//     name: 'Kishor',
//     age: 19,
// }