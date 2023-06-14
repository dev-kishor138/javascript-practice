// LOOP
var distric = ['Dhaka', 'Rajshahi', 'Rangpur', 'Chittagong', 'Syhlet', 'Barishal', 'Khulna', 'Mymenshing'];
for(var i = 0; i < distric.length; i++){
    var output = distric[i];
    console.log(output);
}

//Function
function multiplication(num1, num2){
    var add = num1 * num2;
    return add;
}

var result = multiplication(5, 7);
console.log(result);


//Function & Loop
function largestNumber(numbers)
{
    var larger = numbers[0];
    for(var i = 0; i < numbers.length; i++)
    {
        var element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}

var lnresult = largestNumber([65, 76, 75, 62, 65, 24]);
console.log(lnresult);
