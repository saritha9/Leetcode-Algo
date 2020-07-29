function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }
  var num1 = romanize(1121);
  console.log("convertintegertoroman", num1);


  //************Convert RomantoInteger**********

  
  
  const values = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10]
    /*....*/
  ]);
  
  function romanToInt(string) {
    let result = 0,
      current, previous = 0;
    for (const char of string.split("").reverse()) {
      current = values.get(char);
      if (current >= previous) {
        result += current;
      } else {
        result -= current;
      }
      previous = current;
    }
    return result;
  }
  
  console.log(romanToInt('I'));
  console.log(romanToInt('II'));
  console.log(romanToInt('III'));
  console.log(romanToInt('IV'));
  console.log(romanToInt('V'));