/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  if (s.length > 200 || s.length === 0) return 0;

  let str = s.trim();
  let prefix = '';
  let number = '';
  let idx = 0;
  // prefix setup
  if (str[idx] === '+' || str[idx] === '-') {
    prefix = str[0];
    idx++;
  }

  while (Boolean(Number(str[idx])) || str[idx] === '0') {
    number += str[idx];
    idx++;
  }

  if (number === '') return 0;

  let result = Number(prefix + number);
  if (result > 2 ** 31 - 1) result = 2 ** 31 - 1;
  if (result < (-2) ** 31) result = (-2) ** 31;
  return result;
};
