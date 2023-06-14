var friendsAge = [12, 17, 13, 15, 14, 16];
friendsAge[4] = 67;
var roniAge = friendsAge[2];
console.log(roniAge);
console.log(friendsAge);
friendsAge.push(27);
console.log(friendsAge);
friendsAge.push(19);
console.log(friendsAge);

var position = friendsAge.indexOf(13);
console.log(position);

console.log(friendsAge.length);

friendsAge.pop()
console.log(friendsAge);

var friendsName = ['Abul', 'Abal', 'Kabul', 'Mabul', 'Habul', 'Nabul', 'Tabul'];
console.log(friendsName);
friendsName.shift();
console.log(friendsName);
friendsName.unshift('Babul');
console.log(friendsName);

var sliceFriendsName = friendsName.slice(1, 4);
console.log(sliceFriendsName);

var addFriendsName = friendsName.slice(0, 1, 'Shawon');
console.log(addFriendsName);