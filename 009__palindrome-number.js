// Given an integer x, return true if x is a palindrome, and false otherwise.
/**
 * @param {number} x
 * @return {boolean}
 */
// num ver
var isPalindrome = function (x) {
  let rev = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) rev = rev * 10 + (i % 10);
  return rev === x;
};
// number
var isPlinedrome = function (x) {
  if (x < 0) return false;
  let divider = 1;
  // e.g. 12321
  while (x >= 10 * divider) {
    // increase divider until it matches the x's digit (will run until 10000)
    divider *= 10;
  }
  // run until the first digit
  while (x) {
    let mostSignificantDigit = Math.floor(x / divider); // 1 (first digit)
    let leastSignificantDigit = x % 10; // 1 (last digit)

    if (mostSignificantDigit !== leastSignificantDigit) return false;

    // remove the first and the last digits
    let mostSignificantDigitRemoved = x % divider; // 2321
    let leastSignificantDigitRemoved = Math.floor(
      mostSignificantDigitRemoved / 10
    ); // 232
    x = leastSignificantDigitRemoved;
    divider /= 100; // decrease two digits from the divider
  }

  return true;
};
