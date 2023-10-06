// Given an integer x, return true if x is a palindrome, and false otherwise.
/**
 * @param {number} x
 * @return {boolean}
 */
// num ver
var isPalindrome = function (x) {
  let rev = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) rev = rev * 10 + (i % 10);
  return rev === x;
};
