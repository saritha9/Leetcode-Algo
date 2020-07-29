function powerxn(x, n)
{
for(var i=1;i<=n;i++)
{

if (n === 1)
return 1;
else
x = x * n;
return x;
}

}
var p1 =powerxn(2, 3);
console.log("powerofxn",p1);