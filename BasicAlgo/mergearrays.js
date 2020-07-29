const merarray = [[1,2,3,4], [3,2,6,7,8]];

var merged = [].concat.apply([], merarray);
merged.sort();
console.log(merged);