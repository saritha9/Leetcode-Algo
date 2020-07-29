function substring(str, n)
{
    var len;
    for(len = 1; len <= n; len++)
    {
    var j = i+ len - 1;
    for(var k = 1; k <= j; k++)
    {
    console.log(str[k]);
    }
    }
}
str1 = substring("coding dojo boot camp")
console.log(str1);




// for (int len = 1; len <= n; 
//     len++)  
// {  
// // Pick ending point 
// for (int i = 0;  
// i <= n - len; i++)  
// { 
// // Print characters 
// // from current 
// // starting point to 
// // current ending 
// // point.  
// int j = i + len - 1; 

// for (int k = i; k <= j; 
//          k++)  
// Console.Write(str[k]); 

// Console.WriteLine(); 
// } 
// } 
// } 