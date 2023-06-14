const bottle = {
    color: 'Yellow',
    hold: 'water',
    price: 50,
    isClean: true
}

const keys = Object.keys(bottle);
console.log(keys);
console.log(Object.values(bottle));
console.log(Object.entries(bottle));
// Object.seal(bottle);
Object.freeze(bottle);

bottle.price = 100;
delete bottle.isClean;
console.log(bottle);
