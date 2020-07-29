// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]


// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]
Rotate matrix with built in function:
const flipMatrix = matrix => (
    matrix[0].map((column, index) => (
      matrix.map(row => row[index])
    ))
  );
  
  const rotateMatrixCounterClockwise = matrix => (
    flipMatrix(matrix).reverse()
  );

  function RotateMatrix(matrix)
  {
      const n = matrix.length;
      const x = Math.floor(n/2);
      const y = n-1;
      for(let i=0; i<x;i++)
      {
      for(let j=i;j<y-i;j++)
      {
      k= matrix[i][j];
      matrix[i][j] = matrix[y-j][i];
      matrix[y-j][i] = matrix[y-i][y-j];
      matrix[y-i][y-j] = matrix[j][y-i];
      matrix[j][y-i] = k;
      }
     }
  }
  const A = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
  ]
  const F =[
      [1,2,3],
      [2,3,4],
      [4,5,6]
  ]
  
  RotateMatrix(A);
  console.log(A);