const products = [
    'purple color laptop.',
    'purple color mobile',
    'white color Laptop',
    'black color phone',
    'Golden color laptop'
];

const search = 'laptop';

// const output = [];
// for (const product of products){
//     if(product.toLocaleLowerCase().indexOf(search.toLowerCase()) != -1){
//         output.push(product);
//     }
// }
for (const product of products){
    if(product.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
        output.push(product);
    }
}
console.log(output);
