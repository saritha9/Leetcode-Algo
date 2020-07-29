function reverseArrayInPlace(array) {
    let len = array.length;
    for (let i = 0; i < Math.floor(len/2); i++) {
      //console.log(i, len-i-1, array[i], array[len-i-1], array);
      let swap = array[i];
      array[i] = array[len-i-1];
      array[len-i-1] = swap;
    }
    return array;
  }

  var testArray1 = [5,8,2,5,6,3,1];
var arrLength = testArray1.length;
for (i = 0; i < arrLength; i++) {
        testArray1.splice(i, 0, testArray1.pop());
}

console.log(testArray1);