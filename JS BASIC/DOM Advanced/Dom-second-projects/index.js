const userObj = {
    name: 'Shahriyar',
    age: 12
}

function printName(user) {
    const { name, ...obj} = user 
    console.log(name)
}

printName(userObj)