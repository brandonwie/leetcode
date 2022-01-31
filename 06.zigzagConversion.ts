// solution from https://www.youtube.com/watch?v=Q2Tw6gcVEwc&t=456s&ab_channel=NeetCode
function convert(s: string, numRows: number): string {
  if (s.length < 1 || s.length > 1000) return '';
  if (numRows == 1) return s;

  let res = '';
  // going row by row
  for (let row = 0; row < numRows; row++) {
    // to get to the next letter in the same row, we need to skip 2 * (numRows - 1)
    // distance we'll be jumpling each time increment
    let increment = 2 * (numRows - 1);

    for (let i = row; i < s.length; i += increment) {
      res += s[i]; // perfectly work for the first row and the last row

      // in-between values
      // row > 0 && row < numRows - 1 => in-between rows
      // i + increment - (2 * row) < s.length => check if the extra value in between is inbound
      if (row > 0 && row < numRows - 1 && i + increment - 2 * row < s.length) {
        res += s[i + increment - 2 * row];
      }
    }
  }
  // in-between chars => (numRows - 1) * 2 - (2 * r)
  return res;
}

let s = 'PAYPALISHIRING';
let numRows = 4;

const result = convert(s, numRows);

console.log(result);
