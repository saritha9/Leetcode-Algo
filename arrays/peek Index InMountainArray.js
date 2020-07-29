function peakIndexInMountainArray(A) {
    var peak = 0;
    var peakIndex;
    for(var i = 0; i < A.length; i++){
        if(A[i] > peak){
            peak = A[i];
            peakIndex=i;
        }        
    }
     return peakIndex; 
    
};

var highindex = peakIndexInMountainArray([0,2,1,0]);
console.log(highindex);
