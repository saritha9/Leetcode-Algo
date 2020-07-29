// Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

// If possible, output any possible result.  If not possible, return the empty string.

// Example 1:

// Input: S = "aab"
// Output: "aba"
// Example 2:

// Input: S = "aaab"
// Output: ""
function Reorganizestring(s)
{
    var n = s.length();
    var counts = new int[26];
    for(var c: s.toCharArray()) counts[c-'a'] += 100;
    for(int i=0; i<26  ++i) counts[i] += i;
    Array.sort(counts);
    var ans = new char[n];
    var  t =1;
    




}