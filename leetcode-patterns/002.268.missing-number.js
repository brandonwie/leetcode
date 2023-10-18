// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 * @description XOR
 */
var missingNumber = function (nums) {
  // think of an imaginary array with all number from 0 to n (length n)
  // nums array length is n - 1; therefore add the last number n and XOR all numbers in nums
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i];
  }
  return res;
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
