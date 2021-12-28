// Given a string s, find the length of the longest substring without repeating characters.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxCount = 0;
  // pick string length + 1 per try
  for (let i = 0; i < s.length - 1; i++) {
    lengthOfString = 1;
    count = 1;
    // pick string length + 1 per try
    for (let j = i + 1; j < s.length; j++) {
      if (s[j] === s[j - 1]) {
        count++;
        lengthOfString++;
      } else {
        count = 0;
        lengthOfString++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
    }
  }

  return maxCount;
};
