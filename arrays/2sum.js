// Array Pair Sum
// Given an integer array, output all pairs that sum up to a specific value k.

//find two that add up to n javascript
let twoSum = (array, sum) => {
    let hashMap = {},
      results = []

        for (let i = 0; i < array.length; i++){
            if (hashMap[array[i]]){
                results.push([hashMap[array[i]], array[i]])
            }else{
                hashMap[sum - array[i]] = array[i];
            }
          }
          return results;
    }
console.log(twoSum([10,20,10,40,50,60,70,30],50));


let twoSum = (array, sum) => {
    let hashmap = {},
    results = []
    for(let i =0; i < array.length; i++){
        if(hashmap[array[i]]){
            results.push[hashmap[array[i], array[i]]]
        }else{
            hashmap[sum - array[i]] = array[i];
        }

    }
    return results;
}