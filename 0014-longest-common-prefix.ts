function longestCommonPrefix(strs: string[]): string {
  // errors
  if (strs.length > 200) {
    throw Error('invalid input');
  }
  // easy cases
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  // sort array O(n-log_n)
  const arr = strs.sort((a, b) => a.length - b.length);
  // compare two strings that have the least lengths
  const [first, second] = arr;
  const seen = incrementalTraversal(first, second);
  if (seen.size === 0) return '';

  // start from third one
  let i = 2;
  while (i < arr.length) {
    // 3번째 string부터 seen에 없으면 set에서 삭제
    seen.forEach((found) => {
      if (!arr[i].includes(found)) {
        seen.delete(found);
      }
    });
    i++;
  }

  switch (seen.size) {
    case 0:
      return '';
    case 1:
      return [...seen][0];
    default:
      return [...seen].sort((a, b) => b.length - a.length)[0];
  }
}

// 처음 두 string만 비교해서 seen에 저장하고 나머지는 traversal하면서 has만 비교
// 가장 짧은 string 기준으로 하면 쉽지만 traversal 추가됨
function incrementalTraversal(
  shortest: string,
  secondShortest: string
): Set<string> {
  console.log({ shortest, secondShortest });
  const seen = new Set<string>();
  let arr = shortest.split('');
  let i = 0;
  while (i < arr.length) {
    console.log('in while');
    arr.slice(i).reduce((acc, cur) => {
      let currStr = acc + cur;
      console.log({ currStr });
      if (secondShortest.includes(currStr)) {
        // seen에 저장
        seen.add(acc + cur);
      }
      return currStr;
    });

    i++;
  }
  return seen;
}
