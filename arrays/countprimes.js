// Question isprime or not
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));



// count of primes
var isPrime = function(n) {
    var result = true;
    
    if (n <= 1) {
        result = false;
    }
    else {
        // We only need to check up to the sqrt of the number.
        for (var i=2; i*i<=n; i++) {
            if (n % i === 0) {
                // This number is evenly divisible by i, so it is not prime.
                result = false;
                break;
            }
        }
    }
    
    return result;
}
function countPrimes(n) {
    var result = 0;
    
    for (var i=0; i<n; i++) {
        if (isPrime(i)) {
            result++;
        }
    }
    
    return result;
};
var m = countPrimes(9);
console.log(m);
