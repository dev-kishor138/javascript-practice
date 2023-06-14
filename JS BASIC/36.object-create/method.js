const student = {
    id: 007,
    name: "Rahat",
    Roll: 154699,
    income: 15000,
    subject:['bangla', 'english', 'math', 'physics'],
    friends:[
        {
            name: 'Rony',
            roll: 99344,
            intrest: 'book lover'
        },
        {
            name: 'Korim',
            roll: 93094,
            interest: 'tour lover'
        }
    ],
    treatDay: function(expanse, boksis){
        this.income = this.income - (expanse + boksis);
        return this.money;
    }
}

const output = student.treatDay(900, 500);
console.log(student.friends[1].name);