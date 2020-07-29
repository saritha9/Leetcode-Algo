function sumDigits(num) {
    let sum = 0;
    let currentNum = num;
    while (currentNum > 0) {
      sum += currentNum % 10;
      currentNum = Math.floor(currentNum / 10);
    }
    return sum;
  }
  
  function result(arr) {
    const obj = {};
    let maxPairSum = -1;
    for (let i=0; i<arr.length; i++) {
      const sum = sumDigits(arr[i]);
      if (!obj[sum]) {
        obj[sum] = [arr[i]];
      } else {
        if (arr[i] > obj[sum][0]) {
          obj[sum] = [arr[i], obj[sum][0]];
        } else if (obj[sum].length === 1 || arr[i] > obj[sum][1]) {
          obj[sum] = [obj[sum][0], arr[i]];
        }
        if (obj[sum].length === 2 && maxPairSum < obj[sum][0] + obj[sum][1]) {
          maxPairSum = obj[sum][0] + obj[sum][1];
        }
      }
    }
    return maxPairSum;
  }
  console.log(result([51,15,72.81]))