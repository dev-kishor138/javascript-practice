var student = {
    name: 'Roni',
    roll: 58976,
    class: 9,
    address: 'Rangpur',
    phone: 1984719041
}

student.name = 'Abul';
console.log(student);
student['roll'] = 546652;
console.log(student);
var changeClass = student['class'];
student[changeClass] = 10
console.log(student);

student.age = 78;
console.log(student);
student['shift'] = 1;
console.log(student);

var callAge = student.age;
console.log(callAge);