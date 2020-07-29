// Given an array, you must increment any duplicate elements until all its elements are unique.
// In addition, the sum of its elements must be the minimum possible within the rules. For
// example, if arr = [3, 2, 1, 2, 7], then arr(unique) = [3, 2, 1, 4, 7] and its elements sum to a
// minimal value of 3 + 2 + 1 + 4 + 7 = 17.

// Function Description:
// Write a function called "getMinimumUniqueSum" in the editor below to create an array of
// unique elements with a minimal sum. Return the integer sum of the resulting array.

// getMinimumUniqueSum has the following parameter(s):
//   arr: an array of integers to process

// Constraints:
//   1 ≤ n ≤ 2000
//   1 ≤ arr[i] ≤ 3000 where 0 ≤ i < n
function getMinimumUniqueSum(arr) {
    // [1,1,2] => [1,2,3] = 6
    // [1,2,2,3,3] = [1,2,3,4,5] = 15
    if (arr.length > 1) {
      var myd = {};
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
        var mval = arr[i];
        console.log(mval);
        if (myd[mval+''] !== undefined) {
          var nval=mval+mval;
          while (myd[nval+''] !== undefined) {
            nval=nval+mval;
          }
          myd[nval+'']=nval;
        } else {
          myd[mval+''] = mval;
        }
      }
      console.log(Object.values(myd));
    }
    var mysum = 0;
    for( var el in myd ) {
      mysum += myd[el];
    }
    console.log(mysum);
}

getMinimumUniqueSum([1,2,2,3,3]);




function makeunique(arr)
{
    if(arr.length>1)
    {
        var myd = { };
        for( var i =0;i<=arr.length;i++)
        {
            var myval = arr[i];
            if(myd[mval+''] !== undefined) 
            {
                var nval=mval+mval;
                while (myd[nval+''] !== undefined) 
                {
                 nval=nval+mval;
                }
                myd[nval+'']=nval;
            } else {
                    myd[mval+''] = mval;
                    }
        }
        
   console.log(Object.values(myd));
}
var sum = 0;
for(var el in myd)
{
sum += myd[el];
}
console.log(sum);
}

makeunique([1,2,2,3,3]);