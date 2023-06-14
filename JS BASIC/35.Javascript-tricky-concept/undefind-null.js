/*
Undefind
1. Variable Value not Assign
2. Function but didn't write anything
3. just wrote return but return anything
4. Parameter that isn't passed
5. property that isn't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. explictly set value undefind




*/



let first;
// console.log(first);
function second(x, y){
    const sum = x + y;
}
const result = second(6, 7);
// console.log(result);
function add(a, b){
    const sum = a + b;
    return;
}
// console.log(add(7,9));

function per(f, g){
    const sum = f *2;
    console.log(g);
    return sum;
}
per(78);

const objects = {name: 'kishor', age: 20};
console.log(objects.address);

const numbers = [4, 5, 3, 5, 3, 5];
delete numbers[2];
console.log(numbers[2]);


const value = undefined;
console.log(value);