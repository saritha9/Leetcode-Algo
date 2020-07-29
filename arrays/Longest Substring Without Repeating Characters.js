function longestword(str)
{
    var temp = " ";
    y= str.split(" ");
    for(i=0;i<=y.length;i++)
    {
    if(y[i].length > temp)
    temp = y[i];
    
    return temp;
    }
}
var str1 = longestword("coding dojo boot camp");
console.log("longestword", str1);