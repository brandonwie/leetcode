/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number} Return the sum of the three integers that is the closest to the target. (You may assume that each input would have exactly one solution.)
 */
var threeSumClosest = function (nums, target) {
  if (nums.length === 3) return nums.reduce((acc, cur) => acc + cur, 0);

  nums.sort((a, b) => a - b);

  let closest = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (target === sum) return sum;
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  }

  return closest;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
