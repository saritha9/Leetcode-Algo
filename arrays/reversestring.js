function reverseword(str)
{
  var result = "";
  s= str.split('');
  for(var i = s.length -1; i>=0; i--)
    {
      result += s[i];
      
    }
    return result;
    
  
}
console.log(reverseword("Js String Exercises"));