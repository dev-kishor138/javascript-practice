const numbers = [4, 5, 7, 10, 33, 89];
const output = [];

// const doubleIt = num => num * 2;
// for (const number of numbers){
//     const result = doubleIt(number);
//     output.push(result);
// }
const output2 = numbers.map(x => x * 2);
console.log(output2);

const output3 = numbers.map(x => x * x);
console.log(output3);