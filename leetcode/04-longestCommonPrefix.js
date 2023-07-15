var longestCommonPrefix = function (strs) {
  let prefix = "";
  let verifyPrefix = false;
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[i].slice(0, 1) === strs[j].slice(0, 1)) {
        console.log(strs[i].slice(0, 1));
        prefix = strs[i].slice(0, 1);
        verifyPrefix = true;
      } else {
        return (verifyPrefix = false);
      }
    }
    for (let l = 0; l < strs.length; l++) {
      if (strs[i].slice(0, 2) === strs[l].slice(0, 2)) {
        console.log(strs[i].slice(0, 2));
        prefix = strs[i].slice(0, 2);
        verifyPrefix = true;
      } else {
        prefix = strs[i].slice(0, 1);
        return null;
      }
    }
    return verifyPrefix ? prefix : "";
  }
};

module.exports = { longestCommonPrefix };

//challenge: https://leetcode.com/problems/longest-common-prefix/

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
