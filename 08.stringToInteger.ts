function myAtoi(s: string): number {
  // ignore any leading whitespace
  let ts = s.trim();
  // check if the next char is '-' or '+'
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let signs = ['+', '-'];
  let prefix = '';
  let numberStr = '';
  for (let i = 0; i < ts.length; i++) {
    if (!(numbers.includes(ts[i]) || signs.includes(ts[i]))) {
      return 0;
    }

    if (signs.includes(ts[i])) {
      prefix = ts[i];
    } else {
      numberStr += ts[i];
    }
    // loop from the next elem
    let j = i + 1;
    while (ts[j] !== undefined && numbers.includes(ts[j])) {
      numberStr += ts[j];
      j++;
    }
    break;
  }
  // to remove zeros before concatenation
  let result = Number(prefix + String(Number(numberStr)));
  if (result > 2 ** 31 - 1) result = 2 ** 31 - 1;
  if (result < (-2) ** 31) result = (-2) ** 31;
  return result;
}

console.log(myAtoi('+-12'));
