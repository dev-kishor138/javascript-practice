const friends = ['Tom Hanks', 'Tom Hanks', 'Abdullah Shahid'];
const frL = friends.map(friend => friend.length);
console.log(frL);

const user = [
    {name: 'rahat', pass: 282357},
    {name: 'rony', pass: 827374},
    {name: 'habu', pass: 084734},
    {name: 'abu', pass: 483909}
]
const userName = user.map(user => user.name);
console.log(userName);
user.forEach(product => console.log(product));