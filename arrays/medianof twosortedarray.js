let medianarry = function(a, b)
{
  let x = a.concat(b);
  x.sort(function (a,b) {
      return a - b;
    });
  console.log(x);
  let len = x.length;
  return len%2 === 0 
    ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 
  : x[Math.floor(len/2)];
  
}

console.log(medianarry([1,3,4,7,2], [5,3,6,2,3,4,3]));