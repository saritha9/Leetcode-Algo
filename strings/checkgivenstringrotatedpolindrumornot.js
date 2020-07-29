function ispalindrum(str)
{
  
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
//console.log(ispalindrum("aba"));
function isrotationpolindrum(str)
{
  var n = str.length;
  if(ispalindrum(str))
    
      return true;
    
  for(var i = 0; i<=n-1;i++)
    {
      var s2 = str.substring(i+2, n-i-1);
      var s1 = str.substring(0, i+2);
      
      if (ispalindrum(s2.concat(s1)))
         return true;
        
   }
   return false;
    
}
console.log(isrotationpolindrum("sarABCD"));
console.log(isrotationpolindrum("CBAABCD"));