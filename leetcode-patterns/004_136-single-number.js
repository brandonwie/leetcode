/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // O(n) runtime
  // O(n) space
  if (nums.length === 1) return nums[0];

  nums.sort((a, b) => a - b);
  let seen = {};
  // first occurrance + next not same
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    // not seen
    if (seen[n] === undefined) {
      // if el is not the same as next el, or it's the last el
      if (nums[i] !== nums[i + 1] || nums[i + 1] === undefined) {
        return nums[i];
      } else {
        seen[n] = true;
      }
    } else {
      continue;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.reduce((acc, cur) => {
    console.log(acc, cur, acc ^ cur);
    return acc ^ cur;
  });
};
