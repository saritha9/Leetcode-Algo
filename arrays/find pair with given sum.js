const findsum = function(arr, sum)
{
    for(var i = 0;i<=arr.length;i++)
    
        for(var j= i; j<= arr.length; j++)
        {
            if(sum === arr[i]+ arr[j])
            {
                console.log("pair of numbers",  arr[i],arr[j]);
            }
        }

    
}
findsum([8,7,2,5,3,2,1], 10);