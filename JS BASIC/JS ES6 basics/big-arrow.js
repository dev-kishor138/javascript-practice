const multiply = (num1, num2, num3) => num1 * num2 * num3;
console.log(multiply(56, 2, 3));

// Single Parameters
const square = (num) => num * num;
console.log(square(68));

// single parameters without brackets
const cube = num => num * num * num;
console.log(cube(3));

const getName = () => 'Sam Wilson';
console.log(getName());

// Multiline Function
const doMath = (x, y) => {
    const sum = x + y;
    const devide = x - y;
    const multipy = sum * devide;
    return multipy;
}
console.log(doMath(8,6));