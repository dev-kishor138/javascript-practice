function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}

var dadaFeet = inchToFeet(678);
console.log(dadaFeet);

function semiToInch(semi){
    var inch = semi / 10;
    return inch;
}

var sixInch = semiToInch(70);
console.log(sixInch);

function semiToFeet(semi){
    var feet = semi / 30;
    return feet;
}
var degFeet = semiToFeet(52);
console.log(degFeet);


function cmToMeter(cm)
{
    var meter = cm / 100;
    return meter;
}

var convert = cmToMeter(356);
console.log(convert);

function meterTokm(meter)
{
    var km = meter / 1000;
    return km;
}
var convert2 = meterTokm(7838);
console.log(convert2);

