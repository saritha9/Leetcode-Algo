function rotate(arr, steps){
	var index;

	while(steps > 0){
		index = arr.pop();
		arr.unshift(index);

		steps--;
	}

	return arr;
}

console.log(rotate([22,11,500,92], 2));
console.log(rotate([11,15,28,9,10], 2));

//output


[500, 92, 22, 11]
[9, 10, 11, 15, 28]