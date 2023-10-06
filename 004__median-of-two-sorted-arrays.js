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

// using a custom sort method
// learned and get inspired from https://www.youtube.com/watch?v=q6IEA26hvXc&t=730s&ab_channel=NeetCode
function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
  let len1 = nums1.length;
  let len2 = nums2.length;
  let total = len1 + len2;
  let half = Math.floor(total / 2);

  let p1 = 0;
  let p2 = len1 - 1;

  while (p1 <= p2 + 1) {
    let m1 = Math.floor((p1 + p2) / 2); // use pointer to calculate
    let m2 = half - m1 - 2;
    console.log(m1, m2);
    // check if left most values are within index range
    let maxL1 = m1 >= 0 ? nums1[m1] : -Infinity;
    let minL1 = m1 + 1 < len1 ? nums1[m1 + 1] : Infinity;
    let maxL2 = m2 >= 0 ? nums2[m2] : -Infinity;
    let minL2 = m2 + 1 < len2 ? nums2[m2 + 1] : Infinity;
    console.log('maxL1', maxL1, 'minL1', minL1, 'maxL2', maxL2, 'minL2', minL2);
    if (maxL1 <= minL2 && maxL2 <= minL1) {
      let maxLp = Math.max(maxL1, maxL2);
      let minRp = Math.min(minL1, minL2);
      if (total % 2 === 0) return (maxLp + minRp) / 2;
      return minRp;
    } else if (maxL1 < minL2) {
      console.log('adjusting left pointer...');
      p1 = m1 + 1;
    } else {
      console.log('adjusting right pointer...');
      p2 = m1 - 1;
    }
  }
}

console.log(findMedianSortedArrays([1, 2, 3, 4], [7]));
// 1,2,3,4,5,6,7
