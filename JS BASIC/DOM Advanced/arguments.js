function addNumbers(num1, num2){
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    return result;
}

const sum = addNumbers(667, 88, 78,86);
console.log(sum);

// string arguments
function addString(first, last){
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}

const output = addString('kamal', 'jamal', 'lola', 'lolota', 'loika');
console.log(output);