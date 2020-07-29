let makeAnagram = (a, b) => {
    //keep track of the characters count
    let countA = 0;
    let countB = 0;

    //Create an array of all the alphabets to monitor the occurrences
    let arr = new Array(26);
    arr.fill(0, 0, 26);
    
    //count the characters in the first string
    for (let i = 0; i < a.length; i++){
        arr[a[i].charCodeAt() - 'a'.charCodeAt()]++;
        countA++;
    }
    

    //count the characters in the second string
    for (let i = 0; i < b.length; i++){

        //if character is present in both the string then reduce it counts
        if (arr[b[i].charCodeAt() - 'a'.charCodeAt()]) {
            arr[b[i].charCodeAt() - 'a'.charCodeAt()]--;
            countA--;
        } else {
            countB++;
        }
    }
    
    //return the combined count of the characters
    return countA + countB;

}

console.log(makeAnagram('bab', 'aba'));