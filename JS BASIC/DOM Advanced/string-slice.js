// split
const anthem = "Amar Sonar Bangla ami tomay valobashi";
const word = anthem.split(' ');
console.log(word);
const wihoutA = anthem.split('a');
console.log(wihoutA);

// slice
const sliceWord = anthem.slice(7, 16);
console.log(sliceWord);

// substr
const substrWord = anthem.substr(11, 6);
console.log(substrWord);

// substring
const sunstringWord = anthem.substring(0, 17);
console.log(sunstringWord);

// concat
const first = 'maria';
const second = 'khan';
const fullstring = first.concat(second).concat(78).concat(anthem);
console.log(fullstring);

// join 
const words = ['alim', 'labib', 'Josim', 'apel'];
const joinArrary = words.join(', ');