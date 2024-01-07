let delimiter = '#';

function encode(stringArray) {
  let res = '';
  for (const s of stringArray) {
    res += String(s.length) + delimiter + s;
  }
  return res;
}

function decode(string) {
  let res = [];
  let i = 0;
  while (i < string.length) {
    let j = i;
    while (string[j] !== '#') {
      j++;
    }
    let length = Number(string.substring(i, j));
    res.push(string.substring(j + 1, j + 1 + length));
    i = j + 1 + length;
  }
  return res;
}

let encodedString = encode(['lint', 'code', 'love', 'you']);
console.log({ encodedString });
let decodedString = decode(encodedString);
console.log({ decodedString });

delimiter = '|-|';
function encode(sa) {
  let res = '';

  for (const s of sa) {
    res += s + delimiter;
  }

  return res;
}

function decode(s) {
  let res = [];

  for (let i = 0; i < s.length; i++) {
    s.findIndex;
  }
}

encodedString = encode(['lint', 'code', 'love', 'you']);
console.log({ encodedString });
decodedString = decode(encodedString);
console.log({ decodedString });
