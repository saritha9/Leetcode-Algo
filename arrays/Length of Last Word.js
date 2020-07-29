// public int lengthOfLastWord(String s) { 
//     if(s==null || s.length() == 0)
//         return 0;
 
//     int result = 0;
//     int len = s.length();
 
//     boolean flag = false;
//     for(int i=len-1; i>=0; i--){
//         char c = s.charAt(i);
//         if((c>='a' && c<='z') || (c>='A' && c<='Z')){
//             flag = true;
//             result++;
//         }else{
//             if(flag)
//                 return result;
//         }
//     }
 
//     return result;
// }
function lengthoflastword(s)
{
    if(s == null || s.length() == 0)
    return 0;
    var result = 0;
    var len = s.length();
    var flag = false;
    for(var i= len-1;i >=0;i--)
    {
        var c = s.charAt(i);
        if((c>='a' && c <='z') || (c>='A' && c<='Z'))
        result++;
    }return result;
}
var word = "coding dojo boot camp";
console.log("length of last word", word );
