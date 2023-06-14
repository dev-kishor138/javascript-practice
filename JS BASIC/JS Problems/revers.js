function reversText (text)
{
    var revers = "";
    for(var i = 0; i < text.length; i++)
    {
        var element = text[i];
        revers = element + revers;
    }
    return revers;
}

var specialMessage = "rokto diyeci aro dibo Tobuo mosari kinbo na.";
var result = reversText(specialMessage);
console.log(result);