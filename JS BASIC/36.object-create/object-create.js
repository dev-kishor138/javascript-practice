// 1. Using Object literal
const student = {
    name: 'Kishor',
    Roll: 154699,
    Reg: 1500969413
}
console.log(student);

// 2. Constructor
const person = new Object();
console.log(person);

// 3. 
// const human = Object.create();
const human = Object.create(student);
console.log(human.name);

// 4. Class 
class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const data = new User('Kona', 18);
console.log(data);

// 5. Function
function People (name){
    this.name = name;
}
const man = new People('Helal');
console.log(man);