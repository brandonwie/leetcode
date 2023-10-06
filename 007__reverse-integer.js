/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let prefix = '';
  let str = '';
  let reversedStr = '';

  str = x.toString();
  if (str[0] === '-') {
    prefix = '-';
    str = str.slice(1);
  }
  console.log('prefix:', prefix);
  console.log('str:', str);

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr.concat(str[i]);
    console.log('reversedStr in for loop:', reversedStr);
  }

  console.log('reversedStr:', reversedStr);

  let trimmedStr = reversedStr;
  for (let i = 0; i < reversedStr.length; i++) {
    if (reversedStr[i] === '0') {
      trimmedStr = reversedStr.slice(i + 1);
    } else {
      break;
    }
  }
  console.log('prefix:', prefix);
  console.log('trimmedStr:', trimmedStr);

  let result = prefix + trimmedStr;
  console.log('result:', result);
  return Number(result);
};

let result = reverse(-123400);

console.log(result);
