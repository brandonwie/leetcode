function _dailyTemperatures(temperatures: number[]): number[] {
  type Temperature = number;
  type Index = number;
  const res = new Array(temperatures.length).fill(0);
  const stack: [Temperature, Index][] = [];

  for (let i = 0; i < temperatures.length; i++) {
    const currTemp = temperatures[i];
    while (stack.length && currTemp > stack[stack.length - 1][0]) {
      const [stackTemp, stackIdx] = stack.pop()!;
      res[stackIdx] = i - stackIdx;
    }
    stack.push([currTemp, i]);
  }

  return res;
}

function dailyTemperatures(temperatures: number[]): number[] {
  const res = Array(temperatures.length).fill(0);
  const stack: number[] = []; // indices of temperatures
  for (let i = temperatures.length - 1; i >= 0; i--) {
    // pop all the smaller temperatures while current temperature is larger or equal to the last temperature in the stack
    // because we need to find the colder temperature after the current temperature
    while (
      stack.length &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }

    // if exist, the index of the next warmer temperature is the top of the stack
    if (stack.length) {
      res[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  return res;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
