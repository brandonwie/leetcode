function isMatch(s, p) {
  // Top-Down Memoization

  // depth first search
  // i : index of s
  // j : index of p
  function dfs(i, j) {
    if (i >= s.length && j >= p.length) return true;
    if (j >= p.length) return false;

    let match = i < s.length && (s[i] == p[j] || p[j] === '.');
    // handle asterisk case
    if (j + 1 < p.length && p[j + 1] === '*') {
      return dfs(i, j + 2) || (match && dfs(i + 1, j));
    }

    if (match) return dfs(i + 1, j + 1);

    return false;
  }

  return dfs(0, 0);
}

// python cache 적용해보기
