function checkLeapyear(year){
    reminder = year / 4;
    if(reminder % 0){
        return 'This year is leapyear';
    }
    else{
        return 'This year is not leapyear';
    }
}

var result = checkLeapyear(3000);
console.log(result);
var result2 = checkLeapyear(2022);
console.log(result2);