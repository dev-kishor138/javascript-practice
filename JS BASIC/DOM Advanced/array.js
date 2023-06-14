function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Please provide in array';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}

const someFriends = ['Shahid', 'Keramot', 'Labib', 'Apel', 'Saiful', 'Sefaul'];
const bigFriend = megaFriend(8894);
console.log(bigFriend);

if(someFriends.indexOf('Labib') != -1){
    console.log('Labib Exist');
}
if(someFriends.includes('Keramot')){
    console.log('Keramot Exist');
}

// concat
const first = [2, 23, 43, 4];
const second = [4, 5, 7, 4];
const combined = first.concat(second);
console.log(combined);