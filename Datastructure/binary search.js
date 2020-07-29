function binarySearch (arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === val) {
            return mid;
        }
        if (val < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}


var result =  binarySearch([21, 34, 2, 5, 45, 56], 45);
console.log("result is", result);