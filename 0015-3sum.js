/**
 * @param {number[]} nums
 * @returns {number[][]} find all unique triplets in the array which gives the sum of zero
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  console.log({ nums });
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        result.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - 1] && l < r) l++;
      }
    }
  }
  return result;
}

threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
