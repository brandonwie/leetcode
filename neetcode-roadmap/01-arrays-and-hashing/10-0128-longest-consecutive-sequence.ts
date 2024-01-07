function solution(nums: number[]) {
  let longest = 0;
  // create a set with array: O(1)
  const numSet = new Set(nums);
  // start sequencing when the target is found
  for (const n of nums) {
    // find a start of a sequence (no left node)
    if (!numSet.has(n - 1)) {
      let length = 0;
      // start finding sequence
      // when to stop? until next number exists
      while (numSet.has(n + length)) {
        length++; // increase length
      }
      // update the longest
      longest = Math.max(longest, length);
    }
  }
  return longest;
}

console.log(solution([3, 2, 1, 2, 5, 2, 5, 6]));
