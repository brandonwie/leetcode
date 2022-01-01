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
function findMedianSortedArrays(nums1, nums2) {
  // binary search algorithm
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
  let total = nums1.length + nums2.length;
  // calculate half value of merged array (e.g. 13 => half === 6)
  let half = Math.floor((nums1.length + nums2.length) / 2);

  //* 1. set pointers for the smaller array to find the median of it
  // by doing so, no need to calculate the median of the larger array
  // just need to calculate half - smaller array's half (this will be )
  let leftPointer = 0;
  let rightPointer = nums1.length - 1; // end pointer starts at the index as the same as the last index of the smaller array

  while (leftPointer <= rightPointer) {
    // left partition for the smaller array (*mid index)
    let smallLeftPartition = Math.floor((leftPointer + rightPointer) / 2);
    console.log('smaller left partition:', smallLeftPartition);
    // right partition for the larger array (what's left for the larger array)
    let largeLeftPartition = half - smallLeftPartition - 2;
    console.log('larger left partition:', largeLeftPartition);
    //! think finding the median of merged array as partitioning with having left and right the same size (if it's even)
    // compare both left partition's far right with corresponding right partition's far left
    let maxLeftSmall =
      smallLeftPartition < 0 ? -Infinity : nums1[smallLeftPartition];
    let maxLeftLarge =
      largeLeftPartition < 0 ? -Infinity : nums2[largeLeftPartition];
    let minRightSmall =
      smallLeftPartition >= nums1.length
        ? Infinity
        : nums1[smallLeftPartition + 1];
    let minRightLarge =
      largeLeftPartition >= nums2.length
        ? Infinity
        : nums2[largeLeftPartition + 1];
    // the easiest case: both far right values of left partitions are smaller then corresponding right partitions' minimum
    if (maxLeftSmall <= minRightLarge && maxLeftLarge <= minRightSmall) {
      // compare which one is larger between two max values
      const maxLeftPartition = Math.max(maxLeftSmall, maxLeftLarge);
      if (total % 2 === 1) return maxLeftPartition;
      return (maxLeftPartition + Math.min(minRightSmall, minRightLarge)) / 2;
      // larger left partition's max value is BIGGER than the smaller right partition's min value
      //! move left pointer to mid + 1
    } else if (maxLeftSmall <= minRightLarge)
      leftPointer = smallLeftPartition + 1;
    // opposite to the above case
    //! move left pointer to mid -1
    else rightPointer = smallLeftPartition - 1;
  }
}

console.log(findMedianSortedArrays([1, 2], [3, 4]));
