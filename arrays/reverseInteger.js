
function reverseinteger(a)
{
var reverse = 0;
var result = [];
for(var i =0;i<=a.length;i++) 
{
while(a[i] > 0)
{
    var digit = a[i] % 10;
    reverse = (reverse * 10) + digit;
    a[i] = parseInt(a[i] / 10);
    result.push(reverse);
}
   return reverse;

}
}
str1 = reverseinteger([123, 431, 122]);

console.log("reversenumber", str1)

//example2
var a = prompt("Enter a value");
var arr = [];

for (var i = 0; i < a.length; i++) {
    arr[i] = a.charAt(i);
}
arr.reverse();
alert(arr);