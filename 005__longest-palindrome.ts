/** Given a string s, return the longest palindromic substring in s.
 * code from  https://www.youtube.com/watch?v=XYQecbcd6_c&ab_channel=NeetCode
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s: string): string {
  let res = '';
  let resLen = 0;

  for (let i = 0; i < s.length; i++) {
    // odd
    let l = i;
    let r = i;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        res = s.substring(l, r + 1);
        resLen = r - 1 + 1;
      }
      l--;
      r++;
    }
    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        res = s.substring(l, r + 1);
        resLen = r - 1 + 1;
      }
      l--;
      r++;
    }
  }
  return res;
}

console.log(longestPalindrome('baaabaabad'));

// var longestPalindrome = function (s: string): string | undefined {
//   if (s.length < 1 || s.length > 1000) return '';

//   let start = 0;
//   let end = 0;

//   for (let i = 0; i < s.length; i++) {
//     // if the length of the answer is odd, the left partition and the right partition is the same starting from mid character
//     let len1 = expendFromMiddle(s, i, i);
//     // if the length of the answer is even, the left half and the right half is the same
//     let len2 = expendFromMiddle(s, i, i + 1);
//     let len = Math.max(len1, len2);

//     if (len > end - start) {
//       // "aabbaa" len 6
//       start = i - (len - 1) / 2;
//       end = i + len / 2;
//     }

//     return s.substring(start, end + 1);
//   }
//   // hint 1. How can we reuse a previously computed palindrome to compute a larger palindrome?

//   // Hint 2. If "aba" is palindrome, is "xabax" a palindrome? Similarly is "xabay" is a palindrome?

//   // Hint 3. Complexity based hint: if we use brute-force and check whether for every start and end position a substring is a palindrome we have O(n^2) start - end pairs and O(n) palindromic checks. Can we reduce the time for palindromic checks to O(1) by reusing some previous computation.

//   /**
//    *
//    * @param {string} targetString
//    * @param {number} left pointer
//    * @param {number} right pointer
//    * @return {number} start index of palindrom
//    */
//   function expendFromMiddle(s: string, left: number, right: number): number {
//     if (s == null || left > right) return 0;
//     // expend from middle by 1 until one reaches the end IF it's palindrom
//     while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
//       left--;
//       right++;
//     }
//     return right - left - 1;
//   }
// };
