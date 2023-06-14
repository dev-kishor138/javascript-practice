var a = 5;
var b = 7;
console.log('before swap a =', a, 'b =', b);

var temp = a;
a = b;
b = a;
console.log('after swap a =', a, 'b =', b);


// Another Way
var x = 67;
var y = 89;
console.log('before swap x =', x, 'y =', y);
var x = x + y;
var y = x - y;
var x = x - y;
console.log('after swap x =', x, 'y =', y);


//Another Way
var p = 34;
var q = 23;
console.log('before swap p =', p, 'q =', q);
[p, q] = [q, p];
console.log('after swap p =', p, 'q =', q);