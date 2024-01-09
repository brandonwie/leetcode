function evalRPN(tokens: string[]): number {
  const stack: string[] = [];
  const operators = new Set(['+', '-', '*', '/']);

  function calc(a: number, b: number, op: string) {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return Math.trunc(a / b);
      default:
        throw new Error(`Unregistered operator: ${op}`);
    }
  }

  // when item meets operator, do the calc with prev values
  // prev values needs to be calculated and saved
  for (let i = 0; i < tokens.length; i++) {
    let curr = tokens[i];
    if (!operators.has(curr)) {
      stack.push(curr);
    } else {
      // pop last two values to do aritheamtics
      let secondValue = stack.pop();
      let firstValue = stack.pop();
      const res = calc(Number(firstValue), Number(secondValue), tokens[i]);
      stack.push(res.toString());
    }
  }
  return Number(stack[0]);
}

// Using map and add a function as value seems the most recognizable
const Operator = {
  '+': '+',
  '-': '-',
  '*': '*',
  '/': '/',
} as const;
function _evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const calcMap = new Map<string, (a: number, b: number) => number>([
    [Operator['+'], (a, b) => a + b],
    [Operator['-'], (a, b) => a - b],
    [Operator['*'], (a, b) => a * b],
    [Operator['/'], (a, b) => Math.trunc(a / b)],
  ]);

  for (const token of tokens) {
    if (calcMap.has(token)) {
      const a = stack.pop(); // last value pops first
      const b = stack.pop();

      if (a === undefined || b === undefined) throw new Error('Invalid input');

      stack.push(calcMap.get(token)!(b, a));
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}
