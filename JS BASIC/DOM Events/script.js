// function makeColor() {
//     document.body.style.backgroundColor = 'yellow';
// }

// const blueMe = document.getElementById('blue-me');
// blueMe.onclick = makeBlue();

// function makeBlue(){
//     document.body.style.backgroundColor = 'blue';
// }

// //handle event anonymous function
// const greenButton = document.getElementById('green-button');
// greenButton.onclick = function (){
//     document.body.style.backgroundColor = 'green';
// }

// //handle by using addeventlistener
// const makeGoldenrod = document.getElementById('make-goldenrod');
// makeGoldenrod.addEventListener('click', makeGolden);
// function makeGolden(){
//     document.body.style.backgroundColor = 'goldenrod';
// }

// // using addeventListener
// const makeHotpink = document.getElementById('make-hotpink');
// makeHotpink.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'hotpink';
// })

// // Shortcut addEventListener
// document.getElementById('make-lightblue').addEventListener('click', function(){
//     document.body.style.backgroundColor = 'lightblue';
// })

function handleJustFunctionClick(){
    const p = document.getElementById('clicking-method');
    p.innerText = 'Set by using Function';
}

// Direct
document.getElementById('handle-event').addEventListener('click', function(){
    const p = document.getElementById('clicking-method');
    p.innerText = 'Set by Direct addEventListener';
})

document.getElementById('update-button').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');

    const p = document.getElementById('clicking-method'); 
    p.innerText = nameField.value;
    nameField.value = '';
})