// condition
const price = 300;
if(price > 500){

}
else if(price < 500){

}
 else if(price == 500){

}
else if(price != 500){

}
else if(price >= 500){

}
else if(price <= 500){

}

// array
const numbers = [45, 673, 33, 73, 74, 87];
const numberContainer = numbers.length;
numbers.push('Bsnglsdesh');
numbers.pop();
numbers[2] = "Nanu";

if(numbers.indexOf('Nanu') != -1){
    console.log('ase')
}
if(numbers.includes(673)){
    console.log('etao ase');
}

console.log(numbers);


// Loop
for(const number of numbers){
    console.log(number);
}


// function
function addNumber(num, num2){
    const add = num + num2;
    return add;
}

const output = addNumber(67, 78);
console.log(output);

// Object
const products = {
    name: 'Oppo',
    price: '20000'
}
console.log(products.name);