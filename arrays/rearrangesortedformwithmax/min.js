function maxminform(arr){
    arr = arr.sort();
    var res = [];
    for(var i=0, j = arr.length-1; i <= j; i++, j--){
      if(i != j) res.push(arr[j]);
      res.push(arr[i]);
    }
    return res;
  }
  
  
  var a = [5,6,2,3,8,1,4,7];
  console.log(maxminform(a));


  //output

  [8, 1, 7, 2, 6, 3, 5, 4]