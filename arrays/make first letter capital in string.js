function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words('life is full of waves'));



//example 2

function capitalize_Words (str) {
    return str.split(' ').map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
    }
    console.log(capitalize_Words('js string exercises'));



//example3
function uppercase(str)
{
var array1 = str.split(' ');
var newarray1 = [];

for(var x = 0; x < array1.length; x++){
newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
}
return newarray1.join(' ');
}
console.log(uppercase("abc"));

