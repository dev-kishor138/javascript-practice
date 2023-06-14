const numbers = [7, 87, 38, 48, 90, 4, 6];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);
const smallNumbers = numbers.filter(number => number < 20);
console.log(smallNumbers);

const products = [
    {name: 'Umbrella', price: 200, color: 'pink'},
    {name: 'Shirt', price: 2000, color: 'black'},
    {name: 'Pant', price: 4600, color: 'white'},
    {name: 'Shoe', price: 3900, color: 'black'}
];
const expensive = products.filter(product => product.price > 250);
console.log(expensive);
const black = products.filter(product => product.color == 'red');
const findColor = products.find(product => product.color == 'pink')
console.log(black);
console.log(findColor);