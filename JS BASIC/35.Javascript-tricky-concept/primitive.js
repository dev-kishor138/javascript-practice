/*
Primitive data types
1. Number
2. string
3. boolean
4. undefined
5, null
6. symbol

Non Primitive Data Types
1. Object
*/

let a = 'kishor';
let b = a;
console.log(a, b);
a = 'rahat';
console.log(a, b);

// Object
let x = {job: 'developer'};
let y = x;
console.log(x, y);
x.job = 'Full stack Developer';
console.log(x, y);