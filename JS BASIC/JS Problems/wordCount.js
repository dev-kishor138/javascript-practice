var text = "আমার ‍সোনার বাংলা ‍আমি  তোমায় ভালোবাসি চিরদিন তোমার আকাশ তোমার বাতাস ‍আমার প্রাণে বাজায় বাশি"
var count = 0;
for(var i = 0; i < text.length; i++){
    var element = text[i];
    if(element == " " && text[i-1] != " ")
    {
        count++;
    }
}
count++;

console.log(count);