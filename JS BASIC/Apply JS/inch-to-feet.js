// Normal Way
var inch = 179;
var feet = inch / 12;
console.log(feet);

// Use Function
function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}
var person1 = inchToFeet(56);
console.log(person1);
var person2 = inchToFeet(65);
console.log(person2);