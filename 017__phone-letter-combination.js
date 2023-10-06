/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  function dfs(digits, index, path, res, map) {
    if (index === digits.length) {
      res.push(path);
      return;
    }
    let arr = map[digits[index]];
    arr.forEach((v, i) => {
      console.log({ v, i });
      dfs(digits, index + 1, path + v, res, map);
    });
  }

  const letterMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  if (digits.length === 1) {
    return letterMap[digits];
  }

  const res = [];

  dfs(digits, 0, '', res, letterMap);
  return res;
};
