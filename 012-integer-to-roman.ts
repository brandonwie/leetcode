function intToRoman(num: number): string {
  let remainder = num;
  let result = '';
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  //! for in auto sort the numeric keys and it sucks
  for (let i = 0; i < numbers.length; i++) {
    // calc quotient
    const quotient = Math.floor(remainder / numbers[i]);
    if (quotient > 0) {
      // add target roman as many times as the quotient
      result += roman[i].repeat(quotient);
      // calc remainder
      remainder = remainder % numbers[i];
      // if no remainder, break the loop
      if (remainder === 0) {
        break;
      }
    } else {
      // if quotient is 0, move to the next number
      continue;
    }
  }

  return result;
}

// fastest, from https://leetcode.com/problems/integer-to-roman/submissions/873213178/
const THOUSANDS = ['M', 'MM', 'MMM'];
const HUNDREDS = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
const TENS = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const UNITS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

function intToRomanV2(num: number): string {
  let roman = '';

  const thousands = (num - (num % 1000)) / 1000;
  const hundreds = ((num % 1000) - (num % 100)) / 100;
  const tens = ((num % 100) - (num % 10)) / 10;
  const units = num % 10;

  roman += THOUSANDS[thousands - 1] || '';
  roman += HUNDREDS[hundreds - 1] || '';
  roman += TENS[tens - 1] || '';
  roman += UNITS[units - 1] || '';

  return roman;
}
