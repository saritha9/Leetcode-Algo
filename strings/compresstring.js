var compress = function(s) {
    let result = '';
    
    if (s.length) {
      let last = s[0];
      let count = 1;
      
      for (let i=1; i<s.length; i++) {
        const ch = s[i];
        
        if (ch !== last) {
          result += last + (count > 1 ? count : '');
          
          last = ch;
          count = 1;
        }
        else {
          count++;
        }
      }
      
      result += last + (count > 1 ? count : '');
    }
  
    return result;
  };
  console.log(compress('aaabccdddddeeaaaa'));
 
 
  //a3bc2d5e2a4