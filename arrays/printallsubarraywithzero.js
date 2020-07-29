
const panagram = function(str)
{
 let alphabet ={ 'a' :1,
                'b':1,
                'c':1,
                'd':1,
                'e':1,
                'f':1,
                'g':1,
                'f':1,
                'i':1,
                'j':1,
                'k':1,
                'l':1,
                'm':1,
                'n':1,
                'o':1,
                'p':1,
                'q':1,
                'r':1,
                's':1,
                't':1,
                'u':1,
                'v':1,
                'w':1,
                'x':1,
                'y':1,
                'z':1,
                };
for(var i= 0; i<=str.length; i++)
{
  if(str[i].toLowerCase() in alphabet){
    delete alphabet[str[i].toLowerCase()];
  }
  if(Object.keys(alphabet).length === 0){
    return true;
  }
}
  return false;
  
}
console.log(panagram("How quickly daft jumping zebra vex"));
console.log(panagram("apple sauce"));
console.log(panagram("abcdefghijklmnopqrstuvwxyz."));