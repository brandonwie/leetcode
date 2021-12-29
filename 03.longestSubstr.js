// Given a string s, find the length of the longest substring without repeating characters.

// my solution
/**
 * @param {string} str
 * @return {number}
 */
function lengthOfLongestSubstring(str) {
  let maxSubstrLength = 0;
  let currSubstrLength = 0; // both set to 1 because it's the minimum
  let usedChars = new Set();

  for (let i = 0; i < str.length; i++) {
    currSubstrLength = 1;
    let currChar = str[i]; // approach the first char
    usedChars.add(currChar); // add it to the set of used chars
    // start an interation from the next char
    for (let j = i + 1; j < str.length; j++) {
      // if the char is included in the set,
      if (usedChars.has(str[j])) {
        currSubstrLength = 1;
        usedChars.clear(); // clear the set
        break; // opt out
      }
      usedChars.add(str[j]); // add the char to the set
      currSubstrLength += 1; // increment the length
      // if current length is greater than max, update max
      maxSubstrLength = Math.max(maxSubstrLength, currSubstrLength);
    }
  }

  return maxSubstrLength;
}

console.log(lengthOfLongestSubstring('alksdjfalksj'));

// fastest solution
// this solution has a clear drawback in case of
// e.g. "abcdbeftiskpr"
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstringV2 = (s) => {
  let set = [];
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (!set.includes(s[i])) {
      set.push(s[i]);
      console.log(set);
      if (set.length > maxLength) {
        maxLength = set.length;
      }
    } else {
      //* key part: slice from the next of the first occurrence of the repeated char
      set = set.slice(set.indexOf(s[i]) + 1);
      set.push(s[i]);
      console.log(set);
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstringV2('abcbeftiskpr'));
