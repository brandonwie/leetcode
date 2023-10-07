// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
//
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = [];
  let quad = [];
  function nSum(n, startIndex, target) {
    //
    if (n > 2) {
      for (let i = startIndex; i < nums.length - n + 1; i++) {
        if (i > startIndex && nums[i] == nums[i - 1]) {
          continue;
        }
        quad.push(nums[i]);
        nSum(n - 1, i + 1, target - nums[i]); // ends after when n = 2 and running the while loop below with two pointers
        quad.pop();
      }
      return;
    }

    // base case two sum II
    let l = startIndex; // because the startIndex will be i + 2 from the nSum fn above
    let r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] < target) {
        l++;
      } else if (nums[l] + nums[r] > target) {
        r--;
      } else {
        res.push(quad.concat([nums[l], nums[r]]));
        l++;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }

  nSum(4, 0, target);
  return res;
};

fourSum([1, 0, -1, 0, -2, 2], 0);
