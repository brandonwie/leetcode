// learned from
// https://www.youtube.com/watch?v=UuiTKBwPgAo&ab_channel=NeetCode

function maxArea(height: number[]): number {
  let maxArea = 0;
  // brute force will throw time out error

  // brute force
  // for (let i = 0; i < height.length; i++) {
  //   for (let j = i + 1; j < height.length; j++) {
  //     const area = Math.min(height[i], height[j]) * (j - i);
  //     if (area > maxArea) {
  //       maxArea = area;
  //     }
  //   }
  // }

  // use two pointers, from left and right
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    if (area > maxArea) {
      maxArea = area;
    }
    // shift the shorter line to the center
    // because the area is determined by the shorter line
    // therefore, to increase the area, we need to increase the shorter line
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return maxArea;
}
