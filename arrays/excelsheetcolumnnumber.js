//Given a column title as appear in an Excel sheet, return its corresponding column number.
function numbertoexcelsheet(s) {
    var result = 0;
    
    for (var i=0; i<s.length; i++) {
        result *= 26;
        result += ((s.charCodeAt(i) - 'A'.charCodeAt(0)) + 1);    
    }

    return result;
};
var s1 = numbertoexcelsheet("AB");
console.log(s1);
var s2 = numbertoexcelsheet("Z");
console.log(s2);



