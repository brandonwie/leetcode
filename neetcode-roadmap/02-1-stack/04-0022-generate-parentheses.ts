function generateParenthesis(n: number): string[] {
  // only add open if open < n
  // only add a closing parenthesis if closed < open
  // valid IIF open == closed == n
  let stack: string[] = [];
  let res: string[] = [];

  function backtrack(openCount: number, closedCount: number) {
    if (openCount === closedCount && closedCount === n) {
      res.push(stack.join(''));
    }

    if (openCount < n) {
      stack.push('(');
      backtrack(openCount + 1, closedCount);
      stack.pop();
    }

    if (closedCount < openCount) {
      stack.push(')');
      backtrack(openCount, closedCount + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);

  return res;
}

function _generateParenthesis(n: number): string[] {
  const res: string[] = [];
  function backtrack(s: string, openCount = 0, closedCount = 0) {
    if (openCount === closedCount && closedCount === n) {
      res.push(s);
    }

    if (openCount < n) {
      backtrack(`${s}(`, openCount + 1, closedCount);
    }

    if (closedCount < openCount) {
      backtrack(`${s})`, openCount, closedCount + 1);
    }
  }

  backtrack('');

  return res;
}
