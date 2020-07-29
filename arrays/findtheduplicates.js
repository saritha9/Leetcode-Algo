const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); 
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }
  
  let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
  console.log(`The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`);



  function eliminateDuplicates(arr) {
    var i,
        len = arr.length,
        out = [],
        obj = {};
  
    for (i = 0; i < len; i++) {
      obj[arr[i]] = 0;
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  }