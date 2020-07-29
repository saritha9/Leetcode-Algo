const removechar = function(str, m)
{
  var uniques = {};
  for (var i = 0;i<m.length;i++){
      if(m[i] in uniques){
          m[i]++;
        }
      else{
          uniques[m[i]] = 0;
         }
    }
  for(var j =0; j<str.length; j++)
    {
      if(str[j] in uniques){
          str = str.slice(0,j) + str.slice(j+1, str.length);
          j--;
        }
    }
  return str;
}
 var sub = "av"
console.log(removechar("have a nice day", sub));