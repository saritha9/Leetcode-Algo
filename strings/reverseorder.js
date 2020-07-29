function reversewords(str) 
{
        var result = "";
        var wordArray = str.split(" ");
        for(var i = wordArray.length - 1; i >= 0; i--) 
        {
            result += wordArray[i] + " ";
        }
        return result.trim();
}


  var reversestr = reversewords('The sky is blue');
  console.log("reverse string", reversestr);