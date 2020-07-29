// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
function findfirstlastelement(nums, target)
{
    var start = -1; var end =-1;
    for(var i=0; i< nums.length;i++){
        if(nums[i]== target)
        {
            start = i;
            break;
        }
    }
    for(var i = nums.length-1;i>=0;i--)
    {
        if(nums[i]==target){
            end =i;
            break;
        }
    }
    return [start, end];
    

}
var result = findfirstlastelement([2,3,4,4,5,9], 7);
console.log("result", result);