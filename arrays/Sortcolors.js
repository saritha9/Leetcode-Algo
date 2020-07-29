// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
function sortcolors(A)
{
    if(A==null || A.length <= 1)
    {
        return;
    }
    var red = 0;
    var blue = A.length -1;
    var i =0;
    while(i<=blue)
    {
        if(A[i] ==0)
        {
            swap(A, i, red);
            red++;
            i++;
        }else
        if(A[i] == 2)
        {
            swap(A,i, blue);
            blue--;
        }
        else{
            i++;
        }
    }
}
function swap()
{
    var temp = A[i];
    A[i] = A[j];
    A[j] = temp;
    i
}




































// function colorred(N)
// {
//     var a =new Array(N+1);
//     var i;
//     document.theForm3.opt.value ='';
//     document.theForm3.trace.value ='';
//     for(i=1;i<=N;i++)
//     a[i] = Math.round(100 * Math.random())%3;
//     for(i=1; i<=N;i++)
//     document.theform.opt.value += ' ' + a[i];
//      var Lo =1, Mid =1; Hi = N;
//      while(Mid - 0 <= Hi)
//      {
//          if(a[Mid] - 0 == 0)
//          {
//              var temp = a[Mid];
//              a[Mid] = a[Lo];
//              a[Lo]= temp;
//              Lo ++;
//              Mid++;
//          }
//          else if(a[Mid] - 0 ==1)
//          Mid++;
//          else
//          {
//              var temp = a[Hi];
//              a[Hi] = a[Mid];
//              a[Mid] = temp;
//              Hi--;

//          }
//      }

// }