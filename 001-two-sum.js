// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/** solution from https://www.youtube.com/channel/UCYPxjfbEI192KWqU67I8c0g
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumWithMap(nums, target) {
  // create
  const mapObj = new Map(); // Array<[key, value]>
  for (let i = 0; i < nums.length; i++) {
    mapObj.set(nums[i], i); // [value, index] set
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // diff
    if (mapObj.has(complement) && mapObj.get(complement) !== i) {
      return [i, mapObj.get(complement)];
    }
  }
}

function twoSumWithArray(nums, target) {
  const mapArray = [];
  nums.forEach((number, index) => {
    mapArray.push([number, index]);
  });

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const matchingIndex = mapArray.findIndex((element) => element[0] === diff);
    if (matchingIndex !== -1 && matchingIndex !== i) {
      return [i, mapArray[matchingIndex][1]];
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumWithTwoForLoops(nums, target) {
  let firstIndex, secondIndex;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        firstIndex = i;
        secondIndex = j;
      }
    }
  }
  return [firstIndex, secondIndex];
}

console.log(twoSumWithMap([2, 7, 11, 15], 13));
console.log(twoSumWithArray([2, 7, 11, 15], 13));
console.log(twoSumWithTwoForLoops([2, 7, 11, 15], 13));
