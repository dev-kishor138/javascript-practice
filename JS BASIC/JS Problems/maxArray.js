var age = [12, 23, 45, 54, 43, 53, 35, 32, 15, 18, 20];
var max = age[0];
for(var i = 0; i < age.length; i++)
{
    var element = age[i];
    if(element > max)
    {
        max = element;
    }
}
console.log(max);