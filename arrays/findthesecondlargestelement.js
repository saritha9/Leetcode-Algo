function processData(myArray) {
    var x= max(myArray)
    //storing index of x value in y//
    var y= myArray.indexOf(x)
    //removing x value with a index of y using splice()//
    myArray.splice(y,1)
    //now again max of left over elements in array
    //gives second largest number//
    var z = max(myArray);
    return z;
    }
    function max(arr){
        result=arr[0];
        for(i=1;i<=(arr.length-1);i++){
           if(arr[i]>result)
            result=arr[i];
        }
        return result;
    }
    var f = processData([3,4,1,34,6,45,9]);
    console.log(f);


//example2

    function getSecondHighest(arrCheck){
        var first=0,second=0;
        for(var i=0;i<arrCheck.length;i++){
            if(arrCheck[i] > first){
                second = first;
                first = arrCheck[i];
            }
            else if(arrCheck[i]>second && arrCheck[i]<first){
                second = arrCheck[i];
           } 
        }
        return second;
    }
    var f = getSecondHighest([2,4,3,5,9]);
    console.log(f);