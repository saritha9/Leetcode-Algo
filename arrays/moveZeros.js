// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
var moveZeroes = function(nums) {
    var index = 0;
    for (var i = 0, l = nums.length; i < l; i++) {
        if (nums[i] !== 0) {
            nums[index++] = nums[i];
        }
    }
    for (i = index; i < l; i++) {
        nums[i] = 0;
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]));