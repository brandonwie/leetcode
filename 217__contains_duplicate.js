// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  let seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    } else {
      seen.add(num);
    }
  }
  return false;
};
