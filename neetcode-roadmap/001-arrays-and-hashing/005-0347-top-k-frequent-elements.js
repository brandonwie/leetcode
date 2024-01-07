/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (nums.length === 1) return nums;
  let count = {};
  let freq = Array.from({ length: nums.length + 1 }, () => []); // from 0 to nums.length; 3개면 0,1,2,3 총 4개 필요
  for (const n of nums) {
    // keys are each number, values are counts
    count[n] = 1 + (count[n] ? count[n] : 0);
  }

  for (const c in count) {
    freq[count[c]].push(c);
  }
  let res = [];
  // 0개는 무시해도 됨
  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
