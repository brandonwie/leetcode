/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return [...s].sort().join('') === [...t].sort().join('');
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  // guranteed to have the same length
  let countS = {},
    countT = {};

  for (const i in s) {
    countS[s[i]] = 1 + (countS[s[i]] === undefined ? 0 : countS[s[i]]);
    countT[t[i]] = 1 + (countT[t[i]] === undefined ? 0 : countT[t[i]]);
  }
  for (const k in countS) {
    if (countS[k] !== countT[k]) {
      return false;
    }
  }

  return true;
};
