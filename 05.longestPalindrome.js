/** Given a string s, return the longest palindromic substring in s.
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let { length } = s;
  if (length < 0 || length > 1000) throw Error('1 <= length <= 1000');
  // hint 1. How can we reuse a previously computed palindrome to compute a larger palindrome?

  // Hint 2. If "aba" is palindrome, is "xabax" a palindrome? Similarly is "xabay" is a palindrome?

  // Hint 3. Complexity based hint: if we use brute-force and check whether for every start and end position a substring is a palindrome we have O(n^2) start - end pairs and O(n) palindromic checks. Can we reduce the time for palindromic checks to O(1) by reusing some previous computation.

  let index;
  // start from middle?
  let mid = Math.floor(length / 2);
  // if the length of the answer is even, the left half and the right half is the same
  if (length % 2 === 0) {
  }
  // if the length of the answer is odd, the left partition and the right partition is the same starting from mid character
};
