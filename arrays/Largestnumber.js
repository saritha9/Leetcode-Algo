// Example 1:

// Input: [10,2]
// Output: "210"
// Example 2:

// Input: [3,30,34,5,9]
// Output: "9534330"

var largestNumber = function(nums) {
  nums.sort(function(a, b) {
    return (b + '' + a) - (a + '' + b);
  });

  var ans = nums.join('');

  for (var i = 0; i < ans.length - 1; i++) {
    if (ans[i] !== '0')
      break;
  }
  
  return ans.substring(i);
}
 console.log(largestNumber([3,30,34,5,9]));