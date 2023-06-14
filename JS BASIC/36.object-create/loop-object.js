const bottle = {
    color: 'Yellow',
    hold: 'water',
    price: 50,
    isClean: true
}
/*
for(let i = 0; i<10; i++){
} 
for(const number of numners){

}
for(const prop in student){

}

*/
for(const prop in bottle){
    console.log(prop, bottle[prop]);
}


const keys = Object.keys(bottle);
for(const prop of keys){
    console.log(prop, bottle[prop]);
}

// Advanced
const entries = Object.entries(bottle);
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}