function rotLeft(a, d) {
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        arr.push(a[i]);
    };
    for (var j = 1; j <= d; j++) {
        arr.shift(arr.push(arr[0]));
    }
    return arr;
}

var arr1 = rotLeft([1, 3, 5, 7, 9], 4);
console.log(arr1);


//time complexity: o(n)
//space:o(1)