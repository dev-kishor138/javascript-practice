var numbers = [78, 54, 28, 92, 51, 91, 27, 18];
var sum = 0;
for(var i = 0; i < numbers.length; i++)
{
    var element = numbers[i];
    sum = sum + element;
}
console.log(sum);


// Use Function
function arraySum(numbers)
{
    var sum = 0;
    for(var i = 0; i < numbers.length; i++)
    {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var allNumbers = [78, 54, 28, 92, 51, 91, 27, 18];
var output = arraySum(allNumbers);
console.log(output);