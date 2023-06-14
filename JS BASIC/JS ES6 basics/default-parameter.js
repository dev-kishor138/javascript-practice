function add(num1, num2 = 0){
    // Option 01
    // num2 = num2 || 0;
    // Option 02
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}

const output = add(15);
console.log(output);