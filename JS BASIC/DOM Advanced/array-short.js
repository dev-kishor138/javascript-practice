// sort
const mark = [67, 37, 92, 39, 50, 36, 95, 77];
const sortMark = mark.sort();
console.log(sortMark);

const friends = ['Shahid', 'Keramot', 'Labib', 'Habib', 'Shahriar', 'Abdur Rahman', 'Bayzid', 'apel', 'josim'];
const sortedFriends = friends.sort();
console.log(sortedFriends);

//revers
const reverseFriends = friends.reverse();
console.log(reverseFriends);

const reverseSortFriends = friends.sort().reverse();
console.log(reverseSortFriends);

const serialNumber = [54, 38, 83, 5, 2, 8, 45, 77];
const sortSerialNumber = serialNumber.sort(function(x, y){
    return x - y;
});
console.log(sortSerialNumber);