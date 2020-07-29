// Substrings that occur multiple times are counted the number of times they occur.

// Example 1:
// Input: "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".

// Notice that some of these substrings repeat and are counted the number of times they occur.

// Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
// Example 2:
// Input: "10101"
// Output: 4
// Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.


function countBinarySubstrings(s)
{
        var ans = 0, prev = 0, cur = 1;
        for (var i = 1; i < s.length; i++) 
        {
            if (s.charAt(i-1) != s.charAt(i)) 
            {
                ans += Math.min(prev, cur);
                prev = cur;
                cur = 1;
            } else
            {
                cur++;
            }
        }
        return ans + Math.min(prev, cur);
 }
var binarysubstring = console.log(countBinarySubstrings("00110011"));