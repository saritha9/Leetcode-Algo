// public class MissedElmtInArry {

//     public static void main(String[] args) {
//     int i,sum=0, expsum=0,n=5;
//     int a[]={1,2,4,5};
//     for(i=0;i<4;i++)
//     sum=sum+a[i];
//     System.out.println("Actual Sum: "+sum);
//     expsum = n*((n+1)/2);
//     System.out.println("result:"+(expsum-sum));
//     }
//     }

function missedelmtarray(x)
{
    var i, sum = 0, expsum =0, n=5;
    for(i=0;i<=x.length;i++)
    {
        sum = sum +a[i];
        console.log("Actual sum:", sum);
        expsum = n*((n+1)/2);
        console.log("result", expsum);
    
    }

}
var findmissnum = missedelmtarray([1, 2, 3, 4, 6]);
console.log("find missing number", findmissnum);