console.log("Hello Javascript");

/// STRING
var speech = "My Father Is A Very Good Man";
console.log(speech.toUpperCase());
console.log(speech.toLocaleLowerCase());
console.log(speech.indexOf("Very"));
console.log(speech.split(" "));

/// Number
var num1 = '50.87';
var num2 = 65;
var num1 = parseFloat(num1)
console.log(num1 + num2);

var num1 = '87.50';
var num2 = 45;
var num1 = parseInt(num1)
console.log(num1 + num2);

var num1 = '29.87';
var num2 = 65;
var num1 = +num1
console.log(num1 + num2);

var num1 = ''+30.87;
var num2 = 75;
var num1 = num1;
console.log(num1 + num2);

var number1 = 0.1;
var number2 = 0.2;
var total = number1 + number2;
total = total.toFixed(2);
console.log(total);

// MATH
var myNumber1 = -67;
var absoluteNumber = Math.abs(myNumber1);
console.log(absoluteNumber);

var myNumber2 = 53.076575;
var roundNumber = Math.round(myNumber2);
console.log(roundNumber);


var myNumber3 = 49.0000001;
var ceilNumber = Math.ceil(myNumber3);
console.log(ceilNumber);

var myNumber4 = 50.999999;
var floorNumber = Math.floor(myNumber4);
console.log(floorNumber);

var myNumber5 = Math.random() * 100;
var randomNumber = Math.round(myNumber5);
console.log(randomNumber);


var dateTime = new Date('2000-08-13')
console.log(dateTime);
