const year = 2020;
let result = year % 4;
if(result == 0){
    console.log("This year is Leap Year.")
}
else{
    console.log("this year is not Leap year.")
}


function checkLeapYear(year)
{
    const reminder = year % 4;
    if(reminder == 0){
        return true;
    }
    else{
        return false;
    }
}

const output = checkLeapYear(2022);
console.log(output);

const output2 = checkLeapYear(2014);
console.log(output2);