function FirstReverse(str) { 

    let newString = '';
    for (let i = str.length-1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}
   
// keep this function call here 
FirstReverse(readline());

// Examples
// Input: "coderbyte"
// Output: etybredoc
// Input: "I Love Code"
// Output: edoC evoL I
// Tags