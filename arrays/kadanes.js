// 3. Largest Continuous Sum
// Given an array of integers (positive and negative) find the largest continuous sum.
function getMaxSubSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }
  var g1 =getMaxSubSum([-1, 2, 3, -9]);
  var g2 = getMaxSubSum([-2, -3, 4, -1, -2, 1, 5, -3]);
  console.log("g1 value, g2 value", g1, g2)



  