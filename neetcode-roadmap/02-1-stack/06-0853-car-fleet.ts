// position 기준으로 도착하는 시간을 비교하여 오른쪽부터 계산하여 stack up O(nlogn) because of sorting based on position
// 현재 position 기준으로 정렬하여 계산하면 O(n) 가능, sorting에 O(nlogn) 소요
// 왼쪽부터 계산하는 경우에는 while loop을 사용하여 colision이 있는 경우 그 다음 차와 추가로 colide하는지 확인해야 하지만
// 오른쪽 부터 계산하는 경우에는 A-B-C 에서 BC가 colide하지 않는 경우 A는 확정적으로 colision이 일어나지 않는다.
function carFleet(target: number, position: number[], speed: number[]): number {
  const stack: number[] = [];
  const pair = position.map((pos, i) => [pos, speed[i]]);
  pair.sort((a, b) => a[0] - b[0]); // sort by position asc

  function timeTaken(target: number, position: number, speed: number): number {
    return (target - position) / speed;
  }

  for (let i = pair.length - 1; i >= 0; i--) {
    const [pos, speed] = pair[i];
    const curTimeTaken = timeTaken(target, pos, speed);
    const prevTimeTaken = stack[stack.length - 1];
    console.log({ curTimeTaken, stack });
    if (!stack.length || prevTimeTaken < curTimeTaken) {
      stack.push(curTimeTaken);
    }
  }

  return stack.length;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
