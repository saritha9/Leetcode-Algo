function rotLeft(a, d) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        result.push(a[i]);
    };
    for (var j = 1; j <= d; j++) {
        result.shift(result.push(result[0]));
    }
    return result;
}
const rotate = console.log(rotLeft([1,2,3,4,5,6,7], 2));

