/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {}; // SC O(N)
  // iter TC O(N)
  for (let i = 0; i < strs.length; i++) {
    let s = [...strs[i]].sort().join(''); // TC O(MlogM), SC O(M) M = max str length
    if (map[s]) {
      map[s].push(strs[i]); // map population: TC O(1)
    } else {
      map[s] = [strs[i]];
    }
  }
  let res = []; // TC O(K) where K is the number of unique sorted array, SC O(K)
  for (const item in map) {
    res.push(map[item]);
  }
  return res;
};

// total of TC O(N*MlogM), SC (N + K + M) 대략 TC O(nlogn), SP O(n)
