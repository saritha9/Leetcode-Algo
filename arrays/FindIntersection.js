function FindIntersection(strArr) { 
  const firstNumbers = {};
  const matchedNumbers = [];
  
  strArr[0].split(', ').forEach((number) => {
    firstNumbers[number] = number;
  });
  
  strArr[1].split(', ').forEach((number) => {
    if (firstNumbers.hasOwnProperty(number)) {
      matchedNumbers.push(number);
    }
  });
  
  return matchedNumbers.length > 0 ? matchedNumbers.join(',') : false; 
}
   
// keep this function call here 
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
