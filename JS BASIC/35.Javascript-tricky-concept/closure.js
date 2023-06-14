function stopwatch (){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

const clock1 = stopwatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());