function polindrumnum(x)
for(var i=0;i<=x.length()-1;i++);
{
for(var j=x.length()-1;j>=0;j--);
{
 if(x[i] ===y[j])
    return x;
 else
 console.log("not polindrum");
}
}

var num = polindrumnum([232,121,111,123,454,67632],-123);
console.log("polindrum num", num);


//example 2

const isPalindrome = x => {
   if (x < 0) return false

   let reversed = 0, y = x

   while (y > 0) {
       const lastDigit = y % 10
       reversed = (reversed * 10) + lastDigit
       y = (y / 10) | 0
   }
   return x === reversed
}

//example 3
function polindrumnum(number)
{

  let rem, final=0;

let temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			console.log("The inputed number is Palindrome",temp);
		}
		else
		{
			console.log("The inputted number is not palindrome",temp);
		}
}


polindrumnum(-121);