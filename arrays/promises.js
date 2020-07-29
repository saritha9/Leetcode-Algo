const isGreter =(a,b) => {
    return new Promise((resolve, reject) => {
        if(a>b)
        {
            resolve(true)
        }else{
            reject(false)
        }
    })
}
isGreater(1,2)
  .then(result => {
      console.log('greater')

  })
  .catch(result => {
      console.log('smaller')
  })
   //module of export:

   const myModule = { x: 1, y: () => { console.log('This is ES5') }}
export default myModule;
//import module

import mymodule from './myModule'


//closure

var globalvar = "abc"
(function outerFunction(outerArg){
    var outerFuncVar = 'x';
    (function innerFunction(innerArg) {
        var innerFuncVar ="y";
        console.log(
            "outerArg" = " + outerArg + "\n" +
            "outerFuncVar = " +outerFuncVar + "\n" +
            "innerArg" = "  +innerArg + " \n" +
            "innerFuncVar" = "+ innerFuncVar + "\n" +
            "globalVar = " +globalVar);
        
    })(5);
})(7);

