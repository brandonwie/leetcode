// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

/**
 * @constraints
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -106 <= nums1[i], nums2[i] <= 106
 */

/**
 * The time and space complexity of the function `sort()` cannot be guaranteed as it depends on the implementation (from MDN docs)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number} median of the two sorted arrays.
 */
const findMedianWithSortFunction = (nums1, nums2) => {
  let merge = nums1.concat(nums2);
  merge.sort((a, b) => a - b);
  return merge.length % 2 === 0
    ? (merge[merge.length / 2 - 1] + merge[merge.length / 2]) / 2
    : merge[Math.floor(merge.length / 2)];
};
console.log(findMedianWithSortFunction([1, 3], [2, 4]));

// using a custom sort method
function findMedianSortedArrays(nums1, nums2) {
  // binary search algorithm
  let A = nums1;
  let B = nums2;
  // make A smaller array
  if (A.length > B.length) {
    A = B;
    B = A;
  }
  let total = nums1.length + nums2.length;
  // calculate half value of merged array (e.g. 13 => half === 6)
  let half = Math.floor((nums1.length + nums2.length) / 2);
  // set pointers in the smaller array
  let l = 0;
  let r = A.length - 1;

  while (l <= r) {
    let leftPartition = Math.floor((l + r) / 2); // A
    let rightPartition = half - leftPartition - 2; // B
  }
}
