class Support {
    name;
    role = 'Support Web Dev';
    address;
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    statSession(){
        console.log(this.name, 'start a support')
    }
}

const amir = new Support('Amir Khan', 'Dhaka');

const salman = new Support('Salman Khan', 'Dubai');
amir.statSession();
salman.statSession();
// console.log(amir, salman);