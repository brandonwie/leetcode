// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
//
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
//
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
//
// Your solution must use only constant extra space.

/** two-pointer */
/**
 *
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  for (; l < r; ) {
    let sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
};

/** object */
/**
 *
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
var twoSum = function (numbers, target) {
  const map = {};
  for (let i = 0; i < numbers.length; i++) {
    if (target - numbers[i] in map) {
      return [map[target - numbers[i]] + 1, i + 1];
    } else {
      map[numbers[i]] = i;
    }
  }
};

/** binary */
/**
 *
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let l = i + 1;
    let r = numbers.length - 1;
    let complement = target - numbers[i];
    while (l < r) {
      let mid = l + Math.floor((r - l) / 2);
      if (numbers[mid] === complement) {
        return [i + 1, mid + 1];
      } else if (numbers[mid] < complement) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
};
