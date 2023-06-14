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
const sarukh = new Support('Sharukh Khan', 'India');
const akshay = new Support('Akshay Kumar', 'America');
amir.statSession();
salman.statSession();
console.log(amir, salman, sarukh, akshay);