var peoples = ['Rakib', 'Shakib', 'Naim', 'Rakib', 'Soikot', 'Bristy', 'Naim', 'Soikot', 'Tanvir', 'Mysha', 'Rakib', 'Shakib', 'Kishor', 'Bristy'];
var duplicate = [];
for(var i = 0; i < peoples.length; i++)
{
    var element = peoples[i];
    var index = duplicate.indexOf(element);
    if(index == -1)
    {
        duplicate.push(element);
    }
}

console.log(duplicate);