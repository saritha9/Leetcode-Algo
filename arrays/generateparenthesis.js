var generateParenthesis = function(n) {
    const addParanthesis = (cur, open, close) => {
      if (cur.length === n * 2) {
        res.push(cur);
        return;
      }
      if (open < n) { addParanthesis(cur + '(', open + 1, close); }
      if (close < open) { addParanthesis(cur + ')', open, close + 1); }
    };
    const res = [];
    addParanthesis('', 0, 0);
    return res;
  };
  var parenthesis = generateParenthesis(3);
  console.log("generate parenthesis",parenthesis );



//   output:
//   "generate parenthesis"
// ["((()))", "(()())", "(())()", "()(())", "()()()"]