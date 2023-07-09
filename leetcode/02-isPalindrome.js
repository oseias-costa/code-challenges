// Given an integer x, return true if x is a
// palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function isPalindrome(x) {
  let inverted = "";
  const convertedX = x.toString();
  let lastPosition = convertedX.length - 1;

  for (let i = 0; i < convertedX.length; i++) {
    if (convertedX[lastPosition] === undefined) {
      inverted = inverted + "-";
      --lastPosition;
    } else {
      inverted = inverted + convertedX[lastPosition];
      --lastPosition;
    }
  }
  return Boolean(inverted === convertedX);
}
//toSring().length
module.exports = { isPalindrome };
