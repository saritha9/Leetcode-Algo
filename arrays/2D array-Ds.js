console.log("2D Array Hour Glass");


const hourGlassSum = (array) => {
	let sum;
	for (let i = 0; i <= 3; i ++) {
		for (let j = 0; j <= 3; j ++) {
			let top    = array[i][j] + array[i][j+1] + array[i][j+2],
				middle = array[i+1][j+1],
				bottom = array[i+2][j] + array[i+2][j+1] + array[i+2][j+2],
				total  = top + middle + bottom;
			if (total > sum || sum === undefined) {
				sum = total;
			}	
		};
		
	};	
	return sum;
};


const arr = [
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0]
];


console.log(hourGlassSum(arr));




const negArr = [
	[10, -1, -1, 0, 0, 0],
	[ 0, -1,  0, 0, 0, 0],
	[-1, -1, -1, 0, 0, 0],
	[ 0,  0, -2,-4,-4, 0],
	[ 0,  0,  0,-2, 0, 0],
	[ 0,  0, -1,-2,-4, 0]
];

console.log(hourGlassSum(negArr));



const anotherArray = [
	[-9, -9, -9,  1, 1, 1], 
	[ 0, -9,  0,  4, 3, 2],
	[-9, -9, -9,  1, 2, 3],
	[ 0,  0,  8,  6, 6, 0],
	[ 0,  0,  0, -2, 0, 0],
	[ 0,  0,  1,  2, 4, 0]
];

console.log(hourGlassSum(anotherArray));







































'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
// default value returned
     let hourglasses = [];

     if (typeof arr === "object"
          && arr.length === 6
          && arr.map(i => i.length).reduce((p, n) => p + n) === 36) 
          {
 
          for (let row = 0; row <= 3; row++) {
               for (let col = 0; col <= 3; col++) {
                    let sum = 0;
          
                    sum += arr[row][col];
                    sum += arr[row][col + 1];
                    sum += arr[row][col + 2];
                    sum += arr[row + 1][col + 1];
                    sum += arr[row + 2][col]; 
                    sum += arr[row + 2][col + 1];
                    sum += arr[row + 2][col + 2];
          
                    hourglasses.push(sum);
               } 
          }
     } 
                
     return (hourglasses.length > 0) ? Math.max(...hourglasses) : 0;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
