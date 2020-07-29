const missnum = function(arr){
    let len = arr.length();
    let total = n*(n+1)/2;
    let arrtotal = arr.reduce((t,i) => t+i);
    console.log(arrtotal - total);

}