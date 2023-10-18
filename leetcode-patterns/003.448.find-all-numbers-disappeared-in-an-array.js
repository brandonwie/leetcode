// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
//NOTE Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

/**
 * @param {number[]} nums
 * @return {number[]}
 * @description using includes; therefore, the runtime is O(n^2), only satisfies space complexity
 */
var findDisappearedNumbers = function (nums) {
  let res = [];
  // range starts from 1
  for (let i = 1; i <= nums.length; i++) {
    // if `i` doesn't exist in nums, add to res
    if (!nums.includes(i)) res.push(i);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * @description O(n)
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const markerIndex = Math.abs(nums[i]) - 1; // e.g. number 4 comes at index 3
    if (nums[markerIndex] > 0) {
      // if elem isn't marked,
      nums[markerIndex] = -nums[markerIndex]; // mark it
    }
  }

  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      // if not marked
      res.push(i + 1);
    }
  }

  return res;
};
