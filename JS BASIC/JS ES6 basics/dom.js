document.getElementById('add-border').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid yellow';
})

function addBgColor(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.background = 'red';
    }
}

document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, impedit?</p>
    `;
    container.appendChild(friendDiv);
})