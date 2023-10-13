// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 * @description simple for loop, but need to loop through n + 1 times
 */
var missingNumber = function (nums) {
  // first element = range
  let n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= n; i++) {
    if (nums[i] !== i) {
      return nums[i] - 1;
    }
    // if missing num is last num in range
    if (nums[i] === undefined) {
      return n;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 * @description using two pointers
 */
var missingNumber = function (nums) {
  // 0 to range(nums.length)
  let n = nums.length; // extract range
  nums.sort((a, b) => a - b);
  // first num check
  if (nums[0] !== 0) return 0;
  // last num check
  if (nums[n - 1] !== n) return n;

  let l = 0,
    r = n - 1,
    sum = n;

  // missing num is in between
  while (l < r) {
    // set sum
    if (nums[l] + nums[r] === sum) {
      l++;
      r--;
    } else if (nums[l] + nums[r] > sum) {
      return nums[l] - 1;
    } else {
      return nums[r] + 1;
    }
  }
  if (l === r) {
    // e.g. [0, 1, 3, 4, 5]
    return sum - nums[l]; // can be r
  } else {
    // e.g. [0, 2] || [0, 1, 3, 4]
    return (l + r) / 2;
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 * @description Gauss sum
 */
var missingNumber = function (nums) {
  const n = nums.length;

  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
};
