const string = 'The quick brown fox'
const target = 'Eht kciuq nworb xof'

let reverseword = function(string)
{
  var result = "";
  
  var wordArray = string.split(" ");
  for(var i = 0;i<= wordArray.length-1;i++)
  {
    for(var j=wordArray[i].length-1;j>=0;j--)
    {
      result += wordArray[i][j];
    }
    var result = result+  " ";
    
  }
  return result;
}
console.log(reverseword('The quick brown fox'));


