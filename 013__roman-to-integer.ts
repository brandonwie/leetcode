function romanToInt(s: string): number {
  if (s.length < 1 || s.length > 15) {
    throw Error('Invalid string length');
  }

  let pairs: [string, number][] = [
    ['I', 1],
    ['IV', 4],
    ['V', 5],
    ['IX', 9],
    ['X', 10],
    ['XL', 40],
    ['L', 50],
    ['XC', 90],
    ['C', 100],
    ['CD', 400],
    ['D', 500],
    ['CM', 900],
    ['M', 1000],
  ];
  function setMap(pairs: Array<[string, number]>) {
    const map = new Map();
    pairs.forEach((pair) => map.set(pair[0], pair[1]));
    return map;
  }

  const map = setMap(pairs);
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    // check two at once
    if (map.has(s[i] + s[i + 1])) {
      result += map.get(s[i] + s[i + 1]);
      i++;
    } else {
      result += map.get(s[i]);
    }
  }

  return result;
}

romanToInt('III');
